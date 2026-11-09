import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta`;
const IMAGE_PATH =
  "/guides/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE =
  "Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta";
const DESCRIPTION =
  "Promosyon çakmak alırken nelere dikkat edilmeli? Ürün kalitesi, baskı türü, model seçimi, sipariş adedi, teslim süresi ve fiyat dengesi hakkında detaylı rehber.";

const FAQ_ITEMS = [
  {
    "question": "Çakmak numunesi siparişi onaylamak için yeterli mi?",
    "answer": "Numune modelin boyutunu, yüzeyini ve kullanım hissini değerlendirmeye yardımcı olur. Baskısız numune logo sonucunu göstermez. Siparişte model, renk, baskı yüzü ve yerleşim ayrıca yazılı olarak onaylanmalıdır."
  },
  {
    "question": "Taşlı, manyetolu ve turbo aynı özellik midir?",
    "answer": "Bu adlar tek bir özelliği anlatmaz. Ateşleme mekanizması, alev yapısı ve doldurulabilme durumu ayrı ayrı kontrol edilmelidir. Bir modelin adından diğer özellikleri çıkarılmamalıdır."
  },
  {
    "question": "Her çakmağa çift yön baskı yapılabilir mi?",
    "answer": "İki yüzün de uygulamaya uygunluğu seçilen modele bağlıdır. Baskı alanları, yerleşim ve her yüzdeki tasarım teyit edilmeli; çift yön uygulamasının fiyat kapsamı yazılı teklifte belirtilmelidir."
  },
  {
    "question": "Minimum sipariş adedi bütün modellerde aynı mı?",
    "answer": "Hayır. Güncel adet koşulu model, stok ve baskı uygulamasına göre değişebilir. Ürün açıklaması ve yazılı teklif esas alınmalıdır."
  },
  {
    "question": "Çakmak teklifinde hangi bilgiler bulunmalı?",
    "answer": "Model, gövde rengi, adet, baskı yöntemi, basılacak yüzler, varsa hazırlık bedeli, ambalaj, KDV ve kargo kapsamı ile onay ve sevkiyat planı açıkça belirtilmelidir."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon çakmak alırken dikkat edilmesi gerekenler",
    "promosyon çakmak seçimi",
    "promosyon çakmak rehberi",
    "logo baskılı promosyon çakmak",
    "promosyon çakmak fiyatları",
    "toptan promosyon çakmak",
    "baskılı promosyon çakmak",
    "firma logolu çakmak",
    "kurumsal promosyon çakmak",
    "promosyon çakmak siparişi",
    "promosyon taşlı çakmak",
    "promosyon elektronik çakmak",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: [IMAGE_URL],
    datePublished: "2026-04-13",
    dateModified: "2026-11-09",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: `${SITE_URL}/rehber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-red-600">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/rehber"
                  className="transition-colors hover:text-red-600"
                >
                  Rehber
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">
                Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <header>
            <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              Rehber
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta
            </h1>

            <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <Image
                src={IMAGE_PATH}
                alt="Promosyon Çakmak Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
              <Link href="/promosyon-cakmak" className="font-semibold text-red-600 hover:underline">Promosyon çakmak</Link>
              siparişinde yalnız gövde rengi ve fiyatı karşılaştırmak yeterli değildir.
              Mekanizma, alev yapısı, baskı alanı ve sevkiyat planı aynı model üzerinden
              netleştirilmelidir. Bu rehber, teklif istemeden önce ve sipariş onayında
              kontrol edilecek on somut noktayı bir araya getirir.
            </p>
          </header>

          <div
            className="
              mt-10 max-w-none
              text-[17px] leading-8 text-gray-800
              [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-gray-900
              [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900
              [&_p]:mb-5 [&_p]:text-[17px] [&_p]:leading-8 [&_p]:text-gray-700
              [&_strong]:font-semibold [&_strong]:text-gray-900
              [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-gray-700
              [&_a]:font-semibold [&_a]:text-red-600 hover:[&_a]:text-red-700
            "
          >
            <section>
              <h2>1. Dağıtım ortamını ve kullanıcı ihtiyacını belirleyin</h2>
              <p>Ürünün kimlere ve hangi ortamda verileceğini netleştirin. Yetişkin kullanıcıların ihtiyacıyla ilgisi olmayan bir dağıtımda, çakmak yerine farklı bir ürün seçmek daha uygun olabilir. Etkinlik veya teslim noktasının ürün kabul koşullarını da önceden sorun.</p>
              <p>Dağıtımın tek etkinlikte mi yoksa farklı tarihlerde mi yapılacağı, adet ve ambalaj planını etkiler. Sadece geniş kitleye ulaşma hedefi, belirli bir modelin uygunluğunu göstermez.</p>
            </section>

            <section>
              <h2>2. Mekanizma ile alev yapısını ayrı kontrol edin</h2>
              <p>Taşlı veya manyetolu ifadesi ile turbo ifadesini aynı özellik gibi değerlendirmeyin. Seçtiğiniz modelin ateşleme mekanizmasını ve alev yapısını ürün açıklamasından teyit edin; yalnız fotoğrafa göre karar vermeyin.</p>
              <p><Link href="/promosyon-tasli-cakmak">Taşlı çakmak</Link>, <Link href="/promosyon-manyetolu-cakmak">manyetolu çakmak</Link> ve <Link href="/promosyon-turbo-cakmak">turbo çakmak</Link> seçeneklerini karşılaştırırken her modelin kendi teknik bilgilerini esas alın.</p>
            </section>

            <section>
              <h2>3. Doldurulabilirlik ve boyut bilgisini doğrulayın</h2>
              <p>Bir ürünün metal görünümlü, turbo veya büyük gövdeli olması doldurulabilir olduğunu kanıtlamaz. Doldurulabilirlik isteniyorsa bu özellik model açıklamasında ve teklifte açıkça yer almalıdır.</p>
              <p>Dış ölçü, elde tutuş ve taşıma rahatlığını birlikte değerlendirin. <Link href="/promosyon-doldurulabilir-cakmak">Doldurulabilir çakmak</Link> ve <Link href="/promosyon-mini-cakmak">mini çakmak</Link> sayfaları farklı ihtiyaçları karşılaştırmak için başlangıç olabilir.</p>
            </section>

            <section>
              <h2>4. Numuneyi hangi özellik için istediğinizi belirtin</h2>
              <p>Numune talebinde model kodunu ve rengi belirtin. Gövde yüzeyini, elde tutuşu, kaplama görünümünü ve kumanda parçalarını değerlendirin. Tek numunenin tüm siparişin kalite güvencesi yerine geçmediğini dikkate alın.</p>
              <p>Numunenin baskılı mı baskısız mı olduğunu, bedelini ve hazırlanma süresini sorun. Kullanım kontrolünde üreticinin talimatlarını esas alın; tasarım görseli ürünün fiziksel özelliklerini doğrulamaz.</p>
            </section>

            <section>
              <h2>5. Baskı yöntemini gövde ve logo ile eşleştirin</h2>
              <p>UV, tampon veya diğer uygulamalar her gövdeye aynı şekilde uygulanamaz. Yüzey, kaplama ve tasarımın renk yapısı seçilen model için değerlendirilmelidir. Yöntemi yalnız daha ucuz olduğu varsayımıyla seçmeyin.</p>
              <p>Logonun renkli mi tek renk mi uygulanacağını ve beklenen görünümü paylaşın. Vektörel dosya varsa iletin; dosya biçimini ve uygunluğunu baskıyı yapacak tarafla teyit edin.</p>
            </section>

            <section>
              <h2>6. Tek yüz ve çift yüz baskıyı açıkça tarif edin</h2>
              <p>Gövdenin dış ölçüsü kullanılabilir baskı alanıyla aynı değildir. Her yüz için net uygulama alanını isteyin. Bir yüzde logo, diğer yüzde iletişim bilgisi olacaksa bunu tasarımda ve teklifte ayrı belirtin.</p>
              <p>Tasarımı gerçek baskı boyutunda inceleyin. Küçük harflerin, ince çizgilerin ve logonun zeminle kontrastının okunabilirliğini kontrol edin. İki yüzün de uygulamaya uygun olduğunu önceden teyit edin.</p>
            </section>

            <section>
              <h2>7. Renk ve logo yerleşimini onay kaydına ekleyin</h2>
              <p>Fotoğraftaki renk ile mevcut stok renginin aynı olduğunu varsaymayın. Sipariş rengini modelle birlikte yazılı belirtin. Kesin renk beklentisi varsa yalnız ekran görüntüsü üzerinden onay vermek yerine uygulanabilecek teyit yöntemini sorun.</p>
              <p>Tasarım onayında baskının yönü, ölçüsü, hangi yüzde yer aldığı ve gövde rengi görülsün. Logo dosyası veya metin değişirse son sürüm için yeniden onay verin.</p>
            </section>

            <section>
              <h2>8. Adedi ve teklif kapsamını birlikte karşılaştırın</h2>
              <p>Minimum adet model ve uygulamaya göre değişebilir. İhtiyacınıza yakın iki miktar için aynı baskı koşullarıyla teklif isteyin; kullanılmayacak fazladan ürünün toplam harcamaya etkisini hesaba katın.</p>
              <p>Ürün, baskı, varsa hazırlık veya kalıp bedeli, ambalaj, KDV ve kargo kapsamını karşılaştırın. Maliyet kalemleri için <Link href="/rehber/promosyon-cakmak-fiyatlari">çakmak fiyatları rehberine</Link> geçebilirsiniz.</p>
            </section>

            <section>
              <h2>9. Tasarım onayı ile sevkiyat tarihini ayırın</h2>
              <p>Stok teyidi, tasarım hazırlığı, varsa numune ve üretim aşamalarını etkinlik tarihinden geriye doğru planlayın. Teklifteki sürenin hangi onaydan sonra başladığını ve stokta olmayan rengin plana etkisini sorun.</p>
              <p>Kargoya veriliş günü teslim alınacak gün değildir. Teslim adresini, ambalaj koşullarını ve bu ürünün seçilen taşıma hizmetiyle gönderilebilirliğini siparişten önce teyit edin. Kesinleşmemiş bir süreyi etkinlik taahhüdü olarak kullanmayın.</p>
            </section>

            <section>
              <h2>10. Gelen ürünleri yazılı siparişle karşılaştırın</h2>
              <p>Teslimde model, renk, adet ve baskı yerleşimini onay kaydıyla karşılaştırın. Ambalajda veya üründe görülen sorunları kaydedin; eksik ya da hatalı ürün bildirim sürecini sipariş öncesinde öğrenin.</p>
              <p>Teklifleri ve tasarım onayının son sürümünü saklayın. Ürünün tanımı için <Link href="/rehber/promosyon-cakmak-nedir">promosyon çakmak nedir</Link> rehberi, satın alma kararından ayrı bir başlangıç kaynağıdır.</p>
            </section>

            <section>
              <h2>Sık Sorulan Sorular</h2>
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </section>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-bold text-gray-900">İlgili Kategoriler</h3>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/promosyon-cakmak"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Çakmak
              </Link>
              <Link
                href="/promosyon-kalem"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Kalem
              </Link>
              <Link
                href="/promosyon-anahtarlik"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Anahtarlık
              </Link>
              <Link
                href="/promosyon-termos"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Termos
              </Link>
              <Link
                href="/promosyon-usb-bellek"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon USB Bellek
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
            >
              Ürünleri İncele
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}