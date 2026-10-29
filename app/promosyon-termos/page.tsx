import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
import TermosProductGrid from "./TermosProductGrid";
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

const CATEGORY = "Termos";
const PAGE_URL = `${SITE_URL}/promosyon-termos`;
const PAGE_TITLE = "Promosyon Termos Modelleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı promosyon termos modellerini ve baskı hariç fiyatlarını karşılaştırın. Kapasite, kapak ve baskı seçenekleriyle toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon termos minimum kaç adet sipariş edilir?",
    "answer": "Minimum adet; model, stok ve baskı yöntemine göre değişir. Ürün kodunu, istediğiniz rengi ve adedi paylaşarak baskılı veya baskısız sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Termos fiyatlarına logo baskısı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında ürün bedeli baskı hariçtir; KDV bilgisi kartta ayrıca belirtilir. Logo uygulaması, tek veya çift yön baskı, varsa kutu ve sevkiyat talepleri teklifte netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyebilirsiniz."
  },
  {
    "question": "Promosyon termos kaç saat sıcak veya soğuk tutar?",
    "answer": "Isı koruma süresi modele, yalıtım yapısına ve kullanım koşullarına bağlıdır. Başlangıç sıcaklığı, ortam sıcaklığı, doluluk ve kapağın açılma sıklığı sonucu etkiler. Model için doğrulanmış bilgi yoksa belirli bir saat garantisi verilemez; teknik bilgiyi sipariş öncesinde teyit edin."
  },
  {
    "question": "Her termos çantada sızdırmadan taşınabilir mi?",
    "answer": "Her model için aynı özellik varsayılmamalıdır. Kapak mekanizması, conta ve ürünün kullanım talimatı kontrol edilmelidir. Kapak kilidi bulunması tek başına tam sızdırmazlık anlamına gelmez; çantada taşımak için modelin uygunluğunu ayrıca teyit edin."
  },
  {
    "question": "Termos üzerine lazer mi renkli baskı mı tercih edilmeli?",
    "answer": "Uygun yüzeylerde lazer kazıma değerlendirilebilir; ortaya çıkan ton kaplama ve alt malzemeye bağlıdır. Renkli logo için UV veya başka bir uygulamanın uygunluğu ürünün yüzeyine ve baskı alanına göre belirlenir. Gövdenin kavisli olması nedeniyle uygulama ölçüsü ve konumu model bazında incelenmelidir."
  },
  {
    "question": "Dijital göstergeli termos içeceği ısıtır mı?",
    "answer": "Sıcaklık göstergesi ile ısıtma özelliği farklıdır. Bir modelin dijital göstergeye sahip olması içeceği ısıttığı anlamına gelmez. Isıtma veya sıcaklık ayarı gibi bir özellik gerekiyorsa bunun ürün açıklamasında ayrıca belirtilmiş olmasını arayın."
  },
  {
    "question": "Toplu termos siparişinde teslim süresi nasıl belirlenir?",
    "answer": "Stok, adet, renk dağılımı, baskı yöntemi, tasarım onayı, ambalaj ve teslimat adresi birlikte değerlendirilir. Etkinlik tarihinizi teklif aşamasında paylaşın; sipariş öncesinde uygulanacak logo yerleşimini, toplam bedeli ve net teslim süresini teyit edin."
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
        alt: "Promosyon Termos Modelleri",
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
  const list = sortProductsByCode(products.filter((p) => p.category === CATEGORY));

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
              name: "Promosyon Termos",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Termos",
          url: PAGE_URL,
          description: PAGE_DESCRIPTION,
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
          <span className="font-semibold text-white">Promosyon Termos</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Termos
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Kapasite, kapak yapısı ve kullanım amacına göre termos modellerini
            karşılaştırın. Logo baskılı kurumsal hediye ve toplu sipariş için
            ürün, renk ve adet bilgilerinizi paylaşarak teklif alın.
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

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 text-gray-800">
        <p>Cam ve plastik su mataraları için <Link href="/promosyon-matara" className="font-semibold text-black underline underline-offset-4">promosyon matara modellerini inceleyin</Link>.</p>
      </div>

      <TermosProductGrid products={list} />
      {list.length === 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Bu kategoride henüz ürün yok.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Kullanım Amacına Göre Promosyon Termos Seçimi
            </h2>
            <p>
              Çalışan hediyesi, bayi dağıtımı veya etkinlik paketi için termos
              seçerken yalnızca dış görünüşe bakmayın. Kapasite, kapak mekanizması,
              taşıma biçimi ve logo alanı, ürünün günlük kullanımını birlikte belirler.
              Masada kullanılacak bir model ile çantada taşınacak ürünün ihtiyaçları farklıdır.
            </p>
            <p>
              Yukarıdaki filtrelerle 500 ml, büyük hacimli, dijital göstergeli,
              French press, bambu detaylı ve set modellerini inceleyebilirsiniz.
              Malzeme, kapasite ve kapak özelliklerini seçtiğiniz ürünün
              açıklamasından kontrol edin; bir modelin özelliğini tüm kategoriye genellemeyin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Termos Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Termos modelleri, kullanım örnekleri ve kontrol edilecek özellikler</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["500 ml", "Ofis ve günlük kullanım", "Ölçü, ağırlık, kapak ve içim biçimi"],
                    ["Büyük hacim", "Daha fazla içecek taşımak isteyen ekipler", "Kapasite, dolu ağırlık ve taşıma kolaylığı"],
                    ["Dijital göstergeli", "Sıcaklık bilgisini görmek isteyen kullanıcılar", "Gösterge işlevi, bakım ve kapak talimatları"],
                    ["French press", "Kahve hazırlamayı tercih eden kullanıcılar", "Filtre mekanizması, kapasite ve temizlik"],
                    ["Bambu detaylı", "Malzeme ve tasarım odaklı hediyeler", "Bambu bölümün konumu ve uygulanabilir logo alanı"],
                    ["Termos seti", "Birlikte sunulan kurumsal hediye ürünleri", "Set içeriği, kutu ve her parçanın baskı kapsamı"],
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
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kapasite, Kapak ve Isı Koruma Özellikleri</h2>
            <p>
              Aynı kapasitedeki iki termosun gövde ölçüsü ve içim biçimi farklı
              olabilir. Masa kullanımında tutuş ve kapak rahatlığını; günlük
              taşımada ise boyut, ağırlık ve ürünün taşıma talimatını değerlendirin.
              Araçta kullanılacaksa taban ölçüsünün bardaklıkla uyumunu kontrol edin.
            </p>
            <p>
              Isı koruma süresi yalnızca kapasiteye bağlı değildir. Yalıtım yapısı,
              doluluk, ortam ve başlangıç sıcaklığı ile kapağın açılma sıklığı
              sonucu etkiler. Seçilen model için doğrulanmış bilgi olmadan bütün
              termoslara aynı sıcak veya soğuk tutma süresi verilmemelidir.
            </p>
            <p>
              Kapak kilidi, sızdırmazlık ve sıcaklık göstergesi ayrı özelliklerdir.
              Kilitli bir kapağı otomatik olarak tam sızdırmaz kabul etmeyin.
              Dijital göstergenin bulunması da ısıtma işlevi olduğu anlamına gelmez.
              Çantada taşıma, temizlik ve kapak bakımı için modelin talimatlarını esas alın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Logo Baskısı İçin Yüzey ve Yerleşim Seçimi</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Lazer kazıma</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Uygun yüzeylerde değerlendirilebilir. Sonuçtaki ton, kaplama ve
                  alt malzemeye bağlıdır. Logonun tek renk görünümü ile baskı
                  ölçüsünü ürün üzerinden değerlendirin.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Renkli logo uygulaması</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  UV veya farklı bir yöntem, yüzey ve model uygunluğuna göre
                  belirlenir. Kavisli gövde, tutma alanı ve kapak tasarımı
                  uygulanabilir baskı alanını etkileyebilir.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-4xl leading-7 text-gray-200">
              Her modelde çevresel veya çift yön baskı yapılabildiğini varsaymayın.
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın;
              yerleşim, ölçü ve ek yazıları uygulama öncesinde netleştirin.
              Baskı sonrası bakım için ürüne ve uygulamaya uygun temizlik talimatını teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Termos Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV bilgisi
              ayrıca belirtilir. Baskılı siparişin toplamını değerlendirirken
              yalnızca ürün birim fiyatını karşılaştırmak yeterli değildir.
              Fiyatı bulunmayan modeller için güncel teklif isteyebilirsiniz.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, kapasite, gövde ve kapak yapısı.</li>
              <li>Sipariş adedi, renk dağılımı ve stok durumu.</li>
              <li>Logo ölçüsü, uygulama yöntemi ve baskı yönü.</li>
              <li>Varsa kutu, ek paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Teklifleri aynı ürün kodu, aynı adet ve aynı baskı kapsamıyla
              karşılaştırın. Set modellerinde kutunun ve parçaların hangilerinin
              fiyata dahil olduğunu ayrıca sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Termos Siparişi Nasıl Planlanır?</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, rengi ve adedi belirleyin; gerekirse alternatif model seçin.</li>
              <li>Logo dosyanızı ve tek ya da çift yön uygulama isteğinizi paylaşın.</li>
              <li>Etkinlik tarihini, teslimat adresini ve kutu talebini bildirin.</li>
              <li>Stok, logo yerleşimi, baskı bedeli, KDV ve toplam tutarı netleştirin.</li>
              <li>Teslim süresini ve sevkiyat koşullarını sipariş öncesinde teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Kurumsal hediye paketinizi{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>,{" "}
              <Link href="/promosyon-ajanda" className="font-semibold text-white underline underline-offset-4">ajanda</Link>,{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter</Link>{" "}
              veya{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-white underline underline-offset-4">anahtarlık</Link>{" "}
              ile tamamlayabilirsiniz. Model seçimi için{" "}
              <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir" className="font-semibold text-white underline underline-offset-4">termos seçim rehberini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Termos Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Termos Hakkında Sık Sorulan Sorular
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