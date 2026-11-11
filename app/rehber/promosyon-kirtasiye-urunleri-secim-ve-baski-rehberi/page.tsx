import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kirtasiye-urunleri-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-kirtasiye-urunleri-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Kırtasiye Ürünleri Seçim ve Baskı Rehberi";
const DESCRIPTION = "Cetvel, fosforlu kalem, silgi, kalemtıraş ve sınav setlerini kullanım ihtiyacına göre seçin. Set içeriğini, parça uyumunu ve logo kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Hazır sınav seti ile ayrı ürünlerden paket aynı mı?",
    "answer": "Hayır. Hazır setin tanımlı içeriği vardır. Ayrı kalem, silgi, kalemtıraş veya cetvelle paket hazırlama talebinde ürünler, adetler ve paketleme uygunluğu ayrıca teyit edilmelidir."
  },
  {
    "question": "Sınav seti her sınavda kullanılabilir mi?",
    "answer": "Ürün adı sınav seti olsa da her kurumun malzeme koşullarını karşıladığı anlamına gelmez. Kullanılacak sınavın güncel kurallarını ve istenen kalem niteliğini ilgili kurumdan kontrol edin."
  },
  {
    "question": "Cetvelin ölçüm uzunluğu dış boyu mu?",
    "answer": "Ölçüm kapasitesi, gövdenin toplam uzunluğu veya baskı alanı değildir. Ölçek, dış ölçü ve logo alanı ayrı değerlendirilmelidir."
  },
  {
    "question": "Çok renkli fosforlu kalem ayrı kalemlerden mi oluşur?",
    "answer": "Birden fazla renk aynı gövdede sunulabilir. Renk sayısıyla ayrı ürün adedini karıştırmayın; gövde, uçlar ve kapaklar seçilen modelin içeriğine göre değerlendirilmelidir."
  },
  {
    "question": "Kalemtıraş her kalemle uyumlu mu?",
    "answer": "Tek delik veya dış ölçü bilgisi her kalem çapına uyumu kanıtlamaz. Sete eklenecek kalemle açma ve yerleşim denemesi yapın; logo uygulanabilirliğini de ayrıca sorun."
  },
  {
    "question": "Set kutusuna baskı yapılınca iç ürünler de baskılı mı?",
    "answer": "Hayır. Kutu uygulamasıyla her parçanın baskısı ayrı işlerdir. Logo uygulanacak yüzeyleri ve bedellerini teklif kaydında tek tek belirtin."
  },
  {
    "question": "Silginin ölçüsü logo alanını gösterir mi?",
    "answer": "Silginin dış ölçüsü baskı alanı değildir. Kullanılacak yüzey, uygulanabilir yöntem ve logo boyutu tasarım üzerinden teyit edilmelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Eğitim kırtasiye ürünlerinin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Kırtasiye Ürünleri Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Kırtasiye Ürünleri Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Kırtasiye Ürünleri Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon kırtasiye siparişinde önce öğrencinin veya katılımcının yapacağı işi belirleyin: ölçmek, yazmak, işaretlemek ya da düzeltmek. Hazır bir sınav setiyle ayrı ürünlerden oluşturulacak paket aynı içerik ve baskı planına sahip değildir. Bu rehber, parçaların birbirine uyumunu ve kişi başına dağıtım kapsamını netleştirmenize yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Beyaz cetvel, siyah ve kırmızı kurşun kalem, silgi, mavi kalemtıraş ve sarı fosforlu kalem" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, ölçü ölçeğini veya hazır set içeriğini göstermez. Ürünler ayrı kullanım örnekleridir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Ürün listesini yapılacak işe göre oluşturun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-kirtasiye-urunleri">Promosyon kırtasiye ürünlerini</Link> kullanım sırasıyla değerlendirin. Çizim ve ölçüm için cetvel, metin üzerinde vurgu için fosforlu kalem, kurşun kalemle çalışma için silgi ve kalemtıraş farklı ihtiyaçları karşılar. Aynı dağıtımda her parçanın gerekli olup olmadığını belirleyin.</p>
              <p>Yazım kaleminin türünü ayrıntılı karşılaştırmak için <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli">kalem seçim rehberine</Link> geçebilirsiniz. Burada odak, ürünlerin bir eğitim çalışmasında birlikte nasıl kullanılacağı ve hangi parçaların kişiye teslim edileceğidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Hazır seti özel hazırlanacak paketten ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Hazır sınav setinde içerik ürün tanımına göre değerlendirilir. Kendi paketinizde ise kalem, silgi, kalemtıraş ve cetveli ayrı seçmeniz gerekebilir. Hazır set içindeki parçanın ölçüsüyle ayrıca satılan benzer parçanın ölçüsünün aynı olduğunu varsaymayın.</p>
              <p>Kişi başına kaç parça verileceğini ve toplam paket sayısını ayrı yazın. Örneğin her pakete iki kalem konulacaksa kalem adedi paket adedinin iki katıdır. Seçilen ürünlerin aynı kutuya sığması, birleştirme hizmeti ve paketleme bedeli teklif aşamasında netleştirilmelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sınav kullanımını kurumun malzeme şartıyla eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Sınav seti adı, ürünün bütün sınavlarda kabul edildiğini göstermez. Kalemin uç niteliği, kutu veya ek araçların içeri alınması gibi koşulları ilgili kurumdan kontrol edin. Ürün açıklamasında doğrulanmayan bir uç derecesi ya da sınav uygunluğu iddiası eklemeyin.</p>
              <p>Siyah ve kırmızı uçlu kalemler farklı işler için kullanılabilir; bunları aynı işlevde iki kalem gibi anlatmayın. Ders, kontrol ve işaretleme ihtiyacını sınavda zorunlu malzeme listesinden ayrı değerlendirin. Dağıtım yapılacak gruba uygun set kapsamını bu ayrımla belirleyin.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Kırtasiye ürünlerini kullanım işine göre karşılaştırın</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">Hazır set içeriği ile ayrı ürünlerden oluşturulacak paketi ayırın.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Cetvel</th><td className="border p-3">Ölçme ve çizim</td><td className="border p-3">Ölçüm kapasitesi ile dış boyutu ayırma</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Fosforlu kalem</th><td className="border p-3">Metin işaretleme</td><td className="border p-3">Renk, uç, kapak ve logo yüzeyi</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Hazır sınav seti</th><td className="border p-3">Tanımlı içerikle dağıtım</td><td className="border p-3">Parça listesi ve kurum şartları</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Kalemtıraş / silgi</th><td className="border p-3">Kurşun kalemi tamamlama</td><td className="border p-3">Kalem ve kağıtla uyum denemesi</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Özel kırtasiye paketi</th><td className="border p-3">Kişi başına planlama</td><td className="border p-3">Toplam adet, birleştirme ve ayrı baskılar</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">Cetvel ölçeğiyle paket ölçüsünü karıştırmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Cetvelin ölçüm uzunluğu, dış gövde boyu veya baskı alanı anlamına gelmez. Kullanıcı daha uzun bir çizgiyi tek seferde ölçmek istiyorsa ölçüm kapasitesini esas alın. Paketleme için ise cetvelin dış boyutunu ve kutuda ayrılan yeri öğrenin.</p>
              <p>Logo tasarımının ölçek çizgilerini ve rakamları örtmediğini kontrol edin. Ölçüm tarafının okunurluğu, tasarımın büyüklüğünden önce gelir. Numunede ölçeği ve kenarı inceleyin; belirtilmeyen hassasiyet sınıfı veya profesyonel ölçüm niteliği vaat etmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Renk, uç ve kapakları kullanım örneğinde değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Çok renkli fosforlu kalemde renk sayısı ayrı ürün adedi değildir. Aynı gövdede farklı uçların bulunduğu bir modeli, tek tek dağıtılacak bağımsız kalemlerle aynı paketleme biçiminde düşünmeyin. Kapakların takılması ve ürünün çantada kapladığı alanı numunede kontrol edin.</p>
              <p>Kullanılacak kağıt ve çıktı üzerinde işaretleme deneyimini değerlendirin. Her kağıtta aynı sonuç veya bütün baskılarda dağılmama gibi doğrulanmamış vaatler vermeyin. Merkezi gövdenin logo alanını, renkli uçların ve kapakların yerleşiminden ayrı inceleyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kalemtıraş ve silgiyi seçilen kalemle deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kalemtıraşın dış ölçüsü ile kalem girişinin uyumu farklı bilgilerdir. Tek delikli bir ürünü bütün kalem çapları için uygun saymayın. Sete girecek kalemle numune kontrolü yapın ve kapak ya da atık haznesi gibi belirtilmeyen parçaları var kabul etmeyin.</p>
              <p>Silgiyi de seçilen kurşun kalem ve kağıtla değerlendirin. Dış ölçüden baskı boyutu veya silme performansı sonucu çıkarmayın. Küçük yüzeylerde logo yöntemini ayrıca sorun; kalemtıraşın üzerinde baskı yapılabileceğini yalnız renkli gövdesinden hareketle varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo kapsamını ve dağıtım sayımını birlikte onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kutuya uygulanacak logo ile kalem, cetvel veya silgi üzerindeki uygulamaları ayrı listeleyin. Yöntem, alan ve bedel her parçanın yüzeyine göre teyit edilmelidir. Bazı parçaları baskısız bırakmak isteniyorsa bunu da son onay kaydına ekleyin.</p>
              <p>Teklifte kişi sayısı, paket başına içerik, renk dağılımı ve toplam ürün adetlerini eşleştirin. Minimum miktar, stok, baskı, birleştirme, KDV ve sevkiyat kapsamını öğrenin. Teslimatta kontrol için onaylı bir paket örneğiyle içerik listesi kullanın; eksik veya fazla parça sayımını bu liste üzerinden yapın.</p>
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
            <Link href="/promosyon-kirtasiye-urunleri" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Kırtasiye Ürünlerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
