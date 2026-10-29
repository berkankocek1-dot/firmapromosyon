import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { sortProductsByCode } from "@/data/productSorting";


const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const CATEGORY = "Karton Çantalar";
const PAGE_URL = `${SITE_URL}/promosyon-karton-cantalar`;
const PAGE_TITLE = "Promosyon Karton Çanta Modelleri | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı karton çanta modellerini ebat, körük, sap ve mat/parlak selefon seçenekleriyle karşılaştırın. Toptan kurumsal sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon karton çanta minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi seçilen model, ebat, baskı ve üretim koşullarına göre teyit edilir. Ürün kodunu, istediğiniz ölçüyü ve adedi paylaşarak teklif alın. Bez veya tela çantanın minimum sipariş koşulunu karton çantaya uygulamayın."
  },
  {
    "question": "KÇ-100, KÇ-110 ve KÇ-120 modelleri nasıl karşılaştırılır?",
    "answer": "Üç modelde de ürün bilgisinde 230 gr Amerikan Bristol, mat veya parlak selefon ve PP kordon sap belirtilir. Ebat seçenekleri farklıdır. Ürününüzün kutulu ölçüsüne göre ilgili modelin ebat listesini inceleyin ve seçtiğiniz ölçünün üretim uygunluğunu teyit edin."
  },
  {
    "question": "Karton çanta ölçüsü nasıl seçilmelidir?",
    "answer": "Çantaya konulacak ürünün veya kutunun en, boy ve kalınlığını birlikte değerlendirin. Çantanın dış ölçüsü kullanılabilir iç alanla aynı olmayabilir. Ölçülerin hangi sırayla yazıldığını, körüğü ve ürünün ağızdan rahat geçip geçmediğini sipariş öncesinde teyit edin."
  },
  {
    "question": "Mat ve parlak selefon arasında nasıl seçim yapılır?",
    "answer": "Seçimi tasarımın görünümü, kurumsal renkler ve yüzey tercihinize göre yapabilirsiniz. Baskı ve kaplama birlikte değerlendirilmelidir. Selefon kaplama bulunması, çantanın su geçirmez olduğu veya belirli bir ağırlığı taşıyacağı anlamına gelmez."
  },
  {
    "question": "Karton çanta fiyatına logo baskısı dahil mi?",
    "answer": "Güncel fiyat ve baskı kapsamı teklif aşamasında netleştirilir. Ürün kodu, ebat, adet, tasarım, kaplama, sap ve teslimat kapsamını birlikte belirtin. Logo baskısının ya da ek bir uygulamanın standart bedel içinde olduğunu varsaymayın; KDV ve sevkiyatı da teyit edin."
  },
  {
    "question": "Karton çantaya logo hangi yöntemle uygulanır?",
    "answer": "Mevcut ürün bilgilerinde baskı yöntemi teklif aşamasında netleştirilir. Tasarım renkleri, uygulanacak alan ve üretim koşulları birlikte değerlendirilir. Gofre veya farklı bir özel uygulama istiyorsanız uygunluğunu, hazırlık bedelini ve süreye etkisini ayrıca sorun."
  },
  {
    "question": "Toplu karton çanta siparişinde teslim süresi nasıl belirlenir?",
    "answer": "Ebat, adet, tasarım onayı, baskı ve kaplama, sap ile paketleme talepleri üretim süresini etkiler. Etkinlik tarihinizi ve teslimat adresinizi paylaşın; nihai özellikleri, toplam bedeli ve net teslim süresini sipariş öncesinde teyit edin."
  }
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Karton Çanta Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function Page() {
  const list = sortProductsByCode(products.filter((p) => p.category === CATEGORY));

  const itemListElement = list.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Ürünler",
              item: `${SITE_URL}/urunler`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Promosyon Karton Çantalar",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Karton Çantalar",
          url: PAGE_URL,
          description: PAGE_DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      {list.length > 0 && (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }} />
      )}

      <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
        <nav className="mb-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">
            Promosyon Karton Çantalar
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Karton Çantalar
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            KÇ-100, KÇ-110 ve KÇ-120 karton çanta modellerini inceleyin.
            Mağaza teslimatı, fuar materyali veya kurumsal hediye için ebat,
            körük, kordon sap ve kaplama seçeneklerini karşılaştırarak teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </header>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
loading="lazy"
                className="object-contain bg-white p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                {p.shortDesc}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Karton Çanta Seçimine İçeriğin Ölçüsünden Başlayın</h2>
            <p>
              Mağaza ürününü, fuar kataloğunu veya hediye kutusunu sunmak için
              çanta seçerken önce taşınacak içeriği belirleyin. Ürünün kutulu
              ölçüsü, kalınlığı ve yaklaşık ağırlığı; ebat, körük ve sap seçimini
              birlikte etkiler. Birden fazla parça konulacaksa yerleşimi birlikte değerlendirin.
            </p>
            <p>
              Bu kategorideki modellerde 230 gr Amerikan Bristol, mat veya
              parlak selefon ve PP kordon sap bilgileri bulunur. Modellerin
              ebat listeleri farklıdır; yalnızca görsele bakmak yerine
              istediğiniz ölçüyü ilgili ürünün açıklamasından kontrol edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Karton Çanta Modelleri ve Örnek Ebatlar</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">KÇ-100, KÇ-110 ve KÇ-120 modellerinin örnek ebatları ve ortak ürün bilgileri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Listelenen ebatlardan örnekler</th>
                    <th scope="col" className="px-4 py-3">Malzeme ve sunum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["KÇ-100", "/urunler/promosyon-karton-canta-kc-100", "25 x 35 x 8 cm; 21,5 x 33 x 12 cm"],
                    ["KÇ-110", "/urunler/promosyon-karton-canta-kc-110", "18 x 26 x 10 cm; 19 x 25 x 7 cm"],
                    ["KÇ-120", "/urunler/promosyon-karton-canta-kc-120", "35 x 24 x 12 cm; 28 x 17 x 9 cm"],
                  ].map(([model, href, sizes]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">
                        <Link href={href} className="underline underline-offset-4">{model}</Link>
                      </th>
                      <td className="px-4 py-4">{sizes}</td>
                      <td className="px-4 py-4">230 gr Amerikan Bristol, mat/parlak selefon, PP kordon sap</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Tabloda ebat listesinden örnekler yer alır; tüm seçenekler için
              ürün detayını inceleyin. Ölçülerin en, boy ve körük sırasını ve
              seçilen ebatın üretim uygunluğunu teklif aşamasında teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Körük, Kordon Sap ve Taşıma Uygunluğu</h2>
            <p>
              Çantanın dış ölçüsüyle kullanılabilir iç alan aynı olmayabilir.
              Kutunun tabana yerleşmesini, çantanın ağzından rahat geçmesini
              ve sapların taşıma sırasında ürünle uyumunu değerlendirin.
              Körük ölçüsü özellikle kalın veya birden fazla parçalı içerikte önemlidir.
            </p>
            <p>
              Kağıt gramajı tek başına kilogram cinsinden taşıma kapasitesi
              değildir. Sap bağlantısı, taban ve gövde yapısı birlikte
              değerlendirilmelidir. Ağır veya köşeli ürünlerde içerik bilgisini
              paylaşarak uygunluğu teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Mat veya Parlak Selefon ve Logo Yerleşimi</h2>
            <p>
              Kaplama seçimini kurumsal renkler ve tasarımın görünümüyle birlikte
              değerlendirin. Mat ve parlak yüzeydeki görünüm aynı olmayabilir.
              Selefon kaplama bulunmasını su geçirmezlik veya belirli bir taşıma
              kapasitesi garantisi olarak yorumlamayın.
            </p>
            <p>
              Logo, slogan ve iletişim bilgilerini yalnızca ön yüzü düşünerek
              yerleştirmeyin. Arka yüz, yan körük, katlama ve sap bağlantıları
              tasarımın görünümünü etkileyebilir. Ürünün dış ölçüsü doğrudan
              kullanılabilir baskı alanı değildir.
            </p>
            <p>
              Baskı yöntemi mevcut ürün bilgisinde teklif aşamasında netleştirilir.
              Mümkünse vektörel PDF, AI, EPS veya SVG paylaşın; fotoğraf içeren
              tasarımlarda çözünürlüğü gerçek baskı ölçüsünde değerlendirin.
              Gofre veya farklı bir özel uygulama talebiniz varsa yapılabilirliğini,
              hazırlık bedelini ve süreye etkisini ayrıca sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toptan Karton Çanta Fiyatları Nasıl Karşılaştırılır?</h2>
            <p>
              Güncel fiyat ürün, ebat ve sipariş kapsamına göre teklif edilir.
              Aynı model adı altında farklı ölçüler bulunabileceğinden yalnızca
              ürün koduyla fiyat karşılaştırmak yeterli değildir. Nihai ölçüyü
              ve aşağıdaki kalemleri birlikte netleştirin:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, ebat, körük ve kağıt özellikleri.</li>
              <li>Mat veya parlak kaplama ile sap seçimi.</li>
              <li>Sipariş adedi, baskı tasarımı ve uygulama kapsamı.</li>
              <li>Varsa özel uygulama, hazırlık, paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Minimum adet ile fiyatlandırma esasını ayrı sorun. Baskının ve
              kaplamanın dahil olduğu kalemleri netleştirerek toplam sipariş
              tutarını aynı kapsam üzerinden karşılaştırın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Karton Çanta Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, ebatı, adedi ve taşınacak içeriği belirtin.</li>
              <li>Kaplama ve sap tercihiyle varsa özel üretim isteğini paylaşın.</li>
              <li>Logo dosyanızı ve ön, arka veya yan yüz tasarım taleplerini ekleyin.</li>
              <li>Etkinlik tarihini, teslimat adresini ve paketleme ihtiyacını bildirin.</li>
              <li>Nihai ölçü, tasarım yerleşimi, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Kumaş alternatifleri için{" "}
              <Link href="/promosyon-ham-bez-tela-canta" className="font-semibold text-white underline underline-offset-4">ham bez ve tela çanta modellerini</Link>{" "}
              inceleyebilirsiniz. Çantayı{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem seti</Link>{" "}
              veya{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter</Link>{" "}
              sunumunda kullanacaksanız parçaların kutulu ölçüleriyle birlikte uyumunu değerlendirin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Karton Çanta Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Promosyon Karton Çanta Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}