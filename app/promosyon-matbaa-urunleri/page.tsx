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

const CATEGORY = "Matbaa Ürünleri";
const PAGE_URL = `${SITE_URL}/promosyon-matbaa-urunleri`;

const PAGE_TITLE = "Promosyon Matbaa Ürünleri | Baskılı Bloknot, Defter ve Dosya";
const PAGE_DESCRIPTION = "Küp bloknot, tutkallı ve spiralli bloknot, defter ve cepli dosyaları karşılaştırın. Kağıt, cilt ve kurumsal baskı seçenekleriyle toplu sipariş teklifi alın.";
const faqItems = [
  {
    "question": "Matbaa ürünleri kategorisinde hangi modeller bulunur?",
    "answer": "MTB-100–MTB-130 küp bloknotlar, MTB-140 dik bloknot, MTB-150–MTB-180 farklı ciltli bloknotlar, MTB-190 ve MTB-200 spiralli defterler ile MTB-210 cepli dosya listelenir. Kullanım ihtiyacınıza göre masaüstü notluk, toplantı bloknotu veya evrak sunum dosyası seçebilirsiniz."
  },
  {
    "question": "Küp bloknotların yaprak sayıları ve ölçüleri nedir?",
    "answer": "MTB-100 için 250 yaprak ve 8 x 8 x 3 cm; MTB-110 için 375 yaprak ve 8 x 8 x 4 cm; MTB-120 için 500 yaprak ve 8 x 8 x 5 cm; MTB-130 için 750 yaprak ve 8 x 8 x 8 cm belirtilir. Bu ölçüler logo baskı alanı değildir; kutu ve iç kağıt uygulamalarını ayrı teyit edin."
  },
  {
    "question": "Tutkallı, taç kapaklı ve spiralli bloknot arasındaki fark nedir?",
    "answer": "MTB-150 üstten tutkallı; MTB-160 üstten perforajlı taç kapaklı; MTB-170 taç ve yandan kapaklı, üstten perforajlı; MTB-180 üstten spiralli olarak listelenir. Dört model de 14 x 21 cm ve 50 yaprak bilgisini taşır. Kullanım biçimini ve kapak kapsamını ayrı karşılaştırın."
  },
  {
    "question": "MTB-140 dik bloknotun kesin ölçüsü nedir?",
    "answer": "Kaynakta dış kutu 9 x 13 cm, iç sayfa 8,8 x 14 cm olarak belirtilir ve iki bilgi için de teyit notu bulunur. İç sayfa ile kutu yerleşimi net olmadığından bu ölçüler kesin kabul edilmemelidir. Sipariş öncesinde güncel üretim ölçülerini ve tasarım şablonunu teyit edin."
  },
  {
    "question": "Cepli dosya hangi kağıttan üretilir?",
    "answer": "MTB-210 için 350 gr mat kuşe veya 300–350 gr Amerikan Bristol seçenekleri belirtilir. Kesin ebat, cep yerleşimi, taşınacak belgeyle uyum, kaplama ve baskı yöntemi teklif aşamasında netleştirilir. Dosyanın belgeleri veya katalogları da içerdiğini varsaymayın."
  },
  {
    "question": "Matbaa ürünlerinde kapak ve iç kağıt baskısı aynı kapsamda mı?",
    "answer": "Kapak, dış kutu, iç kağıt ve dosya yüzeyleri ayrı uygulama alanlarıdır. Logo, zemin tasarımı, tek veya çift yön baskı, renk ve selefon kapsamını teklifte ayrı belirtin. Yöntem ve kullanılabilir alan seçilen model ile tasarıma göre sipariş öncesinde netleştirilir."
  },
  {
    "question": "Matbaa siparişinde fiyat, minimum adet ve teslim süresi nasıl belirlenir?",
    "answer": "Ürün kodu, miktar, kağıt ve kapak seçimi, baskı yönü, renk, cilt ve varsa selefon talepleriyle güncel teklif isteyin. Baskının dahil olduğu yüzeyleri, paketlemeyi, sevkiyatı ve KDV durumunu toplam teklifte kontrol edin. Minimum adet ve teslim süresi üretim kapsamı ile tasarım onayına göre netleştirilir."
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
        alt: "Promosyon Matbaa Ürünleri",
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
              name: "Promosyon Matbaa Ürünleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Matbaa Ürünleri",
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
            Promosyon Matbaa Ürünleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Matbaa Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Küp bloknot, tutkallı ve spiralli bloknot, defter ve cepli
            dosyaları ölçü, kağıt ve cilt özellikleriyle karşılaştırın.
            Kurumsal tasarımınıza uygun toplu baskı siparişi için teklif alın.
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
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal Matbaa Ürünü Nasıl Seçilir?</h2>
            <p>
              Masaüstünde kısa notlar için küp bloknot, toplantı ve eğitim
              notları için tutkallı veya spiralli bloknot, evrak sunumu
              için cepli dosya değerlendirilebilir. Kullanım amacını
              belirledikten sonra kağıt, ölçü, yaprak sayısı ve cilt
              seçeneklerini karşılaştırın.
            </p>
            <p>
              Kapak, dış kutu ve iç kağıt aynı malzeme veya baskı kapsamı
              değildir. Teklifte her yüzey için tasarımı, baskı yönünü
              ve varsa selefon talebini ayrı belirtin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Matbaa Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Matbaa ürünlerinin belirtilen ölçü, yaprak ve kapak veya cilt bilgileri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ölçü / yaprak</th>
                    <th scope="col" className="px-4 py-3">Kapak, kutu veya cilt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["MTB-100", "8 x 8 x 3 cm; 250 yaprak", "350 gr Amerikan Bristol dış kutu"],
                    ["MTB-110", "8 x 8 x 4 cm; 375 yaprak", "300 gr Amerikan Bristol dış kutu"],
                    ["MTB-120", "8 x 8 x 5 cm; 500 yaprak", "350 gr Amerikan Bristol dış kutu"],
                    ["MTB-130", "8 x 8 x 8 cm; 750 yaprak", "350 gr Amerikan Bristol dış kutu"],
                    ["MTB-140", "100 yaprak; kutu ve iç ölçü teyit edilir", "Dik bloknot; 350 gr Amerikan Bristol kutu"],
                    ["MTB-150", "14 x 21 cm; 50 yaprak", "Üstten tutkallı; karton alt destek"],
                    ["MTB-160", "14 x 21 cm; 50 yaprak", "350 gr mat kuşe taç kapak; üstten perforajlı"],
                    ["MTB-170", "14 x 21 cm; 50 yaprak", "350 gr mat kuşe taç ve yandan kapak; üstten perforajlı"],
                    ["MTB-180", "14 x 21 cm; 50 yaprak", "350 gr Amerikan Bristol kapak; üstten spiral"],
                    ["MTB-190", "15 x 21 cm; 100 yaprak", "2 mm mukavva ve kuşe kaplama; spiral"],
                    ["MTB-200", "15 x 21 cm; 80 yaprak", "300 gr Amerikan Bristol kapak; spiral"],
                    ["MTB-210", "Ebat ve cep yerleşimi teyit edilir", "350 gr mat kuşe veya 300–350 gr Amerikan Bristol cepli dosya"],
                  ].map(([model, size, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{size}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Küp ve Dik Bloknotlarda Ölçü ve Kağıt</h2>
            <p>
              MTB-100–MTB-130 küp bloknotlarda 80 gr 1. hamur iç kağıt
              belirtilir. Yaprak miktarı ve yükseklik farklıdır. MTB-110
              dış kutusu 300 gr, diğer üç model 350 gr Amerikan Bristol
              olarak listelenir. Kutu ve iç kağıt baskısını ayrı değerlendirin.
            </p>
            <p>
              MTB-140 dik bloknot için 100 yaprak ve 120 gr 1. hamur iç
              kağıt belirtilir. Kaynakta dış kutu 9 x 13 cm, iç sayfa
              8,8 x 14 cm olarak verilir ve teyit notu bulunur. Bu
              ölçülerle kesin tasarım hazırlamadan önce güncel üretim
              ölçülerini ve yerleşim şablonunu isteyin.
            </p>
            <p>
              Bu bloknotların yapışkanlı not kağıdı içerdiğini varsaymayın.
              Yapışkanlı bölüm arıyorsanız{" "}
              <Link href="/promosyon-yapiskanli-notluklar" className="font-semibold text-white underline underline-offset-4">yapışkanlı notluk modellerini</Link>{" "}
              ayrıca karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Tutkal, Perforaj ve Spiral Cilt Farkı</h2>
            <p>
              MTB-150 üstten tutkallı, MTB-160 ve MTB-170 üstten
              perforajlı, MTB-180 üstten spiralli olarak belirtilir.
              Bu modeller 14 x 21 cm ve 50 yaprak bilgisiyle sunulur.
              Kesin bitmiş ölçüyü üretim şablonuyla teyit edin;
              katalogdaki A5 ifadesini tek başına tasarım ölçüsü olarak kullanmayın.
            </p>
            <p>
              MTB-190, 2 mm mukavva üzerine kuşe kaplamalı taslama kapak
              ve 100 yaprak; MTB-200, 300 gr Amerikan Bristol kapak ve
              80 yaprakla listelenir. İkisi de 15 x 21 cm, spiralli ve
              80 gr 1. hamur iç kağıtlıdır. Sayfa düzeni ile tek veya
              çift yön baskı kapsamını ayrıca netleştirin.
            </p>
            <p>
              Farklı kapak ve iç düzen seçenekleri için{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">tarihsiz defterleri</Link>{" "}
              de inceleyebilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Cepli Dosyada Kağıt ve Belge Uyumu</h2>
            <p>
              MTB-210 için 350 gr mat kuşe veya 300–350 gr Amerikan
              Bristol seçenekleri belirtilir. Ebat, cep yerleşimi ve
              kaplama tercihi teklif aşamasında teyit edilir.
              Sunulacak belgelerin ölçüsünü ve kalınlığını paylaşın.
            </p>
            <p>
              Dosyanın belge, katalog veya broşür içerdiğini varsaymayın.
              Dosya üretimi ile içine konulacak basılı materyallerin
              kapsamı ayrıdır. Cep ve katlama bölümlerini de tasarım
              yerleşiminde dikkate alın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal Baskı ve Tasarım Onayı</h2>
            <p>
              Baskı yöntemi ve uygulanabilir alan seçilen model ve
              tasarıma göre teklif aşamasında netleştirilir. Kapak,
              dış kutu, iç kağıt ve dosya yüzeyleri için logo, zemin
              tasarımı ve baskı yönünü ayrı belirtin.
            </p>
            <p>
              Mat veya parlak selefon seçeneklerini modele göre kontrol
              edin. MTB-210’da kaplama ayrıca teyit edilir; bütün ürün
              ve yüzeylere aynı kaplamanın dahil olduğunu kabul etmeyin.
            </p>
            <p>
              Logo ve tasarımı mümkünse vektörel PDF, AI, EPS veya SVG
              olarak paylaşın. Kesim ölçüsü, taşma payı, renk düzeni ve
              dosya gereksinimlerini üretim şablonuna göre netleştirin.
              İletişim bilgilerini, yazıları ve yerleşimi üretim öncesinde kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Matbaa Ürünlerinde Fiyat ve Toplu Sipariş</h2>
            <p>
              Bu sayfadaki ürünler için model ve baskı kapsamınıza göre
              güncel teklif isteyin. Karşılaştırmayı aynı ölçü, kağıt,
              adet, cilt ve tasarım kapsamıyla yapın. Baskı dahil
              yüzeyleri, paketlemeyi, sevkiyatı ve KDV durumunu toplam teklifte kontrol edin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ürün kodu, bitmiş ölçü ve sipariş adedi.</li>
              <li>İç kağıt, yaprak sayısı, kapak veya kutu gramajı.</li>
              <li>Baskı yüzeyleri, tek veya çift yön, renk ve tasarım.</li>
              <li>Cilt, perforaj, selefon ve varsa ek paketleme.</li>
            </ul>
            <p>
              Minimum adet ve teslim süresi üretim kapsamı ve tasarım
              onayına göre belirlenir. Etkinlik veya dağıtım tarihinizi
              teklif talebinde paylaşın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Matbaa Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, miktarı ve kullanım amacını belirtin.</li>
              <li>Ölçü, kağıt, kapak, cilt ve kaplama tercihini netleştirin.</li>
              <li>Logo ve tasarımı, baskı yüzeylerini ve yönlerini paylaşın.</li>
              <li>Üretim şablonunu, metinleri ve tasarım yerleşimini kontrol edin.</li>
              <li>Toplam teklif, paketleme ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Toplantı paketine eklemek için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem modellerini</Link>{" "}
              veya sunum ve taşıma için{" "}
              <Link href="/promosyon-karton-cantalar" className="font-semibold text-white underline underline-offset-4">karton çantaları</Link>{" "}
              da değerlendirebilirsiniz. Ek ürünleri ayrıca tekliflendirin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Matbaa Ürünleri İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Matbaa Ürünleri Hakkında Sık Sorulan Sorular</h2>
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
