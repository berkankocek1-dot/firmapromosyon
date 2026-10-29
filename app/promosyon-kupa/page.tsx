import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import KupaProductGrid from "./KupaProductGrid";
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

const CATEGORY = "Kupa";
const PAGE_URL = `${SITE_URL}/promosyon-kupa`;
const PAGE_TITLE = "Promosyon Kupa ve Fincan Modelleri | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı seramik ve porselen kupa, fincan ve set modellerini karşılaştırın. Baskı seçenekleri ve toptan kurumsal sipariş için güncel teklif alın.";

const faqItems = [
  {
    "question": "Promosyon kupa ve fincan siparişinde minimum adet nedir?",
    "answer": "Minimum sipariş koşulu seçilen ürüne göre değişir. Tekli kupalarda adet, fincan setlerinde ise set veya kutu üzerinden değerlendirme yapılabilir. Ürün kodunu ve ihtiyacınız olan toplam parça sayısını paylaşarak minimum sipariş koşulunu teyit edin."
  },
  {
    "question": "Kupa ve fincan fiyatlarına baskı dahil mi?",
    "answer": "Bu sayfada güncel fiyat için teklif istenir. Ürün bedeli, baskı yöntemi, tek veya çift yön uygulama, adet, ambalaj, sevkiyat ve KDV kapsamı teklif aşamasında netleştirilir. Baskılı ve baskısız seçenekleri aynı ürün ve adet üzerinden karşılaştırabilirsiniz."
  },
  {
    "question": "Seramik ve porselen kupa arasında nasıl seçim yapılır?",
    "answer": "Malzeme bilgisinin yanında hacim, ağırlık, kulp biçimi, yüzey ve baskı alanını karşılaştırın. Ürün seçimini yalnızca seramik veya porselen adına göre yapmayın; kullanım amacına uygunluğu ve seçilen modelin teknik özelliklerini birlikte değerlendirin."
  },
  {
    "question": "Kupalara renkli logo veya fotoğraf basılabilir mi?",
    "answer": "Süblimasyona uygun kaplamaya sahip modellerde renkli logo veya görsel uygulaması değerlendirilebilir. Her kupa ve fincan aynı baskı yöntemine uygun değildir. Görselin çözünürlüğü, ürünün yüzeyi ve kullanılabilir baskı alanı incelendikten sonra uygulama belirlenir."
  },
  {
    "question": "Kupaya çift yön veya çevresel baskı yapılabilir mi?",
    "answer": "Uygun modellerde çift yön ya da gövde boyunca daha geniş alanlı baskı değerlendirilebilir. Kulp çevresi, yüzeyin biçimi ve uygulama ölçüsü kullanılabilir alanı sınırlar. Her modelde aynı baskı alanı bulunmadığından logo konumunu ve ölçüsünü sipariş öncesinde teyit edin."
  },
  {
    "question": "Logo baskılı kupa bulaşık makinesinde yıkanabilir mi?",
    "answer": "Yıkama uygunluğu hem ürünün hem de baskı uygulamasının özelliklerine bağlıdır. Tüm modeller için aynı dayanıklılık veya program uygunluğu varsayılmamalıdır. Makinede yıkama ve mikrodalga kullanımı için seçilen ürünün bakım talimatını ayrıca isteyin."
  },
  {
    "question": "Toplu kupa siparişinde hangi bilgileri paylaşmalıyım?",
    "answer": "Ürün kodunu, rengi, adet veya set sayısını, logo dosyasını ve baskı yerleşimini paylaşın. Kutu isteğini, teslimat adresini ve etkinlik tarihinizi de belirtin. Stok, tasarım onayı, toplam bedel ve teslim süresi sipariş öncesinde birlikte netleştirilir."
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
        alt: "Promosyon Kupa Modelleri",
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
              name: "Promosyon Kupa",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kupa",
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
          <span className="font-semibold text-white">Promosyon Kupa</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Kupa
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Logo baskılı seramik ve porselen kupa, fincan ve set modellerini
            inceleyin. Hacim, kulp, renk ve baskı alanını karşılaştırarak ofis
            kullanımı veya kurumsal hediye siparişiniz için güncel teklif alın.
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

      <KupaProductGrid products={list} />
      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kupa mı Fincan mı? Kullanıma Göre Model Seçimi</h2>
            <p>
              Ofis masasında günlük içecek tüketimi için kupa; karşılama alanı,
              toplantı veya kahve sunumu için fincan ve set seçenekleri
              değerlendirilebilir. Seçimde hacim kadar kulp rahatlığı, ürünün
              boyutu ve logonun görünür olacağı alan da önemlidir.
            </p>
            <p>
              Ürünleri yukarıdaki Kupa ve Fincan filtreleriyle ayırabilirsiniz.
              Malzeme, kapasite, renk ve set içeriğini seçtiğiniz ürünün detayından
              kontrol edin. Set olarak satılan ürünlerde sipariş miktarının parça,
              set veya kutu cinsinden mi belirtildiğini netleştirin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Promosyon Kupa ve Fincan Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Kupa ve fincan türleri, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Seramik kupa", "Ofis ve çalışan hediye paketleri", "Kapasite, gövde ölçüsü ve baskıya uygun yüzey"],
                    ["Porselen kupa", "Müşteri, bayi ve personel kullanımı", "Kulp biçimi, ağırlık, renk ve logo alanı"],
                    ["Renkli kulplu veya iç yüzeyli kupa", "Kurumsal renklerle uyumlu hediyeler", "Stok rengi ve dış yüzeyde baskının görünümü"],
                    ["Kahve fincanı seti", "Ofis, toplantı ve karşılama alanları", "Fincan hacmi, set içeriği ve sipariş birimi"],
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
              Aynı malzeme grubundaki modellerin ölçüsü ve baskı özellikleri farklı
              olabilir. Tabak, kutu veya başka bir parçanın sete dahil olduğunu varsaymayın;
              ürün açıklamasındaki içeriği esas alın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskısı ve Kullanılabilir Uygulama Alanı</h2>
            <p>
              Katalogda süblimasyon baskıya uygun olduğu belirtilen modellerde
              renkli logo veya görsel uygulaması değerlendirilebilir. Uygunluk,
              yalnızca ürünün seramik ya da porselen olmasına bağlı değildir;
              yüzey kaplaması ve modelin baskı koşulları da kontrol edilmelidir.
            </p>
            <p>
              Tek yön, çift yön ve gövde boyunca geniş alanlı baskı aynı kapsam
              değildir. Kulp çevresindeki boşluk, kavis ve kullanılabilir yükseklik
              tasarım ölçüsünü etkiler. Logonun kullanıcıya mı yoksa dışarıya mı
              dönük olacağını, ek yazıları ve görselin konumunu önceden belirtin.
            </p>
            <p>
              Logo için mümkünse vektörel PDF, AI, EPS veya SVG paylaşın. Fotoğraf
              gibi görsellerde çözünürlük gerçek baskı ölçüsüne göre
              değerlendirilmelidir. Yerleşim, renk beklentisi ve tasarımın küçük
              detayları üretim öncesinde netleştirilmelidir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Kupa ve Fincan Fiyatları Nasıl Belirlenir?</h2>
            <p>
              Bu sayfadaki modeller için güncel fiyat teklif yoluyla paylaşılır.
              Aynı ürünü karşılaştırırken adet veya set sayısını ve baskı kapsamını
              birlikte belirtin. Fiyatı yalnızca kapasiteye göre değerlendirmek
              yerine aşağıdaki kalemleri netleştirin:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ürün kodu, malzeme, renk, kapasite ve sipariş miktarı.</li>
              <li>Tek veya çift yön uygulama ve kullanılacak baskı alanı.</li>
              <li>Fincan setinde toplam parça sayısı ve varsa kutu içeriği.</li>
              <li>Ürün bedeli, baskı bedeli, ambalaj, sevkiyat ve KDV kapsamı.</li>
            </ul>
            <p>
              Kırılabilir ürünlerde kutulama ve teslimat biçimi de teklifin
              parçası olmalıdır. Farklı teslimat adresleri veya ayrı hediye
              paketleri gerekiyorsa sipariş aşamasından önce bildirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Baskılı Kupa Bakımı ve Kullanım Bilgileri</h2>
            <p>
              Bulaşık makinesi ve mikrodalga uygunluğunu bütün kupa modelleri için
              aynı kabul etmeyin. Hem ürünün hem de uygulanan baskının bakım
              koşullarını öğrenin. Temizlik yöntemi ve program seçimi için
              seçtiğiniz modele ait talimatı esas alın.
            </p>
            <p>
              Ürünü personele veya müşteriye hediye edecekseniz bakım bilgisinin
              teslim sırasında paylaşılmasını da planlayabilirsiniz. Özellikle
              özel uygulama ve ambalaj isteklerinde kullanım bilgilerinin
              nasıl sunulacağını teklif aşamasında sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toptan Kupa Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, renk tercihini ve adet ya da set sayısını belirleyin.</li>
              <li>Logo veya görsel dosyanızı ve istediğiniz baskı konumunu paylaşın.</li>
              <li>Özel kutu, ayrı paketleme ve teslimat adresi taleplerini ekleyin.</li>
              <li>Etkinlik tarihinizi belirtin; stok ve üretim süresini teyit edin.</li>
              <li>Tasarım yerleşimi, toplam bedel, KDV ve sevkiyat kapsamını netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Baskı yöntemleri hakkında{" "}
              <Link href="/rehber/promosyon-kupa-baski" className="font-semibold text-white underline underline-offset-4">promosyon kupa baskı rehberini</Link>{" "}
              inceleyebilirsiniz. Günlük taşımaya yönelik bir ürün arıyorsanız{" "}
              <Link href="/promosyon-termos" className="font-semibold text-white underline underline-offset-4">termos modellerini</Link>;{" "}
              hediye setinizi tamamlamak için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>{" "}
              ve{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter seçeneklerini</Link>{" "}
              de değerlendirebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Kupa ve Fincan Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Promosyon Kupa ve Fincan Hakkında Sık Sorulan Sorular</h2>
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