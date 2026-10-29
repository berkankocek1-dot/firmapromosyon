import Link from "next/link";
import TeknolojiProductGrid from "./TeknolojiProductGrid";
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

const CATEGORY = "Teknolojik Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-teknolojik-urunler`;

const PAGE_TITLE = "Promosyon Teknolojik Ürünler | Logo Baskılı Modeller";
const PAGE_DESCRIPTION = "Logo baskılı şarj kablosu, Bluetooth hoparlör, wireless şarj ve telefon standı modellerini karşılaştırın. Cihaz uyumu ve toptan sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Teknolojik promosyon ürünleri arasında hangi seçenekler var?",
    "answer": "Bu kategoride çoklu şarj kabloları, kutulu kablo setleri, Type-C çoklayıcı, Bluetooth hoparlörler, wireless şarj cihazları, masaüstü telefon standları ve araç içi tutucular bulunur. Üstteki filtrelerle ihtiyacınıza uygun grubu seçebilirsiniz."
  },
  {
    "question": "Çoklu şarj kabloları her telefonla çalışır mı?",
    "answer": "Bağlantı uçları telefonun girişine uygun olmalıdır. Örneğin KBL-170 için iOS, Micro USB ve Type-C bağlantıları belirtilir. Şarj gücü, veri aktarımı ve hızlı şarj desteği ayrı özelliklerdir; seçilen model ve cihaz için teklif aşamasında teyit edilir."
  },
  {
    "question": "Type-C çoklayıcı her bilgisayarda görüntü aktarır mı?",
    "answer": "KBL-160 için Type-C ana bağlantı ve 8 fonksiyon belirtilir. Bilgisayarın Type-C portunun desteklediği veri, görüntü ve güç işlevleri kontrol edilmelidir. Kesin port listesi, HDMI çözünürlüğü, USB sürümü ve şarj gücü sipariş öncesinde netleştirilir."
  },
  {
    "question": "Wireless veya MagSafe ürünler her telefonda aynı güçte şarj eder mi?",
    "answer": "Hayır. Kablosuz şarj uyumu ve elde edilecek güç telefon, kılıf, kablo ve güç kaynağına bağlıdır. Belirtilen 10 W, 15 W veya 22,5 W değerini her cihaz için aynı hız garantisi olarak değerlendirmeyin. Adaptörün teslim kapsamını ayrıca teyit edin."
  },
  {
    "question": "Telefon standlarının tamamında şarj özelliği var mı?",
    "answer": "Hayır. TT-120 masaüstü telefon standı, TT-190 metal ayarlanabilir stand ve TT-210 aynalı stand için kablosuz şarj özelliği belirtilmez. TT-110 araç içi tutucuda da şarj desteği belirtilmemiştir. Stand işleviyle şarj işlevini ayrı kontrol edin."
  },
  {
    "question": "Teknolojik ürün fiyatlarına logo baskısı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, alanı ve bedeli seçilen model ve tasarıma göre tekliflendirilir. Işıklı logo, lazer veya UV gibi uygulamaların uygunluğunu ürün bazında teyit edin."
  },
  {
    "question": "Toplu teknolojik promosyon siparişinde hangi bilgiler gerekli?",
    "answer": "Ürün kodu, adet, renk, logo dosyası ve kullanım ihtiyacınızı paylaşın. Elektronik aksesuarlar için cihaz modelini ve gerekli bağlantıları belirtin. Minimum adet, stok, kutu ve adaptör kapsamı, toplam bedel ve teslim süresi teklif aşamasında netleştirilir."
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
        alt: "Promosyon Teknolojik Ürünler",
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
              name: "Teknolojik Ürünler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Teknolojik Ürünler",
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
            Promosyon Teknolojik Ürünler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Teknolojik Ürünler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Şarj kabloları, Bluetooth hoparlörler, wireless şarj cihazları
            ve telefon standlarını kullanım ihtiyacına göre karşılaştırın.
            Cihaz uyumu ve logo uygulamasını netleştirerek toplu sipariş için teklif alın.
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

      <TeknolojiProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Teknolojik Promosyon Ürünü Nasıl Seçilir?</h2>
            <p>
              Hediye seçimini alıcının kullanacağı cihaz ve ihtiyaca göre yapın.
              Çantada taşınacak çoklu kablo, ofiste kullanılacak hoparlör,
              masaüstü şarj standı ve araç içi tutucu farklı işlevler sunar.
              Üstteki filtrelerle ürün grubunu daraltıp teknik bilgileri model bazında karşılaştırın.
            </p>
            <p>
              Şarj, ses ve stand işlevleri tek üründe birleşebilir; ancak her
              model bütün özellikleri taşımaz. Telefon standı bulunması şarj
              desteği, Type-C bağlantı bulunması da tek başına görüntü aktarımı
              veya belirli bir şarj hızı anlamına gelmez.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Teknolojik Ürün Gruplarını Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Teknolojik promosyon ürün grupları, örnek modeller ve kontrol noktaları</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Ürün grubu</th>
                    <th scope="col" className="px-4 py-3">Örnek modeller</th>
                    <th scope="col" className="px-4 py-3">Sipariş öncesinde kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Kutulu ve çoklu şarj kabloları", "KBL-100, KBL-130, KBL-170", "Uç listesi, cihaz girişi, şarj gücü ve veri aktarımı"],
                    ["Type-C çoklayıcı", "KBL-160", "Bilgisayar portu desteği, kesin port listesi ve görüntü aktarımı"],
                    ["Bluetooth hoparlör", "SPK-120, SPK-140, SPK-150", "Bağlantılar, ses gücü, batarya ve kullanım süresi"],
                    ["Wireless şarj ve hoparlör", "SPK-160, SPK-170, SPK-180", "Şarj uyumu, güç kaynağı ve ses özellikleri"],
                    ["Wireless şarj standı", "TT-160, TT-170, TT-180", "Cihaz, kılıf, giriş ve uygun adaptör"],
                    ["Masaüstü telefon standı", "TT-120, TT-190, TT-210", "Cihaz ölçüsü, kılıf ve yerleşim dengesi"],
                    ["Araç içi telefon tutucu", "TT-100, TT-110, TT-200", "Montaj noktası, telefon/kılıf uyumu ve varsa şarj desteği"],
                  ].map(([group, models, detail]) => (
                    <tr key={group}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{group}</th>
                      <td className="px-4 py-4">{models}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Çoklu Kablo ve Type-C Çoklayıcı Seçimi</h2>
            <p>
              KBL-100, KBL-110 ve KBL-120 kutulu kablo setleridir. Taşımaya yönelik
              KBL-130 modelinde EVA kutu ve anahtarlık halkası, KBL-150 modelinde
              anahtarlık halkası belirtilir. Sunum biçiminin yanında kutudaki
              uç ve adaptör listesini de kontrol edin.
            </p>
            <p>
              KBL-170 için iOS, Micro USB ve Type-C bağlantıları belirtilir.
              Bu bilgi veri aktarımı veya hızlı şarj protokolünü tek başına
              doğrulamaz. Cihaz girişini, kullanılacak güç kaynağını ve ihtiyacınız
              olan şarj veya veri işlevini teklif sırasında paylaşın.
            </p>
            <p>
              KBL-160, Type-C ana bağlantılı 8 fonksiyonlu çoklayıcıdır.
              Bilgisayarın port desteği ile çoklayıcının kesin port listesi,
              HDMI çözünürlüğü, USB sürümü ve şarj gücü birlikte teyit edilmelidir.
              Kablo seti ile çoklayıcıyı aynı ürün işlevi olarak değerlendirmeyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Wireless Şarj Gücü, Adaptör ve Cihaz Uyumu</h2>
            <p>
              TT-160 ve TT-180 için 15 W kablosuz şarj ve Type-C giriş belirtilir.
              TT-170 ürün bilgisinde 10 W ve Micro Input (1 A) ifadeleri birlikte
              yer alır; uygun güç kaynağı ve elde edilecek şarj gücü sipariş
              öncesinde netleştirilmelidir. Listelenen güç değerini her telefonda
              aynı hız garantisi olarak değerlendirmeyin.
            </p>
            <p>
              TT-130 ve TT-140 şarj istasyonlarında telefon, saat ve kulaklık
              modeliyle uyumu, eş zamanlı cihaz sayısını ve adaptör kapsamını
              kontrol edin. SPK-160, SPK-170 ve SPK-180 gibi şarj ile hoparlörü
              birleştiren modellerde de güç ve ses özelliklerini ayrı teyit edin.
            </p>
            <p>
              Taşınabilir enerji ihtiyacı için ayrıca{" "}
              <Link href="/promosyon-powerbank" className="font-semibold text-white underline underline-offset-4">powerbank modellerini</Link>{" "}
              inceleyebilirsiniz. Wireless şarj cihazında dahili batarya
              bulunduğunu varsaymayın; elektrik bağlantısı ve teslim kapsamını kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Hoparlörlerde Ses Gücü ve Kullanım Süresi</h2>
            <p>
              SPK-120 için Bluetooth 5.3, 800 mAh batarya ve TF, FM, USB, BT, AUX
              destekleri belirtilir. SPK-140 için 3 W ses gücü; SPK-150 için
              Bluetooth 5.0, 400 mAh batarya ve Micro USB şarj girişi yer alır.
              Bu özellikler bütün hoparlörlere ortak değildir.
            </p>
            <p>
              Batarya kapasitesi, ses gücü ve çalma süresi farklı bilgilerdir.
              SPK-150 için belirtilen 3 saatlik çalma süresi kullanım koşullarına
              göre değişebilir. Ses seviyesi, bağlantı ihtiyacı, şarj kablosu
              ve ambalajı seçilen model için kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Telefon Standı ve Araç İçi Tutucularda İşlev Farkı</h2>
            <p>
              TT-120 masaüstü stand, TT-190 metal ayarlanabilir stand ve TT-210
              aynalı stand olarak sunulur; bu modellerde kablosuz şarj özelliği
              belirtilmez. Telefon ve kılıf ölçüsünü, taşıma alanını ve dengeyi kontrol edin.
            </p>
            <p>
              Araç içinde TT-110 için şarj desteği belirtilmez. TT-100 ve TT-200
              MagSafe kablosuz şarj özellikli tutuculardır. Montaj noktasını,
              telefon ve kılıf uyumunu, kablo ve güç kaynağını birlikte değerlendirin.
              Manyetik tutunma ile şarj uyumluluğunu ayrı teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Uygulaması ve Teknolojik Ürün Fiyatları</h2>
            <p>
              Ürün kartlarında fiyat gösterilen tutarlar baskı hariçtir;
              KDV ayrıca belirtilir. Logo yöntemi ve alanı gövdeye ve tasarıma
              göre değişir. SPK-120 için lazer kazıma, TT-180 için UV renkli
              baskı belirtilirken ışıklı logo modellerinin uygulaması ayrıca değerlendirilir.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model kodu, teknik özellikler ve cihaz uyumu.</li>
              <li>Logo yöntemi, uygulama alanı, renk ve sipariş adedi.</li>
              <li>Kablo, adaptör, kutu ve diğer aksesuarların teslim kapsamı.</li>
              <li>Ek paketleme, sevkiyat ve KDV dahil toplam teklif.</li>
            </ul>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              Işıklı logo, renkli baskı veya kazıma beklentinizi ürün koduyla
              birlikte belirtin; uygulama konumunu ve ölçüsünü teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Teknolojik Promosyon Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Kullanım alanını, ürün kodunu, rengi ve adedi belirtin.</li>
              <li>Cihaz modelini, bağlantı ve şarj ihtiyacını paylaşın.</li>
              <li>Teknik özellikleri, kablo ve adaptör dahil teslim kapsamını teyit edin.</li>
              <li>Logo dosyanızı, baskı konumunu ve paketleme talebinizi iletin.</li>
              <li>Stok, minimum adet, tasarım yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Depolama hediyesi için{" "}
              <Link href="/promosyon-usb-bellek" className="font-semibold text-white underline underline-offset-4">USB bellekleri</Link>,{" "}
              birden fazla ürünü birlikte sunmak için{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-white underline underline-offset-4">VIP hediye setlerini</Link>{" "}
              de karşılaştırabilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Teknolojik Ürünler İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Teknolojik Promosyon Ürünleri Hakkında Sık Sorulan Sorular</h2>
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
