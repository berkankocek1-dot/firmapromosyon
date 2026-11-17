import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Matbaa Ürünleri",item:SITE_URL+"/promosyon-matbaa-urunleri"},
   {"@type":"ListItem",position:3,name:"Küp Bloknot",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-matbaa-urunleri" className="underline">Matbaa Ürünleri</Link> / Küp Bloknot</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Küp Bloknot Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Masaüstü not alma için 250, 375, 500 ve 750 yapraklı küp bloknotları karşılaştırın. Ürün yüksekliği, iç kağıt ve dış kutu özelliklerini dağıtım adediniz ve logo tasarımınızla birlikte değerlendirin.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-matbaa-urunleri" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Matbaa Ürünleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-250-yaprakli-kup-bloknot-mtb-100-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-kup-bloknot-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
<h2 className="text-2xl font-bold text-black">Küp Bloknot Seçerken Neler Karşılaştırılmalı?</h2>
<p>Masaüstü not alma için 250, 375, 500 ve 750 yapraklı küp bloknotları karşılaştırın. Ürün yüksekliği, iç kağıt ve dış kutu özelliklerini dağıtım adediniz ve logo tasarımınızla birlikte değerlendirin.</p>
<div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-sm"><caption className="sr-only">Küp Bloknot model karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve kapasite</th><th scope="col" className="p-3">Yapı</th></tr></thead><tbody>{[["MTB-100", "8 × 8 × 3 cm; 250 yaprak", "80 gr 1. hamur; 350 gr Amerikan Bristol kutu"], ["MTB-110", "8 × 8 × 4 cm; 375 yaprak", "80 gr 1. hamur; 300 gr Amerikan Bristol kutu"], ["MTB-120", "8 × 8 × 5 cm; 500 yaprak", "80 gr 1. hamur; 350 gr Amerikan Bristol kutu"], ["MTB-130", "8 × 8 × 8 cm; 750 yaprak", "80 gr 1. hamur; 350 gr Amerikan Bristol kutu"]].map(([model,size,detail])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{size}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
<h3 className="text-xl font-bold text-black">Yaprak Kapasitesi ve Masaüstü Alanı</h3>
<p>Dört modelin belirtilen taban ölçüsü 8 × 8 cm’dir; yükseklik ve yaprak kapasitesi değişir. MTB-100 250 yapraklı daha alçak gövde sunarken MTB-130 750 yaprakla daha yüksek bir kutuya sahiptir. MTB-110 ve MTB-120 ara kapasite seçenekleridir. Seçimi günlük not kullanımına, masa alanına ve hediye paketinin boyutuna göre yapın.</p>
<p>Yaprak adedinden kesin kullanım süresi çıkarılamaz. Kullanım sıklığına göre aynı bloknot farklı sürelerde tükenir. Dağıtım planında yalnız en yüksek yaprak sayısını değil, taşıma ve paketleme ihtiyacını da değerlendirin.</p>
<h3 className="text-xl font-bold text-black">İç Kağıt, Dış Kutu ve Selefon</h3>
<p>Modellerde iç kağıt 80 gr birinci hamur olarak belirtilir. Dış kutu MTB-110 için 300 gr; MTB-100, MTB-120 ve MTB-130 için 350 gr Amerikan Bristol’dür. Kutu gramajını iç not kağıdının gramajıyla karıştırmayın.</p>
<p>Mat veya parlak selefon seçenekleri dış kutu tasarımıyla birlikte değerlendirilir. Bu ürünler otomatik olarak yapışkanlı not kağıdı sayılmaz; yapışkanlı içerik ihtiyacınız varsa sipariş öncesinde ayrıca belirtin.</p>
<h3 className="text-xl font-bold text-black">Logo Yerleşimi ve Baskı Kapsamı</h3>
<p>Dış kutu ve iç yaprak tasarımını ayrı planlayın. Logo, iletişim bilgileri ve kurumsal renklerin uygulanacağı yüzeyler ile baskı yönü teklif sırasında belirlenir. Logo dosyasını mümkünse vektörel biçimde iletin; küçük yazıların okunabilirliğini gerçek ölçüde kontrol edin.</p>
<p>Belirtilen ürün ölçüsü baskı alanının tamamı anlamına gelmez. Kesim, katlama ve taşma payları tasarım aşamasında netleştirilir. Baskı yöntemi ve renk kapsamı siparişe göre teyit edilir.</p>
<h3 className="text-xl font-bold text-black">Toptan Küp Bloknot Fiyatı ve Teslimat</h3>
<p>Bu dört ürünün mevcut kayıtlarında sabit liste fiyatı bulunmadığından ürün kartlarında teklif çağrısı gösterilir. Adet, model, kutu kaplaması, iç yaprak ve dış kutu tasarımıyla güncel teklif alın. Baskı, KDV, ambalaj ve teslimat kapsamını toplam teklifte netleştirin.</p>
<p>Minimum sipariş ve termin için doğrulanmış sabit bir değer belirtilmemiştir. Tasarım onayı, miktar ve üretim planına göre teslim tarihi belirlenir. Bir etkinlik için sipariş veriyorsanız ihtiyaç tarihinizi ve teslim yerini baştan paylaşın.</p>
<p>Diğer üretim seçenekleri için <Link href="/promosyon-matbaa-urunleri" className="font-semibold text-black underline">matbaa ürünlerini</Link>; farklı not alma ihtiyaçları için <Link href="/promosyon-bloknot" className="font-semibold text-black underline">diğer bloknot modellerini</Link> inceleyebilirsiniz.</p>
</section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Küp Bloknot Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="bloknot-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="bloknot-rehberi-baslik" className="text-xl font-bold !text-black">Bloknot ve Küp Bloknot Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Cilt, kutu, yaprak ve ölçü bilgilerini karşılaştırın; kapak ve iç sayfa tasarımını ayrı değerlendirerek baskı kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-bloknot-kup-bloknot-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-bloknot-kup-bloknot-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Bloknot ve Küp Bloknot Seçim Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Bloknot ve küp bloknotları kullanım, cilt, yaprak, kutu ve baskı kapsamıyla karşılaştırın. İç sayfa ile kapak tasarımını ayrı planlayıp üretim onayını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
 </div></div>;
}
