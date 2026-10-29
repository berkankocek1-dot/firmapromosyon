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

const CATEGORY = "Çakı, Fener ve Tornavida Seti";
const PAGE_URL = `${SITE_URL}/promosyon-caki-fener-tornavida-seti`;

const PAGE_TITLE = "Promosyon Çakı ve Fener Modelleri | Logo Baskılı Setler";
const PAGE_DESCRIPTION = "Logo baskılı çok fonksiyonlu çakı, el feneri ve kutulu setleri karşılaştırın. Model, baskı alanı ve minimum adet bilgileriyle toptan sipariş teklifi alın.";
const faqItems = [
  {
    "question": "Bu kategoride hangi çakı ve fener modelleri bulunur?",
    "answer": "ÇK-100 ve ÇK-200 çok fonksiyonlu çakılar; FN-100, FN-200 ve FN-300 el fenerleri; PNL-100 kalem fener ile FN-150 kutulu çakı ve LED el feneri seti listelenir. Tek ürün ile kutulu setin içeriğini ayrı değerlendirin."
  },
  {
    "question": "ÇK-100 ile ÇK-200 arasındaki fark nedir?",
    "answer": "ÇK-100 için 7, ÇK-200 için 11 fonksiyon belirtilir. İki model de 88 x 25 mm ölçü ve 30 x 10 mm lazer baskı alanıyla listelenir. Fonksiyonların tek tek listesini ve ihtiyacınıza uygunluğunu sipariş öncesinde teyit edin."
  },
  {
    "question": "FN-150 kutulu çakı ve fener setinde neler var?",
    "answer": "FN-150; 7 fonksiyonlu çakı, LED el feneri ve kutu içerir. Çakı 88 x 25 mm, fener 85 x 25,5 mm, kutu 135 x 95 mm olarak belirtilir. Pil ve diğer aksesuarların teslim kapsamını ayrıca teyit edin."
  },
  {
    "question": "FN-150 setinde logo baskı alanları nedir?",
    "answer": "Çakıda 30 x 10 mm ve fenerde 20 x 8 mm lazer baskı alanı; kutuda 100 x 50 mm serigraf baskı alanı belirtilir. Hangi parçalara logo uygulanacağını ve her uygulamanın bedelini teklifte ayrı ayrı netleştirin."
  },
  {
    "question": "El fenerlerinin pil, şarj ve ışık gücü özellikleri nedir?",
    "answer": "Listelenen modeller için pil türü, şarj desteği, lümen, çalışma süresi veya suya dayanıklılık bilgileri doğrulanmış şekilde belirtilmez. İhtiyacınızı ürün koduyla paylaşarak teknik özellikleri ve pil dahil teslim kapsamını sipariş öncesinde teyit edin."
  },
  {
    "question": "Çakı ve fener fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, alanı, sipariş adedi ve varsa kutu baskısı veya ek paketlemeye göre güncel teklif hazırlanır. Fiyatı bulunmayan modeller için teklif isteyebilirsiniz."
  },
  {
    "question": "Çakı ve fenerlerde minimum sipariş adedi nedir?",
    "answer": "FN-100 ve FN-200 için 20 adet, FN-150 için 10 adet minimum sipariş belirtilir. Diğer modellerde minimum miktar teklif aşamasında teyit edilir. ÇK-100 ve ÇK-200 için verilen 1000 / 100 koli-kutu bilgisi minimum sipariş koşulu değildir. Stok ve teslim süresini sipariş öncesinde netleştirin."
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
        alt: "Promosyon Çok Amaçlı Setler",
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
              name: "Promosyon Çok Amaçlı Setler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Çakı, Fener ve Tornavida Seti",
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
          <Link href="/">Ana Sayfa</Link>
          <span className="px-2">/</span>
          <Link href="/urunler">Ürünler</Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">
            Çakı, Fener ve Tornavida Seti
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Promosyon Çakı, Fener ve Tornavida Seti
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-gray-200">
            Çok fonksiyonlu çakı, el feneri, kalem fener ve kutulu çakı–fener
            setini karşılaştırın. Ürün içeriği, logo alanı ve minimum sipariş
            bilgilerini inceleyerek kurumsal toplu sipariş için teklif alın.
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-black font-semibold"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="rounded-full border border-white/30 px-5 py-3"
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
            className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-square rounded-xl bg-white">
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
              <div className="text-xs text-gray-500 uppercase">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-black">{p.title}</h2>

              <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                {p.shortDesc}
              </p>

              {typeof p.price === "number" && p.price > 0 && (
                <div className="mt-3">
                  <p className="text-base font-bold text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p>
                  <p className="mt-1 text-xs text-gray-600">Fiyatlar baskı hariçtir. Güncel teklif için iletişime geçin.</p>
                </div>
              )}

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Çakı ve Fener Seçimi</h2>
            <p>
              Çok fonksiyonlu çakı, tekli el feneri ve kutulu hediye seti farklı
              kullanım ihtiyaçlarına yöneliktir. Çalışan veya müşteri hediyesi
              seçerken ürünün belirtilen işlevlerini, ölçüsünü ve sunum biçimini
              karşılaştırın. Birlikte sunum için FN-150, tek ürün dağıtımı için
              çakı ve fener modelleri ayrı değerlendirilebilir.
            </p>
            <p>
              Fonksiyon sayısı, ışık gücü ve ürün ölçüsü farklı bilgilerdir.
              İhtiyacınız olan araçları veya aydınlatma özelliklerini ürün
              koduyla paylaşın; teknik ayrıntıları sipariş öncesinde teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Çakı, Fener ve Kutulu Set Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Çakı ve fener modellerinin belirtilen özellikleri ve logo bilgileri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Belirtilen özellikler</th>
                    <th scope="col" className="px-4 py-3">Logo / sipariş bilgisi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["ÇK-100", "7 fonksiyon; 88 x 25 mm", "Lazer; 30 x 10 mm alan"],
                    ["ÇK-200", "11 fonksiyon; 88 x 25 mm", "Lazer; 30 x 10 mm alan"],
                    ["FN-100 / FN-200", "El feneri; gri, kırmızı, mavi, siyah", "Minimum 20 adet; logo yöntemi ve alanı teyit edilir"],
                    ["FN-150", "7 fonksiyonlu çakı, LED el feneri ve kutu", "Minimum 10 adet; parçalara göre ayrı baskı alanları"],
                    ["FN-300", "2 fonksiyonlu el feneri; 1,7 x 8 cm", "Logo yöntemi ve alanı teklifte belirlenir"],
                    ["PNL-100", "Kalem formunda fener", "Ölçü, renk ve logo ayrıntıları teyit edilir"],
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
            <h2 className="text-2xl font-bold text-white">Çakılarda Fonksiyon ve Logo Alanı</h2>
            <p>
              ÇK-100 için 7, ÇK-200 için 11 fonksiyon belirtilir. İki modelin
              ürün ölçüsü 88 x 25 mm, lazer baskı alanı 30 x 10 mm olarak
              listelenir. Araçların tek tek listesini, ihtiyacınıza uygunluğunu
              ve renk stoklarını sipariş öncesinde kontrol edin.
            </p>
            <p>
              Her iki modelde kırmızı, krom, mavi ve siyah seçenekleri bulunur.
              Renk ve yüzey seçiminin logo görünümüne etkisini tasarım
              çalışmasında değerlendirin. İnce yazı ve çizgileri gerçek
              uygulama boyutunda kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">FN-150 Setinde Çakı, Fener ve Kutu Baskısı</h2>
            <p>
              FN-150, 7 fonksiyonlu çakıyı LED el feneri ve kutuyla birlikte
              sunar. Çakı ölçüsü 88 x 25 mm, fener ölçüsü 85 x 25,5 mm,
              kutu ölçüsü 135 x 95 mm olarak belirtilir. Ürün ölçülerini
              baskı alanlarıyla karıştırmayın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Çakı: 30 x 10 mm lazer baskı alanı.</li>
              <li>Fener: 20 x 8 mm lazer baskı alanı.</li>
              <li>Kutu: 100 x 50 mm serigraf baskı alanı.</li>
            </ul>
            <p>
              Kırmızı, mavi, silver ve siyah seçeneklerinin güncel stoklarını
              kontrol edin. Logo uygulanacak parçaları ayrı belirtin;
              bir parçanın baskı bedelini bütün setin baskı bedeli olarak
              değerlendirmeyin. Pil ve diğer aksesuarların teslim kapsamını teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">El Fenerlerinde Teknik Bilgileri Kontrol Edin</h2>
            <p>
              FN-100 ve FN-200 el feneri, FN-300 iki fonksiyonlu fener,
              PNL-100 ise kalem fener olarak sunulur. FN-300 için 1,7 x 8 cm
              ölçü belirtilir; iki fonksiyonun ayrıntılarını kullanım
              beklentinize göre ayrıca teyit edin.
            </p>
            <p>
              Pil türü, şarj desteği, lümen, çalışma süresi ve suya dayanıklılık
              bilgileri belirtilmediğinden modele ait kesin özellikleri teklif
              aşamasında isteyin. Görünüşünden hareketle pilli veya şarjlı
              olduğu sonucunu çıkarmayın. Pilin dahil olup olmadığını da kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Çakı ve Fener Fiyatları ile Minimum Sipariş</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Aynı model, adet ve baskı kapsamıyla karşılaştırma yapın.
            </p>
            <p>
              FN-100 ve FN-200 için minimum 20 adet, FN-150 için minimum 10 adet
              belirtilir. Diğer ürünlerde miktarı teklif aşamasında teyit edin.
              ÇK-100 ve ÇK-200 için verilen 1000 / 100 koli-kutu bilgisi
              minimum sipariş koşulu değildir.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, renk ve sipariş adedi.</li>
              <li>Logo uygulanacak parçalar, yöntem ve alan.</li>
              <li>Kutu, pil ve diğer aksesuarların teslim kapsamı.</li>
              <li>Ek paketleme, sevkiyat ve KDV dahil toplam teklif.</li>
            </ul>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Çakı ve Fener Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, renk tercihini ve adedi paylaşın.</li>
              <li>İhtiyaç duyduğunuz işlevleri ve teslim içeriğini teyit edin.</li>
              <li>Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak iletin.</li>
              <li>Logo konumunu, kutu baskısını ve paketleme talebini belirtin.</li>
              <li>Teslimat adresi ve tarihinizi paylaşın; stok, tasarım ve toplam bedeli netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Farklı aksesuar grupları için{" "}
              <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-white underline underline-offset-4">teknolojik ürünleri</Link>,{" "}
              çok parçalı hediye sunumları için{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-white underline underline-offset-4">VIP hediye setlerini</Link>{" "}
              de karşılaştırabilirsiniz. Birlikte sipariş edilecek ürünleri
              teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Çakı ve Fener İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Çakı ve Fenerler Hakkında Sık Sorulan Sorular</h2>
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
