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
            Geri Dönüşümlü Ürünler
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Geri Dönüşümlü Promosyon Ürünleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Kraft kapaklı defterleri, spiralli notlukları ve ahşap telefon
            tutucuyu malzeme, ölçü ve içeriklerine göre karşılaştırın.
            Logo uygulaması ve kurumsal toplu sipariş için güncel teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-geri-donusumlu-urunler-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-ahsap-telefon-tutucu-att-230-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">

        <Link href="/promosyon-yapiskanli-notluklar" className="text-sm font-semibold text-gray-900 hover:underline">Yapışkanlı Notlukları İncele →</Link>
      </div>

      <FpCategoryCatalog anchorId="promosyon-geri-donusumlu-urunler-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Malzeme ve Kullanım İhtiyacına Göre Ürün Seçimi</h2>
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
            <h2 className="text-2xl font-bold text-black">Ürünleri Malzeme ve İçerikleriyle Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Kategorideki modellerin belirtilen ölçü, kağıt ve kullanım bilgileri</caption>
                <thead className="bg-white text-black">
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
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{size}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kağıt, Kapak ve Belge Taleplerini Ayırın</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Ölçü ve Teslim İçeriğinde Kontrol Noktaları</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kraft Kapak ve Ahşap Yüzeyde Logo Uygulaması</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Fiyat ve Toplu Sipariş Kapsamı</h2>
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
            <h2 className="text-2xl font-bold text-black">Toplu Sipariş İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, adedi ve varsa varyant veya renk tercihini belirtin.</li>
              <li>Ölçü, kağıt düzeni, aksesuar ve malzeme beklentinizi teyit edin.</li>
              <li>Logo dosyanızı, uygulanacak yüzeyi ve renkleri paylaşın.</li>
              <li>Paketleme talebini, teslimat adresini ve ihtiyaç tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Diğer not alma seçenekleri için{" "}
              <Link href="/promosyon-yapiskanli-notluklar" className="font-semibold text-black underline underline-offset-4">yapışkanlı notlukları</Link>{" "}
              ve{" "}
              <Link href="/promosyon-defter" className="font-semibold text-black underline underline-offset-4">tarihsiz defterleri</Link>{" "}
              karşılaştırabilirsiniz. Ek yazım ürünü için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-black underline underline-offset-4">kalem modellerini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Kurumsal Sipariş İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Geri Dönüşümlü Ürünler Hakkında Sık Sorulan Sorular</h2>
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
    <section className="mt-12 rounded-2xl bg-white p-6 text-black" aria-label="Telefon tutucu modelleri"><h2 className="text-xl font-bold !text-black">Promosyon Telefon Tutucu Modelleri</h2><p className="mt-2 text-sm leading-6 !text-gray-700">Ahşap masaüstü, aynalı stand ve araç içi telefon tutucuları kullanım ihtiyacınıza göre karşılaştırın.</p><Link href="/promosyon-telefon-tutucu" className="mt-3 inline-flex font-semibold !text-black underline">Telefon Tutucu ve Stand Modellerini İncele →</Link></section>
    <section className="mt-12 rounded-2xl bg-white p-6 text-black" aria-label="Spiralli notluk modelleri"><h2 className="text-xl font-bold !text-black">Promosyon Spiralli Notluk Modelleri</h2><p className="mt-2 text-sm leading-6 !text-gray-700">Spiralli notluk ve not defterlerini ölçü, sayfa ve yapışkanlı not içeriğiyle karşılaştırın.</p><Link href="/promosyon-spiralli-notluk" className="mt-3 inline-flex font-semibold !text-black underline">Spiralli Notluk Modellerini İncele →</Link></section>
      <section aria-labelledby="telefon-tutucu-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="telefon-tutucu-rehberi-baslik" className="text-xl font-bold !text-black">Telefon Tutucu Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Masaüstü ve araç içi seçenekleri cihaz, kılıf, denge ve logo alanıyla karşılaştırın; şarj özelliği ve sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-telefon-tutucu-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-telefon-tutucu-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Telefon Tutucu Seçim Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Masaüstü ve araç içi promosyon telefon tutucuları cihaz, kılıf, denge ve logo alanıyla karşılaştırın. Şarj özelliği, numune ve toplu sipariş kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
      <section aria-labelledby="spiralli-notluk-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="spiralli-notluk-rehberi-baslik" className="text-xl font-bold !text-black">Spiralli Notluk Seçimini ve Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Ana not bloğu, yapışkanlı bölümler, spiral ve kapak özelliklerini karşılaştırın; malzeme bilgisi, logo alanı ve sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-spiralli-notluk-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-spiralli-notluk-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Spiralli Notluk Seçim ve Baskı Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Spiralli promosyon notlukları not alanı, yapışkanlı bölümler, spiral, kapak ve logo alanıyla karşılaştırın. Malzeme bilgisi ve toplu sipariş kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
    </div></div>
  );
}
