/* Page fingerprints are committed with the content, never reset by deployment. */
const fs = require('node:fs');
const path = require('node:path').posix;
const crypto = require('node:crypto');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');
const MANIFEST = 'data/seo-lastmod.json';
const FORMAT_VERSION = 2;
const normalizeText = text => text.replace(/\r\n?/g, '\n');
const git = (...args) => execFileSync('git', args, {encoding:'utf8', maxBuffer:100*1024*1024});
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const blob = bytes => crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${bytes.length}\0`),bytes])).digest('hex');
function source(staged, revision=null) {
  const files = new Map(), cache = new Map();
  if (revision) {
    for(const line of git('ls-tree','-r','-z',revision).split('\0').filter(Boolean)) {
      const m=line.match(/^\d+ blob ([a-f0-9]+)\t([\s\S]+)$/); if(m)files.set(m[2],m[1]);
    }
  } else if (staged) {
    for (const line of git('ls-files','--stage','-z').split('\0').filter(Boolean)) {
      const m = line.match(/^\d+ ([a-f0-9]+) (\d)\t([\s\S]+)$/);
      if (!m || m[2] !== '0') throw Error('Resolve Git conflicts before updating sitemap dates.');
      files.set(m[3],m[1]);
    }
  } else {
    const walk = dir => { if (!fs.existsSync(dir)) return; for (const d of fs.readdirSync(dir,{withFileTypes:true})) {
      const p = `${dir}/${d.name}`; if(d.isDirectory()) walk(p); else files.set(p,null);
    }};
    for(const d of ['app','data','lib','components','utils','public']) walk(d);
  }
  const read = file => {
    if(!files.has(file)) throw Error(`Missing source: ${file}`);
    if(!cache.has(file)) cache.set(file, normalizeText(revision ? git('show',`${revision}:${file}`) : staged ? git('show',`:${file}`) : fs.readFileSync(file,'utf8')));
    return cache.get(file);
  };
  const asset = file => {
    if(!files.has(file))return null;
    // Git may normalize text assets as well as TSX sources. Binary assets stay byte-exact.
    if(/\.(svg|css|txt|json|webmanifest|xml|html|js|mjs)$/i.test(file))return blob(Buffer.from(read(file),'utf8'));
    return files.get(file) || blob(fs.readFileSync(file));
  };
  return {files,read,asset};
}
function calculate(src) {
  const modules = new Map();
  const resolve = (from, name) => {
    if(!name.startsWith('.') && !name.startsWith('@/')) return null;
    const base = name.startsWith('@/') ? name.slice(2) : path.normalize(path.join(path.dirname(from),name));
    return [base, ...['.ts','.tsx','.js','.jsx','.json','.css','/index.ts','/index.tsx'].map(e=>base+e)].find(p=>src.files.has(p)) || null;
  };
  const load = file => {
    if(modules.has(file)) return modules.get(file).exports;
    const mod = {exports:{}}; modules.set(file,mod);
    const js = ts.transpileModule(src.read(file),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
    vm.runInNewContext(`(function(require,module,exports){${js}\n})`,{}, {timeout:5000})(name=>{
      const target=resolve(file,name); if(!target) throw Error(`Unsupported data import ${name}`); return load(target);
    },mod,mod.exports);
    return mod.exports;
  };
  const products = load('data/products.ts').products;
  const {isProductVisible} = load('data/productVisibility.ts');
  const {getCategoryLandingHref} = load('data/categoryLandingPages.ts');
  const guides = load('data/guides.ts').guides;
  const {sortProductsByCode} = load('data/productSorting.ts');
  const special = new Set(['data/products.ts','data/productVisibility.ts','data/guides.ts']);
  const dynamicGuide = 'app/rehber/[slug]/page.tsx';
  let embeddedGuides = [], guideTemplate;
  if(src.files.has(dynamicGuide)) {
    const text=src.read(dynamicGuide), ast=ts.createSourceFile(dynamicGuide,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
    for(const statement of ast.statements) if(ts.isVariableStatement(statement)) for(const d of statement.declarationList.declarations) {
      if(d.name.getText(ast)==='guides' && d.initializer) {
        embeddedGuides=vm.runInNewContext('('+d.initializer.getText(ast)+')',{}, {timeout:5000});
        guideTemplate=text.slice(0,d.initializer.pos)+' [] '+text.slice(d.initializer.end);
      }
    }
  }
  const graphCache = new Map();
  function graph(entry) {
    if(graphCache.has(entry)) return graphCache.get(entry);
    const code = new Map(), assets = new Map(), seen = new Set();
    function visit(file) {
      if(seen.has(file) || special.has(file) || file===MANIFEST) return;
      seen.add(file);
      const text = file===dynamicGuide && guideTemplate ? guideTemplate : src.read(file);
      // Printer removes comments/formatting from TS/TSX before fingerprinting.
      const ast=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
      code.set(file, file.endsWith('.css') ? text.replace(/\r\n/g,'\n') : ts.createPrinter({removeComments:true,newLine:ts.NewLineKind.LineFeed}).printFile(ast));
      function scan(n) {
        if((ts.isImportDeclaration(n)||ts.isExportDeclaration(n)) && n.moduleSpecifier && ts.isStringLiteral(n.moduleSpecifier)) {
          const target=resolve(file,n.moduleSpecifier.text); if(target) visit(target);
        }
        if(ts.isStringLiteralLike(n) && n.text.startsWith('/')) {
          const p='public'+n.text.split(/[?#]/)[0]; if(src.files.has(p)) assets.set(p,src.asset(p));
        }
        ts.forEachChild(n,scan);
      }
      scan(ast);
    }
    visit(entry);
    // Layouts and their imported UI/styles affect their descendant pages.
    let dir=path.dirname(entry);
    while(dir==='app'||dir.startsWith('app/')) {
      for(const name of ['layout.tsx','layout.ts','template.tsx']) if(src.files.has(`${dir}/${name}`)) visit(`${dir}/${name}`);
      if(dir==='app') break; dir=path.dirname(dir);
    }
    const result={code:[...code].sort(),assets:[...assets].sort()}; graphCache.set(entry,result);return result;
  }
  function dataAssets(value) {
    const assets=new Map();
    const visit=v=>{ if(typeof v==='string' && v.startsWith('/')) {const f='public'+v.split(/[?#]/)[0];if(src.files.has(f))assets.set(f,src.asset(f));}
      else if(Array.isArray(v))v.forEach(visit);else if(v&&typeof v==='object')Object.values(v).forEach(visit); };
    visit(value);return [...assets].sort();
  }
  const result={};
  const add=(route,entry,data)=>{result[route]=sha(JSON.stringify([graph(entry),data,dataAssets(data)]));};
  const visible=products.filter(isProductVisible);
  for(const file of [...src.files.keys()].sort()) {
    if(!/^app\/(?:.*\/)?page\.(tsx|ts|jsx|js)$/.test(file) || file.includes('['))continue;
    const route='/'+file.replace(/^app\//,'').replace(/(?:\/)?page\.(tsx|ts|jsx|js)$/,'');
    const text=src.read(file);let data=null;
    if(route.startsWith('/promosyon-')) {
      const category = text.match(/const\s+CATEGORY(?:_NAME)?\s*=\s*["']([^"']+)["']/)?.[1] || (route==='/promosyon-matara'?'Matara':null);
      if(!category) throw Error(`Category scope missing: ${route}`);
      const usesVisible=/from\s*["']@\/data\/productVisibility["']/.test(text);
      data=sortProductsByCode((usesVisible?visible:products).filter(p=>p.category===category));
    } else if(route==='/urunler'||route==='/') data=visible;
    else if(route==='/rehber') data=guides;
    add(route,file,data);
  }
  for(const p of products) {
    const peers=products.filter(q=>q.category===p.category && (q.slug===p.slug||isProductVisible(q)));
    const idx=peers.findIndex(q=>q.slug===p.slug);
    const related=Array.from({length:Math.min(8,Math.max(0,peers.length-1))},(_,i)=>peers[(idx+i+1)%peers.length]);
    add(`/urunler/${p.slug}`,'app/urunler/[slug]/page.tsx',{product:p, related:related.map(q=>({slug:q.slug,title:q.title,image:q.image,price:q.price})),categoryHref:getCategoryLandingHref(p.category)});
  }
  for(const g of guides) {
    const route=`/rehber/${g.slug}`;if(result[route])continue;
    const full=embeddedGuides.find(x=>x.slug===g.slug);
    if(!full)throw Error(`Guide source missing: ${g.slug}`);
    add(route,dynamicGuide,{guide:full,related:embeddedGuides.filter(x=>x.slug!==g.slug).slice(0,3).map(x=>({slug:x.slug,title:x.title,description:x.description,image:x.image}))});
  }
  return result;
}
function update({staged=false,init=false,check=false,repair=false}={}) {
  const src=source(staged), hashes=calculate(src);
  let previous=src.files.has(MANIFEST)?JSON.parse(src.read(MANIFEST)):{version:FORMAT_VERSION,pages:{}};
  if(repair) {
    if(staged||check||init)throw Error('Use --repair by itself.');
    const committed=source(false,'HEAD');
    if(!committed.files.has(MANIFEST))throw Error('No committed date manifest exists. Nothing was changed.');
    const saved=JSON.parse(committed.read(MANIFEST));
    if(!saved.pages || ![1,FORMAT_VERSION].includes(saved.version))throw Error('Unsupported committed manifest. Nothing was changed.');
    const committedHashes=calculate(committed);
    previous={version:FORMAT_VERSION,pages:{}};
    for(const route of Object.keys(committedHashes)) {
      const date=saved.pages[route]?.lastModified;
      previous.pages[route]={hash:committedHashes[route],...(date?{lastModified:date}:{})};
    }
  } else if(previous.version!==FORMAT_VERSION) {
    throw Error('Date format requires a one-time repair. Run node scripts/seo-lastmod.cjs --repair before continuing.');
  }
  const pages={}, changed=[]; const now=new Date().toISOString();
  let headHashes=null;
  if(init) {
    try {headHashes=calculate(source(false,'HEAD'));}
    catch(e) {console.log('Historical baseline unavailable; unknown dates will be omitted.');}
  }
  for(const route of Object.keys(hashes).sort()) {
    const old=previous.pages[route];
    if(old?.hash===hashes[route]) pages[route]=old;
    else { pages[route]={hash:hashes[route],...(!init || (headHashes && headHashes[route]!==hashes[route]) ? {lastModified:now}:{})};changed.push(route); }
  }
  if(check) {
    if(changed.length || Object.keys(previous.pages).some(p=>!pages[p])) throw Error('Sitemap dates are stale. Run npm run seo:dates and commit data/seo-lastmod.json with the content.');
    console.log(`Sitemap dates verified: ${Object.keys(pages).length} pages.`);return;
  }
  const output=JSON.stringify({version:FORMAT_VERSION,pages},null,2)+'\n';
  if(!fs.existsSync(MANIFEST)||fs.readFileSync(MANIFEST,'utf8')!==output)fs.writeFileSync(MANIFEST,output);
  if(staged)git('add','--',MANIFEST);
  console.log(`Sitemap: ${Object.keys(pages).length} pages, ${init?'baseline (no invented dates)':changed.length+' changed'}.`);
  return {pages,changed};
}
module.exports={source,calculate,update};
if(require.main===module) {
  try {const args=process.argv.slice(2);update({staged:args.includes('--staged'),init:args.includes('--init'),repair:args.includes('--repair'),check:args.includes('--check')||(args.includes('--build')&&!!(process.env.CI||process.env.VERCEL))});}
  catch(e){console.error(e.message);process.exitCode=1;}
}
