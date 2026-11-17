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
            Promosyon Ahşap ve Deri Masaüstü Ürünler
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Ahşap ve Deri Masaüstü Ürünler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Suni deri masaüstü organizer, kalemlik ve bardak altlığı setlerini
            bölme düzeni, ölçü ve kullanım ihtiyacına göre karşılaştırın.
            Logo uygulaması ve toplu kurumsal sipariş için teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-ahsap-ve-deri-masaustu-urunler-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-deri-kalemlik-ms-130-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <FpCategoryCatalog anchorId="promosyon-ahsap-ve-deri-masaustu-urunler-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Masaüstü Organizer ve Bardak Altlığı Modelleri</h2>
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
            <h2 className="text-2xl font-bold text-black">Masaüstü Ürünlerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Masaüstü ürünlerinin ürün bilgilerinde belirtilen ölçüleri ve içerikleri</caption>
                <thead className="bg-white text-black">
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
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{size}</td>
                      <td className="px-4 py-4">{features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Bölme Düzeni ve Masa Üzerindeki Yerleşim</h2>
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
              <Link href="/promosyon-masa-sumeni" className="font-semibold text-black underline underline-offset-4">masa sümeni</Link>{" "}
              seçeneklerini inceleyebilirsiniz. Masaüstü organizer ile ajanda
              biçimindeki{" "}
              <Link href="/promosyon-organizerler" className="font-semibold text-black underline underline-offset-4">organizer modelleri</Link>{" "}
              farklı kullanım ihtiyaçlarına yöneliktir.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Standlı Bardak Altlığı Setinde İçeriği Kontrol Edin</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Suni Deri Yüzeyde Logo Uygulaması</h2>
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

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Masaüstü Ürün Fiyatlarını Karşılaştırırken</h2>
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
            <h2 className="text-2xl font-bold text-black">Toplu Kurumsal Sipariş İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, rengi ve istediğiniz adedi belirtin.</li>
              <li>Set içeriğini ve birlikte sipariş edilecek aksesuarları netleştirin.</li>
              <li>Logo dosyanızı, uygulama konumunu ve varsa ek yazıları paylaşın.</li>
              <li>Paketleme talebinizi, teslimat adresini ve etkinlik tarihini bildirin.</li>
              <li>Stok, tasarım yerleşimi, toplam tutar ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Masaüstü hediyesini{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-black underline underline-offset-4">kalem setleriyle</Link>{" "}
              tamamlayabilirsiniz. Birlikte alınacak parçaları ve ambalaj
              beklentinizi teklifte ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Masaüstü Ürünler İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Masaüstü Ürünler Hakkında Sık Sorulan Sorular</h2>
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
    <section className="mt-12 rounded-2xl bg-white p-6 text-black" aria-label="Bardak altlığı modelleri"><h2 className="text-xl font-bold !text-black">Promosyon Bardak Altlığı Modelleri</h2><p className="mt-2 text-sm leading-6 !text-gray-700">BA-650 ile MS-190 ve MS-195 suni deri setleri ölçü, içerik ve logo uygulamasıyla karşılaştırın.</p><Link href="/promosyon-bardak-altligi" className="mt-3 inline-flex font-semibold !text-black underline">Bardak Altlığı Modellerini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></Link></section>
      <section aria-labelledby="masaustu-sumen-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="masaustu-sumen-rehberi-baslik" className="text-xl font-bold !text-black">Masaüstü Ürünlerini ve Sümen Yerleşimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Masa alanı, bölmeler, set içeriği ve malzemeyi birlikte değerlendirin; her parçanın logo alanını ve teslim kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-masaustu-urunleri-ve-sumen-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-masaustu-urunleri-ve-sumen-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Masaüstü Ürünleri ve Sümen Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Masaüstü organizer, sümen ve kristal masa setlerini alan, içerik ve malzemeyle değerlendirin. Bölme uyumu, parça başına logo ve kurumsal dağıtımı planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
