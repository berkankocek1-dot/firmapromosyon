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

const CATEGORY = "Yapışkanlı Notluklar";
const PAGE_URL = `${SITE_URL}/promosyon-yapiskanli-notluklar`;

const PAGE_TITLE = "Promosyon Yapışkanlı Notluk Modelleri | Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı kraft kapaklı ve spiralli yapışkanlı notlukları ölçü, kağıt ve içerikleriyle karşılaştırın. Toptan kurumsal sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Yapışkanlı notluk ile spiralli defterli notluk arasındaki fark nedir?",
    "answer": "Bazı modeller kısa hatırlatma notlarına, bazıları defter ile yapışkanlı notluğu birlikte kullanmaya yöneliktir. Örneğin GD-150 için 150 çizgili sayfa ve yapışkanlı notluk; GD-170 için 100 yaprak ve yapışkanlı notluk belirtilir. İç defter sayısını yapışkanlı not kağıdı adedi olarak değerlendirmeyin."
  },
  {
    "question": "Notluklarla birlikte kalem veriliyor mu?",
    "answer": "GD-130, GD-160, GD-180 ve GD-200 ürün bilgilerinde kalem aksesuar olarak belirtilir ve standart içeriğe dahil değildir. Kalem tutucu bulunması da kalemin dahil olduğu anlamına gelmez. Diğer modellerin teslim kapsamını ayrıca teyit edin."
  },
  {
    "question": "Notluk sayfa ve yaprak sayıları nasıl karşılaştırılır?",
    "answer": "GD-150 için 150 sayfa, GD-170 için 100 yaprak, GD-180 için 120 sayfa belirtilir. GD-220 kağıt bilgisi 80 gr, 250’li; GD-240 için 80 gr, 25’li olarak verilir. Sayfa, yaprak ve ayrı not bloklarının adetlerini aynı kabul etmeyin; hangi bölüme ait olduklarını sipariş öncesinde teyit edin."
  },
  {
    "question": "Notluklara hangi logo baskıları yapılır?",
    "answer": "GD-130, GD-160, GD-220 ve GD-240 için serigrafi ve dijital; GD-150, GD-170 ve GD-200 için UV ve serigrafi; GD-180 için serigrafi belirtilir. GD-190 ve GD-250 yöntem ve yeri teklifle netleşir. Kapak, iç kağıt ve varsa ek parçaların baskı kapsamını ayrı belirtin."
  },
  {
    "question": "Kraft kapak bütün ürünün geri dönüşümlü olduğunu gösterir mi?",
    "answer": "Kraft kapak ifadesi tek başına bütün ürünün geri dönüşümlü olduğunu veya bir çevre sertifikası taşıdığını göstermez. GD-190 ve GD-250 geri dönüşümlü notluk olarak; GD-170 kağıdı geri dönüşüm kağıdı olarak belirtilir. Belirli bir malzeme veya belge talebiniz varsa model bazında teyit edin."
  },
  {
    "question": "Yapışkanlı notluk fiyatına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Model, logo alanı, yöntem, adet ve varsa ek kalem veya paketlemeye göre güncel teklif isteyin. Fiyatı bulunmayan modeller için teklif alın."
  },
  {
    "question": "Toplu yapışkanlı notluk siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi seçilen model, renk stoku, miktar ve logo onayına göre teklif aşamasında netleştirilir. GD-130 için belirtilen 40 adet koli bilgisi minimum sipariş koşulu değildir. Ürün kodu, adet, logo, teslimat adresi ve etkinlik tarihinizi paylaşın."
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
        alt: "Promosyon Yapışkanlı Notluk Modelleri",
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
              name: "Promosyon Yapışkanlı Notluklar",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Yapışkanlı Notluklar",
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
            Promosyon Yapışkanlı Notluklar
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Yapışkanlı Notluklar
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Kraft kapaklı, spiralli ve defterle birlikte sunulan yapışkanlı
            notlukları ölçü ve içeriklerine göre karşılaştırın. Logo
            uygulaması ve kurumsal toplu sipariş için güncel teklif alın.
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
        <Link href="/promosyon-geri-donusumlu-urunler" className="text-sm font-semibold text-gray-900 hover:underline">Geri Dönüşümlü Ürünleri İncele →</Link>
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
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Yapışkanlı Notluk Nasıl Seçilir?</h2>
            <p>
              Kısa hatırlatma notları, dosya işaretleme veya toplantı notlarını
              bir arada tutmak için farklı notluk düzenleri seçilebilir.
              Model karşılaştırmasında dış ölçü, iç defter, yapışkanlı not
              bölümleri ve varsa kalem tutucuyu ayrı kontrol edin.
            </p>
            <p>
              Ürün ölçüsü not kağıdının veya logo alanının ölçüsü değildir.
              Defter sayfası ile yapışkanlı not adedini de aynı kapsamda
              değerlendirmeyin. İhtiyacınız olan bölüm ve kağıt miktarını
              ürün koduyla birlikte teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Yapışkanlı Notluk Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Notlukların belirtilen dış ölçüleri ve kağıt veya içerik bilgileri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ürün ölçüsü</th>
                    <th scope="col" className="px-4 py-3">Belirtilen içerik / özellik</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["GD-130", "17,5 x 12 x 1,5 cm", "Sert kraft kapak; 70’li not kağıdı"],
                    ["GD-150", "10 x 15 cm", "Spiral; 150 çizgili sayfa; 70 gr krem kağıt; yapışkanlı notluk"],
                    ["GD-160", "8,5 x 14 cm", "Spiral; kraft kapak; 70 gr çizgili kağıt; 70’li not kağıdı"],
                    ["GD-170", "12,5 x 20,5 cm", "Spiral; 100 yaprak 80 gr ivory geri dönüşüm kağıdı; yapışkanlı notluk"],
                    ["GD-180", "10,5 x 14,7 cm", "Kraft kapak; 120 çizgili sayfa; 70 gr krem kağıt"],
                    ["GD-190", "9 x 14 cm", "Geri dönüşümlü notluk; renkli yapışkanlı not kağıdı"],
                    ["GD-200", "10,7 x 14 cm", "Kraft kapak; kalem tutucu; yapışkanlı notluk"],
                    ["GD-220", "7,8 x 8 x 2,5 cm", "Sert kraft kapak; 80 gr, 250’li kağıt"],
                    ["GD-240", "5,6 x 21 cm", "Kraft kapak; 80 gr, 25’li kağıt"],
                    ["GD-250", "13 x 6,5 cm", "Geri dönüşümlü notluk"],
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
            <p className="mt-4 max-w-4xl text-sm leading-6 text-gray-200">
              Sayfa, yaprak ve not kağıdı ifadeleri ürünlerde farklı
              kullanılır. Verilen adedin hangi bloğa ait olduğunu ve
              yapışkanlı bölümlerin ayrı adetlerini sipariş öncesinde teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Defterli Modeller ve Kalem Kapsamı</h2>
            <p>
              GD-150 ve GD-170, defterle yapışkanlı notluğu birlikte sunar.
              GD-160 spiralli ve çizgili not defteri olarak listelenir.
              Daha uzun toplantı notları için iç defter düzenini; kısa
              hatırlatmalar için yapışkanlı not bölümlerini karşılaştırın.
            </p>
            <p>
              GD-130, GD-160, GD-180 ve GD-200 ürün bilgilerinde kalem
              aksesuardır ve standart içeriğe dahil değildir. GD-200’de
              kalem tutucu bulunması kalemin dahil olduğunu göstermez.
              Diğer modellerde de görseldeki kalem ve ek parçaların kapsamını teyit edin.
            </p>
            <p>
              Ayrı kalem siparişi için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem modellerini</Link>,{" "}
              daha geniş not alma seçenekleri için{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">tarihsiz defterleri</Link>{" "}
              inceleyebilirsiniz. Ek ürünleri teklif kapsamına ayrıca ekletin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kraft Kapak ve Geri Dönüşümlü Ürün Bilgisi</h2>
            <p>
              Kraft kapak, tek başına ürünün tamamının geri dönüşümlü olduğunu
              veya belirli bir çevre sertifikası taşıdığını göstermez.
              GD-190 ve GD-250 geri dönüşümlü notluk olarak belirtilir;
              GD-170 için geri dönüşüm kağıdı bilgisi yer alır.
            </p>
            <p>
              Malzeme oranı, sertifika veya belirli bir tedarik şartı
              arıyorsanız talebinizi model koduyla paylaşın. Renk,
              kapak ve kağıt seçeneklerini ayrı ayrı teyit edin.
              Diğer seçenekler için{" "}
              <Link href="/promosyon-geri-donusumlu-urunler" className="font-semibold text-white underline underline-offset-4">geri dönüşümlü ürünler</Link>{" "}
              kategorisini de karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Notluklara Logo Baskısı</h2>
            <p>
              GD-130, GD-160, GD-220 ve GD-240 için serigrafi ve dijital;
              GD-150, GD-170 ve GD-200 için UV ve serigrafi;
              GD-180 için serigrafi belirtilir. GD-190 ve GD-250’de
              yöntem ve yer teklif aşamasında netleştirilir.
            </p>
            <p>
              Kapak baskısı ile iç not kağıtlarına baskı farklı taleplerdir.
              Logo uygulanacak yüzeyi, alanı, renkleri ve varsa ek yazıları
              belirtin. Ürünün dış ölçüsünü logo alanı olarak kullanmayın.
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
            </p>
            <p>
              Tasarımda kapağın açılışını, spiral veya tutucu gibi parçaları
              dikkate alın. Uygulama uygunluğunu ve küçük yazıların gerçek
              boyutta okunabilirliğini sipariş öncesinde teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Yapışkanlı Notluk Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel
              teklif isteyin. Karşılaştırmayı aynı model, adet ve baskı kapsamıyla yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Dış ölçü, kapak, kağıt gramajı ve cilt.</li>
              <li>Defter sayfası veya yaprağı ile yapışkanlı not bölümlerinin kapsamı.</li>
              <li>Logo yöntemi, uygulanacak yüzey ve renkler.</li>
              <li>Ek kalem, ambalaj, sevkiyat ve KDV.</li>
            </ul>
            <p>
              GD-130 için verilen 40 adet koli bilgisi minimum sipariş
              koşulu değildir. Minimum miktar ve teslim süresi model,
              stok, adet ve tasarım onayına göre netleştirilir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Notluk Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Model kodunu, adedi ve renk tercihini paylaşın.</li>
              <li>Kağıt ve not bölümlerini, kalem ve aksesuar kapsamını teyit edin.</li>
              <li>Logo dosyanızı, uygulama yapılacak yüzeyi ve renkleri belirtin.</li>
              <li>Paketleme talebini, teslimat adresini ve etkinlik tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam tutar ve teslim süresini netleştirin.</li>
            </ol>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Yapışkanlı Notluk İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Yapışkanlı Notluklar Hakkında Sık Sorulan Sorular</h2>
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
