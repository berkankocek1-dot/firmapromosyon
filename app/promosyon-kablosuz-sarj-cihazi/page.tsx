import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isWirelessCharger } from "@/data/technologySubcategories";

const CATEGORY = "Teknolojik Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-kablosuz-sarj-cihazi";
const title = "Promosyon Kablosuz Şarj Cihazı Modelleri ve Fiyatları";
const description = "Logo baskılı kablosuz şarj cihazlarını karşılaştırın. Wireless stand, şarj istasyonu ve MagSafe araç içi modellerinde güç, cihaz uyumu ve toplu teklif bilgilerini inceleyin.";
const faqItems = [{"question": "Kablosuz şarj cihazları her telefonla çalışır mı?", "answer": "Telefonun kablosuz şarj desteği, kılıf yapısı ve cihazın yerleşimi kontrol edilmelidir. MagSafe araç içi modellerde manyetik tutuş uyumu da ayrıca değerlendirilir. Telefon modelinizi teklif talebinde belirtin."}, {"question": "15 W veya 22,5 W ifadesi her telefonda aynı hız anlamına mı gelir?", "answer": "Hayır. Belirtilen güç, her cihazda elde edilecek hız garantisi değildir. Telefon, güç kaynağı ve bağlantılar birlikte değerlendirilir. TT-170 için verilen 10 W ve Micro Input 1 A bilgileri de uygun adaptör ve gerçek kullanım gücü açısından teyit edilmelidir."}, {"question": "Bütün şarj standları telefon, saat ve kulaklığı birlikte şarj eder mi?", "answer": "Hayır. TT-130, TT-140 ve SPK-170 gibi çok yüzeyli tasarımlarda bile desteklenen cihaz modelleri, eş zamanlı cihaz sayısı ve güç dağılımı ayrıca netleştirilir. Görselde birden fazla yüzey bulunması tek başına uyumluluk garantisi değildir."}, {"question": "Adaptör, telefon ve görseldeki aksesuarlar pakete dahil mi?", "answer": "Görseldeki telefon ve aksesuarların dahil olduğunu varsaymayın. Güç adaptörü, bağlantı kablosu ve kutu içeriğini seçilen ürün koduyla sipariş öncesinde teyit edin. Kablosuz şarj işlevi tek başına dahili batarya bulunduğu anlamına gelmez."}, {"question": "Logo uygulaması ve fiyat kapsamı nasıl belirlenir?", "answer": "TT-160 için lazer kazıma ile light-up logo, TT-180 için UV renkli baskı belirtilir. Diğer modellerin yöntemi ayrıca kontrol edilir. Kartlarda fiyat bulunan modellerin tutarları baskı hariç TL + KDV olarak sunulur."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isWirelessCharger));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Teknolojik Ürünler",item:SITE_URL+"/promosyon-teknolojik-urunler"},
   {"@type":"ListItem",position:3,name:"Kablosuz Şarj Cihazları",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-teknolojik-urunler" className="underline">Teknolojik Ürünler</Link> / Kablosuz Şarj Cihazları</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Kablosuz Şarj Cihazları</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Wireless şarj standlarını, masaüstü istasyonları, hoparlörlü modelleri ve MagSafe araç içi tutucuları inceleyin. Cihaz uyumu, belirtilen güç ve logo uygulamasını karşılaştırarak kurumsal sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-teknolojik-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Teknolojik Ürünler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} kablosuz şarj modeli gösteriliyor</p>
  <section aria-label="Promosyon kablosuz şarj cihazı ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Kablosuz Şarj Cihazları</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Promosyon Kablosuz Şarj Cihazı Nasıl Seçilir?</h2>
   <p>Kablosuz şarj cihazı seçerken kullanım yerini ve telefon modelini birlikte belirleyin. Masaüstü stand, çok yüzeyli istasyon ve araç içi manyetik tutucu farklı yerleşim ihtiyaçlarına cevap verir. Kablosuz şarj özelliği, telefon standı işlevinden ayrı değerlendirilmelidir; bu listedeki ürünlerde şarj desteği ürün başlığında veya kısa açıklamasında belirtilir.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">Kablosuz şarj modellerinin belirtilen özellikleri</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Belirtilen ayrım</th></tr></thead><tbody>{[
    ["TT-100 / TT-200","MagSafe araç içi tutucu; sırasıyla 22,5 W / 15 W olarak belirtilir"],
    ["TT-130 / TT-140","Masaüstü wireless istasyon; cihaz ve güç kapsamı ayrıca teyit edilir"],
    ["TT-150","15 W şarj, Bluetooth 5.1 hoparlör ve üç renk LED aydınlatma"],
    ["TT-160","15 W, Type-C giriş, ABS, lazer light-up logo"],
    ["TT-170","10 W olarak belirtilen dikey stand, Micro Input 1 A, rubber gövde"],
    ["TT-180","15 W, Type-C giriş, ABS, UV renkli baskı"],
    ["SPK-160 / SPK-170 / SPK-180","Şarj ve hoparlör birleşimi; farklı masaüstü gövde tasarımları"]
   ].map(([model,feature])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Güç Değerinden Önce Telefon ve Adaptör Uyumu</h3>
   <p>Telefonun kablosuz şarj desteğini, kılıfını ve şarj yüzeyine yerleşimini kontrol edin. TT-160 ve TT-180 için 15 W ve Type-C giriş belirtilir. Type-C burada güç girişi bilgisidir; ürünün başka cihazlara kablolu enerji verebildiğini veya powerbank olduğunu göstermez.</p>
   <p>TT-170 bilgilerinde 10 W hızlı şarj ve Micro Input 1 A birlikte yer alır. Uygun adaptör ve elde edilecek şarj gücü sipariş öncesinde teyit edilmelidir. TT-100 için belirtilen 22,5 W dahil hiçbir güç değerini tüm telefonlarda aynı hız garantisi olarak değerlendirmeyin. Güç kaynağı ve cihazın desteği sonucu etkiler.</p>
   <h3 className="text-xl font-bold text-white">Masaüstü Stand ve Çok Yüzeyli İstasyonlar</h3>
   <p>TT-130 masaüstü istasyon, TT-140 dikey telefon alanı ve taban şarj yüzeyiyle tanımlanır. Telefon, saat ve kulaklığın modeline göre uyumluluk kontrol edilmelidir. Eş zamanlı cihaz sayısı ve güç dağılımı ayrıca netleştirilir; yüzey sayısını doğrudan desteklenen cihaz sayısı kabul etmeyin.</p>
   <p>TT-160 ve TT-180 için 112 × 102 × 70 mm ölçü belirtilir. TT-160 ağırlığı 172 g, TT-180 ağırlığı 161 g olarak yer alır. Benzer gövde ölçüleri, logo uygulamasının da aynı olduğu anlamına gelmez. TT-170 dikey kullanım formu ve rubber gövdesiyle bu seçeneklerden ayrılır.</p>
   <h3 className="text-xl font-bold text-white">Hoparlörlü Modeller ve Araç İçi Kullanım</h3>
   <p>SPK-160 dairesel şarj yüzeyi, SPK-170 çok yüzeyli gövde, SPK-180 kompakt açılı tasarım sunar. Bu modellerin şarj gücü ve hoparlör bağlantıları ayrıca teyit edilir. TT-150 ise 15 W şarj, Bluetooth 5.1 ve üç renk LED aydınlatmayla tanımlanır. 25 × 13 × 43 cm ölçüsü nedeniyle masa alanını önceden değerlendirin.</p>
   <p>TT-100 ve TT-200 araç içi manyetik tutucu işlevini şarjla birleştirir. Telefon ve kılıfın MagSafe uyumunu, aracınızdaki montaj noktasını ve güç kaynağını kontrol edin. Manyetik tutuş ifadesi bütün telefonların doğrudan sabitlenebileceği anlamına gelmez; montaj kapsamını ürün koduyla teyit edin.</p>
   <h3 className="text-xl font-bold text-white">Logo Yöntemi ve Sipariş Kapsamı</h3>
   <p>TT-160 lazer kazıma ile light-up logo, TT-180 UV renkli baskı seçeneğiyle sunulur. TT-150 ve TT-170 bilgilerinde ışıklı logo alanı bulunur. Diğer modellerin uygulanabilir yöntemi ve alanı tasarımla birlikte değerlendirilir. Logonuzu mümkünse vektörel dosyayla iletin; küçük yazıların okunabilirliğini uygulama ölçüsünde kontrol edin.</p>
   <p>Kartlarda fiyat bulunan ürünlerin tutarları baskı hariç TL + KDV olarak sunulur. Adet, logo, cihaz modeli ve teslim tarihiyle toplam teklif alın. Adaptör, kablo, kutu ve görseldeki aksesuarların teslim kapsamını ayrı netleştirin. Güncel tedarik uygunluğu ve tasarım onayı teslim planını etkiler.</p>
   <p>Ses özelliklerine göre karşılaştırma için <Link href="/promosyon-hoparlor" className="font-semibold text-white underline">hoparlör modellerini</Link>, dahili bataryalı taşınabilir enerji seçenekleri için <Link href="/promosyon-powerbank" className="font-semibold text-white underline">powerbank modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Kablosuz Şarj Cihazları Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="kablosuz-sarj-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="kablosuz-sarj-rehberi-baslik" className="text-xl font-bold !text-black">Kablosuz Şarj Cihazı Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Telefon, kılıf, adaptör ve çoklu kullanım koşullarını birlikte değerlendirin; kurumsal sipariş için cihaz ve paket kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-kablosuz-sarj-cihazi-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Kablosuz Şarj Cihazı Seçim Rehberini İncele →</Link>
      </section>
 </div>;
}
