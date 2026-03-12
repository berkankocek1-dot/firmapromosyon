import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-urunleri-secim-rehberi`;

export const metadata: Metadata = {
  title: "Promosyon Ürünleri Seçim Rehberi | Kurumsal Promosyon Ürünleri",
  description:
    "Promosyon ürünleri nasıl seçilir? Promosyon kalem, ajanda, termos, anahtarlık, USB bellek ve diğer kurumsal promosyon ürünleri için seçim rehberi.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Kurumsal promosyon ürünleri seçerken dikkat edilmesi gerekenler, kullanım alanları ve en çok tercih edilen ürünler.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ürünleri Seçim Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Promosyon ürünleri nasıl seçilir? Kurumsal promosyon ürünleri için detaylı seçim rehberi.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonUrunleriSecimRehberiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Promosyon ürünleri nasıl seçilir? Kurumsal promosyon ürünleri için detaylı seçim rehberi.",
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
        url: `${SITE_URL}/og.jpg`,
      },
    },
    image: [`${SITE_URL}/og.jpg`],
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
        name: "Promosyon Ürünleri Seçim Rehberi",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Promosyon Ürünleri Seçim Rehberi</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Ürünleri Seçim Rehberi
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
            Promosyon ürünleri seçerken hedef kitle, kullanım alanı, baskı yöntemi
            ve ürün kalitesi gibi birçok detay göz önünde bulundurulmalıdır.
            Bu rehberde kurumsal promosyon ürünleri arasında en çok tercih edilen
            seçenekleri ve doğru ürün seçimi için dikkat edilmesi gereken noktaları
            inceleyebilirsiniz.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Promosyon Ürünleri Neden Önemlidir?
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon ürünleri, markaların müşterileri ve iş ortaklarıyla daha
                güçlü bir bağ kurmasına yardımcı olan etkili tanıtım araçlarıdır.
                Günlük hayatta kullanılan bir ürün üzerine uygulanan logo baskısı,
                markanızın daha uzun süre görünür kalmasını sağlar.
              </p>
              <p>
                Özellikle fuar, etkinlik, bayi toplantısı, kurumsal hediye ve
                toplu dağıtım süreçlerinde doğru seçilen promosyon ürünleri hem
                marka bilinirliği hem de kurumsal algı açısından önemli katkı sunar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              En Çok Tercih Edilen Promosyon Ürünleri
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal promosyon ürünleri arasında en çok tercih edilen ürünler,
                kullanım kolaylığı yüksek ve geniş kitlelere hitap eden modellerdir.
                Özellikle aşağıdaki kategoriler birçok firma tarafından sıkça tercih edilir:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <Link href="/kategori/kalem" className="font-semibold text-gray-900 underline">
                    Promosyon Kalem
                  </Link>
                </li>
                <li>
                  <Link href="/kategori/ajanda" className="font-semibold text-gray-900 underline">
                    Promosyon Ajanda
                  </Link>
                </li>
                <li>
                  <Link href="/kategori/termos" className="font-semibold text-gray-900 underline">
                    Promosyon Termos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kategori/anahtarlik"
                    className="font-semibold text-gray-900 underline"
                  >
                    Promosyon Anahtarlık
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kategori/usb-bellek"
                    className="font-semibold text-gray-900 underline"
                  >
                    Promosyon USB Bellek
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Promosyon Ürün Seçerken Nelere Dikkat Edilmeli?
            </h2>
            <div className="mt-4 space-y-5 text-sm leading-7 text-gray-700 md:text-base">
              <div>
                <h3 className="text-lg font-bold text-gray-900">1. Hedef Kitleye Uygunluk</h3>
                <p className="mt-2">
                  Ürünün hitap ettiği kitlenin ihtiyaçlarına uygun olması önemlidir.
                  Günlük kullanımda yer bulan ürünler daha yüksek etki sağlar.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">2. Kullanım Alanı</h3>
                <p className="mt-2">
                  Fuar, seminer, bayi toplantısı, kurumsal hediye veya ofis içi kullanım
                  gibi farklı senaryolara göre ürün tercihi değişebilir.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">3. Ürün Kalitesi</h3>
                <p className="mt-2">
                  Kaliteli promosyon ürünleri, markanızın algısını olumlu etkiler.
                  Dayanıklı ve kullanışlı ürünler daha uzun süre elde tutulur.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">4. Baskı Yöntemi</h3>
                <p className="mt-2">
                  Ürüne göre DTF baskı, UV baskı, lazer baskı veya farklı markalama
                  yöntemleri tercih edilebilir. Baskı yönteminin ürün yüzeyiyle uyumlu
                  olması gerekir.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">5. Sipariş Adedi</h3>
                <p className="mt-2">
                  Minimum sipariş adetleri ürün tipine göre değişebilir. Bu nedenle
                  ürün seçimi yaparken planlanan dağıtım adediyle uyumlu seçeneklere
                  yönelmek daha doğru olur.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Hangi Kurumsal Amaç İçin Hangi Ürün Tercih Edilebilir?
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Farklı kullanım amaçları için farklı promosyon ürünleri daha etkili olabilir.
                Örneğin fuarlarda kolay dağıtılabilir promosyon kalem ve anahtarlık ürünleri
                öne çıkarken, kurumsal hediye süreçlerinde termos, ajanda veya kalem setleri
                daha güçlü bir algı oluşturabilir.
              </p>
              <p>
                Ofis kullanımında ajanda, notluk, kalem ve masaüstü ürünleri; teknolojik
                kullanımda USB bellek ve powerbank gibi ürünler tercih edilebilir. Hedef kitlenin
                günlük alışkanlıkları doğru analiz edildiğinde promosyon ürünlerinin etkisi artar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Promosyon Siparişi Nasıl Verilir?
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal promosyon siparişi sürecinde ilk adım doğru ürün seçimidir.
                Daha sonra adet, logo uygulaması, baskı yöntemi ve teslim süresi gibi
                detaylar netleştirilir. Bu bilgiler doğrultusunda teklif süreci oluşturulur.
              </p>
              <p>
                İhtiyacınıza uygun ürünleri seçtikten sonra teklif formu üzerinden
                detayları iletebilir veya doğrudan WhatsApp üzerinden hızlı iletişim kurabilirsiniz.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kurumsal-teklif-al"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Kurumsal Teklif Al
              </Link>

              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
              >
                Tüm Ürünleri İncele
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sonuç
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Doğru promosyon ürünü seçimi, markanızın görünürlüğünü artırmak ve
                hedef kitlenizle daha kalıcı bir temas kurmak için önemli bir adımdır.
                Ürünün kullanım alanı, hedef kitle uyumu, baskı yöntemi ve kalite düzeyi
                birlikte değerlendirilmelidir.
              </p>
              <p>
                Promosyon kalem, ajanda, termos, anahtarlık ve USB bellek gibi sık tercih
                edilen ürünler kurumsal tanıtım açısından güçlü seçenekler sunar. Size en
                uygun ürünleri incelemek için kategori sayfalarını ziyaret edebilirsiniz.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}