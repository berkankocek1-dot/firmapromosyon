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
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(isPhoneHolder));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Teknolojik Ürünler",item:SITE_URL+"/promosyon-teknolojik-urunler"},
   {"@type":"ListItem",position:3,name:"Telefon Tutucular",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-teknolojik-urunler" className="underline">Teknolojik Ürünler</Link> / Telefon Tutucular</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Telefon Tutucu Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Ahşap masaüstü tutucuları, ayaklı ve aynalı telefon standlarını, araç içi MagSafe seçenekleriyle karşılaştırın. Kullanım yeri, cihaz uyumu ve logo uygulamasına göre kurumsal toplu sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-teknolojik-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Teknolojik Ürünler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} telefon tutucu modeli gösteriliyor</p>
  <section aria-label="Promosyon telefon tutucu ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Telefon Tutucular</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Promosyon Telefon Tutucu ve Stand Modelleri Nasıl Seçilir?</h2>
   <p>Telefon tutucu seçimini kullanım yerine göre yapın. Çalışma masasında görüntülü görüşme veya ekran takibi için masaüstü standlar; araçta telefon konumlandırmak için araç içi tutucular değerlendirilir. Şarj ihtiyacı varsa bu özelliği ayrıca kontrol edin. Bir ürünün telefon standı olması kablosuz şarj sunduğu anlamına gelmez.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Telefon tutucu modellerinin kullanım ve özellik karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Kullanım</th><th scope="col" className="p-3">Ayırt edici bilgi</th></tr></thead><tbody>{[
    ["ATT-230", "Masaüstü", "Kayın ağacı, kaydırmaz taban"],
    ["TT-120", "Masaüstü", "Siyah ayaklı telefon standı"],
    ["TT-210", "Masaüstü", "Ayaklı ve aynalı telefon standı"],
    ["TT-100", "Araç içi", "MagSafe; 22,5 W olarak belirtilen wireless şarj"],
    ["TT-110", "Araç içi", "Kompakt tutucu; şarj özelliği belirtilmemiştir"],
    ["TT-200", "Araç içi", "MagSafe; 15 W wireless şarj"]
   ].map(([model,use,detail])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{use}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Ahşap Telefon Tutucu ve Masaüstü Standlar</h3>
   <p>ATT-230, kayın ağacından üretilir ve kaydırmaz tabana sahiptir. Ürün bilgisinde 6,4 × 8 × 1,8 cm / 8 × 8,5 × 1,4 cm ölçüleri yer alır; seçilen varyantı sipariş sırasında teyit edin. Ahşap malzeme tek başına geri dönüştürülmüş içerik veya çevre sertifikası anlamına gelmez.</p>
   <p>TT-120 siyah ayaklı masaüstü standdır. TT-210 ise telefon standını ayna işleviyle birleştirir. Bu üç model için kablosuz şarj özelliği belirtilmemiştir. Telefon ve kılıfın taşıma alanına uygunluğunu, ekranın kullanılacağı konumu ve ihtiyaç duyulan masa alanını birlikte değerlendirin. Katlama veya açı aralığı ihtiyacınızı model bazında teyit edin.</p>
   <h3 className="text-xl font-bold text-white">Araç İçi Telefon Tutucular ve MagSafe Uyumu</h3>
   <p>TT-100 ve TT-200, tutucu işlevini wireless şarjla birleştirir. TT-100 için 22,5 W, TT-200 için 15 W bilgisi belirtilmiştir. Telefonun kablosuz şarj desteği, kılıfı, manyetik uyumu ve güç kaynağı birlikte kontrol edilir. Belirtilen güç değeri bütün telefonların aynı hızda şarj olacağını göstermez.</p>
   <p>TT-110 kompakt araç içi tutucu olarak sunulur; şarj desteği belirtilmemiştir. Araç içi siparişlerde montaj noktasını ve cihaz ölçülerini paylaşın. Montaj biçimi, bağlantı parçası ve paket içeriğini teklif aşamasında netleştirin. Ürün yerleşimi sürücünün görüşünü ve araç kumandalarını engellememelidir.</p>
   <h3 className="text-xl font-bold text-white">Logo Baskılı Telefon Tutucu Siparişi</h3>
   <p>Logo yöntemini seçilen modelin yüzeyine göre belirleyin. Ahşap tutucu ile elektronik araç içi modelin uygulama alanı aynı değildir. Logo dosyanızı mümkünse vektörel biçimde iletin; baskı konumunu, renk sayısını ve küçük yazıların okunabilirliğini gerçek uygulama ölçüsünde kontrol edin. Yöntem ve kullanılabilir alan teklif sırasında teyit edilir.</p>
   <h3 className="text-xl font-bold text-white">Toptan Telefon Standı Fiyatları ve Teslimat</h3>
   <p>Ürün kartlarında güncel ürün kaydındaki tutarlar gösterilir. Fiyat bulunan modeller baskı hariç TL + KDV olarak sunulur. Minimum sipariş ve teslim süresi model, adet, stok ve tasarım onayına göre netleşir. Model kodu, adet, logo, cihaz ihtiyacı ve teslim yerini paylaşarak toplam teklif isteyin. Kablo, adaptör, montaj aksesuarı ve özel kutu kapsamını ayrıca teyit edin.</p>
   <p>Diğer seçenekler için <Link href="/promosyon-geri-donusumlu-urunler" className="font-semibold text-white underline">geri dönüşümlü promosyon ürünlerini</Link> ve <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-white underline">teknolojik ürünleri</Link> inceleyin. Şarj işlevini önceliklendiren siparişlerde <Link href="/promosyon-kablosuz-sarj-cihazi" className="font-semibold text-white underline">kablosuz şarj cihazlarını</Link> da karşılaştırabilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Telefon Tutucular Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
