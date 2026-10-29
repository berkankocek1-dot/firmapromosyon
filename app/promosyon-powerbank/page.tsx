import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import PowerbankProductGrid from "./PowerbankProductGrid";
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

const CATEGORY = "Powerbank";
const PAGE_URL = `${SITE_URL}/promosyon-powerbank`;

const faqItems = [
  {
    question: "Type-C bağlantısı bulunan her powerbank hızlı şarj destekler mi?",
    answer:
      "Hayır. Type-C bağlantısı tek başına hızlı şarj veya USB Power Delivery desteği anlamına gelmez. Seçilen modelin çıkış gücü, desteklediği şarj protokolü ve portun giriş veya çıkış işlevi ayrıca kontrol edilmelidir.",
  },
  {
    question: "Ürün fiyatlarına logo baskısı dahil mi?",
    answer:
      "Ürün kartlarında fiyat bulunan modellerde tutarlar TL + KDV olarak ve baskı hariç gösterilir. Logo baskılı toplam teklif; model, adet ve baskı uygulaması netleştikten sonra hazırlanır.",
  },
  {
    question: "Promosyon powerbank minimum kaç adet yaptırılır?",
    answer:
      "Promosyon powerbank siparişlerinde minimum adet; seçilen modele, kapasiteye, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon powerbank fiyatları neye göre değişir?",
    answer:
      "Promosyon powerbank fiyatları; kapasite değeri, teknik özellikler, gövde yapısı, baskı yöntemi, sipariş miktarı ve özel taleplere göre değişebilir. Wireless şarj, hızlı şarj veya dahili kablo gibi ek özellikler fiyat üzerinde etkili olabilir.",
  },
  {
    question: "Logo baskılı powerbanklerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon powerbank modellerinde ürün yüzeyine göre UV baskı, tampon baskı, lazer baskı veya uygun farklı uygulamalar tercih edilebilir. Doğru baskı yöntemi; ürün malzemesi, logo detayı ve kullanım amacına göre belirlenmelidir.",
  },
  {
    question: "Promosyon powerbank siparişi ne kadar sürede hazırlanır?",
    answer:
      "Sipariş hazırlık süresi; stok durumu, sipariş adedi, baskı yoğunluğu, teknik özellikler ve onay sürecine göre değişebilir. Net teslim süresi, seçilen model ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Promosyon powerbank kimler için uygundur?",
    answer:
      "Promosyon powerbank; müşterilere, bayilere, çalışanlara, iş ortaklarına ve etkinlik katılımcılarına verilebilecek kullanışlı teknolojik promosyon ürünleri arasında yer alır. Özellikle mobil cihaz kullanımının yoğun olduğu hedef kitleler için oldukça uygundur.",
  },
];

export const metadata: Metadata = {
  title: "Promosyon Powerbank Modelleri ve Fiyatları | Logo Baskılı",
  description:
    "Logo baskılı promosyon powerbank modellerini ve baskı hariç fiyatlarını karşılaştırın. Kapasite, kablosuz ve hızlı şarj seçenekleriyle toplu sipariş teklifi alın.",
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
    title: "Promosyon Powerbank | FirmaPromosyon",
    description:
      "Logo baskılı promosyon powerbank çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon powerbank modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Powerbank Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Powerbank | FirmaPromosyon",
    description:
      "Logo baskılı promosyon powerbank çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Powerbank",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Powerbank",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon powerbank modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon powerbank çeşitleri.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

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
          <span className="font-semibold text-white">Promosyon Powerbank</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Logo Baskılı Promosyon Powerbank Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Müşteri hediyeleri, çalışan kitleri ve etkinlik dağıtımları için
            powerbank seçeneklerini kapasite, bağlantı ve şarj özelliklerine göre
            karşılaştırın. Ürün fiyatları baskı hariçtir; model kodu, adet ve
            logonuzla baskılı toplu sipariş teklifi isteyin.
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

      <PowerbankProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal Hediyeniz İçin Powerbank Nasıl Seçilir?</h2>
            <p>Üstteki filtrelerden kapasite ve şarj özelliklerini seçerek modelleri daraltabilirsiniz. Seçim yaparken hedef kitlenizin kullandığı telefonları, taşıma alışkanlıklarını ve kişi başına ayırdığınız bütçeyi birlikte değerlendirin.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Powerbank seçiminde kapasite ve özellik karşılaştırması</caption>
                <thead className="text-white"><tr>
                  <th scope="col" className="border-b border-white/20 p-3">Seçenek</th>
                  <th scope="col" className="border-b border-white/20 p-3">Seçim amacı</th>
                  <th scope="col" className="border-b border-white/20 p-3">Kontrol edilecek bilgi</th>
                </tr></thead>
                <tbody>
                  {[
                    ["5.000 mAh", "Gün içinde ek enerji ihtiyacı", "Ölçüler, ağırlık ve çıkış gücü"],
                    ["10.000 mAh", "Günlük kullanım ve kurumsal hediye", "Bağlantılar, şarj gücü ve taşıma boyutu"],
                    ["20.000 mAh", "Daha yüksek enerji kapasitesi ihtiyacı", "Ağırlık, dolum süresi ve çıkış özellikleri"],
                    ["Kablosuz / manyetik", "Kablo kullanmadan şarj tercihi", "Telefon, kılıf ve kablosuz şarj uyumluluğu"],
                    ["Dahili kablolu", "Kabloyu ürünle birlikte taşıma kolaylığı", "Kablo uçları ve desteklenen cihazlar"],
                  ].map(([option, purpose, check]) => (
                    <tr key={option}>
                      <th scope="row" className="border-b border-white/10 p-3 font-semibold text-white">{option}</th>
                      <td className="border-b border-white/10 p-3">{purpose}</td>
                      <td className="border-b border-white/10 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Kapasite ile şarj özelliklerini ayrı değerlendirin: aynı kapasitedeki iki modelin bağlantıları, çıkış gücü ve logo uygulama alanı farklı olabilir. Kesin özellikler için seçtiğiniz ürünün detaylarını inceleyin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Type-C, Hızlı Şarj ve Kablosuz Uyumluluk</h2>
            <p>Type-C bağlantısının bulunması, tek başına hızlı şarj veya USB Power Delivery desteği anlamına gelmez. Teklif karşılaştırırken ürünün desteklediği şarj protokolünü ve çıkış gücünü ayrıca kontrol edin. Type-C portunun giriş, çıkış veya her iki işlev için kullanılıp kullanılmadığını ürün bilgisinden teyit edin.</p>
            <p>MagSafe uyumlu veya wireless olarak sunulan modellerde telefonun ve kullanılan kılıfın uyumluluğunu kontrol edin. Manyetik tutunma özelliği ile kablosuz şarj desteğini birlikte değerlendirin; her modelin aynı cihazlarda aynı şarj performansını sunduğunu varsaymayın.</p>
            <p>Toplu dağıtımda farklı telefon kullanan kişilere hediye verecekseniz, teklif talebinizde hedef cihazları belirtin. Dahili kablo uçları, ek kablo ihtiyacı ve aynı anda kullanılabilen çıkışlar seçim sırasında netleştirilebilir.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Powerbank Fiyatları Neleri Kapsar?</h2>
            <p>Fiyat bulunan ürün kartlarında tutarlar TL + KDV olarak, baskı hariç gösterilir. Fiyatı bulunmayan modeller için güncel fiyat ve stok bilgisi isteyebilirsiniz. Logo baskılı siparişin maliyeti ürün bedeli, seçilen baskı uygulaması ve KDV dikkate alınarak hesaplanır.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-white">Teknik özellikler:</strong> Kapasite, şarj gücü, kablosuz destek, dahili kablo ve gövde yapısı.</li>
              <li><strong className="text-white">Logo uygulaması:</strong> Baskı tekniği, uygulama alanı, renk sayısı ve baskı yönü.</li>
              <li><strong className="text-white">Sipariş kapsamı:</strong> Adet, stok, kutulama ve varsa ek talepler.</li>
            </ul>
            <p>İki teklifi karşılaştırırken yalnızca mAh değerine bakmayın. Aynı teknik özelliklerin, baskı kapsamının, kutulamanın ve KDV koşullarının tekliflerde yer aldığını kontrol edin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Powerbank Üzerine Logo Baskısı</h2>
            <p>UV, tampon veya lazer uygulaması ürünün gövde malzemesine ve baskıya uygun yüzeyine göre değerlendirilir. Işıklı logo özelliği yalnızca bunu destekleyen modeller için söz konusudur. Model detayında belirtilmeyen bir uygulamanın tüm ürünlerde yapılabildiğini varsaymayın.</p>
            <p>Logo yerleşimini seçerken portların, göstergenin ve varsa kablosuz şarj yüzeyinin konumunu dikkate alın. Mümkünse vektörel logo dosyanızı paylaşarak uygulanabilir baskı ölçüsünü ve yerleşimini sipariş öncesinde netleştirin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplu Powerbank Siparişi İçin Teklif Alın</h2>
            <p>İhtiyacınıza uygun teklif hazırlanabilmesi için şu bilgileri paylaşabilirsiniz:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Model kodu, kapasite ve tercih ettiğiniz gövde rengi.</li>
              <li>Sipariş adedi ve gerekli bağlantı veya şarj özellikleri.</li>
              <li>Logo dosyası, baskı tercihi ve varsa kutulama talebi.</li>
              <li>Teslimat ili ve hedef teslim tarihi.</li>
            </ol>
            <p>Minimum adet ve hazırlık süresi modele, stok durumuna ve baskı planına göre belirlenir. Etkinlik veya çalışan dağıtımı için sipariş verirken teslim süresini önceden teyit edin.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Powerbank İçin Kurumsal Teklif Al</Link>
            <p>Hediye paketinizi tamamlamak için <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">logo baskılı kalem</Link>, <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">kurumsal defter</Link> ve <Link href="/promosyon-usb-bellek" className="font-semibold text-white underline underline-offset-4">promosyon USB bellek</Link> seçeneklerini inceleyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Powerbank Hakkında Sık Sorulan Sorular
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}