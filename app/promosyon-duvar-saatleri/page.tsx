import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/data/products";
import DuvarSaatiProductGrid from "./DuvarSaatiProductGrid";
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

const CATEGORY = "Duvar Saatleri";
const PAGE_URL = `${SITE_URL}/promosyon-duvar-saatleri`;

const PAGE_TITLE = "Promosyon Duvar Saati Modelleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı duvar saatlerini ölçü, kasa, kadran ve özel tasarım seçenekleriyle karşılaştırın. Toptan kurumsal sipariş için güncel teklif alın.";
const faqItems = [
  {
    "question": "Promosyon duvar saati ölçüsü nasıl seçilir?",
    "answer": "Duvar alanını, saatin izleneceği mesafeyi ve ortam ışığını birlikte değerlendirin. Örneğin DS-140 25 cm, DS-400 28 cm, DS-220 30 cm, DS-110 35 cm, DS-100 40 cm ve DS-370 46 cm olarak listelenir. Dikdörtgen veya figürlü modellerde çap yerine en-boy ölçüsünü esas alın."
  },
  {
    "question": "Metalize plastik kasa metal kasa mı?",
    "answer": "Hayır. Metalize plastik, metal görünüm verilen plastik kasadır. Örneğin DS-180, DS-250, DS-260, DS-500 ve DS-510 metalize plastik; DS-100 ve DS-110 alüminyum; DS-200, DS-210 ve DS-220 paslanmaz metal olarak belirtilir. Kasa ve kadran malzemelerini ayrı kontrol edin."
  },
  {
    "question": "Saatin kasa çapı logo baskı alanı mıdır?",
    "answer": "Hayır. Kasa ve kadran ölçüleri ayrı bilgilerdir; logo için kullanılabilir alan ayrıca belirlenir. Örneğin DS-115 için kasa çapı 370 mm, kadran çapı 308 mm olarak belirtilir. Kadran çapının tamamını logo alanı kabul etmeyin; rakamlar ve ibrelerle birlikte yerleşimi teyit edin."
  },
  {
    "question": "Duvar saatlerine hangi logo baskıları yapılır?",
    "answer": "Yöntem seçilen kadran ve tasarıma bağlıdır. DS-170 ve DS-340 için ofset ve dijital; DS-250 için UV ve serigrafi seçenekleri belirtilir. Diğer modellerin yöntemini, uygulanabilir alanını ve tasarım kapsamını teklif aşamasında teyit edin."
  },
  {
    "question": "Akar saniyeli saatler tamamen sessiz mi ve pil dahil mi?",
    "answer": "Akar saniye mekanizma bilgisi tek başına tam sessizlik garantisi değildir. Ses beklentinizi model koduyla paylaşın. Pil türü, pilin teslim kapsamına dahil olup olmadığı ve varsa montaj aksesuarları sipariş öncesinde ayrıca teyit edilir."
  },
  {
    "question": "Promosyon duvar saati fiyatına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Kasa ve kadran, ölçü, logo uygulaması, adet, ambalaj ve sevkiyat kapsamına göre güncel toplam teklif isteyin. Fiyatı bulunmayan modeller için teklif alın."
  },
  {
    "question": "Toplu duvar saati siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi model, kasa rengi, stok, tasarım onayı ve sipariş miktarına göre teklif aşamasında belirlenir. Koli adetlerini minimum sipariş olarak değerlendirmeyin. Ürün kodunu, adedi, logo dosyanızı ve teslimat ihtiyacınızı paylaşın."
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
        alt: "Promosyon Duvar Saatleri",
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
              name: "Promosyon Duvar Saatleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Duvar Saatleri",
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
            Promosyon Duvar Saatleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Duvar Saatleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Duvar saatlerini ölçü, kasa malzemesi, kadran ve özel tasarım
            seçenekleriyle karşılaştırın. Ofis, mağaza ve bayi hediyesi
            siparişleriniz için logo uygulaması ve toplam teklifi netleştirin.
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

      <DuvarSaatiProductGrid products={list} />
      {list.length === 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Bu kategoride henüz ürün bulunmuyor.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Duvar Saati Nasıl Seçilir?</h2>
            <p>
              Ofis, mağaza, showroom veya bayi hediyesi için saat seçerken
              kullanılacak duvarın alanını, izleme mesafesini ve ortam ışığını
              değerlendirin. Kasa ölçüsü, kadran rengi ve logo yerleşimi
              birlikte planlanmalıdır. Çok sayıda yazı eklemek yerine saatin
              okunabilirliğini koruyan bir tasarım hazırlayın.
            </p>
            <p>
              Modeller 25, 28, 30, 35, 37, 38, 40 cm ve daha büyük ölçülerde
              seçenekler sunar. Yuvarlak saatte çapı, dikdörtgen ve figürlü
              saatte en-boy ölçüsünü esas alın. Üstteki filtrelerle listeyi
              daraltıp kesin ölçü ve malzemeyi ürün açıklamasından kontrol edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Duvar Saati Modellerinden Örnekler</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Seçili duvar saatlerinin belirtilen ölçü, kasa ve kadran farkları</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ölçü</th>
                    <th scope="col" className="px-4 py-3">Belirtilen özellikler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["DS-140", "25 cm çap", "Alüminyum kasa, Bristol kadran"],
                    ["DS-220", "30 cm çap", "Paslanmaz metal kasa, Bristol kadran"],
                    ["DS-110", "35 cm çap", "Alüminyum kasa, Bristol kadran"],
                    ["DS-115", "37 cm kasa; 308 mm kadran", "ABS kasa, Bristol kadran"],
                    ["DS-100", "40 cm çap", "Alüminyum kasa, Bristol kadran"],
                    ["DS-250", "40 cm çap", "Metalize plastik çerçeve, Bristol–varak kadran"],
                    ["DS-370", "46 cm çap", "Plastik kasa, metal kadran"],
                    ["DS-320", "25,3 x 47 cm", "Dikdörtgen form, bombe mineral cam"],
                    ["DS-470 / DS-490", "42,5 x 30,5 cm", "Ay-yıldız / yıldız figürlü; plastik kasa"],
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
              Tablo seçili modelleri karşılaştırır; bütün seçenekler ürün
              listesinde yer alır. Aynı çapta saatlerin kasa, kadran ve
              uygulama seçenekleri farklı olabilir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Metal, ABS ve Metalize Plastik Kasa Farkları</h2>
            <p>
              DS-100 ve DS-110 alüminyum; DS-200, DS-210 ve DS-220 paslanmaz
              metal kasa olarak belirtilir. DS-180, DS-250, DS-260, DS-500
              ve DS-510 ise metalize plastik seçeneklerdir. Metal görünüm
              veya altın-gümüş renk ifadesi tek başına metal kasa anlamına gelmez.
            </p>
            <p>
              Kasa ile kadran malzemesini de ayırın. Örneğin DS-370 plastik
              kasa ve metal kadranla listelenir. DS-230 için akrilik boyalı
              ABS kasa ve alüminyum kabartma kadran belirtilir. Seçimi yalnızca
              ürün görselindeki yüzey görünümüne göre yapmayın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kasa Çapı, Kadran ve Logo Alanı</h2>
            <p>
              Kasanın dış ölçüsü ile görünen kadran aynı alan değildir.
              DS-115 için 370 mm kasa ve 308 mm kadran; DS-136 için 380 mm
              kasa ve 288 mm kadran çapı belirtilir. Logo tasarımında dış
              çapın veya kadranın tamamının kullanılabileceğini varsaymayın.
            </p>
            <p>
              Firma logosu, kurum adı ve varsa kısa iletişim bilgisini rakamlar
              ve ibrelerle birlikte yerleştirin. Kullanılabilir alanı, baskı
              ölçüsünü ve renkleri tasarım aşamasında teyit edin.
              DS-170 ve DS-340 için ofset ve dijital; DS-250 için UV ve
              serigrafi seçenekleri belirtilir. Bunlar bütün modellere ortak değildir.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              Özel kadran veya zemin tasarımı talebinizi belirtin; küçük
              yazıların gerçek boyutta okunabilirliğini kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Mekanizma, Cam ve Teslim Kapsamı</h2>
            <p>
              Modellerin ürün bilgilerinde akar saniye mekanizma belirtilir.
              Bu ifade tek başına tamamen sessiz çalışma garantisi değildir;
              sessizlik beklentinizi model koduyla paylaşın. Pil türü, pilin
              dahil olup olmadığı ve montaj aksesuarlarını sipariş öncesinde teyit edin.
            </p>
            <p>
              Mineral cam ile bombe mineral cam seçeneklerini modele göre
              kontrol edin. Cam ve kadran görünümünü ortam ışığıyla birlikte
              değerlendirin. Dış mekan, nem veya suya dayanıklılık beklentiniz
              varsa ürünün uygunluğunu ayrıca teyit edin.
            </p>
            <p>
              Bayi veya şubelere dağıtım için ambalajı ve sevkiyat biçimini
              planlayın. Shrink iç ambalaj ve mikro kutu bilgisi bulunan
              modellerde dahil kapsamı kontrol edin; ek kutulama veya ayrı
              adreslere gönderim talebinizi teklifte belirtin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Duvar Saati Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Karşılaştırmayı aynı model, adet ve kadran tasarımıyla yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ölçü, kasa malzemesi, renk, cam ve kadran yapısı.</li>
              <li>Logo yöntemi, alanı ve özel tasarım kapsamı.</li>
              <li>Sipariş adedi, stok ve dahil ambalaj.</li>
              <li>Pil, varsa montaj aksesuarları, ek paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Koli bilgisi verilen modellerde bu miktarı minimum sipariş
              adedi olarak değerlendirmeyin. Minimum adet ve teslim süresi
              seçilen ürün, stok ve tasarım onayına göre netleştirilir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Duvar Saati Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Kullanım alanını, model kodunu ve adedi belirtin.</li>
              <li>Ölçü, kasa rengi, kadran ve mekanizma beklentinizi teyit edin.</li>
              <li>Logo dosyanızı, ek yazıları ve özel tasarım talebini paylaşın.</li>
              <li>Ambalajı, dağıtım adreslerini ve ihtiyaç tarihini bildirin.</li>
              <li>Stok, kadran yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Kurumsal dağıtımı{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>,{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-white underline underline-offset-4">anahtarlık</Link>,{" "}
              <Link href="/promosyon-termos" className="font-semibold text-white underline underline-offset-4">termos</Link>{" "}
              veya{" "}
              <Link href="/promosyon-ajanda" className="font-semibold text-white underline underline-offset-4">ajanda</Link>{" "}
              modelleriyle tamamlayabilirsiniz. Ek ürünleri ve paketleme
              taleplerini teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Duvar Saati İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Duvar Saatleri Hakkında Sık Sorulan Sorular</h2>
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
