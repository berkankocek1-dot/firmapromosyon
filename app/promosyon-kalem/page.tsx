import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
import KalemProductGrid from "./KalemProductGrid";
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

const CATEGORY = "Kalem";
const PAGE_URL = `${SITE_URL}/promosyon-kalem`;

const faqItems = [
  {
    question: "Promosyon kalem minimum kaç adet yaptırılır?",
    answer:
      "Promosyon kalem siparişlerinde minimum adet seçilen modele, baskı türüne ve üretim şartlarına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünlerde toplu sipariş adedi daha yüksek olabilir.",
  },
  {
    question: "Promosyon kalem fiyatları neye göre değişir?",
    answer:
      "Promosyon kalem fiyatları; ürünün malzemesine, modeline, baskı türüne, baskı yönüne, sipariş miktarına ve özel taleplere göre değişiklik gösterebilir. Plastik, metal ve dokunmatik kalem gibi farklı modeller farklı fiyat aralıklarına sahip olabilir.",
  },
  {
    question: "Logo baskılı kalemlerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı kalemlerde ürün modeline göre tampon baskı, UV baskı, serigrafi veya lazer baskı gibi farklı baskı yöntemleri uygulanabilir. Uygun baskı tekniği kalemin yüzeyi, malzemesi ve logo tasarımına göre belirlenir.",
  },
  {
    question: "Promosyon kalem siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, baskı yoğunluğuna, onay sürecine ve stok durumuna bağlı olarak değişebilir. Net termin bilgisi için ürün seçimi sonrası teklif sürecinde bilgi alınması en doğru yöntemdir.",
  },
  {
    question: "Plastik ve metal promosyon kalem arasında ne fark vardır?",
    answer:
      "Plastik promosyon kalemler genellikle ekonomik ve yüksek adetli dağıtımlar için tercih edilir. Metal promosyon kalemler ise daha prestijli bir görünüm sunar ve kurumsal hediye, yönetici seti veya özel müşteri çalışmaları için daha uygun olabilir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Kalem Modelleri ve Fiyatları | Logo Baskılı",
  description:
    "Logo baskılı plastik, metal, jel ve dokunmatik promosyon kalem modellerini ve baskı hariç fiyatlarını inceleyin. Toplu kalem siparişi için teklif alın.",
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
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon kalem modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

// FP KALEM PAGE DESIGN V2
export default function Page() {
  const list = sortProductsByCode(products.filter((p) => p.category === CATEGORY));

  const itemListElement = list.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <div className="min-h-screen bg-white text-gray-900">
    <div className="mx-auto max-w-7xl px-5 py-6 md:py-8">
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
              name: "Promosyon Kalem",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kalem",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon kalem modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon kalem çeşitleri.",
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

      {/* FP KALEM COMPACT HERO V3 */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-5 md:px-5 md:py-5">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-black hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-black hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">Promosyon Kalem</span>
        </nav>

        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
        <header>
          <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-black md:text-[32px]">
            Logo Baskılı Promosyon Kalem Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
            Fuar dağıtımı için plastik, müşteri hediyesi için metal veya günlük
            kullanım için jel ve dokunmatik kalem seçeneklerini karşılaştırın.
            Ürünlerdeki fiyatlar baskı hariçtir; logo baskılı toplu kalem siparişi
            için model kodu, adet ve logonuzla teklif isteyin.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <a
              href="#kalem-modelleri"
              className="inline-flex min-h-11 items-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
            >
              Kalem Modellerini İncele
            </a>
          </div>
        </header>
        {/* FP KALEM BLENDED IMAGE V4 */}
        <div className="relative hidden h-56 w-full lg:block">
          <Image src="/products/kalem-ust-baskisiz.webp" alt="Farklı renklerde promosyon metal kalem modelleri" fill loading="lazy" sizes="300px" className="object-contain" />
        </div>
        </div>
      </section>



      <KalemProductGrid products={list} />
      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-6 md:px-6 md:py-7">
          <section className="max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Hangi Promosyon Kalem Modeli Size Uygun?</h2>
            <p>Kalem seçerken dağıtım yapılacak kişi sayısını, kullanım amacını ve logonun gövdede kaplayacağı alanı birlikte değerlendirin. Üstteki filtrelerden kalem türünü seçebilir, ürün detaylarından modelin özelliklerini inceleyebilirsiniz.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Promosyon kalem türlerinin kullanım ve seçim açısından karşılaştırması</caption>
                <thead className="text-black"><tr>
                  <th scope="col" className="border-b border-gray-300 p-3">Kalem türü</th>
                  <th scope="col" className="border-b border-gray-300 p-3">Kullanım amacı</th>
                  <th scope="col" className="border-b border-gray-300 p-3">Seçerken kontrol edin</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Plastik", "Fuar, seminer ve yüksek adetli dağıtım", "Gövde rengi, tutuş ve logo baskı alanı"],
                    ["Metal", "Müşteri ziyareti ve kurumsal hediye", "Yüzey kaplaması ve lazer uygulamasına uygunluk"],
                    ["Jel ve roller", "Ofis kullanımı ve yazım deneyimi odaklı hediyeler", "Refil türü, uç kalınlığı ve mürekkep rengi"],
                    ["Dokunmatik", "Telefon veya tablet kullanan hedef kitleler", "Stylus uç, gövde malzemesi ve yazım özellikleri"],
                    ["Kurşun", "Eğitim, çizim ve etkinlik dağıtımları", "Gövde şekli, silgi ve baskı alanı"],
                  ].map(([type, use, check]) => (
                    <tr key={type}>
                      <th scope="row" className="border-b border-gray-200 p-3 font-semibold text-black">{type}</th>
                      <td className="border-b border-gray-200 p-3">{use}</td>
                      <td className="border-b border-gray-200 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Jel, rubber ve dokunmatik özellikleri aynı kalemde bir arada bulunabilir. Rubber gövdenin kaplamasını, jel refilin yazım türünü, dokunmatik ise ekran kullanımına uygun ucu ifade eder. Bu nedenle karar verirken ürünün tüm özelliklerini inceleyin.</p>
          </section>

          <section className="mt-10 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Kalem Fiyatları ve Baskı Maliyeti</h2>
            <p>Ürün kartlarında fiyat bulunan modellerde tutarlar TL + KDV olarak ve baskı hariç gösterilir. Fiyatı bulunmayan modeller için güncel fiyat ve stok bilgisi isteyebilirsiniz. Baskılı siparişin toplamı; kalem bedeli, baskı uygulaması ve KDV birlikte değerlendirilerek belirlenir.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-black">Model ve adet:</strong> Gövde malzemesi, refil ve sipariş miktarı ürün maliyetini etkiler.</li>
              <li><strong className="text-black">Baskı yönü ve renk:</strong> Tek veya çift yön uygulama ile logonun renk sayısı baskı teklifini değiştirebilir.</li>
              <li><strong className="text-black">Uygulama yöntemi:</strong> Lazer, tampon veya UV seçimi modelin yüzeyine ve tasarıma göre yapılır.</li>
            </ul>
            <p>Farklı teklifleri karşılaştırırken aynı model, adet, baskı yönü ve KDV kapsamını esas alın. Hesaplama ayrıntıları için <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir" className="font-semibold text-black underline underline-offset-4">kalem fiyatlandırma rehberini</Link> inceleyebilirsiniz.</p>
          </section>

          <section className="mt-10 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logolu Kalem İçin Baskı Yöntemi Nasıl Seçilir?</h2>
            <p>Metal kalemlerde yüzeyin uygunluğuna göre lazer kazıma değerlendirilebilir. Lazer uygulamasında görünüm, gövdenin kaplamasına ve alt malzemeye bağlıdır; sonuç her modelde aynı renkte olmaz. Plastik modellerde ise tampon veya UV gibi yöntemler ürünün baskı alanı ve logo tasarımına göre değerlendirilir.</p>
            <p>İnce çizgili veya küçük yazılı logolar, kalemin dar gövdesinde okunurluk kaybedebilir. Teklif isterken mümkünse vektörel logo dosyanızı paylaşın; uygulanabilir baskı alanını ve yerleşimini ürün seçimi sırasında netleştirin. Ürün detayında belirtilmeyen bir baskı yönteminin o modele uygun olduğunu varsaymayın.</p>
          </section>

          <section className="mt-10 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Toplu Kalem Siparişi İçin Teklif Bilgileri</h2>
            <p>Teklif talebinize aşağıdaki bilgileri eklemeniz, ürün ve baskı maliyetinin ihtiyaçlarınıza göre hesaplanmasını kolaylaştırır:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Beğendiğiniz kalemin model kodu ve tercih ettiğiniz gövde rengi.</li>
              <li>Sipariş adedi ve varsa alternatif adet talebi.</li>
              <li>Logo dosyası, tek veya çift yön baskı tercihi.</li>
              <li>Teslimat ili ve ürünleri kullanmayı planladığınız tarih.</li>
            </ol>
            <p>Minimum sipariş adedi ve hazırlık süresi modele, stok durumuna ve baskı planına bağlıdır. Etkinlik tarihi kesin ise sipariş öncesinde stok ve teslim süresini teyit edin.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">Kalem Siparişi İçin Teklif Al</Link>
            <p>Kalemi bir kurumsal hediye paketi içinde değerlendirmek isterseniz <Link href="/promosyon-defter" className="font-semibold text-black underline underline-offset-4">logolu defter</Link>, <Link href="/promosyon-ajanda" className="font-semibold text-black underline underline-offset-4">promosyon ajanda</Link> ve <Link href="/promosyon-kalem-setleri" className="font-semibold text-black underline underline-offset-4">kalem seti</Link> seçeneklerini de inceleyebilirsiniz.</p>
          </section>

          <section className="mt-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">
              Promosyon Kalem Hakkında Sık Sorulan Sorular
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

          {/* FP KALEM GUIDE COVERS V2 */}
          <section className="mt-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">
              Promosyon Kalem Rehberleri
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir" className="group relative isolate flex min-h-[310px] min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:min-h-[320px] sm:p-6">
                <Image src="/guides/promosyon-kalem-fiyatlari-nasil-hesaplanir-kapak-20261115.jpg" alt="" fill loading="lazy" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 440px" className="pointer-events-none object-cover" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
                <div className="relative z-10 mt-auto">
                  <span className="inline-flex rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white">Rehber</span>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-white">
                  Promosyon Kalem Fiyatları Nasıl Hesaplanır?
                </h3>
                  <p className="mt-3 text-sm leading-6 text-white">
                  Promosyon kalem fiyatlarını etkileyen temel unsurları ve sipariş
                  sürecinde dikkat edilmesi gereken noktaları inceleyin.
                </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">İncele <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div>
                </div>
              </Link>
              <Link href="/rehber/promosyon-kalem-toptan" className="group relative isolate flex min-h-[310px] min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:min-h-[320px] sm:p-6">
                <Image src="/guides/promosyon-kalem-toptan-kapak-20261115.jpg" alt="" fill loading="lazy" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 440px" className="pointer-events-none object-cover" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
                <div className="relative z-10 mt-auto">
                  <span className="inline-flex rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white">Rehber</span>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-white">
                  Toplu Kalem Siparişi Rehberi
                </h3>
                  <p className="mt-3 text-sm leading-6 text-white">
                  Logo baskılı kalemlerde model, baskı ve toplu sipariş
                  sürecini inceleyin.
                </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">İncele <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div>
                </div>
              </Link>
              <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli" className="group relative isolate flex min-h-[310px] min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:min-h-[320px] sm:p-6">
                <Image src="/guides/promosyon-kalem-secerken-nelere-dikkat-edilmeli-kapak-20261115.jpg" alt="" fill loading="lazy" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 440px" className="pointer-events-none object-cover" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
                <div className="relative z-10 mt-auto">
                  <span className="inline-flex rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white">Rehber</span>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-white">Kalem Seçimi ve Numune Kontrolü</h3>
                  <p className="mt-3 text-sm leading-6 text-white">Yazım, tutuş, mürekkep bilgisi ve sipariş onayında kontrol edilecekleri inceleyin.</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">İncele <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div>
                </div>
              </Link>
              <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="group relative isolate flex min-h-[310px] min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:min-h-[320px] sm:p-6">
                <Image src="/guides/promosyon-kalemlerde-baski-turleri-nelerdir-kapak-20261115.jpg" alt="" fill loading="lazy" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 440px" className="pointer-events-none object-cover" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
                <div className="relative z-10 mt-auto">
                  <span className="inline-flex rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold text-white">Rehber</span>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-white">Kalemlerde Baskı Yöntemleri</h3>
                  <p className="mt-3 text-sm leading-6 text-white">Tampon, UV, lazer ve serigrafi yöntemlerini yüzey ve tasarım uygunluğu üzerinden karşılaştırın.</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">İncele <span aria-hidden="true"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      )}
      {/* FP KALEM SUBCATEGORY CARDS V2 */}
      <nav aria-labelledby="kalem-turleri-baslik" className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
        <h2 id="kalem-turleri-baslik" className="text-xl font-bold tracking-tight text-black md:text-2xl">Kalem Türlerine Göre İnceleyin</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">Kalem türlerine göre hazırlanmış sayfalardan modelleri ve logo baskılı sipariş seçeneklerini inceleyebilirsiniz.</p>
        <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3">
          <Link href="/promosyon-rubber-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Rubber Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
          <Link href="/promosyon-kursun-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Kurşun Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
          <Link href="/promosyon-jel-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Jel Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
          <Link href="/promosyon-roller-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Roller Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
          <Link href="/promosyon-dokunmatik-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Dokunmatik Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
          <Link href="/promosyon-plastik-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Plastik Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
          <Link href="/promosyon-metal-kalem" className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold leading-6 text-black transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <span>Metal Kalem Modellerini İncele</span><span aria-hidden="true" className="shrink-0 text-base"><svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span>
          </Link>
        </div>
      </nav>
    </div>
    </div>
  );
}
