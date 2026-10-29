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

const CATEGORY = "Ahşap ve Deri Masaüstü Ürünler";
const PAGE_URL = `${SITE_URL}/promosyon-ahsap-ve-deri-masaustu-urunler`;

const PAGE_TITLE = "Promosyon Ahşap ve Deri Masaüstü Ürünler | Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı suni deri masaüstü organizer ve bardak altlığı setlerini karşılaştırın. Bölme, ölçü ve toptan sipariş seçenekleri için teklif alın.";
const faqItems = [
  {
    "question": "Masaüstü organizer modelleri gerçek deri mi?",
    "answer": "Bu sayfada listelenen MS serisi organizer ve bardak altlığı modellerinin ürün bilgilerinde suni deri belirtilir. Kategori adındaki deri ifadesi gerçek deri anlamına gelmez; malzeme beklentinizi seçtiğiniz ürün koduyla birlikte teyit edin."
  },
  {
    "question": "Telefon standlı masaüstü organizer hangileridir?",
    "answer": "MS-150 ve MS-160 modellerinde telefon standı belirtilir. MS-150 ayrıca notluk ve aksesuar bölmesine sahiptir. Telefonun ve varsa kılıfının ölçüsünü paylaşarak standla uyumunu sipariş öncesinde kontrol edin."
  },
  {
    "question": "Bardak altlığı setleri kaç parçadan oluşur?",
    "answer": "MS-195 ürün bilgisinde 4 bardak altlığı ve taşıma standı belirtilir. MS-190 standlı set olarak sunulur; bardak altlığı adedi belirtilmediği için sipariş öncesinde teyit edilmelidir. İki modelin içeriğini aynı kabul etmeyin."
  },
  {
    "question": "Masaüstü ürünlerine hangi yöntemle logo uygulanır?",
    "answer": "Uygulama yöntemi, konumu ve alanı seçilen modelin yüzeyine ve logo tasarımına göre teklif aşamasında netleştirilir. Vektörel logo dosyanızı ve istediğiniz yerleşimi paylaşarak uygunluğu teyit edin."
  },
  {
    "question": "Masaüstü organizer fiyatına baskı ve KDV dahil mi?",
    "answer": "Ürün kartlarında gösterilen fiyatlar baskı hariçtir ve KDV ayrıca belirtilir. Logo uygulaması, adet, paketleme ve sevkiyat kapsamını güncel teklifte kontrol edin."
  },
  {
    "question": "Toplu masaüstü ürün siparişinde minimum adet nedir?",
    "answer": "Minimum sipariş adedi model, stok ve logo uygulamasına göre teklif aşamasında teyit edilir. İstediğiniz ürün kodunu, rengi ve miktarı paylaşarak baskılı veya baskısız sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Kurumsal masaüstü hediye siparişi ne zaman teslim edilir?",
    "answer": "Teslim süresi stok, adet, renk, logo onayı ve paketleme taleplerine bağlıdır. Etkinlik tarihinizi ve teslimat adresini paylaşın; ürün içeriğini, tasarım yerleşimini ve net teslim süresini sipariş öncesinde teyit edin."
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
        alt: "Promosyon Ahşap ve Deri Masaüstü Ürünler",
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
              name: "Promosyon Ahşap ve Deri Masaüstü Ürünler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ahşap ve Deri Masaüstü Ürünler",
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
            Promosyon Ahşap ve Deri Masaüstü Ürünler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Ahşap ve Deri Masaüstü Ürünler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Suni deri masaüstü organizer, kalemlik ve bardak altlığı setlerini
            bölme düzeni, ölçü ve kullanım ihtiyacına göre karşılaştırın.
            Logo uygulaması ve toplu kurumsal sipariş için teklif alın.
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
            <h2 className="text-2xl font-bold text-white">Logo Baskılı Masaüstü Organizer ve Bardak Altlığı Modelleri</h2>
            <p>
              Ofis masası için ürün seçerken önce kullanım ihtiyacını belirleyin.
              Kalem ve kartvizitleri bir arada tutmak, telefon için bir yer ayırmak
              veya toplantı masasında bardak altlığı kullanmak farklı çözümler gerektirir.
              Her modelde aynı bölmeler bulunmaz.
            </p>
            <p>
              Listelenen MS serisi modellerin malzemesi suni deridir.
              Gerçek deri talebiniz varsa malzeme bilgisini ayrıca teyit edin.
              Ürün ölçüsü, masa üzerindeki yerleşim ve logo alanı ayrı ayrı değerlendirilmelidir.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Masaüstü Ürünlerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Masaüstü ürünlerinin ürün bilgilerinde belirtilen ölçüleri ve içerikleri</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ölçü / içerik</th>
                    <th scope="col" className="px-4 py-3">Bölmeler / kullanım</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["MS-130", "22,5 x 10 x 8,5 cm", "Çift kalemlik ve kartvizit haznesi"],
                    ["MS-140", "28,5 x 10,5 x 11 cm", "Kalemlik, kartvizitlik, notluk ve ataçlık"],
                    ["MS-150", "24 x 10 x 10 cm", "Telefon standı, kalemlik, kartvizitlik, notluk ve aksesuar bölmesi"],
                    ["MS-160", "10,5 x 21 x 10,5 cm", "Telefon standı, kalemlik ve kartvizitlik"],
                    ["MS-170", "22 x 10,5 x 11 cm", "Kalemlik, kartvizitlik ve not kağıdı bölmesi"],
                    ["MS-190", "11 cm çap; set adedi teyit edilir", "Standlı yuvarlak bardak altlığı seti"],
                    ["MS-195", "4 bardak altlığı ve taşıma standı", "Yuvarlak bardak altlığı seti"],
                  ].map(([model, size, features]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{size}</td>
                      <td className="px-4 py-4">{features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Bölme Düzeni ve Masa Üzerindeki Yerleşim</h2>
            <p>
              Kartvizit ve kalemleri düzenlemek için MS-130 gibi bir model;
              not kağıdı ve küçük aksesuarları da ayırmak için MS-140 veya MS-170
              değerlendirilebilir. Telefon standı arıyorsanız MS-150 ve MS-160
              seçeneklerinin bölme düzenlerini karşılaştırın.
            </p>
            <p>
              Masada ayıracağınız alanı ürünün belirtilen ölçüleriyle kontrol edin.
              Telefon standında cihaz ve kılıf ölçüsünü, notlukta kullanılacak
              kağıt boyutunu teyit edin. Görselde yer alan kalem, telefon ve
              not kağıtlarının standart siparişe dahil olduğunu varsaymayın.
            </p>
            <p>
              Yazı alanını da tamamlamak için{" "}
              <Link href="/promosyon-masa-sumeni" className="font-semibold text-white underline underline-offset-4">masa sümeni</Link>{" "}
              seçeneklerini inceleyebilirsiniz. Masaüstü organizer ile ajanda
              biçimindeki{" "}
              <Link href="/promosyon-organizerler" className="font-semibold text-white underline underline-offset-4">organizer modelleri</Link>{" "}
              farklı kullanım ihtiyaçlarına yöneliktir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Standlı Bardak Altlığı Setinde İçeriği Kontrol Edin</h2>
            <p>
              MS-190 ve MS-195, suni deri kaplamalı yuvarlak bardak altlığı
              setleridir. MS-195 için 4 altlık ve taşıma standı belirtilir.
              MS-190 modelinde çap 11 cm olarak verilir; altlık adedi ise
              sipariş öncesinde teyit edilmelidir.
            </p>
            <p>
              Masa veya toplantı odası başına kaç altlık gerektiğini belirleyerek
              set miktarını hesaplayın. Renk, stand içeriği, logo konumu ve ambalajı
              birlikte netleştirin. Bir modelin ölçü veya parça sayısını diğerine uygulamayın.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Suni Deri Yüzeyde Logo Uygulaması</h2>
            <p>
              Logo yöntemi ve uygulanabilir alan, seçilen modelin yüzeyi ile
              tasarıma göre teklif aşamasında belirlenir. Dikişler, kenarlar ve
              bölmeler kullanılabilir alanı etkileyebilir; ürünün dış ölçüsünü
              baskı ölçüsü olarak değerlendirmeyin.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG dosyası olarak
              paylaşın. İstenen renk, konum ve ölçüyü belirtin; küçük yazıların
              gerçek uygulama boyutunda okunabilirliğini kontrol edin.
              Yöntemi ve yerleşimi sipariş öncesinde teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Masaüstü Ürün Fiyatlarını Karşılaştırırken</h2>
            <p>
              Kartlarda gösterilen fiyatlar baskı hariçtir; KDV ayrıca belirtilir.
              Güncel toplam tutarı aynı ürün kodu, adet ve uygulama kapsamıyla
              karşılaştırın. Set fiyatında kaç parça bulunduğunu ayrıca kontrol edin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, malzeme, ölçü ve bölme düzeni.</li>
              <li>Logo yöntemi, uygulama alanı ve renk talebi.</li>
              <li>Sipariş adedi, renk dağılımı ve set içeriği.</li>
              <li>Standart ambalaj, varsa ek paketleme, sevkiyat ve KDV.</li>
            </ul>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Kurumsal Sipariş İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, rengi ve istediğiniz adedi belirtin.</li>
              <li>Set içeriğini ve birlikte sipariş edilecek aksesuarları netleştirin.</li>
              <li>Logo dosyanızı, uygulama konumunu ve varsa ek yazıları paylaşın.</li>
              <li>Paketleme talebinizi, teslimat adresini ve etkinlik tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam tutar ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Masaüstü hediyesini{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem setleriyle</Link>{" "}
              tamamlayabilirsiniz. Birlikte alınacak parçaları ve ambalaj
              beklentinizi teklifte ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Masaüstü Ürünler İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Masaüstü Ürünler Hakkında Sık Sorulan Sorular</h2>
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
