import Link from "next/link";
import KalemSetiProductGrid from "./KalemSetiProductGrid";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
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

const CATEGORY = "Kalem Setleri";
const PAGE_URL = `${SITE_URL}/promosyon-kalem-setleri`;
const PAGE_TITLE = "Promosyon Kalem Setleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı kutulu kalem, dolma kalem ve anahtarlıklı set modellerini karşılaştırın. Set içeriği, kutu baskısı ve toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon kalem seti minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi modele, stok durumuna ve logo uygulamasına göre değişir. Kalem seti ile ayrı satılan kalem kutusunun sipariş koşulları aynı olmayabilir. Ürün kodunu ve istediğiniz set ya da kutu adedini paylaşarak koşulları teyit edin."
  },
  {
    "question": "Kalem setinde kutu ve tüm parçalar fiyata dahil mi?",
    "answer": "Set içeriği ürün bazında kontrol edilmelidir. Kategoride set modellerinin yanında ayrı kalem kutuları da bulunur; kutu ürünü satın alırken kalemin dahil olduğunu varsaymayın. Teklifte kutu, kalem, varsa anahtarlık ve diğer parçaları ayrı belirtin."
  },
  {
    "question": "Kalem seti fiyatlarına logo baskısı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Kalem üzerindeki logo, kutu baskısı ve varsa diğer parçalardaki uygulamalar teklif aşamasında netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyin."
  },
  {
    "question": "Kaleme ve kutuya aynı logo uygulanabilir mi?",
    "answer": "Uygun modellerde iki alana da uygulama değerlendirilebilir; ancak yöntem ve kullanılabilir alan farklı olabilir. Kalemde lazer, uygun kutuda serigraf veya ürüne uygun başka bir teknik seçilebilir. Her iki parçanın uygunluğunu ve bedelini ayrı teyit edin."
  },
  {
    "question": "Dolma kalem ile roller veya tükenmez kalem nasıl karşılaştırılır?",
    "answer": "Yazım türü, uç, mürekkep veya refil sistemi, tutuş ve kullanım alışkanlığı birlikte değerlendirilmelidir. Dolma kalemde kartuş ya da dolum bilgisine; diğer modellerde refil türüne ve mürekkep rengine bakın. Set adına bakarak içindeki tüm kalemlerin aynı yazım türünde olduğunu varsaymayın."
  },
  {
    "question": "Kalem setine kişiye özel isim yazılabilir mi?",
    "answer": "İsim uygulaması talebiniz varsa seçilen modelde yapılabilirliğini teklif aşamasında sorun. Uygun yüzey ve logo alanı incelendikten sonra yerleşim, yazı ölçüsü, isim listesi ve ek maliyet netleştirilir. Kişiselleştirmenin standart uygulamaya dahil olduğunu varsaymayın."
  },
  {
    "question": "Toplu kalem seti siparişi ne kadar sürede hazırlanır?",
    "answer": "Stok, renk dağılımı, adet, logo onayı, kutu baskısı ve varsa kişiselleştirme süreyi etkiler. Etkinlik tarihinizi, teslimat adresini ve ambalaj talebini paylaşın; set içeriğini, toplam bedeli ve net teslim süresini sipariş öncesinde teyit edin."
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
        alt: "Promosyon Kalem Setleri",
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
              name: "Promosyon Kalem Setleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kalem Setleri",
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
            Promosyon Kalem Setleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Kalem Setleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Kutulu kalem, dolma kalem ve anahtarlıklı set modellerini inceleyin.
            Set içeriğini, yazım türünü ve kutu üzerindeki logo seçeneklerini
            karşılaştırarak kurumsal hediye siparişiniz için teklif alın.
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

      <KalemSetiProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal Hediye İçin Hangi Kalem Seti Seçilmeli?</h2>
            <p>
              Bayi toplantısı, çalışan hediyesi veya müşteri ziyareti için set
              seçerken kalemin yazım türünü ve kutunun sunum biçimini birlikte
              değerlendirin. Setin kaç parçadan oluştuğunu, kutunun dahil olup
              olmadığını ve her parçanın logo alanını ürün detayından kontrol edin.
            </p>
            <p>
              Yukarıdaki filtrelerle lazer uygulaması, kutu serigraf baskısı,
              dolma kalem, kalem ve anahtarlık, renk seçeneği ve kalem kutusu
              gruplarını inceleyebilirsiniz. Aynı kategoride bulunmaları bütün
              ürünlerin aynı parçalardan oluştuğu anlamına gelmez.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Kalem Setlerini ve Kalem Kutularını Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Kalem seti grupları, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Kutulu kalem", "Müşteri, bayi ve çalışan hediyeleri", "Kalem sayısı, yazım türü ve kutu içeriği"],
                    ["Dolma kalem seti", "Yazım tercihine göre kurumsal hediyeler", "Kartuş veya dolum sistemi ve dahil aksesuarlar"],
                    ["Kalem ve anahtarlık", "Birden fazla parçalı hediye sunumları", "Her parçanın malzemesi ve ayrı logo alanı"],
                    ["Ayrı kalem kutusu", "Uyumlu bir kalemi kutulu sunmak", "Kalemin dahil olup olmadığı, kutu ölçüsü ve iç yuva"],
                  ].map(([model, usage, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{usage}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Yazım Türü, Refil ve Kutu Uyumu</h2>
            <p>
              Roller, tükenmez veya dolma kalem tercihini kullanıcı alışkanlığına
              göre yapın. Mürekkep rengi, uç ve refil bilgilerini seçilen modelden
              kontrol edin. Dolma kalemde kartuş ya da dolum sistemini ve kutuya
              dahil aksesuarları ayrıca öğrenin.
            </p>
            <p>
              Ayrı kalem kutusu alacaksanız dış ölçü tek başına yeterli değildir.
              Kalemin boyu ve çapıyla birlikte iç yuvanın biçimini ve kutunun
              kapanışını teyit edin. Bir kutuya görselde kalem yerleştirilmiş
              olması, fiyatın kalemi de kapsadığı anlamına gelmez.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Kalem ve Kutuya Logo Uygulaması</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Kalem üzerindeki logo</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Uygun yüzeylerde lazer veya modelin desteklediği başka bir
                  yöntem seçilebilir. Klips, gövde biçimi ve kaplama uygulama
                  alanını etkiler. Logoyu gerçek ölçüde değerlendirin.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Kutu ve diğer parçalar</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Uygun kutularda serigraf veya ürüne uygun başka bir uygulama
                  değerlendirilebilir. Varsa anahtarlık için de ayrı yöntem ve
                  alan belirlenir. Tüm parçaların baskısını teklif talebinde belirtin.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-4xl leading-7 text-gray-200">
              Aynı logonun farklı yüzeylerdeki görünümü değişebilir. Mümkünse
              vektörel PDF, AI, EPS veya SVG paylaşın; kalem, kutu ve ek parçaların
              yerleşimini ayrı netleştirin. Kişiye özel isim talebiniz varsa
              uygulanabilirliğini ve ek maliyetini önceden sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Kalem Seti Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca
              belirtilir. Teklifleri aynı ürün kodu, aynı set adedi ve aynı logo
              kapsamıyla karşılaştırın. Fiyatı bulunmayan modeller için güncel teklif isteyin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Sete dahil kalem, anahtarlık, kutu ve diğer parçalar.</li>
              <li>Yazım türü, malzeme, renk seçeneği ve sipariş adedi.</li>
              <li>Her parça için logo yöntemi, konumu ve uygulama sayısı.</li>
              <li>Varsa isim uygulaması, paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Toplam set sayısı ile toplam parça sayısını ayırın. Kalem ve kutu
              baskılarının tek bedel mi yoksa ayrı kalemler mi olduğunu teyit
              ederek baskılı siparişin toplamını netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toptan Kalem Seti Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, set içeriğini, rengi ve istediğiniz set adedini belirtin.</li>
              <li>Logo dosyanızı ve uygulama istediğiniz parçaları paylaşın.</li>
              <li>Varsa isim listesi, kutulama ve ayrı paketleme talebini ekleyin.</li>
              <li>Etkinlik tarihinizi ve teslimat adresini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Tekli ürünlerle karşılaştırma yapmak için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">promosyon kalem</Link>{" "}
              ve{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-white underline underline-offset-4">anahtarlık modellerini</Link>{" "}
              inceleyebilirsiniz. Paketinizi{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter</Link>{" "}
              ile tamamlamak istiyorsanız kutu uyumunu ve birlikte teslimat
              isteğinizi ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Kalem Seti Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Promosyon Kalem Setleri Hakkında Sık Sorulan Sorular</h2>
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