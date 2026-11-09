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
          text: "Plastik gövdeli sade modeller ekonomik seçenekler sunabilir. En uygun model aynı adet, baskı ve ambalaj koşullarında alınan tekliflerle belirlenir.",
        },
      },
      {
        "@type": "Question",
        name: "En ekonomik baskı yöntemi hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tek renk, tek yön tampon baskı uygun yüzeylerde ekonomik olabilir; en uygun yöntem adet, logo, baskı alanı ve varsa hazırlık bedeline göre belirlenir.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu sipariş verince kalem fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adet indirimi ve sabit hazırlık bedelinin daha fazla ürüne bölünmesi birim maliyeti düşürebilir; toplam sipariş bedeli ayrıca hesaplanmalıdır.",
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
                <Link href="/promosyon-plastik-kalem" className="font-semibold text-blue-600 underline">
                  Plastik promosyon kalemler
                </Link>{" "}
                ekonomik seçenekler sunabilir. Fuar, etkinlik ve geniş katılımlı
                dağıtımlarda sade gövde yapısına sahip modeller karşılaştırılabilir.
                Ancak her plastik modelin her metal modelden ucuz olduğu varsayılmamalıdır.
              </p>
              <p>
                Aynı adet ve baskı koşullarında gövde, yazım mekanizması, mürekkep,
                ambalaj ve kişiselleştirme özelliklerini birlikte değerlendirin.
                En düşük baskısız ürün fiyatı, baskı dahil en düşük toplam bedel
                anlamına gelmeyebilir.
              </p>
              <p>
                Metal bir seçenek de değerlendiriyorsanız malzeme farklarını{" "}
                <Link href="/rehber/plastik-kalem-mi-metal-kalem-mi-daha-mantikli" className="font-semibold text-blue-600 underline">
                  plastik ve metal kalem karşılaştırmasından
                </Link>{" "}
                inceleyebilirsiniz. Buradaki seçim ölçütü dağıtım amacına uygun
                kalemi bütçe içinde bulmaktır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Sipariş Adedi Birim Maliyeti Nasıl Etkiler?
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Sipariş adedi arttığında varsa baskı hazırlığı ve kalıp bedeli daha
                fazla ürüne bölünür. Adet indirimi de uygulanıyorsa birim maliyet
                düşebilir. Bu avantaj modele, stoğa ve baskı uygulamasına göre değişir.
              </p>
              <p>
                Birim maliyet ile toplam ödeme farklıdır. 300 adet yerine 3.000 adet
                sipariş vermek birim fiyatı düşürebilir; ancak toplam ödemenizi artırabilir.
                İhtiyaç fazlası ürün almak yerine gerçek dağıtım adedini belirleyin.
              </p>
              <p>
                Karar vermeden önce aynı model ve baskı koşullarında iki farklı adet
                için teklif isteyin. Birim fiyatın yanında baskı dahil toplam bedeli,
                stok durumunu ve teslim süresini karşılaştırın.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türü Fiyatı Nasıl Etkiler?
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Tek renk, tek yön tampon baskı uygun yüzeylerde ekonomik bir seçenek
                olabilir. Ancak en uygun yöntem; adet, renk sayısı, baskı alanı,
                kalıp veya hazırlık bedeli ve seçilen kalem üzerinden belirlenir.
              </p>
              <p>
                UV baskı renkli logolar için, lazer işleme ise uygun metal yüzeyler
                için değerlendirilebilir. Bu yöntemleri her siparişte daha pahalı
                veya daha kaliteli kabul etmek yerine aynı modelin uygulanabilir
                baskı seçenekleri üzerinden teklif alın.
              </p>
              <p>
                Logonun okunaklı kalacağı en sade uygulamayı seçin; sırf maliyeti
                düşürmek için okunamayacak kadar küçük baskı yaptırmayın. Yöntemlerin
                farklarını{" "}
                <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-blue-600 underline">
                  kalem baskı türleri rehberinde
                </Link>{" "}
                inceleyebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Ucuz Kalemi Seçerken Yapılan Hatalar
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <ul className="list-disc space-y-2 pl-6">
                <li>Baskısız ürün fiyatını baskı dahil teklif ile karşılaştırmak.</li>
                <li>Kalıp, hazırlık, ambalaj ve kargo bedellerini hesaba katmamak.</li>
                <li>KDV dahil ve hariç fiyatları aynı kapsamdaymış gibi değerlendirmek.</li>
                <li>Yazım, mekanizma ve logo okunaklılığını kontrol etmeden sipariş vermek.</li>
                <li>Birim fiyatı düşürmek için ihtiyaçtan fazla ürün almak.</li>
              </ul>
              <p>
                Mümkünse numune veya baskı örneği inceleyin. Ekonomik bir kalemin de
                rahat yazması, mekanizmasının çalışması ve logonuzu okunaklı taşıması gerekir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Fiyatlı Kalem Nasıl Seçilir?
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                İki veya üç aday modeli aynı adet, baskı yönü, renk sayısı ve ambalaj
                koşullarında karşılaştırın. Ürün kodunu ve logo dosyasını paylaşarak
                hangi uygulamaların fiyata dahil olduğunu yazılı olarak netleştirin.
              </p>
              <p>
                <strong>Baskı dahil birim maliyet:</strong> Ürün birim bedeli + ayrıca
                alınan birim baskı bedeli + sabit hazırlık bedelinin sipariş adedine
                düşen payı. Baskı ürün fiyatına dahilse ikinci kez eklenmez.
              </p>
              <p>
                <strong>Sipariş toplamı:</strong> Adet ile baskı dahil birim maliyetin
                çarpımına, ayrıca alınan ambalaj ve kargo ile uygulanacak KDV eklenir.
                KDV dahil bir teklif kullanıyorsanız vergiyi tekrar eklemeyin.
                Fiyatın nasıl oluştuğunu ayrıntılı incelemek için{" "}
                <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir" className="font-semibold text-blue-600 underline">
                  promosyon kalem maliyet hesabı rehberine
                </Link>{" "}
                geçebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Ekonomik Promosyon Kalem İçin İdeal Strateji
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Önce dağıtım adedini ve baskı dahil bütçenizi belirleyin. Bu bütçe
                içinde yazım ve mekanizma beklentinizi karşılayan modeli seçin;
                ardından logoya uygun baskı seçeneklerini karşılaştırın.
              </p>
              <p>
                Ürün seçimi tamamlandığında stok, baskı onayı, teslim tarihi ve
                ödeme koşullarını teyit edin. Sipariş hazırlığını{" "}
                <Link href="/rehber/promosyon-kalem-toptan" className="font-semibold text-blue-600 underline">
                  toplu kalem siparişi rehberindeki
                </Link>{" "}
                adımlarla kontrol edebilirsiniz. Böylece ekonomik seçim yalnızca
                etiket fiyatına değil, kullanılabilir ürüne ve toplam bedele dayanır.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
          <div className="mt-5 space-y-5 text-gray-700 leading-7">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name}>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

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
    </div>
  );
}