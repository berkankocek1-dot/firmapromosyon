import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-cakmak-fiyatlari`;
const IMAGE_PATH = "/guides/promosyon-cakmak-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Çakmak Fiyatları | Baskı ve Toplam Maliyet Rehberi";
const DESCRIPTION =
  "Logo baskılı çakmak teklifinde ürün, baskı, adet ve hazırlık bedelini ayırın. Birim fiyat ile toplam sipariş tutarını aynı kapsamda karşılaştırın.";

const FAQ_ITEMS = [
  {
    "question": "Promosyon çakmak fiyatı baskı dahil midir?",
    "answer": "Her teklifte aynı kapsam geçerli değildir. Gösterilen tutarın baskısız ürün mü, belirli bir baskı uygulaması dahil ürün mü olduğunu ve hangi adet için verildiğini kontrol edin."
  },
  {
    "question": "Adet arttığında toplam tutar düşer mi?",
    "answer": "Birim tutar bazı koşullarda azalabilir; ancak daha fazla ürün alınacağı için toplam ödeme artabilir. İki miktarı aynı model ve baskı koşullarıyla karşılaştırmak gerekir."
  },
  {
    "question": "UV baskı mı tampon baskı mı daha ucuzdur?",
    "answer": "Tek bir yöntem her siparişte daha ucuz kabul edilemez. Model yüzeyi, tasarım, renk, adet, basılacak yüzler ve varsa hazırlık bedeli birlikte fiyatlandırılmalıdır."
  },
  {
    "question": "Çift yön baskı fiyatı iki katına mı çıkarır?",
    "answer": "Bunun sabit bir oranı yoktur. İkinci yüzün hazırlık ve uygulama bedeli teklifte ayrıca belirlenmelidir. İki yüzde aynı veya farklı tasarım kullanılması da belirtilmelidir."
  },
  {
    "question": "Net fiyat almak için hangi bilgiler gerekir?",
    "answer": "Model kodu veya ürün bağlantısı, adet, gövde rengi, logo dosyası, basılacak yüzler, teslim adresi, istenen tarih ve ambalaj beklentisi paylaşılmalıdır. Teklifin geçerlilik süresi de sorulmalıdır."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon çakmak fiyatları",
    "logo baskılı çakmak fiyatları",
    "promosyon çakmak fiyat",
    "baskılı promosyon çakmak",
    "promosyon taşlı çakmak fiyatları",
    "promosyon elektronik çakmak fiyatları",
    "tampon baskı çakmak fiyatı",
    "UV baskı çakmak fiyatı",
    "adet bazlı çakmak maliyeti",
    "promosyon çakmak teklif karşılaştırma",
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
        alt: "Promosyon Çakmak Fiyatları",
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
    datePublished: "2026-04-01",
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
        name: "Promosyon Çakmak Fiyatları",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question", name: question,
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
              <li className="text-gray-900">Promosyon Çakmak Fiyatları</li>
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
              Promosyon Çakmak Fiyatları
            </h1>

            <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <Image
                src={IMAGE_PATH}
                alt="Promosyon Çakmak Fiyatları"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
              Promosyon çakmak fiyatını karşılaştırırken önce tutarın kapsamını belirleyin:
              baskısız ürün fiyatı, baskı dahil birim fiyat ve toplam sipariş bedeli farklı
              bilgiler verir. Bu rehber güncel fiyat listesi sunmaz; seçtiğiniz model için
              alınan teklifin hangi kalemlerden oluştuğunu açıklamaya yardımcı olur.
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
              <h2>Birim fiyat hangi koşullara ait?</h2>
              <p>Bir tutarı değerlendirirken model, sipariş adedi ve baskı kapsamını birlikte okuyun. Belirli bir adet için verilen fiyat başka bir miktarda aynı kalmayabilir. Baskısız ürün tutarı ile baskı dahil tutar doğrudan karşılaştırılmamalıdır.</p>
              <p>Güncel ürünleri <Link href="/promosyon-cakmak">promosyon çakmak kategorisinden</Link> inceleyin. Ürün sayfasında kapsam açık değilse teklif isterken netleştirin; sayısal bir fiyat bulunmaması baskı veya hazırlık bedelinin sıfır olduğunu göstermez.</p>
            </section>

            <section>
              <h2>Toplam sipariş tutarını oluşturan kalemler</h2>
              <p>Ürün bedeli, baskı uygulaması, varsa hazırlık veya kalıp bedeli, ambalaj ve sevkiyat ayrı kalemler olabilir. KDV dahil veya hariç sunum da teklifte açıkça belirtilmelidir.</p>
              <p>Karşılaştırma için şu yapıyı kullanabilirsiniz: ürün toplamı + baskı toplamı + varsa hazırlık ve ambalaj + teklife dahil sevkiyat. Vergi kapsamını ayrıca kontrol edin. Bir bedel zaten birim fiyata dahilse tekrar eklemeyin.</p>
            </section>

            <section>
              <h2>Ürün modeli fiyatı nasıl etkiler?</h2>
              <p>Gövde, ateşleme mekanizması, alev yapısı, ölçü ve doldurulabilirlik aynı model tanımı içinde değerlendirilmelidir. Farklı özellikte iki çakmağı yalnız dış görünüşleri benziyor diye eşdeğer kabul etmeyin.</p>
              <p><Link href="/promosyon-tasli-cakmak">Taşlı</Link>, <Link href="/promosyon-manyetolu-cakmak">manyetolu</Link> veya <Link href="/promosyon-turbo-cakmak">turbo çakmak</Link> grupları için sabit bir ucuzdan pahalıya sıralama varsaymayın. Seçilen model ve güncel stok koşulları üzerinden teklif alın.</p>
            </section>

            <section>
              <h2>Baskı fiyatında yöntem, renk ve yüz sayısı</h2>
              <p>Tasarımın renk yapısı, uygulama ölçüsü, seçilen yüzey ve tek ya da çift yön uygulaması baskı teklifini etkileyebilir. UV veya tampon baskının her siparişte daha ekonomik olduğunu söylemek doğru bir karşılaştırma sağlamaz.</p>
              <p>İki yüzde aynı logo mu, farklı içerik mi kullanılacağını belirtin. Hazırlık bedelinin bir kere mi yoksa farklı yüz veya tasarımlar için ayrı mı hesaplandığını sorun. İkinci yüz için sabit bir çarpan kabul etmeyin.</p>
            </section>

            <section>
              <h2>Adet arttığında birim maliyet ve toplam ödeme</h2>
              <p>Sabit bir hazırlık bedeli daha fazla ürüne yayıldığında ürün başına düşen payı azalabilir. Örneğin aynı hazırlık bedelinin 500 ürüne dağıtılması ile 1.000 ürüne dağıtılması farklıdır; bu örnek bir minimum sipariş koşulu değildir.</p>
              <p>Birim tutarın düşmesi toplam ödemenin de düşeceği anlamına gelmez. İhtiyacınıza yakın iki miktar için toplam bedeli karşılaştırın. Minimum adedi ve varsa miktar basamaklarını model ve baskı uygulaması için teyit edin.</p>
            </section>

            <section>
              <h2>Teklifleri aynı kapsamda karşılaştırma listesi</h2>
              <p>Her iki teklifte model, renk, adet, baskı yöntemi, basılacak yüzler ve logo tasarımı aynı mı? Ürün veya baskı özellikleri farklıysa tutar farkını yalnız fiyat avantajı olarak yorumlamayın.</p>
              <p>Ambalaj, hazırlık, KDV ve kargo kapsamı eşleşiyor mu? Teklifin geçerlilik süresi ve stok teyidi var mı? Kargo alıcı tarafından ayrıca ödenecekse toplam bütçeyi değerlendirirken bu bilgiyi ayrı tutun.</p>
            </section>

            <section>
              <h2>Fiyat isterken paylaşılacak sipariş özeti</h2>
              <p>Model kodu veya ürün bağlantısı, adet, gövde rengi, logo dosyası ve basılacak yüzleri paylaşın. İstenen teslim tarihi, adres ve ambalaj beklentisini ekleyin. Tasarım henüz belli değilse fiyatın hangi varsayımla verildiğini sorun.</p>
              <p>Onay, numune ve teslim kontrolleri için <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta">çakmak satın alma kontrol listesine</Link> geçebilirsiniz. Ürünü tanımak için <Link href="/rehber/promosyon-cakmak-nedir">promosyon çakmak nedir</Link> rehberi ayrı bir başlangıç kaynağıdır.</p>
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