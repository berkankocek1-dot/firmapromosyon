import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isCoaster } from "@/data/coasterSubcategories";

const CATEGORY = "Ahşap ve Deri Masaüstü Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-bardak-altligi";
const title = "Promosyon Bardak Altlığı Modelleri ve Fiyatları";
const description = "Logo baskılı promosyon bardak altlığı modellerini karşılaştırın. BA-650 ofset/dijital baskılı seçenek ile MS-190 ve MS-195 suni deri setler için teklif alın.";
const faqItems = [{"question": "Hangi bardak altlığı modelleri bulunur?", "answer": "BA-650 ile standlı suni deri MS-190 ve MS-195 modelleri bulunur. BA-650 ile set ürünlerinin fiyat kapsamı ayrı değerlendirilir."}, {"question": "BA-650 ölçüsü ve minimum siparişi nedir?", "answer": "BA-650 ölçüsü 8,9 × 8,9 cm, minimum siparişi 500 adettir. Listelenen fiyat 1.000 adet sipariş esasına aittir; seçilen adette baskı kapsamı nihai teklifte belirtilir."}, {"question": "Deri bardak altlıkları hakiki deri mi?", "answer": "MS-190 ve MS-195 suni deri olarak tanımlanır. Hakiki deri özelliği belirtilmemiştir."}, {"question": "MS-190 ve MS-195 kaç parçadan oluşur?", "answer": "MS-195 dört bardak altlığı ve taşıma standıyla sunulur. MS-190 standlı settir; bardak altlığı adedi sipariş öncesinde teyit edilir."}, {"question": "Hangi logo baskıları uygulanabilir?", "answer": "BA-650 için ofset ve dijital baskı belirtilir. MS-190 ve MS-195 için yöntem, alan ve uygunluk yüzey ve tasarıma göre teklif aşamasında teyit edilir."}, {"question": "Baskı, minimum adet ve teslim süresi nasıl belirlenir?", "answer": "MS-190 ve MS-195 fiyatları baskı hariç TL + KDV olarak değerlendirilir; minimum adet ve termin teklifte belirlenir. BA-650 için minimum 500 adet, fiyat için 1.000 adet esası geçerlidir; baskı kapsamı ayrıca netleştirilir. Fiyatlara KDV eklenir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-bardak-altligi-ba-650-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(isCoaster));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Ahşap ve Deri Masaüstü Ürünler",item:SITE_URL+"/promosyon-ahsap-ve-deri-masaustu-urunler"},
   {"@type":"ListItem",position:3,name:"Bardak Altlıkları",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="underline">Ahşap ve Deri Masaüstü Ürünler</Link> / Bardak Altlıkları</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Bardak Altlığı Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">BA-650 baskılı bardak altlığı ile standlı suni deri MS-190 ve MS-195 setlerini kullanım yeri, ürün içeriği ve logo uygulamasına göre karşılaştırın. Kafe, ofis ve kurumsal dağıtım için adet ve tasarımınızla teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Ahşap ve Deri Masaüstü Ürünler</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-bardak-altligi-ba-650-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-bardak-altligi-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:(p.slug === "promosyon-bardak-altligi-ba-650" ? "Birim fiyat 1.000 adet sipariş esasına aittir. Minimum 500 adet; baskı kapsamı teklifte netleşir." : "Set ürünüdür. Fiyat baskı hariçtir; set ve logo uygulaması kapsamını teyit edin.")}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Logo Baskılı Bardak Altlığı Nasıl Seçilir?</h2>
   <p>Bardak altlığı seçiminde dağıtım biçimi ve kullanım alanını belirleyin. Kafe masalarında veya etkinliklerde kullanılacak BA-650 ile toplantı odasında stand içinde tutulacak suni deri setlerin içerikleri farklıdır. Karşılaştırmayı yalnız fiyat üzerinden değil, birim ürün veya set kapsamını dikkate alarak yapın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[580px] text-left text-sm"><caption className="sr-only">Bardak altlığı modellerinin ölçü, içerik ve uygulama karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve içerik</th><th scope="col" className="p-3">Logo / sipariş bilgisi</th></tr></thead><tbody>{[
    ["BA-650", "8,9 × 8,9 cm; malzeme teyit edilir", "Ofset / dijital; minimum 500 adet; liste fiyatı 1.000 adet esası"],
    ["MS-190", "11 cm çap; suni deri, standlı set; set adedi teyit edilir", "Siyah / taba; logo yöntemi ve alanı teklifte belirlenir"],
    ["MS-195", "4 suni deri bardak altlığı + taşıma standı", "Siyah / taba; logo yöntemi ve alanı teklifte belirlenir"]
   ].map(([model,detail,scope])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{detail}</td><td className="p-3">{scope}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">BA-650 Baskılı Bardak Altlığı</h3>
   <p>BA-650 için 8,9 × 8,9 cm ölçü ile ofset ve dijital baskı seçenekleri belirtilir. Kaynak ürün bilgisinde malzeme ve kalınlık belirtilmediğinden karton, mantar veya farklı bir malzeme varsayılmamalıdır. Malzeme ihtiyacınızı, tasarımınızı ve kullanım yerini teklif aşamasında paylaşın.</p>
   <p>Minimum sipariş 500 adettir. Listelenen fiyat ise 1.000 adet sipariş esasına aittir; 500 adet için aynı birim fiyatın geçerli olduğu kabul edilmez. Seçilen adette baskı kapsamı ve nihai tutar teklifte belirtilir. Kesim payı ve kullanılabilir baskı alanı ürün ölçüsünden ayrı değerlendirilir.</p>
   <h3 className="text-xl font-bold text-black">Standlı Suni Deri Bardak Altlığı Setleri</h3>
   <p>MS-190 ve MS-195 suni deri modellerdir; hakiki deri olarak sunulmaz. Her iki modelde siyah ve taba renk seçenekleri belirtilir. MS-190 için 11 cm çap ve standlı set bilgisi bulunur; set içindeki altlık adedi ayrıca teyit edilir. MS-195 dört bardak altlığı ve taşıma standıyla sunulur; bu modelin çapı sipariş öncesinde sorulabilir.</p>
   <p>Ofis, toplantı odası veya kurumsal hediye için set sayısını ve gerekli toplam altlık adedini ayrı planlayın. MS-195’te bir set dört altlık içerir; aynı adet ilişkisini MS-190’a uygulamayın. Güncel renk ve tedarik uygunluğu sipariş sırasında netleştirilir.</p>
   <h3 className="text-xl font-bold text-black">Logo Uygulaması ve Kullanım Koşulları</h3>
   <p>BA-650’de ofset veya dijital baskı; suni deri setlerde ise yüzey ve tasarıma uygun yöntem teklif aşamasında değerlendirilir. Logo dosyasını mümkünse vektörel biçimde iletin. Her altlığa mı, standa mı yoksa birden fazla yüzeye mi uygulama istendiğini belirtin. Baskı yönü, renk sayısı ve logo alanı toplam tekliften önce netleştirilir.</p>
   <p>Ürünlerin ısı, su veya leke dayanımı için kaynakta kesin test değeri bulunmaz. Bu özellikleri bütün modeller için varsaymayın. Bardak tabanı ile masa yüzeyini temiz ve kuru tutun; özel yüzey veya kullanım koşulunuz varsa model bazında uygunluk isteyin.</p>
   <h3 className="text-xl font-bold text-black">Promosyon Bardak Altlığı Fiyatları ve Toplu Sipariş</h3>
   <p>Kartlardaki fiyatlar mevcut ürün kayıtlarından alınır. BA-650 birim ürünüyle suni deri setlerin fiyatını aynı içerikmiş gibi karşılaştırmayın. MS-190 ve MS-195’te baskı bedeli ayrıca değerlendirilir. Fiyatlara KDV eklenir. Model, adet veya set sayısı, logo, paketleme ve teslim yerini paylaşarak toplam teklif alın.</p>
   <p>BA-650 dışındaki modellerin minimum adedi ve bütün modellerin teslim süresi stok, tasarım onayı ve uygulama planına göre teklifte belirlenir. Diğer seçenekler için <Link href="/promosyon-imalat-urunler" className="font-semibold text-black underline">imalat ürünlerini</Link> ve <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-black underline">ahşap ve deri masaüstü ürünlerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Bardak Altlıkları Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="bardak-altligi-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="bardak-altligi-rehberi-baslik" className="text-xl font-bold !text-black">Bardak Altlığı Seçimini ve Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Tekli ürün ve set kapsamını, ölçü, malzeme ve logo alanını karşılaştırın; fiyatın esas alındığı adetle baskı kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-bardak-altligi-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-bardak-altligi-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Bardak Altlığı Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon bardak altlıklarını tekli ürün ve set kapsamı, ölçü, malzeme ve logo alanıyla karşılaştırın. Fiyatın esas alındığı adet ve baskı kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
 </div></div>;
}
