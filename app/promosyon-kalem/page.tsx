import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
import KalemProductGrid from "./KalemProductGrid";
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

const CATEGORY = "Kalem";
const PAGE_URL = `${SITE_URL}/promosyon-kalem`;

const faqItems = [
  {
    question: "Promosyon kalem minimum kaç adet yaptırılır?",
    answer:
      "Promosyon kalem siparişlerinde minimum adet seçilen modele, baskı türüne ve üretim şartlarına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünlerde toplu sipariş adedi daha yüksek olabilir.",
  },
  {
    question: "Promosyon kalem fiyatları neye göre değişir?",
    answer:
      "Promosyon kalem fiyatları; ürünün malzemesine, modeline, baskı türüne, baskı yönüne, sipariş miktarına ve özel taleplere göre değişiklik gösterebilir. Plastik, metal ve dokunmatik kalem gibi farklı modeller farklı fiyat aralıklarına sahip olabilir.",
  },
  {
    question: "Logo baskılı kalemlerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı kalemlerde ürün modeline göre tampon baskı, UV baskı, serigrafi veya lazer baskı gibi farklı baskı yöntemleri uygulanabilir. Uygun baskı tekniği kalemin yüzeyi, malzemesi ve logo tasarımına göre belirlenir.",
  },
  {
    question: "Promosyon kalem siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, baskı yoğunluğuna, onay sürecine ve stok durumuna bağlı olarak değişebilir. Net termin bilgisi için ürün seçimi sonrası teklif sürecinde bilgi alınması en doğru yöntemdir.",
  },
  {
    question: "Plastik ve metal promosyon kalem arasında ne fark vardır?",
    answer:
      "Plastik promosyon kalemler genellikle ekonomik ve yüksek adetli dağıtımlar için tercih edilir. Metal promosyon kalemler ise daha prestijli bir görünüm sunar ve kurumsal hediye, yönetici seti veya özel müşteri çalışmaları için daha uygun olabilir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Kalem Modelleri ve Fiyatları | Logo Baskılı",
  description:
    "Logo baskılı plastik, metal, jel ve dokunmatik promosyon kalem modellerini ve baskı hariç fiyatlarını inceleyin. Toplu kalem siparişi için teklif alın.",
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
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon kalem modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Kalem",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kalem",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon kalem modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon kalem çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Kalem</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Logo Baskılı Promosyon Kalem Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Fuar dağıtımı için plastik, müşteri hediyesi için metal veya günlük
            kullanım için jel ve dokunmatik kalem seçeneklerini karşılaştırın.
            Ürünlerdeki fiyatlar baskı hariçtir; logo baskılı toplu kalem siparişi
            için model kodu, adet ve logonuzla teklif isteyin.
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

      <KalemProductGrid products={list} />
      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Hangi Promosyon Kalem Modeli Size Uygun?</h2>
            <p>Kalem seçerken dağıtım yapılacak kişi sayısını, kullanım amacını ve logonun gövdede kaplayacağı alanı birlikte değerlendirin. Üstteki filtrelerden kalem türünü seçebilir, ürün detaylarından modelin özelliklerini inceleyebilirsiniz.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Promosyon kalem türlerinin kullanım ve seçim açısından karşılaştırması</caption>
                <thead className="text-white"><tr>
                  <th scope="col" className="border-b border-white/20 p-3">Kalem türü</th>
                  <th scope="col" className="border-b border-white/20 p-3">Kullanım amacı</th>
                  <th scope="col" className="border-b border-white/20 p-3">Seçerken kontrol edin</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Plastik", "Fuar, seminer ve yüksek adetli dağıtım", "Gövde rengi, tutuş ve logo baskı alanı"],
                    ["Metal", "Müşteri ziyareti ve kurumsal hediye", "Yüzey kaplaması ve lazer uygulamasına uygunluk"],
                    ["Jel ve roller", "Ofis kullanımı ve yazım deneyimi odaklı hediyeler", "Refil türü, uç kalınlığı ve mürekkep rengi"],
                    ["Dokunmatik", "Telefon veya tablet kullanan hedef kitleler", "Stylus uç, gövde malzemesi ve yazım özellikleri"],
                    ["Kurşun", "Eğitim, çizim ve etkinlik dağıtımları", "Gövde şekli, silgi ve baskı alanı"],
                  ].map(([type, use, check]) => (
                    <tr key={type}>
                      <th scope="row" className="border-b border-white/10 p-3 font-semibold text-white">{type}</th>
                      <td className="border-b border-white/10 p-3">{use}</td>
                      <td className="border-b border-white/10 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Jel, rubber ve dokunmatik özellikleri aynı kalemde bir arada bulunabilir. Rubber gövdenin kaplamasını, jel refilin yazım türünü, dokunmatik ise ekran kullanımına uygun ucu ifade eder. Bu nedenle karar verirken ürünün tüm özelliklerini inceleyin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Kalem Fiyatları ve Baskı Maliyeti</h2>
            <p>Ürün kartlarında fiyat bulunan modellerde tutarlar TL + KDV olarak ve baskı hariç gösterilir. Fiyatı bulunmayan modeller için güncel fiyat ve stok bilgisi isteyebilirsiniz. Baskılı siparişin toplamı; kalem bedeli, baskı uygulaması ve KDV birlikte değerlendirilerek belirlenir.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-white">Model ve adet:</strong> Gövde malzemesi, refil ve sipariş miktarı ürün maliyetini etkiler.</li>
              <li><strong className="text-white">Baskı yönü ve renk:</strong> Tek veya çift yön uygulama ile logonun renk sayısı baskı teklifini değiştirebilir.</li>
              <li><strong className="text-white">Uygulama yöntemi:</strong> Lazer, tampon veya UV seçimi modelin yüzeyine ve tasarıma göre yapılır.</li>
            </ul>
            <p>Farklı teklifleri karşılaştırırken aynı model, adet, baskı yönü ve KDV kapsamını esas alın. Hesaplama ayrıntıları için <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir" className="font-semibold text-white underline underline-offset-4">kalem fiyatlandırma rehberini</Link> inceleyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logolu Kalem İçin Baskı Yöntemi Nasıl Seçilir?</h2>
            <p>Metal kalemlerde yüzeyin uygunluğuna göre lazer kazıma değerlendirilebilir. Lazer uygulamasında görünüm, gövdenin kaplamasına ve alt malzemeye bağlıdır; sonuç her modelde aynı renkte olmaz. Plastik modellerde ise tampon veya UV gibi yöntemler ürünün baskı alanı ve logo tasarımına göre değerlendirilir.</p>
            <p>İnce çizgili veya küçük yazılı logolar, kalemin dar gövdesinde okunurluk kaybedebilir. Teklif isterken mümkünse vektörel logo dosyanızı paylaşın; uygulanabilir baskı alanını ve yerleşimini ürün seçimi sırasında netleştirin. Ürün detayında belirtilmeyen bir baskı yönteminin o modele uygun olduğunu varsaymayın.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplu Kalem Siparişi İçin Teklif Bilgileri</h2>
            <p>Teklif talebinize aşağıdaki bilgileri eklemeniz, ürün ve baskı maliyetinin ihtiyaçlarınıza göre hesaplanmasını kolaylaştırır:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Beğendiğiniz kalemin model kodu ve tercih ettiğiniz gövde rengi.</li>
              <li>Sipariş adedi ve varsa alternatif adet talebi.</li>
              <li>Logo dosyası, tek veya çift yön baskı tercihi.</li>
              <li>Teslimat ili ve ürünleri kullanmayı planladığınız tarih.</li>
            </ol>
            <p>Minimum sipariş adedi ve hazırlık süresi modele, stok durumuna ve baskı planına bağlıdır. Etkinlik tarihi kesin ise sipariş öncesinde stok ve teslim süresini teyit edin.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Kalem Siparişi İçin Teklif Al</Link>
            <p>Kalemi bir kurumsal hediye paketi içinde değerlendirmek isterseniz <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">logolu defter</Link>, <Link href="/promosyon-ajanda" className="font-semibold text-white underline underline-offset-4">promosyon ajanda</Link> ve <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem seti</Link> seçeneklerini de inceleyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Kalem Hakkında Sık Sorulan Sorular
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

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Kalem Rehberleri
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link
                href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  Promosyon Kalem Fiyatları Nasıl Hesaplanır?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon kalem fiyatlarını etkileyen temel unsurları ve sipariş
                  sürecinde dikkat edilmesi gereken noktaları inceleyin.
                </p>
              </Link>

              <Link
                href="/rehber/promosyon-kalem-toptan"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  Toplu Kalem Siparişi Rehberi
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Logo baskılı kalemlerde model, baskı ve toplu sipariş
                  sürecini inceleyin.
                </p>
              </Link>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}