import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-anahtarlik-fiyatlari`;
const IMAGE_PATH = "/guides/promosyon-anahtarlik-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Anahtarlık Fiyatları 2026 | Detaylı Fiyat Rehberi";
const DESCRIPTION =
  "Promosyon anahtarlık fiyatları ne kadar? Plastik, metal ve özel tasarım anahtarlık fiyatlarını etkileyen tüm faktörleri öğrenin.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon anahtarlık fiyatları",
    "logo baskılı anahtarlık fiyatları",
    "promosyon anahtarlık fiyat",
    "plastik anahtarlık fiyatları",
    "metal anahtarlık fiyatları",
    "deri anahtarlık fiyatları",
    "promosyon anahtarlık baskı fiyatları",
    "kurumsal promosyon anahtarlık",
    "promosyon anahtarlık 2026",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Promosyon Anahtarlık Fiyatları 2026",
    description:
      "Promosyon anahtarlık fiyatları, baskı türleri ve adet bazlı maliyet hesaplama rehberi.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Anahtarlık Fiyatları 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Anahtarlık Fiyatları 2026",
    description:
      "Malzeme, baskı türü ve adet bazlı promosyon anahtarlık fiyatlarını detaylı inceleyin.",
    images: [IMAGE_URL],
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
    dateModified: "2026-04-01",
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
        name: "Promosyon Anahtarlık Fiyatları",
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
        name: "Promosyon anahtarlık fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon anahtarlık fiyatları; ürün malzemesi, baskı türü, sipariş adedi, ürün boyutu ve tasarım özelliklerine göre değişir.",
        },
      },
      {
        "@type": "Question",
        name: "En uygun fiyatlı promosyon anahtarlık hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle plastik promosyon anahtarlık modelleri en uygun fiyatlı seçenekler arasında yer alır.",
        },
      },
      {
        "@type": "Question",
        name: "Metal anahtarlıklar neden daha pahalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metal anahtarlıklar daha dayanıklı, daha prestijli ve daha kaliteli bir görünüm sunduğu için plastik modellere göre daha yüksek fiyatlı olabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Adet arttıkça promosyon anahtarlık fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, sipariş adedi arttıkça birim maliyet genellikle düşer. Çünkü üretim ve baskı maliyetleri daha fazla ürüne bölünür.",
        },
      },
      {
        "@type": "Question",
        name: "Minimum sipariş kaç adet olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon anahtarlıklarda minimum sipariş adedi modele göre değişmekle birlikte genellikle 100 ile 300 adet arasında olabilir.",
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Promosyon Anahtarlık Fiyatları</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Promosyon Anahtarlık Fiyatları 2026
        </h1>

        <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={IMAGE_PATH}
            alt="Promosyon Anahtarlık Fiyatları 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Promosyon anahtarlık fiyatları, kurumsal firmaların en çok araştırdığı
          konuların başında gelir. Çünkü anahtarlıklar, düşük maliyetle yüksek
          görünürlük sağlayan en güçlü promosyon ürünlerinden biridir.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-700">
          Ancak doğru fiyat analizi yapılmadığında gereksiz maliyetler oluşabilir.
          Bu yüzden fiyatı etkileyen tüm faktörleri bilmek, doğru satın alma kararı
          vermek için kritik öneme sahiptir.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Anahtarlık Fiyatlarını Etkileyen Faktörler
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon anahtarlık fiyatları; ürün malzemesi, baskı türü,
                sipariş adedi ve tasarım özelliklerine göre değişir.
              </p>

              <p>
                Plastik anahtarlıklar en uygun fiyatlı seçeneklerdir.
                Metal ve deri anahtarlıklar ise daha premium kategoride yer alır
                ve maliyetleri daha yüksektir.
              </p>

              <p>
                Ayrıca ürün boyutu, özel kesim detayları ve çift taraflı baskı gibi
                unsurlar da toplam fiyatı etkileyebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Malzemeye Göre Fiyat Karşılaştırması
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Plastik anahtarlıklar düşük bütçeli kampanyalar için idealdir.
                Geniş kitlelere dağıtım yapılacaksa tercih edilir.
              </p>

              <p>
                Metal anahtarlıklar daha dayanıklıdır ve prestijli bir görünüm sunar.
                Bu nedenle kurumsal firmalar tarafından daha çok tercih edilir.
              </p>

              <p>
                Deri anahtarlıklar ise VIP müşterilere yönelik en premium seçenekler
                arasında yer alır.
              </p>

              <p>
                Hedef kitleye göre malzeme seçmek, yalnızca bütçeyi değil aynı zamanda
                markanın algısını da etkiler.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türüne Göre Fiyatlar
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                UV baskı, lazer baskı ve tampon baskı en çok kullanılan yöntemlerdir.
                Tampon baskı en ekonomik çözümdür.
              </p>

              <p>
                UV baskı daha kaliteli ve dikkat çekici sonuçlar sunar.
                Lazer baskı ise metal ürünlerde kalıcı bir çözüm sağlar.
              </p>

              <p>
                Baskı türü seçilirken yalnızca maliyet değil, ürünün malzemesi ve
                logonun görünüm kalitesi de dikkate alınmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Adet Arttıkça Fiyat Nasıl Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon ürünlerde adet arttıkça birim fiyat düşer.
                Çünkü üretim maliyetleri daha fazla ürüne bölünür.
              </p>

              <p>
                Bu nedenle 100 adet yerine 1000 adet sipariş vermek,
                toplam maliyeti ciddi şekilde düşürür.
              </p>

              <p>
                Düzenli promosyon kullanımı planlayan firmalar için toplu sipariş
                çoğu zaman daha verimli bir strateji olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Fiyat Nasıl Alınır?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En uygun fiyat için ürün detaylarını net belirlemek gerekir.
                Model, adet ve baskı türü önceden planlanmalıdır.
              </p>

              <p>
                Ayrıca farklı tedarikçilerden teklif alarak karşılaştırma yapmak,
                doğru fiyatı bulmanın en etkili yoludur.
              </p>

              <p>
                Ürün kalitesi ve baskı kalıcılığı da teklif değerlendirmesine dahil
                edilirse daha sağlıklı bir seçim yapılabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Anahtarlık mı Diğer Promosyon Ürünler mi?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                <Link href="/kategori/anahtarlik" className="font-semibold text-blue-600">
                  promosyon anahtarlık
                </Link>{" "}
                sürekli taşındığı için en güçlü reklam araçlarından biridir.
              </p>

              <p>
                <Link href="/kategori/cakmak" className="font-semibold text-blue-600">
                  promosyon çakmak
                </Link>{" "}
                geniş kitlelere ulaşır.{" "}
                <Link href="/kategori/kalem" className="font-semibold text-blue-600">
                  promosyon kalem
                </Link>{" "}
                ise ofis kullanımına uygundur.
              </p>

              <p>
                Daha premium seçenekler için{" "}
                <Link href="/kategori/termos" className="font-semibold text-blue-600">
                  promosyon termos
                </Link>{" "}
                ve{" "}
                <Link href="/kategori/usb-bellek" className="font-semibold text-blue-600">
                  promosyon USB bellek
                </Link>{" "}
                tercih edilebilir.
              </p>

              <p>
                Anahtarlık ise düşük maliyetle sürekli görünürlük sunması nedeniyle
                birçok firma için oldukça dengeli bir tercihtir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Sıkça Sorulan Sorular
            </h2>

            <div className="mt-4 space-y-5 text-gray-700 leading-7">
              <div>
                <p className="font-semibold">Promosyon anahtarlık fiyatları ne kadar?</p>
                <p>Model ve adetlere göre değişir.</p>
              </div>

              <div>
                <p className="font-semibold">En ucuz anahtarlık hangisi?</p>
                <p>Plastik modeller en uygun fiyatlıdır.</p>
              </div>

              <div>
                <p className="font-semibold">Minimum sipariş?</p>
                <p>Genellikle 100-300 adet arasıdır.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-bold text-lg">İlgili Kategoriler</h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/kategori/anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/kategori/cakmak" className="hover:underline">
              Promosyon Çakmak
            </Link>
            <Link href="/kategori/kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/kategori/termos" className="hover:underline">
              Promosyon Termos
            </Link>
            <Link href="/kategori/usb-bellek" className="hover:underline">
              Promosyon USB Bellek
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Teklif Al
          </Link>

          <Link
            href="/urunler"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:border-gray-500"
          >
            Ürünleri İncele
          </Link>
        </div>
      </article>
    </main>
  );
}