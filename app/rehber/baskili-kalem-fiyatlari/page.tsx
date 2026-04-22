import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/baskili-kalem-fiyatlari`;
const IMAGE_PATH = "/guides/baskili-kalem-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Baskılı Kalem Fiyatları 2026 (Güncel + Detaylı Rehber)";
const DESCRIPTION =
  "Baskılı kalem fiyatları ne kadar? Logo baskı, UV baskı, tampon baskı, lazer baskı, adet bazlı fiyat hesaplama ve model seçimi rehberi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "baskılı kalem fiyatları",
    "logo baskılı kalem fiyatları",
    "uv baskılı kalem fiyatları",
    "tampon baskılı kalem fiyatları",
    "lazer baskılı kalem fiyatları",
    "kalem baskı fiyatları",
    "promosyon baskılı kalem",
    "adet bazlı kalem fiyatı",
    "baskılı kalem 2026",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description:
      "Baskılı kalem fiyatlarını etkileyen tüm detayları öğrenin. Model, baskı türü, adet ve kalite rehberi.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Baskılı Kalem Fiyatları 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
        name: "Baskılı Kalem Fiyatları",
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
        name: "Baskılı kalem fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Baskılı kalem fiyatları; kalem modeli, baskı türü, sipariş adedi, baskı yönü, renk sayısı ve ürün kalitesine göre değişir.",
        },
      },
      {
        "@type": "Question",
        name: "En ekonomik baskı türü hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle tampon baskı en ekonomik baskı türlerinden biridir. Özellikle tek renk ve sade logolarda maliyet avantajı sağlar.",
        },
      },
      {
        "@type": "Question",
        name: "UV baskı mı tampon baskı mı daha pahalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genel olarak UV baskı, daha canlı ve renkli sonuç verdiği için tampon baskıya göre daha yüksek maliyetli olabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu siparişte baskılı kalem fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, sipariş adedi arttıkça birim maliyet genellikle düşer. Çünkü baskı hazırlığı ve üretim maliyetleri daha fazla ürüne yayılır.",
        },
      },
      {
        "@type": "Question",
        name: "Lazer baskı hangi kalemlerde kullanılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lazer baskı genellikle metal kalemlerde kullanılır ve daha kalıcı, premium bir görünüm sağlar.",
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
        / <span>Baskılı Kalem Fiyatları</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Baskılı Kalem Fiyatları 2026 (Logo Baskı Dahil Rehber)
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Baskılı Kalem Fiyatları 2026"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
            <p>
              Baskılı kalem fiyatları, promosyon ürün satın alırken en çok
              araştırılan konuların başında gelir. Çünkü bir kalemin üzerine
              logo, slogan, firma adı veya iletişim bilgisi basılması, ürünün
              sadece maliyetini değil aynı zamanda reklam gücünü de doğrudan
              etkiler. 2026 yılında baskılı kalem fiyatları; kalem modeli, baskı
              türü, sipariş adedi, baskı yönü, renk sayısı ve ürün kalitesine
              göre değişiklik göstermektedir.
            </p>

            <p>
              Özellikle kurumsal firmalar, marka bilinirliğini artırmak için
              baskılı kalemleri yoğun şekilde tercih eder. Bunun nedeni düşük
              maliyetle uzun süreli reklam etkisi sağlamasıdır. Ancak doğru
              fiyat analizi yapılmadığında gereksiz maliyetler ortaya çıkabilir.
              Bu yüzden baskılı kalem araştırması yaparken sadece ürünün etiket
              fiyatına değil, baskının nasıl uygulandığına ve toplam sipariş
              yapısına da dikkat etmek gerekir.
            </p>

            <p>
              Eğer ürünleri doğrudan incelemek isterseniz{" "}
              <Link href="/kategori/kalem" className="text-blue-600 underline">
                promosyon kalem modelleri
              </Link>{" "}
              sayfasına göz atabilirsiniz. Ürünün genel kullanım alanlarını ve
              model yapısını daha iyi anlamak için ise{" "}
              <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                promosyon kalem
              </Link>{" "}
              rehberi de faydalı olacaktır.
            </p>

            <p>
              Baskılı kalemler genellikle{" "}
              <Link href="/kategori/cakmak" className="text-blue-600 underline">
                promosyon çakmak
              </Link>
              ,{" "}
              <Link href="/kategori/anahtarlik" className="text-blue-600 underline">
                promosyon anahtarlık
              </Link>
              ,{" "}
              <Link href="/kategori/termos" className="text-blue-600 underline">
                promosyon termos
              </Link>{" "}
              ve{" "}
              <Link href="/kategori/usb-bellek" className="text-blue-600 underline">
                promosyon USB bellek
              </Link>{" "}
              gibi ürünlerle birlikte tercih edilerek daha güçlü kampanyalar
              oluşturur. Yani baskılı kalem çoğu zaman tek başına değil, daha
              geniş bir promosyon stratejisinin parçası olarak düşünülür.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Baskılı Kalem Fiyatları Ne Kadar?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Baskılı kalem fiyatları, baskısız kalemlere göre biraz daha
                yüksek olur. Bunun nedeni ürün üzerine uygulanan baskı işlemi,
                baskı hazırlığı, işçilik ve kalite kontrol sürecidir. Özellikle
                logonun türüne göre baskı tekniği değiştiği için her baskılı
                kalemin maliyeti de aynı olmaz.
              </p>

              <ul className="list-disc pl-6">
                <li>Ekonomik kalem + baskı → daha düşük maliyet</li>
                <li>Metal kalem + lazer baskı → orta segment</li>
                <li>Premium kalem + UV baskı → daha yüksek segment</li>
                <li>Özel yüzeyli kalem + özel baskı → değişken fiyat</li>
              </ul>

              <p>
                Ancak en önemli faktörlerden biri sipariş adedidir. Yüksek adetli
                siparişlerde birim maliyet ciddi şekilde düşer. Bu nedenle tek bir
                örnek fiyat yerine, ürün tipi ve adet aralığına göre düşünmek çok
                daha doğrudur.
              </p>

              <p>
                Ayrıca fiyat araştırması yaparken yalnızca “kalem üzerinde baskı
                var mı?” sorusuna değil, “hangi baskı uygulanıyor?” sorusuna da
                bakılmalıdır. Çünkü tek renk tampon baskı ile çift yön renkli UV
                baskının maliyet yapısı aynı değildir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Baskılı Kalem Fiyatını Belirleyen Ana Unsurlar
            </h2>

            <div className="mt-4 space-y-6 text-sm leading-7 text-gray-700 md:text-base">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  1. Kalem Modeli
                </h3>
                <p className="mt-2">
                  Ekonomik plastik modeller daha uygun fiyatlıdır. Metal kalemler
                  ve daha şık görünümlü ürünler ise daha yüksek fiyat seviyesine
                  çıkar. Bunun nedeni kullanılan malzeme ve ürün segmentidir.
                </p>
                <p className="mt-2">
                  Aynı baskı tekniği uygulansa bile ürünün gövde kalitesi arttıkça
                  toplam maliyet de değişebilir. Bu yüzden fiyat analizinde ürün
                  modeli her zaman ilk değerlendirilmesi gereken başlıktır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  2. Baskı Türü
                </h3>
                <p className="mt-2">
                  Baskılı kalem fiyatlarını en çok etkileyen konulardan biri
                  baskı türüdür. Tampon baskı daha ekonomik bir seçenek olurken,
                  UV baskı daha canlı ve dikkat çekici sonuç verir. Lazer baskı
                  ise genellikle metal ürünlerde kullanılır ve daha prestijli bir
                  görünüm sunar.
                </p>
                <p className="mt-2">
                  Logo yapısı burada çok önemlidir. Sade tek renkli bir baskı ile
                  detaylı çok renkli bir logo arasında maliyet farkı oluşabilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Sipariş Adedi
                </h3>
                <p className="mt-2">
                  Adet yükseldikçe birim fiyat düşer. 300 adet ile 3000 adet
                  arasında çoğu zaman ciddi fark oluşur. Çünkü baskı hazırlığı ve
                  üretim planlaması gibi sabit maliyetler daha fazla ürüne
                  dağıtılır.
                </p>
                <p className="mt-2">
                  Bu nedenle düzenli promosyon kullanan firmalar için küçük küçük
                  sipariş vermek yerine daha planlı ve yüksek adetli siparişler
                  çoğu zaman daha avantajlıdır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Baskı Yönü
                </h3>
                <p className="mt-2">
                  Tek yön baskı daha uygun fiyatlıdır. Çift yön baskı ise hem
                  işçilik hem uygulama süresi arttığı için maliyeti yükseltir.
                  Özellikle hem logo hem iletişim bilgisi istenen siparişlerde bu
                  fark daha belirgin olabilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  5. Renk Sayısı ve Tasarım Detayı
                </h3>
                <p className="mt-2">
                  Tek renk logolar daha ekonomik baskı çözümleri sunarken,
                  çok renkli veya detaylı logolar fiyatı artırabilir. Tasarım ne
                  kadar kompleks hale gelirse uygulama süreci de o kadar dikkat
                  gerektirir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Baskı Türüne Göre Fiyat Farkları
            </h2>

            <div className="mt-4 space-y-6 text-sm leading-7 text-gray-700 md:text-base">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tampon Baskı
                </h3>
                <p className="mt-2">
                  En uygun fiyatlı baskı yöntemlerinden biridir. Tek renk logolar
                  için idealdir ve genellikle plastik kalemlerde kullanılır.
                  Geniş çaplı dağıtımlar için maliyet avantajı sağlar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  UV Baskı
                </h3>
                <p className="mt-2">
                  Renkli ve dikkat çekici baskılar için tercih edilir. Tampon
                  baskıya göre daha pahalı olabilir ancak marka görünürlüğünü
                  artıran daha canlı bir sonuç verir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Lazer Baskı
                </h3>
                <p className="mt-2">
                  Metal kalemlerde sık kullanılır. Kalıcı ve premium görünüm
                  sunar. Özellikle kurumsal hediye veya prestij odaklı siparişlerde
                  öne çıkar.
                </p>
              </div>

              <p>
                Bu baskı türlerini daha detaylı incelemek için{" "}
                <Link href="/rehber/kalem-baski-fiyatlari" className="text-blue-600 underline">
                  kalem baskı fiyatları
                </Link>{" "}
                rehberine de göz atabilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Baskı Yönü Fiyatı Nasıl Etkiler?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Baskı tek yön veya çift yön olabilir. Çift yön baskı maliyeti
                artırır çünkü işçilik ve uygulama süresi artar. Tek yön baskı,
                özellikle sade logo kullanımlarında daha ekonomik çözüm sunar.
              </p>

              <p>
                Bazı firmalar yalnızca logoyu bastırırken bazıları telefon
                numarası, web sitesi veya kısa slogan da eklemek ister. Bu tür
                tercihler baskı sürecini değiştirebilir ve maliyeti etkileyebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Toplu Sipariş Avantajı
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                300 adet yerine 3000 adet sipariş verdiğinizde birim fiyat ciddi
                şekilde düşer. Çünkü üretim ve baskı maliyetleri daha fazla ürüne
                bölünür. Bu nedenle firmalar genellikle toplu sipariş verir.
              </p>

              <p>
                Özellikle yıl boyunca promosyon kullanan işletmeler için toplu
                sipariş vermek hem operasyonel kolaylık sağlar hem de bütçe
                kontrolünü kolaylaştırır.
              </p>

              <p>
                Bu konuda daha detaylı bilgi almak isterseniz{" "}
                <Link
                  href="/rehber/promosyon-kalem-toplu-alim"
                  className="text-blue-600 underline"
                >
                  promosyon kalem toplu alım
                </Link>{" "}
                rehberi de size yardımcı olabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              En Doğru Baskılı Kalem Nasıl Seçilir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Doğru baskılı kalem seçimi sadece fiyatla ilgili değildir. Ürünün
                hangi amaçla kullanılacağı, kime verileceği ve markanın nasıl bir
                algı oluşturmak istediği birlikte değerlendirilmelidir.
              </p>

              <ul className="list-disc pl-6">
                <li>Fuar için → ekonomik kalem</li>
                <li>Kurumsal hediye için → metal kalem</li>
                <li>Prestij için → premium model</li>
                <li>Yüksek adetli dağıtım için → maliyet dengeli ürün</li>
              </ul>

              <p>
                Ayrıca{" "}
                <Link href="/rehber/promosyon-kalem-fiyatlari" className="text-blue-600 underline">
                  promosyon kalem fiyatları
                </Link>{" "}
                rehberimizi inceleyerek daha detaylı bilgi alabilirsiniz. Ürünün
                genel kullanım mantığını görmek için ise{" "}
                <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                  promosyon kalem
                </Link>{" "}
                rehberi faydalı olur.
              </p>

              <p>
                Ürünü doğrudan incelemek için{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfası da güçlü bir referans olacaktır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              En Çok Yapılan Hatalar
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <ul className="list-disc pl-6">
                <li>Sadece ürün fiyatına bakmak</li>
                <li>Baskı maliyetini hesaba katmamak</li>
                <li>Düşük adetle sipariş vermek</li>
                <li>Yanlış baskı türü seçmek</li>
                <li>Logo yapısına uygun olmayan baskıyı tercih etmek</li>
                <li>Kalitesiz ürün seçmek</li>
              </ul>

              <p>
                En sık hata, baskılı kalemi yalnızca ucuzluk açısından
                değerlendirmektir. Oysa baskılı bir ürün, doğrudan markayı temsil
                eder. Kötü yazan veya baskısı zayıf görünen bir kalem reklam
                etkisini azaltabilir.
              </p>

              <p>
                Bu nedenle fiyat ve kalite dengesi birlikte düşünülmelidir. Biraz
                daha kaliteli ürün, bazen çok daha uzun süreli ve olumlu reklam
                etkisi sağlayabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Baskılı kalem fiyatları doğru analiz edildiğinde oldukça
                avantajlıdır. Doğru ürün ve doğru baskı ile markanızı düşük
                maliyetle binlerce kişiye ulaştırabilirsiniz. Üstelik günlük
                kullanım sıklığı sayesinde bu reklam etkisi tek seferlik olmaz,
                uzun süre devam eder.
              </p>

              <p>
                Bu nedenle fiyat araştırması yaparken yalnızca baskılı ürünün
                toplam maliyetine değil, ürün segmentine, baskı tekniğine, adet
                yapısına ve hedef kitleye de dikkat etmek gerekir.
              </p>

              <p>
                Ürünleri incelemek için{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfasını ziyaret edebilir, genel bilgi için{" "}
                <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                  promosyon kalem
                </Link>{" "}
                rehberine ve fiyat karşılaştırması için{" "}
                <Link
                  href="/rehber/promosyon-kalem-fiyatlari"
                  className="text-blue-600 underline"
                >
                  promosyon kalem fiyatları
                </Link>{" "}
                sayfasına da göz atabilirsiniz.
              </p>
            </div>

            <div className="mt-10 rounded-xl bg-gray-100 p-6">
              <p className="font-semibold text-gray-900">
                Hemen teklif almak için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}