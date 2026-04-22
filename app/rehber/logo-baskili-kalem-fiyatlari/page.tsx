import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/logo-baskili-kalem-fiyatlari`;
const IMAGE_PATH = "/guides/logo-baskili-kalem-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;

export const metadata: Metadata = {
  title: "Logo Baskılı Kalem Fiyatları 2026 | Güncel ve Detaylı Rehber",
  description:
    "Logo baskılı promosyon kalem fiyatları 2026 hakkında detaylı rehber. Baskı türü, adet ve model bazlı tüm fiyat analizlerini öğrenin.",
  keywords: [
    "logo baskılı kalem fiyatları",
    "logo baskılı promosyon kalem",
    "promosyon kalem fiyatları 2026",
    "baskılı kalem fiyatları",
    "tampon baskılı kalem",
    "uv baskılı kalem",
    "metal promosyon kalem",
    "promosyon kalem",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Logo Baskılı Kalem Fiyatları 2026",
    description:
      "Logo baskılı promosyon kalem fiyatlarını etkileyen tüm faktörleri detaylı şekilde keşfedin.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Logo Baskılı Kalem Fiyatları 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Baskılı Kalem Fiyatları 2026",
    description:
      "Baskı türü, adet ve modele göre logo baskılı kalem fiyatlarını detaylı inceleyin.",
    images: [IMAGE_URL],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Logo Baskılı Kalem Fiyatları 2026",
    description:
      "Logo baskılı promosyon kalem fiyatları 2026 hakkında detaylı rehber. Baskı türü, adet ve model bazlı tüm fiyat analizlerini öğrenin.",
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
        name: "Logo Baskılı Kalem Fiyatları 2026",
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
        name: "Logo baskılı kalem fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logo baskılı kalem fiyatları kalem modeli, sipariş adedi, baskı türü, baskı yönü ve ürün segmentine göre değişir. Plastik kalemler daha ekonomik, metal kalemler ise daha prestijli ve yüksek fiyatlı olabilir.",
        },
      },
      {
        "@type": "Question",
        name: "En ekonomik baskı türü hangisidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle tampon baskı en ekonomik baskı seçeneklerinden biridir. Özellikle plastik promosyon kalemlerde sık tercih edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu siparişte logo baskılı kalem fiyatı düşer mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, sipariş adedi arttıkça birim fiyat genellikle düşer. Çünkü baskı hazırlığı ve üretim maliyetleri daha fazla ürüne yayılır.",
        },
      },
      {
        "@type": "Question",
        name: "Metal kalem neden daha pahalıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metal kalemler malzeme kalitesi, ağırlık, görünüm ve baskı kalıcılığı açısından daha premium bir segmentte yer aldığı için plastik modellere göre daha yüksek fiyatlı olabilir.",
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
        / <span>Logo Baskılı Kalem Fiyatları</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Logo Baskılı Kalem Fiyatları 2026
        </h1>

        <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={IMAGE_PATH}
            alt="Logo Baskılı Kalem Fiyatları 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Logo baskılı promosyon kalem fiyatları, kurumsal firmaların en çok
          araştırdığı konuların başında gelir. Promosyon kalemler düşük maliyetli
          olmalarına rağmen uzun süreli kullanım sağladıkları için markanın sürekli
          görünmesini sağlar. Bu da onları en etkili reklam araçlarından biri haline getirir.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-700">
          Ancak birçok firma sadece birim fiyata odaklanarak yanlış kararlar verir.
          Gerçek maliyet; kalem modeli, baskı türü, baskı yönü ve sipariş adedinin
          birleşimiyle oluşur. Doğru analiz yapıldığında hem maliyet düşer hem de
          marka etkisi artar.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">
              Logo Baskılı Kalem Fiyatları Neye Göre Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Logo baskılı kalem fiyatlarını belirleyen temel faktörler kalem modeli,
                baskı tekniği ve sipariş adedidir. Plastik kalemler daha ekonomik
                olurken metal kalemler daha prestijli ve pahalıdır.
              </p>

              <p>
                Ayrıca baskı detayları fiyat üzerinde doğrudan etkilidir. Tek renk
                baskı ile çok renkli baskı arasında ciddi fark olabilir. Aynı şekilde
                çift yön baskılar maliyeti artırır.
              </p>

              <p>
                Bu nedenle logo baskılı kalem fiyatı incelenirken yalnızca ürünün
                ham maliyetine değil, baskının uygulama biçimine ve sipariş
                planlamasına da bakmak gerekir. Sağlıklı bir teklif için tüm
                detayların birlikte değerlendirilmesi şarttır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türüne Göre Fiyat Farkları
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon kalemlerde tampon baskı, UV baskı ve lazer baskı en yaygın
                yöntemlerdir. Tampon baskı en ekonomik seçenektir ve plastik kalemlerde
                sık kullanılır.
              </p>

              <p>
                UV baskı daha canlı ve dikkat çekici sonuç verir. Lazer baskı ise
                özellikle metal kalemlerde tercih edilir ve premium bir görünüm sunar.
              </p>

              <p>
                Hangi baskı tekniğinin seçileceği sadece fiyatı değil, markanın
                kalem üzerindeki görünümünü ve algısını da doğrudan etkiler.
                Bu yüzden baskı seçimi, maliyet ve kalite dengesine göre yapılmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Adet Arttıkça Fiyat Nasıl Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Sipariş miktarı arttıkça birim fiyat düşer. Çünkü üretim ve baskı
                maliyetleri daha fazla ürüne bölünür. Bu nedenle toplu sipariş her
                zaman daha avantajlıdır.
              </p>

              <p>
                Örneğin 300 adet sipariş ile 1000 adet sipariş arasında ciddi fiyat
                farkı oluşur. Bu yüzden yıllık planlama yapmak maliyetleri düşürür.
              </p>

              <p>
                Düzenli promosyon dağıtımı yapan firmalar için dönemsel küçük
                siparişler yerine planlı toplu sipariş vermek çoğu zaman daha
                verimli sonuç sağlar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Plastik ve Metal Kalem Fiyat Karşılaştırması
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Plastik kalemler düşük maliyetli olduğu için geniş kitlelere hitap eder.
                Metal kalemler ise daha şık ve prestijlidir, bu nedenle kurumsal hediyelerde
                tercih edilir.
              </p>

              <p>
                Hedef kitlenize göre doğru seçim yapmak önemlidir. Geniş dağıtım için
                plastik, VIP müşteriler için metal kalem önerilir.
              </p>

              <p>
                Burada önemli olan yalnızca ucuz olanı seçmek değil, kalemin
                kullanım alanına ve marka temsil gücüne uygun segmenti belirlemektir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Fiyat Nasıl Alınır?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En uygun fiyat için sipariş detaylarını net belirlemek gerekir.
                Model, adet ve baskı özellikleri önceden planlanmalıdır.
              </p>

              <p>
                Farklı tedarikçilerden teklif almak ve karşılaştırma yapmak en doğru
                sonucu verir. Güvenilir firmalarla çalışmak uzun vadede avantaj sağlar.
              </p>

              <p>
                Özellikle teklif alırken baskı yönü, renk sayısı, teslim süresi
                ve ürün segmenti gibi bilgileri baştan paylaşmak daha doğru ve
                karşılaştırılabilir sonuçlar verir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Sık Yapılan Hatalar
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En büyük hata sadece fiyat odaklı seçim yapmaktır. Kalitesiz ürünler
                markanıza zarar verebilir.
              </p>

              <p>
                Ayrıca düşük adetli sipariş vererek yüksek maliyet ödemek de sık yapılan
                hatalardandır. Planlı hareket etmek her zaman kazandırır.
              </p>

              <p>
                Bir diğer hata da baskı kalitesi ile ürün kalitesini ayrı düşünmemektir.
                Oysa güçlü marka etkisi için hem kalem hem baskı birlikte değerlendirilmelidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Logo Baskılı Kalem Fiyatları 2026 Trendleri
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                2026 yılında çevre dostu kalemler, geri dönüştürülebilir malzemeler
                ve premium tasarımlar ön plana çıkmaktadır. Aynı zamanda UV baskı
                teknolojisinin daha fazla tercih edildiği görülmektedir.
              </p>

              <p>
                Marka görünürlüğünü artırmak isteyen firmalar, artık sadece uygun
                fiyatı değil; sürdürülebilirlik, estetik ve kalıcı kullanım gibi
                unsurları da daha fazla dikkate almaktadır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Sıkça Sorulan Sorular
            </h2>

            <div className="mt-4 space-y-5 text-gray-700 leading-7">
              <div>
                <p className="font-semibold">Logo baskılı kalem fiyatları ne kadar?</p>
                <p>Fiyatlar model, adet ve baskı türüne göre değişir.</p>
              </div>

              <div>
                <p className="font-semibold">En ucuz baskı türü hangisi?</p>
                <p>Tampon baskı en ekonomik seçeneklerden biridir.</p>
              </div>

              <div>
                <p className="font-semibold">Minimum sipariş kaç adet?</p>
                <p>Genellikle ürün modeline göre değişmekle birlikte çoğu sipariş 100-300 adet aralığında başlar.</p>
              </div>

              <div>
                <p className="font-semibold">Metal kalem neden pahalı?</p>
                <p>Malzeme kalitesi, görünüm ve premium segment algısı nedeniyle fiyatı daha yüksektir.</p>
              </div>

              <div>
                <p className="font-semibold">Toplu sipariş avantajlı mı?</p>
                <p>Evet, birim fiyat çoğu zaman ciddi şekilde düşer.</p>
              </div>

              <div>
                <p className="font-semibold">Hangi kalem daha çok tercih edilir?</p>
                <p>Plastik kalemler yaygın dağıtım için, metal kalemler ise kurumsal prestij için daha çok tercih edilir.</p>
              </div>
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