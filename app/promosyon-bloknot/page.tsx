import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPrintedNotepad } from "@/data/matbaaSubcategories";

const CATEGORY = "Matbaa Ürünleri";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-bloknot";
const title = "Promosyon Bloknot Modelleri ve Fiyatları";
const description = "Logo baskılı dik, tutkallı, taç kapaklı ve üstten spiralli promosyon bloknotları karşılaştırın. Kağıt, kapak ve adet bilgileriyle toptan teklif alın.";
const faqItems = [{"question": "Bu sayfada hangi bloknotlar bulunur?", "answer": "MTB-140 dik bloknot, MTB-150 üstten tutkallı, MTB-160 ve MTB-170 taç kapaklı, MTB-180 üstten spiralli modeller bulunur. Küp bloknotlar ayrı sayfada karşılaştırılır."}, {"question": "Bloknotlar kaç yaprak?", "answer": "MTB-140 için 100 yaprak; MTB-150, MTB-160, MTB-170 ve MTB-180 için 50 yaprak belirtilir."}, {"question": "MTB-140 ölçüsü kesin mi?", "answer": "Dış kutu 9 × 13 cm, iç sayfa 8,8 × 14 cm olarak verilmiştir. Ölçülerin birlikte uygunluğu sipariş öncesinde teyit edilmelidir."}, {"question": "MTB-160 ile MTB-170 farkı nedir?", "answer": "İkisi de 14 × 21 cm, 50 yaprak ve üstten perforaj bilgisiyle sunulur. MTB-170’de taç kapağa ek olarak yandan koruyucu kapak belirtilir."}, {"question": "Bloknotlar yapışkanlı notluk mu?", "answer": "Bu modellerde yapışkanlı not özelliği belirtilmez. Tutkallı cilt, yaprakların yapışkanlı not kağıdı olduğu anlamına gelmez."}, {"question": "Baskı fiyatı ve minimum sipariş nedir?", "answer": "Mevcut kayıtlarda sabit liste fiyatı bulunmaz. Baskı, adet, kapak ve tasarım kapsamıyla teklif alınır; minimum adet ve termin üretim planına göre belirlenir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isPrintedNotepad));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Matbaa Ürünleri",item:SITE_URL+"/promosyon-matbaa-urunleri"},
   {"@type":"ListItem",position:3,name:"Bloknot",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-matbaa-urunleri" className="underline">Matbaa Ürünleri</Link> / Bloknot</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Bloknot Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Dik masaüstü, üstten tutkallı, taç kapaklı ve üstten spiralli bloknotları kullanım biçimine göre karşılaştırın. Toplantı, eğitim ve kurumsal dağıtımlar için kağıt, kapak ve logo tasarımınızla teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-matbaa-urunleri" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Matbaa Ürünleri</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} bloknot modeli gösteriliyor</p>
  <section aria-label="Promosyon bloknot ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Bloknot</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
<h2 className="text-2xl font-bold text-white">Bloknot Seçerken Neler Karşılaştırılmalı?</h2>
<p>Dik masaüstü, üstten tutkallı, taç kapaklı ve üstten spiralli bloknotları kullanım biçimine göre karşılaştırın. Toplantı, eğitim ve kurumsal dağıtımlar için kağıt, kapak ve logo tasarımınızla teklif alın.</p>
<div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-sm"><caption className="sr-only">Bloknot model karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve kapasite</th><th scope="col" className="p-3">Yapı</th></tr></thead><tbody>{[["MTB-140", "100 yaprak; kesin ölçü teyit edilir", "Dik masaüstü; 120 gr 1. hamur"], ["MTB-150", "14 × 21 cm; 50 yaprak", "Üstten tutkallı; 80 gr 1. hamur"], ["MTB-160", "14 × 21 cm; 50 yaprak", "Taç kapak; üstten perforaj; 350 gr mat kuşe"], ["MTB-170", "14 × 21 cm; 50 yaprak", "Taç ve yandan kapak; üstten perforaj"], ["MTB-180", "14 × 21 cm; 50 yaprak", "Üstten spiral; 350 gr Amerikan Bristol kapak"]].map(([model,size,detail])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{size}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
<h3 className="text-xl font-bold text-white">Dik Masaüstü Bloknot ile Taşınabilir Modeller</h3>
<p>MTB-140, 100 yaprak ve 120 gr birinci hamur iç kağıtla dik masaüstü kullanımına yönelik sunulur. Ürün kaydında dış kutu 9 × 13 cm, iç sayfa 8,8 × 14 cm olarak verildiğinden bu ölçülerin birlikte uygunluğu sipariş öncesinde teyit edilmelidir. Kesin ölçüyü varsayarak paket veya tasarım hazırlamayın.</p>
<p>MTB-150, MTB-160, MTB-170 ve MTB-180 için belirtilen ölçü 14 × 21 cm, kapasite 50 yapraktır. Ortak ölçüye rağmen cilt ve kapak yapıları farklıdır. Toplantıda taşımak, eğitimde dağıtmak veya masada kullanmak için seçim yaparken bu ayrımı dikkate alın.</p>
<h3 className="text-xl font-bold text-white">Tutkallı, Perforajlı ve Spiralli Yapı</h3>
<p>MTB-150 üstten tutkallı ve karton alt destekli modeldir. MTB-160 taç kapak ile üstten perforajlı yapıyı; MTB-170 ise taç kapak ve yandan koruyucu kapağı üstten perforajla birleştirir. Bu modellerin sayfa ayırma ve kapak kullanım biçimleri aynı değildir.</p>
<p>MTB-180 üstten spiral ciltle sunulur. Sayfaları çevirerek not almak isteyenler için diğer ciltlerle karşılaştırılabilir. Spiral olması yapışkanlı not bölümü bulunduğu anlamına gelmez. Not kağıdı veya başka aksesuar isteniyorsa paket kapsamını ayrıca belirtin.</p>
<h3 className="text-xl font-bold text-white">Kağıt, Kapak ve Logo Tasarımı</h3>
<p>MTB-150–MTB-180 modellerinin iç kağıdı 80 gr birinci hamur olarak belirtilir. MTB-160 ve MTB-170 350 gr mat kuşe kapak; MTB-180 350 gr Amerikan Bristol kapak bilgisiyle sunulur. Mat veya parlak selefon seçeneklerini ilgili modelin baskı ve kapak kapsamıyla birlikte netleştirin.</p>
<p>Kapak ve iç sayfa baskısını ayrı tanımlayın. Logo dosyası, baskı yönü, renk sayısı ve istenen iletişim bilgileri fiyatlandırmadan önce belirlenir. Ürün ölçüsü kullanılabilir baskı alanı değildir; spiral, tutkal ve perforaj kenarları tasarım yerleşiminde dikkate alınır.</p>
<h3 className="text-xl font-bold text-white">Promosyon Bloknot Fiyatları ve Toplu Sipariş</h3>
<p>Mevcut ürün kayıtlarında sabit fiyat bulunmadığı için bu modellerde güncel teklif istenir. Adet, model, kapak, iç sayfa tasarımı ve paketleme talebi fiyatı belirler. Baskı, KDV ve teslimat kapsamını toplam teklifte açıkça netleştirin.</p>
<p>Minimum sipariş ve teslim süresi için sabit bir rakam verilmemiştir. Üretim planı, miktar ve tasarım onayına göre termin belirlenir. Teklif talebine logo dosyanızı, teslim yerini ve ihtiyaç tarihinizi ekleyin.</p>
<p>Diğer üretim seçenekleri için <Link href="/promosyon-matbaa-urunleri" className="font-semibold text-white underline">matbaa ürünlerini</Link>; farklı not alma ihtiyaçları için <Link href="/promosyon-kup-bloknot" className="font-semibold text-white underline">küp bloknotları</Link> inceleyebilirsiniz.</p>
</section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Bloknot Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
