import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import ImalatProductGrid from "./ImalatProductGrid";
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

const CATEGORY = "İmalat Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-imalat-urunler`;

const PAGE_TITLE = "Promosyon İmalat Ürünleri | Logo Baskılı Modeller | FirmaPromosyon";
const PAGE_DESCRIPTION = "Logo baskılı açacak, mouse pad, kalemlik, şemsiye ve oto kokusu modellerini karşılaştırın. Baskı kapsamı ve toptan sipariş seçenekleri için teklif alın.";

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
        alt: "Promosyon İmalat Ürünleri",
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
    "question": "Promosyon imalat ürünleri kategorisinde hangi modeller var?",
    "answer": "Açacak, bardak altlığı, balon, frizbi, mouse pad, oto kokusu, oto kesesi, para tabağı, kalemlik, küp kağıtlık ve şemsiye modelleri bulunur. Ürünleri türlerine göre filtreleyerek karşılaştırabilirsiniz."
  },
  {
    "question": "Bütün modeller özel ölçü veya özel kalıpla üretilebilir mi?",
    "answer": "Özel üretim uygunluğu model bazında değerlendirilir. OK-750 oto kokusunda özel kesim belirtilir. Diğer modellerde farklı ölçü, kalıp veya renk talebinin uygulanabilirliği ve üretim adedi teklif aşamasında netleştirilir."
  },
  {
    "question": "Logo baskısı bütün ürünlerde fiyata dahil mi?",
    "answer": "Baskı kapsamı modele ve sipariş adedine göre değişir. OK-750 oto kokusunda ofset baskı liste fiyatına dahildir. MP-600 ve MP-650 mouse pad fiyatları 1.000 adet için baskı dahildir; 500 adet ve diğer miktarlar için ayrıca teklif alınır. Diğer modellerin baskı kapsamı teklif üzerinden kontrol edilir."
  },
  {
    "question": "Minimum sipariş adedi kaçtır?",
    "answer": "AÇ-100 ve AÇ-110 açacaklarda 100 adet; BA-650 bardak altlığı, MP-600 ve MP-650 mouse pad modellerinde 500 adet; OK-750 oto kokusu ve BL-600 balonda 1.000 adet minimum sipariş belirtilir. Diğer ürünlerin minimum adedi ayrıca netleştirilir. Koli adedi minimum sipariş anlamına gelmez."
  },
  {
    "question": "Hangi baskı teknikleri uygulanabilir?",
    "answer": "AÇ-100 ve AÇ-110 için UV; mouse pad ve BA-650 için ofset veya dijital; BL-600 için tek renk serigrafi belirtilir. FRZ-160 frizbide tek renk serigrafi veya renkli ofset, ŞM-150 şemsiyede serigrafi, tampon ve DTF seçenekleri bulunur. Yöntem ve uygulama alanı seçilen modele göre belirlenir."
  },
  {
    "question": "Kağıtlık ve balon siparişlerinde aksesuarlar dahil mi?",
    "answer": "PÜ-140 ve PÜ-150 küp kağıtlıkların fiyatına iç kağıt dahil değildir. Bu modellerin belirtilen kapasitesi 450 yaprak, 80 gr 1. hamur kağıttır. BL-600 balonda çubuk fiyata dahil değildir; talep edilirse ayrıca hesaplanır."
  },
  {
    "question": "Toptan sipariş teklifi ve teslim planı için hangi bilgiler gerekir?",
    "answer": "Ürün kodu, adet, istenen renk, logo dosyası, baskı rengi ve konumu ile teslim yeri ve ihtiyaç tarihini paylaşabilirsiniz. Ürün, baskı, aksesuar, KDV ve teslim kapsamı teklif aşamasında netleştirilir; teslim süresi stok ve üretim planına göre belirlenir."
  }
];

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
              name: "Promosyon İmalat Ürünleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon İmalat Ürünleri",
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
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
            Promosyon İmalat Ürünleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon İmalat Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Açacak, mouse pad, masaüstü ürünleri, şemsiye ve oto promosyonlarını
            kullanım alanı ve baskı seçenekleriyle karşılaştırın. Ürün kodu,
            adet ve logo bilgilerinizi paylaşarak kurumsal sipariş teklifi alın.
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

      <ImalatProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">İmalat Promosyon Ürünleri Nasıl Seçilir?</h2>
            <p>Bu kategoride masaüstü kullanımından etkinlik dağıtımlarına kadar farklı ihtiyaçlara yönelik modeller bulunur. Önce kullanım yerini, ardından ürün ölçüsünü, logo alanını ve sipariş adedini belirleyin. Aynı kategoride yer almaları, bütün ürünlerin aynı malzemeyle veya aynı baskı yöntemiyle üretildiği anlamına gelmez.</p>
            <p>Ofis kullanımı için mouse pad, kalemlik ve kağıtlık; satış noktası için para tabağı ve bardak altlığı; etkinlik için balon ve frizbi modelleri karşılaştırılabilir. Oto kokusunda koku ve kesim, şemsiyede ise yapı ve açma mekanizması seçim kriterleri arasındadır.</p>
            <div className="overflow-x-auto rounded-2xl border border-white/15">
              <table className="min-w-[680px] w-full text-left text-sm leading-6">
                <caption className="sr-only">İmalat promosyon modellerinin ölçü, özellik ve sipariş kapsamı karşılaştırması</caption>
                <thead className="bg-white/10 text-white"><tr>
                  <th scope="col" className="p-4">Model / grup</th>
                  <th scope="col" className="p-4">Ölçü ve özellik</th>
                  <th scope="col" className="p-4">Baskı ve sipariş kapsamı</th>
                </tr></thead>
                <tbody className="divide-y divide-white/10">
                  <tr><th scope="row" className="p-4 font-semibold text-white">AÇ-100 / AÇ-110 açacak</th><td className="p-4">7,7 × 7,7 cm / 5 × 11 cm</td><td className="p-4">UV baskı; minimum 100 adet. Baskı için tasarıma göre teklif.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">MP-600 / MP-650 mouse pad</th><td className="p-4">18 × 22 cm; MP-650 bilek destekli</td><td className="p-4">Ofset / dijital; minimum 500 adet. Listelenen fiyat 1.000 adet için baskı dahil.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">BA-650 bardak altlığı</th><td className="p-4">8,9 × 8,9 cm</td><td className="p-4">Ofset / dijital; minimum 500 adet. Liste fiyatı 1.000 adet esasına ait; baskı kapsamı teklifte.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">OK-750 oto kokusu</th><td className="p-4">14 cm toplam ebat; özel kesim</td><td className="p-4">Ofset baskı liste fiyatına dahil; minimum 1.000 adet.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">BL-600 balon / FRZ-160 frizbi</th><td className="p-4">Balon 12 inç; frizbi çapı 23 cm, baskı alanı 14,2 cm</td><td className="p-4">Balon tek renk serigrafi, çubuk hariç; minimum 1.000 adet. Frizbi tek renk serigrafi / renkli ofset.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">PÜ-100 / PÜ-110 / PÜ-130 kalemlik</th><td className="p-4">İlk iki modelde 5 × 8 cm; yonca modelde 3,5 × 3,5 cm reklam alanı</td><td className="p-4">PÜ-130 tek renk uygulama. Diğer baskı ayrıntıları modele göre teklifte.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">PÜ-140 / PÜ-150 küp kağıtlık</th><td className="p-4">9 × 9 × 5 cm; iç kağıt 88 × 88 mm</td><td className="p-4">450 yaprak, 80 gr 1. hamur kapasitesi; kağıt fiyata dahil değil.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">PT-100 / PT-110 para tabağı</th><td className="p-4">Yuvarlak çapı 17,5 cm; kare model 17 × 20,5 cm</td><td className="p-4">Logo yöntemi ve uygulama alanı tasarım çalışmasında belirlenir.</td></tr>
                  <tr><th scope="row" className="p-4 font-semibold text-white">ŞM-100 / ŞM-150 şemsiye</th><td className="p-4">ŞM-100: 8 telli baston. ŞM-150: otomatik aç/kapa ve fener</td><td className="p-4">ŞM-150 serigrafi / tampon ve DTF seçenekli. Logo konumu ve kapsamı teklifte.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-6">Ürün ölçüsü ve baskı alanı farklı bilgilerdir. Tablodaki ölçüler model karşılaştırması içindir; uygulama boyutu logo tasarımıyla birlikte netleştirilir. OKS-170 oto kesesinin ölçü ve logo yöntemi için ayrıca bilgi alın.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Özel Üretim ve Logo Uygulaması</h2>
            <p>OK-750 oto kokusunda özel kesim ve farklı koku grupları bulunur. Kağıtlıklarda özel renk talebi üretim adediyle birlikte değerlendirilebilir. Diğer modellerde özel ölçü veya yeni kalıp talebinin uygulanabilirliği sipariş öncesinde kontrol edilir.</p>
            <p>UV, ofset, dijital, serigrafi, tampon ve DTF seçenekleri bütün modellere ortak değildir. Logo dosyası, renk sayısı, zemin rengi ve uygulama konumu seçilen ürünün baskı alanına göre planlanır. ŞM-150 için verilen açık 610 mm ve kapalı 320 mm ölçüleri baskı alanı olarak kullanılmamalıdır.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toptan Fiyat ve Sipariş Kapsamı</h2>
            <p>Fiyat karşılaştırmasını aynı adet ve aynı baskı kapsamı üzerinden yapın. Mouse pad modellerinde 1.000 adet için belirtilen baskı dahil fiyatı, 500 adet sipariş için doğrudan esas almayın. Bardak altlığında da minimum sipariş ile liste fiyatının esas alındığı adet farklıdır.</p>
            <p>Küp kağıtlıklarda iç kağıdı, balonda çubuk talebini ayrıca belirtin. Ürün bedeli, baskı, varsa aksesuarlar ve KDV nihai teklifte kontrol edilir. Koli miktarı minimum sipariş yerine kullanılmaz; teslim tarihi stok ve üretim planına göre netleştirilir.</p>
          </section>
          <section className="mt-12 max-w-4xl space-y-4 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal Siparişi Tamamlayan Modeller</h2>
            <p>Kalemlik ve kağıtlık siparişlerini <Link href="/promosyon-kalem" className="font-semibold text-white underline">logo baskılı kalemler</Link> ve <Link href="/promosyon-matbaa-urunleri" className="font-semibold text-white underline">matbaa ürünleri</Link> ile birlikte planlayabilirsiniz. Farklı masa düzenleri için <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-white underline">masaüstü ürünlerini</Link>, toplu dağıtım için <Link href="/promosyon-ham-bez-tela-canta" className="font-semibold text-white underline">ham bez ve tela çantaları</Link> inceleyebilirsiniz.</p>
          </section>
          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">İmalat Promosyon Ürünleri Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-4">{faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-200">{faq.answer}</p>
              </details>
            ))}</div>
          </section>
          <section className="mt-12 max-w-4xl rounded-2xl border border-white/15 p-6">
            <h2 className="text-xl font-bold text-white">Ürün Kodunu ve Adedi Paylaşın</h2>
            <p className="mt-3 leading-7 text-gray-200">Logo dosyası, renk, baskı konumu, teslim yeri ve ihtiyaç tarihinizle birlikte talebinizi iletin. Seçtiğiniz modellerin üretim ve baskı kapsamını içeren teklif hazırlayalım.</p>
            <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Kurumsal Teklif Al</Link>
          </section>
        </div>
      )}
    </main>
  );
}
