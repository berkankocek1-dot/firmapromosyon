import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/data/products";
import CakmakProductGrid from "./CakmakProductGrid";
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

const CATEGORY = "Çakmak";
const PAGE_URL = `${SITE_URL}/promosyon-cakmak`;

const faqItems = [
  {
    question: "Çakmak fiyatlarına logo baskısı dahil mi?",
    answer:
      "Fiyat bulunan ürün kartlarında tutarlar TL + KDV olarak ve baskı hariç gösterilir. Baskılı toplam teklif, model ve sipariş adedi ile logonun renk sayısı ve tek veya çift yön baskı tercihi netleştikten sonra hazırlanır.",
  },
  {
    question: "Çakmağın iki yüzüne de baskı yapılabilir mi?",
    answer:
      "Çift yön baskı imkanı seçilen modelin yüzeyine ve uygulanabilir baskı alanına bağlıdır. İki yüzeyde kullanmak istediğiniz logo veya iletişim bilgilerini teklif talebinde paylaşarak uygunluğu ve baskı bedelini teyit edebilirsiniz.",
  },
  {
    question: "Promosyon çakmak minimum kaç adet yaptırılır?",
    answer:
      "Promosyon çakmak siparişlerinde minimum adet; seçilen modele, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon çakmak fiyatları neye göre değişir?",
    answer:
      "Promosyon çakmak fiyatları; ürün modeli, gövde yapısı, baskı tekniği, baskı alanı, sipariş miktarı ve özel taleplere göre değişebilir. Taşlı çakmak, elektronik çakmak veya farklı yüzey özelliklerine sahip modeller farklı fiyat aralıklarında değerlendirilebilir.",
  },
  {
    question: "Logo baskılı çakmaklarda hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon çakmaklarda modele göre tampon baskı, UV baskı veya ürün yüzeyine uygun farklı baskı teknikleri uygulanabilir. Doğru baskı yöntemi; logo yapısı, renk sayısı ve ürün yüzeyine göre belirlenmelidir.",
  },
  {
    question: "Promosyon çakmak siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, stok durumuna, baskı yoğunluğuna ve onay sürecine göre değişebilir. Net teslim süresi, seçilen ürün ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Taşlı ve elektronik promosyon çakmak arasında ne fark vardır?",
    answer:
      "Taşlı promosyon çakmak modelleri klasik kullanım yapısıyla öne çıkarken, elektronik çakmaklar farklı kullanım konforu sunabilir. Model seçimi yapılırken hedef kitle, kullanım alanı ve kurumsal dağıtım amacı birlikte değerlendirilmelidir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Çakmak Modelleri ve Fiyatları | Logo Baskılı",
  description:
    "Logo baskılı promosyon çakmak modellerini ve baskı hariç fiyatlarını inceleyin. Taşlı, manyetolu ve turbo seçenekleriyle toptan sipariş için teklif alın.",
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
    title: "Promosyon Çakmak | FirmaPromosyon",
    description:
      "Logo baskılı promosyon çakmak çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon çakmak modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Çakmak Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Çakmak | FirmaPromosyon",
    description:
      "Logo baskılı promosyon çakmak çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Çakmak",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Çakmak",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon çakmak modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon çakmak çeşitleri.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
  <nav className="mb-5 text-sm text-gray-300">
    <Link href="/" className="hover:text-white hover:underline">
      Ana Sayfa
    </Link>
    <span className="px-2">/</span>
    <Link href="/urunler" className="hover:text-white hover:underline">
      Ürünler
    </Link>
    <span className="px-2">/</span>
    <span className="font-semibold text-white">Promosyon Çakmak</span>
  </nav>

  <h1 className="text-3xl font-extrabold text-white md:text-4xl">
    Logo Baskılı Promosyon Çakmak Modelleri
  </h1>

  <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
    İşletmeniz için taşlı, manyetolu ve turbo çakmak seçeneklerini gövde rengi,
    baskı alanı ve model özelliklerine göre karşılaştırın. Ürün fiyatları baskı
    hariçtir; logolu toplu sipariş için model kodu, adet ve baskı tercihinizle
    kurumsal teklif isteyin.
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
</section>

      <CakmakProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">İşletmeniz İçin Hangi Çakmak Modelini Seçmelisiniz?</h2>
            <p>Toplu çakmak siparişinde gövde rengi ve tasarımın yanında ateşleme türünü, baskı yapılabilecek alanı ve sipariş adedini değerlendirin. Ürün detaylarında belirtilen özellikleri esas alarak aynı ihtiyaca yönelik modelleri karşılaştırabilirsiniz.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Promosyon çakmak modelleri için seçim ve kontrol tablosu</caption>
                <thead className="text-white"><tr>
                  <th scope="col" className="border-b border-white/20 p-3">Model özelliği</th>
                  <th scope="col" className="border-b border-white/20 p-3">Seçim sırasında değerlendirin</th>
                  <th scope="col" className="border-b border-white/20 p-3">Sipariş öncesinde teyit edin</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Taşlı", "Ateşleme tercihi ve gövde tasarımı", "Model ölçüsü, renk ve baskı alanı"],
                    ["Manyetolu / elektronik", "Ürün açıklamasındaki ateşleme yapısı", "Kullanım özellikleri ve baskıya uygun yüzey"],
                    ["Turbo / rüzgâr", "Modelin belirtilen alev ve kullanım özellikleri", "Teknik özellikler ve gövde seçenekleri"],
                    ["Doldurulabilir", "Ürünü yeniden doldurma tercihi", "Seçilen modelde dolum özelliğinin bulunması"],
                  ].map(([feature, selection, check]) => (
                    <tr key={feature}>
                      <th scope="row" className="border-b border-white/10 p-3 font-semibold text-white">{feature}</th>
                      <td className="border-b border-white/10 p-3">{selection}</td>
                      <td className="border-b border-white/10 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Bu özellikler aynı üründe bir arada bulunabilir. Doldurulabilirlik, ateşleme türünden ayrı bir özelliktir; yalnızca model adına veya görünümüne bakarak karar vermeyin. Stoktaki renkleri ve güncel ürün özelliklerini teklif aşamasında netleştirin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Çakmak Fiyatları ve Baskı Bedeli</h2>
            <p>Fiyat bulunan ürün kartlarında tutarlar TL + KDV olarak, baskı hariç gösterilir. Fiyatı bulunmayan modeller için güncel fiyat ve stok bilgisi isteyebilirsiniz. Logolu siparişin toplam maliyeti, ürün bedeli ile baskı uygulaması ve KDV birlikte değerlendirilerek hesaplanır.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-white">Model ve adet:</strong> Seçtiğiniz ürün, gövde özellikleri ve sipariş miktarı.</li>
              <li><strong className="text-white">Tek veya çift yön:</strong> Logonun bir yüzeye mi, iki yüzeye mi uygulanacağı.</li>
              <li><strong className="text-white">Logo ve baskı:</strong> Tasarımın renk sayısı, boyutu ve yüzeye uygun uygulama yöntemi.</li>
              <li><strong className="text-white">Ek talepler:</strong> Varsa farklı tasarımlar, renk dağılımı ve paketleme isteği.</li>
            </ul>
            <p>Teklifleri karşılaştırırken aynı model, adet, baskı yönü ve KDV kapsamını esas alın. Birden fazla adet için fiyat değerlendirmesi istiyorsanız alternatif miktarları da teklif talebinize ekleyin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskısında Renk ve Yerleşim Seçimi</h2>
            <p>Çakmağın baskı alanı sınırlı olduğu için logo, telefon numarası ve uzun bir sloganı aynı yüzeye yerleştirmek okunurluğu azaltabilir. Öncelikle hangi bilginin öne çıkmasını istediğinizi belirleyin; gerekiyorsa iletişim bilgisini ikinci yüzey için değerlendirin.</p>
            <p>Tampon veya UV gibi yöntemlerin uygunluğu, ürün yüzeyine ve logo tasarımına göre belirlenir. Gövde rengi ile logonun kontrastını, uygulanabilir baskı ölçüsünü ve ince çizgilerin okunurluğunu sipariş öncesinde kontrol edin. Mümkünse vektörel logo dosyanızı paylaşın.</p>
            <p>Farklı renklerde ürün sipariş edecekseniz aynı logonun her gövde üzerinde nasıl görüneceğini değerlendirin. Her rengin adet dağılımını ve baskının tek mi çift yön mü olacağını teklif aşamasında belirtin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toptan Baskılı Çakmak Siparişi Nasıl Verilir?</h2>
            <p>Teklifin ihtiyacınıza göre hazırlanabilmesi için şu bilgileri paylaşabilirsiniz:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Tercih ettiğiniz model kodu ve gövde rengi.</li>
              <li>Toplam sipariş adedi ve varsa renklere göre adet dağılımı.</li>
              <li>Logo dosyası, baskı renkleri ve tek veya çift yön tercihi.</li>
              <li>Teslimat ili ve ürünlerin gerekli olduğu tarih.</li>
            </ol>
            <p>Minimum adet ve hazırlık süresi modele, stok durumuna, baskı planına ve tasarım onayına bağlıdır. Açılış veya etkinlik için sipariş veriyorsanız hedef tarihi baştan paylaşarak teslim planını teyit edin.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Baskılı Çakmak İçin Teklif Al</Link>
            <p>İşletmenizin diğer tanıtım ihtiyaçları için <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">logo baskılı kalem</Link> ve <Link href="/promosyon-anahtarlik" className="font-semibold text-white underline underline-offset-4">promosyon anahtarlık</Link> seçeneklerini inceleyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Çakmak Hakkında Sık Sorulan Sorular
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}