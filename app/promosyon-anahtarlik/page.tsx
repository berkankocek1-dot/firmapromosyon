import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
import AnahtarlikProductGrid from "./AnahtarlikProductGrid";
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

const CATEGORY = "Anahtarlık";
const PAGE_URL = `${SITE_URL}/promosyon-anahtarlik`;
const PAGE_TITLE = "Promosyon Anahtarlık Modelleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı metal, deri, açacaklı ve özel tasarım promosyon anahtarlık modellerini karşılaştırın. Baskı seçenekleri ve toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon anahtarlık minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi modele, stok durumuna ve baskı yöntemine göre değişir. Seçtiğiniz ürünün kodunu ve istediğiniz adedi paylaşarak baskılı veya baskısız sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Sayfadaki anahtarlık fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Ürün kartında fiyat belirtilen modellerde tutar baskı hariçtir; KDV bilgisi kartta ayrıca gösterilir. Baskı bedeli, tek veya çift yön uygulama, adet ve varsa ambalaj talebine göre teklifte ayrıca netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyebilirsiniz."
  },
  {
    "question": "Metal mi deri promosyon anahtarlık mı seçmeliyim?",
    "answer": "Metal modellerde logo uygulama alanı ve yüzey kaplaması; deri veya suni deri detaylı modellerde ise malzeme, dikiş ve baskı yüzeyi karşılaştırılmalıdır. Dağıtım amacı, anahtarlığın boyutu ve kullanım hissi de seçimde önemlidir. Ürünün gerçek malzeme bilgisini model açıklamasından kontrol edin."
  },
  {
    "question": "Anahtarlığa lazer, UV veya gofre uygulanabilir mi?",
    "answer": "Uygulama ürünün malzemesine ve kaplamasına bağlıdır. Uygun metal yüzeylerde lazer kazıma; renkli tasarımlarda yüzeye uygun UV veya tampon baskı; uygun deri ya da suni deri yüzeylerde gofre değerlendirilebilir. Her teknik her modele uygulanamaz; yöntem ürün ve logo birlikte incelendikten sonra belirlenir."
  },
  {
    "question": "Anahtarlığın iki tarafına logo baskısı yapılabilir mi?",
    "answer": "İki tarafta da uygun uygulama alanı bulunan modellerde çift yön baskı değerlendirilebilir. Ön ve arka yüzün şekli veya malzemesi farklı olabilir. Teklif isterken her iki yüzde kullanılacak logo veya iletişim bilgisini belirtin; uygunluk ve maliyet ayrıca kontrol edilir."
  },
  {
    "question": "Logo dosyasını hangi formatta göndermeliyim?",
    "answer": "Mümkünse vektörel PDF, AI, EPS veya SVG dosyası paylaşın. Yalnızca görsel dosyanız varsa çözünürlüğünün yeterliliği kontrol edilmelidir. Küçük baskı alanında ince çizgiler ve küçük yazılar kaybolabileceğinden logo yerleşimi uygulama öncesinde değerlendirilir."
  },
  {
    "question": "Toplu anahtarlık siparişi ne kadar sürede hazırlanır?",
    "answer": "Teslim süresi stok, adet, baskı yöntemi, tasarım onayı ve sevkiyat adresine göre değişir. Özel üretim veya ambalaj talepleri süreyi etkileyebilir. Etkinlik tarihiniz varsa teklif aşamasında belirtin ve net termin bilgisini sipariş öncesinde teyit edin."
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
        alt: "Promosyon Anahtarlık Modelleri",
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
              name: "Promosyon Anahtarlık",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Anahtarlık",
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

      <section className="rounded-3xl bg-black px-6 py-7 text-white md:px-8 md:py-9">
        <nav className="mb-4 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">Promosyon Anahtarlık</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Anahtarlık
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Metal, deri detaylı, açacaklı ve işlevsel anahtarlık modellerini
            karşılaştırın. Logo uygulama alanını ve baskı seçeneklerini değerlendirerek
            toplu siparişiniz için teklif isteyin.
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

      <AnahtarlikProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Hangi Promosyon Anahtarlık Modeli Size Uygun?
            </h2>
            <p>
              Fuar dağıtımı, bayi hediyesi veya müşteri teslimatı için anahtarlık
              seçerken malzeme kadar kullanım amacına da bakın. Günlük taşımaya
              uygun boyut, sağlam halka bağlantısı ve okunaklı bir logo alanı,
              seçimde birlikte değerlendirilmesi gereken özelliklerdir.
            </p>
            <p>
              Yukarıdaki filtrelerle metal, deri, açacaklı, purjörlü, ev ve araba
              temalı, telefon standlı veya özel tasarım modelleri inceleyebilirsiniz.
              Filtreler bir ürünün farklı özelliklerini gösterebilir; malzeme ve
              işlev bilgisini seçtiğiniz ürünün detayından teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">
              Anahtarlık Modellerini Karşılaştırın
            </h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">
                  Promosyon anahtarlık türleri, kullanım örnekleri ve seçimde dikkat edilecek noktalar
                </caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Metal", "Bayi ve kurumsal müşteri hediyeleri", "Yüzey kaplaması, ağırlık ve logo alanı"],
                    ["Deri / suni deri detaylı", "Kurumsal hediye setleri", "Malzeme bilgisi, dikiş ve uygulama yüzeyi"],
                    ["Açacaklı", "Etkinlik ve kampanya dağıtımları", "Açacak işlevi, gövde ölçüsü ve baskı alanı"],
                    ["Purjörlü", "Teknik servis ve tesisat sektörü dağıtımları", "Ürün açıklamasındaki işlev ve uygulama alanı"],
                    ["Ev ve araba temalı", "Emlak, otomotiv ve teslimat hediyeleri", "Form, halka bağlantısı ve logonun yerleşimi"],
                    ["Telefon standlı", "Ofis ve masaüstü kullanımı", "Standın kullanım biçimi ve telefonla uyumu"],
                    ["Özel tasarım", "Sektöre veya kampanyaya uygun hediyeler", "Hazır model / özel üretim ayrımı, adet ve termin"],
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
              Özel tasarım grubundaki hazır bir model, mutlaka sıfırdan kalıp veya
              özel üretim yapılacağı anlamına gelmez. Üretim talebiniz varsa ayrıca belirtin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskısı: Lazer, Renkli Baskı ve Gofre
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Lazer kazıma</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Uygun metal yüzeylerde değerlendirilebilir. Ortaya çıkan ton,
                  ürünün kaplamasına ve alt malzemesine bağlıdır; renkli logo
                  baskısıyla aynı sonuç beklenmemelidir.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">UV ve tampon baskı</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Renkli logo için ürünün yüzeyine, şekline ve uygulama alanına
                  göre yöntem seçilir. Küçük yazıların ve ince çizgilerin baskı
                  ölçüsünde okunabilirliği kontrol edilmelidir.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Gofre uygulaması</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Uygun deri veya suni deri yüzeylerde iz bırakılarak uygulanabilir.
                  Malzemenin ve modelin uygunluğu ile kalıp gereksinimi teklif
                  öncesinde değerlendirilir.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-4xl leading-7 text-gray-200">
              Her yöntem her anahtarlığa uygulanamaz. Ön ve arka yüz farklıysa
              çift yön baskı için her iki alan da ayrıca incelenmelidir. Logo,
              telefon numarası veya web adresi eklemek istediğinizde yerleşimi
              gerçek baskı ölçüsünde değerlendirerek karar verin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Anahtarlık Fiyatları Nasıl Değerlendirilir?
            </h2>
            <p>
              Ürün kartında belirtilen fiyatı, baskılı siparişin toplam bedeliyle
              karıştırmayın. Fiyat gösterilen modellerde ürün bedeli baskı hariçtir;
              KDV bilgisi kartta ayrıca yer alır. Fiyatı bulunmayan modellerde güncel
              stok ve fiyat için teklif isteyin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ürün modeli, malzeme ve sipariş adedi.</li>
              <li>Baskı yöntemi, logo alanı ve tek ya da çift yön uygulama.</li>
              <li>Varsa kalıp, özel üretim, kutu veya ayrı paketleme talebi.</li>
              <li>Teslimat adresi, sevkiyat koşulları ve KDV.</li>
            </ul>
            <p>
              Teklifleri aynı adet, aynı model ve aynı baskı kapsamıyla karşılaştırın.
              Ayrıntılar için{" "}
              <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold text-white underline underline-offset-4">
                promosyon anahtarlık fiyatları rehberini
              </Link>{" "}
              inceleyebilirsiniz. Sipariş öncesinde birim fiyatı, baskı bedelini ve
              toplam tutarı birlikte netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Toptan Anahtarlık Siparişi İçin Teklif Bilgileri
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, tercih ettiğiniz rengi ve sipariş adedini belirtin.</li>
              <li>Logonuzu, mümkünse vektörel dosya olarak paylaşın.</li>
              <li>Tek veya çift yön uygulama ile ek yazı taleplerini bildirin.</li>
              <li>Etkinlik tarihini, teslimat adresini ve varsa ambalaj isteğini ekleyin.</li>
              <li>Stok, baskı yerleşimi, toplam bedel ve teslim süresini sipariş öncesinde teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Anahtarlığı bir hediye setinde kullanacaksanız{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">promosyon kalem</Link>,{" "}
              <Link href="/promosyon-termos" className="font-semibold text-white underline underline-offset-4">termos</Link>{" "}
              veya{" "}
              <Link href="/promosyon-usb-bellek" className="font-semibold text-white underline underline-offset-4">USB bellek</Link>{" "}
              seçenekleriyle birlikte planlayabilirsiniz. Baskı yöntemleri ve teslim
              süreleri ürünler arasında farklılık gösterebilir.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Anahtarlık Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Anahtarlık Hakkında Sık Sorulan Sorular
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