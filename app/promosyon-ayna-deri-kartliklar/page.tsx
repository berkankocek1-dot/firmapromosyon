import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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

const CATEGORY = "Ayna ve Deri Kartlıklar";
const PAGE_URL = `${SITE_URL}/promosyon-ayna-deri-kartliklar`;

const PAGE_TITLE = "Promosyon Ayna ve Manikür Setleri | Logo Baskılı Modeller";
const PAGE_DESCRIPTION = "Logo baskılı katlanır ve derili cep aynaları ile aynalı manikür setini karşılaştırın. Ölçü, renk, baskı alanı ve toptan sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Bu kategoride hangi promosyon ayna modelleri bulunur?",
    "answer": "AY-100 katlanır cep aynası, AY-110 derili cep aynası, AY-120 kare cep aynası ve MNK-100 aynalı manikür seti listelenir. Ayna ile manikür setinin kullanım ve teslim kapsamını ayrı değerlendirin."
  },
  {
    "question": "Cep aynalarının ölçüleri nedir?",
    "answer": "AY-110 için 60 mm, AY-120 için 60 x 60 mm ürün ölçüsü belirtilir. AY-100 ve MNK-100 ölçüleri sipariş öncesinde teyit edilir. Ürün ölçüsünü logo baskı alanıyla aynı kabul etmeyin."
  },
  {
    "question": "Aynalara hangi logo baskıları yapılır?",
    "answer": "AY-110 ve AY-120 için serigrafi, tampon, UV ve dijital baskı seçenekleri belirtilir. AY-100 ve MNK-100 için yöntem ve alan teklif aşamasında netleştirilir. Uygun teknik logo renkleri, yüzey ve tasarıma göre seçilir."
  },
  {
    "question": "AY-120 kare aynanın baskı alanı 55 x 55 mm mi?",
    "answer": "Ürün bilgisi baskı alanını yalnızca 55 mm olarak belirtir. Bu değer 55 x 55 mm olarak varsayılmamalıdır. Kesin şekil, kullanılabilir alan ve logo yerleşimi tasarım çalışmasıyla sipariş öncesinde teyit edilir."
  },
  {
    "question": "MNK-100 manikür setinde hangi parçalar bulunur?",
    "answer": "MNK-100 aynalı tasarıma sahip 5 parça set olarak belirtilir. Parçaların tek tek listesi ve aynanın parça sayısına dahil olup olmadığı kaynakta açıklanmadığından kesin teslim içeriği sipariş öncesinde teyit edilir."
  },
  {
    "question": "Promosyon ayna fiyatına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, alanı, sipariş adedi ve varsa ek paketlemeye göre güncel teklif hazırlanır. Fiyatı bulunmayan modeller için teklif isteyebilirsiniz."
  },
  {
    "question": "Toplu ayna siparişinde renk, minimum adet ve teslim süresi nasıl belirlenir?",
    "answer": "AY-100 için gümüş; AY-110 ve AY-120 için beyaz; MNK-100 için mavi, yeşil, pembe ve kırmızı listelenir. Renk stokları, minimum adet ve teslim süresi teklif aşamasında teyit edilir. Koli/kutu adetleri minimum sipariş koşulu değildir."
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
        alt: "Promosyon Ayna ve Deri Kartlıklar",
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
              name: "Promosyon Ayna ve Deri Kartlıklar",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ayna ve Deri Kartlıklar",
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
            Promosyon Ayna ve Deri Kartlıklar
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Ayna ve Deri Kartlıklar
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Katlanır cep aynası, derili ayna ve aynalı manikür setini ölçü,
            renk ve logo uygulamasına göre karşılaştırın. Kozmetik, güzellik
            ve kişisel bakım kampanyaları için toplu sipariş teklifi alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-ayna-deri-kartliklar-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>



      <FpCategoryCatalog anchorId="promosyon-ayna-deri-kartliklar-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Güncel teklif için iletişime geçin."}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Cep Aynası ve Manikür Seti Seçimi</h2>
            <p>
              Güzellik merkezi tanıtımı, kozmetik kampanyası veya etkinlik
              hediyesi için cep aynalarını değerlendirebilirsiniz. Ürün seçiminde
              taşınabilir formu, ölçüyü, renk tercihini ve logonun uygulanacağı
              yüzeyi birlikte karşılaştırın.
            </p>
            <p>
              AY-100 katlanır ayna, AY-110 derili ayna ve AY-120 kare ayna olarak
              listelenir. MNK-100 ise ayna ile manikür setini birleştirir.
              Derili ifadesi tek başına gerçek deri olduğunu göstermez;
              malzeme beklentinizi seçilen model için ayrıca teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-black">Ayna Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Cep aynaları ve aynalı manikür setinin belirtilen ölçü ve logo bilgileri</caption>
                <thead className="bg-white text-black">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ürün bilgisi</th>
                    <th scope="col" className="px-4 py-3">Logo uygulaması</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["AY-100", "Katlanır ayna; gümüş", "Yöntem ve alan teklifte belirlenir"],
                    ["AY-110", "60 mm derili ayna; beyaz", "55 mm alan; serigrafi, tampon, UV, dijital"],
                    ["AY-120", "60 x 60 mm kare ayna; beyaz", "55 mm olarak belirtilen alan; serigrafi, tampon, UV, dijital"],
                    ["MNK-100", "5 parça aynalı manikür seti", "Yöntem, alan ve kesin set içeriği teyit edilir"],
                  ].map(([model, features, printing]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{features}</td>
                      <td className="px-4 py-4">{printing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Ürün Ölçüsü ve Logo Alanını Ayrı Değerlendirin</h2>
            <p>
              AY-110 için 60 mm ürün ölçüsü ve 55 mm baskı alanı belirtilir.
              AY-120 ürün ölçüsü 60 x 60 mm olsa da baskı alanı kaynakta yalnızca
              55 mm olarak verilir. Bu bilgiyi 55 x 55 mm olarak genişletmeyin;
              kullanılabilir şekli ve yerleşimi tasarım çalışmasında netleştirin.
            </p>
            <p>
              AY-100 ve MNK-100 için doğrulanmış ürün ölçüsü veya baskı alanı
              belirtilmediğinden sipariş öncesinde teyit edin. Büyütme oranı,
              ışık veya farklı ayna yüzeyleri gibi özellikleri de modelde
              açıkça belirtilmeden standart kabul etmeyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Aynalı Manikür Setinde İçerik ve Renkler</h2>
            <p>
              MNK-100, aynalı ve 5 parça set olarak sunulur. Sipariş verirken
              parçaların tek tek listesini ve aynanın parça sayısına dahil
              olup olmadığını teyit edin. Görselden hareketle malzeme türü veya
              kesin araç listesi belirlemeyin.
            </p>
            <p>
              MNK-100 için mavi, yeşil, pembe ve kırmızı; AY-100 için gümüş;
              AY-110 ve AY-120 için beyaz listelenir. Renk dağılımınızı ve
              güncel stok uygunluğunu teklif aşamasında netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Serigrafi, Tampon, UV ve Dijital Baskı Seçenekleri</h2>
            <p>
              AY-110 ve AY-120 için serigrafi, tampon, UV ve dijital baskı
              seçenekleri belirtilir. Uygun yöntem, logo renkleri ve yüzeyle
              birlikte değerlendirilir. AY-100 ile MNK-100 yöntem ve alanı ise
              teklif aşamasında belirlenir.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              İstenen konumu, renkleri ve ek yazıları belirtin; küçük yazı ve
              ince çizgilerin gerçek uygulama boyutunda okunabilirliğini kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Ayna ve Manikür Seti Fiyatları</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Aynı model, adet ve logo kapsamıyla karşılaştırma yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, ölçü, malzeme ve varsa setin kesin içeriği.</li>
              <li>Logo yöntemi, uygulama alanı ve renk sayısı.</li>
              <li>Sipariş adedi, renk dağılımı ve stok.</li>
              <li>Standart ambalaj, ek kutulama, sevkiyat ve KDV.</li>
            </ul>
            <p>
              AY-110 ve AY-120 için belirtilen 1000 / 50 koli-kutu bilgisi
              minimum sipariş adedi değildir. Minimum miktarı ve dahil
              ambalajı ayrıca teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Toplu Ayna Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, adedi ve renk tercihinizi paylaşın.</li>
              <li>Ölçü, malzeme ve varsa set içeriğini teyit edin.</li>
              <li>Logo dosyanızı, konum ve baskı beklentinizi belirtin.</li>
              <li>Paketleme, teslimat adresi ve etkinlik tarihi taleplerini iletin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Kart taşımaya yönelik ürünler için{" "}
              <Link href="/promosyon-kartvizitlik" className="font-semibold text-black underline underline-offset-4">kartvizitlik modellerini</Link>,{" "}
              çok parçalı kurumsal sunumlar için{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-black underline underline-offset-4">VIP hediye setlerini</Link>{" "}
              de inceleyebilirsiniz. Birlikte sipariş edilecek ürünleri ve
              kutu taleplerini teklifte ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Ayna ve Manikür Seti İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Ayna ve Manikür Setleri Hakkında Sık Sorulan Sorular</h2>
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
      <section aria-labelledby="cep-aynasi-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="cep-aynasi-rehberi-baslik" className="text-xl font-bold !text-black">Cep Aynasını ve Aynalı Set İçeriğini Karşılaştırın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Açılma biçimini, ayna özelliklerini, set içeriğini ve kapak üzerindeki logo alanını ayrı değerlendirerek kampanya hediyesini seçin.</p>
        <Link href="/rehber/promosyon-cep-aynasi-ve-aynali-set-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-cep-aynasi-ve-aynali-set-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Cep Aynası ve Aynalı Set Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Cep aynası ve aynalı setleri form, kapak ve kullanım kapsamıyla karşılaştırın. Ayna özelliklerini, set içeriğini ve logo alanını ayrı değerlendirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
