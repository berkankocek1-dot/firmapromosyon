import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isSpiralNotepad } from "@/data/spiralNotepadSubcategories";

const CATEGORY = "Geri Dönüşümlü Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-spiralli-notluk";
const title = "Promosyon Spiralli Notluk Modelleri ve Fiyatları";
const description = "Logo baskılı promosyon spiralli notluk ve not defteri modellerini ölçü, sayfa ve yapışkanlı not içeriğiyle karşılaştırın. Toptan sipariş için teklif alın.";
const faqItems = [{"question": "Hangi spiralli notluk modelleri bulunur?", "answer": "GD-110, GD-120, GD-140, GD-150, GD-160, GD-170 ve GD-210 modelleri listelenir. Dikişli GD-100 bu gruba dahil değildir."}, {"question": "Sayfa ve yaprak sayısı aynı şey mi?", "answer": "Hayır. GD-110 için 140 sayfa; GD-150 ve GD-210 için 150 sayfa belirtilir. GD-120 için 90 yaprak; GD-140 ve GD-170 için 100 yaprak belirtilir. GD-160 kaydındaki 70’li not kağıdı ifadesi ayrıca teyit edilir."}, {"question": "Her spiralli notlukta yapışkanlı not bölümü var mı?", "answer": "Hayır. GD-150, GD-170 ve GD-210 için yapışkanlı notluk bulunduğu açıkça belirtilmiştir. Diğer modellerin paket içeriği ayrıca kontrol edilir."}, {"question": "Kalem notluk fiyatına dahil mi?", "answer": "GD-140 ve GD-160 için kalem aksesuar olarak belirtilir ve standart içeriğe dahil değildir. GD-110 ve GD-210’da kalem tutucu bulunması kalemin de dahil olduğu anlamına gelmez."}, {"question": "Hangi logo baskısı uygulanabilir?", "answer": "GD-110, GD-150, GD-170 ve GD-210 için UV ve serigrafi; GD-120, GD-140 ve GD-160 için serigrafi ve dijital baskı seçenekleri belirtilir. Uygulanabilir alan tasarım üzerinden teyit edilir."}, {"question": "Minimum sipariş ve teslim süresi nedir?", "answer": "Minimum adet ve termin model, stok, miktar ve logo onayına göre teklifte belirlenir. GD-140 için verilen 40 adet koli bilgisi minimum sipariş anlamına gelmez. Kartlardaki fiyatlar baskı hariç TL + KDV olarak sunulur."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(isSpiralNotepad));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Geri Dönüşümlü Ürünler",item:SITE_URL+"/promosyon-geri-donusumlu-urunler"},
   {"@type":"ListItem",position:3,name:"Spiralli Notluklar",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-geri-donusumlu-urunler" className="underline">Geri Dönüşümlü Ürünler</Link> / Spiralli Notluklar</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Spiralli Notluk Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Spiralli notluk ve not defterlerini ölçü, kapak, kağıt ve not bölümlerine göre karşılaştırın. Toplantı, eğitim ve kurumsal dağıtımlar için logo uygulaması ve sipariş adedinizle güncel teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-geri-donusumlu-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Geri Dönüşümlü Ürünler</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-spiralli-notluk-gd-110-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-spiralli-notluk-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Promosyon Spiralli Notluk ve Not Defteri Nasıl Seçilir?</h2>
   <p>Spiralli notluk seçerken yalnız kapak görünümünü değil, yazı alanını ve iç bölümleri de karşılaştırın. Toplantılarda uzun notlar için daha geniş ölçüler; taşınabilirlik için küçük gövdeler değerlendirilebilir. Yapışkanlı not bölümü, kalem tutucu ve aksesuar kapsamı modele göre değişir. Bu sayfa spiral yapısı belirtilen GD serisi modelleri bir araya getirir.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><caption className="sr-only">Spiralli notluk modellerinin ölçü ve içerik karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü</th><th scope="col" className="p-3">Belirtilen içerik</th></tr></thead><tbody>{[
    ["GD-110", "Kesin ölçü teyit edilir", "140 çizgili sayfa; 60 gr krem kağıt; kalem tutucu"],
    ["GD-120", "16 × 22 cm", "90 yaprak; 70 gr krem geri dönüşüm kağıdı; sert kraft kapak"],
    ["GD-140", "16,5 × 21,5 cm", "100 yaprak; 70 gr krem kağıt; sert kraft kapak"],
    ["GD-150", "10 × 15 cm", "150 çizgili sayfa; 70 gr krem kağıt; yapışkanlı notluk"],
    ["GD-160", "8,5 × 14 cm", "70 gr çizgili kağıt; 70’li not kağıdı bilgisi teyit edilir"],
    ["GD-170", "12,5 × 20,5 cm", "100 yaprak; 80 gr ivory geri dönüşüm kağıdı; yapışkanlı notluk"],
    ["GD-210", "11,5 × 15 cm", "150 çizgili sayfa; 70 gr krem kağıt; yapışkanlı notluk ve kalem tutucu"]
   ].map(([model,size,detail])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{size}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Ölçü, Sayfa ve Yaprak Bilgilerini Karşılaştırın</h3>
   <p>GD-120 ve GD-140 daha geniş not alanı isteyenler için ölçüleriyle karşılaştırılabilir. GD-150 ve GD-160 daha küçük gövde seçenekleridir. GD-110 kaydında ölçü bilgileri farklı verildiğinden kesin ölçü sipariş öncesinde teyit edilir. Ürün ölçüsü kullanılabilir logo baskı alanı değildir.</p>
   <p>Sayfa ve yaprak sayısını birbirinin yerine kullanmayın. GD-110 için 140 sayfa; GD-150 ve GD-210 için 150 sayfa belirtilir. GD-120 90 yaprak, GD-140 ve GD-170 100 yaprak olarak tanımlanır. GD-160 ürün bilgisindeki 70’li not kağıdı ifadesini otomatik olarak 70 sayfa veya 70 yaprak şeklinde yorumlamadan iç düzeni teyit edin.</p>
   <h3 className="text-xl font-bold text-black">Yapışkanlı Not Bölümü ve Kalem İçeriği</h3>
   <p>GD-150, GD-170 ve GD-210 spiralli yazı alanını yapışkanlı notlukla birleştirir. Defterin sayfa veya yaprak sayısı, yapışkanlı not kağıdı adedi değildir. Not bölümlerinin sayısını ve içeriğini sipariş kapsamında ayrı değerlendirin.</p>
   <p>GD-110 ve GD-210 kalem tutucuya sahiptir; bu bilgi kalemin paket içinde olduğunu göstermez. GD-140 ve GD-160 için kalem aksesuar olarak belirtilir ve standart içeriğe dahil değildir. Kalemli bir kurumsal set istiyorsanız model ve paketleme talebinizi teklif sırasında paylaşın.</p>
   <h3 className="text-xl font-bold text-black">Kraft Kapak, Kağıt ve Logo Baskısı</h3>
   <p>GD-120 ve GD-140 sert kraft kapak bilgisiyle sunulur. GD-120 için 70 gr krem geri dönüşüm kağıdı, GD-170 için 80 gr ivory geri dönüşüm kağıdı belirtilir. Kraft görünümü bütün ürünün geri dönüştürülmüş olduğunu veya çevre sertifikası bulunduğunu göstermez; malzeme ve belge talebini ürün bazında teyit edin.</p>
   <p>GD-110, GD-150, GD-170 ve GD-210 için UV ve serigrafi; GD-120, GD-140 ve GD-160 için serigrafi ve dijital baskı seçenekleri bulunur. Logo dosyanızı mümkünse vektörel biçimde paylaşın. Spiral kenarı, tasarım yerleşimi ve kullanılabilir baskı alanı seçilen model üzerinde netleştirilir.</p>
   <h3 className="text-xl font-bold text-black">Toptan Spiralli Notluk Fiyatları ve Sipariş</h3>
   <p>Kartlarda mevcut ürün kaydındaki fiyat gösterilir. Tutarlar baskı hariç TL + KDV olarak sunulur. Model, adet, logo dosyası, aksesuar ve paketleme taleplerinizle toplam teklif alın. Minimum sipariş stok ve üretim planına göre belirlenir. GD-140 koli adedi 40 bilgisini minimum sipariş koşulu olarak değerlendirmeyin.</p>
   <p>Teslim tarihi tasarım onayı, stok ve logo uygulamasına göre netleştirilir. Diğer malzeme seçenekleri için <Link href="/promosyon-geri-donusumlu-urunler" className="font-semibold text-black underline">geri dönüşümlü ürünleri</Link>; hatırlatma kağıdı ağırlıklı seçenekler için <Link href="/promosyon-yapiskanli-notluklar" className="font-semibold text-black underline">yapışkanlı notluk modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Spiralli Notluklar Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="spiralli-notluk-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="spiralli-notluk-rehberi-baslik" className="text-xl font-bold !text-black">Spiralli Notluk Seçimini ve Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Ana not bloğu, yapışkanlı bölümler, spiral ve kapak özelliklerini karşılaştırın; malzeme bilgisi, logo alanı ve sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-spiralli-notluk-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-spiralli-notluk-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Spiralli Notluk Seçim ve Baskı Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Spiralli promosyon notlukları not alanı, yapışkanlı bölümler, spiral, kapak ve logo alanıyla karşılaştırın. Malzeme bilgisi ve toplu sipariş kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
 </div></div>;
}
