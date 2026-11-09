import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isThermosGiftSet } from "@/data/vipSubcategories";

const CATEGORY = "VIP Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/termoslu-kurumsal-hediye-setleri";
const title = "Termoslu Kurumsal Hediye Setleri Modelleri ve Fiyatları";
const description = "Termoslu kurumsal hediye setlerini içerik, termos hacmi ve logo seçenekleriyle karşılaştırın. Çalışan ve müşteri hediyeleri için toplu teklif alın.";
const faqItems = [{"question": "Termoslu hediye setinin içinde neler bulunur?", "answer": "İçerik modele göre değişir. Termosa ek olarak defter, kalem, powerbank, USB bellek veya farklı parçalar bulunabilir; yalnız seçilen ürünün belirtilen içeriğini esas alın."}, {"question": "Her sette termos kapasitesi aynı mı?", "answer": "Hayır. Hacim, malzeme ve kapak yapısı model bazında değerlendirilir. Bir setteki termos özelliğini diğer setlere uygulamayın."}, {"question": "Setler kişiselleştirilebilir mi?", "answer": "Logo uygulaması kutu ve her parça için ayrı değerlendirilir. Uygulanacak yüzeyler, yöntem, renk sayısı ve baskı bedeli teklifte netleştirilir."}, {"question": "Powerbank içeren her set MagSafe mi?", "answer": "Hayır. MagSafe, kapasite ve bağlantı özellikleri yalnız ürün bilgisinde açıkça belirtilen modeller için değerlendirilir. Telefon ve aksesuar uyumu ayrıca teyit edilir."}, {"question": "Fiyat, minimum adet ve teslim süresi nedir?", "answer": "Fiyat bulunan kartlarda set bedeli baskı hariç TL + KDV olarak sunulur. Minimum adet ve termin stok, miktar, logo ve paketleme kapsamına göre belirlenir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isThermosGiftSet));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"VIP Ürünler",item:SITE_URL+"/promosyon-vip-urunler"},
   {"@type":"ListItem",position:3,name:"Termoslu Kurumsal Hediye Setleri",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-vip-urunler" className="underline">VIP Ürünler</Link> / Termoslu Kurumsal Hediye Setleri</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Termoslu Kurumsal Hediye Setleri Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Termos içeren hazır hediye setlerini defter, kalem ve teknoloji aksesuarlarıyla birlikte değerlendirin. Set içeriği, termos hacmi ve kişiselleştirme ihtiyacınıza göre kurumsal toplu sipariş teklifi alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-vip-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm VIP Ürünler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} ürün gösteriliyor</p>
  <section aria-label="Promosyon termoslu kurumsal hediye setleri ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Termoslu Kurumsal Hediye Setleri</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
<h2 className="text-2xl font-bold text-white">Güncel Modelleri Karşılaştırın</h2>
<div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Termoslu Kurumsal Hediye Setleri model ve içerik karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ürün bilgileri</th></tr></thead><tbody>{list.map(p=><tr key={p.id} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold"><Link href={"/urunler/"+p.slug} className="underline">{p.title}</Link></th><td className="p-3">{p.shortDesc}</td></tr>)}</tbody></table></div>
<h3 className="text-xl font-bold text-white">Set İçeriğini Kullanım Amacına Göre Karşılaştırın</h3>
<p>Termoslu kurumsal hediye setlerinde parça sayısı ve içerik modele göre değişir. Ofiste günlük kullanım için termos, defter ve kalem birleşimi; teknoloji aksesuarları da isteniyorsa powerbank veya USB içeren seçenekler değerlendirilebilir. İhtiyaç duyulmayan parçaları yalnız set daha kalabalık olduğu için seçmeyin.</p>
<p>Kartlarda belirtilen set içeriğini esas alın. Görseldeki aksesuarlar, kutu düzeni ve ürün renklerinin siparişinizdeki kapsamla aynı olduğunu varsaymadan güncel içerik onayı alın.</p>
<h3 className="text-xl font-bold text-white">Termos Hacmi ve Malzeme Bilgisi</h3>
<p>Termos kapasitesini, gövde malzemesini ve kapağını seçilen ürün bilgisinden kontrol edin. Hacmi küçük bir modelle daha büyük bir model aynı kullanım ihtiyacını karşılamayabilir. Günlük taşıma, masaüstü kullanım ve hediye kutusunun boyutunu birlikte değerlendirin.</p>
<p>Ürün kaydında kesin test bilgisi bulunmadan sıcak veya soğuk tutma süresi, sızdırmazlık ya da bulaşık makinesine uygunluk için bütün setlere ortak bir taahhüt verilmez. Kullanım ve bakım koşullarını model bazında teyit edin.</p>
<h3 className="text-xl font-bold text-white">Powerbank, USB ve Diğer Set Parçaları</h3>
<p>Teknoloji parçaları bulunan setlerde powerbank kapasitesi, bağlantı seçenekleri ve USB belleğin kapasitesi ayrı özelliklerdir. MagSafe desteği yalnız açıkça belirtilen modeller için değerlendirilir. Telefon ve kılıf uyumunu gerektiğinde ayrıca kontrol edin.</p>
<p>Defterin ölçüsü, kalemin türü ve diğer aksesuarların içeriği de fiyat karşılaştırmasının parçasıdır. Bir üründe belirtilen özelliği benzer görünümlü başka sete uygulamayın. Kutu ve iç parçalar arasındaki renk uyumunu tasarım aşamasında değerlendirin.</p>
<h3 className="text-xl font-bold text-white">Logo Baskısı, Paketleme ve Toptan Fiyat</h3>
<p>Kutuya ve set parçalarına uygulanacak logoları ayrı tanımlayın. Termos, defter kapağı, kalem ve elektronik aksesuarın yüzeyi aynı yöntemle işlenmeyebilir. Logo dosyası, konum, renk sayısı ve uygulanabilir alan üretim onayından önce netleştirilir.</p>
<p>Kartlardaki fiyatlar baskı hariç TL + KDV olarak sunulur. Model, adet, renk ve paketleme talebiyle toplam teklif alın. Minimum sipariş ve teslim süresi stok, tasarım onayı ve uygulama planına göre belirlenir; ihtiyaç tarihinizi teklif talebinde belirtin.</p>
<p>Diğer seçenekler için <Link href="/promosyon-vip-urunler" className="font-semibold text-white underline">VIP ürünlerini</Link> ve <Link href="/kurumsal-hediye-kutulari" className="font-semibold text-white underline">boş kurumsal hediye kutularını</Link> inceleyebilirsiniz.</p>
</section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Termoslu Kurumsal Hediye Setleri Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
  <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 text-gray-900">
   <h2 className="text-xl font-bold !text-gray-900">Kurumsal Hediye Seti Seçim Rehberi</h2>
   <p className="mt-3 leading-7 !text-gray-700">Alıcı profili, bütçe, kutu ve ürün uyumu ile toplu teslim planını birlikte değerlendirin.</p>
   <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi" className="mt-4 inline-block font-semibold !text-gray-900 underline">Kurumsal Hediye Seti Seçim Rehberini Oku</Link>
  </section>
 </div>;
}
