import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/en-ucuz-promosyon-kalem`;
const IMAGE_PATH = "/guides/en-ucuz-promosyon-kalem.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;

export const metadata: Metadata = {
  title: "En Ucuz Promosyon Kalem Hangisi? 2026",
  description:
    "En ucuz promosyon kalem hangisi? Uygun fiyatlı kalem modelleri, toptan fiyatlar ve en ekonomik seçim rehberi.",
  keywords: [
    "en ucuz promosyon kalem",
    "uygun fiyatlı promosyon kalem",
    "ekonomik promosyon kalem",
    "plastik promosyon kalem",
    "promosyon kalem fiyatları",
    "toptan promosyon kalem",
    "tampon baskılı kalem",
    "ucuz baskılı kalem",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "En Ucuz Promosyon Kalem Hangisi?",
    description:
      "Uygun fiyatlı promosyon kalem seçimi ve maliyet düşürme stratejileri.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "En Ucuz Promosyon Kalem Hangisi?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "En Ucuz Promosyon Kalem Hangisi? 2026",
    description:
      "En ekonomik promosyon kalem modellerini ve toplu alım stratejilerini keşfedin.",
    images: [IMAGE_URL],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "En Ucuz Promosyon Kalem Hangisi? 2026",
    description:
      "En ucuz promosyon kalem hangisi? Uygun fiyatlı kalem modelleri, toptan fiyatlar ve en ekonomik seçim rehberi.",
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    image: [IMAGE_URL],
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
        name: "En Ucuz Promosyon Kalem Hangisi?",
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
        name: "En ucuz promosyon kalem türü hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle en ucuz promosyon kalem türü plastik gövdeli modellerdir. Üretim maliyeti daha düşük olduğu için toplu dağıtımlarda ekonomik çözüm sunar.",
        },
      },
      {
        "@type": "Question",
        name: "En ekonomik baskı yöntemi hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Çoğu durumda en ekonomik baskı yöntemi tek renk tampon baskıdır. Özellikle plastik promosyon kalemlerde maliyet avantajı sağlar.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu sipariş verince kalem fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, sipariş adedi arttıkça birim maliyet genellikle düşer. Çünkü baskı hazırlığı ve üretim maliyetleri daha fazla ürüne yayılır.",
        },
      },
      {
        "@type": "Question",
        name: "En ucuz kalem her zaman doğru seçim midir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır. Çok düşük kaliteli kalemler markanızın algısını zedeleyebilir. Bu nedenle fiyat ile kalite arasında doğru denge kurulmalıdır.",
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
        / <span>En Ucuz Promosyon Kalem</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          En Ucuz Promosyon Kalem Hangisi? (2026 Rehberi)
        </h1>

        <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={IMAGE_PATH}
            alt="En Ucuz Promosyon Kalem Hangisi?"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          En ucuz promosyon kalem hangisi sorusu, özellikle toplu sipariş veren
          firmalar için en kritik konulardan biridir. Çünkü promosyon kalemler
          genellikle yüksek adetlerde satın alınır ve küçük fiyat farkları bile
          toplam maliyeti ciddi şekilde etkileyebilir.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-700">
          Ancak burada önemli bir detay vardır: En ucuz kalem her zaman en doğru
          seçim değildir. Doğru ürün seçilmezse marka imajı zarar görebilir.
          Bu yüzden hem uygun fiyatlı hem de kullanılabilir kalemleri seçmek
          gerekir.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">
              En Ucuz Promosyon Kalem Türü Hangisi?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En uygun fiyatlı promosyon kalemler genellikle plastik kalemlerdir.
                Plastik gövdeli kalemler üretim maliyeti düşük olduğu için en
                ekonomik seçenek olarak öne çıkar.
              </p>

              <p>
                Özellikle fuar, etkinlik, okul dağıtımı gibi alanlarda tercih edilen
                bu kalemler, düşük maliyetle yüksek adetli dağıtım yapılmasını sağlar.
              </p>

              <p>
                Metal kalemler ise daha pahalıdır ancak daha prestijli görünür.
                Bu yüzden “en ucuz” kategorisine girmezler.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Fiyatı Düşüren En Önemli Faktör: Adet
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon kalem fiyatlarını en çok etkileyen faktör sipariş adedidir.
                Adet arttıkça birim fiyat düşer.
              </p>

              <p>
                Örneğin 300 adet siparişte pahalı görünen bir kalem, 3000 adet
                siparişte çok daha uygun hale gelir.
              </p>

              <p>
                Bu yüzden mümkünse toplu sipariş vermek her zaman avantaj sağlar.
                Özellikle düzenli promosyon dağıtımı yapan firmalar için bu yöntem
                bütçe açısından daha verimlidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türü Fiyatı Nasıl Etkiler?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En ucuz baskı yöntemi genellikle tampon baskıdır. Tek renk baskılar
                maliyet açısından en avantajlı seçenektir.
              </p>

              <p>
                UV baskı ve lazer baskı ise daha pahalıdır ancak daha kaliteli
                görünüm sağlar.
              </p>

              <p>
                Eğer bütçeniz sınırlıysa, tek renk tampon baskı tercih etmek en
                mantıklı seçenektir. Baskı yönü ve renk sayısı arttıkça maliyetin
                de yükseleceği unutulmamalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Ucuz Kalemi Seçerken Yapılan Hatalar
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Sadece en ucuz kalemi seçmek büyük bir hatadır. Kalitesiz bir kalem,
                markanızın kötü algılanmasına neden olabilir.
              </p>

              <p>
                Ayrıca kötü yazan kalemler genellikle çöpe atılır ve reklam etkisi
                sıfıra iner.
              </p>

              <p>
                Bu yüzden fiyat ile kalite dengesi kurulmalıdır. Uygun fiyatlı ama
                işlevsel ve kabul edilebilir kalite sunan modeller her zaman daha
                doğru tercihtir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Fiyatlı Kalem Nasıl Seçilir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En doğru seçim, hem uygun fiyatlı hem de kullanılabilir kalemdir.
                Orta segment plastik kalemler genellikle en mantıklı tercihtir.
              </p>

              <p>
                Ayrıca doğru tedarikçi ile çalışmak da maliyetleri düşürür.
              </p>

              <p>
                Toplu sipariş vererek birim fiyatı düşürebilirsiniz. Bunun yanında
                baskı türünü sade tutmak ve gereksiz ekstra uygulamalardan kaçınmak
                da toplam maliyeti azaltır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Ekonomik Promosyon Kalem İçin İdeal Strateji
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En ekonomik promosyon kalem seçimi için ürün modeli, baskı türü,
                sipariş adedi ve hedef kitle birlikte değerlendirilmelidir.
                Sadece fiyat odaklı değil, kullanım ömrü ve marka temsili de
                düşünülmelidir.
              </p>

              <p>
                Eğer amaç geniş kitleye dağıtım yapmaksa sade plastik kalemler
                ve tek renk baskı çoğu zaman en verimli kombinasyondur. Böylece
                hem bütçe korunur hem de yeterli görünürlük elde edilir.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-bold text-lg">İlgili Kategoriler</h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/promosyon-kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/promosyon-cakmak" className="hover:underline">
              Promosyon Çakmak
            </Link>
            <Link href="/promosyon-anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/promosyon-termos" className="hover:underline">
              Promosyon Termos
            </Link>
            <Link href="/promosyon-usb-bellek" className="hover:underline">
              Promosyon USB Bellek
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Teklif Al
          </Link>

          <Link
            href="/urunler"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-semibold transition hover:border-gray-500"
          >
            Ürünleri İncele
          </Link>
        </div>
      </article>
    </main>
  );
}