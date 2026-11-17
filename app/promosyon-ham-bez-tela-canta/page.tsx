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

      <section className="rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-black hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">
            Ham Bez & Tela Çanta
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Ham Bez ve Tela Çanta
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            HBÇ-150 ham bez çanta ve TÇ-100 tela çanta modellerini inceleyin.
            Ham bez modelde 35 x 40 cm gövde ve 70 cm askı; tela modelde
            100 gr nonwoven kumaş ve minimum 500 adet sipariş bilgisi bulunur.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Fuar katalogları, etkinlik materyalleri veya mağaza ürünleri için
            çanta seçerken kumaşı, ölçüyü ve taşıma biçimini birlikte değerlendirin.
            Logo uygulaması ve istediğiniz adet için güncel teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-ham-bez-tela-canta-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-ham-bez-canta-hbc-150-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>



      <FpCategoryCatalog anchorId="promosyon-ham-bez-tela-canta-modelleri" showPrices={false} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:undefined}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Ham Bez mi Tela mı? Dağıtılacak İçeriğe Göre Seçim</h2>
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
            <h2 className="text-2xl font-bold text-black">Mevcut Çanta Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[700px] text-left text-sm text-gray-600">
                <caption className="sr-only">HBÇ-150 ham bez ve TÇ-100 tela çantanın kumaş, ölçü ve sipariş karşılaştırması</caption>
                <thead className="bg-white text-black">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Kumaş bilgisi</th>
                    <th scope="col" className="px-4 py-3">Ölçü ve taşıma</th>
                    <th scope="col" className="px-4 py-3">Sipariş koşulu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <th scope="row" className="px-4 py-4 font-semibold text-black">
                      <Link href="/urunler/promosyon-ham-bez-canta-hbc-150" className="underline underline-offset-4">HBÇ-150 Ham Bez</Link>
                    </th>
                    <td className="px-4 py-4">42 tel ham bez, 140 gr</td>
                    <td className="px-4 py-4">35 x 40 cm gövde, 70 cm askı</td>
                    <td className="px-4 py-4">Minimum adet teklif sırasında teyit edilir</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-4 font-semibold text-black">
                      <Link href="/urunler/promosyon-tela-canta-tc-100" className="underline underline-offset-4">TÇ-100 Tela</Link>
                    </th>
                    <td className="px-4 py-4">Nonwoven kumaş, 100 gr</td>
                    <td className="px-4 py-4">Görselde 25 x 35 cm, 8 cm körük</td>
                    <td className="px-4 py-4">Özel üretim, minimum 500 adet</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              TÇ-100 için farklı ebat talebi teklif aşamasında değerlendirilir.
              Görseldeki ölçünün her özel üretim talebi için aynı olduğunu varsaymayın;
              nihai ebat ve özellikleri sipariş öncesinde netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Ölçü, Sap ve Körük Nasıl Değerlendirilir?</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskısı ve Uygulanabilir Tasarım Alanı</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Toptan Bez ve Tela Çanta Fiyatları</h2>
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
            <h2 className="text-2xl font-bold text-black">Çanta Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Modeli, adedi ve taşınacak içeriğin ölçü ile ağırlığını belirtin.</li>
              <li>Renk, ebat, askı ve körük talebini netleştirin.</li>
              <li>Logo dosyasını ve tek ya da çift yön uygulama isteğini paylaşın.</li>
              <li>Etkinlik tarihini, teslimat adresini ve paketleme ihtiyacını bildirin.</li>
              <li>Nihai ürün özelliklerini, tasarım yerleşimini, toplam bedeli ve termini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Alternatif bir sunum biçimi için{" "}
              <Link href="/promosyon-karton-cantalar" className="font-semibold text-black underline underline-offset-4">karton çanta modellerini</Link>{" "}
              inceleyebilirsiniz. Etkinlik paketini{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-black underline underline-offset-4">kalem</Link>{" "}
              ve{" "}
              <Link href="/promosyon-defter" className="font-semibold text-black underline underline-offset-4">defter</Link>{" "}
              ile tamamlayacaksanız tüm parçaların çantaya birlikte sığmasını
              ve toplu teslimat koşullarını da değerlendirin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Bez ve Tela Çanta Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Ham Bez ve Tela Çanta Hakkında Sık Sorulan Sorular</h2>
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
      <section aria-labelledby="canta-dtf-rehberi" className="mt-12 rounded-2xl border border-gray-200 !bg-white p-5">
        <h2 id="canta-dtf-rehberi" className="text-xl font-bold !text-black">Çantada Logo Uygulaması Hakkında</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/dtf-baski-nedir" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/dtf-baski-nedir-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">DTF Transfer Baskı Rehberi</h3><p className="mt-2 text-sm leading-6 text-white/90">Yöntemi tanıyın; ham bez ve tela modellerinde kumaş ve uygulama uygunluğunu ayrıca değerlendirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
