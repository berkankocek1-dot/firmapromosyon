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

const CATEGORY = "Masa Sümeni";
const PAGE_URL = `${SITE_URL}/promosyon-masa-sumeni`;

const PAGE_TITLE = "Promosyon Masa Sümeni ve Kristal Masa Setleri | Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı masa sümeni ve kristal masa setlerini karşılaştırın. Set içeriği, ölçü, baskı alanı ve toptan kurumsal sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Masa sümeni kategorisinde hangi modeller bulunur?",
    "answer": "Kategoride KMS-130, KMS-140 ve KMS-150 kristal masa setleri ile MSN-100, MSN-110 ve MSN-120 altı parçalı masa sümeni setleri bulunur. Kristal setlerle yazı alanı ve aksesuarları bir araya getiren sümen setlerini kullanım ihtiyacınıza göre ayrı değerlendirin."
  },
  {
    "question": "Altı parçalı masa sümeni setlerinin içeriği aynı mı?",
    "answer": "Hayır. MSN-100 telefon standı ve kalem seti; MSN-110 dosyalık ve takvimlik; MSN-120 ise mouse pad ve kağıtlık içerir. Her modelin tam parça listesini ürün açıklamasından kontrol edin. MSN-120 için kalem seti belirtilmez."
  },
  {
    "question": "Masa sümeni setleri gerçek deri mi?",
    "answer": "MSN serisinde malzeme ve kaplama türü sipariş öncesinde netleştirilir. Gerçek deri veya suni deri tercihinizi ürün koduyla birlikte belirtin; malzemeyi yalnızca görsel ya da ürün bağlantısındaki ifadelerden çıkarmayın."
  },
  {
    "question": "Kristal masa setlerinin ölçüsü ve logo alanı nedir?",
    "answer": "KMS-130 için ürün ölçüsü 15 x 40 cm, baskı alanı 60 x 150 mm; KMS-140 için 12 x 24 cm ve 60 x 150 mm; KMS-150 için 20 x 50 cm ve 60 x 200 mm belirtilir. Ürün ölçüsüyle baskı alanını birbirinden ayırın."
  },
  {
    "question": "Masa sümeni setinin bütün parçalarına logo uygulanır mı?",
    "answer": "Logo uygulanacak parçalar, yöntem ve alan seçilen set bileşenine ve tasarıma göre teklif aşamasında belirlenir. Bir parçaya uygulama yapılması bütün parçalara baskının dahil olduğu anlamına gelmez. İstediğiniz parçaları teklifte ayrı ayrı belirtin."
  },
  {
    "question": "Masa sümeni fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Ürün kartlarında gösterilen fiyatlar baskı hariçtir; KDV ayrıca belirtilir. Model, adet, logo uygulanacak parçalar, paketleme ve sevkiyat kapsamına göre güncel toplam teklif isteyin."
  },
  {
    "question": "Toplu masa sümeni siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi stok, model, logo onayı ve paketleme kapsamına göre teklif aşamasında teyit edilir. Ürün kodunu, adedi, logo dosyanızı, teslimat adresini ve varsa etkinlik tarihinizi paylaşın."
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
        alt: "Promosyon Masa Sümeni",
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
              name: "Promosyon Masa Sümeni",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Masa Sümeni",
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
            Promosyon Masa Sümeni
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Masa Sümeni
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Altı parçalı masa sümeni setleri ile kristal masa setlerini inceleyin.
            Set içeriğini, masa üzerinde kapladığı alanı ve logo uygulama
            seçeneklerini karşılaştırarak kurumsal toplu sipariş için teklif alın.
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
            <h2 className="text-2xl font-bold text-white">Masa Sümeni ve Kristal Masa Seti Seçimi</h2>
            <p>
              Yazı alanı, notluk ve diğer masa aksesuarlarını aynı takımda
              kullanmak istiyorsanız MSN serisi sümen setlerinin içeriklerini
              karşılaştırın. Kristal masa seti arıyorsanız KMS serisinde taban
              ölçüsü ve logo alanını masa yerleşiminize göre değerlendirin.
            </p>
            <p>
              Altı parçalı set ifadesi bütün modellerin aynı aksesuarları
              içerdiğini göstermez. Telefon standı, dosyalık, takvimlik ve
              mouse pad gibi parçalar modelden modele değişir.
              Seçimi yalnızca parça sayısına göre yapmayın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Altı Parçalı Sümen Setlerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Masa sümeni modellerinin belirtilen altı parçalık içerikleri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Set içeriği</th>
                    <th scope="col" className="px-4 py-3">Ayırt edici parçalar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["MSN-100", "Masa sümeni, kalemlik, telefon standı, küp notluk, kalem seti, bardak altlığı", "Telefon standı ve kalem seti"],
                    ["MSN-110", "Masa sümeni, kalem seti, kalemlik, notluk, dosyalık, takvimlik", "Dosyalık ve takvimlik"],
                    ["MSN-120", "Masa sümeni, kalemlik, kağıtlık, küp notluk, mouse pad, bardak altlığı", "Mouse pad ve kağıtlık"],
                  ].map(([model, contents, difference]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{contents}</td>
                      <td className="px-4 py-4">{difference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-gray-200">
              MSN-120 set listesinde kalem seti bulunmaz. MSN-110 için telefon
              standı veya mouse pad belirtilmez. Takvimlik bulunması güncel yıl
              takviminin de dahil olduğunu göstermez; kağıt ve takvim içeriğini teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Kristal Masa Setlerinde Ölçü ve Baskı Alanı</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[480px] text-left text-sm text-gray-200">
                <caption className="sr-only">Kristal masa setlerinin ürün ölçüleri ve belirtilen baskı alanları</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ürün ölçüsü</th>
                    <th scope="col" className="px-4 py-3">Baskı alanı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["KMS-130", "15 x 40 cm", "60 x 150 mm"],
                    ["KMS-140", "12 x 24 cm", "60 x 150 mm"],
                    ["KMS-150", "20 x 50 cm", "60 x 200 mm"],
                  ].map(([model, size, printArea]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{size}</td>
                      <td className="px-4 py-4">{printArea}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-gray-200">
              Ürün ölçüsü masa üzerindeki yerleşim için, baskı alanı ise logo
              tasarımı için kullanılır. KMS-140 bu üç modelin en kompakt seçeneğidir.
              KMS-150 için 50 cm uzunluğundaki yerleşimi ekran ve çalışma alanıyla
              birlikte değerlendirin. Aksesuarların kesin listesini ayrıca teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Malzeme, Parça Ölçüsü ve Masa Düzeni</h2>
            <p>
              MSN serisi sümen setlerinde malzeme ve kaplama türü, parça ölçüleri
              ve renkler sipariş öncesinde netleştirilir. Gerçek deri veya suni
              deri tercihiniz varsa bunu açıkça belirtin. Görselleri tek başına
              malzeme doğrulaması olarak kullanmayın.
            </p>
            <p>
              Sümen, klavye, ekran ve diğer aksesuarlar için masadaki kullanılabilir
              alanı ölçün. Dosyalıkta belge boyutunu, telefon standında cihaz ve
              kılıf uyumunu kontrol edin. Set içindeki not kağıtları, kalemler ve
              diğer sarf malzemelerinin teslim kapsamını teyit edin.
            </p>
            <p>
              Yalnızca kalemlik veya bardak altlığı arıyorsanız{" "}
              <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-white underline underline-offset-4">masaüstü organizer ve bardak altlığı modellerini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Hangi Parçalara Uygulanacak?</h2>
            <p>
              Sümen setinde logo uygulanacak parçaları ayrı ayrı belirtin.
              Yöntem ve alan her bileşenin yüzeyine göre değerlendirilir;
              bir parçaya baskı yapılması diğer parçaların da aynı bedelle
              baskılı sunulacağı anlamına gelmez.
            </p>
            <p>
              Kristal modellerde tabloda belirtilen alanı esas alın. Logo,
              kurum adı veya kişiye özel yazı için mümkünse vektörel PDF, AI,
              EPS ya da SVG dosyası paylaşın. Yöntemi, konumu ve gerçek ölçüde
              okunabilirliği teklif aşamasında netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Masa Sümeni Fiyatlarını Karşılaştırırken</h2>
            <p>
              Ürün kartlarında gösterilen fiyatlar baskı hariçtir; KDV ayrıca
              belirtilir. Karşılaştırmayı aynı model, adet ve logo kapsamıyla
              yapın. Altı parçalı iki setin içeriği farklı olabileceğinden yalnızca
              toplam parça sayısını esas almayın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Set içeriği, malzeme ve her parçanın ölçüsü.</li>
              <li>Logo uygulanacak parçalar, yöntem, alan ve kişiselleştirme.</li>
              <li>Sipariş adedi, renk seçenekleri ve stok.</li>
              <li>Standart ambalaj, varsa ek kutulama, sevkiyat ve KDV.</li>
            </ul>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Masa Sümeni Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Model kodunu, adedi ve renk tercihinizi paylaşın.</li>
              <li>Set içeriğini, parça ölçülerini ve malzeme beklentinizi netleştirin.</li>
              <li>Logo dosyanızı ve uygulanmasını istediğiniz parçaları belirtin.</li>
              <li>Kişiye özel yazı, paketleme, teslimat adresi ve etkinlik tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Ayrı bir yazım hediyesi eklemek için{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem setlerini</Link>,{" "}
              farklı kurumsal hediye içerikleri için{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-white underline underline-offset-4">VIP ürünleri</Link>{" "}
              karşılaştırabilirsiniz. Ek ürünleri teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Masa Sümeni ve Kristal Set İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Masa Sümeni Hakkında Sık Sorulan Sorular</h2>
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
