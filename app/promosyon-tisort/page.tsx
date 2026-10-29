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
          <span className="font-semibold text-white">Promosyon Tişört</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Tişört
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Pamuklu bisiklet ve polo yaka tişörtleri kumaş, beden ve renk
            seçenekleriyle karşılaştırın. DTF logo baskılı personel,
            fuar ve etkinlik siparişleri için güncel teklif alın.
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

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
                loading="lazy"
                className="object-contain p-4"
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
              {p.price && (
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
          <section className="max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Promosyon Tişört Seçimi</h2>
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
            <h2 className="text-2xl font-bold text-white">Bisiklet ve Polo Yaka Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Promosyon tişörtlerin belirtilen kumaş, model, beden ve baskı özellikleri</caption>
                <thead className="bg-white/10 text-white">
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
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{feature}</th>
                      <td className="px-4 py-4">{crew}</td>
                      <td className="px-4 py-4">{polo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Renkleri Cep Seçeneğiyle Birlikte Kontrol Edin</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplu Siparişte Beden Dağılımı</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">DTF Transfer Logo Baskısı ve Yerleşim</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Tişört Fiyatlarını Karşılaştırırken</h2>
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
            <h2 className="text-2xl font-bold text-white">Toplu Baskılı Tişört Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>PN-100 veya PY-110 modelini ve varsa cep seçeneğini belirtin.</li>
              <li>Renk ve beden bazında adet listesini paylaşın.</li>
              <li>Logo dosyasını, baskı konumlarını ve ölçülerini iletin.</li>
              <li>Paketleme, teslimat adresi ve etkinlik tarihini bildirin.</li>
              <li>Stok, kalıp ölçüsü, tasarım, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Etkinlik veya ekip sunumunu{" "}
              <Link href="/promosyon-sapka" className="font-semibold text-white underline underline-offset-4">baskılı ve nakışlı şapkalarla</Link>{" "}
              ya da dağıtım için{" "}
              <Link href="/promosyon-ham-bez-tela-canta" className="font-semibold text-white underline underline-offset-4">ham bez ve tela çantalarla</Link>{" "}
              tamamlayabilirsiniz. Bu ürünleri ve uygulamalarını ayrıca tekliflendirin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Baskılı Tişört İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Promosyon Tişört Hakkında Sık Sorulan Sorular</h2>
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
