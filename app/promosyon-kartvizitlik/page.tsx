import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
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

const CATEGORY = "Kartvizitlik";
const PAGE_URL = `${SITE_URL}/promosyon-kartvizitlik`;

const PAGE_TITLE = "Promosyon Kartvizitlik Modelleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı kartvizitlik ve kart taşıma modellerini ölçü, renk ve baskı alanıyla karşılaştırın. Termo deri seçenekler ve toptan sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Promosyon kartvizitlik modellerinin ölçüleri nedir?",
    "answer": "KV-100 ve KV-110 için 9,5 x 6,5 cm; KV-120 için 62 x 96 mm ürün ölçüsü belirtilir. DC-100 ölçüsü teklif aşamasında teyit edilir. Dış ölçü, kart yerleştirilecek iç alan veya logo baskı alanı olarak değerlendirilmemelidir."
  },
  {
    "question": "Kartvizitlikler kaç kart alır?",
    "answer": "Bu modeller için doğrulanmış kart kapasitesi belirtilmez. Kapasite kartın ölçüsüne ve kalınlığına göre değerlendirilir. Kartvizit ölçünüzü, kağıt kalınlığını ve taşımak istediğiniz miktarı paylaşarak uygunluğu sipariş öncesinde teyit edin."
  },
  {
    "question": "Termo deri kartvizitlik gerçek deri midir?",
    "answer": "Termo deri ifadesi tek başına gerçek deri anlamına gelmez. KV-100 ve KV-110 termo deri olarak listelenir. DC-100 için malzeme ayrıntıları teklif aşamasında netleştirilir. Gerçek deri talebiniz varsa ürün koduyla birlikte ayrıca belirtin."
  },
  {
    "question": "Kartvizitlik üzerine hangi logo uygulaması yapılır?",
    "answer": "KV-120 için lazer baskı ve 50 x 7 mm baskı alanı belirtilir. KV-100, KV-110 ve DC-100 modellerinde yöntem ve alan seçilen yüzey ile tasarıma göre teklif aşamasında belirlenir. Bir modelin baskı tekniğini bütün kategoriye uygulamayın."
  },
  {
    "question": "Kartvizitliklerde hangi renkler bulunur?",
    "answer": "KV-100 için beyaz, gri, turuncu, kırmızı, lacivert, siyah ve taba; KV-110 için lacivert, beyaz, siyah ve kırmızı; KV-120 için kırmızı listelenir. DC-100 renkleri teklif aşamasında paylaşılır. Güncel renk stoklarını sipariş öncesinde teyit edin."
  },
  {
    "question": "Promosyon kartvizitlik fiyatına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, uygulama alanı, adet ve varsa ek paketlemeye göre güncel teklif hazırlanır. Fiyatı bulunmayan modeller için teklif isteyebilirsiniz."
  },
  {
    "question": "Minimum kartvizitlik siparişi ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi model, renk stoku, miktar ve logo onayına göre teklif aşamasında netleştirilir. KV-120 için verilen koli/kutu adetleri minimum sipariş koşulu olarak değerlendirilmez. Ürün kodu, adet, logo dosyası ve teslimat tarihinizi paylaşın."
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
        alt: "Promosyon Kartvizitlik",
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
  const list = sortProductsByCode(visibleProducts.filter((p) => p.category === CATEGORY));

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
              name: "Promosyon Kartvizitlik",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kartvizitlik",
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
            Promosyon Kartvizitlik
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Kartvizitlik
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Kartvizitlik ve kart taşıma modellerini ölçü, malzeme, renk ve
            logo uygulamasına göre karşılaştırın. Toplantı, müşteri ziyareti
            ve kurumsal hediye siparişleri için güncel teklif alın.
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

      <p className="mt-8 text-sm font-medium !text-white">{list.length} ürün gösteriliyor</p>

      <section className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

              {typeof p.price === "number" && p.price > 0 ? (
                <div className="mt-3">
                  <p className="text-base font-bold text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p>
                  <p className="mt-1 text-xs text-gray-600">Fiyatlar baskı hariçtir. Güncel teklif için iletişime geçin.</p>
                </div>
              ) : <p className="mt-3 text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>}

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
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Kartvizitlik Nasıl Seçilir?</h2>
            <p>
              Kartvizitlik seçerken taşınacak kartın ölçüsünü, kalınlığını ve
              miktarını belirleyin. Dış ölçünün yeterli görünmesi iç haznenin
              aynı ölçüde olduğunu göstermez. Kullanım ihtiyacını kapak yapısı,
              renk ve logo yerleşimiyle birlikte değerlendirin.
            </p>
            <p>
              KV serisi kartvizitlikler ile DC-100 kart taşıma modeli farklı
              tasarımlar sunar. Kartvizit, banka kartı veya başka bir kart
              taşıyacaksanız uygunluğu seçilen ürün için ayrıca teyit edin.
              Kart kapasitesi ya da RFID koruması belirtilmediği için bu
              özellikleri standart kabul etmeyin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Kartvizitlik Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Kartvizitliklerin belirtilen ölçü, malzeme ve logo uygulama bilgileri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Belirtilen özellikler</th>
                    <th scope="col" className="px-4 py-3">Logo uygulaması</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["KV-100", "9,5 x 6,5 cm; termo deri; 7 renk seçeneği", "Yöntem ve alan teklifte belirlenir"],
                    ["KV-110", "9,5 x 6,5 cm; termo deri; 4 renk seçeneği", "Teknik, boyut ve konum teklifte belirlenir"],
                    ["KV-120", "62 x 96 mm; kırmızı", "Lazer; 50 x 7 mm baskı alanı"],
                    ["DC-100", "Kart bölmeli cüzdan / kart taşıma modeli", "Malzeme ayrıntıları, yöntem ve alan teyit edilir"],
                  ].map(([model, features, printing]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{features}</td>
                      <td className="px-4 py-4">{printing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Malzeme ve Renk Seçenekleri</h2>
            <p>
              KV-100 ve KV-110 termo deri olarak belirtilir. Termo deri
              ifadesi tek başına gerçek deri anlamına gelmez. DC-100 modelinde
              malzeme ayrıntıları sipariş öncesinde netleştirilir; belirli bir
              deri türü talebiniz varsa açıkça belirtin.
            </p>
            <p>
              KV-100 beyaz, gri, turuncu, kırmızı, lacivert, siyah ve taba;
              KV-110 lacivert, beyaz, siyah ve kırmızı seçenekleriyle listelenir.
              KV-120 için kırmızı belirtilir. DC-100 renklerini ve bütün
              modellerin güncel stoklarını teklif aşamasında kontrol edin.
            </p>
            <p>
              Kartın kendisine yönelik farklı taşıma seçenekleri arıyorsanız{" "}
              <Link href="/promosyon-ayna-deri-kartliklar" className="font-semibold text-white underline underline-offset-4">ayna ve deri kartlıklar</Link>{" "}
              kategorisini de inceleyebilirsiniz. Kartvizitlik ile diğer
              kart taşıma ürünlerinin iç ölçü ve kapasitesini aynı kabul etmeyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Ürün Ölçüsü ile Baskı Alanını Ayırın</h2>
            <p>
              KV-120 için 62 x 96 mm ürün ölçüsü ve 50 x 7 mm lazer baskı alanı
              belirtilir. Logo ve yazılar bu dar uygulama alanına göre
              hazırlanmalıdır. Küçük yazıların ve ince çizgilerin okunabilirliğini
              gerçek baskı boyutunda kontrol edin.
            </p>
            <p>
              KV-100, KV-110 ve DC-100 için yöntem ve alan tasarıma göre
              teklif aşamasında belirlenir. Logonuzu mümkünse vektörel PDF, AI,
              EPS veya SVG olarak paylaşın; renk, konum ve boyut beklentinizi
              belirtin. Bir modelin lazer alanını diğer modele uygulamayın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Kartvizitlik Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Karşılaştırmayı aynı model, adet ve logo kapsamıyla yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, malzeme, ölçü ve renk dağılımı.</li>
              <li>Logo yöntemi, uygulama alanı ve tasarım ayrıntıları.</li>
              <li>Sipariş adedi ve güncel renk stoku.</li>
              <li>Standart ambalaj, varsa ek kutulama, sevkiyat ve KDV.</li>
            </ul>
            <p>
              KV-120 için belirtilen 1000 / 50 koli-kutu bilgisi minimum sipariş
              adedi değildir. Minimum miktarı, dahil ambalajı ve teslim süresini
              ayrıca teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Kartvizitlik Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, adedi ve renk tercihinizi belirtin.</li>
              <li>Taşınacak kartın ölçüsünü, kalınlığını ve hedef kapasiteyi paylaşın.</li>
              <li>Logo dosyanızı ve uygulama konumu beklentinizi iletin.</li>
              <li>Paketleme talebini, teslimat adresini ve etkinlik tarihini bildirin.</li>
              <li>Uygunluğu, stok durumunu, tasarım yerleşimini ve toplam bedeli teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Birlikte hediye sunumu için{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem setlerini</Link>{" "}
              veya farklı parçaları bir araya getiren{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-white underline underline-offset-4">VIP hediye setlerini</Link>{" "}
              inceleyebilirsiniz. Ayrı ürünleri ve kutu taleplerini teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Kartvizitlik İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Kartvizitlik Hakkında Sık Sorulan Sorular</h2>
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
