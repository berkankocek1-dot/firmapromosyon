import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import UsbProductGrid from "./UsbProductGrid";
import { sortProductsByCode } from "@/data/productSorting";


const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-usb-bellek`;
const CATEGORY = "USB Bellek";
const PAGE_TITLE = "Promosyon USB Bellek Modelleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı metal, ahşap, deri ve kart USB bellek modellerini karşılaştırın. Kapasite, baskı ve toptan sipariş seçenekleri için güncel teklif alın.";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const faqItems = [
  {
    "question": "Promosyon USB bellek minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi model, kapasite, stok ve logo uygulamasına göre değişir. Ürün kodunu, kapasite isteğinizi ve toplam adedi paylaşarak baskılı veya baskısız sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "USB bellek fiyatlarına logo baskısı dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında KDV bilgisi ayrıca yer alır. Ürün, kapasite ve baskı kapsamını teklif aşamasında teyit edin; tek veya çift yön logo, ambalaj, varsa veri yükleme ve sevkiyat taleplerini ayrı belirtin. Fiyatı bulunmayan modeller için güncel teklif isteyin."
  },
  {
    "question": "Promosyon USB bellek kapasitesi nasıl seçilir?",
    "answer": "Paylaşacağınız katalog, sunum, fotoğraf veya videoların toplam boyutunu hesaplayarak başlayın. Kullanıcıların kendi dosyalarına ayıracağı alanı da düşünün. Kullanılabilir alan belirtilen kapasiteden farklı görünebilir; kapasite ve dosya ihtiyaçlarını sipariş öncesinde birlikte değerlendirin."
  },
  {
    "question": "USB 3.0 ve yüksek kapasite aynı şeyi mi ifade eder?",
    "answer": "Hayır. Kapasite dosya depolama alanını, USB sürümü ise veri bağlantı standardını ifade eder. Yüksek kapasiteli olması tek başına daha hızlı aktarım anlamına gelmez. Gerçek okuma ve yazma performansı bellek ve bağlandığı cihazın özelliklerine bağlıdır; model için teknik bilgi isteyin."
  },
  {
    "question": "Metal, ahşap ve kart USB belleğe hangi baskı uygulanır?",
    "answer": "Yöntem gövde malzemesi, yüzey kaplaması ve logo alanına göre belirlenir. Uygun metal yüzeyde lazer kazıma, renkli tasarımlarda ise yüzeye uygun UV veya tampon baskı değerlendirilebilir. Her yöntem her modele uygulanamaz; kart modellerinde kullanılabilir alanı ve çift yön uygunluğunu ayrıca teyit edin."
  },
  {
    "question": "USB belleklerin içine katalog veya sunum yükletilebilir mi?",
    "answer": "Siparişinizde dosya yükleme talebiniz varsa yapılabilirliğini, maliyetini ve süreye etkisini teklif aşamasında sorun. Yüklenecek dosyaların son sürümünü, klasör düzenini ve toplam boyutunu belirtin. Veri yüklemenin standart ürün bedeline dahil olduğunu varsaymayın."
  },
  {
    "question": "Toplu USB bellek siparişi ne kadar sürede hazırlanır?",
    "answer": "Stok, kapasite seçeneği, adet, logo onayı, uygulama yöntemi ve varsa dosya yükleme veya kutulama talebi süreyi etkiler. Etkinlik tarihinizi ve teslimat adresini paylaşın; net termin ve toplam bedeli sipariş öncesinde teyit edin."
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
        alt: "Promosyon USB Bellek Modelleri",
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

export default function UsbPage() {
  const usbProducts = sortProductsByCode(visibleProducts.filter((p) => p.category === CATEGORY));

  const itemListElement = usbProducts.map((product, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${product.slug}`,
    name: product.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-5 py-6">
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
              name: "Promosyon USB Bellek",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon USB Bellek",
          url: PAGE_URL,
          description: PAGE_DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: usbProducts.length,
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

      <section className="rounded-3xl bg-black px-6 py-5 text-white md:px-8 md:py-6">
        <nav className="mb-3 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">Promosyon USB Bellek</span>
        </nav>

        <header>
          <h1 className="mb-2 text-3xl font-extrabold text-white md:text-4xl">
            Promosyon USB Bellek
          </h1>

          <p className="max-w-3xl text-sm leading-6 text-gray-200">Metal, ahşap, deri ve kart USB modellerini inceleyin. Kapasite, bağlantı ve logo alanını değerlendirerek kurumsal toplu sipariş için teklif alın.</p>

          

          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler?kategori=USB%20Bellek"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ürünlerde Filtrele
            </Link>
          </div>
        </header>
      </section>

      <UsbProductGrid products={usbProducts} />

      {usbProducts.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kullanım Amacına Göre Promosyon USB Bellek Seçimi</h2>
            <p>
              Fuar kataloğu, bayi sunumu veya kurumsal hediye için USB bellek
              seçerken önce dosya ihtiyacını ve kullanılacak cihazları belirleyin.
              Gövde tasarımı, kapasite ve bağlantı özellikleri farklı konulardır;
              yalnızca görünüşe veya kapasiteye göre karar vermeyin.
            </p>
            <p>
              Yukarıdaki filtrelerle metal, ahşap, deri, kart USB, özel tasarım ve
              USB 3.0 olarak belirtilen modelleri inceleyebilirsiniz. Kapasite,
              stok ve teknik özellikler ürün bazında değişebilir; istediğiniz
              seçeneğin ilgili modelde mevcut olduğunu teklif öncesinde teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">USB Bellek Gövde ve Tasarımlarını Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">USB bellek gövde grupları, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Metal gövde", "Müşteri, bayi ve çalışan hediyeleri", "Logo alanı, kaplama ve kapak ya da döner mekanizma"],
                    ["Ahşap gövde", "Malzeme görünümüne önem verilen setler", "Yüzey dokusu, logo uygulaması ve kutu uyumu"],
                    ["Deri detaylı", "Kurumsal hediye paketleri", "Gerçek malzeme bilgisi, kapanış ve uygulama yüzeyi"],
                    ["Kart USB", "Katalog veya tasarımla birlikte sunulan hediyeler", "Kart ölçüsü, baskı alanı ve bağlantının açılma biçimi"],
                    ["Özel tasarım", "Kampanya veya sektöre uygun hediyeler", "Ürün işlevi, logo konumu ve hazır model / özel üretim ayrımı"],
                  ].map(([model, usage, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{usage}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Gövde malzemesi tek başına depolama kapasitesini veya aktarım
              performansını göstermez. Her modelin teknik özelliklerini ayrıca inceleyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kapasite, Bağlantı ve Aktarım İhtiyacını Ayırın</h2>
            <p>
              Kapasiteyi belirlerken paylaşılacak dosyaların toplam boyutunu
              hesaplayın; sonradan eklenecek içerik ve kullanıcının kendi
              dosyaları için de alan düşünün. İstediğiniz kapasitenin seçilen
              gövde ve stok seçeneğiyle sunulup sunulmadığını sorun.
            </p>
            <p>
              USB sürümü ile bağlantı ucunun biçimi aynı şey değildir. Cihazın
              bağlantı noktasıyla ürünün fiziksel uyumunu kontrol edin. USB 3.0
              ifadesini tüm kullanım koşullarında sabit bir hız garantisi olarak
              değerlendirmeyin; gerçek okuma ve yazma değerleri modelin ve
              kullanılan cihazın özelliklerine bağlıdır.
            </p>
            <p>
              Katalog veya sunum yükleme talebiniz varsa dosyaların son sürümünü,
              klasör yapısını ve toplam boyutunu belirtin. Bu hizmetin sunulup
              sunulmadığını, maliyetini ve teslim süresine etkisini ayrıca
              öğrenin. Örnek dosyaların hedef cihazlarda açılabildiğini kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskısı ve Uygulama Alanı</h2>
            <p>
              Uygun metal yüzeylerde lazer kazıma; renkli logo ve tasarımlarda
              ise yüzeye uygun UV, tampon veya başka bir uygulama
              değerlendirilebilir. Ahşap doku, kaplama, deri detay ve kart
              yüzeyi aynı yöntemle aynı sonucu vermeyebilir.
            </p>
            <p>
              Logonun yerleşimini gerçek uygulama ölçüsünde değerlendirin.
              Kapak, döner parça veya bağlantı mekanizması baskı alanını
              sınırlandırabilir. Çift yön ya da ışıklı logo talebinde her modelin
              aynı uygulamaya uygun olduğunu varsaymayın.
            </p>
            <p>
              Mümkünse vektörel PDF, AI, EPS veya SVG logo dosyası paylaşın.
              Küçük yazı ve ince çizgilerin okunabilirliğini, logonun rengini
              ve ürün üzerindeki konumunu üretim öncesinde netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon USB Bellek Fiyatlarını Karşılaştırırken</h2>
            <p>
              Aynı gövdeye sahip iki ürünün kapasitesi veya teknik özelliği
              farklı olabilir. Teklifleri aynı ürün kodu, kapasite, adet ve
              uygulama kapsamıyla karşılaştırın. Ürün kartında fiyat verilse
              bile istediğiniz seçeneğin ve logo uygulamasının bu tutara
              dahil olup olmadığını teyit edin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Gövde modeli, kapasite ve bağlantı özellikleri.</li>
              <li>Toplam adet, renk dağılımı ve stok durumu.</li>
              <li>Logo yöntemi, tek veya çift yön uygulama.</li>
              <li>Varsa dosya yükleme, özel kutu ve ayrı paketleme.</li>
              <li>KDV, sevkiyat ve teslimat kapsamı.</li>
            </ul>
            <p>
              Fiyatı bulunmayan modeller için güncel teklif isteyin.
              Yalnızca ürün birim fiyatını değil, baskılı siparişin toplam
              tutarını ve net teslim süresini birlikte değerlendirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toptan USB Bellek Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, kapasiteyi, rengi ve adedi belirtin.</li>
              <li>Logo dosyanızı ve istediğiniz uygulama konumunu paylaşın.</li>
              <li>Varsa dosya yükleme, kutu ve paketleme talebini ekleyin.</li>
              <li>Etkinlik tarihinizi ve teslimat adresini bildirin.</li>
              <li>Stok, logo yerleşimi, teknik özellik, toplam bedel ve termini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Hediye setinizi{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>,{" "}
              <Link href="/promosyon-ajanda" className="font-semibold text-white underline underline-offset-4">ajanda</Link>,{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter</Link>{" "}
              veya{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-white underline underline-offset-4">anahtarlık</Link>{" "}
              ile birlikte planlayabilirsiniz. Ürün seçimini hedef kitle ve
              dağıtım amacına göre yapmak için{" "}
              <Link href="/rehber/promosyon-urunleri-secim-rehberi" className="font-semibold text-white underline underline-offset-4">promosyon ürünleri seçim rehberini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              USB Bellek Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon USB Bellek Hakkında Sık Sorulan Sorular
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