import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMarineCalendar } from "@/data/calendarSubcategories";

const CATEGORY = "Takvimler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-gemici-takvimi";
const title = "Promosyon Gemici Takvimi Modelleri ve Fiyatları";
const description = "Logo baskılı promosyon gemici takvimlerini ölçü, spiral ve taşıyıcı yapısıyla karşılaştırın. Jumbo, sıvama ve taslama modeller için toptan teklif alın.";
const faqItems = [{"question": "Gemici takvimi ile masa takvimi arasındaki fark nedir?", "answer": "Gemici takvimleri duvar kullanımına, masa takvimleri masaüstüne yönelik sunulur. Bu sayfa gemici takvimi olarak tanımlanan modelleri karşılaştırır."}, {"question": "Tek parça ve üç parça spiral aynı mı?", "answer": "Hayır. Spiral ve blok düzeni modele göre değişir. Toplam ölçüyle birlikte blok ölçülerini ve görünüm düzenini ürün sayfasından kontrol edin."}, {"question": "Jumbo, sıvama ve taslama modelleri nasıl seçilir?", "answer": "Jumbo ifadesi ölçü grubunu belirtir. Sıvama ve taslama ise taşıyıcı yapısıyla ilgili farklı tanımlardır. Malzeme ve reklam alanını model bazında karşılaştırın."}, {"question": "Beş aylık görünüm bütün modellerde var mı?", "answer": "Hayır. Görünür ay sayısı ve yaprak düzeni seçilen modele bağlıdır. Spiral sayısından tek başına görünür ay sayısı çıkarılmaz."}, {"question": "Görseldeki yıl ve firma baskısı mı teslim edilir?", "answer": "Görseller örnek uygulamadır ve eski yıllar içerebilir. Takvim yılı, dil, içerik ve kurumsal tasarım sipariş öncesinde teyit edilir."}, {"question": "Minimum adet, logo baskısı ve teslim süresi nedir?", "answer": "Minimum adet, baskı kapsamı, stok ve termin model ile siparişe göre netleştirilir. Kartlarda fiyat bulunan ürünler baskı hariç TL + KDV olarak sunulur."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-gemici-takvimi-mtb-230-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isMarineCalendar));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Takvimler",item:SITE_URL+"/promosyon-takvim"},
   {"@type":"ListItem",position:3,name:"Gemici Takvimleri",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-takvim" className="underline">Takvimler</Link> / Gemici Takvimleri</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Promosyon Gemici Takvimi Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Duvar kullanımına uygun gemici takvimlerini ölçü, spiral ve reklam alanına göre karşılaştırın. Jumbo, sıvama, taslama ve farklı görünüm seçeneklerini takvim yılı ve kurumsal tasarımınızla birlikte planlayın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-takvim" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Takvimler</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-gemici-takvimi-mtb-230-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-gemici-takvimi-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
<h2 className="text-2xl font-bold text-black">Güncel Modelleri Karşılaştırın</h2>
<div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Gemici Takvimleri model ve içerik karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ürün bilgileri</th></tr></thead><tbody>{list.map(p=><tr key={p.id} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold"><Link href={"/urunler/"+p.slug} className="underline">{p.title}</Link></th><td className="p-3">{p.shortDesc}</td></tr>)}</tbody></table></div>
<h3 className="text-xl font-bold text-black">Duvar Alanı, Dış Ölçü ve Reklam Bölümü</h3>
<p>Gemici takvimi seçiminde takvimin asılacağı duvar alanını ve okunacağı mesafeyi değerlendirin. Toplam ürün ölçüsü, tarihlerin yer aldığı blok ölçüsü ve markanızın görüneceği reklam bölümü farklı alanlardır. Bir ölçüyü diğerinin yerine kullanmayın.</p>
<p>Daha büyük gövde isteyenler jumbo seçenekleri inceleyebilir. Ancak büyük dış ölçü her zaman aynı oranda daha büyük logo alanı anlamına gelmez. Yerleşim ve tasarım çalışmasını seçilen ürünün güncel reklam alanıyla hazırlayın.</p>
<h3 className="text-xl font-bold text-black">Tek Parça ve Üç Parça Spiral Düzeni</h3>
<p>Spiral ve blok yapısı ürünün tarih bölümlerinin nasıl düzenlendiğini anlamak için karşılaştırılır. Tek parça veya üç parça spiral bilgisiyle birlikte yaprak düzenini, blok ölçülerini ve görünür ay sayısını da kontrol edin. Sadece spiral sayısından bütün modellerin iç düzeninin aynı olduğu sonucunu çıkarmayın.</p>
<p>Beş aylık görünüm isteyen siparişlerde bu özellik açıkça belirtilen modeller seçilmelidir. Aynı dış ölçüye sahip iki ürün farklı blok düzeni ve taşıyıcı yapısıyla sunulabilir. Ürün kodu, tasarım provası ve iç düzeni teklif sırasında birlikte teyit edin.</p>
<h3 className="text-xl font-bold text-black">Sıvama, Taslama ve Taşıyıcı Malzemesi</h3>
<p>Sıvama ve taslama ifadeleri aynı yapı anlamına gelmez. Taşıyıcı karton, mukavva, kaplama ve gramaj bilgileri model bazında değerlendirilir. Görsel görünüm veya benzer boyut üzerinden bütün modellerin aynı malzemeden üretildiğini varsaymayın.</p>
<p>Karton yapısı, reklam alanı ve toplam boyut, hem sunumu hem de paketleme ihtiyacını etkiler. Kurumsal dağıtımda ürünün nasıl taşınacağını ve teslim edileceğini de seçiminize dahil edin.</p>
<h3 className="text-xl font-bold text-black">Takvim Yılı ve Logo Tasarımını Birlikte Planlayın</h3>
<p>Ürün görsellerinde eski yıl veya başka firmalara ait örnek baskılar bulunabilir. Sipariş edilecek yılı, dil ve yaprak içeriğini ayrıca belirtin. Örnek görseli teslim edilecek tasarım olarak kabul etmeyin.</p>
<p>Logo dosyanızı mümkünse vektörel biçimde paylaşın. İletişim bilgileri, kurumsal renkler ve reklam bölümündeki yerleşim gerçek ölçüde kontrol edilir. Baskı yöntemi, uygulama alanı ve kişiselleştirme kapsamı seçilen modele göre teklif aşamasında netleştirilir.</p>
<h3 className="text-xl font-bold text-black">Toptan Gemici Takvimi Fiyatları ve Teslimat</h3>
<p>Kartlardaki fiyatlar güncel ürün kayıtlarından alınır. Fiyat bulunan modeller baskı hariç TL + KDV olarak sunulur; baskı kapsamı ve toplam teklif ayrıca netleştirilir. Teklifleri karşılaştırırken aynı yıl, adet, malzeme ve tasarım kapsamını esas alın.</p>
<p>Minimum sipariş ve termin için bütün modellere ortak bir değer verilmez. Model, adet, takvim yılı, logo dosyası, teslim yeri ve ihtiyaç tarihinizle teklif alın. Tasarım onayı, tedarik ve üretim planı net teslim tarihini belirler.</p>
<p>Diğer seçenekler için <Link href="/promosyon-takvim" className="font-semibold text-black underline">tüm takvim modellerini</Link> ve <Link href="/promosyon-ajanda" className="font-semibold text-black underline">kurumsal ajanda modellerini</Link> inceleyebilirsiniz.</p>
</section>
  <section className="mt-10 rounded-2xl border border-gray-200 p-6 text-gray-600">
   <h2 className="text-xl font-bold text-black">Gemici Takvimi Seçim ve Baskıya Hazırlık Rehberi</h2>
   <p className="mt-3 leading-7">Ölçü, tarih düzeni, takvim yılı ve logo provası için sipariş öncesi kontrol adımlarını inceleyin.</p>
   <Link href="/rehber/promosyon-gemici-takvimi-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-gemici-takvimi-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Gemici Takvimi Seçim Rehberini Oku</h3><p className="mt-2 text-sm leading-6 text-white/90">Gemici takviminde ölçü, blok ve spiral düzeni ile reklam alanını karşılaştırın. Takvim yılı, logo tasarımı, prova ve toplu sipariş onayını adım adım planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Gemici Takvimleri Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div></div>;
}
