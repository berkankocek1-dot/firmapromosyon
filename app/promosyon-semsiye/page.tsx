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
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(p => openingSlugs.has(p.slug)));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"İmalat Ürünler",item:SITE_URL+"/promosyon-imalat-urunler"},
   {"@type":"ListItem",position:3,name:"Şemsiye",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-imalat-urunler" className="underline">İmalat Ürünler</Link> / Şemsiye</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Şemsiye Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Sekiz telli baston ŞM-100 ve ışıklı otomatik ŞM-150 modellerini karşılaştırın. Kurumsal sipariş için adet, renk ve logo tasarımınızla güncel teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-imalat-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm İmalat Ürünleri</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} şemsiye modeli gösteriliyor</p>
  <section aria-label="Promosyon şemsiye ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Şemsiye</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Logo uygulaması ve minimum sipariş adedi teklifte netleştirilir.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Logo Baskılı Promosyon Şemsiye Nasıl Seçilir?</h2>
   <p>Promosyon şemsiye seçiminde taşıma biçimi, açma mekanizması ve logo yerleşimi birlikte değerlendirilir. Baston model arayan firmalar ŞM-100 modelini; otomatik aç/kapa ve fener işlevi isteyenler ŞM-150 modelini inceleyebilir. Kurumsal hediye veya açık hava etkinliği için seçiminizi kullanım amacı ve dağıtım adedine göre yapın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">Promosyon şemsiye modellerinin karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Yapı ve özellik</th><th scope="col" className="p-3">Logo uygulaması</th></tr></thead><tbody><tr className="border-t border-white/15"><th scope="row" className="p-3">ŞM-100</th><td className="p-3">8 telli baston şemsiye</td><td className="p-3">Yöntem ve alan tasarıma göre belirlenir</td></tr><tr className="border-t border-white/15"><th scope="row" className="p-3">ŞM-150</th><td className="p-3">Otomatik aç/kapa, fener; açık 610 mm, kapalı 320 mm</td><td className="p-3">Serigrafi / tampon, DTF</td></tr></tbody></table></div>
   <h3 className="text-xl font-bold text-white">ŞM-100 Sekiz Telli Baston Şemsiye</h3>
   <p>ŞM-100 sekiz telli baston yapısıyla sunulur. Firma renginiz ve logo yerleşiminiz sipariş sırasında planlanır. Baskı alanı, uygulama yöntemi ve güncel renk seçenekleri tasarım onayından önce netleştirilir. Kurumsal dağıtım için adet ve ihtiyaç tarihinizi teklif talebinize ekleyebilirsiniz.</p>
   <h3 className="text-xl font-bold text-white">ŞM-150 Işıklı Otomatik Şemsiye</h3>
   <p>ŞM-150 otomatik aç/kapa mekanizması ve fener işlevini bir araya getirir. Ürün bilgisinde açık ölçü 610 mm, kapalı ölçü 320 mm olarak belirtilir. Bu ölçüler logo alanı anlamına gelmez. Serigrafi, tampon ve DTF seçeneklerinin uygulanacağı yüzey ve logo boyutu tasarım üzerinden değerlendirilir.</p>
   <h3 className="text-xl font-bold text-white">Şemsiye Üzerine Logo Baskısı</h3>
   <p>Logo dosyanızı mümkünse vektörel biçimde paylaşın. Renk sayısı, baskı konumu ve baskı yapılacak bölüm sayısı fiyatlandırma öncesinde belirlenir. Küçük yazıların okunabilirliği gerçek uygulama boyutunda kontrol edilir. ŞM-100 için baskı yöntemi ve alanı ayrıca teyit edilir; ŞM-150 için belirtilen yöntemler her yüzeye uygulanabilir kabul edilmez.</p>
   <h3 className="text-xl font-bold text-white">Toptan Şemsiye Fiyatları ve Sipariş</h3>
   <p>Ürün kartları mevcut ürün kaydındaki fiyatı gösterir ve fiyatlara KDV eklenir. Baskının liste fiyatına dahil olduğu belirtilmediğinden logo uygulaması, paketleme ve sipariş kapsamı teklifte ayrıca netleştirilir. Minimum sipariş üretim planına göre belirlenir. ŞM-150 koli adedi 50 olarak belirtilmiştir; bu bilgi minimum sipariş miktarı değildir.</p>
   <p>Teklif talebinde model kodu, adet, renk tercihi, logo dosyası ve teslim yerini paylaşın. Termin stok, tasarım onayı ve uygulama planına göre belirlenir. Diğer seçenekler için <Link href="/promosyon-imalat-urunler" className="font-semibold text-white underline">imalat promosyon ürünlerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Şemsiye Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="semsiye-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="semsiye-secim-rehberi-baslik" className="text-xl font-bold !text-black">Şemsiye Seçimi ve Logo Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Taşıma biçimi, mekanizma ve ölçüleri karşılaştırın; panel yerleşimi, baskı yöntemi ve toplu sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-semsiye-secim-ve-baski-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Şemsiye Seçim ve Baskı Rehberini İncele →</Link>
      </section>
 </div>;
}
