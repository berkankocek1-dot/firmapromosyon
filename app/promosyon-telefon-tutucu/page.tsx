import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPhoneHolder } from "@/data/phoneHolderSubcategories";

const CATEGORY = "Teknolojik Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-telefon-tutucu";
const title = "Promosyon Telefon Tutucu Modelleri ve Fiyatları";
const description = "Logo baskılı promosyon telefon tutucu ve stand modellerini karşılaştırın. Ahşap masaüstü, aynalı ve MagSafe araç içi seçenekler için toptan teklif alın.";
const faqItems = [{"question": "Hangi telefon tutucu modelleri bulunur?", "answer": "ATT-230 kayın ağacı tutucu, TT-120 masaüstü stand ve TT-210 aynalı stand ile TT-100, TT-110 ve TT-200 araç içi tutucular bulunur."}, {"question": "Ahşap telefon tutucu şarj eder mi?", "answer": "ATT-230 kayın ağacından üretilen kaydırmaz tabanlı bir telefon tutucudur. Şarj özelliği belirtilmemiştir."}, {"question": "Hangi araç içi modeller kablosuz şarj sunar?", "answer": "TT-100 için 22,5 W, TT-200 için 15 W wireless şarj belirtilir. Telefon, kılıf ve güç kaynağı uyumu kontrol edilir; bu değerler her cihazda aynı şarj hızı anlamına gelmez. TT-110 için şarj özelliği belirtilmez."}, {"question": "Telefon standları her cihazla uyumlu mu?", "answer": "Telefonun ve kılıfın ölçüsü, ağırlığı ve tutucunun taşıma alanı birlikte değerlendirilir. Araç içi modellerde montaj noktası ve varsa MagSafe uyumu ayrıca teyit edilir."}, {"question": "Telefon tutuculara logo uygulanabilir mi?", "answer": "Logo uygulamasının yöntemi, konumu ve alanı seçilen modelin yüzeyi ve tasarıma göre teklif aşamasında belirlenir. Baskı bedeli ayrıca değerlendirilir."}, {"question": "Minimum sipariş, fiyat ve teslim süresi nedir?", "answer": "Fiyat gösterilen kartlarda ürün bedeli baskı hariç TL + KDV olarak sunulur. Minimum adet, stok, logo uygulaması ve teslim süresi siparişe göre teklifte netleştirilir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-ahsap-telefon-tutucu-att-230-v2-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(isPhoneHolder));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Teknolojik Ürünler",item:SITE_URL+"/promosyon-teknolojik-urunler"},
   {"@type":"ListItem",position:3,name:"Telefon Tutucular",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-teknolojik-urunler" className="underline">Teknolojik Ürünler</Link> / Telefon Tutucular</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Telefon Tutucu Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Ahşap masaüstü tutucuları, ayaklı ve aynalı telefon standlarını, araç içi MagSafe seçenekleriyle karşılaştırın. Kullanım yeri, cihaz uyumu ve logo uygulamasına göre kurumsal toplu sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-teknolojik-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Teknolojik Ürünler</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-ahsap-telefon-tutucu-att-230-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-telefon-tutucu-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Promosyon Telefon Tutucu ve Stand Modelleri Nasıl Seçilir?</h2>
   <p>Telefon tutucu seçimini kullanım yerine göre yapın. Çalışma masasında görüntülü görüşme veya ekran takibi için masaüstü standlar; araçta telefon konumlandırmak için araç içi tutucular değerlendirilir. Şarj ihtiyacı varsa bu özelliği ayrıca kontrol edin. Bir ürünün telefon standı olması kablosuz şarj sunduğu anlamına gelmez.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Telefon tutucu modellerinin kullanım ve özellik karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Kullanım</th><th scope="col" className="p-3">Ayırt edici bilgi</th></tr></thead><tbody>{[
    ["ATT-230", "Masaüstü", "Kayın ağacı, kaydırmaz taban"],
    ["TT-120", "Masaüstü", "Siyah ayaklı telefon standı"],
    ["TT-210", "Masaüstü", "Ayaklı ve aynalı telefon standı"],
    ["TT-100", "Araç içi", "MagSafe; 22,5 W olarak belirtilen wireless şarj"],
    ["TT-110", "Araç içi", "Kompakt tutucu; şarj özelliği belirtilmemiştir"],
    ["TT-200", "Araç içi", "MagSafe; 15 W wireless şarj"]
   ].map(([model,use,detail])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{use}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Ahşap Telefon Tutucu ve Masaüstü Standlar</h3>
   <p>ATT-230, kayın ağacından üretilir ve kaydırmaz tabana sahiptir. Ürün bilgisinde 6,4 × 8 × 1,8 cm / 8 × 8,5 × 1,4 cm ölçüleri yer alır; seçilen varyantı sipariş sırasında teyit edin. Ahşap malzeme tek başına geri dönüştürülmüş içerik veya çevre sertifikası anlamına gelmez.</p>
   <p>TT-120 siyah ayaklı masaüstü standdır. TT-210 ise telefon standını ayna işleviyle birleştirir. Bu üç model için kablosuz şarj özelliği belirtilmemiştir. Telefon ve kılıfın taşıma alanına uygunluğunu, ekranın kullanılacağı konumu ve ihtiyaç duyulan masa alanını birlikte değerlendirin. Katlama veya açı aralığı ihtiyacınızı model bazında teyit edin.</p>
   <h3 className="text-xl font-bold text-black">Araç İçi Telefon Tutucular ve MagSafe Uyumu</h3>
   <p>TT-100 ve TT-200, tutucu işlevini wireless şarjla birleştirir. TT-100 için 22,5 W, TT-200 için 15 W bilgisi belirtilmiştir. Telefonun kablosuz şarj desteği, kılıfı, manyetik uyumu ve güç kaynağı birlikte kontrol edilir. Belirtilen güç değeri bütün telefonların aynı hızda şarj olacağını göstermez.</p>
   <p>TT-110 kompakt araç içi tutucu olarak sunulur; şarj desteği belirtilmemiştir. Araç içi siparişlerde montaj noktasını ve cihaz ölçülerini paylaşın. Montaj biçimi, bağlantı parçası ve paket içeriğini teklif aşamasında netleştirin. Ürün yerleşimi sürücünün görüşünü ve araç kumandalarını engellememelidir.</p>
   <h3 className="text-xl font-bold text-black">Logo Baskılı Telefon Tutucu Siparişi</h3>
   <p>Logo yöntemini seçilen modelin yüzeyine göre belirleyin. Ahşap tutucu ile elektronik araç içi modelin uygulama alanı aynı değildir. Logo dosyanızı mümkünse vektörel biçimde iletin; baskı konumunu, renk sayısını ve küçük yazıların okunabilirliğini gerçek uygulama ölçüsünde kontrol edin. Yöntem ve kullanılabilir alan teklif sırasında teyit edilir.</p>
   <h3 className="text-xl font-bold text-black">Toptan Telefon Standı Fiyatları ve Teslimat</h3>
   <p>Ürün kartlarında güncel ürün kaydındaki tutarlar gösterilir. Fiyat bulunan modeller baskı hariç TL + KDV olarak sunulur. Minimum sipariş ve teslim süresi model, adet, stok ve tasarım onayına göre netleşir. Model kodu, adet, logo, cihaz ihtiyacı ve teslim yerini paylaşarak toplam teklif isteyin. Kablo, adaptör, montaj aksesuarı ve özel kutu kapsamını ayrıca teyit edin.</p>
   <p>Diğer seçenekler için <Link href="/promosyon-geri-donusumlu-urunler" className="font-semibold text-black underline">geri dönüşümlü promosyon ürünlerini</Link> ve <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-black underline">teknolojik ürünleri</Link> inceleyin. Şarj işlevini önceliklendiren siparişlerde <Link href="/promosyon-kablosuz-sarj-cihazi" className="font-semibold text-black underline">kablosuz şarj cihazlarını</Link> da karşılaştırabilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Telefon Tutucular Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="telefon-tutucu-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="telefon-tutucu-rehberi-baslik" className="text-xl font-bold !text-black">Telefon Tutucu Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Masaüstü ve araç içi seçenekleri cihaz, kılıf, denge ve logo alanıyla karşılaştırın; şarj özelliği ve sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-telefon-tutucu-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-telefon-tutucu-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Telefon Tutucu Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Masaüstü ve araç içi promosyon telefon tutucuları cihaz, kılıf, denge ve logo alanıyla karşılaştırın. Şarj özelliği, numune ve toplu sipariş kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
 </div></div>;
}
