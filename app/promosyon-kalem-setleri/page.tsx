import Image from "next/image";
import Link from "next/link";
import KalemSetiProductGrid from "./KalemSetiProductGrid";
import type { Metadata } from "next";
import { visibleProducts as products } from "@/data/productVisibility";
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

const CATEGORY = "Kalem Setleri";
const PAGE_URL = `${SITE_URL}/promosyon-kalem-setleri`;
const PAGE_TITLE = "Promosyon Kalem Setleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı kutulu kalem, dolma kalem ve anahtarlıklı set modellerini karşılaştırın. Set içeriği, kutu baskısı ve toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon kalem seti minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi modele, stok durumuna ve logo uygulamasına göre değişir. Kalem seti ile ayrı satılan kalem kutusunun sipariş koşulları aynı olmayabilir. Ürün kodunu ve istediğiniz set ya da kutu adedini paylaşarak koşulları teyit edin."
  },
  {
    "question": "Kalem setinde kutu ve tüm parçalar fiyata dahil mi?",
    "answer": "Set içeriği ürün bazında kontrol edilmelidir. Kategoride set modellerinin yanında ayrı kalem kutuları da bulunur; kutu ürünü satın alırken kalemin dahil olduğunu varsaymayın. Teklifte kutu, kalem, varsa anahtarlık ve diğer parçaları ayrı belirtin."
  },
  {
    "question": "Kalem seti fiyatlarına logo baskısı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Kalem üzerindeki logo, kutu baskısı ve varsa diğer parçalardaki uygulamalar teklif aşamasında netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyin."
  },
  {
    "question": "Kaleme ve kutuya aynı logo uygulanabilir mi?",
    "answer": "Uygun modellerde iki alana da uygulama değerlendirilebilir; ancak yöntem ve kullanılabilir alan farklı olabilir. Kalemde lazer, uygun kutuda serigraf veya ürüne uygun başka bir teknik seçilebilir. Her iki parçanın uygunluğunu ve bedelini ayrı teyit edin."
  },
  {
    "question": "Dolma kalem ile roller veya tükenmez kalem nasıl karşılaştırılır?",
    "answer": "Yazım türü, uç, mürekkep veya refil sistemi, tutuş ve kullanım alışkanlığı birlikte değerlendirilmelidir. Dolma kalemde kartuş ya da dolum bilgisine; diğer modellerde refil türüne ve mürekkep rengine bakın. Set adına bakarak içindeki tüm kalemlerin aynı yazım türünde olduğunu varsaymayın."
  },
  {
    "question": "Kalem setine kişiye özel isim yazılabilir mi?",
    "answer": "İsim uygulaması talebiniz varsa seçilen modelde yapılabilirliğini teklif aşamasında sorun. Uygun yüzey ve logo alanı incelendikten sonra yerleşim, yazı ölçüsü, isim listesi ve ek maliyet netleştirilir. Kişiselleştirmenin standart uygulamaya dahil olduğunu varsaymayın."
  },
  {
    "question": "Toplu kalem seti siparişi ne kadar sürede hazırlanır?",
    "answer": "Stok, renk dağılımı, adet, logo onayı, kutu baskısı ve varsa kişiselleştirme süreyi etkiler. Etkinlik tarihinizi, teslimat adresini ve ambalaj talebini paylaşın; set içeriğini, toplam bedeli ve net teslim süresini sipariş öncesinde teyit edin."
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
        alt: "Promosyon Kalem Setleri",
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
              name: "Promosyon Kalem Setleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kalem Setleri",
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

      <section className="rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-black hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">
            Promosyon Kalem Setleri
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Kalem Setleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Kutulu kalem, dolma kalem ve anahtarlıklı set modellerini inceleyin.
            Set içeriğini, yazım türünü ve kutu üzerindeki logo seçeneklerini
            karşılaştırarak kurumsal hediye siparişiniz için teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-kalem-setleri-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <KalemSetiProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kurumsal Hediye İçin Hangi Kalem Seti Seçilmeli?</h2>
            <p>
              Bayi toplantısı, çalışan hediyesi veya müşteri ziyareti için set
              seçerken kalemin yazım türünü ve kutunun sunum biçimini birlikte
              değerlendirin. Setin kaç parçadan oluştuğunu, kutunun dahil olup
              olmadığını ve her parçanın logo alanını ürün detayından kontrol edin.
            </p>
            <p>
              Yukarıdaki filtrelerle lazer uygulaması, kutu serigraf baskısı,
              dolma kalem, kalem ve anahtarlık, renk seçeneği ve kalem kutusu
              gruplarını inceleyebilirsiniz. Aynı kategoride bulunmaları bütün
              ürünlerin aynı parçalardan oluştuğu anlamına gelmez.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-black">Kalem Setlerini ve Kalem Kutularını Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Kalem seti grupları, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white text-black">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Kutulu kalem", "Müşteri, bayi ve çalışan hediyeleri", "Kalem sayısı, yazım türü ve kutu içeriği"],
                    ["Dolma kalem seti", "Yazım tercihine göre kurumsal hediyeler", "Kartuş veya dolum sistemi ve dahil aksesuarlar"],
                    ["Kalem ve anahtarlık", "Birden fazla parçalı hediye sunumları", "Her parçanın malzemesi ve ayrı logo alanı"],
                    ["Ayrı kalem kutusu", "Uyumlu bir kalemi kutulu sunmak", "Kalemin dahil olup olmadığı, kutu ölçüsü ve iç yuva"],
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
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Yazım Türü, Refil ve Kutu Uyumu</h2>
            <p>
              Roller, tükenmez veya dolma kalem tercihini kullanıcı alışkanlığına
              göre yapın. Mürekkep rengi, uç ve refil bilgilerini seçilen modelden
              kontrol edin. Dolma kalemde kartuş ya da dolum sistemini ve kutuya
              dahil aksesuarları ayrıca öğrenin.
            </p>
            <p>
              Ayrı kalem kutusu alacaksanız dış ölçü tek başına yeterli değildir.
              Kalemin boyu ve çapıyla birlikte iç yuvanın biçimini ve kutunun
              kapanışını teyit edin. Bir kutuya görselde kalem yerleştirilmiş
              olması, fiyatın kalemi de kapsadığı anlamına gelmez.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-black">Kalem ve Kutuya Logo Uygulaması</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-black">Kalem üzerindeki logo</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Uygun yüzeylerde lazer veya modelin desteklediği başka bir
                  yöntem seçilebilir. Klips, gövde biçimi ve kaplama uygulama
                  alanını etkiler. Logoyu gerçek ölçüde değerlendirin.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-black">Kutu ve diğer parçalar</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Uygun kutularda serigraf veya ürüne uygun başka bir uygulama
                  değerlendirilebilir. Varsa anahtarlık için de ayrı yöntem ve
                  alan belirlenir. Tüm parçaların baskısını teklif talebinde belirtin.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-4xl leading-7 text-gray-600">
              Aynı logonun farklı yüzeylerdeki görünümü değişebilir. Mümkünse
              vektörel PDF, AI, EPS veya SVG paylaşın; kalem, kutu ve ek parçaların
              yerleşimini ayrı netleştirin. Kişiye özel isim talebiniz varsa
              uygulanabilirliğini ve ek maliyetini önceden sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Kalem Seti Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca
              belirtilir. Teklifleri aynı ürün kodu, aynı set adedi ve aynı logo
              kapsamıyla karşılaştırın. Fiyatı bulunmayan modeller için güncel teklif isteyin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Sete dahil kalem, anahtarlık, kutu ve diğer parçalar.</li>
              <li>Yazım türü, malzeme, renk seçeneği ve sipariş adedi.</li>
              <li>Her parça için logo yöntemi, konumu ve uygulama sayısı.</li>
              <li>Varsa isim uygulaması, paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Toplam set sayısı ile toplam parça sayısını ayırın. Kalem ve kutu
              baskılarının tek bedel mi yoksa ayrı kalemler mi olduğunu teyit
              ederek baskılı siparişin toplamını netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Toptan Kalem Seti Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, set içeriğini, rengi ve istediğiniz set adedini belirtin.</li>
              <li>Logo dosyanızı ve uygulama istediğiniz parçaları paylaşın.</li>
              <li>Varsa isim listesi, kutulama ve ayrı paketleme talebini ekleyin.</li>
              <li>Etkinlik tarihinizi ve teslimat adresini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Tekli ürünlerle karşılaştırma yapmak için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-black underline underline-offset-4">promosyon kalem</Link>{" "}
              ve{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-black underline underline-offset-4">anahtarlık modellerini</Link>{" "}
              inceleyebilirsiniz. Paketinizi{" "}
              <Link href="/promosyon-defter" className="font-semibold text-black underline underline-offset-4">defter</Link>{" "}
              ile tamamlamak istiyorsanız kutu uyumunu ve birlikte teslimat
              isteğinizi ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Kalem Seti Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Promosyon Kalem Setleri Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-black">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <section aria-labelledby="kalem-seti-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="kalem-seti-rehberi-baslik" className="text-xl font-bold !text-black">Kalem Setinin İçeriğini ve Markalamasını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Yazım türü, kutu uyumu ve parça başına logo alanını karşılaştırın; isim uygulamasıyla set bazında teklif kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-kalem-seti-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-kalem-seti-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Kalem Seti Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Kalem seti ile ayrı kalem kutusunu ayırın; yazım türü, kutu uyumu ve her parçanın logo alanını değerlendirin. İsim uygulaması ve set bazında teklif kapsamını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
