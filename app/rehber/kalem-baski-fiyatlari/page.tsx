import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/kalem-baski-fiyatlari`;
const IMAGE_PATH = "/guides/kalem-baski-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Kalem Baskı Fiyatları 2026 (Tampon, UV, Lazer Detaylı Rehber)";
const DESCRIPTION =
  "Kalem baskı fiyatları ne kadar? Tampon baskı, UV baskı, lazer baskı, adet bazlı maliyet hesaplama ve doğru baskı seçimi rehberi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "kalem baskı fiyatları",
    "tampon baskı kalem fiyatları",
    "uv baskı kalem fiyatları",
    "lazer baskı kalem fiyatları",
    "kalem baskı maliyeti",
    "logo baskılı kalem",
    "baskılı kalem fiyatları",
    "promosyon kalem baskı fiyatı",
    "kalem baskı 2026",
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
      "Kalem baskı maliyetlerini etkileyen tüm faktörleri öğrenin. Baskı türü, adet, renk sayısı ve kalite detayları burada.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Kalem Baskı Fiyatları 2026",
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
        name: "Kalem Baskı Fiyatları",
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
        name: "Kalem baskı fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kalem baskı fiyatları; baskı türü, baskı yönü, renk sayısı, sipariş adedi, ürün yüzeyi ve seçilen kalem modeline göre değişir.",
        },
      },
      {
        "@type": "Question",
        name: "En ekonomik kalem baskı yöntemi hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle tampon baskı en ekonomik baskı yöntemlerinden biridir. Özellikle tek renkli ve sade logolarda maliyet avantajı sağlar.",
        },
      },
      {
        "@type": "Question",
        name: "UV baskı mı lazer baskı mı daha pahalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genel olarak UV ve lazer baskı, tampon baskıya göre daha yüksek maliyetli olabilir. Lazer baskı genellikle metal kalemlerde premium görünüm sunar.",
        },
      },
      {
        "@type": "Question",
        name: "Çift yön baskı fiyatı artırır mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, çift yön baskı hem uygulama süresini hem de işçilik maliyetini artırdığı için toplam baskı maliyetini yükseltebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu siparişlerde kalem baskı maliyeti düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, sipariş adedi arttıkça birim baskı maliyeti genellikle düşer. Çünkü baskı hazırlığı ve üretim giderleri daha fazla ürüne yayılır.",
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
        / <span>Kalem Baskı Fiyatları</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Kalem Baskı Fiyatları 2026 (Tampon, UV ve Lazer Baskı Rehberi)
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Kalem Baskı Fiyatları 2026"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
            <p>
              Kalem baskı fiyatları, promosyon kalem siparişi verirken en kritik
              maliyet kalemlerinden biridir. Birçok firma sadece kalemin fiyatına
              odaklansa da aslında baskı maliyeti toplam bütçenin önemli bir kısmını
              oluşturur. 2026 yılında kalem baskı fiyatları; baskı türü, baskı yönü,
              renk sayısı, ürün yüzeyi, sipariş adedi ve seçilen kalem modeline göre
              değişiklik göstermektedir.
            </p>

            <p>
              Özellikle logo baskılı promosyon kalemlerde doğru baskı seçimi hem
              maliyet hem de marka görünürlüğü açısından büyük önem taşır. Yanlış
              baskı tercihi hem gereksiz maliyet hem de düşük kalite algısı
              oluşturabilir. Bu nedenle kalem baskı fiyatlarını değerlendirirken
              sadece “adet başı baskı kaç TL?” sorusuna değil, “hangi baskı hangi
              üründe daha doğru sonuç verir?” sorusuna da cevap vermek gerekir.
            </p>

            <p>
              Eğer ürünleri doğrudan incelemek isterseniz{" "}
              <Link href="/kategori/kalem" className="text-blue-600 underline">
                promosyon kalem modelleri
              </Link>{" "}
              sayfasına bakabilirsiniz. Kalemin genel kullanım yapısını, model
              çeşitlerini ve hangi ürünlerin baskıya daha uygun olduğunu daha iyi
              anlamak için ise{" "}
              <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                promosyon kalem
              </Link>{" "}
              rehberi de size yardımcı olacaktır.
            </p>

            <p>
              Baskılı kalemler çoğu zaman tek başına değil,{" "}
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
              oluşturur. Bu yüzden baskı maliyeti, bazen daha geniş bir promosyon
              bütçesinin önemli parçalarından biri haline gelir.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Kalem Baskı Fiyatları Ne Kadar?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kalem baskı fiyatları, seçilen baskı türüne göre değişir. En
                ekonomik seçenek çoğu zaman tampon baskı olurken, UV ve lazer baskı
                daha yüksek maliyetli olabilir. Ancak burada tek belirleyici unsur
                baskı türü değildir. Uygulanan zemin, baskı alanı, renk sayısı ve
                sipariş adedi de sonucu değiştirir.
              </p>

              <ul className="list-disc pl-6">
                <li>Tampon baskı → en uygun fiyat</li>
                <li>UV baskı → orta seviye maliyet</li>
                <li>Lazer baskı → daha premium fiyat</li>
                <li>Çift yön baskı → daha yüksek maliyet</li>
              </ul>

              <p>
                Ancak bu fiyatlar adet arttıkça düşer. Bu nedenle toplu sipariş her
                zaman daha avantajlıdır. Özellikle düzenli promosyon kullanan
                firmalar için düşük adetli siparişler uzun vadede daha pahalıya
                gelebilir.
              </p>

              <p>
                Baskı maliyetini daha doğru yorumlamak için sadece kaleme değil,
                kalemin kullanılacağı amaç ve hedef kitleye de bakmak gerekir.
                Çünkü bazen düşük maliyetli baskı teknikleri geniş dağıtım için çok
                uygun olurken, bazen daha prestijli bir müşteri kitlesi için daha
                kaliteli bir baskı gerekir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Baskı Türüne Göre Detaylı İnceleme
            </h2>

            <div className="mt-4 space-y-6 text-sm leading-7 text-gray-700 md:text-base">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tampon Baskı
                </h3>
                <p className="mt-2">
                  Tampon baskı, promosyon kalemlerde en çok kullanılan ve en
                  ekonomik baskı yöntemidir. Tek renkli logolar için idealdir ve
                  özellikle plastik kalemlerde yaygın şekilde kullanılır. Yüksek
                  adetli siparişlerde maliyeti oldukça düşüktür.
                </p>
                <p className="mt-2">
                  Bu yöntem daha çok sade, okunaklı ve maliyet odaklı çözümler için
                  uygundur. Fuarlarda, geniş çaplı dağıtımlarda ve ekonomik
                  kampanyalarda en çok tercih edilen baskı seçeneklerinden biridir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  UV Baskı
                </h3>
                <p className="mt-2">
                  UV baskı, renkli ve dikkat çekici tasarımlar için tercih edilir.
                  Marka görünürlüğünü artırır ancak tampon baskıya göre daha
                  maliyetlidir. Özellikle çok renkli logolarda ve daha güçlü görsel
                  etki istenen çalışmalarda öne çıkar.
                </p>
                <p className="mt-2">
                  Eğer logonuz renkli bir yapıya sahipse ve görünürlük sizin için
                  daha önemliyse UV baskı doğru tercih olabilir. Ancak burada maliyet
                  farkı da mutlaka hesaba katılmalıdır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Lazer Baskı
                </h3>
                <p className="mt-2">
                  Lazer baskı genellikle metal kalemlerde kullanılır. Kalıcı ve
                  premium bir görünüm sunar. Kurumsal hediyelerde, yönetici
                  sunumlarında ve prestij odaklı çalışmalarda en çok tercih edilen
                  yöntemlerden biridir.
                </p>
                <p className="mt-2">
                  Bu yöntem boyalı bir baskı gibi görünmez; doğrudan yüzey üzerine
                  işlendiği için daha şık ve daha kalıcı bir etki yaratır. Ancak
                  her ürün için uygun değildir. Genellikle metal gövdeli kalemlerde
                  daha iyi sonuç verir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Baskı Yönü ve Renk Sayısı Fiyatı Nasıl Etkiler?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kalem baskı fiyatlarını etkileyen en önemli faktörlerden biri baskı
                yönüdür. Tek yön baskı daha uygun fiyatlıdır; çift yön baskı ise
                maliyeti artırır. Çünkü hem uygulama süresi uzar hem de işçilik
                artar.
              </p>

              <p>
                Ayrıca renk sayısı arttıkça fiyat da artar. Tek renk logo en
                ekonomik çözümdür. Çok renkli ve detaylı logolar ise daha dikkatli
                uygulama gerektirdiği için maliyeti yükseltebilir.
              </p>

              <p>
                Bazı firmalar yalnızca logo uygular, bazıları ise web sitesi,
                telefon numarası veya kısa slogan da eklemek ister. Bu gibi küçük
                detaylar bile toplam maliyet üzerinde fark yaratabilir. Bu nedenle
                baskı tasarımı teklif öncesinde mutlaka netleştirilmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Sipariş Adedi Neden Çok Önemlidir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kalem baskı maliyetleri toplu siparişlerde ciddi şekilde düşer.
                300 adet yerine 3000 adet sipariş verdiğinizde birim baskı maliyeti
                önemli ölçüde azalır. Bunun temel nedeni, baskı hazırlığı ve üretim
                planlaması gibi sabit maliyetlerin daha fazla ürüne yayılmasıdır.
              </p>

              <p>
                Özellikle yıl boyunca fuar, etkinlik, bayi toplantısı veya müşteri
                ziyareti yapan firmalar için toplu sipariş vermek çok daha mantıklı
                olabilir. Böylece hem maliyet düşer hem de operasyonel süreç daha
                kolay yönetilir.
              </p>

              <p>
                Bu konuyu daha detaylı incelemek için{" "}
                <Link
                  href="/rehber/promosyon-kalem-toplu-alim"
                  className="text-blue-600 underline"
                >
                  promosyon kalem toplu alım
                </Link>{" "}
                rehberine de göz atabilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              En Doğru Baskı Nasıl Seçilir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                En doğru baskı seçimi, ürünün kullanım amacı ve hedef kitlesiyle
                birlikte değerlendirilmelidir. Her baskı türü her durumda en iyi
                seçenek değildir.
              </p>

              <ul className="list-disc pl-6">
                <li>Ekonomik dağıtım → tampon baskı</li>
                <li>Renkli tasarım → UV baskı</li>
                <li>Prestij → lazer baskı</li>
                <li>Yüksek adetli kampanya → maliyet odaklı baskı</li>
              </ul>

              <p>
                Eğer fuarda binlerce kişiye dağıtım yapılacaksa en ekonomik çözüm
                daha doğru olabilir. Ancak kurumsal müşteri ziyareti veya hediye
                seti hazırlanıyorsa daha kaliteli baskı tercih edilmelidir.
              </p>

              <p>
                Daha detaylı bilgi için{" "}
                <Link
                  href="/rehber/baskili-kalem-fiyatlari"
                  className="text-blue-600 underline"
                >
                  baskılı kalem fiyatları
                </Link>{" "}
                rehberimizi inceleyebilirsiniz. Genel ürün mantığını görmek için{" "}
                <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                  promosyon kalem
                </Link>{" "}
                sayfası da bu konuda destekleyicidir.
              </p>

              <p>
                Ürünleri doğrudan karşılaştırmak isterseniz{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfası da size yardımcı olacaktır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              En Çok Yapılan Hatalar
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <ul className="list-disc pl-6">
                <li>Yanlış baskı türü seçmek</li>
                <li>Düşük adetle sipariş vermek</li>
                <li>Çok renkli logo kullanıp maliyeti artırmak</li>
                <li>Sadece fiyat odaklı karar vermek</li>
                <li>Kalem yüzeyine uygun olmayan baskı istemek</li>
                <li>Logo okunurluğunu düşünmemek</li>
              </ul>

              <p>
                En büyük hatalardan biri, baskı fiyatını tek başına düşünmektir.
                Oysa baskının asıl görevi sadece kaleme bir logo koymak değil,
                markayı doğru ve okunaklı şekilde yansıtmaktır.
              </p>

              <p>
                Yanlış baskı tekniği seçildiğinde hem para boşa gidebilir hem de
                ürün beklenen reklam etkisini vermez. Bu nedenle maliyet ve görsel
                sonuç birlikte düşünülmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Kalem Baskı Fiyatlarını Değerlendirirken Hangi Sayfalara Bakılmalı?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Baskı maliyetini doğru anlamak için sadece tek bir içerik yeterli
                olmayabilir. Ürün modeli, baskı türü ve genel promosyon mantığı
                birlikte değerlendirilmelidir.
              </p>

              <ul className="list-disc pl-6">
                <li>
                  <Link href="/kategori/kalem" className="text-blue-600 underline">
                    Promosyon kalem modelleri
                  </Link>
                </li>
                <li>
                  <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                    Promosyon kalem rehberi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rehber/promosyon-kalem-fiyatlari"
                    className="text-blue-600 underline"
                  >
                    Promosyon kalem fiyatları
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rehber/baskili-kalem-fiyatlari"
                    className="text-blue-600 underline"
                  >
                    Baskılı kalem fiyatları
                  </Link>
                </li>
              </ul>

              <p>
                Bu yapı sayesinde hem ürün tarafını hem de baskı maliyetini daha
                sağlıklı yorumlamak mümkün olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kalem baskı fiyatları doğru analiz edildiğinde oldukça avantajlıdır.
                Doğru baskı yöntemi ve doğru adet ile hem maliyeti düşürebilir hem
                de güçlü bir reklam etkisi yaratabilirsiniz. Üstelik baskı, kalemi
                sıradan bir üründen çıkarıp markayı temsil eden bir tanıtım aracına
                dönüştürür.
              </p>

              <p>
                Bu nedenle fiyat araştırması yaparken yalnızca baskı maliyetine
                değil; baskı türüne, ürün yüzeyine, logo yapısına, adet seviyesine
                ve hedef kitleye de dikkat etmek gerekir.
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
                rehberine ve karşılaştırmalı fiyat yapısı için{" "}
                <Link
                  href="/rehber/baskili-kalem-fiyatlari"
                  className="text-blue-600 underline"
                >
                  baskılı kalem fiyatları
                </Link>{" "}
                sayfasına göz atabilirsiniz.
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