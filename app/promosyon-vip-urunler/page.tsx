import Link from "next/link";
import VipProductGrid from "./VipProductGrid";
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

const CATEGORY = "VIP Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-vip-urunler`;

const PAGE_TITLE = "Promosyon VIP Hediye Setleri ve Kutuları | Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı VIP hediye setlerini defter, termos, powerbank ve USB içerikleriyle karşılaştırın. Ayrı set kutuları ve toptan kurumsal sipariş için teklif alın.";
const faqItems = [
  {
    "question": "VIP hediye seti ile set kutusu arasındaki fark nedir?",
    "answer": "Hazır VIP setlerinde ürün açıklamasında belirtilen parçalar birlikte sunulur. VIP-470, VIP-480, VIP-485, VIP-490, VIP-500, VIP-510 ve VIP-520 ise kutu ürünleridir; içine yerleştirilecek hediyeler ayrıca seçilir ve fiyatlandırılır. Dolgu ve iç sünger kapsamını da teyit edin."
  },
  {
    "question": "Her VIP hediye setinde defter, termos ve powerbank var mı?",
    "answer": "Hayır. Örneğin VIP-410 defter ve roller kalem; VIP-110 defter, 300 ml termos, roller kalem ve anahtarlık içerir. VIP-160 ise defter, roller kalem, 500 ml termos ve 10.000 mAh powerbank ile sunulur. Her modelin kendi parça listesini esas alın."
  },
  {
    "question": "VIP setlerdeki MagSafe ürünler her telefonla çalışır mı?",
    "answer": "Manyetik tutunma ve varsa kablosuz şarj desteği telefon, kılıf ve seçilen ürünün özelliklerine bağlıdır. VIP-140 içindeki MagSafe cüzdan ile VIP-250 içindeki MagSafe powerbank farklı ürünlerdir. Cüzdanı şarj ürünü olarak değerlendirmeyin; cihaz uyumunu teklif aşamasında teyit edin."
  },
  {
    "question": "Setin bütün parçalarına ve kutusuna logo uygulanır mı?",
    "answer": "Logo uygulanacak parçalar ve kutu ayrı ayrı belirtilmelidir. Yöntem, alan ve bedel her parçanın yüzeyine ve tasarıma göre tekliflendirilir. Bir ürüne baskı yapılması bütün parçaların ve kutunun baskılı fiyata dahil olduğu anlamına gelmez."
  },
  {
    "question": "VIP setlerde termo deri ifadesi gerçek deri anlamına gelir mi?",
    "answer": "Termo deri ifadesi tek başına gerçek deri anlamına gelmez. Defter, cüzdan veya anahtarlıkta malzeme talebiniz varsa seçtiğiniz modelin ürün bilgisini kontrol edin ve teklif aşamasında ayrıca teyit edin."
  },
  {
    "question": "VIP hediye seti fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif isteyin. Set içeriği, kutu, logo uygulanacak parçalar, varsa ek paketleme ve sevkiyatı aynı kapsamda karşılaştırın."
  },
  {
    "question": "Toplu VIP set siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi seçilen setin stok durumu, adet, logo onayı ve paketleme kapsamına göre teklif aşamasında netleştirilir. Model kodunu, miktarı, logo dosyanızı, teslimat adresini ve varsa etkinlik tarihinizi paylaşın. İçerik değişikliği taleplerinin uygunluğu ayrıca teyit edilir."
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
        alt: "Promosyon VIP Ürünler",
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
              name: "Promosyon VIP Ürünler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon VIP Ürünler",
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
            Promosyon VIP Ürünler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon VIP Ürünler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Defterli, termoslu ve teknolojik VIP hediye setlerini içeriklerine
            göre karşılaştırın. Hazır setleri veya ürünleri ayrıca seçilen set
            kutularını inceleyerek logo baskılı toplu sipariş için teklif alın.
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

      <VipProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal VIP Hediye Seti Nasıl Seçilir?</h2>
            <p>
              Çalışan karşılama paketi, müşteri ziyareti veya bayi toplantısı
              için set seçerken alıcının kullanacağı parçaları belirleyin.
              Defter ve kalemden oluşan bir set ile termos, powerbank ve hoparlör
              içeren bir setin kapsamı farklıdır. Karşılaştırmayı ürün kodu ve
              tam içerik listesi üzerinden yapın.
            </p>
            <p>
              Üstteki filtrelerle defter ve kalem, teknoloji, termos, anahtarlık,
              MagSafe veya set kutusu seçeneklerini daraltabilirsiniz.
              Bir set birden fazla gruba girebilir; filtre adı yerine ürün
              açıklamasındaki kapasite, ölçü ve parça listesini esas alın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">VIP Set İçeriklerinden Örnekler</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Seçili VIP modellerinin ürün bilgilerinde belirtilen set içerikleri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Belirtilen içerik</th>
                    <th scope="col" className="px-4 py-3">Kontrol noktası</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["VIP-410", "15 x 21 cm termo deri defter ve metal roller kalem", "Defter iç düzeni ve logo yerleşimi"],
                    ["VIP-355", "14,5 x 21 cm termo deri defter, metal roller kalem, derili metal anahtarlık", "Kapak ve anahtarlık uygulamalarının ayrı kapsamı"],
                    ["VIP-110", "14,5 x 21 cm defter, 300 ml çelik termos, metal roller kalem, deri-metal anahtarlık", "Termos kapasitesi ve parça bazında baskı"],
                    ["VIP-160", "13 x 21 cm defter, metal roller kalem, 500 ml termos, 10.000 mAh powerbank", "Şarj uyumu, defter özellikleri ve ambalaj"],
                    ["VIP-240", "Roller kalem, 32 GB USB bellek, 10.000 mAh powerbank", "USB bağlantısı ve powerbank çıkışları"],
                    ["VIP-250", "Roller kalem, 440 ml termos, 10.000 mAh MagSafe powerbank", "Telefon, kılıf ve kablosuz şarj uyumu"],
                    ["VIP-400", "Çoklu şarj kablosu, 400 ml çelik termos, 10.000 mAh MagSafe powerbank, Bluetooth hoparlör", "Kablo uçları ve cihaz uyumu"],
                  ].map(([model, contents, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{contents}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-gray-200">
              Tablo seçili modelleri karşılaştırır; tüm seçenekler ürün listesinde
              yer alır. Aynı parça sayısına sahip setlerde bile defter ölçüsü,
              termos hacmi, powerbank veya USB kapasitesi farklı olabilir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Hazır Hediye Seti ile Ayrı Set Kutusunu Ayırın</h2>
            <p>
              VIP-470, VIP-480, VIP-485, VIP-490, VIP-500, VIP-510 ve VIP-520
              kutu ürünleridir. Kutunun içine yerleştirilecek defter, kalem,
              termos ve diğer hediyeler kutu fiyatına dahil değildir.
              Kendi setinizi oluşturmak istediğinizde ürünleri, yerleşimi ve
              toplam bedeli birlikte tekliflendirin.
            </p>
            <p>
              Kutunun dış ölçüsü iç kullanım alanı değildir. Seçtiğiniz
              ürünlerin kalınlığını, kapak kapanışını ve dolgu alanını kontrol
              edin. VIP-480 ve VIP-510 ürün bilgilerinde farklı ölçü ifadeleri
              bulunduğu için kesin iç ve dış ölçüyü sipariş öncesinde teyit edin.
            </p>
            <p>
              VIP-485 için kutuya sünger dahil olmadığı belirtilir.
              Diğer kutularda da iç sünger, kırpık kağıt veya dolgunun kapsamını
              ayrıca kontrol edin. Kutu kapağına logo ve ilave paketleme
              taleplerinizi teklif sırasında belirtin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Teknolojik Parçalarda Kapasite ve Uyumluluk</h2>
            <p>
              Powerbank kapasitesi tek başına şarj hızını veya telefonun kaç kez
              tam dolacağını göstermez. Çıkışlar, kablo, telefon ve varsa
              kablosuz şarj desteği seçilen parçaya göre kontrol edilmelidir.
              USB bellekte de depolama kapasitesi ile bağlantı tipi ve aktarım
              hızı ayrı özelliklerdir.
            </p>
            <p>
              MagSafe cüzdan ile MagSafe powerbank aynı işlevi sunmaz.
              VIP-140 içinde cüzdan, VIP-250 gibi modellerde powerbank bulunur.
              Manyetik tutunmayı ve şarj desteğini cihazınızla ve kılıfınızla
              birlikte değerlendirin.
            </p>
            <p>
              Parçaları ayrı karşılaştırmak için{" "}
              <Link href="/promosyon-powerbank" className="font-semibold text-white underline underline-offset-4">powerbank</Link>{" "}
              ve{" "}
              <Link href="/promosyon-usb-bellek" className="font-semibold text-white underline underline-offset-4">USB bellek</Link>{" "}
              modellerini inceleyebilirsiniz. Ayrı kategorideki bir modelin
              özelliklerini set içindeki ürüne doğrudan uygulamayın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Uygulaması ve Malzeme Seçimi</h2>
            <p>
              Defter kapağı, kalem, termos, elektronik ürün ve kutu farklı
              yüzeylere sahiptir. Baskı yöntemi ve alanını her parça için
              ayrı belirleyin. Termo deri ifadesinden gerçek deri sonucu
              çıkarmayın; belirli bir malzeme talebiniz varsa ürün koduyla teyit edin.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              Uygulanacak parçaları, renk ve konum beklentinizi belirtin.
              Kişiye özel isim talebiniz varsa listeyi ve hangi parçaya
              uygulanacağını ayrıca iletin; uygunluğu teklif aşamasında netleştirin.
            </p>
            <p>
              Termosların sıcak veya soğuk tutma süresini bütün setler için
              aynı kabul etmeyin. Defterlerin tarihli veya tarihsiz düzenini,
              sayfa yapısını ve renk stoklarını da seçilen modele göre kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">VIP Hediye Seti Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen kartlarda tutar baskı hariçtir; KDV ayrıca
              belirtilir. Fiyatı bulunmayan modeller için güncel teklif isteyin.
              Hazır set fiyatıyla boş kutu fiyatını aynı kapsamda değerlendirmeyin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model kodu, tam parça listesi ve her ürünün özellikleri.</li>
              <li>Kutu, iç yerleşim ve dahil dolgu veya sünger.</li>
              <li>Logo uygulanacak parçalar ve kutu, yöntem ve kişiselleştirme.</li>
              <li>Adet, renk dağılımı, ek paketleme, sevkiyat ve KDV.</li>
            </ul>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Kurumsal Hediye Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Hedef kitleyi, adedi ve bütçenizi belirtin.</li>
              <li>Hazır set kodunu veya ayrı kutuya konulacak ürünleri seçin.</li>
              <li>İçeriği, kapasite ve ölçüleri, malzemeyi ve cihaz uyumunu teyit edin.</li>
              <li>Logo dosyasını, uygulama yapılacak parçaları ve paketleme talebini paylaşın.</li>
              <li>Teslimat adresini ve etkinlik tarihini bildirin; stok, tasarım ve toplam bedeli onaylayın.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Tek ürün odaklı seçenekler için{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem setlerini</Link>{" "}
              veya{" "}
              <Link href="/promosyon-termos" className="font-semibold text-white underline underline-offset-4">termos modellerini</Link>{" "}
              de karşılaştırabilirsiniz. Set içeriği değişikliği ve ek ürün
              taleplerinin uygunluğu ayrıca değerlendirilir.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              VIP Hediye Seti İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">VIP Hediye Setleri Hakkında Sık Sorulan Sorular</h2>
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
