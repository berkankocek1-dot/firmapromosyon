import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-fiyatlari`;
const IMAGE_PATH = "/guides/promosyon-kalem-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Kalem Fiyatları 2026 (Güncel Liste + Detaylı Rehber)";
const DESCRIPTION =
  "Promosyon kalem fiyatları ne kadar? 2026 güncel fiyatlar, baskı türleri, adet bazlı maliyet, model seçimi ve detaylı hesaplama rehberi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon kalem fiyatları",
    "promosyon kalem fiyatları 2026",
    "baskılı kalem fiyatları",
    "kalem baskı fiyatları",
    "logo baskılı kalem fiyatları",
    "promosyon kalem adet fiyatı",
    "metal kalem fiyatları",
    "plastik promosyon kalem fiyatları",
    "kurumsal promosyon kalem",
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
      "Promosyon kalem fiyatlarını etkileyen model, adet, baskı ve kalite gibi tüm faktörleri öğrenin.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Fiyatları 2026",
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
        name: "Promosyon Kalem Fiyatları",
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
        name: "Promosyon kalem fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon kalem fiyatları; ürün modeli, sipariş adedi, baskı türü, baskı yönü, ürün kalitesi ve kullanılan malzemeye göre değişir.",
        },
      },
      {
        "@type": "Question",
        name: "Adet arttıkça promosyon kalem fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, sipariş adedi arttıkça birim maliyet genellikle düşer. Çünkü üretim ve baskı hazırlık maliyetleri daha fazla ürüne yayılır.",
        },
      },
      {
        "@type": "Question",
        name: "En uygun fiyatlı promosyon kalem hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle plastik promosyon kalemler en uygun fiyatlı seçenekler arasında yer alır. Ancak baskı türü ve sipariş adedi toplam maliyeti etkileyebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Metal kalemler neden daha pahalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metal kalemler daha prestijli görünüm, daha güçlü malzeme hissi ve çoğu zaman daha premium kullanım deneyimi sunduğu için plastik modellere göre daha yüksek fiyatlı olabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Baskı dahil fiyat ile baskısız fiyat aynı mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır. Baskı dahil fiyat ile baskısız fiyat aynı değildir. Baskı türü, baskı yönü ve renk sayısı toplam maliyeti doğrudan etkiler.",
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
        / <span>Promosyon Kalem Fiyatları</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Kalem Fiyatları 2026 (Güncel Liste + Detaylı Rehber)
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Promosyon Kalem Fiyatları 2026"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
            <p>
              Promosyon kalem fiyatları 2026 yılında; ürün modeli, sipariş
              adedi, baskı türü, baskı yönü, kullanılan malzeme ve genel ürün
              kalitesine göre değişiklik göstermektedir. Birçok firma promosyon
              kalem satın alırken sadece ürün fiyatına odaklanır; ancak gerçek
              maliyet, baskı ve adet faktörleriyle birlikte belirlenir. Bu yüzden
              fiyat araştırması yaparken yalnızca “kalem kaç TL?” sorusuna değil,
              “hangi model, hangi baskı ve hangi adet?” sorusuna da cevap vermek
              gerekir.
            </p>

            <p>
              Özellikle kurumsal promosyon ürünleri arasında en çok tercih edilen
              kalemler, düşük maliyetli olmalarına rağmen yüksek reklam gücü
              sunar. Günlük kullanım sıklığı çok yüksek olduğu için bir kalem
              yalnızca dağıtıldığı gün değil, sonrasında da markayı görünür tutar.
              Bu nedenle doğru fiyat analizi yapmak hem bütçe kontrolü hem de
              maksimum verim almak açısından oldukça önemlidir.
            </p>

            <p>
              Eğer ürünleri doğrudan incelemek isterseniz{" "}
              <Link href="/kategori/kalem" className="text-blue-600 underline">
                promosyon kalem modelleri
              </Link>{" "}
              sayfasına göz atabilirsiniz. Böylece ekonomik plastik modellerden
              daha prestijli metal kalemlere kadar farklı seçenekleri
              karşılaştırabilir, fiyat araştırmasını ürünle birlikte daha sağlıklı
              şekilde değerlendirebilirsiniz.
            </p>

            <p>
              Promosyon kalemler genellikle{" "}
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
              gibi ürünlerle birlikte tercih edilerek daha güçlü bir reklam etkisi
              oluşturur. Yani kalem fiyatını değerlendirirken bazen bunu daha geniş
              bir promosyon stratejisinin parçası olarak düşünmek gerekir.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Promosyon Kalem Fiyatları Ne Kadar?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatları geniş bir aralıkta değişir. Ekonomik
                plastik kalemler daha düşük maliyetli olurken, metal ve özel
                tasarım kalemler daha yüksek fiyatlı olabilir. Bu yüzden tek bir
                sabit fiyat vermek çoğu zaman doğru olmaz. Fiyat aralığını belirleyen
                şey, ürünün segmenti ve sipariş detaylarıdır.
              </p>

              <ul className="list-disc pl-6">
                <li>Ekonomik plastik kalemler: daha düşük fiyatlı</li>
                <li>Metal kalemler: orta – yüksek segment</li>
                <li>Soft touch veya özel tasarım kalemler: daha premium fiyat</li>
                <li>Dokunmatik kalemler: özellik bazlı değişen fiyat</li>
              </ul>

              <p>
                Ancak bu fiyatlara çoğu zaman baskı dahil değildir. Baskı
                eklendiğinde toplam maliyet değişir. Ayrıca tek yön veya çift yön
                baskı, tek renk ya da çok renk tercih edilmesi de fiyat üzerinde
                doğrudan etkilidir. Bu nedenle kalem fiyatını değerlendirirken
                baskısız ve baskılı fiyat ayrımını mutlaka yapmak gerekir.
              </p>

              <p>
                Eğer genel ürün yapısını daha iyi anlamak isterseniz{" "}
                <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                  promosyon kalem
                </Link>{" "}
                rehberine de göz atabilirsiniz. Böylece ürünün nerelerde
                kullanıldığını, hangi modellerin öne çıktığını ve fiyat ile kalite
                arasındaki ilişkiyi daha net görebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Fiyatı Belirleyen Ana Faktörler
            </h2>

            <div className="mt-4 space-y-6 text-sm leading-7 text-gray-700 md:text-base">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  1. Kalem Modeli
                </h3>
                <p className="mt-2">
                  Plastik kalemler genellikle daha uygun fiyatlıdır. Metal kalemler
                  ise daha prestijli olduğu için fiyatları daha yüksektir. Bunun
                  yanında dokunmatik özellikli, çevre dostu veya özel yüzeyli
                  modeller de standart plastik kalemlere göre daha pahalı olabilir.
                </p>
                <p className="mt-2">
                  Burada önemli olan, seçilen modelin hedef kitleye uygun olmasıdır.
                  Örneğin binlerce kişiye dağıtılacak bir fuar çalışmasında ekonomik
                  model mantıklıyken, yönetici seviyesinde müşteri için metal kalem
                  daha doğru olabilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  2. Sipariş Adedi
                </h3>
                <p className="mt-2">
                  Adet arttıkça fiyat düşer. 300 adet ile 3000 adet arasında ciddi
                  fark oluşur. Bunun temel nedeni üretim ve baskı süreçlerindeki
                  sabit maliyetlerin daha fazla ürüne yayılmasıdır.
                </p>
                <p className="mt-2">
                  Bu yüzden promosyon ürünü düzenli kullanan firmalar için yüksek
                  adetli siparişler çoğu zaman daha avantajlıdır. Küçük küçük sipariş
                  vermek kısa vadede kolay görünse de toplamda daha pahalıya
                  gelebilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Baskı Türü
                </h3>
                <p className="mt-2">
                  Tampon baskı genellikle daha ekonomik, UV baskı ise daha canlı ve
                  dikkat çekici olduğu için nispeten daha maliyetli olabilir. Metal
                  kalemlerde kullanılan lazer baskı ise premium görünüm sunar ve
                  fiyat yapısını etkileyebilir.
                </p>
                <p className="mt-2">
                  Marka logosunun yapısı burada önemlidir. Tek renkli sade logo ile
                  çok renkli detaylı logonun baskı maliyeti aynı olmaz. Bu yüzden
                  baskı tekniği seçimi sadece estetik değil, fiyat açısından da
                  kritiktir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Baskı Yönü
                </h3>
                <p className="mt-2">
                  Çift yön baskı maliyeti artırır. Çünkü uygulama süreci uzar ve
                  işçilik artar. Tek yön baskı daha ekonomik bir seçenek olabilir.
                </p>
                <p className="mt-2">
                  Bazı firmalar yalnızca logo kullanırken bazıları telefon numarası,
                  web sitesi veya slogan da eklemek ister. Bu gibi tercihler ürünün
                  toplam maliyetine yansıyabilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  5. Ürün Kalitesi ve Yazım Performansı
                </h3>
                <p className="mt-2">
                  Fiyatı belirleyen ama çoğu zaman göz ardı edilen bir başka unsur
                  ürün kalitesidir. Çok ucuz bir kalem, kötü yazıyorsa veya kısa
                  sürede bozuluyorsa markaya zarar verebilir. Daha kaliteli bir
                  ürün, biraz yüksek maliyetli olsa da uzun vadede daha iyi reklam
                  etkisi yaratabilir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Toplu Alımda Fiyat Neden Düşer?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalemlerde toplu alım yapmak en büyük avantajlardan
                biridir. Çünkü üretim hazırlığı, klişe maliyeti, baskı süreci ve
                işçilik giderleri daha fazla ürüne bölünür. Bu da birim başına
                düşen maliyeti aşağı çeker.
              </p>

              <p>
                Bu yüzden firmalar genellikle yüksek adetli sipariş vererek maliyeti
                düşürür. Özellikle yıl boyunca fuar, etkinlik veya müşteri ziyareti
                planlayan işletmeler için toplu sipariş vermek daha mantıklı olabilir.
              </p>

              <p>
                Bu konuyu daha detaylı incelemek isterseniz{" "}
                <Link
                  href="/rehber/promosyon-kalem-toplu-alim"
                  className="text-blue-600 underline"
                >
                  promosyon kalem toplu alım
                </Link>{" "}
                rehberi de size yol gösterebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              En Uygun Promosyon Kalem Nasıl Seçilir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                En uygun kalem sadece en ucuz olan değildir. Kalite ve kullanım
                amacı birlikte değerlendirilmelidir. Çünkü amaç sadece maliyeti
                düşürmek değil, markayı doğru temsil eden bir ürün bulmaktır.
              </p>

              <ul className="list-disc pl-6">
                <li>Fuar için → ekonomik model</li>
                <li>Kurumsal hediye için → metal kalem</li>
                <li>Prestij için → premium ürün</li>
                <li>Teknoloji odaklı marka için → dokunmatik model</li>
              </ul>

              <p>
                Ayrıca{" "}
                <Link href="/kategori/ajanda" className="text-blue-600 underline">
                  promosyon ajanda
                </Link>{" "}
                gibi ürünlerle birlikte kullanıldığında etkisi artar. Kalem + ajanda
                veya kalem + anahtarlık gibi kombinler daha güçlü marka algısı
                oluşturabilir.
              </p>

              <p>
                Doğru seçim için ürünün kimlere verileceği, kaç adet sipariş
                edileceği, hangi baskının uygulanacağı ve kampanyanın amacı baştan
                netleştirilmelidir. Böylece yalnızca uygun fiyatlı değil, aynı
                zamanda etkili bir promosyon ürünü seçilmiş olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Promosyon Kalem Fiyatı Hesaplarken En Çok Yapılan Hatalar
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <ul className="list-disc pl-6">
                <li>Sadece kalem fiyatına bakmak</li>
                <li>Baskı maliyetini hesaba katmamak</li>
                <li>Düşük adetle sipariş verip birim maliyeti yükseltmek</li>
                <li>Kalitesiz ürün seçmek</li>
                <li>Logo yapısına uygun olmayan baskı tekniği seçmek</li>
                <li>Hedef kitleyi düşünmeden ürün seçmek</li>
              </ul>

              <p>
                Özellikle sadece fiyat odaklı düşünmek en sık yapılan hatalardan
                biridir. Çünkü promosyon ürünlerinde amaç yalnızca ucuz ürün almak
                değil, reklam etkisi yüksek bir ürün seçmektir.
              </p>

              <p>
                Bazen çok düşük bütçeli bir seçim kısa vadede tasarruf gibi görünse
                de kötü ürün deneyimi yüzünden marka değerine zarar verebilir. Bu
                nedenle maliyet ve kalite birlikte değerlendirilmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Promosyon Kalem Fiyatlarını Araştırırken Hangi Sayfalara Bakılmalı?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Fiyat araştırması yaparken sadece tek bir sayfaya bakmak yerine hem
                ürün kategorilerini hem de rehber içerikleri birlikte incelemek daha
                doğrudur. Çünkü ürün sayfası size model çeşitliliğini gösterirken,
                rehber içerikleri maliyetin neden değiştiğini anlamanızı sağlar.
              </p>

              <p>
                Bu nedenle aşağıdaki içerikler birlikte değerlendirildiğinde daha
                net sonuç alınır:
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
                    href="/rehber/baskili-kalem-fiyatlari"
                    className="text-blue-600 underline"
                  >
                    Baskılı kalem fiyatları
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rehber/kalem-baski-fiyatlari"
                    className="text-blue-600 underline"
                  >
                    Kalem baskı fiyatları
                  </Link>
                </li>
              </ul>

              <p>
                Bu yapı sayesinde hem ürünün kendisini hem de fiyatı etkileyen
                değişkenleri daha kolay analiz etmek mümkün olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem fiyatları; model, adet, baskı ve kaliteye göre
                değişir. Doğru seçim yapıldığında hem uygun maliyetli hem de yüksek
                reklam etkili bir yatırım haline gelir. Özellikle doğru ürünü doğru
                kitleye ulaştırdığınızda kalem gibi basit görünen bir ürün bile çok
                güçlü sonuç verebilir.
              </p>

              <p>
                Bu nedenle fiyat araştırmasını yalnızca “en ucuz ürün” mantığıyla
                değil, ürün kalitesi, kullanım amacı ve baskı detaylarıyla birlikte
                değerlendirmek gerekir. Böylece hem bütçeyi koruyan hem de marka
                algısını güçlendiren bir seçim yapılabilir.
              </p>

              <p>
                Ürünleri doğrudan incelemek için{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfasını ziyaret edebilir; ürün mantığını anlamak için{" "}
                <Link href="/rehber/promosyon-kalem" className="text-blue-600 underline">
                  promosyon kalem
                </Link>{" "}
                rehberine de göz atabilirsiniz.
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