import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isCubeNotepad } from "@/data/matbaaSubcategories";

const CATEGORY = "Matbaa Ürünleri";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-kup-bloknot";
const title = "Promosyon Küp Bloknot Modelleri ve Fiyatları";
const description = "250, 375, 500 ve 750 yapraklı logo baskılı promosyon küp bloknotları karşılaştırın. Kutu, kağıt ve tasarım kapsamıyla toptan fiyat teklifi alın.";
const faqItems = [{"question": "Hangi küp bloknot kapasiteleri var?", "answer": "MTB-100 250, MTB-110 375, MTB-120 500 ve MTB-130 750 yaprak olarak belirtilir."}, {"question": "Modellerin ölçüleri nedir?", "answer": "MTB-100 8 × 8 × 3 cm; MTB-110 8 × 8 × 4 cm; MTB-120 8 × 8 × 5 cm; MTB-130 8 × 8 × 8 cm ölçüsündedir."}, {"question": "İç kağıt ve kutu gramajı aynı mı?", "answer": "Hayır. İç kağıt 80 gr birinci hamurdur. Kutu MTB-110’da 300 gr; diğer üç modelde 350 gr Amerikan Bristol olarak belirtilir."}, {"question": "Küp bloknot yaprakları yapışkanlı mı?", "answer": "Ürün kayıtlarında yapışkanlı yaprak özelliği belirtilmez. Bu ihtiyaç ayrıca teyit edilir."}, {"question": "Logo baskısı ve fiyat nasıl belirlenir?", "answer": "Kutu ve iç yaprak tasarımı, baskı yöntemi, adet ve kaplama üzerinden teklif hazırlanır. Mevcut kayıtlarda sabit liste fiyatı bulunmaz."}, {"question": "Minimum sipariş ve teslim süresi nedir?", "answer": "Minimum adet ve termin sipariş kapsamı ve üretim planına göre teklif aşamasında belirlenir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isCubeNotepad));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Matbaa Ürünleri",item:SITE_URL+"/promosyon-matbaa-urunleri"},
   {"@type":"ListItem",position:3,name:"Küp Bloknot",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-matbaa-urunleri" className="underline">Matbaa Ürünleri</Link> / Küp Bloknot</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Küp Bloknot Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Masaüstü not alma için 250, 375, 500 ve 750 yapraklı küp bloknotları karşılaştırın. Ürün yüksekliği, iç kağıt ve dış kutu özelliklerini dağıtım adediniz ve logo tasarımınızla birlikte değerlendirin.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-matbaa-urunleri" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Matbaa Ürünleri</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} küp bloknot modeli gösteriliyor</p>
  <section aria-label="Promosyon küp bloknot ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Küp Bloknot</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
<h2 className="text-2xl font-bold text-white">Küp Bloknot Seçerken Neler Karşılaştırılmalı?</h2>
<p>Masaüstü not alma için 250, 375, 500 ve 750 yapraklı küp bloknotları karşılaştırın. Ürün yüksekliği, iç kağıt ve dış kutu özelliklerini dağıtım adediniz ve logo tasarımınızla birlikte değerlendirin.</p>
<div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-sm"><caption className="sr-only">Küp Bloknot model karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve kapasite</th><th scope="col" className="p-3">Yapı</th></tr></thead><tbody>{[["MTB-100", "8 × 8 × 3 cm; 250 yaprak", "80 gr 1. hamur; 350 gr Amerikan Bristol kutu"], ["MTB-110", "8 × 8 × 4 cm; 375 yaprak", "80 gr 1. hamur; 300 gr Amerikan Bristol kutu"], ["MTB-120", "8 × 8 × 5 cm; 500 yaprak", "80 gr 1. hamur; 350 gr Amerikan Bristol kutu"], ["MTB-130", "8 × 8 × 8 cm; 750 yaprak", "80 gr 1. hamur; 350 gr Amerikan Bristol kutu"]].map(([model,size,detail])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{size}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
<h3 className="text-xl font-bold text-white">Yaprak Kapasitesi ve Masaüstü Alanı</h3>
<p>Dört modelin belirtilen taban ölçüsü 8 × 8 cm’dir; yükseklik ve yaprak kapasitesi değişir. MTB-100 250 yapraklı daha alçak gövde sunarken MTB-130 750 yaprakla daha yüksek bir kutuya sahiptir. MTB-110 ve MTB-120 ara kapasite seçenekleridir. Seçimi günlük not kullanımına, masa alanına ve hediye paketinin boyutuna göre yapın.</p>
<p>Yaprak adedinden kesin kullanım süresi çıkarılamaz. Kullanım sıklığına göre aynı bloknot farklı sürelerde tükenir. Dağıtım planında yalnız en yüksek yaprak sayısını değil, taşıma ve paketleme ihtiyacını da değerlendirin.</p>
<h3 className="text-xl font-bold text-white">İç Kağıt, Dış Kutu ve Selefon</h3>
<p>Modellerde iç kağıt 80 gr birinci hamur olarak belirtilir. Dış kutu MTB-110 için 300 gr; MTB-100, MTB-120 ve MTB-130 için 350 gr Amerikan Bristol’dür. Kutu gramajını iç not kağıdının gramajıyla karıştırmayın.</p>
<p>Mat veya parlak selefon seçenekleri dış kutu tasarımıyla birlikte değerlendirilir. Bu ürünler otomatik olarak yapışkanlı not kağıdı sayılmaz; yapışkanlı içerik ihtiyacınız varsa sipariş öncesinde ayrıca belirtin.</p>
<h3 className="text-xl font-bold text-white">Logo Yerleşimi ve Baskı Kapsamı</h3>
<p>Dış kutu ve iç yaprak tasarımını ayrı planlayın. Logo, iletişim bilgileri ve kurumsal renklerin uygulanacağı yüzeyler ile baskı yönü teklif sırasında belirlenir. Logo dosyasını mümkünse vektörel biçimde iletin; küçük yazıların okunabilirliğini gerçek ölçüde kontrol edin.</p>
<p>Belirtilen ürün ölçüsü baskı alanının tamamı anlamına gelmez. Kesim, katlama ve taşma payları tasarım aşamasında netleştirilir. Baskı yöntemi ve renk kapsamı siparişe göre teyit edilir.</p>
<h3 className="text-xl font-bold text-white">Toptan Küp Bloknot Fiyatı ve Teslimat</h3>
<p>Bu dört ürünün mevcut kayıtlarında sabit liste fiyatı bulunmadığından ürün kartlarında teklif çağrısı gösterilir. Adet, model, kutu kaplaması, iç yaprak ve dış kutu tasarımıyla güncel teklif alın. Baskı, KDV, ambalaj ve teslimat kapsamını toplam teklifte netleştirin.</p>
<p>Minimum sipariş ve termin için doğrulanmış sabit bir değer belirtilmemiştir. Tasarım onayı, miktar ve üretim planına göre teslim tarihi belirlenir. Bir etkinlik için sipariş veriyorsanız ihtiyaç tarihinizi ve teslim yerini baştan paylaşın.</p>
<p>Diğer üretim seçenekleri için <Link href="/promosyon-matbaa-urunleri" className="font-semibold text-white underline">matbaa ürünlerini</Link>; farklı not alma ihtiyaçları için <Link href="/promosyon-bloknot" className="font-semibold text-white underline">diğer bloknot modellerini</Link> inceleyebilirsiniz.</p>
</section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Küp Bloknot Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
