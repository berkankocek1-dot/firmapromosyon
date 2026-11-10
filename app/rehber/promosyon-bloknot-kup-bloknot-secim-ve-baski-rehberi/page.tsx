import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-bloknot-kup-bloknot-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-bloknot-kup-bloknot-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Bloknot ve Küp Bloknot Seçimi | Baskı Rehberi";
const DESCRIPTION = "Bloknot ve küp bloknotları kullanım, cilt, yaprak, kutu ve baskı kapsamıyla karşılaştırın. İç sayfa ile kapak tasarımını ayrı planlayıp üretim onayını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Bloknot ile küp bloknot arasındaki fark nedir?",
    "answer": "Bloknot grubunda cilt ve kapak seçenekleri farklı modeller bulunabilir. Küp bloknot ise masaüstü not kağıdı bloğu ve kutu yapısıyla değerlendirilir. Taşıma, uzun not alma veya masada kısa not kullanımı ihtiyacına göre seçim yapın."
  },
  {
    "question": "Tutkallı bloknot yapışkanlı not kağıdı mı?",
    "answer": "Hayır. Yaprakları bir blok halinde tutan tutkallı cilt, kağıdın başka yüzeylere yapışabildiğini göstermez. Yapışkanlı içerik gerekiyorsa bunun modelde açıkça belirtilmesini isteyin."
  },
  {
    "question": "Spiralli bloknotun yaprakları kolay koparılır mı?",
    "answer": "Spiral bağlantı ile perforaj farklı özelliklerdir. Yaprak ayırma ihtiyacınız varsa perforaj veya koparma yapısının seçilen modelde bulunduğunu ayrıca teyit edin."
  },
  {
    "question": "Kutu gramajı iç kağıdın gramajı mı?",
    "answer": "Hayır. İç kağıt, kutu ve kapak farklı malzemeler olabilir. Her bileşenin gramaj ve malzeme bilgisini kendi başlığı altında karşılaştırın."
  },
  {
    "question": "Yaprak sayısı ile sayfa sayısı aynı mı?",
    "answer": "Aynı birim değildir. Bir yaprağın ön ve arka yüzü bulunur. Ürün açıklamasındaki miktarın hangi birimi kapsadığını ve baskının hangi yüzlere uygulanacağını ayrı öğrenin."
  },
  {
    "question": "Logo yalnız kapağa veya kutuya mı basılır?",
    "answer": "Kapak, kutu ve iç yaprak tasarımı ayrı kapsamlar olabilir. Hangi yüzeylerde, hangi yönde ve kaç renk uygulama istendiğini belirtin; uygunluk ve fiyat kapsamını üreticiyle netleştirin."
  },
  {
    "question": "Ürün ölçüsü baskıya hazır tasarım ölçüsü mü?",
    "answer": "Hayır. Kesim, taşma, katlama, tutkal, spiral ve perforaj payları tasarımı etkileyebilir. Seçilen modele ait onaylı şablon ve net uygulama alanı üzerinden çalışılmalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Düz bloknot ve kutulu küp not kağıdının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Bloknot ve Küp Bloknot Seçim Rehberi", item: PAGE_URL },
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
        <span>Bloknot ve Küp Bloknot Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Bloknot ve Küp Bloknot Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon bloknot seçimi, kağıdın nerede ve nasıl kullanılacağıyla başlar. Toplantıya taşınacak bir bloknotla masada kısa notlar için tutulacak küp blok aynı ihtiyaca cevap vermeyebilir. Bu rehber, cilt ve kutu yapısını, yaprak bilgisini ve baskı kapsamını ayırarak üretim talebini daha açık hazırlamanıza yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Üstten bağlı düz bloknot, lacivert kutuda küp not kağıdı ve kalem" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, yaprak sayısını veya paket kapsamını göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Toplantı notu mu, masaüstü kısa not mu?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-bloknot">Promosyon bloknot modelleri</Link> arasında dik masaüstü, tutkallı, kapaklı ve spiralli yapılar bulunabilir. Uzun not tutma, sayfa ayırma veya toplantıya taşıma ihtiyacını belirleyerek bu yapıların kullanımını karşılaştırın.</p>
              <p><Link href="/promosyon-kup-bloknot">Küp bloknot</Link> düşünülüyorsa masada kaplayacağı taban alanı ve yükseklik birlikte değerlendirilmelidir. En yüksek yaprak adedi her zaman en uygun seçim değildir; hediye paketinin ölçüsü ve günlük not alma biçimi de kararın parçasıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Cilt, perforaj ve yapışkanlı kağıdı birbirinden ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Tutkallı cilt, yaprakların blok halinde bağlanmasını anlatır. Bu ifade, yaprakların başka yüzeylere yapışan not kağıdı olduğunu göstermez. Yapışkanlı not ihtiyacını ayrı bir ürün özelliği olarak belirtin.</p>
              <p>Spiral sayfa çevirme biçimiyle, perforaj ise sayfa ayırmaya yönelik yapıyla ilgilidir. Seçilen üründe hangi özelliklerin bulunduğunu teyit edin. Ek yapışkanlı bölüm arıyorsanız <Link href="/rehber/promosyon-spiralli-notluk-secim-ve-baski-rehberi">spiralli notluk rehberi</Link> farklı bir iç düzeni ele alır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dış kutu, kapak ve iç yaprak ölçülerini ayrı isteyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Dış ölçü ile yazılabilir kağıt alanı aynı olmayabilir. Küp bloknotta taban ve yükseklik; kapaklı bloknotta ise kapakla iç yaprağın ölçüsü ayrı karşılaştırılmalıdır. Ölçülerin birbirine uygunluğu belirsizse tasarım veya ambalaj hazırlamadan teknik çizim isteyin.</p>
              <p>Yaprak ve sayfa farklı birimlerdir; bir yaprağın ön ve arka yüzü bulunur. Miktar bilgisinin neyi kapsadığını, tasarımın tek yüze mi iki yüze mi uygulanacağını öğrenin. Yaprak sayısından kesin kullanım süresi çıkarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Bloknotları yapı ve tasarım ihtiyacına göre karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Aynı dış ölçüye sahip ürünlerin cilt ve baskı kapsamı farklı olabilir.</caption>
              <thead><tr><th scope="col" className="border p-3">Seçenek</th><th scope="col" className="border p-3">İhtiyaç</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Düz veya kapaklı bloknot</th><td className="border p-3">Taşıma ve düzenli yazım</td><td className="border p-3">Cilt, kapak ve kullanılabilir alan</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Dik masaüstü bloknot</th><td className="border p-3">Masada not alma</td><td className="border p-3">Dış kutu ile iç yaprak uyumu</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Küp bloknot</th><td className="border p-3">Masaüstü kısa notlar</td><td className="border p-3">Taban, yükseklik ve yaprak miktarı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">İç yaprak baskısı</th><td className="border p-3">Antet ve yazım düzeni</td><td className="border p-3">Baskı yüzü, renk ve boş alan</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapak veya kutu baskısı</th><td className="border p-3">Dış sunum</td><td className="border p-3">Katlama, kesim ve uygulama yüzleri</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kağıt ile kutu malzemesini aynı satırda karşılaştırmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İç yazım kağıdı, alt destek, kapak ve dış kutu farklı malzeme ve gramajlarla tanımlanabilir. Bir kutu için verilen gramajı iç yapraklara aitmiş gibi okumayın. Teklifte her bileşenin bilgisi ayrı yer alsın.</p>
              <p>Kağıt numunesini kullanacağınız kalemle değerlendirin. Gramajı tek başına her kalemde aynı yazım sonucu olarak yorumlamayın. Mat veya parlak selefon talep ediliyorsa hangi kapak ya da kutu yüzeyine uygulanacağını belirtin; bu özelliği bütün yapraklara aktarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak, kutu ve iç yaprak tasarımlarını ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapaktaki büyük logo ile her iç yapraktaki antet aynı tasarım işi değildir. İç yaprakta logo, iletişim satırı ve gerekiyorsa not çizgilerinin yazım alanını ne kadar daralttığını değerlendirin. Küp bloknotta kutunun hangi yüzlerinde tasarım bulunacağı ayrıca belli olsun.</p>
              <p>Dosya hazırlamadan önce seçilen modele ait şablonu isteyin. Spiral, tutkal, perforaj, katlama ve kesim çizgilerini dikkate alın; taşma ve güvenli alan ölçülerini üreticiden öğrenin. Ürünün dış ölçüsünü doğrudan baskıya hazır dosya ölçüsü olarak kullanmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı provasını kullanım sırasıyla kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Önce kapak veya kutu yüzlerini, ardından iç yaprak tasarımını onaylayın. Yazım alanı, metin yönü, iletişim bilgilerinin güncelliği ve küçük yazıların okunabilirliği gerçek ölçüde görülsün. Aynı tasarımın bütün yüzeylere otomatik uygulanacağını varsaymayın.</p>
              <p>Fiziksel numune isteniyorsa kağıt hissini, bloktan yaprak ayırmayı ve varsa kapak kullanımını inceleyin. Baskı örneği ile dijital yerleşimin hangi noktaları doğruladığını ayrı değerlendirin; seri üretimde esas alınacak dosya sürümünü kaydedin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklifi bileşen ve tasarım kapsamıyla hazırlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Model, adet, iç yaprak miktarı, kağıt, kapak veya kutu yapısı ile baskı yapılacak yüzeyleri birlikte belirtin. İç yaprak ve dış yüzeylerin renk kapsamı farklıysa bunu ayırın. Ambalaj talebi, teslim yeri ve ihtiyaç tarihi üretim teklifinde yer alsın.</p>
              <p>Ürün kaydında sabit fiyat veya minimum adet bulunmuyorsa rakam varsaymayın. Hazırlık, baskı, kaplama, ambalaj, KDV ve sevkiyat kapsamını öğrenin. Diğer basılı kurumsal malzemelerle birlikte planlama için <Link href="/promosyon-matbaa-urunleri">matbaa ürünlerini</Link> inceleyebilirsiniz.</p>
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
            <Link href="/promosyon-bloknot" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Bloknot Modellerini İncele</Link>
            <Link href="/promosyon-kup-bloknot" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Küp Bloknotları İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
