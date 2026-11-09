import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isChargingCable } from "@/data/technologySubcategories";

const CATEGORY = "Teknolojik Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-sarj-kablosu";
const title = "Promosyon Şarj Kablosu Modelleri ve Fiyatları";
const description = "Logo baskılı çoklu şarj kablolarını ve kutulu kablo setlerini karşılaştırın. Bağlantı uçları, taşıma seçenekleri ve ışıklı logo uygulaması için toplu teklif alın.";
const faqItems = [{"question": "Çoklu şarj kablosu her telefonla uyumlu mu?", "answer": "Uçların cihazın fiziksel girişine uygun olması gerekir. KBL-170 için iOS, Micro USB ve Type-C; KBL-130 için Android, iOS ve Type-C uyumu belirtilir. Diğer modellerin kesin uç ve adaptör listesini sipariş öncesinde teyit edin."}, {"question": "Şarj kablolarının hepsi hızlı şarj ve veri aktarımı destekler mi?", "answer": "Hayır. Bağlantı ucunun uygunluğu tek başına hızlı şarj, veri aktarımı veya CarPlay desteği anlamına gelmez. Gerekli protokol, güç ve veri işlevi model ve cihaz bazında kontrol edilmelidir."}, {"question": "Hangi modellerde ışıklı logo alanı bulunuyor?", "answer": "KBL-130, KBL-140 ve KBL-170 bilgilerinde ışıklı uygulama alanı belirtilir. KBL-130 için çift yön ışıklı lazer uygulaması yer alır. Diğer modellerin logo yöntemi ve alanı ayrıca netleştirilir."}, {"question": "Kutulu setler ile anahtarlıklı kabloların farkı nedir?", "answer": "KBL-100, KBL-110 ve KBL-120 kutulu setlerdir. KBL-130 EVA kutu ve anahtarlık halkasıyla, KBL-140 taşıma çantasıyla, KBL-150 anahtarlık halkasıyla tanımlanır. Nihai paket içeriğini seçilen model için teyit edin."}, {"question": "Fiyatlara baskı ve KDV dahil mi?", "answer": "Kartlarda fiyat bulunan modellerin tutarları baskı hariç TL + KDV olarak sunulur. Adet, logo dosyası, renk ve teslimat talebinize göre toplam teklif alın."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isChargingCable));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Teknolojik Ürünler",item:SITE_URL+"/promosyon-teknolojik-urunler"},
   {"@type":"ListItem",position:3,name:"Şarj Kabloları",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-teknolojik-urunler" className="underline">Teknolojik Ürünler</Link> / Şarj Kabloları</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Şarj Kablosu Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Kutulu kablo setlerini, anahtarlık halkalı çoklu kabloları ve ışıklı logo seçeneklerini karşılaştırın. Cihaz bağlantılarını ve taşıma biçimini birlikte değerlendirerek toplu sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-teknolojik-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Teknolojik Ürünler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} şarj kablosu modeli gösteriliyor</p>
  <section aria-label="Promosyon şarj kablosu ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Şarj Kabloları</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Kurumsal Hediye İçin Çoklu Şarj Kablosu Nasıl Seçilir?</h2>
   <p>Promosyon şarj kablosu seçerken önce kullanıcıların cihaz girişlerini ve kablonun nerede taşınacağını belirleyin. Çalışma masasında kutulu bir set, seyahatte taşıma çantalı bir model veya anahtarlarla birlikte taşınan kısa bir kablo farklı ihtiyaçlara cevap verebilir. Model seçiminde yalnız logo görünümünü değil bağlantı ve paket içeriğini de karşılaştırın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">Şarj kablosu modellerinde taşıma ve uygulama farkları</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ürün bilgisinde belirtilen ayrım</th></tr></thead><tbody>{[
    ["KBL-100","Kutulu çoklu şarj kablo seti"],["KBL-110","İnce ve uzun taşıma kutusu"],["KBL-120","Kapaklı kutulu set"],["KBL-130","EVA kutu, anahtarlık halkası, çift yön ışıklı lazer"],["KBL-140","Taşıma çantalı, ışıklı logo alanı"],["KBL-150","Anahtarlık halkalı çoklu kablo"],["KBL-170","iOS, Micro USB ve Type-C uçları, beyaz LED logo alanı"]
   ].map(([code,feature])=><tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Bağlantı Uyumu ile Şarj Hızını Ayrı Değerlendirin</h3>
   <p>Type-C, Micro USB ve iOS bağlantı ifadeleri model bazında kontrol edilmelidir. KBL-170 için iOS, Micro USB ve Type-C; KBL-130 için Android, iOS ve Type-C uyumu belirtilir. Diğer modellerin uç sayısı ve adaptör listesinin aynı olduğunu varsaymayın. Kullanılacak telefon veya cihaz modelini teklif talebine ekleyin.</p>
   <p>KBL-130 için 5 V / 2,4 A elektrik değeri yer alır. Bu bilgi bütün cihazlarda aynı hız veya belirli bir hızlı şarj protokolü garantisi değildir. Çoklu uç bulunması da tüm cihazların aynı anda aynı güçte şarj olacağını göstermez. Adaptör, cihaz ve kablo birlikte değerlendirilmelidir.</p>
   <p>Şarj, veri aktarımı ve araç bağlantısı farklı işlevlerdir. Veri senkronizasyonu veya CarPlay gibi bir beklentiniz varsa bunu ayrıca belirtin. Yalnız fiziksel ucun telefona uyması, bu işlevlerin desteklendiğini kanıtlamaz.</p>
   <h3 className="text-xl font-bold text-white">Kutulu Set mi, Anahtarlık Halkalı Kablo mu?</h3>
   <p>KBL-100, KBL-110 ve KBL-120 kutulu şarj kablo setleri olarak sunulur. KBL-110 ince ve uzun, KBL-120 kapaklı kutusuyla ayrılır. Kutunun formunu hediye paketinin ölçüsü ve kullanıcıların taşıma alışkanlığıyla birlikte değerlendirin. Kutuda görülen her bağlantı parçasının teslim kapsamını ayrıca teyit edin.</p>
   <p>KBL-130 EVA kutu ve anahtarlık halkasıyla, KBL-140 taşıma çantasıyla, KBL-150 anahtarlık halkasıyla tanımlanır. Çantada saklama ile anahtarların yanında taşıma farklı kullanım biçimleridir. Kablo uzunluğu, kaplama malzemesi ve nihai kutu içeriği model bazında netleştirilmelidir.</p>
   <h3 className="text-xl font-bold text-white">Işıklı Logo ve Baskı Alanı</h3>
   <p>KBL-130, KBL-140 ve KBL-170 bilgilerinde ışıklı uygulama alanı bulunur. KBL-130 için çift yön ışıklı lazer uygulaması belirtilir. Aynı yöntemi diğer modellere otomatik olarak uygulamayın; logo alanının şekli ve desteklenen işlem ürün bazında değişebilir.</p>
   <p>Logonuzu mümkünse vektörel dosyayla paylaşın. Küçük yazılar, ince çizgiler ve kullanılacak yüz sayısı tasarım aşamasında değerlendirilmelidir. Kutuya ve kablo gövdesine uygulama taleplerini ayrı belirtin; yapılabilirlik ve bedelleri teklif kapsamında netleştirin.</p>
   <h3 className="text-xl font-bold text-white">Toplu Sipariş ve Fiyat Kapsamı</h3>
   <p>Fiyat bulunan kartlarda tutarlar baskı hariç TL + KDV olarak sunulur. Ürün kodunu, adedi, rengi, logo dosyasını ve hedef teslim tarihini paylaşarak toplam teklif alın. Güncel tedarik uygunluğu, logo onayı ve paketleme teslim planını etkiler. Kablo setini bir çalışan kiti içinde kullanacaksanız kutu ölçüsü ve ek paketleme ihtiyacını da belirtin.</p>
   <p>Bilgisayara çevre birimi bağlamak için kullanılan Type-C çoklayıcı, şarj kablosundan farklı bir ürün türüdür ve bu listede yer almaz. Diğer aksesuarlar için <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-white underline">teknolojik promosyon ürünlerini</Link>, taşınabilir enerji ihtiyacı için <Link href="/promosyon-powerbank" className="font-semibold text-white underline">powerbank modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-2xl border border-white/15 p-6 text-gray-200">
   <h2 className="text-xl font-bold text-white">Sipariş Öncesi Şarj Kablosu Seçim Rehberi</h2>
   <p className="mt-3 leading-7">Cihaz ve adaptör uyumu, hızlı şarj ve veri beklentisi, numune denemesi ve logo onayı için kontrol adımlarını inceleyin.</p>
   <Link href="/rehber/promosyon-sarj-kablosu-secim-rehberi" className="mt-4 inline-block font-semibold text-white underline">Promosyon Şarj Kablosu Seçim Rehberini Oku</Link>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Şarj Kabloları Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
