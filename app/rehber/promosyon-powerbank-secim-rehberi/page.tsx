import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-powerbank-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-powerbank-secim-rehberi.jpg";
const TITLE = "Promosyon Powerbank Seçimi | Kapasite, Bağlantı ve Logo Rehberi";
const DESCRIPTION = "Promosyon powerbank seçerken kapasite, kablolu ve kablosuz şarj, MagSafe uyumu, dahili kablo ve logo alanını karşılaştırın. Numune ve toplu sipariş kontrolünü planlayın.";
const FAQ_ITEMS = [
  {
    "question": "20.000 mAh powerbank telefonu kaç kez şarj eder?",
    "answer": "Kesin dolum sayısı yalnız mAh değerinden bulunamaz. Kapasitenin hangi gerilimde belirtildiği, enerji dönüşüm kayıpları, telefonun bataryası ve şarj sırasındaki kullanım sonucu etkiler. Modelin doğrulanmış teknik bilgileri esas alınmalıdır."
  },
  {
    "question": "USB Type-C bağlantısı hızlı şarj garantisi mi?",
    "answer": "Hayır. Konnektör biçimi USB Power Delivery veya belirli bir güç desteğini tek başına göstermez. Portun giriş ya da çıkış işlevi, desteklenen protokol, cihaz ve kablo birlikte kontrol edilmelidir."
  },
  {
    "question": "MagSafe uyumlu ifadesi Qi2 sertifikası anlamına gelir mi?",
    "answer": "Bu ifadeler birbirinin yerine kullanılmamalıdır. Telefon, kılıf, manyetik yerleşim ve kablosuz şarj uyumu model bazında teyit edilmelidir. Bir Qi veya Qi2 sertifikası iddiası varsa ilgili modelin sertifikasyon kaydı ayrıca doğrulanmalıdır."
  },
  {
    "question": "Kablolu çıkış gücü kablosuz şarj gücüyle aynı mı?",
    "answer": "Aynı olduğu varsayılmamalıdır. Teklifte ve ürün bilgilerinde kablolu port çıkışı ile kablosuz şarj gücü ayrı okunmalıdır. Birden fazla cihaz bağlandığında toplam ve port başına güç koşulları da sorulmalıdır."
  },
  {
    "question": "Dahili kablosu olan model bütün cihazlarla çalışır mı?",
    "answer": "Kablo uçlarının, çıkış özelliklerinin ve hedef cihazın uyumu kontrol edilmelidir. Entegre kablo bulunması tek başına belirli bir protokolü veya şarj hızını garanti etmez."
  },
  {
    "question": "Işıklı logo ile LED şarj göstergesi aynı mı?",
    "answer": "Hayır. Doluluk göstergesi batarya durumunu bildirir; ışıklı logo alanı markalama içindir. LED ekran veya fener bulunması ışıklı logo uygulanabildiğini göstermez."
  },
  {
    "question": "Toplu sipariş öncesi numunede neler kontrol edilmeli?",
    "answer": "Sipariş edilecek modelin hedef cihaz ve kılıfla uyumu, kablo ve portları, taşıma rahatlığı ve kullanılabilir logo alanı incelenmelidir. Baskısız numune logo sonucunu göstermez; tasarım onayı ve gerekiyorsa baskılı numune ayrıca planlanmalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kurumsal powerbank seçimini temsil eden taşınabilir şarj cihazları" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Powerbank Seçim Rehberi", item: PAGE_URL },
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
        <span>Powerbank Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Powerbank Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Powerbank seçiminde kapasite, şarj gücü ve bağlantı uyumu ayrı karar noktalarıdır. Bu rehber, teknik bilgilerle logo ve toplu sipariş beklentisini birlikte değerlendirmenize yardımcı olur. Ürün grupları güncel modelleri karşılaştırmak içindir; belirli bir telefonda dolum sayısı veya şarj hızı taahhüt etmez.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Kablolu ve manyetik yerleşimli powerbank seçeneklerinin temsili görünümü" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, port özelliklerini veya kutu içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Önce taşınabilir batarya ihtiyacını netleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ürün gün içinde çantada taşınacak bir yedek enerji kaynağı mı, yoksa çalışma masasında kullanılacak bir şarj çözümü mü olacak? Kategori içinde masaüstü şarj standı gibi farklı ürünler de bulunabilir. Bir şarj standının kendi bataryası olduğu ve harici enerji olmadan çalışacağı varsayılmamalıdır.</p>
              <p>Çalışan, bayi veya müşteri için hedef cihazları, bağlantı uçlarını ve kullanım ortamını belirleyin. Ardından <Link href="/promosyon-powerbank">powerbank modellerini</Link> bu ihtiyaçla karşılaştırın. Tek başına kapasite veya gövde görünümüyle karar vermeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapasite, kullanılabilir enerji ve şarj hızı farklıdır</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>mAh değeri bataryanın yük kapasitesini ifade eder; telefonun kaç kez tam dolacağını tek başına açıklamaz. Farklı gerilimlerde belirtilen mAh değerlerini doğrudan bölmek yanıltıcı olabilir. Wh bilgisi ve doğrulanmış teknik açıklamalar varsa bunları da değerlendirin.</p>
              <p>Enerji dönüşümünde kayıplar oluşur; telefonun bataryası ve şarj sırasındaki kullanım sonucu etkiler. Bu nedenle sabit bir dolum sayısı veya bütün modeller için ortak bir verim yüzdesi kullanmayın. <Link href="/promosyon-20000-mah-powerbank">20.000 mAh grubunda</Link> da çıkış gücü, ölçü ve ağırlık ayrı kontrol edilmelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Portun şeklini değil işlevini de okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>USB Type-C bağlantısı tek başına USB Power Delivery veya belirli bir hızlı şarj gücü anlamına gelmez. Portun powerbanki doldurmak için giriş mi, cihazı şarj etmek için çıkış mı, yoksa her iki işlev için mi kullanılabildiğini öğrenin.</p>
              <p>Hedef cihazın desteklediği protokol, powerbank çıkışı ve kablo birlikte değerlendirilmelidir. Birden fazla çıkış kullanılacaksa port başına ve toplam güç koşullarını sorun. Kablo seçiminde ayrıntılar için <Link href="/rehber/promosyon-sarj-kablosu-secim-rehberi">şarj kablosu rehberine</Link> geçebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kablosuz şarj ve manyetik yerleşimi ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kablosuz şarj desteği ile manyetik yerleşim ayrı özelliklerdir. <Link href="/promosyon-magsafe-powerbank">MagSafe uyumlu olarak listelenen modellerde</Link> hedef telefon, kullanılan kılıf ve kablosuz şarj işlevi birlikte teyit edilmelidir. Manyetik tutunma tek başına belirli bir şarj gücünü kanıtlamaz.</p>
              <p>Kablolu çıkış için verilen W değerini kablosuz şarj gücü gibi okumayın. Üründe Qi veya Qi2 sertifikası bulunduğu söyleniyorsa model kaydını doğrulayın; yalnız wireless veya MagSafe uyumlu ifadesinden sertifika sonucu çıkarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Powerbank alt türlerini ihtiyaca göre karşılaştırın</h2>
            <p className="mt-4 leading-8 text-gray-700">Aynı model birden fazla özelliğe sahip olabilir. Bu başlıklar birbirini dışlayan ürün sınıfları değildir; örneğin manyetik yerleşim ve dahili kablo aynı üründe birlikte bulunabilir.</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-gray-600">Model seçimini kapasite, bağlantı ve markalama ihtiyacına göre yapın.</caption>
                <thead><tr><th scope="col" className="border p-3">Alt tür</th><th scope="col" className="border p-3">Öncelik</th><th scope="col" className="border p-3">Teyit edilecek bilgi</th></tr></thead>
                <tbody>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-20000-mah-powerbank" className="underline">20.000 mAh</Link></th><td className="border p-3">Kapasite önceliği</td><td className="border p-3">mAh yanında çıkış gücü, bağlantılar, ölçü ve ağırlığı ayrı doğrulayın.</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-magsafe-powerbank" className="underline">MagSafe uyumlu</Link></th><td className="border p-3">Manyetik yerleşim ve kablosuz kullanım</td><td className="border p-3">Hedef telefon, kılıf, kablosuz güç ve varsa sertifika iddiasını model bazında teyit edin.</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-dahili-kablolu-powerbank" className="underline">Dahili kablolu</Link></th><td className="border p-3">Ayrı kablo taşıma ihtiyacını azaltma</td><td className="border p-3">Uç türlerini, kablonun işlevini ve cihazla şarj uyumunu kontrol edin.</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-isikli-logolu-powerbank" className="underline">Işıklı logolu</Link></th><td className="border p-3">Aydınlatmalı markalama</td><td className="border p-3">Şarj göstergesiyle karıştırmayın; ışık rengi, logo alanı ve uygulama kapsamını netleştirin.</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-powerbank-organizer" className="underline">Powerbank organizer</Link></th><td className="border p-3">Organizer ile şarj işlevini birleştirme</td><td className="border p-3">Batarya, şarj bağlantıları, organizer içeriği ve kutu kapsamını birlikte değerlendirin.</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dahili kablo, ışıklı logo ve organizer hangi ihtiyacı karşılar?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-dahili-kablolu-powerbank">Dahili kablolu modellerde</Link> uç türleri ve şarj özellikleri her ürün için ayrı öğrenilmelidir. Bir modelde bulunan iOS veya Type-C uçların bütün ürünlerde ortak olduğu kabul edilmemelidir.</p>
              <p><Link href="/promosyon-isikli-logolu-powerbank">Işıklı logo</Link> bir markalama özelliğidir; LED doluluk göstergesi ya da fenerle aynı değildir. Logonun uygun alanını, ışık rengini ve tasarımın okunurluğunu değerlendirin.</p>
              <p><Link href="/promosyon-powerbank-organizer">Powerbank organizer</Link> seçilecekse şarj özelliklerinin yanında dış ölçü, iç düzen ve pakete dahil aksesuarları teyit edin. Bir organizerin görselinde bulunan her parçanın teklif kapsamına girdiği varsayılmamalıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numuneyi hedef cihazla değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numune sipariş edilecek model, renk ve mümkünse aynı kaplamaya sahip olmalıdır. Hedef telefon ve kılıfla bağlantıyı, kablo uçlarını, portların erişimini ve taşıma rahatlığını inceleyin. Teknik bilgiler veya kullanım koşulları eksikse bunları tedarikçiden isteyin.</p>
              <p>Kısa bir denemeden uzun kullanım ömrü ya da tüm cihazlarda aynı performans sonucu çıkarmayın. Birden fazla alıcı cihazı hedefleniyorsa uyum beklentisini listeleyin; tek telefonla yapılan denemeyi herkese genellemeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo alanını işlevsel yüzeylerden ayrı planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Portlar, kablo kanalları, gösterge ve kablosuz şarj yüzeyi logo yerleşimini sınırlandırabilir. Gövdenin tüm dış alanının uygulamaya açık olduğunu varsaymayın. Uygun yöntem ve net ölçüyü seçilen model için öğrenin.</p>
              <p>Işıklı markalama isteniyorsa logonun hangi bölümünün ışıkla görüneceğini tasarımda belirtin. Renkli gövde baskısı içinse logo rengi ve uygulama ölçüsünü değerlendirin. Bu iki markalama biçimini aynı sonuç verecekmiş gibi karşılaştırmayın; gerekiyorsa seçilen uygulamanın fiziksel örneğini isteyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklif, paket ve teslim kapsamını yazılı belirleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Teklif talebinde hedef telefonları, gerekli bağlantıları ve seçilen powerbank modelini birlikte belirtin. Kutuya ek kablo isteniyorsa uç türünü de yazın. Gövde rengi, markalama ve adet bilgisiyle birlikte bu ayrıntıların toplam bedele dahil olup olmadığını kontrol edin.</p>
              <p>Minimum adet ve termin seçilen model, stok ve uygulama planına göre teyit edilmelidir. Tasarım onayı, üretim, kargoya veriliş ve teslim beklentisini ayrı planlayın. Çalışan veya müşteri paketi hazırlanıyorsa <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi">kurumsal hediye seti rehberi</Link> sunum ve bütçe planını tamamlayabilir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş öncesi kısa kontrol listesi</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-700">
              <li>Ürünün dahili bataryası ve gerçek kullanım işlevi teyit edildi mi?</li>
              <li>Hedef cihaz, port ve kablo uyumu kontrol edildi mi?</li>
              <li>Kapasite ile kablolu ve kablosuz güç değerleri ayrı okundu mu?</li>
              <li>Ölçü, ağırlık, numune ve logo alanı değerlendirildi mi?</li>
              <li>Model, adet, uygulama, kutu ve teslim kapsamı yazılı mı?</li>
            </ul>
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
          <section>
            <h2 className="text-xl font-extrabold">Teknik açıklamalar için kaynaklar</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
              <li><a href="https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf" className="underline">USB-IF: Type-C bağlantısı ile USB Power Delivery ayrımı</a></li>
              <li><a href="https://www.wirelesspowerconsortium.com/knowledge-base/testing-and-certification/" className="underline">Wireless Power Consortium: Qi test ve sertifikasyon bilgileri</a></li>
              <li><a href="https://service.anker.com/article-description/Why-is-the-Rated-Capacity-of-Power-Banks-Lower-Than-Expected" className="underline">Anker: kapasite ve enerji dönüşümünün açıklaması</a></li>
            </ul>
          </section>
          <div className="flex flex-wrap gap-3">
            <Link href="/promosyon-powerbank" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Powerbank Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
