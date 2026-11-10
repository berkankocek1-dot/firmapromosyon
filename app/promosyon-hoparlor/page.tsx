import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPromotionalSpeaker } from "@/data/technologySubcategories";

const CATEGORY = "Teknolojik Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-hoparlor";
const title = "Promosyon Hoparlör Modelleri ve Fiyatları";
const description = "Logo baskılı promosyon hoparlör modellerini karşılaştırın. Bluetooth, mini gövde ve wireless şarjlı seçeneklerde bağlantı ve logo ayrıntıları için toplu teklif alın.";
const faqItems = [{"question": "Bütün hoparlör modellerinde Bluetooth bağlantısı var mı?", "answer": "SPK-100, SPK-110, SPK-120, SPK-130, SPK-140, SPK-150 ve TT-150 bilgilerinde Bluetooth belirtilir. SPK-160, SPK-170 ve SPK-180 wireless şarj ve hoparlör olarak tanımlanır; ses bağlantısının ayrıntılarını ayrıca teyit edin."}, {"question": "Hangi hoparlörlerde kablosuz telefon şarjı bulunuyor?", "answer": "SPK-160, SPK-170, SPK-180 ve TT-150 bilgilerinde wireless şarj özelliği yer alır. TT-150 için 15 W belirtilir. Diğer modellerin şarj gücü ve cihaz uyumu sipariş öncesinde netleştirilir."}, {"question": "Hoparlörlerin çalma süresi ne kadar?", "answer": "SPK-150 için 400 mAh batarya ve belirtilen 3 saat çalma süresi bulunur; süre kullanım koşullarına göre değişebilir. Bu değerleri diğer modellere uygulamayın; batarya ve kullanım süresini model bazında sorun."}, {"question": "Hoparlör üzerine logo hangi yöntemle uygulanır?", "answer": "SPK-120 için lazer kazıma, SPK-150 için lazer ve UV renkli baskı belirtilir. TT-150 ışıklı LED logo alanına sahiptir. Diğer modellerin yöntemi ve kullanılabilir alanı ürün yüzeyine göre teyit edilir."}, {"question": "Fiyatlara logo baskısı ve KDV dahil mi?", "answer": "Kartlarda fiyat bulunan modellerin tutarları baskı hariç TL + KDV olarak sunulur. Model kodu, adet, renk, logo ve paketleme taleplerini paylaşarak toplam teklif alın."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isPromotionalSpeaker));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Teknolojik Ürünler",item:SITE_URL+"/promosyon-teknolojik-urunler"},
   {"@type":"ListItem",position:3,name:"Hoparlörler",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-teknolojik-urunler" className="underline">Teknolojik Ürünler</Link> / Hoparlörler</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Hoparlör Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Bluetooth hoparlörleri, mini gövdeli modelleri ve wireless şarjla birleşen masaüstü seçeneklerini karşılaştırın. Bağlantı, taşıma biçimi ve logo uygulamasını kullanım ihtiyacınıza göre değerlendirerek toplu teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-teknolojik-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Teknolojik Ürünler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} hoparlör modeli gösteriliyor</p>
  <section aria-label="Promosyon hoparlör ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Hoparlörler</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Promosyon Hoparlör Seçiminde Hangi Özellikler Karşılaştırılmalı?</h2>
   <p>Logo baskılı hoparlör seçerken ürünün nerede kullanılacağını belirleyin. Çantada taşınacak kompakt bir ses aksesuarıyla çalışma masasında duracak şarj ve hoparlör birleşimi farklı ihtiyaçlara cevap verir. Gövde ölçüsünü, bağlantı biçimini ve logo alanını birlikte inceleyin. Hediye paketinin boyutunu da ürün seçiminin bir parçası olarak değerlendirin.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">Hoparlör modellerinin belirtilen özellikleri</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ayırt edici bilgi</th></tr></thead><tbody>{[
    ["SPK-100 / SPK-110","Yatay masaüstü / kompakt köşeli Bluetooth gövde"],
    ["SPK-120","Bluetooth 5.3, taşıma sapı, 800 mAh, TF/FM/USB/AUX"],
    ["SPK-130","Siyah kompakt Bluetooth hoparlör"],
    ["SPK-140","3 W, 4 × 4 × 4,5 cm mini gövde"],
    ["SPK-150","Bluetooth 5.0, 400 mAh, Micro USB, handsfree"],
    ["SPK-160 / SPK-170 / SPK-180","Wireless şarj ve hoparlör birleşimi; farklı masaüstü formlar"],
    ["TT-150","15 W wireless şarj, Bluetooth 5.1 ve üç renk LED aydınlatma"]
   ].map(([model,feature])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Bluetooth Sürümü, Ses Kaynağı ve Kullanım Alanı</h3>
   <p>SPK-120 Bluetooth 5.3, SPK-150 Bluetooth 5.0 ve TT-150 Bluetooth 5.1 bilgisiyle sunulur. Sürüm numarası tek başına ses kalitesini veya yüksek ses seviyesini göstermez. Kullanılacak telefon ve ses kaynağıyla bağlantı uyumunu kontrol edin. SPK-160, SPK-170 ve SPK-180 için hoparlör bağlantısının ayrıntıları ayrıca teyit edilmelidir.</p>
   <p>SPK-120 için TF, FM, USB ve AUX seçenekleri belirtilir. Bu işlevlerin diğer modellerde de bulunduğunu varsaymayın. SPK-150 handsfree desteğine sahiptir; görüşme işlevi gerekiyorsa mikrofon ve kullanım beklentinizi model koduyla paylaşın. Ofis masası ve etkinlik alanı için gereken ses seviyesi aynı olmayabilir.</p>
   <h3 className="text-xl font-bold text-white">Mini Gövde ve Batarya Bilgilerini Birlikte İnceleyin</h3>
   <p>SPK-140 için 3 W ses gücü ve 4 × 4 × 4,5 cm ölçü belirtilir. Ürün bilgilerindeki 10 metre bağlantı mesafesi ortam ve engellere göre değişebilir. SPK-130 siyah kompakt gövdesiyle, SPK-120 taşıma sapıyla ayrılır. Görselde küçük görünmesi tek başına ürünün ölçüsünü veya ağırlığını belirlemez.</p>
   <p>SPK-120 bataryası 800 mAh, SPK-150 bataryası 400 mAh olarak belirtilir. Batarya kapasitesinden bütün modeller için ortak çalma süresi çıkarılamaz. SPK-150 için belirtilen 3 saat süre de ses seviyesi ve bağlantı koşullarından etkilenebilir. Diğer modellerin batarya, şarj girişi ve kullanım süresini ayrıca sorun.</p>
   <h3 className="text-xl font-bold text-white">Wireless Şarjlı Masaüstü Hoparlörler</h3>
   <p>SPK-160 dairesel şarj yüzeyiyle, SPK-170 çok yüzeyli tasarımıyla, SPK-180 ise kompakt açılı gövdesiyle tanımlanır. Bu modellerde şarj gücü ve bağlantı ayrıntıları teklif aşamasında netleştirilir. Telefon, saat veya kulaklığın her şarj alanıyla uyumlu olduğu kabul edilmemelidir.</p>
   <p>TT-150, 15 W kablosuz şarj ve üç renk LED aydınlatmayı Bluetooth hoparlörle birleştirir. Belirtilen ölçüsü 25 × 13 × 43 cm olduğundan masa alanını önceden değerlendirin. Kablosuz şarjda telefon, kılıf ve güç kaynağı uyumu önemlidir; belirtilen güç her cihazda aynı şarj hızı garantisi değildir.</p>
   <h3 className="text-xl font-bold text-white">Logo Uygulaması, Kutu ve Toplu Sipariş</h3>
   <p>SPK-120 lazer kazımaya, SPK-150 lazer veya UV renkli baskıya uygun olarak belirtilir. TT-150 ışıklı LED logo alanı sunar. Diğer modellerde yöntem ve uygulanabilir alan yüzeye göre netleştirilir. Logonuzu mümkünse vektörel dosyayla paylaşın; küçük yazıları ve yerleşimi gerçek uygulama ölçüsünde kontrol edin.</p>
   <p>Fiyat bulunan kartlarda tutarlar baskı hariç TL + KDV olarak sunulur. Model kodu, adet, renk, logo dosyası ve teslim tarihini bildirerek toplam teklif alın. Kutu, kablo, adaptör ve ek paketleme kapsamını ürün bazında teyit edin. Güncel tedarik uygunluğu ile tasarım onayı teslim planında birlikte değerlendirilir.</p>
   <p>Diğer aksesuarları karşılaştırmak için <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-white underline">teknolojik promosyon ürünlerini</Link>, bağlantı aksesuarları için <Link href="/promosyon-sarj-kablosu" className="font-semibold text-white underline">şarj kablosu modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Hoparlörler Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="hoparlor-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="hoparlor-rehberi-baslik" className="text-xl font-bold !text-black">Hoparlör Seçimini Dinleme İhtiyacınıza Göre Yapın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Ses kaynağı, bağlantı, taşınabilirlik ve ek işlevleri değerlendirin; numunede dinleme ve logo yerleşimini birlikte planlayın.</p>
        <Link href="/rehber/promosyon-hoparlor-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Hoparlör Seçim Rehberini İncele →</Link>
      </section>
 </div>;
}
