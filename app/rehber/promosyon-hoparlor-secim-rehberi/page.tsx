import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-hoparlor-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-hoparlor-secim-rehberi.jpg";
const TITLE = "Promosyon Hoparlör Seçimi | Bağlantı, Ses ve Kullanım Rehberi";
const DESCRIPTION = "Promosyon hoparlörleri ses kaynağı, bağlantı, taşınabilirlik ve kullanım süresi bilgileriyle değerlendirin. Numunede dinleme ve kurumsal logo alanını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Bluetooth sürüm numarası ses kalitesini gösterir mi?",
    "answer": "Tek başına ses kalitesi veya yüksek ses seviyesi garantisi değildir. Kaynak cihazla bağlantıyı ve dinleme beklentinizi seçilen model üzerinde değerlendirin."
  },
  {
    "question": "Her hoparlörde USB, AUX veya hafıza kartı desteği var mı?",
    "answer": "Hayır. Üründe bir bağlantı noktası görünmesi bütün işlevleri desteklediğini göstermez. Ses kaynağı ve desteklenen girişler modelin teknik bilgisinden teyit edilmelidir."
  },
  {
    "question": "Batarya kapasitesinden çalma süresi hesaplanabilir mi?",
    "answer": "Farklı modeller için yalnız mAh değerini karşılaştırarak ortak bir süre sonucu çıkarılmamalıdır. Belirtilen çalma süresinin kullanım koşullarını sorun ve seçilen modeli bu beklentiyle değerlendirin."
  },
  {
    "question": "Hoparlör telefon görüşmesinde kullanılabilir mi?",
    "answer": "Yalnız ses çalması mikrofon veya handsfree desteği olduğunu göstermez. Görüşme işlevi gerekiyorsa bu özelliği teyit edin ve numunede karşı tarafın duyduğu sesi de kontrol edin."
  },
  {
    "question": "Mini hoparlör etkinlik alanı için yeterli mi?",
    "answer": "Küçük gövde veya tek bir güç değeri kullanım alanında yeterli ses sağlanacağını garanti etmez. Ortamı, dinleme uzaklığını ve kullanım amacını belirterek uygunluğu değerlendirin."
  },
  {
    "question": "Kablosuz şarjlı hoparlörün dahili bataryası var mı?",
    "answer": "Kablosuz telefon şarjı ile hoparlörün kendi enerji kaynağı ayrı özelliklerdir. Dahili batarya, güç girişi ve eş zamanlı kullanım koşulları seçilen model için öğrenilmelidir."
  },
  {
    "question": "Logo hoparlörün her yüzeyine uygulanabilir mi?",
    "answer": "Izgara, düğmeler, bağlantı noktaları ve varsa şarj alanı uygun uygulama yüzeyi olarak kabul edilmemelidir. Yöntem ve kullanılabilir alan seçilen gövde için teyit edilmelidir."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: "article",
    siteName: "FirmaPromosyon", locale: "tr_TR",
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kompakt promosyon hoparlör seçeneklerinin temsili görünümü" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}${IMAGE_PATH}`] },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: TITLE, description: DESCRIPTION, inLanguage: "tr-TR", mainEntityOfPage: PAGE_URL,
    image: [`${SITE_URL}${IMAGE_PATH}`],
    author: { "@type": "Organization", name: "FirmaPromosyon" },
    publisher: { "@type": "Organization", name: "FirmaPromosyon", url: SITE_URL },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: "Promosyon Hoparlör Seçim Rehberi", item: PAGE_URL },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-600">
        <Link href="/" className="underline">Ana Sayfa</Link><span aria-hidden="true">/</span>
        <Link href="/rehber" className="underline">Rehber</Link><span aria-hidden="true">/</span>
        <span>Hoparlör Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Hoparlör Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon hoparlör seçerken ilk soru en yüksek sürüm veya güç değeri değil, ürünün nerede ve hangi ses kaynağıyla kullanılacağıdır. Masada kısa dinleme, çantada taşıma ve görüşme ihtiyacı farklı beklentiler oluşturur. Bu rehber, ses kullanımını bağlantı, enerji kaynağı ve kurumsal markalamayla birlikte değerlendirmek için hazırlanmıştır.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Siyah dikdörtgen ve lacivert silindirik hoparlör ile ekranı kapalı telefon" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, bağlantı özelliklerini veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Önce dinleme ortamını tanımlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-hoparlor">Promosyon hoparlör modellerini</Link> hedef kullanım ortamına göre inceleyin. Ofis masasında yakın dinleme ile kalabalık etkinlik alanında ses duyurma ihtiyacı aynı değildir. Telefonla mı bilgisayarla mı kullanılacağını ve taşınmasının gerekip gerekmediğini belirleyin.</p>
              <p>Küçük gövdeyi veya bir güç değerini tek başına ortam uygunluğu olarak yorumlamayın. Beklediğiniz dinleme uzaklığını ve kullanım biçimini tedarikçiye anlatın; numuneyi mümkün olduğunca bu koşullara yakın değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ses girişlerini bağlantı noktalarından ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bluetooth, AUX, USB, hafıza kartı veya radyo gibi seçenekler model bazında değişebilir. Fotoğrafta USB bağlantısı görmek, bu noktanın hem ses dosyası okuyabildiğini hem de başka cihazları şarj edebildiğini göstermez. Hangi girişin hangi işlevi sağladığını ürün bilgisinden öğrenin.</p>
              <p>Bluetooth sürümünü tek başına daha iyi ses garantisi olarak kullanmayın. Hedef telefon veya bilgisayarla eşleşmeyi, tekrar bağlantıyı ve gerekli ses işlevini kontrol edin. Kart ya da USB üzerinden çalma önemliyse desteklenen ortam ve dosya koşullarını ayrıca sorun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numunede aynı kayıtla karşılaştırma yapın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İki modeli değerlendirirken aynı ses kaynağını ve aynı kaydı kullanın. Konuşma ağırlıklı kullanım için anlaşılabilirliğe, müzik için kendi dinleme beklentinize bakın. Yalnız katalogdaki güç veya gövde boyutuna göre bir sıralama yapmayın.</p>
              <p>Bağlantıyı, ses düğmelerini ve masadaki yerleşimi birlikte deneyin. Kısa dinlemeden bütün ortamlarda aynı sonuç çıkarmayın. Görüşme işlevi talep ediliyorsa mikrofon veya handsfree desteğini önceden teyit edin; karşı taraftan duyduğu sesi değerlendirmesini isteyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Hoparlör değerlendirme tablosu</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Gerekli işlevleri model bilgisiyle eşleştirin; belirtilmeyen özelliği varsaymayın.</caption>
              <thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">İhtiyaç</th><th scope="col" className="border p-3">Numune kontrolü</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Ses kaynağı</th><td className="border p-3">Telefon, bilgisayar veya başka kaynak</td><td className="border p-3">Hedef cihazla bağlantı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Dinleme</th><td className="border p-3">Kullanım ortamı ve uzaklık</td><td className="border p-3">Aynı kayıtla karşılaştırma</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Görüşme</th><td className="border p-3">Mikrofon veya handsfree desteği</td><td className="border p-3">Karşı tarafa giden ses</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Taşıma</th><td className="border p-3">Ölçü, ağırlık ve enerji kaynağı</td><td className="border p-3">Çanta ve masa yerleşimi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ek işlev</th><td className="border p-3">Şarj veya aydınlatma kapsamı</td><td className="border p-3">Gerekli ekipmanla birlikte kullanım</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Batarya ile şarj girişini ayrı okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Dahili batarya, bağlantı soketi ve belirtilen çalma süresi farklı bilgilerdir. Yalnız batarya kapasitesinden farklı modeller için ortak bir kullanım süresi çıkarmayın. İlan edilen sürenin ses seviyesi ve diğer kullanım koşullarını öğrenin.</p>
              <p>Hoparlörün hangi kablo ve güç kaynağıyla şarj edildiğini, bunların pakete dahil olup olmadığını sorun. Masaüstünde sürekli güçle çalışan birleşik ürünleri taşınabilir bataryalı hoparlörle aynı kullanım biçimi olarak değerlendirmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ek işlevleri hoparlör seçiminden ayrı onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kablosuz telefon şarjı, aydınlatma veya ışıklı logo bulunması ses bağlantısının ayrıntılarını açıklamaz. Satın alma gerekçeniz olan her işlevi ayrı kaydedin. Birlikte çalıştırma önemliyse güç gereksinimini ve eş zamanlı kullanım koşullarını öğrenin.</p>
              <p>Şarj yüzeyi bulunan bir model seçilecekse telefon ve kılıf uyumu için <Link href="/rehber/promosyon-kablosuz-sarj-cihazi-secim-rehberi">kablosuz şarj cihazı rehberindeki</Link> cihaz–adaptör tablosunu kullanabilirsiniz. Bu özellik hoparlörün dahili bataryası olduğunu veya telefona her durumda aynı güçte enerji aktardığını göstermez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo alanını ızgara ve kontrollerden ayrı belirleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Gövde üzerindeki ses ızgarası, düğme, bağlantı girişi ve varsa şarj yüzeyi kullanılabilir logo alanıyla karıştırılmamalıdır. Lazer, renkli baskı veya ışıklı markalamanın uygunluğu seçilen ürün için değerlendirilmelidir.</p>
              <p>Yerleşimi hoparlörün masada duracağı yönde inceleyin. Taşıma sapı veya kablo logonun önüne geliyor mu, işlev düğmelerine erişim korunuyor mu? Onay görselinde bu parçalarla logo konumu birlikte görülsün.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teslim paketini dinleme planıyla eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Teklifte ses bağlantısı, enerji kaynağı, gövde rengi ve markalama açıkça yer alsın. Kutu ve bağlantı kablosunun kapsamı belli olsun; ek bir adaptör gerekiyorsa dağıtım paketine dahil edilip edilmeyeceğini baştan kararlaştırın.</p>
              <p>Toplu alım öncesinde örnek cihazın bağlantı, dinleme ve kontrol düğmelerine ilişkin değerlendirmesini kaydedin. Teslim edilecek modelle numune kapsamını eşleştirin. Daha geniş hediye paketi için <Link href="/promosyon-teknolojik-urunler">teknolojik promosyon ürünlerini</Link> inceleyebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-6">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="text-lg font-semibold">{question}</h3>
                  <p className="mt-2 leading-7 text-gray-700">{answer}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="flex flex-wrap gap-3">
            <Link href="/promosyon-hoparlor" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Hoparlör Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
