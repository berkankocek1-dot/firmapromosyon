import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-sekreterlik-evrak-cantasi-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-sekreterlik-evrak-cantasi-secim-rehberi.jpg";
const TITLE = "Promosyon Sekreterlik ve Evrak Çantası Seçim Rehberi";
const DESCRIPTION = "Sekreterlik ve evrak çantasını belge boyutu, iç blok, bölmeler ve kapanışla karşılaştırın. Taşıma, logo yerleşimi ve toplantı paketi kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Sekreterlik ile evrak çantası nasıl ayrılır?",
    "answer": "Toplantıda not alma ile belge taşıma farklı ihtiyaçlardır. Sekreterlikte iç blok ve çalışma düzenini, evrak çantasında ise taşıma biçimini ve iç yerleşimi değerlendirin. Ürün adına bakarak aynı işlevleri sunduklarını varsaymayın."
  },
  {
    "question": "Bütün sekreterlikler A4 belgeye uygun mu?",
    "answer": "Hayır. Dış kapak ölçüsü, iç blok ve belge bölmesi farklı olabilir. Taşınacak belgenin veya dosyanın ölçüsünü bildirip seçilen modelin kullanılabilir alanını teyit edin."
  },
  {
    "question": "Tablet bölmesi cihazı koruyan bir bilgisayar çantası anlamına mı gelir?",
    "answer": "Hayır. Bölmenin bulunması darbe koruması veya bilgisayar uyumu göstermez. Cihazın kılıflı ölçüsü, bölmenin yapısı ve amaçlanan kullanım ayrı kontrol edilmelidir."
  },
  {
    "question": "Planlayıcı veya iç blok tarihli mi?",
    "answer": "Ürün adı takvim yılını ya da tarih düzenini tek başına açıklamaz. İç sayfa örneğini ve varsa güncel stok yılını öğrenin; bloğun bağlantı veya değiştirilme biçimi de ayrıca teyit edilmelidir."
  },
  {
    "question": "Termo deri veya suni deri hakiki deri mi?",
    "answer": "Suni deri hakiki deri değildir. Termo deri ifadesi de tek başına hakiki deri taahhüdü sayılmaz. Malzeme talebinizi ürün koduyla belirtip teknik bilgiyi teyit edin."
  },
  {
    "question": "Kalem tutucu bulunan ürüne kalem dahil mi?",
    "answer": "Tutucu veya görseldeki kalem dahil kapsamı doğrulamaz. Kalem, iç blok, hesap makinesi, ambalaj ve diğer aksesuarlar model bazında yazılı netleştirilmelidir."
  },
  {
    "question": "Logo bütün kapak alanına uygulanabilir mi?",
    "answer": "Dış kapak ölçüsü kullanılabilir baskı alanı değildir. Dikiş, kıvrım, kapanış ve varsa sap bağlantılarıyla birlikte yöntem ve net logo alanı seçilen model için belirlenmelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Açık toplantı sekreterliği ve kapaklı evrak çantasının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Sekreterlik ve Evrak Çantası Seçim Rehberi", item: PAGE_URL },
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
        <span>Sekreterlik ve Evrak Çantası Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Sekreterlik ve Evrak Çantası Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon sekreterlik ve evrak çantası seçimine dış görünüşten önce taşınacak içerikle başlayın. Toplantı sırasında not almak, belgeleri ayırmak ve dosyaları görüşmeye götürmek aynı yerleşimi gerektirmez. Belge boyutunu, iç blok ve bölmeleri, kapanışı ve taşıma biçimini birlikte değerlendirerek kurumsal siparişinizi netleştirebilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Açık lacivert toplantı sekreterliği ve saplı koyu renk evrak çantası" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, malzeme türünü veya paket içeriğini göstermez. Kalem ve belgeler kullanım örneğidir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Not alma ile belge taşımayı ayrı ihtiyaçlar olarak yazın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-sekreterlikler-ve-evrak-cantalari">Sekreterlik ve evrak çantası modellerini</Link> kullanıcının iş akışına göre inceleyin. Görüşmede açık duracak yazım bölümüyle yolda kapalı taşınacak belge alanı farklı özellikler gerektirebilir. Hangisinin öncelikli olduğunu seçimden önce belirleyin.</p>
              <p>Hesap makinesi ve ajanda düzeni öncelikliyse <Link href="/rehber/promosyon-hesap-makineli-organizer-secim-rehberi">hesap makineli organizer rehberi</Link> bu ayrıntıları tamamlar. Burada belge yerleşimi ve taşıma ihtiyacını, ek özelliklerin sayısından önce değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dış ölçüyle iç belge alanını karıştırmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Belge, dosya veya klasörü kutusuz ve varsa koruyucu kılıfıyla ölçün. En ve boyun yanında kalınlığı da kaydedin. Dış kapak yeterince büyük görünse bile dikişler, iç cep veya kapanış kullanılabilir alanı değiştirebilir.</p>
              <p>Bir modelde A4 belirtilmesi bütün kategoriyi A4 uyumlu yapmaz. Numunede hedef belgeyi yerleştirip kapağın kapanmasını ve belgenin çıkarılmasını kontrol edin. Tablet taşınacaksa kılıflı cihaz ölçüsünü ayrıca paylaşın; bölmeyi kendiliğinden darbe korumalı saymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">İç blok, belge cebi ve tutucuları tek tek kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İç blok ölçüsüyle belge bölmesini ayrı okuyun. Çizgili veya tarihli düzen ihtiyacınız varsa sayfa örneği isteyin. Takvim yılı, yaprak–sayfa birimi ve bloğun değiştirilme biçimi ürün adından çıkarılmamalıdır.</p>
              <p>Kalem tutucu, hesap makinesi veya planlayıcı gibi ayrıntıları modelin kendi açıklamasından kontrol edin. Görseldeki aksesuarların dahil olduğunu varsaymayın. Tutucuya ayrıca kalem seçilecekse kalemin boyu ve gövdesinin uyumunu numunede değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sekreterlik ve evrak çantası için yerleşim kontrolü</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Kapak ölçüsü, iç blok ve belge bölmesi farklı bilgilerdir.</caption>
              <thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Teyit edilecek bilgi</th><th scope="col" className="border p-3">Numune kontrolü</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Belge</th><td className="border p-3">En, boy ve kalınlık</td><td className="border p-3">Bölmeye yerleştirme ve çıkarma</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">İç blok</th><td className="border p-3">Boyut, düzen ve varsa yıl</td><td className="border p-3">Açıkken yazım alanı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ek bölmeler</th><td className="border p-3">Tutucu, cep veya cihaz alanı</td><td className="border p-3">Hedef parçayla uyum</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapanış ve taşıma</th><td className="border p-3">Sap ve kapak yapısı</td><td className="border p-3">Planlanan içerikle kullanım</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Sunum</th><td className="border p-3">Dahil parçalar ve ambalaj</td><td className="border p-3">Kılıf, kutu ve logo yerleşimi</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapanış ve taşıma düzenini dolu içerikle deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Saplı evrak çantası ile kapaklı toplantı sekreterliğini aynı taşıma biçimi olarak düşünmeyin. Numuneyi planlanan belge ve ek parçalarla doldurarak kapanışa ve erişime bakın. Günlük kullanımda en sık çıkarılacak parçanın yerini bu sırada değerlendirin.</p>
              <p>Kapağın kapanması, belirli bir ağırlığı taşıma veya suya dayanım garantisi değildir. Özel koruma, kilit veya başka bir işlev gerekiyorsa modelde bulunduğunu ve kullanım kapsamını ayrıca sorun. Belirtilmeyen özellikleri yalnız fotoğraftan çıkarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak malzemesini ve uygulama yüzeyini doğrulayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Suni deri ifadesini hakiki deri olarak yorumlamayın; termo deri de tek başına gerçek deri taahhüdü değildir. Kapak, gövde ve iç yüzey malzemesi önemliyse bunları ayrı belirtin. Numunede kenar, kıvrım ve dikiş görünümünü inceleyin.</p>
              <p>Gofre, UV, sıcak baskı veya diğer yöntemlerin uygunluğu ürün ve yüzey bazındadır. Bir modelde listelenen seçenekleri başka bir çantaya aktarmayın. Görüşmede açık, taşırken kapalı duran yüzleri düşünerek logo konumunu seçin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo provasını belgenin kullanımını koruyarak onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapak kıvrımı, kapanış parçası ve varsa sap bağlantısını tasarım üzerinde gösterin. Dış boyutun tamamını logo alanı saymayın. Küçük yazıların gerçek uygulama ölçüsünde okunmasını ve logonun ürünün tutulduğu yönde görünmesini değerlendirin.</p>
              <p>İsim uygulaması talep ediliyorsa kişi, model ve renk eşleşmesini onay listesine ekleyin. Logo ve isim aynı yerde bulunacaksa alan paylaşımını birlikte görün. Uygulamalı numune gerekiyorsa koşullarını ayrıca sorun; dijital yerleşim ile yüzeydeki sonucu ayrı kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklifte toplantı paketinin tam içeriğini yazdırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bir ürünün iç blok, kalem veya hesap makinesi kapsamı başka modelle aynı olmayabilir. Teklifte dahil parçaları ve ambalajın kılıf mı kutu mu olduğunu netleştirin. İlave kalem veya belge eklenecekse bunları standart ürün içeriğinden ayrı tanımlayın.</p>
              <p>Model, adet, renk, belge ölçüsü, uygulama yüzeyi ve teslim adresi aynı sipariş kaydında yer alsın. Baskı, kişiselleştirme, ambalaj, KDV ve sevkiyat kapsamını öğrenin. Minimum adet ve süre için doğrulanmamış rakam kullanmadan tasarım onayını ihtiyaç tarihinizle planlayın.</p>
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
            <Link href="/promosyon-sekreterlikler-ve-evrak-cantalari" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Sekreterlik ve Evrak Çantalarını İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
