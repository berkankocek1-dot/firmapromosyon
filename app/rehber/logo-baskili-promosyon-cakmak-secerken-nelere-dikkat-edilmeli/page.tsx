import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/logo-baskili-promosyon-cakmak-secerken-nelere-dikkat-edilmeli`;
const TITLE = "Logo Baskılı Promosyon Çakmak Seçerken Nelere Dikkat Edilmeli?";
const DESCRIPTION =
  "Logo baskılı promosyon çakmak seçerken nelere dikkat edilmeli? Kalite, baskı alanı, model seçimi, adet planlaması ve marka görünürlüğü açısından detaylı rehber.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "logo baskılı promosyon çakmak",
    "promosyon çakmak seçerken nelere dikkat edilmeli",
    "baskılı çakmak seçimi",
    "firma logolu çakmak",
    "promosyon çakmak baskı alanı",
    "promosyon çakmak kalite seçimi",
    "promosyon çakmak modeli seçimi",
    "kurumsal çakmak rehberi",
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
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Logo Baskılı Promosyon Çakmak Seçerken Nelere Dikkat Edilmeli?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og.jpg`],
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
        name: "Logo Baskılı Promosyon Çakmak Seçerken Nelere Dikkat Edilmeli?",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Logo baskılı promosyon çakmak seçerken en önemli konu nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün kalitesi, baskı alanı, logo okunabilirliği ve hedef kitleye uygun model seçimi en önemli konulardır.",
        },
      },
      {
        "@type": "Question",
        name: "Hangi baskı türü daha uygundur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sade ve ekonomik uygulamalarda tampon baskı, daha canlı ve dikkat çekici çalışmalar için UV baskı tercih edilebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Ucuz ürün seçmek doğru mu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sadece en ucuz ürünü seçmek her zaman doğru değildir. Çok düşük kalite, marka algısını olumsuz etkileyebilir.",
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                <Link href="/rehber" className="transition-colors hover:text-red-600">
                  Rehber
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">
                Logo Baskılı Promosyon Çakmak Seçerken Nelere Dikkat Edilmeli?
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
              Logo Baskılı Promosyon Çakmak Seçerken Nelere Dikkat Edilmeli?
            </h1>

            <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
              Logo baskılı promosyon çakmak seçimi yaparken yalnızca fiyat odaklı
              hareket etmek çoğu zaman doğru sonuç vermez. Çünkü ürünün kalitesi,
              baskı alanı, model yapısı, logo okunabilirliği ve hedef kitle ile
              uyumu doğrudan marka algısını etkiler. Doğru seçilmiş bir promosyon
              çakmak, firmanızı profesyonel gösterebilir; yanlış seçilmiş bir ürün
              ise tam tersine olumsuz izlenim bırakabilir.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
              Bu nedenle promosyon çakmak siparişi verirken ürünün sadece bir
              dağıtım materyali değil, aynı zamanda marka temsilcisi gibi
              düşünülmesi gerekir. Kullanıcı eline aldığı ürünün kalitesine göre
              markanız hakkında doğrudan fikir oluşturabilir.
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
              <h2>1. Ürün kalitesi neden önemlidir?</h2>
              <p>
                Promosyon ürünlerde kalite, doğrudan marka algısını etkiler. Çok
                düşük kaliteli bir çakmak kısa sürede bozulabilir, baskısı silinebilir
                veya kullanıcıda olumsuz his bırakabilir. Bu da markanızın ucuz
                ve özensiz algılanmasına neden olabilir.
              </p>
              <p>
                Bu yüzden ürün seçerken yalnızca fiyat değil, malzeme hissi ve
                kullanım güveni de düşünülmelidir.
              </p>
            </section>

            <section>
              <h2>2. Baskı alanı ve logo okunabilirliği</h2>
              <p>
                Promosyon çakmağın reklam gücü, üzerindeki baskının ne kadar net
                ve dikkat çekici olduğuyla ilgilidir. Baskı alanı çok dar olan
                modellerde uzun firma adı veya karmaşık logolar iyi görünmeyebilir.
              </p>
              <p>
                En iyi sonuç için sade, okunabilir ve ürün yüzeyine uyumlu baskı
                tercih edilmelidir. Özellikle logo küçük alanda okunmuyorsa ürünün
                tanıtım gücü zayıflayabilir.
              </p>
            </section>

            <section>
              <h2>3. Hedef kitleye uygun model seçimi</h2>
              <p>
                Çakmağın kimlere dağıtılacağı seçimde kritik rol oynar. Eğer amaç
                çok geniş kitleye ulaşmaksa daha ekonomik modeller mantıklı olabilir.
                Eğer daha seçilmiş müşteri grubuna hitap edilecekse biraz daha
                kaliteli veya estetik ürün tercih edilebilir.
              </p>
              <p>
                Doğru model, hedef kitleyle örtüşen modeldir. Her ürün her senaryo
                için uygun değildir.
              </p>
            </section>

            <section>
              <h2>4. Hangi baskı türü seçilmeli?</h2>
              <p>
                Baskı seçimi hem maliyeti hem de görünümü belirler. Sade logolarda
                tampon baskı çoğu zaman yeterli olabilir. Daha canlı ve dikkat
                çekici tasarımlarda UV baskı tercih edilebilir.
              </p>
              <p>
                Bazı premium modellerde lazer baskı da düşünülebilir. Burada karar,
                marka kimliğine ve kampanya hedeflerine göre verilmelidir.
              </p>
            </section>

            <section>
              <h2>5. Sipariş adedi doğru planlanmalı mı?</h2>
              <p>
                Evet. Sipariş adedi doğru planlanmadığında gereksiz maliyet oluşabilir.
                Çok düşük adetlerde birim maliyet yükselebilir. Çok yüksek adetlerde
                ise stok ve kullanım planı iyi yapılmazsa ürünler atıl kalabilir.
              </p>
              <p>
                Bu nedenle dağıtım planına uygun sipariş vermek en sağlıklı yaklaşımdır.
              </p>
            </section>

            <section>
              <h2>6. Sadece ucuz ürün seçmek doğru mu?</h2>
              <p>
                Hayır. En ucuz ürün her zaman en iyi seçim değildir. Çünkü promosyon
                ürün yalnızca bir maliyet kalemi değil, aynı zamanda markanızın
                dışarıdaki temsilcisidir.
              </p>
              <p>
                Dengeli fiyat + yeterli kalite + iyi baskı kombinasyonu, çoğu zaman
                en sağlıklı promosyon stratejisini oluşturur.
              </p>
            </section>

            <section>
              <h2>Sık Sorulan Sorular</h2>

              <h3>Logo baskılı promosyon çakmak seçerken ilk neye bakılmalı?</h3>
              <p>
                Ürün kalitesi, baskı alanı ve logo okunabilirliği ilk değerlendirilmesi
                gereken konulardır.
              </p>

              <h3>Hangi baskı daha mantıklıdır?</h3>
              <p>
                Ekonomik kampanyalarda tampon baskı, daha dikkat çekici işler için
                UV baskı tercih edilebilir.
              </p>

              <h3>Ucuz ürün almak zararlı olur mu?</h3>
              <p>
                Çok düşük kalite marka algısını olumsuz etkileyebilir. Bu yüzden
                yalnızca en düşük fiyatı hedeflemek doğru olmayabilir.
              </p>
            </section>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-bold text-gray-900">İlgili Kategoriler</h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/kategori/cakmak" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Çakmak
              </Link>
              <Link href="/kategori/kalem" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Kalem
              </Link>
              <Link href="/kategori/anahtarlik" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Anahtarlık
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
    </main>
  );
}