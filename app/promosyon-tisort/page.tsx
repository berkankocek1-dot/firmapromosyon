import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";
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

const CATEGORY = "Promosyon Tişört";
const PAGE_URL = `${SITE_URL}/promosyon-tisort`;
const PAGE_TITLE = "Promosyon Tişört Modelleri | Logo Baskılı Bisiklet ve Polo Yaka";
const PAGE_DESCRIPTION = "Logo baskılı pamuklu bisiklet ve polo yaka tişörtleri karşılaştırın. Kumaş, beden, cepli veya cepsiz seçeneklerle toplu personel siparişi için teklif alın.";
const faqItems = [
  {
    "question": "Bisiklet yaka ile polo yaka promosyon tişört arasındaki fark nedir?",
    "answer": "PN-100 bisiklet yaka, tüp model ve %100 pamuk 160 gr Suprem kumaşla; PY-110 polo yaka, cepli/cepsiz ve %100 pamuk 200 gr Open-End kumaşla belirtilir. Yaka görünümü, kumaş ve kullanım ihtiyacını birlikte karşılaştırın."
  },
  {
    "question": "Promosyon tişörtlerde hangi bedenler var?",
    "answer": "PN-100 için S, M, L ve XL; PY-110 için S, M, L, XL ve XXL listelenir. İki model de unisex olarak belirtilir. Aynı beden etiketinin aynı kalıp ölçüsünü gösterdiğini varsaymayın; beden tablosunu ve renk-beden stoklarını sipariş öncesinde teyit edin."
  },
  {
    "question": "Polo tişörtün cepli ve cepsiz renkleri aynı mı?",
    "answer": "Hayır. PY-110 cepli modelde kırmızı, bordo, siyah, lacivert, turkuaz, saks mavi, gri, füme, turuncu, sarı, yeşil ve koyu yeşil; cepsiz modelde beyaz, siyah, lacivert ve gri listelenir. İstenen renk, beden ve cep seçeneğini birlikte teyit edin."
  },
  {
    "question": "Tişörtlere hangi logo baskısı uygulanır?",
    "answer": "PN-100 ve PY-110 için DTF transfer baskı ve tam renk tasarım uygunluğu belirtilir. Baskı konumu, ölçüsü ve adedi tasarıma göre tekliflendirilir. Nakış veya başka bir teknik isteniyorsa uygunluğu ayrıca sorulmalıdır; standart kapsamda kabul edilmez."
  },
  {
    "question": "Tişörtte ön ve arka baskı aynı fiyata dahil mi?",
    "answer": "Logo uygulanacak yüzeyler ve ölçüler teklifte ayrı belirtilmelidir. PN-100 için ön ve arka uygulama seçeneği belirtilir; bu, iki yüz baskının otomatik olarak fiyata dahil olduğu anlamına gelmez. PY-110 yerleşimini de cep ve yaka düzeniyle birlikte teyit edin."
  },
  {
    "question": "Promosyon tişört fiyatına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Model, renk, beden dağılımı, adet ve baskı konumlarına göre güncel teklif isteyin. Fiyatı bulunmayan modeller için teklif alın."
  },
  {
    "question": "Toplu tişört siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi model, renk-beden stoku, miktar, baskı ölçüsü ve tasarım onayına göre netleştirilir. Her renk ve bedenden istediğiniz adedi, logo dosyanızı, teslimat adresini ve etkinlik tarihinizi paylaşın."
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
        alt: "Promosyon Tişört Modelleri",
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
              name: "Promosyon Tişört",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Tişört",
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
          <span className="font-semibold text-black">Promosyon Tişört</span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Tişört
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Pamuklu bisiklet ve polo yaka tişörtleri kumaş, beden ve renk
            seçenekleriyle karşılaştırın. DTF logo baskılı personel,
            fuar ve etkinlik siparişleri için güncel teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-tisort-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <FpCategoryCatalog anchorId="promosyon-tisort-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Promosyon Tişört Seçimi</h2>
            <p>
              Personel kıyafeti, fuar ekibi veya etkinlik dağıtımı için
              tişört seçerken yaka biçimini, kumaşı ve renk-beden dağılımını
              birlikte değerlendirin. Bisiklet yaka PN-100 daha sade bir
              yaka formu; polo yaka PY-110 cepli veya cepsiz seçenek sunar.
            </p>
            <p>
              İki model de %100 pamuk ve unisex olarak listelenir.
              Kumaş gramajı tek başına kalıp veya beden uyumunu göstermez.
              Sipariş öncesinde beden tablosunu ve ürünün belirtilen
              kumaş özelliklerini kontrol edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-black">Bisiklet ve Polo Yaka Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Promosyon tişörtlerin belirtilen kumaş, model, beden ve baskı özellikleri</caption>
                <thead className="bg-white text-black">
                  <tr>
                    <th scope="col" className="px-4 py-3">Özellik</th>
                    <th scope="col" className="px-4 py-3">PN-100</th>
                    <th scope="col" className="px-4 py-3">PY-110</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Yaka", "Bisiklet yaka", "Polo yaka"],
                    ["Kumaş", "%100 pamuk Suprem", "%100 pamuk Open-End"],
                    ["Belirtilen gramaj", "160 gr", "200 gr"],
                    ["Model", "Tüp model; unisex", "Cepli / cepsiz; unisex"],
                    ["Bedenler", "S, M, L, XL", "S, M, L, XL, XXL"],
                    ["Baskı", "DTF transfer; tam renk uygunluğu belirtilir", "DTF transfer; tam renk uygunluğu belirtilir"],
                  ].map(([feature, crew, polo]) => (
                    <tr key={feature}>
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{feature}</th>
                      <td className="px-4 py-4">{crew}</td>
                      <td className="px-4 py-4">{polo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Renkleri Cep Seçeneğiyle Birlikte Kontrol Edin</h2>
            <p>
              PN-100 için beyaz, siyah, gri, kırmızı, lacivert, saks mavi,
              turkuaz, turuncu ve sarı listelenir. Renk ve beden stoklarını
              sipariş miktarınızla birlikte teyit edin.
            </p>
            <p>
              PY-110 cepli modelde kırmızı, bordo, siyah, lacivert,
              turkuaz, saks mavi, gri, füme, turuncu, sarı, yeşil ve koyu
              yeşil; cepsiz modelde beyaz, siyah, lacivert ve gri
              seçenekleri belirtilir. Bir seçenekteki rengi diğer
              seçenekte de mevcut kabul etmeyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Toplu Siparişte Beden Dağılımı</h2>
            <p>
              PN-100 S–XL, PY-110 S–XXL aralığında listelenir.
              Aynı harfle belirtilen bedenlerin farklı modellerde
              aynı kalıp ölçüsüne sahip olduğunu varsaymayın.
              Beden tablosunu isteyerek kullanım ihtiyacınızla karşılaştırın.
            </p>
            <p>
              Her renk için S, M, L, XL ve varsa XXL miktarlarını ayrı
              yazın. Cepli ve cepsiz polo taleplerini de ayrı belirtin.
              Numune ihtiyacınız varsa uygunluğunu teklif aşamasında
              sorun; stok ve üretim planını dağılımınızla birlikte teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">DTF Transfer Logo Baskısı ve Yerleşim</h2>
            <p>
              PN-100 ve PY-110 için belirtilen yöntem DTF transfer
              baskıdır. Logo, marka adı ve tam renk tasarım taleplerini
              ürün rengi ve uygulama alanıyla birlikte değerlendirin.
              Nakış veya başka teknik talebiniz varsa uygunluğu ayrıca teyit edin.
            </p>
            <p>
              PN-100 için ön ve arka yüzey uygulaması belirtilir.
              Bu seçenek iki yüz baskının otomatik olarak fiyata dahil
              olduğu anlamına gelmez. İstenen yüzeyi, baskı ölçüsünü
              ve tasarım sayısını teklif talebinde ayrı yazın.
              PY-110 yerleşiminde cep, düğme ve yaka düzenini dikkate alın.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak
              paylaşın. Küçük yazıları gerçek boyutta kontrol edin;
              farklı bedenlerdeki yerleşimi ve üretim öncesi tasarımı
              teyit edin. Yıkama ve bakım koşullarını ürün ve baskı
              için birlikte isteyin; sabit bir yıkama ömrü varsaymayın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Tişört Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir;
              KDV ayrıca belirtilir. Fiyatı bulunmayan modeller için
              güncel teklif isteyin. Karşılaştırmayı aynı model,
              renk-beden dağılımı ve baskı kapsamıyla yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, kumaş, gramaj ve cep seçeneği.</li>
              <li>Her renk ve bedenden istenen adet.</li>
              <li>Baskı yapılacak yüzeyler, ölçüler ve tasarımlar.</li>
              <li>Varsa ek paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Minimum adet ve teslim süresi stok, miktar ve tasarım
              onayına göre netleştirilir. Personel başlangıç veya
              etkinlik tarihinizi teklif aşamasında paylaşın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Toplu Baskılı Tişört Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>PN-100 veya PY-110 modelini ve varsa cep seçeneğini belirtin.</li>
              <li>Renk ve beden bazında adet listesini paylaşın.</li>
              <li>Logo dosyasını, baskı konumlarını ve ölçülerini iletin.</li>
              <li>Paketleme, teslimat adresi ve etkinlik tarihini bildirin.</li>
              <li>Stok, kalıp ölçüsü, tasarım, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Etkinlik veya ekip sunumunu{" "}
              <Link href="/promosyon-sapka" className="font-semibold text-black underline underline-offset-4">baskılı ve nakışlı şapkalarla</Link>{" "}
              ya da dağıtım için{" "}
              <Link href="/promosyon-ham-bez-tela-canta" className="font-semibold text-black underline underline-offset-4">ham bez ve tela çantalarla</Link>{" "}
              tamamlayabilirsiniz. Bu ürünleri ve uygulamalarını ayrıca tekliflendirin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Baskılı Tişört İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Promosyon Tişört Hakkında Sık Sorulan Sorular</h2>
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
      <section aria-labelledby="tisort-dtf-rehberi" className="mt-12 rounded-2xl border border-gray-200 !bg-white p-5">
        <h2 id="tisort-dtf-rehberi" className="text-xl font-bold !text-black">Tişört Logo Uygulaması Hakkında</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/dtf-baski-nedir" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/dtf-baski-nedir-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">DTF Baskı Nedir, Nasıl Uygulanır?</h3><p className="mt-2 text-sm leading-6 text-white/90">Filmden tekstile transferi, kumaş uygunluğunu, numune ve bakım bilgilerini inceleyin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
