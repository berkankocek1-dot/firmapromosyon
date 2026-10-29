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

const CATEGORY = "Kırtasiye Ürünleri";
const PAGE_URL = `${SITE_URL}/promosyon-kirtasiye-urunleri`;

const PAGE_TITLE = "Promosyon Kırtasiye Ürünleri | Logo Baskılı Okul ve Ofis Modelleri";
const PAGE_DESCRIPTION = "Promosyon cetvel, fosforlu kalem, sınav seti, kalemtıraş ve silgi modellerini karşılaştırın. Logo uygulaması ve toptan kırtasiye siparişi için teklif alın.";
const faqItems = [
  {
    "question": "Promosyon kırtasiye kategorisinde hangi ürünler bulunur?",
    "answer": "CT-200 cetvel, FK-550 beş renkli fosforlu kalem, KK-620 sınav seti, KT-300 ve KT-360 kalemtıraşlar ile SG-260 silgi listelenir. Tekli ürünlerle hazır sınav setinin kapsamını ayrı değerlendirin."
  },
  {
    "question": "KK-620 sınav setinin içinde neler var?",
    "answer": "Şeffaf kutuda bir siyah uçlu kurşun kalem, bir kırmızı uçlu kurşun kalem, bir kapaksız kalemtıraş ve bir silgi bulunur. Set ölçüsü 18,5 x 5 cm, içindeki silgi 30 x 20 x 10 mm olarak belirtilir. Özel bir sınavda kullanılacaksa kurumun malzeme koşullarına uygunluğunu ayrıca kontrol edin."
  },
  {
    "question": "FK-550 fosforlu kalemde hangi renkler var?",
    "answer": "FK-550 tek gövdede sarı, yeşil, mavi, pembe ve turuncu olmak üzere beş renk sunar. Her renk için ayrı koruyucu kapak belirtilir. Merkezi beyaz yüzeyde logo uygulaması için yöntem ve alan teklif aşamasında teyit edilir."
  },
  {
    "question": "KT-300 ile KT-360 kalemtıraş arasındaki fark nedir?",
    "answer": "KT-300 için 3 cm çap; KT-360 için 2,5 x 1,5 x 1 cm ölçü belirtilir. İkisi de plastik gövdeli, metal bıçaklı ve tek deliklidir. Renkleri farklıdır; kullanılacak kalemle uyumu ve logo uygulamasının uygunluğu sipariş öncesinde teyit edilir."
  },
  {
    "question": "Kırtasiye ürünlerine hangi logo baskıları yapılır?",
    "answer": "CT-200, FK-550, KK-620 ve SG-260 için yöntem, uygulama alanı ve bedel ürün yüzeyi ile tasarıma göre teklif aşamasında belirlenir. Kalemtıraşlarda baskı uygunluğu ayrıca teyit edilmelidir. Set kutusu ile içindeki parçaların baskı kapsamını ayrı belirtin."
  },
  {
    "question": "Kırtasiye ürün fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Model, adet, logo uygulanacak parça ve varsa ek paketleme veya set hazırlama kapsamına göre güncel teklif isteyin. Fiyatı bulunmayan ürünler için teklif alın."
  },
  {
    "question": "Toplu kırtasiye siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi model, renk stoku, logo onayı ve miktara göre teklif aşamasında netleştirilir. Ürün kodlarını, her üründen istediğiniz adedi, logo dosyanızı, paketleme ve teslimat ihtiyacınızı paylaşın. Ayrı ürünlerle set oluşturma talebinin uygunluğu ayrıca teyit edilir."
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
        alt: "Promosyon Kırtasiye Ürünleri",
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
              name: "Promosyon Kırtasiye Ürünleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kırtasiye Ürünleri",
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
            Promosyon Kırtasiye Ürünleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Kırtasiye Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Cetvel, fosforlu kalem, sınav seti, kalemtıraş ve silgi modellerini
            ölçü ve içeriklerine göre karşılaştırın. Okul, eğitim ve ofis
            dağıtımları için logo uygulaması ve toplu sipariş teklifi alın.
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

      <p className="mt-8 text-sm font-medium !text-white">
        {list.length} ürün gösteriliyor
      </p>

      <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

              {p.price != null ? (
                <div className="mt-3">
                  <div className="text-base font-bold text-gray-900">
                    {p.price.toLocaleString("tr-TR")} TL + KDV
                  </div>
                  <div className="mt-1 text-xs font-medium text-green-600">
                    Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-sm font-semibold text-gray-900">
                  Güncel fiyat için teklif alın.
                </p>
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
            <h2 className="text-2xl font-bold text-white">Okul ve Ofis İçin Promosyon Kırtasiye Seçimi</h2>
            <p>
              Eğitim kampanyası, seminer veya ofis dağıtımı için önce ihtiyaç
              duyulan ürünleri belirleyin. Tekli cetvel, silgi ve kalemtıraş
              siparişi ile kutulu sınav setinin kapsamı farklıdır. Adetleri
              her ürün için ayrı planlayın; logo ve ambalajı aynı kapsamda karşılaştırın.
            </p>
            <p>
              Hazır KK-620 setini seçebilir veya ayrı ürünlerle oluşturulacak
              bir paket için teklif isteyebilirsiniz. Özel paket hazırlama,
              renk dağılımı ve ürünlerin bir araya getirilmesi sipariş
              öncesinde ayrıca değerlendirilir.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Kırtasiye Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Kırtasiye ürünlerinin belirtilen ölçüleri, içerikleri ve kontrol noktaları</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Belirtilen özellikler</th>
                    <th scope="col" className="px-4 py-3">Kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["CT-200", "15 cm ölçüm uzunluğu; beyaz plastik cetvel", "Santimetre/milimetre ölçeği ve logo yerleşimi"],
                    ["FK-550", "Tek gövdede 5 renk fosforlu kalem; ayrı kapaklar", "Merkezi beyaz yüzeyde logo alanı"],
                    ["KK-620", "18,5 x 5 cm şeffaf kutulu sınav seti", "Kalem, silgi, kalemtıraş ve parça bazında baskı kapsamı"],
                    ["KT-300", "3 cm çap; tek delikli; plastik gövde ve metal bıçak", "Kalem uyumu, renk ve baskı uygunluğu"],
                    ["KT-360", "2,5 x 1,5 x 1 cm; tek delikli; plastik gövde ve metal bıçak", "Kalem uyumu, renk ve baskı uygunluğu"],
                    ["SG-260", "50 x 25 x 10 mm beyaz silgi", "Logo yöntemi ve uygulanabilir alan"],
                  ].map(([model, features, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{features}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">KK-620 Sınav Setinin İçeriği</h2>
            <p>
              KK-620, şeffaf kutuda bir siyah uçlu kurşun kalem, bir kırmızı
              uçlu kurşun kalem, bir kapaksız kalemtıraş ve bir silgi içerir.
              Set ölçüsü 18,5 x 5 cm, içindeki silgi ölçüsü 30 x 20 x 10 mm
              olarak belirtilir.
            </p>
            <p>
              Ayrı satılan SG-260 silginin 50 x 25 x 10 mm ölçüsünü set
              içindeki silgiye uygulamayın. Özel bir sınav için sipariş
              veriyorsanız kalem türü, renk ve malzeme koşullarını sınavı
              düzenleyen kurumla kontrol edin.
            </p>
            <p>
              Daha geniş yazım ürünü seçenekleri için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">promosyon kalem modellerini</Link>{" "}
              inceleyebilirsiniz. Ek kalemleri set içeriğine dahil kabul
              etmeyin; teklif sırasında ayrıca belirtin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Renk, Ölçü ve Kullanım Farkları</h2>
            <p>
              FK-550 tek gövdede sarı, yeşil, mavi, pembe ve turuncu olmak
              üzere beş fosforlu renk sunar. Her renk için ayrı kapak ve
              logo için merkezi beyaz yüzey belirtilir. Baskı alanının
              kesin ölçüsü ile yöntemi teklif aşamasında netleştirilir.
            </p>
            <p>
              KT-300 mor, sarı, mavi, kırmızı ve yeşil; KT-360 beyaz, yeşil,
              sarı, kırmızı ve siyah seçenekleriyle listelenir. İki model
              de tek delikli ve metal bıçaklıdır. Kullanılacak kurşun
              kalemin çapıyla uyumunu ve güncel renk stoklarını kontrol edin.
            </p>
            <p>
              CT-200 için verilen 15 cm, ölçüm uzunluğudur; bunu logo alanı
              olarak değerlendirmeyin. Cetvel üzerindeki santimetre ve
              milimetre ölçeğini kapatmayacak bir logo yerleşimi planlayın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kırtasiye Ürünlerine Logo Uygulaması</h2>
            <p>
              CT-200, FK-550, KK-620 ve SG-260 için baskı yöntemi, alanı
              ve bedeli ürün yüzeyi ile tasarıma göre teklif aşamasında
              belirlenir. Kalemtıraşlarda baskı uygunluğunu ayrıca teyit edin;
              bütün ürünlerin aynı teknikle baskılı sunulacağını varsaymayın.
            </p>
            <p>
              Sınav setinde kutu ile içindeki parçaları ayrı belirtin.
              Hangi yüzeye logo uygulanacağını, renkleri ve yerleşimi
              netleştirin. Logoyu mümkünse vektörel PDF, AI, EPS veya SVG
              olarak paylaşın; küçük yazıların gerçek boyutta okunabilirliğini kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplu Kırtasiye Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Hazır set fiyatıyla tekli parça fiyatını aynı kapsamda değerlendirmeyin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, ölçü, renk ve tam set içeriği.</li>
              <li>Her ürün veya setten istenen adet.</li>
              <li>Logo uygulanacak parçalar, yöntem ve alan.</li>
              <li>Kutu, varsa paket hazırlama, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Minimum adet ve teslim süresi model, stok, tasarım onayı ve
              miktara göre netleştirilir. Etkinlik veya eğitim başlangıç
              tarihinizi teklif talebinde paylaşın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Kırtasiye Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodlarını ve her üründen istediğiniz adedi belirtin.</li>
              <li>Renk dağılımını, ölçüleri ve varsa set içeriğini teyit edin.</li>
              <li>Logo dosyasını ve uygulama yapılacak parçaları paylaşın.</li>
              <li>Paketleme talebini, teslimat adresini ve etkinlik tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Not alma ihtiyaçları için{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defterleri</Link>{" "}
              ve{" "}
              <Link href="/promosyon-yapiskanli-notluklar" className="font-semibold text-white underline underline-offset-4">yapışkanlı notlukları</Link>{" "}
              da karşılaştırabilirsiniz. Ek ürünleri teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Kırtasiye Ürünleri İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Kırtasiye Ürünleri Hakkında Sık Sorulan Sorular</h2>
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
