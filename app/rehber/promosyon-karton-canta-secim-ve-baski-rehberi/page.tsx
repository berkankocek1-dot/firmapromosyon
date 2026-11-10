import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-karton-canta-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-karton-canta-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Karton Çanta Seçimi | Ebat, Körük ve Baskı Rehberi";
const DESCRIPTION = "Karton çantayı kutulu ürün ölçüsü, körük, sap ve kaplamayla birlikte seçin. Ön, arka ve yan yüz tasarımını üretim şablonunda onaylayıp teklif kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Karton çanta ebatı nasıl seçilir?",
    "answer": "Önce içine konacak ürünün kutulu en, boy ve kalınlığını belirleyin. Çantanın ölçü sırasını ve kullanılabilir iç alanını öğrenip ürünün ağızdan geçişini ve tabana yerleşmesini numunede değerlendirin."
  },
  {
    "question": "Körük neyi ifade eder?",
    "answer": "Çantanın derinlik oluşturan katlı bölümüdür. Ölçülerin en, boy ve körük sırası teyit edilmelidir. Dış ölçü ile kullanılabilir iç alanın aynı olduğu varsayılmamalıdır."
  },
  {
    "question": "Kağıt gramajı taşıyabileceği kilogramı gösterir mi?",
    "answer": "Hayır. Gramajdan tek başına kesin taşıma kapasitesi çıkarılamaz. İçeriğin ağırlığı, sap bağlantısı, taban ve gövde yapısı seçilen ürün için birlikte değerlendirilmelidir."
  },
  {
    "question": "Selefon kaplı karton çanta su geçirmez mi?",
    "answer": "Selefon bulunması bütün çantanın su geçirmez olduğunu göstermez. Kaplama görünümünü ve kullanım beklentisini ayrı değerlendirin; belirtilmeyen dayanım özelliğini varsaymayın."
  },
  {
    "question": "Logo yalnızca ön yüze mi basılır?",
    "answer": "Ön, arka ve yan yüz uygulamaları farklı kapsamlar olabilir. Hangi yüzlerde hangi tasarımın bulunacağını belirtip baskı yöntemi ve uygulanabilir alanı üretim şablonuyla netleştirin."
  },
  {
    "question": "Model kodu fiyat karşılaştırmak için yeterli mi?",
    "answer": "Aynı model altında farklı ebatlar bulunabilir. Nihai ölçü, adet, kağıt, kaplama, sap ve tasarım kapsamı eşleşmeden teklifler aynı ürünmüş gibi karşılaştırılmamalıdır."
  },
  {
    "question": "Özel ebat veya gofre uygulaması her modelde yapılır mı?",
    "answer": "Böyle bir uygunluk otomatik kabul edilmemelidir. Özel üretim veya uygulama talebi için yapılabilirlik, minimum adet, hazırlık bedeli ve süreye etkisi ayrıca teyit edilmelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Farklı formlu kordon saplı karton çantaların temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Karton Çanta Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Karton Çanta Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Karton Çanta Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon karton çanta seçimine logo boyutundan önce taşınacak içerikle başlayın. Kutulu ürünün ölçüsü ve yerleşimi, çantanın ebatını ve körüğünü belirlemede yol gösterir. Ardından sap, kağıt ve kaplamayı değerlendirin; baskı tasarımını çantanın açık üretim şablonu üzerinde planlayın.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Lacivert ve beyaz kordon saplı karton çantalar ile kapalı beyaz hediye kutusu" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, ebatları veya taşıma kapasitesini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">İçeriği kutulu haliyle ölçün</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-karton-cantalar">Karton çanta modellerini</Link> incelerken içine konacak ürün veya hediye kutusunun en, boy ve kalınlığını birlikte kaydedin. Katalog, kutu ve ek ürünler birlikte taşınacaksa parçaları ayrı ayrı değil, son yerleşimiyle değerlendirin.</p>
              <p>Önce kutunun hangi yönde duracağını belirleyin. Ardından bunun çantanın ağız açıklığından geçip tabana yerleşeceğini numunede kontrol edin. Yalnız dış ölçüleri benzer iki ürünü birbirine uygun kabul etmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ebat sırasını ve körüğü çizimle teyit edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Üç ölçüden hangisinin en, boy veya körük olduğunu üreticiyle netleştirin. Dikey ve yatay formu, aynı rakamların farklı sıralanması nedeniyle karıştırmayın. Gerekirse ölçüleri basit bir ürün çizimi üzerinde işaretleyerek onaylayın.</p>
              <p>Çantanın dış ölçüsüyle kullanılabilir iç alan aynı olmayabilir. Katlama ve taban yapısını dikkate alarak içeriğin yerleşimini değerlendirin. Özel ebat talebi varsa üretim uygunluğu ile minimum adedi hazır model seçeneğinden ayrı sorun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sap ve tabanı gerçek içerikle değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kağıt gramajını kilogram cinsinden taşıma kapasitesi gibi yorumlamayın. İçeriğin ağırlığını ve köşeli parça bulunup bulunmadığını paylaşın; sap bağlantısı, taban ve gövde yapısının uygunluğunu seçilen ürün için öğrenin.</p>
              <p>Numuneyi planlanan içerikle değerlendirin. Sapların rahat tutulmasını, içeriğe temasını ve çantanın duruşunu gözlemleyin. Bu incelemeyi belgelendirilmiş bir yük testi yerine koymayın; belirtilmeyen kesin dayanım değerleri üretmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Karton çanta için onay sırası</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">İçerik ve ebat netleşmeden baskı dosyasını sonlandırmayın.</caption>
              <thead><tr><th scope="col" className="border p-3">Aşama</th><th scope="col" className="border p-3">Netleştirilecek bilgi</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">İçerik</th><td className="border p-3">Kutulu ürün ve ek parçalar</td><td className="border p-3">Birlikte yerleşim</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ebat</th><td className="border p-3">En, boy ve körük sırası</td><td className="border p-3">Ağızdan geçiş ve tabana oturma</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Taşıma</th><td className="border p-3">İçerik ağırlığı ve sap yapısı</td><td className="border p-3">Planlanan içerikle kullanım</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Tasarım</th><td className="border p-3">Ön, arka ve yan yüzler</td><td className="border p-3">Katlama ve sap delikleriyle görünüm</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Teklif</th><td className="border p-3">Aynı ölçü, adet ve yüzey kapsamı</td><td className="border p-3">Dahil işlemler ve teslim koşulları</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kağıt ve selefonu tasarım tercihiyle birlikte seçin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Amerikan Bristol gibi malzeme tanımını, gramajı ve sap bilgisini ilgili modelin açıklamasından doğrulayın. Kategori görselindeki renk veya yüzeyden bütün ürünler için ortak malzeme sonucu çıkarmayın.</p>
              <p>Mat ve parlak selefonun tasarımdaki görünümünü mümkünse yüzey örneğiyle karşılaştırın. Ekrandaki renk görünümünü bitmiş ürünün birebir sonucu olarak kabul etmeyin. Kaplama bulunması su geçirmezlik veya belirli bir taşıma kapasitesi garantisi değildir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ön, arka ve körük tasarımını tek şablonda görün</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ön yüzdeki logo ile arka yüzdeki iletişim bilgisini ve varsa yan körük tasarımını ayrı tanımlayın. Sap delikleri, katlama çizgileri, yapıştırma bölgesi ve kesim sınırları tasarımın görünümünü etkileyebilir. Çantanın dış ebatını doğrudan baskıya hazır dosya ölçüsü olarak kullanmayın.</p>
              <p>Seçilen ebata ait üretim şablonunu isteyin. Taşma ve güvenli alan ölçülerini baskıyı yapacak tarafla netleştirip tasarımı bu şablona yerleştirin. Küçük yazıları gerçek ölçüde, çanta katlandığında görünecek yönleriyle kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Standart baskı ile özel uygulamayı ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Baskı yöntemi ve renk kapsamı ürün bilgisine göre teklif aşamasında netleşebilir. Bir yöntemi bütün modellere uygulanabilir kabul etmeyin. Gofre veya başka bir özel işlem talep ediyorsanız bunun hangi yüzeyde ve hangi ölçüde istendiğini belirtin.</p>
              <p>Özel uygulamanın yapılabilirliğini, hazırlık bedelini ve üretim süresine etkisini ayrı öğrenin. Onay kaydında dosya sürümü, ebat, kaplama, sap ve uygulanacak yüzler birlikte yer alsın; yalnız logonun ön yüz görünümünü onaylamakla yetinmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklifleri aynı ebat ve üretim kapsamıyla karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Aynı model kodunun farklı ebatlarını tek ürünmüş gibi karşılaştırmayın. Nihai ölçü, körük, kağıt, kaplama ve sap bilgisini teklifte açıkça yazdırın. Baskının kaç yüzü kapsadığını ve özel işlem bulunup bulunmadığını ekleyin.</p>
              <p>Minimum adet ile fiyatın hesaplandığı miktarı ayrı öğrenin. Ürün, baskı, hazırlık, ambalaj, KDV ve sevkiyat kapsamını bu tanıma göre değerlendirin. Fuar veya dağıtım günü için teslim yeri ve ihtiyaç tarihini tasarım onayından önce paylaşın.</p>
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
            <Link href="/promosyon-karton-cantalar" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Karton Çanta Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
