import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMetalUsb } from "@/data/usbSubcategories";

const CATEGORY = "USB Bellek";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-metal-usb-bellek`;
const description = "Metal promosyon USB bellek modellerini karşılaştırın. Döner kapaklı, anahtarlıklı ve karabinalı seçeneklerde kapasite ve logo uygulaması için teklif alın.";
const faqItems = [
 { question: "Metal gövde USB belleğin hızını belirler mi?", answer: "Hayır. Gövde malzemesi ile bağlantı standardı, depolama kapasitesi ve gerçek okuma-yazma performansı ayrı özelliklerdir. Metal gövdeli olması tek başına USB 3.0 veya belirli bir hız anlamına gelmez." },
 { question: "Listede neden deri veya kutulu setler yok?", answer: "Bu sayfa metal gövdeli bağımsız USB bellekleri karşılaştırmak için hazırlanmıştır. Deri ve ahşap detaylı ürünler, kart modelleri, kalem USB ve kutulu setler bu grubun dışında tutulur. Bütün seçenekleri ana USB bellek sayfasında inceleyebilirsiniz." },
 { question: "Her metal USB modele lazer uygulanabilir mi?", answer: "Lazer uygunluğu metal yüzeyin kaplamasına ve modelin logo alanına bağlıdır. Renkli tasarım için UV veya tampon gibi yöntemler de değerlendirilebilir. Uygulama tekniğini logo dosyası ve ürün koduyla teyit edin." },
 { question: "UB-140 ile UB-220 aynı bağlantı özelliklerini mi sunar?", answer: "UB-140 açıklamasında USB 2.0 ve USB 3.0 seçenekleri, UB-220 açıklamasında USB 3.0 desteği belirtilir. İstenen kapasiteyle birlikte sunulan güncel bağlantı seçeneğini teklif sırasında ayrıca doğrulayın." },
 { question: "Metal promosyon USB bellek için nasıl teklif alınır?", answer: "Model kodu, kapasite, adet, gövde rengi ve logo dosyanızı paylaşın. Baskı yöntemi, tek veya çift yön uygulama, varsa kutu veya dosya yükleme talebini ayrıca belirtin. Güncel fiyat, tedarik durumu ve teslim süresi bu kapsama göre teyit edilir." },
];
export const metadata: Metadata = {
 title: "Metal Promosyon USB Bellek Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-usb-bellek-ub-101.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Metal USB Bellek Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMetalUsb(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon USB Bellek", item: `${SITE_URL}/promosyon-usb-bellek` },
    { "@type": "ListItem", position: 3, name: "Metal USB Bellek", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Metal Promosyon USB Bellek", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-usb-bellek" className="underline">Promosyon USB Bellek</Link> / Metal USB Bellek</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Metal Promosyon USB Bellek Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">Metal gövdeli USB bellekleri döner kapak, askı, anahtarlık ve karabina tasarımlarına göre karşılaştırın. Kapasite ve bağlantı seçeneğini logo alanından ayrı değerlendirerek model kodu ve adetle kurumsal teklif isteyin.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-usb-bellek" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm USB Bellek Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-metal-usb-bellek-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Metal USB Bellekte Gövde Tasarımı ve Taşıma Biçimi</h2>
        <p>Metal gövdeli modeller arasındaki seçim yalnız renkle sınırlı değildir. Döner kapak, askı açıklığı, anahtarlık bağlantısı ve karabina farklı taşıma biçimleri sunar. Kullanıcıların belleği nerede taşıyacağını ve logonun hangi yüzeyde görüneceğini birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Metal USB belleklerde model ve tasarım farkları</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ürün bilgilerindeki ayrım</th></tr></thead><tbody>{[
         ["UB-101", "Metal gövdeli, döner kapaklı"], ["UB-110, UB-170", "Anahtarlıklı metal tasarım"], ["UB-120, UB-160", "Metal gövde ve farklı renk seçenekleri"], ["UB-130", "Askılı metal tasarım"], ["UB-180", "Yekpare metal gövde"], ["UB-210", "Karabinalı metal gövde"], ["UB-220", "Halka tasarımı, USB 3.0 olarak belirtilir"], ["UB-230", "Yuvarlak metal tasarım ve taşıma ipi"], ["UB-140", "USB 2.0 ve USB 3.0 seçenekleri belirtilen metal model"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Metal Gövde ile Kapasiteyi Karıştırmayın</h3>
        <p>Gövde malzemesi depolanabilecek dosya miktarını belirlemez. Paylaşılacak katalog, sunum veya video dosyalarının toplam boyutunu hesaplayıp istenen kapasiteyi teklif talebine ekleyin. Aynı gövde farklı kapasite seçenekleriyle sunulabilir; güncel seçeneğin ilgili modelde temin edilebildiğini teyit edin.</p>
        <h3 className="text-xl font-bold text-black">USB Sürümü ve Gerçek Aktarım İhtiyacı</h3>
        <p>Metal olması hızlı aktarım garantisi değildir. UB-140 modelinde USB 2.0 ve USB 3.0 seçenekleri, UB-220 modelinde USB 3.0 desteği belirtilir. Bağlantı standardını kapasiteyle birlikte kontrol edin. Gerçek okuma ve yazma performansı kullanılan bellek ve cihaz özelliklerine bağlıdır; sabit hız varsaymayın.</p>
        <p>Bağlantı ucunun fiziksel biçimi de ayrıca değerlendirilmelidir. Belleğin kullanılacağı bilgisayar veya cihazın portuyla uyumunu inceleyin. Bir üründeki teknik özelliği benzer kodlu başka bir modele otomatik olarak taşımayın.</p>
        <h3 className="text-xl font-bold text-black">Lazer, UV ve Logo Yerleşimi</h3>
        <p>Metal yüzeyde lazer kazıma uygunluğu kaplama ve uygulama alanına göre belirlenir. Renkli logolarda yüzeye uygun UV, tampon veya başka yöntemler değerlendirilebilir. Her metal gövdeye aynı yöntemle aynı sonucun uygulanacağı kabul edilmemelidir.</p>
        <p>Döner kapak veya hareketli mekanizma logo alanını sınırlayabilir. Tasarımı gerçek uygulama ölçüsünde kontrol edin; küçük yazı ve ince çizgilerin okunabilirliğine bakın. Logonuzu mümkünse vektörel dosya olarak paylaşın ve tek veya çift yön uygulama isteğini belirtin.</p>
        <h3 className="text-xl font-bold text-black">Birim Fiyatı Aynı Kapsamla Karşılaştırın</h3>
        <p>Teklifleri aynı model, kapasite, bağlantı seçeneği ve adet üzerinden değerlendirin. Logo uygulaması, özel kutu, paketleme ve varsa dosya yükleme hizmeti toplam tutarı değiştirebilir. Kart fiyatı bu hizmetlerin tamamını içeriyor kabul edilmemeli; baskı ve KDV kapsamı teklif aşamasında netleştirilmelidir.</p>
        <p>Katalog veya sunum yükleme talebiniz varsa hizmetin sunulabilirliğini, maliyetini ve teslim süresine etkisini ayrıca sorun. Dosyaların son sürümünü, toplam boyutunu ve hedef cihazlarda açılabildiğini kontrol edin.</p>
        <h3 className="text-xl font-bold text-black">Kurumsal Sipariş İçin Gerekli Bilgiler</h3>
        <p>Ürün kodu, kapasite, renk ve adedi; logo dosyası, uygulama konumu ve ihtiyaç tarihiyle birlikte paylaşın. Tedarik durumu ve baskı onayı teslim planında birlikte değerlendirilir. Etkinlik tarihi veya özel paketleme gereksinimi varsa bu bilgileri en başta belirtin.</p>
        <p>Deri, ahşap, kart ve kalem biçimindeki alternatifler için <Link href="/promosyon-usb-bellek" className="font-semibold text-black underline">tüm promosyon USB bellek modellerini</Link> inceleyebilirsiniz. Farklı hediye gruplarını bir araya getirmek için <Link href="/urunler" className="font-semibold text-black underline">ürün kataloğunu</Link> kullanabilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Metal USB Bellek Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="usb-bellek-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="usb-bellek-secim-rehberi-baslik" className="text-xl font-bold !text-black">USB Bellek Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, bağlantı, aktarım performansı ve logo alanını ayrı değerlendirin; numune ve toplu sipariş kontrolünü planlayın.</p>
        <Link href="/rehber/promosyon-usb-bellek-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-usb-bellek-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">USB Bellek Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon USB bellek seçerken kapasiteyi, bağlantıyı, gerçek aktarım hızını ve logo alanını ayrı değerlendirin. Numune, dosya yükleme ve toplu siparişinizi planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
