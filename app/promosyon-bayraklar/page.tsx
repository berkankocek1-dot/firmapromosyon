import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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

const CATEGORY = "Bayraklar";
const PAGE_URL = `${SITE_URL}/promosyon-bayraklar`;

const PAGE_TITLE = "Promosyon Bayrak Modelleri | Logo Baskılı Masa ve Flama | FirmaPromosyon";
const PAGE_DESCRIPTION = "Logo baskılı makam, masa, kırlangıç, yelken ve damla bayrak modellerini karşılaştırın. Ölçü, kesim, direk ve taban seçenekleriyle toplu sipariş teklifi alın.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
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
        alt: "Promosyon Bayrak Modelleri",
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

const faqs = [
  {
    "question": "Hangi promosyon bayrak modelleri bulunuyor?",
    "answer": "BYK-100 makam bayrağı, BYK-110 ile BYK-140 arasında tekli, ikili, üçlü ve dörtlü masa bayrakları; BYK-150 L ve BYK-200 T masa bayrakları bulunur. BYK-160, BYK-170 ve BYK-180 kırlangıç/flama; BYK-190 yelken ve BYK-210 damla bayrak seçenekleridir. BYK-145 ise standart 85 x 200 cm roll up tanıtım standıdır; komple set, yalnız baskı veya yalnız mekanizma seçenekleriyle değerlendirilir."
  },
  {
    "question": "Tekli, ikili, üçlü ve dörtlü masa bayrakları nasıl seçilir?",
    "answer": "Seçim aynı anda sergilenecek bayrak sayısına ve masa üzerinde ayrılacak alana göre yapılır. BYK-110 tek direkli, BYK-120 iki, BYK-130 üç ve BYK-140 dört direklidir. Bayrak tasarımları ve stand ölçüleri sipariş öncesinde netleştirilir."
  },
  {
    "question": "Kırlangıç bayrakların ölçüleri ve kesim seçenekleri nelerdir?",
    "answer": "BYK-160 50 × 150 cm, BYK-170 75 × 150 cm ve BYK-180 75 × 200 cm ölçüsündedir. Bu üç modelde düz, kırlangıç ve beşgen kesim seçenekleri belirtilir. Kesim formuna göre logo ve yazı yerleşimi hazırlanır."
  },
  {
    "question": "Yelken ve damla bayrak arasındaki fark nedir?",
    "answer": "BYK-190 yelken formunda, BYK-210 damla formundadır. Her iki modelde esnek fiber direk ve opsiyonel su doldurulabilir veya sabit taban seçenekleri belirtilir. Nihai ölçü, taban seçimi, paket kapsamı ve kullanım koşulları teklif aşamasında netleştirilir."
  },
  {
    "question": "Firma logosu hangi baskı yöntemiyle uygulanır?",
    "answer": "Masa, L/T masa, kırlangıç, yelken ve damla modellerinde dijital veya sublimasyon baskı seçenekleri belirtilir. BYK-100 makam bayrağında dijital veya serigraf baskı bilgisi bulunur. Kumaş, tasarım, baskı yönü ve uygulama ölçüsü seçilen model için doğrulanır."
  },
  {
    "question": "Direk, taban ve baskı fiyata dahil mi?",
    "answer": "Bütün modeller için ortak bir paket veya fiyat kapsamı belirtilmez. Özellikle yelken ve damla bayraklarda taban seçenekleri opsiyoneldir. Teklifte kumaş bayrak, baskı, direk, taban ve varsa bağlantı parçalarının ayrı ayrı dahil olup olmadığı kontrol edilir."
  },
  {
    "question": "Toplu bayrak siparişi için hangi bilgiler gerekir?",
    "answer": "Model kodu, adet, ölçü, kullanım yeri, logo veya tasarım dosyası, istenen kesim ve gerekli direk/taban bilgisini paylaşabilirsiniz. Minimum sipariş, baskı kapsamı, KDV ve teslim süresi teklif aşamasında netleştirilir. Üretim öncesinde tasarımın son hali onaylanır."
  }
];

export default function Page() {
  const list = sortProductsByCode(products.filter((p) => p.category === CATEGORY));

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
              name: "Promosyon Bayraklar",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Bayraklar",
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
          mainEntity: faqs.map((faq) => ({
            "@type": "Question", name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
          <span className="font-semibold text-black">Promosyon Bayraklar</span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Bayraklar
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Makam, masa, kırlangıç, yelken ve damla bayrak modellerini kullanım
            yerine göre karşılaştırın. Masaüstü seçeneklerinde direk sayısını,
            flama modellerinde ölçü ve kesimi belirleyerek logo baskılı siparişinizi planlayın.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Ürün kodu, adet, tasarım ve ihtiyaç duyduğunuz direk veya taban
            bilgilerini paylaşın; baskı ve paket kapsamını içeren teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-bayraklar-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <FpCategoryCatalog anchorId="promosyon-bayraklar-modelleri" showPrices={false} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:undefined}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Bayrak Modelleri Nasıl Seçilir?</h2>
            <p>Bayrak seçiminde önce yerleşim alanını belirleyin. Ofis masası ve resepsiyon için masa bayrakları, makam odası için makam bayrağı; fuar ve tanıtım alanlarında ise flama, yelken veya damla modelleri değerlendirilebilir. Ürün ölçüsü, tasarımın oranı ve kurulum biçimi birlikte planlanmalıdır.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="min-w-[680px] w-full text-left text-sm leading-6">
                <caption className="sr-only">Makam, masa ve reklam bayraklarının model ve özellik karşılaştırması</caption>
                <thead className="bg-white text-black"><tr><th scope="col" className="p-4">Model</th><th scope="col" className="p-4">Tür / ölçü</th><th scope="col" className="p-4">Seçim bilgisi</th></tr></thead>
                <tbody className="divide-y divide-white/10">
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-100</th><td className="p-4">Makam bayrağı</td><td className="p-4">Makam odası ve kurumsal ofis; ebat ve direk/taban kapsamı teklifte netleştirilir.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-110 / 120 / 130 / 140</th><td className="p-4">Tekli / ikili / üçlü / dörtlü masa bayrağı</td><td className="p-4">Sırasıyla 1, 2, 3 ve 4 direk. BYK-120, 130 ve 140 metal tabanlı; BYK-110 direk malzemesi teyit edilir.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-145</th><td className="p-4">85 × 200 cm roll up tanıtım standı</td><td className="p-4">Komple set, yalnız baskı veya yalnız mekanizma; minimum 5 adet. Malzeme ve paket kapsamı teklifte doğrulanır.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-150 / BYK-200</th><td className="p-4">L masa / T masa bayrağı</td><td className="p-4">Dikey banner / çift banner formu; metal direk ve metal taban. Nihai ölçüler teklifte.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-160</th><td className="p-4">50 × 150 cm flama</td><td className="p-4">Düz, kırlangıç veya beşgen kesim.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-170</th><td className="p-4">75 × 150 cm flama</td><td className="p-4">Düz, kırlangıç veya beşgen kesim; BYK-160 ile aynı yükseklik, daha geniş yüzey.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-180</th><td className="p-4">75 × 200 cm flama</td><td className="p-4">Düz, kırlangıç veya beşgen kesim; BYK-170 ile aynı genişlik, daha uzun yüzey.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-black">BYK-190 / BYK-210</th><td className="p-4">Yelken / damla bayrak</td><td className="p-4">Esnek fiber direk; opsiyonel su doldurulabilir veya sabit taban. Ölçü ve paket kapsamı teklifte.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-6">Flama ölçüleri kumaş bayrağın ölçüsüdür; kurulu sistemin toplam yüksekliği veya baskı şablonu olarak doğrudan kullanılmamalıdır. Direk, taban ve bağlantı ayrıntıları seçilen modele göre doğrulanır.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Masa ve Makam Bayraklarında Yerleşim</h2>
            <p>BYK-110 tek bayrak sunumu içindir. BYK-120, BYK-130 ve BYK-140 ile sırasıyla iki, üç veya dört farklı tasarım birlikte sergilenebilir. Masa üzerinde ayrılacak alanı ve tasarımların birbirini kapatmadan görülebileceği yerleşimi dikkate alın.</p>
            <p>BYK-150 dikey L banner, BYK-200 ise çift banner formundadır. Logo, slogan veya iki farklı tasarım için bu formlar değerlendirilebilir. BYK-100 makam bayrağında kumaş ölçüsü, direk ve taban kapsamı sipariş öncesinde belirlenir.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kırlangıç, Yelken ve Damla Bayrak Seçenekleri</h2>
            <p>BYK-160, BYK-170 ve BYK-180 modellerinde ölçünün yanında düz, kırlangıç veya beşgen kesim seçilir. Alt kesim biçimi değiştiğinde yazı ve logo yerleşimi de şablona göre düzenlenir; önemli tasarım öğeleri kesim ve dikiş sınırlarından uzak tutulur.</p>
            <p>BYK-190 yelken, BYK-210 damla formundadır. Her iki modelde esnek fiber direk ve opsiyonel taban seçenekleri belirtilir. Kullanılacak zemin, iç veya dış mekan, kurulum alanı ve taban seçimi birlikte değerlendirilir. Dış mekan kullanım koşulları ve sabitleme gereksinimi seçilen sistem için sipariş öncesinde doğrulanır.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Bayrak Baskısı, Fiyat ve Sipariş Kapsamı</h2>
            <p>Masa ve reklam bayraklarında dijital veya sublimasyon; BYK-100 makam bayrağında dijital veya serigraf baskı bilgisi bulunur. Nihai yöntem, kumaş ve tasarıma göre netleştirilir. Logo dosyası, renkler, baskı yönü ve arka yüz beklentisi üretim öncesinde paylaşılmalıdır.</p>
            <p>Teklifleri aynı model, ölçü, adet ve paket kapsamı üzerinden karşılaştırın. Kumaş bayrak, baskı, direk, taban, bağlantı parçaları ve KDV kapsamını kontrol edin. Minimum sipariş ve teslim süresi modele ve üretim planına göre belirlenir; özel ölçü talepleri ayrıca değerlendirilir.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Fuar ve Ofis İçin Tamamlayıcı Ürünler</h2>
            <p>Masa bayraklarını <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-black underline">masaüstü ürünleri</Link> ile birlikte değerlendirebilirsiniz. Fuar dağıtımları için <Link href="/promosyon-kalem" className="font-semibold text-black underline">logo baskılı kalemleri</Link> ve <Link href="/promosyon-ham-bez-tela-canta" className="font-semibold text-black underline">ham bez ve tela çantaları</Link>; farklı tanıtım seçenekleri için <Link href="/promosyon-imalat-urunler" className="font-semibold text-black underline">imalat promosyon ürünlerini</Link> inceleyebilirsiniz.</p>
          </section>
          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Promosyon Bayraklar Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-4">{faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-black">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
              </details>
            ))}</div>
          </section>
          <section className="mt-12 max-w-4xl rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-black">Logo Baskılı Bayrak Teklifi Alın</h2>
            <p className="mt-3 leading-7 text-gray-600">Model kodu, adet, ölçü, tasarım ve kullanım yerini paylaşın. Direk ve taban ihtiyacınızla birlikte teslim yeri ve ihtiyaç tarihinizi belirtin; sipariş kapsamını birlikte netleştirelim.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Kurumsal Teklif Al</Link>
          </section>
        </div>
      )}
      <section aria-labelledby="bayrak-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="bayrak-rehberi-baslik" className="text-xl font-bold !text-black">Bayrak Türünü, Baskı Yönünü ve Kurulum Kapsamını Seçin</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Masa, makam, flama, yelken ve damla formlarını kullanım yerine göre değerlendirin; ölçü, kesim ve direk–taban kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-bayrak-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-bayrak-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Bayrak Seçim ve Baskı Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Masa, makam, flama, yelken ve damla bayrakları kullanım yerine göre seçin. Kumaş ölçüsü, kesim, baskı yönü ile direk ve taban kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
    </div></div>
  );
}
