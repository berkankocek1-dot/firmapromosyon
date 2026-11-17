import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
    <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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

      <section className="rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-black hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">
            Promosyon Kartvizitlik
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Kartvizitlik
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Kartvizitlik ve kart taşıma modellerini ölçü, malzeme, renk ve
            logo uygulamasına göre karşılaştırın. Toplantı, müşteri ziyareti
            ve kurumsal hediye siparişleri için güncel teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-kartvizitlik-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-deri-cuzdan-dc-100-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>



      <FpCategoryCatalog anchorId="promosyon-kartvizitlik-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Güncel teklif için iletişime geçin."}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Kartvizitlik Nasıl Seçilir?</h2>
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
            <h2 className="text-2xl font-bold text-black">Kartvizitlik Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Kartvizitliklerin belirtilen ölçü, malzeme ve logo uygulama bilgileri</caption>
                <thead className="bg-white text-black">
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
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{features}</td>
                      <td className="px-4 py-4">{printing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Malzeme ve Renk Seçenekleri</h2>
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
              <Link href="/promosyon-ayna-deri-kartliklar" className="font-semibold text-black underline underline-offset-4">ayna ve deri kartlıklar</Link>{" "}
              kategorisini de inceleyebilirsiniz. Kartvizitlik ile diğer
              kart taşıma ürünlerinin iç ölçü ve kapasitesini aynı kabul etmeyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Ürün Ölçüsü ile Baskı Alanını Ayırın</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Kartvizitlik Fiyatlarını Karşılaştırırken</h2>
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
            <h2 className="text-2xl font-bold text-black">Toplu Kartvizitlik Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, adedi ve renk tercihinizi belirtin.</li>
              <li>Taşınacak kartın ölçüsünü, kalınlığını ve hedef kapasiteyi paylaşın.</li>
              <li>Logo dosyanızı ve uygulama konumu beklentinizi iletin.</li>
              <li>Paketleme talebini, teslimat adresini ve etkinlik tarihini bildirin.</li>
              <li>Uygunluğu, stok durumunu, tasarım yerleşimini ve toplam bedeli teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Birlikte hediye sunumu için{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-black underline underline-offset-4">kalem setlerini</Link>{" "}
              veya farklı parçaları bir araya getiren{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-black underline underline-offset-4">VIP hediye setlerini</Link>{" "}
              inceleyebilirsiniz. Ayrı ürünleri ve kutu taleplerini teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Kartvizitlik İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Kartvizitlik Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-black">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <section aria-labelledby="kartvizitlik-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="kartvizitlik-rehberi-baslik" className="text-xl font-bold !text-black">Kart Uyumunu ve Logo Yerleşimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Kartvizit sunumu ile kart taşıma ihtiyacını ayırın; iç uyumu, kapak kullanımını, malzeme bilgisini ve baskı alanını değerlendirin.</p>
        <Link href="/rehber/promosyon-kartvizitlik-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-kartvizitlik-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Kartvizitlik Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Kartvizitlikleri kart uyumu, kapak, malzeme ve logo alanıyla değerlendirin. Dış ölçü ile iç kapasiteyi ayırın, kurumsal hediye uygulamasını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
