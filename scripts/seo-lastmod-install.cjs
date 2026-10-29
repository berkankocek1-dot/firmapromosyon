const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
if(process.env.CI||process.env.VERCEL)process.exit(0);
function git(...args){return execFileSync('git',args,{encoding:'utf8'}).trim();}
try {
  const root=git('rev-parse','--show-toplevel');
  if(path.resolve(root)!==process.cwd())throw Error('Run from the project root.');
  if(!fs.existsSync('data/seo-lastmod.json'))require('./seo-lastmod.cjs').update({init:true});
  const hooks=path.resolve(git('rev-parse','--git-path','hooks'));fs.mkdirSync(hooks,{recursive:true});
  const hook=path.join(hooks,'pre-commit');
  const marker='# firmapromosyon-seo-lastmod-v1';
  const existing=fs.existsSync(hook)?fs.readFileSync(hook,'utf8'):'';
  if(!existing.includes(marker)) {
    const backup=hook+'.before-seo';
    if(existing&&fs.existsSync(backup))throw Error('Existing hook backup found; no hook was overwritten.');
    if(existing)fs.copyFileSync(hook,backup);
    const content=`#!/bin/sh\n${marker}\n# Preserve the previous hook and its exit status.\nprevious="$(git rev-parse --git-path hooks)/pre-commit.before-seo"\nif [ -f "$previous" ]; then\n  "$previous" "$@" || exit $?\nfi\nnode scripts/seo-lastmod.cjs --staged || exit $?\n`;
    fs.writeFileSync(hook,content,{mode:0o755});
    if(existing)fs.chmodSync(backup,0o755);
  }
  fs.chmodSync(hook,0o755);
  console.log('Automatic sitemap dates installed. Commit and push normally.');
}catch(e){console.error(e.message);process.exitCode=1;}
