import Image from "next/image";
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

      <section className="rounded-2xl bg-gray-50 px-6 py-5 text-black md:px-8 md:py-6 border border-gray-200">
        <nav className="mb-3 text-sm text-gray-600">
          <Link href="/" className="hover:text-black hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-black hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">Promosyon USB Bellek</span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon USB Bellek
          </h1>

          <p className="max-w-3xl text-sm leading-6 text-gray-600">Metal, ahşap, deri ve kart USB modellerini inceleyin. Kapasite, bağlantı ve logo alanını değerlendirerek kurumsal toplu sipariş için teklif alın.</p>



          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler?kategori=USB%20Bellek"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Ürünlerde Filtrele
            </Link>
          </div>
        </div>{usbProducts[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={usbProducts[0].image} alt={usbProducts[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <UsbProductGrid products={usbProducts} />

      {usbProducts.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kullanım Amacına Göre Promosyon USB Bellek Seçimi</h2>
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
            <h2 className="text-2xl font-bold text-black">USB Bellek Gövde ve Tasarımlarını Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">USB bellek gövde grupları, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white text-black">
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
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{usage}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Gövde malzemesi tek başına depolama kapasitesini veya aktarım
              performansını göstermez. Her modelin teknik özelliklerini ayrıca inceleyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kapasite, Bağlantı ve Aktarım İhtiyacını Ayırın</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskısı ve Uygulama Alanı</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon USB Bellek Fiyatlarını Karşılaştırırken</h2>
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
            <h2 className="text-2xl font-bold text-black">Toptan USB Bellek Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, kapasiteyi, rengi ve adedi belirtin.</li>
              <li>Logo dosyanızı ve istediğiniz uygulama konumunu paylaşın.</li>
              <li>Varsa dosya yükleme, kutu ve paketleme talebini ekleyin.</li>
              <li>Etkinlik tarihinizi ve teslimat adresini bildirin.</li>
              <li>Stok, logo yerleşimi, teknik özellik, toplam bedel ve termini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Hediye setinizi{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-black underline underline-offset-4">kalem</Link>,{" "}
              <Link href="/promosyon-ajanda" className="font-semibold text-black underline underline-offset-4">ajanda</Link>,{" "}
              <Link href="/promosyon-defter" className="font-semibold text-black underline underline-offset-4">defter</Link>{" "}
              veya{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-black underline underline-offset-4">anahtarlık</Link>{" "}
              ile birlikte planlayabilirsiniz. Ürün seçimini hedef kitle ve
              dağıtım amacına göre yapmak için{" "}
              <Link href="/rehber/promosyon-urunleri-secim-rehberi" className="font-semibold text-black underline underline-offset-4">promosyon ürünleri seçim rehberini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              USB Bellek Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">
              Promosyon USB Bellek Hakkında Sık Sorulan Sorular
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-black">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <section aria-label="USB bellek alt kategorileri" className="mt-12 rounded-2xl border border-gray-200 !bg-white p-5">
        <h2 className="text-xl font-bold !text-black">USB Bellek Türlerine Göre İnceleyin</h2>
        <Link href="/promosyon-metal-usb-bellek" className="mt-3 inline-block font-semibold !text-black underline underline-offset-4">Metal USB Bellek Modellerini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></Link>
      </section>
      <section aria-labelledby="usb-bellek-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="usb-bellek-secim-rehberi-baslik" className="text-xl font-bold !text-black">USB Bellek Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, bağlantı, aktarım performansı ve logo alanını ayrı değerlendirin; numune ve toplu sipariş kontrolünü planlayın.</p>
        <Link href="/rehber/promosyon-usb-bellek-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-usb-bellek-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">USB Bellek Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon USB bellek seçerken kapasiteyi, bağlantıyı, gerçek aktarım hızını ve logo alanını ayrı değerlendirin. Numune, dosya yükleme ve toplu siparişinizi planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
