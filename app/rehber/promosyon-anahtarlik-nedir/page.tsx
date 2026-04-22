import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-anahtarlik-nedir`;
const IMAGE_PATH = "/guides/promosyon-anahtarlik-nedir.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Anahtarlık Nedir? 2026 Detaylı Rehber";
const DESCRIPTION =
  "Promosyon anahtarlık nedir, nerelerde kullanılır ve hangi baskılar uygulanır? Detaylı SEO rehberi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon anahtarlık nedir",
    "promosyon anahtarlık",
    "logo baskılı anahtarlık",
    "baskılı promosyon anahtarlık",
    "promosyon anahtarlık kullanım alanları",
    "promosyon anahtarlık baskı türleri",
    "metal promosyon anahtarlık",
    "deri promosyon anahtarlık",
    "kurumsal promosyon anahtarlık",
    "promosyon anahtarlık rehberi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Anahtarlık Nedir?",
    description:
      "Promosyon anahtarlık çeşitleri, kullanım alanları ve baskı teknikleri hakkında kapsamlı rehber.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Anahtarlık Nedir?",
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
        name: "Promosyon Anahtarlık Nedir?",
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
        name: "Promosyon anahtarlık nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon anahtarlık, firmaların marka bilinirliğini artırmak amacıyla üzerine logo veya iletişim bilgisi basarak dağıttığı promosyon ürünlerinden biridir.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon anahtarlık neden tercih edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sürekli taşınan bir ürün olduğu için yüksek görünürlük sağlar. Düşük maliyetle uzun süreli marka hatırlanabilirliği oluşturabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon anahtarlık üzerine hangi baskılar yapılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon anahtarlıklarda en sık UV baskı, lazer baskı ve tampon baskı uygulanır. Ürün malzemesine göre uygun baskı yöntemi değişebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon anahtarlık kimler için uygundur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Otomotiv sektörü, emlak firmaları, oteller, kurumsal şirketler, fuar katılımcıları ve marka görünürlüğünü artırmak isteyen birçok işletme için uygundur.",
        },
      },
      {
        "@type": "Question",
        name: "Minimum sipariş adedi kaçtır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modele göre değişmekle birlikte promosyon anahtarlıklarda minimum sipariş adedi genellikle 100 ile 300 adet arasında olabilir.",
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
        / <span>Promosyon Anahtarlık Nedir?</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Promosyon Anahtarlık Nedir? Detaylı Rehber
        </h1>

        <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={IMAGE_PATH}
            alt="Promosyon Anahtarlık Nedir?"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Promosyon anahtarlık, firmaların marka bilinirliğini artırmak amacıyla
          üzerine logo veya iletişim bilgisi basılarak dağıtılan en etkili promosyon
          ürünlerinden biridir. Günlük hayatta sürekli kullanılan bu ürünler,
          markanın sürekli görünür olmasını sağlar ve uzun vadeli reklam etkisi oluşturur.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-700">
          Anahtarlıklar, insanların sürekli yanında taşıdığı nadir promosyon ürünlerden biridir.
          Bu nedenle promosyon dünyasında en yüksek geri dönüş sağlayan ürünler arasında yer alır.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Anahtarlık Nerelerde Kullanılır?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon anahtarlıklar fuarlar, etkinlikler, kampanyalar ve müşteri ziyaretlerinde
                sıkça kullanılır. Özellikle otomotiv sektörü, emlak firmaları, oteller ve kurumsal
                şirketler tarafından yoğun şekilde tercih edilir.
              </p>

              <p>
                Ayrıca bayi ağı olan firmalar, iş ortaklarına promosyon anahtarlık vererek
                marka sadakati oluşturur ve sürekli görünürlük sağlar.
              </p>

              <p>
                Küçük boyutu ve pratik yapısı sayesinde promosyon anahtarlık, saha dağıtımları
                ve günlük kullanım odaklı kampanyalar için oldukça uygun bir üründür.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Anahtarlık Ne İçin Kullanılır?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon anahtarlıkların temel amacı reklamdır. Ancak bu reklam pasif değil,
                aktif bir reklamdır. Çünkü kullanıcı ürünü sürekli yanında taşır.
              </p>

              <p>
                Her kullanımda marka tekrar görünür hale gelir. Bu da marka bilinirliği
                ve müşteri güveni açısından büyük avantaj sağlar.
              </p>

              <p>
                Kısacası promosyon anahtarlık, yalnızca dağıtılan bir eşantiyon değil;
                sürekli taşınan bir marka görünürlüğü aracıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Anahtarlık Türleri Nelerdir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon anahtarlıklar plastik, metal, deri ve akrilik gibi farklı
                malzemelerden üretilebilir. Plastik modeller daha ekonomik olurken,
                metal ve deri modeller daha prestijli bir görünüm sunar.
              </p>

              <p>
                Ayrıca özel tasarım anahtarlıklar, markanın daha dikkat çekici
                olmasını sağlar ve premium müşteri kitlesine hitap eder.
              </p>

              <p>
                Hedef kitlenize göre malzeme seçimi yapmak, promosyon ürünün
                yaratacağı etkiyi doğrudan değiştirebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Anahtarlık Üzerine Hangi Baskılar Yapılır?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En yaygın baskı türleri UV baskı, lazer baskı ve tampon baskıdır.
                UV baskı çok renkli tasarımlar için idealdir.
              </p>

              <p>
                Lazer baskı metal anahtarlıklarda kullanılır ve kalıcıdır.
                Tampon baskı ise daha ekonomik bir çözümdür.
              </p>

              <p>
                Doğru baskı türü, ürünün malzemesine ve logonun yapısına göre
                belirlenmelidir. Böylece hem daha estetik hem de daha kalıcı sonuç alınabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Anahtarlık Avantajları
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En büyük avantajı sürekli taşınmasıdır. Bu sayede reklam etkisi
                kesintisiz devam eder.
              </p>

              <p>
                Ayrıca düşük maliyetli olması sayesinde küçük bütçelerle
                geniş kitlelere ulaşmak mümkündür.
              </p>

              <p>
                Dağıtımı kolay, kullanımı pratik ve uzun süre elde kalan bir ürün
                olması promosyon anahtarlığı güçlü bir tanıtım aracı haline getirir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Anahtarlık mı Çakmak mı Kalem mi?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Her promosyon ürünü farklı avantajlar sunar.{" "}
                <Link href="/promosyon-cakmak" className="font-semibold text-blue-600">
                  promosyon çakmak
                </Link>{" "}
                geniş kitlelere ulaşır.
              </p>

              <p>
                <Link href="/promosyon-kalem" className="font-semibold text-blue-600">
                  promosyon kalem
                </Link>{" "}
                ofis ortamında kullanılır.{" "}
                <Link href="/promosyon-termos" className="font-semibold text-blue-600">
                  promosyon termos
                </Link>{" "}
                ise daha premium bir üründür.
              </p>

              <p>
                <Link href="/promosyon-usb-bellek" className="font-semibold text-blue-600">
                  promosyon USB bellek
                </Link>{" "}
                teknolojik ürün kategorisinde yer alır.
              </p>

              <p>
                Anahtarlık ise sürekli taşınma avantajı sayesinde görünürlük açısından
                çoğu zaman çok güçlü bir alternatif sunar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Sıkça Sorulan Sorular
            </h2>

            <div className="mt-4 space-y-5 text-gray-700 leading-7">
              <div>
                <p className="font-semibold">Promosyon anahtarlık nedir?</p>
                <p>Logo baskılı reklam ürünüdür.</p>
              </div>

              <div>
                <p className="font-semibold">Neden tercih edilir?</p>
                <p>Sürekli taşındığı için yüksek görünürlük sağlar.</p>
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
      </article>
    </main>
  );
}