import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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

      <section className="rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/">Ana Sayfa</Link>
          <span className="px-2">/</span>
          <Link href="/urunler">Ürünler</Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">
            Çakı, Fener ve Tornavida Seti
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Çakı, Fener ve Tornavida Seti
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            Çok fonksiyonlu çakı, el feneri, kalem fener ve kutulu çakı–fener
            setini karşılaştırın. Ürün içeriği, logo alanı ve minimum sipariş
            bilgilerini inceleyerek kurumsal toplu sipariş için teklif alın.
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-caki-fener-tornavida-seti-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>



      <FpCategoryCatalog anchorId="promosyon-caki-fener-tornavida-seti-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Güncel teklif için iletişime geçin."}))} />

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Çakı ve Fener Seçimi</h2>
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
            <h2 className="text-2xl font-bold text-black">Çakı, Fener ve Kutulu Set Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Çakı ve fener modellerinin belirtilen özellikleri ve logo bilgileri</caption>
                <thead className="bg-white text-black">
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
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{features}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Çakılarda Fonksiyon ve Logo Alanı</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">FN-150 Setinde Çakı, Fener ve Kutu Baskısı</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">El Fenerlerinde Teknik Bilgileri Kontrol Edin</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Çakı ve Fener Fiyatları ile Minimum Sipariş</h2>
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
            <h2 className="text-2xl font-bold text-black">Toplu Çakı ve Fener Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, renk tercihini ve adedi paylaşın.</li>
              <li>İhtiyaç duyduğunuz işlevleri ve teslim içeriğini teyit edin.</li>
              <li>Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak iletin.</li>
              <li>Logo konumunu, kutu baskısını ve paketleme talebini belirtin.</li>
              <li>Teslimat adresi ve tarihinizi paylaşın; stok, tasarım ve toplam bedeli netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Farklı aksesuar grupları için{" "}
              <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-black underline underline-offset-4">teknolojik ürünleri</Link>,{" "}
              çok parçalı hediye sunumları için{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-black underline underline-offset-4">VIP hediye setlerini</Link>{" "}
              de karşılaştırabilirsiniz. Birlikte sipariş edilecek ürünleri
              teklif kapsamına ayrıca ekletin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Çakı ve Fener İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Çakı ve Fenerler Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-black">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <section aria-labelledby="caki-fener-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="caki-fener-rehberi-baslik" className="text-xl font-bold !text-black">Çakı İşlevlerini, Feneri ve Set Kapsamını Karşılaştırın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">İşlev listesini, fenerin güç kaynağını ve teslim içeriğini ayrı değerlendirin; çakı, fener ve kutu için logo uygulamasını planlayın.</p>
        <Link href="/rehber/promosyon-caki-ve-fener-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-caki-ve-fener-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Çakı ve Fener Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Çakı, el feneri, kalem fener ve kutulu setleri karşılaştırın. İşlev listesi, güç kaynağı, parça bazında logo ve teslim kapsamını birlikte planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
