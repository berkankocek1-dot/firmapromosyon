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

const CATEGORY = "Sekreterlikler ve Evrak Çantaları";
const PAGE_URL = `${SITE_URL}/promosyon-sekreterlikler-ve-evrak-cantalari`;
const PAGE_TITLE = "Promosyon Sekreterlik ve Evrak Çantaları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı sekreterlik ve evrak çantalarını ölçü, iç blok ve bölmeleriyle karşılaştırın. Toplantı ve kurumsal toplu sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon sekreterlik ve evrak çantası minimum kaç adet sipariş edilir?",
    "answer": "Minimum adet seçilen model, stok ve logo uygulamasına göre teyit edilir. Ürün kodunu, rengi ve istediğiniz miktarı paylaşarak baskılı veya baskısız sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Sekreterlik modellerinin tamamı A4 belgeye uygun mudur?",
    "answer": "Hayır, aynı boyutta oldukları varsayılmamalıdır. Dış kapak ölçüsü, iç blok ve varsa belge bölmesi ayrı değerlendirilir. Örneğin SB-130 modelinde kapak 15 x 21 cm, iç blok 13 x 20 cm olarak belirtilir. Taşınacak dosya veya belgenin ölçüsünü sipariş öncesinde paylaşın."
  },
  {
    "question": "Tablet bölmesi bulunan sekreterliğe her tablet sığar mı?",
    "answer": "Hayır. SB-120 modelinde evrak-tablet bölmesi belirtilir; ancak uyum cihazın ve varsa kılıfın ölçüsüne bağlıdır. Tabletin en, boy ve kalınlığını paylaşarak uygunluğu teyit edin. Bölme bulunmasını korumalı bilgisayar çantası özelliği olarak değerlendirmeyin."
  },
  {
    "question": "Termo deri veya suni deri kapak gerçek deri midir?",
    "answer": "Suni deri gerçek deri değildir; termo deri ifadesi de tek başına gerçek deri olduğu anlamına gelmez. Belirli bir malzeme talebiniz varsa modelin teknik açıklamasını kontrol edin ve teklif aşamasında ayrıca teyit edin."
  },
  {
    "question": "Sekreterliğe ve evrak çantasına hangi logo uygulamaları yapılır?",
    "answer": "Yöntem seçilen modele göre değişir. SB-100 ve SB-110 için gofre ve UV; EÇ-100 için sıcak baskı belirtilir. SB-130 ürün bilgisinde farklı uygulama seçenekleri yer alır. Diğer modellerin yöntemini, logo alanını ve bedelini teklif aşamasında teyit edin."
  },
  {
    "question": "Ürün fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, uygulama alanı, adet ve varsa ek paketleme teklif aşamasında netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyebilirsiniz."
  },
  {
    "question": "Toplu sekreterlik ve evrak çantası siparişi ne kadar sürede hazırlanır?",
    "answer": "Stok, renk dağılımı, adet, logo onayı, baskı ve paketleme talepleri süreyi etkiler. Etkinlik tarihinizi ve teslimat adresini paylaşın; ürün içeriğini, logo yerleşimini, toplam bedeli ve net teslim süresini sipariş öncesinde teyit edin."
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
        alt: "Promosyon Sekreterlikler ve Evrak Çantaları",
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
              name: "Promosyon Sekreterlikler ve Evrak Çantaları",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Sekreterlikler ve Evrak Çantaları",
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
            Promosyon Sekreterlikler ve Evrak Çantaları
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Sekreterlikler ve Evrak Çantaları
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Toplantı, saha ziyareti ve ofis kullanımı için sekreterlik ve evrak
            çantası modellerini inceleyin. Kapak ölçüsünü, iç bloğu ve bölmeleri
            karşılaştırarak logo baskılı toplu siparişiniz için teklif alın.
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

      <p className="mt-8 text-sm font-medium !text-white">
        {list.length} ürün gösteriliyor
      </p>

      <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
loading="lazy"
                className="object-contain bg-white p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                {p.shortDesc}
              </p>

              {p.price != null && (
                <div className="mt-3">
                  <div className="text-base font-bold text-gray-900">
                    {p.price.toLocaleString("tr-TR")} TL + KDV
                  </div>
                  <div className="mt-1 text-xs font-medium text-green-600">
                    Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                  </div>
                </div>
              )}

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Sekreterlik mi Evrak Çantası mı?</h2>
            <p>
              Toplantıda not almak, planlayıcı kullanmak veya belgeleri bir arada
              taşımak farklı ihtiyaçlardır. Sekreterlik seçiminde iç blok ve
              kullanım alanı; evrak çantasında ise taşıma biçimi, ölçü ve iç
              yerleşim ön plana çıkar. Seçimi ürünün görünümü kadar taşınacak
              içerik ve çalışma alışkanlığına göre yapın.
            </p>
            <p>
              Kategorideki modeller aynı ölçü ve bölmelere sahip değildir.
              Hesap makinesi, planlayıcı, kalem tutucu ve ambalaj gibi ayrıntıları
              ürün bazında kontrol edin; görseldeki aksesuarların tamamının
              standart içeriğe dahil olduğunu varsaymayın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Sekreterlik ve Evrak Çantası Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Model grupları, ürün bilgilerindeki özellikler ve sipariş öncesi kontrol noktaları</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Belirtilen özellikler</th>
                    <th scope="col" className="px-4 py-3">Kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["SB-100 / SB-110", "Termo deri kapak, planlayıcı ve kalem tutucu", "Dış ölçü, iç yerleşim ve renk stoku"],
                    ["SB-120", "A4 toplantı bloknotu, hesap makinesi ve evrak-tablet bölmesi", "Cihaz/kılıf ölçüsü, bölme uyumu ve ürün içeriği"],
                    ["SB-130", "15 x 21 cm kapak, 13 x 20 cm iç blok, suni deri", "İç blok düzeni, sayfa adedi ve uygulama alanı"],
                    ["EÇ-100", "27 x 33 x 10 cm, saplı ve kapaklı evrak çantası", "Dosya yerleşimi, kapanış ve baskı alanı"],
                  ].map(([model, features, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{features}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Dış Ölçü, İç Blok ve Belge Bölmesini Ayırın</h2>
            <p>
              Kapak ölçüsü yazı alanının veya belge bölmesinin ölçüsü değildir.
              Çıktı, dosya ya da klasör taşınacaksa bunların en, boy ve
              kalınlığını paylaşın. Dıştan yeterli görünen bir modelin iç
              yerleşimi farklı olabilir.
            </p>
            <p>
              SB-120 için belirtilen A4 formatı, bütün sekreterliklerin aynı
              boyutta olduğu anlamına gelmez. Tablet bölmesi bulunan üründe de
              uyum cihaz ve kılıf ölçülerine bağlıdır; bu bölmeyi kendiliğinden
              korumalı tablet veya bilgisayar çantası olarak değerlendirmeyin.
            </p>
            <p>
              Planlayıcı veya iç blokta tarihli düzen arıyorsanız varsa takvim
              yılını ve sayfa yapısını ayrıca teyit edin. Daha sade not alma için{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">defter</Link>,{" "}
              farklı iç düzenler için{" "}
              <Link href="/promosyon-organizerler" className="font-semibold text-white underline underline-offset-4">organizer</Link>{" "}
              seçeneklerini de karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kapak Malzemesi ve Logo Uygulaması</h2>
            <p>
              Termo deri veya suni deri ifadelerinden gerçek deri sonucu
              çıkarmayın. Malzeme ve yüzey bilgisi seçilen ürüne ait açıklamadan
              kontrol edilmelidir. Dikiş, kapak kıvrımı ve diğer parçalar
              kullanılabilir logo alanını etkileyebilir.
            </p>
            <p>
              SB-100 ve SB-110 için gofre ile UV, EÇ-100 için sıcak baskı;
              SB-130 için sıcak, UV, serigrafi ve lazer seçenekleri belirtilir.
              Bunlar bütün kategoriye ortak uygulamalar değildir. SB-120 gibi
              yöntemi teklifle netleşen modellerde uygunluk ve alan ayrıca teyit edilir.
            </p>
            <p>
              Logoyu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              Uygulama konumunu, ölçüsünü ve renk beklentisini belirtin. Ürünün
              büyük olması logo alanının da aynı oranda büyük olduğu anlamına
              gelmez; gerçek baskı ölçüsünde okunabilirliği değerlendirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Sekreterlik ve Evrak Çantası Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Karşılaştırmayı aynı ürün kodu, adet ve logo kapsamıyla yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Kapak veya gövde malzemesi, dış ölçü ve kapanış.</li>
              <li>İç blok, planlayıcı, hesap makinesi ve üründe belirtilen bölmeler.</li>
              <li>Logo yöntemi, uygulama alanı, renk ve adet.</li>
              <li>Dahil ambalaj ve varsa ek paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Karton kılıf ile karton kutu aynı sunum biçimi değildir. Hediye
              olarak dağıtılacaksa ambalajın standart içeriğe dahil olup olmadığını
              ve ayrı paketleme talebinizi teklif aşamasında netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Sipariş İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, rengi ve istediğiniz adedi belirtin.</li>
              <li>Belge, dosya veya cihaz taşınacaksa ölçü ve yerleşim ihtiyacını paylaşın.</li>
              <li>Logo dosyanızı, uygulama konumunu ve varsa ek yazıları ekleyin.</li>
              <li>Ambalaj, teslimat adresi ve etkinlik tarihi taleplerini bildirin.</li>
              <li>Ürün içeriği, stok, tasarım yerleşimi, toplam bedel ve termini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Toplantı paketini{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>{" "}
              veya{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem setleriyle</Link>{" "}
              tamamlayabilirsiniz. Kalem tutucusu bulunması kalemin ürüne
              dahil olduğunu göstermez; birlikte sipariş edilecek parçaları ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Sekreterlik ve Evrak Çantası İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Sekreterlik ve Evrak Çantası Hakkında Sık Sorulan Sorular</h2>
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
