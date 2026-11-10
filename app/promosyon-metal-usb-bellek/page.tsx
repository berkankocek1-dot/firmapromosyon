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
 openGraph: { title: "Logo Baskılı Metal USB Bellek Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMetalUsb(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon USB Bellek", item: `${SITE_URL}/promosyon-usb-bellek` },
    { "@type": "ListItem", position: 3, name: "Metal USB Bellek", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Metal Promosyon USB Bellek", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-usb-bellek" className="underline">Promosyon USB Bellek</Link> / Metal USB Bellek</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Metal Promosyon USB Bellek Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Metal gövdeli USB bellekleri döner kapak, askı, anahtarlık ve karabina tasarımlarına göre karşılaştırın. Kapasite ve bağlantı seçeneğini logo alanından ayrı değerlendirerek model kodu ve adetle kurumsal teklif isteyin.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-usb-bellek" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm USB Bellek Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} metal USB bellek modeli gösteriliyor</p>
      <section aria-label="Metal USB bellek ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">USB Bellek</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Metal USB Bellekte Gövde Tasarımı ve Taşıma Biçimi</h2>
        <p>Metal gövdeli modeller arasındaki seçim yalnız renkle sınırlı değildir. Döner kapak, askı açıklığı, anahtarlık bağlantısı ve karabina farklı taşıma biçimleri sunar. Kullanıcıların belleği nerede taşıyacağını ve logonun hangi yüzeyde görüneceğini birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Metal USB belleklerde model ve tasarım farkları</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ürün bilgilerindeki ayrım</th></tr></thead><tbody>{[
         ["UB-101", "Metal gövdeli, döner kapaklı"], ["UB-110, UB-170", "Anahtarlıklı metal tasarım"], ["UB-120, UB-160", "Metal gövde ve farklı renk seçenekleri"], ["UB-130", "Askılı metal tasarım"], ["UB-180", "Yekpare metal gövde"], ["UB-210", "Karabinalı metal gövde"], ["UB-220", "Halka tasarımı, USB 3.0 olarak belirtilir"], ["UB-230", "Yuvarlak metal tasarım ve taşıma ipi"], ["UB-140", "USB 2.0 ve USB 3.0 seçenekleri belirtilen metal model"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Metal Gövde ile Kapasiteyi Karıştırmayın</h3>
        <p>Gövde malzemesi depolanabilecek dosya miktarını belirlemez. Paylaşılacak katalog, sunum veya video dosyalarının toplam boyutunu hesaplayıp istenen kapasiteyi teklif talebine ekleyin. Aynı gövde farklı kapasite seçenekleriyle sunulabilir; güncel seçeneğin ilgili modelde temin edilebildiğini teyit edin.</p>
        <h3 className="text-xl font-bold text-white">USB Sürümü ve Gerçek Aktarım İhtiyacı</h3>
        <p>Metal olması hızlı aktarım garantisi değildir. UB-140 modelinde USB 2.0 ve USB 3.0 seçenekleri, UB-220 modelinde USB 3.0 desteği belirtilir. Bağlantı standardını kapasiteyle birlikte kontrol edin. Gerçek okuma ve yazma performansı kullanılan bellek ve cihaz özelliklerine bağlıdır; sabit hız varsaymayın.</p>
        <p>Bağlantı ucunun fiziksel biçimi de ayrıca değerlendirilmelidir. Belleğin kullanılacağı bilgisayar veya cihazın portuyla uyumunu inceleyin. Bir üründeki teknik özelliği benzer kodlu başka bir modele otomatik olarak taşımayın.</p>
        <h3 className="text-xl font-bold text-white">Lazer, UV ve Logo Yerleşimi</h3>
        <p>Metal yüzeyde lazer kazıma uygunluğu kaplama ve uygulama alanına göre belirlenir. Renkli logolarda yüzeye uygun UV, tampon veya başka yöntemler değerlendirilebilir. Her metal gövdeye aynı yöntemle aynı sonucun uygulanacağı kabul edilmemelidir.</p>
        <p>Döner kapak veya hareketli mekanizma logo alanını sınırlayabilir. Tasarımı gerçek uygulama ölçüsünde kontrol edin; küçük yazı ve ince çizgilerin okunabilirliğine bakın. Logonuzu mümkünse vektörel dosya olarak paylaşın ve tek veya çift yön uygulama isteğini belirtin.</p>
        <h3 className="text-xl font-bold text-white">Birim Fiyatı Aynı Kapsamla Karşılaştırın</h3>
        <p>Teklifleri aynı model, kapasite, bağlantı seçeneği ve adet üzerinden değerlendirin. Logo uygulaması, özel kutu, paketleme ve varsa dosya yükleme hizmeti toplam tutarı değiştirebilir. Kart fiyatı bu hizmetlerin tamamını içeriyor kabul edilmemeli; baskı ve KDV kapsamı teklif aşamasında netleştirilmelidir.</p>
        <p>Katalog veya sunum yükleme talebiniz varsa hizmetin sunulabilirliğini, maliyetini ve teslim süresine etkisini ayrıca sorun. Dosyaların son sürümünü, toplam boyutunu ve hedef cihazlarda açılabildiğini kontrol edin.</p>
        <h3 className="text-xl font-bold text-white">Kurumsal Sipariş İçin Gerekli Bilgiler</h3>
        <p>Ürün kodu, kapasite, renk ve adedi; logo dosyası, uygulama konumu ve ihtiyaç tarihiyle birlikte paylaşın. Tedarik durumu ve baskı onayı teslim planında birlikte değerlendirilir. Etkinlik tarihi veya özel paketleme gereksinimi varsa bu bilgileri en başta belirtin.</p>
        <p>Deri, ahşap, kart ve kalem biçimindeki alternatifler için <Link href="/promosyon-usb-bellek" className="font-semibold text-white underline">tüm promosyon USB bellek modellerini</Link> inceleyebilirsiniz. Farklı hediye gruplarını bir araya getirmek için <Link href="/urunler" className="font-semibold text-white underline">ürün kataloğunu</Link> kullanabilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Metal USB Bellek Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="usb-bellek-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="usb-bellek-secim-rehberi-baslik" className="text-xl font-bold !text-black">USB Bellek Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, bağlantı, aktarım performansı ve logo alanını ayrı değerlendirin; numune ve toplu sipariş kontrolünü planlayın.</p>
        <Link href="/rehber/promosyon-usb-bellek-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">USB Bellek Seçim Rehberini İncele →</Link>
      </section>
    </div>
  );
}
