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

const CATEGORY = "Ham Bez & Tela Çanta";
const PAGE_URL = `${SITE_URL}/promosyon-ham-bez-tela-canta`;
const PAGE_TITLE = "Promosyon Ham Bez ve Tela Çanta | Logo Baskılı Modeller";
const PAGE_DESCRIPTION =
  "Logo baskılı ham bez ve tela çanta modellerini kumaş, ölçü, askı ve baskı özellikleriyle karşılaştırın. Toptan kurumsal sipariş için güncel teklif alın.";

const faqItems = [
  {
    "question": "Ham bez çanta ile tela çanta aynı ürün müdür?",
    "answer": "Hayır. Bu kategoride HBÇ-150 ham bez kumaşla, TÇ-100 ise nonwoven kumaşla sunulur. Ölçü, askı, körük ve baskı seçenekleri de farklıdır. Kumaş adından hareketle tüm ürünlere aynı özellik veya kullanım koşulunu atfetmeyin; model açıklamasını kontrol edin."
  },
  {
    "question": "Promosyon bez çanta minimum kaç adet sipariş edilir?",
    "answer": "Minimum adet ürün bazında değişir. TÇ-100 tela çantada minimum 500 adet belirtilir. HBÇ-150 ham bez çantanın minimum adedi ise teklif aşamasında teyit edilir; tela modelinin minimum koşulu ham bez modele uygulanmaz."
  },
  {
    "question": "Bez ve tela çanta fiyatlarına baskı dahil mi?",
    "answer": "Bu sayfada güncel fiyat teklif yoluyla paylaşılır. Baskının dahil olup olmadığı seçilen model, adet ve tasarımla birlikte netleştirilmelidir. Teklifte ürün, baskı, varsa hazırlık veya paketleme, sevkiyat ve KDV kapsamını teyit edin."
  },
  {
    "question": "Ham bez ve tela çantalara hangi baskı uygulanır?",
    "answer": "Mevcut ürün bilgisinde HBÇ-150 için ofset dijital ve DTF transfer, TÇ-100 için dijital baskı seçenekleri bulunur. Logo ölçüsü, renkler ve uygulama konumu modele göre değerlendirilir. Bir modelin yöntemini diğerine otomatik olarak uygulamayın."
  },
  {
    "question": "Çantanın ölçüsü ile baskı alanı aynı mıdır?",
    "answer": "Hayır. Dış ölçü, içine yerleştirilecek ürünleri ve taşıma biçimini değerlendirmek içindir. Kullanılabilir baskı alanı; dikişler, sap bağlantıları, körük ve tasarım yerleşimine göre ayrıca belirlenir. Tek veya çift yön isteğinizi teklif sırasında belirtin."
  },
  {
    "question": "Kumaş gramajı çantanın kaç kilo taşıyacağını gösterir mi?",
    "answer": "Gramaj tek başına doğrulanmış bir taşıma kapasitesi değildir. Kumaş, dikiş, sap bağlantısı, ürün biçimi ve taşınacak içeriğin özellikleri birlikte değerlendirilmelidir. Katalog, kutu veya ağır bir ürün taşıyacaksanız ölçü ve içerik bilgisini paylaşarak modelin uygunluğunu teyit edin."
  },
  {
    "question": "Toplu çanta siparişinde teslim süresi nasıl belirlenir?",
    "answer": "Model, stok veya özel üretim durumu, adet, baskı tasarımı, paketleme ve sevkiyat adresi süreyi etkiler. Etkinlik tarihinizi önceden paylaşın; ölçü, malzeme, baskı kapsamı, toplam bedel ve net teslim süresini sipariş öncesinde teyit edin."
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
        alt: "Promosyon Ham Bez ve Tela Çanta",
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
              name: "Ham Bez & Tela Çanta",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Ham Bez & Tela Çanta",
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
            Ham Bez & Tela Çanta
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Ham Bez ve Tela Çanta
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            HBÇ-150 ham bez çanta ve TÇ-100 tela çanta modellerini inceleyin.
            Ham bez modelde 35 x 40 cm gövde ve 70 cm askı; tela modelde
            100 gr nonwoven kumaş ve minimum 500 adet sipariş bilgisi bulunur.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Fuar katalogları, etkinlik materyalleri veya mağaza ürünleri için
            çanta seçerken kumaşı, ölçüyü ve taşıma biçimini birlikte değerlendirin.
            Logo uygulaması ve istediğiniz adet için güncel teklif alın.
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

              <p className="mt-3 text-sm font-semibold text-gray-900">Güncel fiyat için teklif alın.</p>

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
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Ham Bez mi Tela mı? Dağıtılacak İçeriğe Göre Seçim</h2>
            <p>
              Fuar ziyaretçilerine katalog vermek, mağaza ürünlerini sunmak veya
              çalışan hediyelerini bir araya getirmek farklı çanta ihtiyaçları
              doğurabilir. Önce içine konulacak ürünlerin ölçüsünü, yaklaşık
              ağırlığını ve dağıtım biçimini belirleyin; ardından kumaş, sap ve
              körük özelliklerini karşılaştırın.
            </p>
            <p>
              Ham bez ve nonwoven tela aynı kumaş değildir. Tekrar kullanım,
              bakım ve taşıma uygunluğu modelin yapısına ve kullanım koşullarına
              bağlıdır. Seçimi yalnızca kumaş adına veya gramajına göre yapmayın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Mevcut Çanta Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[700px] text-left text-sm text-gray-200">
                <caption className="sr-only">HBÇ-150 ham bez ve TÇ-100 tela çantanın kumaş, ölçü ve sipariş karşılaştırması</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Kumaş bilgisi</th>
                    <th scope="col" className="px-4 py-3">Ölçü ve taşıma</th>
                    <th scope="col" className="px-4 py-3">Sipariş koşulu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <th scope="row" className="px-4 py-4 font-semibold text-white">
                      <Link href="/urunler/promosyon-ham-bez-canta-hbc-150" className="underline underline-offset-4">HBÇ-150 Ham Bez</Link>
                    </th>
                    <td className="px-4 py-4">42 tel ham bez, 140 gr</td>
                    <td className="px-4 py-4">35 x 40 cm gövde, 70 cm askı</td>
                    <td className="px-4 py-4">Minimum adet teklif sırasında teyit edilir</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-4 font-semibold text-white">
                      <Link href="/urunler/promosyon-tela-canta-tc-100" className="underline underline-offset-4">TÇ-100 Tela</Link>
                    </th>
                    <td className="px-4 py-4">Nonwoven kumaş, 100 gr</td>
                    <td className="px-4 py-4">Görselde 25 x 35 cm, 8 cm körük</td>
                    <td className="px-4 py-4">Özel üretim, minimum 500 adet</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              TÇ-100 için farklı ebat talebi teklif aşamasında değerlendirilir.
              Görseldeki ölçünün her özel üretim talebi için aynı olduğunu varsaymayın;
              nihai ebat ve özellikleri sipariş öncesinde netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Ölçü, Sap ve Körük Nasıl Değerlendirilir?</h2>
            <p>
              Dış en ve boy ölçüsüyle kullanılabilir iç alan aynı olmayabilir.
              Katalog veya kutu yerleştirilecekse ürünün kalınlığını da hesaba
              katın. Körük bilgisi, hacimli içeriklerin yerleşimini değerlendirirken
              yardımcı olur; ölçü uyumunu taşınacak içerikle birlikte teyit edin.
            </p>
            <p>
              Askı boyu, elde veya omuzda taşıma tercihi açısından önemlidir.
              Kumaş, dikiş ve sap bağlantıları taşıma uygunluğunu birlikte etkiler.
              Gramajı doğrudan kilogram cinsinden bir taşıma garantisi olarak
              değerlendirmeyin; ağır veya köşeli içerikler için ayrıca uygunluk sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskısı ve Uygulanabilir Tasarım Alanı</h2>
            <p>
              HBÇ-150 için ürün bilgisinde ofset dijital ve DTF transfer,
              TÇ-100 için dijital baskı seçenekleri bulunur. Yöntemi seçerken
              logo renklerini, ayrıntıları, kumaş yüzeyini ve uygulama ölçüsünü
              birlikte değerlendirin.
            </p>
            <p>
              Çantanın dış ölçüsü baskı alanı değildir. Sap bağlantısı, dikiş ve
              körük gibi bölümler tasarım yerleşimini sınırlandırabilir. Tek veya
              çift yön isteğinizi, logonun konumunu ve varsa ek yazıları belirtin.
            </p>
            <p>
              Mümkünse vektörel PDF, AI, EPS veya SVG paylaşın; fotoğraf ve
              görsellerde çözünürlük gerçek baskı ölçüsüne göre kontrol edilmelidir.
              Görseldeki örnek logo yerine kullanılacak tasarımı ve baskı kapsamını
              üretim onayından önce netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toptan Bez ve Tela Çanta Fiyatları</h2>
            <p>
              Bu sayfadaki modeller için güncel fiyat teklif yoluyla paylaşılır.
              Baskının dahil olup olmadığı seçilen model, adet ve tasarım
              üzerinden belirlenmelidir. Bir modele ait fiyatlandırma koşulunu
              diğerine uygulamayın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ürün kodu, kumaş, gramaj, ebat ve varsa körük.</li>
              <li>Sipariş adedi, renk ve stok veya özel üretim koşulu.</li>
              <li>Baskı yöntemi, renkler, tek veya çift yön uygulama.</li>
              <li>Varsa hazırlık, paketleme, sevkiyat ve KDV kapsamı.</li>
            </ul>
            <p>
              Teklifleri aynı ölçü, kumaş, adet ve baskı kapsamıyla karşılaştırın.
              Minimum sipariş miktarıyla fiyatlandırmanın esas alındığı adet aynı
              şey değildir. Özellikle özel üretimde iki bilgiyi ayrı teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Çanta Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Modeli, adedi ve taşınacak içeriğin ölçü ile ağırlığını belirtin.</li>
              <li>Renk, ebat, askı ve körük talebini netleştirin.</li>
              <li>Logo dosyasını ve tek ya da çift yön uygulama isteğini paylaşın.</li>
              <li>Etkinlik tarihini, teslimat adresini ve paketleme ihtiyacını bildirin.</li>
              <li>Nihai ürün özelliklerini, tasarım yerleşimini, toplam bedeli ve termini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Alternatif bir sunum biçimi için{" "}
              <Link href="/promosyon-karton-cantalar" className="font-semibold text-white underline underline-offset-4">karton çanta modellerini</Link>{" "}
              inceleyebilirsiniz. Etkinlik paketini{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>{" "}
              ve{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter</Link>{" "}
              ile tamamlayacaksanız tüm parçaların çantaya birlikte sığmasını
              ve toplu teslimat koşullarını da değerlendirin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Bez ve Tela Çanta Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Ham Bez ve Tela Çanta Hakkında Sık Sorulan Sorular</h2>
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