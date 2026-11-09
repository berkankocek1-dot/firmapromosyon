import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-anahtarlik-fiyatlari`;
const IMAGE_PATH = "/guides/promosyon-anahtarlik-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Anahtarlık Fiyatları 2026 | Detaylı Fiyat Rehberi";
const DESCRIPTION =
  "Promosyon anahtarlık fiyatlarını metal, deri ve açacaklı modeller, baskı yöntemi, sipariş adedi ve toplam maliyet açısından karşılaştırın.";

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
          text: "Plastik modeller ekonomik seçenekler sunabilir; en uygun model aynı adet, baskı ve ambalaj koşullarında alınan tekliflerle belirlenir.",
        },
      },
      {
        "@type": "Question",
        name: "Metal anahtarlıklar neden daha pahalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metal gövde, kaplama, parça sayısı ve ambalaj gibi unsurlar maliyeti artırabilir; ancak her metal model her plastik modelden pahalı değildir.",
        },
      },
      {
        "@type": "Question",
        name: "Adet arttıkça promosyon anahtarlık fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sabit hazırlık bedelinin daha fazla ürüne bölünmesi ve varsa adet indirimi birim maliyeti düşürebilir; toplam sipariş bedeli ayrıca hesaplanmalıdır.",
        },
      },
      {
        "@type": "Question",
        name: "Minimum sipariş kaç adet olur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimum sipariş adedi modele ve baskı uygulamasına göre değişir; seçilen ürün için teklif aşamasında teyit edilmelidir.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
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
                Plastik modeller ekonomik seçenekler sunabilir; ancak malzeme tek
                başına fiyat sıralamasını belirlemez. Metal aksam, deri yüzey,
                ambalaj ve kişiselleştirme detayları modele göre karşılaştırılmalıdır.
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
                <Link href="/promosyon-metal-anahtarlik" className="font-semibold text-blue-600 underline">
                  Metal anahtarlık modellerinde
                </Link>{" "}
                gövde ölçüsü, kaplama, parça sayısı ve baskı alanı fiyatı etkiler.
                Sade bir model ile kutulu veya çok parçalı bir modeli yalnızca
                malzemesine bakarak aynı fiyat grubunda değerlendirmeyin.
              </p>
              <p>
                <Link href="/promosyon-deri-anahtarlik" className="font-semibold text-blue-600 underline">
                  Deri anahtarlık modellerinde
                </Link>{" "}
                yüzey malzemesi, dikiş, metal aksam ve kişiselleştirme yöntemi önemlidir.
                Gofre veya renkli baskı isteniyorsa uygulamanın seçilen modele
                uygunluğu ve varsa kalıp bedeli teklif aşamasında netleştirilmelidir.
              </p>
              <p>
                <Link href="/promosyon-acacakli-anahtarlik" className="font-semibold text-blue-600 underline">
                  Açacaklı anahtarlıklar
                </Link>{" "}
                kullanım işlevine göre ayrılır; farklı malzemelerden üretilebilir.
                Açacak mekanizması, gövde yapısı ve logo alanı birlikte değerlendirilmelidir.
                Bu nedenle açacaklı, metal ve deri grupları birbirini tamamen dışlayan
                malzeme sınıfları değildir.
              </p>
              <p>
                Karşılaştırmayı aynı adet, aynı baskı yönü ve benzer ambalajla yapın.
                Uygun modeli belirlerken hedef kitleyi ve dağıtım amacını da dikkate alın.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türüne Göre Fiyatlar
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Baskı fiyatı; yöntem, uygulama alanı, yön sayısı, renk sayısı ve sipariş
                adedine bağlıdır. Her yöntem her yüzeye uygun değildir; karar seçilen
                model ve logo üzerinden verilmelidir.
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Tampon baskı:</strong> Uygun yüzeylerde sade logo uygulamaları
                  için değerlendirilebilir. Renk ve yön sayısı ile varsa hazırlık bedeli
                  fiyat karşılaştırmasına dahil edilmelidir.
                </li>
                <li>
                  <strong>UV baskı:</strong> Uygun yüzeylerde renkli tasarımlar için
                  seçilebilir. Baskı alanı ve yüzeye tutunma uygunluğu önceden kontrol edilir.
                </li>
                <li>
                  <strong>Lazer işleme:</strong> Uygun metal yüzeylerde tercih edilebilir.
                  Logo alanı ve her ürüne farklı isim uygulanması gibi kişiselleştirmeler
                  maliyeti değiştirebilir.
                </li>
                <li>
                  <strong>Gofre:</strong> Uygun deri yüzeylerde değerlendirilebilir.
                  Kalıp veya hazırlık bedelinin ayrıca alınıp alınmadığı sorulmalıdır.
                </li>
              </ul>
              <p>
                Bir yöntemi her siparişte en ucuz veya en kaliteli kabul etmek yerine,
                aynı ürün üzerinde uygulanabilir seçenekleri ve baskı örneğini karşılaştırın.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Adet Arttıkça Fiyat Nasıl Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Sipariş adedi yükseldiğinde varsa sabit kalıp ve hazırlık bedeli daha
                fazla ürüne bölünür. Adet indirimi de uygulanıyorsa baskı dahil birim
                maliyet düşebilir; bu durum her model ve adet için garanti değildir.
              </p>
              <p>
                Birim fiyatın düşmesi, toplam ödemenin düşmesi anlamına gelmez.
                100 adet yerine 1.000 adet alındığında birim maliyet daha düşük olsa
                bile toplam sipariş bedeli artabilir. İhtiyaç fazlası ürün almadan
                gerçek dağıtım adedine göre teklif isteyin.
              </p>
              <p>
                İki farklı adet için aynı model, baskı ve ambalaj koşullarında teklif
                alarak hem birim fiyatı hem toplam bedeli karşılaştırabilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Fiyat Nasıl Alınır?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Teklif isterken ürün kodunu, adedi, logo dosyasını, baskı yönünü,
                kişiye özel isim talebini, ambalajı ve ihtiyaç tarihini paylaşın.
                Ürün bedeline baskının dahil olup olmadığını açıkça sorun.
              </p>
              <p>
                <strong>Toplam maliyet hesabı:</strong> Ürün tutarı + ayrıca alınan
                baskı/kişiselleştirme tutarı + varsa kalıp ve hazırlık bedeli + ambalaj
                + kargo + uygulanacak KDV. Baskı veya ambalaj ürün fiyatına dahilse
                aynı bedeli ikinci kez eklemeyin.
              </p>
              <p>
                Teklifleri aynı kapsamda karşılaştırın. KDV hariç bir fiyatı KDV
                dahil bir fiyatla ya da baskısız ürünü baskı dahil ürünle doğrudan
                kıyaslamak yanıltıcıdır. Teslim süresi ve stok durumunu da teyit edin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Anahtarlık mı Diğer Promosyon Ürünler mi?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                <Link href="/promosyon-anahtarlik" className="font-semibold text-blue-600">
                  promosyon anahtarlık
                </Link>{" "}
                sürekli taşındığı için en güçlü reklam araçlarından biridir.
              </p>

              <p>
                <Link href="/promosyon-cakmak" className="font-semibold text-blue-600">
                  promosyon çakmak
                </Link>{" "}
                geniş kitlelere ulaşır.{" "}
                <Link href="/promosyon-kalem" className="font-semibold text-blue-600">
                  promosyon kalem
                </Link>{" "}
                ise ofis kullanımına uygundur.
              </p>

              <p>
                Daha premium seçenekler için{" "}
                <Link href="/promosyon-termos" className="font-semibold text-blue-600">
                  promosyon termos
                </Link>{" "}
                ve{" "}
                <Link href="/promosyon-usb-bellek" className="font-semibold text-blue-600">
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

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <div>
                <h3 className="font-semibold">Promosyon anahtarlık fiyatları neye göre değişir?</h3>
                <p>Promosyon anahtarlık fiyatları; ürün malzemesi, baskı türü, sipariş adedi, ürün boyutu ve tasarım özelliklerine göre değişir.</p>
              </div>
              <div>
                <h3 className="font-semibold">En uygun fiyatlı promosyon anahtarlık hangisidir?</h3>
                <p>Plastik modeller ekonomik seçenekler sunabilir; en uygun model aynı adet, baskı ve ambalaj koşullarında alınan tekliflerle belirlenir.</p>
              </div>
              <div>
                <h3 className="font-semibold">Metal anahtarlıklar neden daha pahalıdır?</h3>
                <p>Metal gövde, kaplama, parça sayısı ve ambalaj gibi unsurlar maliyeti artırabilir; ancak her metal model her plastik modelden pahalı değildir.</p>
              </div>
              <div>
                <h3 className="font-semibold">Adet arttıkça promosyon anahtarlık fiyatı düşer mi?</h3>
                <p>Sabit hazırlık bedelinin daha fazla ürüne bölünmesi ve varsa adet indirimi birim maliyeti düşürebilir; toplam sipariş bedeli ayrıca hesaplanmalıdır.</p>
              </div>
              <div>
                <h3 className="font-semibold">Minimum sipariş kaç adet olur?</h3>
                <p>Minimum sipariş adedi modele ve baskı uygulamasına göre değişir; seçilen ürün için teklif aşamasında teyit edilmelidir.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-bold text-lg">İlgili Kategoriler</h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/promosyon-anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/promosyon-cakmak" className="hover:underline">
              Promosyon Çakmak
            </Link>
            <Link href="/promosyon-kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/promosyon-termos" className="hover:underline">
              Promosyon Termos
            </Link>
            <Link href="/promosyon-usb-bellek" className="hover:underline">
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
    </div>
  );
}