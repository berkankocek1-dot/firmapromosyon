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

const CATEGORY = "Geri Dönüşümlü Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-geri-donusumlu-urunler`;

const PAGE_TITLE = "Geri Dönüşümlü Promosyon Ürünleri | Logo Baskılı Modeller";
const PAGE_DESCRIPTION = "Kraft kapaklı defter, spiralli notluk ve ahşap telefon tutucuyu malzeme, ölçü ve içerikle karşılaştırın. Logo uygulaması ve toptan sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Bu kategoride hangi promosyon ürünleri bulunur?",
    "answer": "GD-100 dikişli defter, GD-110, GD-120, GD-140 ve GD-210 spiralli defter veya notluklar ile ATT-230 kayın ağacı telefon tutucu listelenir. Kağıt, kapak ve ahşap malzeme bilgilerini model bazında karşılaştırın."
  },
  {
    "question": "Kategorideki bütün ürünler tamamen geri dönüştürülmüş mü?",
    "answer": "Kategori adı bütün ürünlerin tüm parçalarının geri dönüştürülmüş olduğunu göstermez. GD-100 ve GD-120 için geri dönüşüm kağıdı belirtilir; diğer modellerde kağıt, kraft kapak veya kayın ağacı bilgileri yer alır. Geri dönüştürülmüş içerik oranı ve sertifika belirtilmediğinden bunları ayrıca teyit edin."
  },
  {
    "question": "Sayfa ile yaprak sayısı nasıl karşılaştırılır?",
    "answer": "GD-100 için 40 yaprak / 80 sayfa; GD-110 için 140 sayfa; GD-120 için 90 yaprak; GD-140 için 100 yaprak; GD-210 için 150 sayfa belirtilir. Sayfa ve yaprak ifadelerini birbirinin yerine kullanmayın. GD-210 defter sayısını yapışkanlı not kağıdı adedi olarak değerlendirmeyin."
  },
  {
    "question": "Notluklarda kalem dahil mi?",
    "answer": "GD-140 ürün bilgisinde kalem aksesuar olarak belirtilir ve standart içeriğe dahil değildir. GD-110 ve GD-210’da kalem tutucu bulunması kalemin de dahil olduğunu göstermez. Seçilen modelin kalem ve diğer aksesuar kapsamını sipariş öncesinde teyit edin."
  },
  {
    "question": "Bu ürünlere hangi logo uygulamaları yapılır?",
    "answer": "GD-100, GD-110 ve GD-210 için UV ve serigrafi; GD-120 ve GD-140 için serigrafi ve dijital baskı seçenekleri belirtilir. ATT-230 telefon tutucuda yöntem ve yer teklif aşamasında belirlenir. Baskı yüzeyini ve kullanılabilir alanı model bazında teyit edin."
  },
  {
    "question": "ATT-230 telefon standı her telefonla uyumlu mu?",
    "answer": "ATT-230 kayın ağacından, kaydırmaz tabanlı bir telefon tutucudur. Ürün bilgisinde 6,4 x 8 x 1,8 cm / 8 x 8,5 x 1,4 cm ölçüleri yer alır. Seçilen varyantı, telefon ve kılıf ölçüsüyle uyumunu sipariş öncesinde teyit edin. Şarj özelliği belirtilmez."
  },
  {
    "question": "Fiyat, minimum sipariş ve teslim süresi nasıl belirlenir?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Minimum adet ve teslim süresi model, stok, miktar ve logo onayına göre teklifte netleşir. GD-140 için verilen 40 adet koli bilgisi minimum sipariş koşulu değildir. Logo ve teslimat ihtiyacınızla güncel teklif isteyin."
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
        alt: "Geri Dönüşümlü Promosyon Ürünleri",
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
              name: "Geri Dönüşümlü Ürünler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Geri Dönüşümlü Promosyon Ürünleri",
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
            Geri Dönüşümlü Ürünler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Geri Dönüşümlü Promosyon Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Kraft kapaklı defterleri, spiralli notlukları ve ahşap telefon
            tutucuyu malzeme, ölçü ve içeriklerine göre karşılaştırın.
            Logo uygulaması ve kurumsal toplu sipariş için güncel teklif alın.
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

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-700">{list.length} ürün gösteriliyor</p>
        <Link href="/promosyon-yapiskanli-notluklar" className="text-sm font-semibold text-gray-900 hover:underline">Yapışkanlı Notlukları İncele →</Link>
      </div>

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
                loading="lazy"
                className="object-contain p-4"
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
              {p.price && (
                <div className="mt-3">
                  <div className="text-base font-bold text-gray-900">
                    {p.price.toLocaleString("tr-TR")} TL + KDV
                  </div>

                  <div className="mt-1 text-xs font-medium text-green-600">
                    Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                  </div>
                </div>
              )}
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
            <h2 className="text-2xl font-bold text-white">Malzeme ve Kullanım İhtiyacına Göre Ürün Seçimi</h2>
            <p>
              Toplantı ve eğitim notları için defter veya spiralli notluk;
              masa üzerinde telefon konumlandırmak için ahşap tutucu
              değerlendirilebilir. Karşılaştırmada kapağı, iç kağıdı,
              cildi ve varsa aksesuarları ayrı kontrol edin.
            </p>
            <p>
              Kategori adı bütün ürünlerin tüm parçalarının geri
              dönüştürülmüş olduğunu göstermez. GD-100 ve GD-120 için
              geri dönüşüm kağıdı bilgisi yer alır. Kraft kapak veya ahşap
              malzeme ifadesi tek başına geri dönüştürülmüş içerik oranı ya
              da çevre sertifikası anlamına gelmez.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Ürünleri Malzeme ve İçerikleriyle Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Kategorideki modellerin belirtilen ölçü, kağıt ve kullanım bilgileri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ölçü / biçim</th>
                    <th scope="col" className="px-4 py-3">Belirtilen malzeme ve içerik</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["GD-100", "12,5 x 20 cm; terzi dikiş", "Kraft kapak; 70 gr krem geri dönüşüm kağıdı; 40 yaprak / 80 sayfa"],
                    ["GD-110", "Spiral; kesin ölçü teyit edilir", "60 gr krem kağıt; 140 çizgili sayfa; kalem tutucu"],
                    ["GD-120", "16 x 22 cm; spiral", "Sert kraft kapak; 70 gr krem geri dönüşüm kağıdı; 90 yaprak"],
                    ["GD-140", "16,5 x 21,5 cm; spiral", "Sert kraft kapak; 70 gr krem kağıt; 100 yaprak"],
                    ["GD-210", "11,5 x 15 cm; spiral", "Kraft kapak; 70 gr krem kağıt; 150 çizgili sayfa; yapışkanlı notluk ve kalem tutucu"],
                    ["ATT-230", "6,4 x 8 x 1,8 cm / 8 x 8,5 x 1,4 cm", "Kayın ağacı telefon tutucu; kaydırmaz taban; varyant teyit edilir"],
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
            <h2 className="text-2xl font-bold text-white">Kağıt, Kapak ve Belge Taleplerini Ayırın</h2>
            <p>
              Geri dönüşüm bilgisi hangi parçaya aitse o kapsamda
              değerlendirilmelidir. GD-100 ve GD-120 için belirtilen kağıt
              bilgisini kapağa, spirale veya ürünün bütününe yaymayın.
              Malzeme oranı veya sertifika talebiniz varsa ürün koduyla
              birlikte paylaşarak mevcut belge ve kapsamı teyit edin.
            </p>
            <p>
              Kağıt gramajı ile sayfa veya yaprak sayısı farklı bilgilerdir.
              GD-100 için 40 yaprak / 80 sayfa belirtilirken GD-110 için
              140 sayfa, GD-140 için 100 yaprak verilir. İç düzeni ve
              kağıt tercihini sipariş öncesinde netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Ölçü ve Teslim İçeriğinde Kontrol Noktaları</h2>
            <p>
              GD-110 kaynak bilgisinde 11,5 x 16,5 cm ve 11,5 x 16 cm
              ifadeleri yer aldığından kesin ölçüyü teklif aşamasında
              teyit edin. GD-210’un 150 çizgili sayfasını yapışkanlı
              not kağıdı adedi olarak değerlendirmeyin; not bölümlerinin
              ölçü ve adetlerini ayrıca kontrol edin.
            </p>
            <p>
              GD-140 modelinde kalem aksesuardır ve standart içeriğe
              dahil değildir. GD-110 ve GD-210’da kalem tutucu bulunması
              kalemin dahil olduğunu göstermez. Ek kalem ve ambalaj
              taleplerinizi teklifte ayrıca belirtin.
            </p>
            <p>
              ATT-230 kayın ağacından, kaydırmaz tabanlı telefon tutucudur.
              Kaynakta verilen iki ölçünün hangi varyanta ait olduğunu,
              telefon ve kılıfla uyumunu teyit edin. Ürün için şarj
              özelliği belirtilmez.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kraft Kapak ve Ahşap Yüzeyde Logo Uygulaması</h2>
            <p>
              GD-100, GD-110 ve GD-210 için UV ve serigrafi;
              GD-120 ve GD-140 için serigrafi ve dijital baskı
              seçenekleri belirtilir. ATT-230 için yöntem ve yer
              teklif aşamasında belirlenir. Bir modele ait tekniği
              bütün ürünlere uygulamayın.
            </p>
            <p>
              Kapak, iç kağıt veya ahşap gövde için uygulama talebini
              ayrı belirtin. Ürün ölçüsünü baskı alanı kabul etmeyin.
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak
              paylaşın; renkleri ve gerçek ölçüde okunabilirliği teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Fiyat ve Toplu Sipariş Kapsamı</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir;
              KDV ayrıca belirtilir. Fiyatı bulunmayan modeller için
              güncel teklif isteyin. Karşılaştırmayı aynı model, adet
              ve logo kapsamıyla yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, ölçü, kağıt, kapak ve cilt bilgisi.</li>
              <li>Malzeme veya belge talebi ve doğrulanabilen kapsam.</li>
              <li>Logo yöntemi, uygulama yüzeyi ve renkler.</li>
              <li>Ek kalem, ambalaj, sevkiyat ve KDV.</li>
            </ul>
            <p>
              GD-140 için verilen 40 adet koli bilgisi minimum sipariş
              koşulu değildir. Minimum adet ve teslim süresi stok,
              miktar ve tasarım onayına göre netleştirilir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Sipariş İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, adedi ve varsa varyant veya renk tercihini belirtin.</li>
              <li>Ölçü, kağıt düzeni, aksesuar ve malzeme beklentinizi teyit edin.</li>
              <li>Logo dosyanızı, uygulanacak yüzeyi ve renkleri paylaşın.</li>
              <li>Paketleme talebini, teslimat adresini ve ihtiyaç tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Diğer not alma seçenekleri için{" "}
              <Link href="/promosyon-yapiskanli-notluklar" className="font-semibold text-white underline underline-offset-4">yapışkanlı notlukları</Link>{" "}
              ve{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">tarihsiz defterleri</Link>{" "}
              karşılaştırabilirsiniz. Ek yazım ürünü için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem modellerini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Kurumsal Sipariş İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Geri Dönüşümlü Ürünler Hakkında Sık Sorulan Sorular</h2>
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
