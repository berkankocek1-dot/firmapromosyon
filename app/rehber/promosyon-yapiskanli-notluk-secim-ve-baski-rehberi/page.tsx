import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-yapiskanli-notluk-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-yapiskanli-notluk-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Yapışkanlı Notluk Seçimi | İçerik ve Baskı Rehberi";
const DESCRIPTION = "Yapışkanlı notlukları not bloğu, ayraç, kapak ve ölçüleriyle değerlendirin. Defter sayfalarını ayrı okuyup kapak ve iç kağıt baskısı kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Yapışkanlı notluk ile tutkallı bloknot aynı mı?",
    "answer": "Hayır. Yaprakları bir blok halinde tutan cilt, kağıdın başka bir yüzeye yapışabildiğini göstermez. Yapışkanlı not özelliği ve hangi bölümlerde bulunduğu model bazında kontrol edilmelidir."
  },
  {
    "question": "Defter sayfa sayısı yapışkanlı not adedi mi?",
    "answer": "Aynı bilgi olarak okunmamalıdır. Defter sayfaları, büyük not bloğu ve ayraçların miktarı ayrı olabilir. Her adedin hangi bölüme ait olduğunu öğrenin."
  },
  {
    "question": "Renkli ayraçlar her notlukta bulunur mu?",
    "answer": "Görselde veya bir modelin açıklamasında bulunan bölüm bütün kategoriye genellenmemelidir. Ayraçların varlığı, ölçüsü ve miktarı seçilen ürün için teyit edilmelidir."
  },
  {
    "question": "Kapak ölçüsü not kağıdının ölçüsü mü?",
    "answer": "Hayır. Dış kapak, açık ürün ve iç not bölümleri farklı ölçülere sahip olabilir. Yazılabilir alanı kendi kağıt ölçüsü üzerinden değerlendirin."
  },
  {
    "question": "Kraft kapak geri dönüşüm sertifikası gösterir mi?",
    "answer": "Kraft görünüm veya kapak ifadesi tek başına bütün ürün için geri dönüştürülmüş içerik ya da sertifika taahhüdü değildir. Malzeme iddiası hangi parçaya aitse o kapsamda doğrulanmalıdır."
  },
  {
    "question": "Logo baskısı bütün iç kağıtlara dahil mi?",
    "answer": "Kapak baskısı ile iç kağıt uygulaması ayrı taleplerdir. Hangi bloğa, hangi yüzeye ve nasıl uygulama istendiği belirtilmeli; üretim uygunluğu ve fiyat kapsamı ayrıca öğrenilmelidir."
  },
  {
    "question": "Kalem tutucu bulunan modelde kalem var mı?",
    "answer": "Tutucu bulunması veya fotoğraftaki kalem dahil kapsamı kanıtlamaz. Kalem, ambalaj ve diğer ek parçalar teklifte ayrı netleştirilmelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kapaklı yapışkanlı not bloğu ve renkli ayraçların temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Yapışkanlı Notluk Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Yapışkanlı Notluk Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Yapışkanlı Notluk Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon yapışkanlı notluk seçerken kapağın görünümünden önce iç bölümlerin ne işe yaradığını belirleyin. Kısa hatırlatma yazılan blok, sayfa işaretleyen ayraç ve varsa defter bölümü farklı ihtiyaçlara cevap verir. Bu rehber, bölüm adediyle kağıt miktarını ayırarak logo uygulamasını doğru yüzeyde planlamanıza yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Kraft kapakta sarı not bloğu ve pastel ayraçlar ile kapalı lacivert notluk" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, kağıt adedini veya malzeme içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Hatırlatma notu ile sayfa işaretlemeyi ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-yapiskanli-notluklar">Yapışkanlı notluk modellerini</Link> kısa mesaj yazma, belge işaretleme ve birlikte taşıma ihtiyacına göre inceleyin. Geniş not bloğuyla dar ayraç aynı yazım alanını sunmaz. Kaç farklı bölüm gerektiğini kullanım alışkanlığına göre belirleyin.</p>
              <p>Görseldeki renklerin sayısı tek başına bütün blokların miktarını veya standart içeriği açıklamaz. Seçilen modelde hangi bölümlerin bulunduğunu listeleyin. Sadece bölüm sayısı fazla olduğu için kullanımınıza uygun olduğunu düşünmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kağıt miktarını her blok için ayrı okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Üründe defter de bulunuyorsa defterin sayfa veya yaprak bilgisini yapışkanlı kağıt miktarı olarak kullanmayın. Büyük not bloğu, renkli ayraçlar ve diğer bölümlerin adetlerini ayrı öğrenin. Belirsiz bir adet ifadesini toplam kapasite diye yorumlamayın.</p>
              <p>Sayfa ile yaprak farklı birimlerdir; bir yaprağın ön ve arka yüzü vardır. Çizgili defter ve spiral kullanımını karşılaştırmak için <Link href="/rehber/promosyon-spiralli-notluk-secim-ve-baski-rehberi">spiralli notluk rehberine</Link> geçebilirsiniz. Burada kısa not bloklarının içeriğini ayrı değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak ölçüsünden yazılabilir alanı çıkarmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapağın dış ölçüsü, açık ürünün masada kapladığı alan ve not kağıdının boyutu farklı olabilir. Kullanıcı kısa bir telefon mesajı mı, birkaç satırlık görev notu mu yazacak? İlgili bloğun ölçüsünü bu ihtiyaca göre kontrol edin.</p>
              <p>Notların başka yüzeye yapışması önemliyse üreticinin kullanım bilgisini ve hedef kullanımınızı paylaşın. Numuneyi uygun bir deneme yüzeyinde değerlendirin; bütün yüzeylerde aynı tutunma, iz bırakmama veya tekrar kullanım sonucu varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Yapışkanlı notlukta bölüm bazında karşılaştırma</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Defter kapasitesiyle yapışkanlı notların adetleri aynı bilgi değildir.</caption>
              <thead><tr><th scope="col" className="border p-3">Bölüm</th><th scope="col" className="border p-3">Kullanım</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Büyük not bloğu</th><td className="border p-3">Kısa mesaj ve hatırlatma</td><td className="border p-3">Kağıt ölçüsü ve miktarı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Renkli ayraç</th><td className="border p-3">Sayfa işaretleme</td><td className="border p-3">Bölüm sayısı ve ayrı adetler</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Varsa defter</th><td className="border p-3">Daha uzun notlar</td><td className="border p-3">Sayfa–yaprak birimi ve düzen</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapak</th><td className="border p-3">Taşıma ve dış sunum</td><td className="border p-3">Açık/kapalı ölçü ve malzeme</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Markalama</th><td className="border p-3">Kapak veya iç kağıt</td><td className="border p-3">Ayrı uygunluk ve tasarım kapsamı</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Tutkallı ciltle yapışkanlı notu karıştırmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bir bloktaki yaprakların tutkal ile bağlanması, kağıdın başka yüzeylere yapışabildiğini göstermez. Yapışkanlı özelliğin hangi bölümde bulunduğunu açıklamadan doğrulayın. Dış görünüşü benzer iki not bloğunun aynı yapıda olduğunu kabul etmeyin.</p>
              <p>Uzun yazım veya tek tek not kağıdı kullanımı öncelikliyse <Link href="/rehber/promosyon-bloknot-kup-bloknot-secim-ve-baski-rehberi">bloknot ve küp bloknot rehberi</Link> farklı cilt ve kutu seçeneklerini ele alır. Ürünleri aynı adla anmak yerine kullanım biçimine göre ayırın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak malzemesiyle çevresel iddiayı ayrı değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kraft kapak ifadesi bütün bileşenlerin geri dönüştürülmüş olduğunu göstermez. Kapak, yazım kağıdı ve ayraçlar farklı malzemelerden oluşabilir. Geri dönüşüm bilgisi belirtiliyorsa hangi parçaya ait olduğunu öğrenin.</p>
              <p>Belirli içerik oranı veya belge şartı varsa talebinizi modelle birlikte paylaşın. Kurumsal dağıtımda kullanacağınız malzeme açıklaması teyit edilen kapsamla eşleşsin; yalnız kahverengi kapaktan sertifika sonucu çıkarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak ve iç kağıt için iki ayrı tasarım kapsamı oluşturun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapak uygulaması logoyu ürün kapalıyken gösterir; iç kağıda baskı ise not alanıyla birlikte değerlendirilir. Logo hangi blokta, hangi yüzde ve hangi ölçüde isteniyorsa bunu ayrı belirtin. Uygunluğu açıklanmayan iç kağıt baskısını standart hizmet saymayın.</p>
              <p>Küçük kağıtta logonun yazım alanına etkisini gerçek ölçüde görün. Kapakta açılış yönü, dikiş veya varsa tutucu gibi parçaları dikkate alın. UV, serigrafi veya dijital yöntem seçimi bütün yüzeylerde ortak kabul edilmemelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune ve teklif kaydını bölüm listesiyle tamamlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numunede kapağı açıp not bloğu ve ayraçları ayrı inceleyin; yazım alanını kullanacağınız kalemle değerlendirin. Seri siparişte aynı bölümlerin ve miktarların bulunacağını teyit edin. Kalem tutucu veya görseldeki kalem dahil içerik olarak varsayılmamalıdır.</p>
              <p>Teklifte model, adet, kapak ve iç kağıt uygulamalarını ayrı tanımlayın. Kalem, ambalaj, KDV ve sevkiyat kapsamını öğrenin. Koli miktarını minimum sipariş yerine kullanmadan stok, onay ve teslim koşullarını ihtiyaç tarihinizle netleştirin.</p>
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
            <Link href="/promosyon-yapiskanli-notluklar" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Yapışkanlı Notlukları İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
