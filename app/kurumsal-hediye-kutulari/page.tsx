import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isCorporateGiftBox } from "@/data/vipSubcategories";

const CATEGORY = "VIP Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/kurumsal-hediye-kutulari";
const title = "Kurumsal Hediye Kutuları Modelleri ve Fiyatları";
const description = "Kurumsal hediye kutularını ölçü, kapak ve dolgu kapsamıyla karşılaştırın. Logo baskılı kutu ve özel set yerleşimi için toptan teklif alın.";
const faqItems = [{"question": "Bu sayfadaki kutular dolu hediye seti mi?", "answer": "Hayır. Bu sayfa kutu ürünlerini karşılaştırır. Görselde bulunan defter, kalem, termos ve diğer ürünler kutu fiyatına dahil kabul edilmez; içerik ayrıca seçilir."}, {"question": "Kutu ölçüsü ürünlerimin sığacağını gösterir mi?", "answer": "Dış ölçü kullanılabilir iç yerleşim alanıyla aynı değildir. İç ölçü, kapak yüksekliği ve dolgu payı seçilen ürünlerle birlikte kontrol edilir."}, {"question": "Sünger veya kırpık kağıt dahil mi?", "answer": "Kapsam modele göre değişir. Ürün kartındaki bilgileri inceleyin; dolgu, iç sünger ve özel kesim bedelini sipariş öncesinde ayrıca teyit edin."}, {"question": "Kutulara logo uygulanabilir mi?", "answer": "Uygulama yöntemi ve alanı seçilen kutu yüzeyi ile tasarıma göre belirlenir. Kutu ölçüsünü baskı alanı olarak kabul etmeyin."}, {"question": "Minimum sipariş ve teslim süresi nedir?", "answer": "Minimum adet ve termin kutu, stok, miktar, dolgu ve logo onayına göre teklifte belirlenir. Fiyat bulunan kartlarda tutarlar baskı hariç TL + KDV olarak sunulur."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isCorporateGiftBox));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"VIP Ürünler",item:SITE_URL+"/promosyon-vip-urunler"},
   {"@type":"ListItem",position:3,name:"Kurumsal Hediye Kutuları",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-vip-urunler" className="underline">VIP Ürünler</Link> / Kurumsal Hediye Kutuları</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Kurumsal Hediye Kutuları Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Kendi kurumsal hediye paketinizi oluşturmak için kutuları ölçü, kapak ve iç yerleşim ihtiyacına göre karşılaştırın. Kutuya konacak ürünleri, dolgu ve logo uygulamasını ayrı planlayarak teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-vip-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm VIP Ürünler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} ürün gösteriliyor</p>
  <section aria-label="Promosyon kurumsal hediye kutuları ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Kurumsal Hediye Kutuları</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Kutu fiyatıdır. İç ürünler ayrıca fiyatlandırılır; baskı hariçtir.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
<h2 className="text-2xl font-bold text-white">Güncel Modelleri Karşılaştırın</h2>
<div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Kurumsal Hediye Kutuları model ve içerik karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ürün bilgileri</th></tr></thead><tbody>{list.map(p=><tr key={p.id} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold"><Link href={"/urunler/"+p.slug} className="underline">{p.title}</Link></th><td className="p-3">{p.shortDesc}</td></tr>)}</tbody></table></div>
<h3 className="text-xl font-bold text-white">Boş Kutu ile Hazır Hediye Setini Ayırın</h3>
<p>Kurumsal hediye kutusu, kendi ürün kombinasyonunuzu hazırlamak için seçilen ambalajdır. Kutunun görselinde kalem, defter veya farklı bir ürün bulunması bunların fiyata dahil olduğu anlamına gelmez. Kutu, içine konacak ürünler ve dolgu malzemelerini ayrı kalemler olarak planlayın.</p>
<p>Çalışan karşılama paketi, müşteri hediyesi veya etkinlik dağıtımı için önce ürünlerin ölçülerini belirleyin. Aynı kutuya farklı ürünler yerleştirilecekse her kombinasyonun iç düzenini ayrıca kontrol edin.</p>
<h3 className="text-xl font-bold text-white">Dış Ölçü, İç Alan ve Kapak Yüksekliği</h3>
<p>Dış kutu ölçüsü ile kullanılabilir iç hacim farklıdır. İç sünger, kırpık kağıt, bölücü ve kapak payı yerleşimi etkiler. Ürünleri yalnız üstten görünüşlerine göre değil, yükseklikleri ve kapak kapanışıyla birlikte değerlendirin.</p>
<p>Ölçüsü teyit gerektiren modellerde kesin yerleşim planı oluşturmadan önce güncel teknik bilgiyi alın. Birimlerin santimetre veya milimetre olduğunu kontrol edin; kutu ölçüsü aynı zamanda logo baskı alanı değildir.</p>
<h3 className="text-xl font-bold text-white">Mıknatıslı Kapak, Dolgu ve Logo Uygulaması</h3>
<p>Kapak biçimi ve yüzey malzemesi ürün bazında değerlendirilir. Bütün kutuların mıknatıslı olduğu veya aynı kaplama malzemesini kullandığı varsayılmamalıdır. Renk ve stok uygunluğunu ihtiyaç tarihinizle birlikte teyit edin.</p>
<p>Logo konumu, renk sayısı, uygulanabilir yöntem ve baskı alanı kutunun yüzeyine göre belirlenir. Sünger veya kırpık kağıdın dahil olup olmadığını, özel kesim ve yerleşim talebinizin bedelini ayrıca sorun. Logo dosyasını mümkünse vektörel biçimde paylaşın.</p>
<h3 className="text-xl font-bold text-white">Toptan Hediye Kutusu Fiyatı ve Sipariş</h3>
<p>Ürün kartındaki fiyat kutu kaydına aittir. Baskı, iç ürünler ve ek dolgu kapsamı ayrı netleştirilir; fiyatlara KDV eklenir. Aynı adet ve aynı içerik üzerinden teklifleri karşılaştırın.</p>
<p>Teklif talebine kutu modeli, adet, yerleştirilecek ürünler, logo ve teslim yerini ekleyin. Minimum sipariş ve termin stok, tasarım onayı ve uygulama planına göre belirlenir. Kutu ve iç ürünleri birlikte istiyorsanız toplam paket teklifini açıkça talep edin.</p>
<p>Diğer seçenekler için <Link href="/promosyon-vip-urunler" className="font-semibold text-white underline">VIP ürünlerini</Link> ve <Link href="/termoslu-kurumsal-hediye-setleri" className="font-semibold text-white underline">termoslu hazır hediye setlerini</Link> inceleyebilirsiniz.</p>
</section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Kurumsal Hediye Kutuları Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
