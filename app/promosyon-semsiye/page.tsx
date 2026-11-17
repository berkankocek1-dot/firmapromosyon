import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
const openingSlugs = new Set(["promosyon-semsiye-sm-100", "promosyon-isikli-semsiye-sm-150"]);

const CATEGORY = "İmalat Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-semsiye";
const title = "Promosyon Şemsiye Modelleri ve Fiyatları";
const description = "Logo baskılı promosyon şemsiye modellerini karşılaştırın. ŞM-100 baston ve ŞM-150 ışıklı otomatik şemsiye için toptan sipariş teklifi alın.";
const faqItems = [{"question": "Hangi promosyon şemsiye modelleri bulunur?", "answer": "ŞM-100 sekiz telli baston şemsiye ve ŞM-150 ışıklı otomatik aç/kapa şemsiye modelleri bulunur."}, {"question": "ŞM-100 ile ŞM-150 arasındaki fark nedir?", "answer": "ŞM-100 sekiz telli baston modeldir. ŞM-150 otomatik aç/kapa ve fener özellikleriyle sunulur."}, {"question": "Şemsiyeye hangi yöntemle logo uygulanır?", "answer": "ŞM-150 için serigrafi, tampon ve DTF seçenekleri belirtilmiştir. ŞM-100 uygulama yöntemi ve alanı tasarım üzerinden belirlenir."}, {"question": "Şemsiye fiyatına baskı dahil mi?", "answer": "Baskının dahil olduğu belirtilmemiştir. Logo uygulaması ve fiyat kapsamı adet ve tasarıma göre teklifte netleştirilir. Fiyatlara KDV eklenir."}, {"question": "Minimum sipariş kaç adettir?", "answer": "Minimum sipariş üretim planına göre teklif aşamasında belirlenir. ŞM-150 için belirtilen 50 adet koli bilgisi minimum sipariş anlamına gelmez."}, {"question": "ŞM-150 ölçüleri ve teslim süresi nedir?", "answer": "Açık ölçü 610 mm, kapalı ölçü 320 mm olarak belirtilmiştir. Bu değerler baskı alanını belirtmez. Termin adet, stok ve logo uygulamasına göre netleştirilir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-semsiye-sm-100-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(p => openingSlugs.has(p.slug)));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"İmalat Ürünler",item:SITE_URL+"/promosyon-imalat-urunler"},
   {"@type":"ListItem",position:3,name:"Şemsiye",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-imalat-urunler" className="underline">İmalat Ürünler</Link> / Şemsiye</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Şemsiye Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Sekiz telli baston ŞM-100 ve ışıklı otomatik ŞM-150 modellerini karşılaştırın. Kurumsal sipariş için adet, renk ve logo tasarımınızla güncel teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-imalat-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm İmalat Ürünleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-semsiye-sm-100-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-semsiye-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:undefined}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Logo Baskılı Promosyon Şemsiye Nasıl Seçilir?</h2>
   <p>Promosyon şemsiye seçiminde taşıma biçimi, açma mekanizması ve logo yerleşimi birlikte değerlendirilir. Baston model arayan firmalar ŞM-100 modelini; otomatik aç/kapa ve fener işlevi isteyenler ŞM-150 modelini inceleyebilir. Kurumsal hediye veya açık hava etkinliği için seçiminizi kullanım amacı ve dağıtım adedine göre yapın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">Promosyon şemsiye modellerinin karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Yapı ve özellik</th><th scope="col" className="p-3">Logo uygulaması</th></tr></thead><tbody><tr className="border-t border-gray-200"><th scope="row" className="p-3">ŞM-100</th><td className="p-3">8 telli baston şemsiye</td><td className="p-3">Yöntem ve alan tasarıma göre belirlenir</td></tr><tr className="border-t border-gray-200"><th scope="row" className="p-3">ŞM-150</th><td className="p-3">Otomatik aç/kapa, fener; açık 610 mm, kapalı 320 mm</td><td className="p-3">Serigrafi / tampon, DTF</td></tr></tbody></table></div>
   <h3 className="text-xl font-bold text-black">ŞM-100 Sekiz Telli Baston Şemsiye</h3>
   <p>ŞM-100 sekiz telli baston yapısıyla sunulur. Firma renginiz ve logo yerleşiminiz sipariş sırasında planlanır. Baskı alanı, uygulama yöntemi ve güncel renk seçenekleri tasarım onayından önce netleştirilir. Kurumsal dağıtım için adet ve ihtiyaç tarihinizi teklif talebinize ekleyebilirsiniz.</p>
   <h3 className="text-xl font-bold text-black">ŞM-150 Işıklı Otomatik Şemsiye</h3>
   <p>ŞM-150 otomatik aç/kapa mekanizması ve fener işlevini bir araya getirir. Ürün bilgisinde açık ölçü 610 mm, kapalı ölçü 320 mm olarak belirtilir. Bu ölçüler logo alanı anlamına gelmez. Serigrafi, tampon ve DTF seçeneklerinin uygulanacağı yüzey ve logo boyutu tasarım üzerinden değerlendirilir.</p>
   <h3 className="text-xl font-bold text-black">Şemsiye Üzerine Logo Baskısı</h3>
   <p>Logo dosyanızı mümkünse vektörel biçimde paylaşın. Renk sayısı, baskı konumu ve baskı yapılacak bölüm sayısı fiyatlandırma öncesinde belirlenir. Küçük yazıların okunabilirliği gerçek uygulama boyutunda kontrol edilir. ŞM-100 için baskı yöntemi ve alanı ayrıca teyit edilir; ŞM-150 için belirtilen yöntemler her yüzeye uygulanabilir kabul edilmez.</p>
   <h3 className="text-xl font-bold text-black">Toptan Şemsiye Fiyatları ve Sipariş</h3>
   <p>Ürün kartları mevcut ürün kaydındaki fiyatı gösterir ve fiyatlara KDV eklenir. Baskının liste fiyatına dahil olduğu belirtilmediğinden logo uygulaması, paketleme ve sipariş kapsamı teklifte ayrıca netleştirilir. Minimum sipariş üretim planına göre belirlenir. ŞM-150 koli adedi 50 olarak belirtilmiştir; bu bilgi minimum sipariş miktarı değildir.</p>
   <p>Teklif talebinde model kodu, adet, renk tercihi, logo dosyası ve teslim yerini paylaşın. Termin stok, tasarım onayı ve uygulama planına göre belirlenir. Diğer seçenekler için <Link href="/promosyon-imalat-urunler" className="font-semibold text-black underline">imalat promosyon ürünlerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Şemsiye Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="semsiye-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="semsiye-secim-rehberi-baslik" className="text-xl font-bold !text-black">Şemsiye Seçimi ve Logo Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Taşıma biçimi, mekanizma ve ölçüleri karşılaştırın; panel yerleşimi, baskı yöntemi ve toplu sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-semsiye-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-semsiye-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Şemsiye Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon şemsiye seçiminde taşıma biçimi, açma mekanizması, ölçü ve logo yerleşimini değerlendirin. Baskı kapsamı, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
 </div></div>;
}
