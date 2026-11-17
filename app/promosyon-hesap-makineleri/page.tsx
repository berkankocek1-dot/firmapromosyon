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

const CATEGORY = "Hesap Makineleri";
const PAGE_URL = `${SITE_URL}/promosyon-hesap-makineleri`;

const PAGE_TITLE = "Promosyon Hesap Makinesi Modelleri | 12 Haneli ve Logo Baskılı";
const PAGE_DESCRIPTION = "Logo baskılı 12 haneli hesap makinelerini ölçü, baskı alanı ve not ekranı seçenekleriyle karşılaştırın. Toptan kurumsal sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Promosyon hesap makineleri kaç hanelidir?",
    "answer": "Bu kategoride listelenen HM-100, HM-110, HM-120, HM-130, HM-140 ve HM-150 modellerinin tamamı 12 hanelidir. Hane sayısı tek başına vergi, hafıza veya bilimsel hesaplama gibi ek işlevlerin bulunduğunu göstermez; ihtiyaç duyduğunuz işlevleri sipariş öncesinde teyit edin."
  },
  {
    "question": "HM-100 ile HM-110 arasındaki fark nedir?",
    "answer": "HM-100 için 175 x 125 x 40 mm ürün ölçüsü ve 30 x 15 mm baskı alanı; HM-110 için 172 x 104 x 12 mm ürün ölçüsü ve 55 x 15 mm baskı alanı belirtilir. İki model de beyaz, 12 haneli ve serigrafi veya tampon baskı seçenekli olarak listelenir."
  },
  {
    "question": "Yazılabilir not ekranlı hesap makinesi hangisidir?",
    "answer": "HM-140, 12 haneli hesap makinesini yan bölümdeki yazılabilir not ekranı ve yazım kalemiyle birleştiren kapaklı modeldir. Not ekranının kullanım ve silme ayrıntılarını sipariş öncesinde teyit edin; dijital kayıt veya veri aktarımı özelliği belirtilmez."
  },
  {
    "question": "Hesap makinelerine hangi logo baskıları yapılır?",
    "answer": "HM-100, HM-110 ve HM-150 için serigrafi veya tampon; HM-130 için UV veya serigrafi; HM-140 için serigrafi, tampon veya UV belirtilir. HM-120 için yöntem ve alan tasarıma göre netleştirilir. Her modelin uygulama alanını ayrı kontrol edin."
  },
  {
    "question": "Hesap makineleri pilli mi, güneş enerjili mi?",
    "answer": "Ürün bilgilerinde enerji kaynağı, pil türü veya güneş enerjisi desteği belirtilmediğinden bunları standart özellik olarak kabul etmeyin. Seçtiğiniz modelin enerji kaynağını ve pilin teslim kapsamına dahil olup olmadığını teklif aşamasında teyit edin."
  },
  {
    "question": "Promosyon hesap makinesi fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, alanı, sipariş adedi ve varsa ek paketlemeye göre güncel teklif isteyin. Fiyatı bulunmayan modeller için teklif alın."
  },
  {
    "question": "Toplu hesap makinesi siparişinde minimum adet ve teslim süresi nedir?",
    "answer": "Minimum adet ve teslim süresi model, stok, miktar ve logo onayına göre teklif aşamasında netleştirilir. HM-100 için 50, HM-110, HM-140 ve HM-150 için 100 adet olarak verilen koli bilgileri minimum sipariş koşulu değildir. Ürün kodu, adet, logo ve teslimat ihtiyacınızı paylaşın."
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
        alt: "Promosyon Hesap Makineleri",
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
              name: "Promosyon Hesap Makineleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Hesap Makineleri",
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
            Promosyon Hesap Makineleri
          </span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Promosyon Hesap Makineleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            12 haneli masaüstü hesap makinelerini gövde ölçüsü, logo alanı
            ve yazılabilir not ekranı seçenekleriyle karşılaştırın.
            Ofis ve kurumsal hediye siparişleri için güncel teklif alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="#promosyon-hesap-makineleri-modelleri"
              className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >Modelleri İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <FpCategoryCatalog anchorId="promosyon-hesap-makineleri-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />

      {list.length === 0 && (
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Baskılı Hesap Makinesi Nasıl Seçilir?</h2>
            <p>
              Ofis, satış masası veya müşteri hediyesi için model seçerken
              masa üzerindeki alanı, ekran ve tuş yerleşimini, ihtiyaç duyulan
              hesaplama işlevlerini değerlendirin. Listelenen modellerin
              tamamı 12 hanelidir; gövde ve baskı alanları farklıdır.
            </p>
            <p>
              Hane sayısı tek başına hafıza, vergi hesabı veya bilimsel
              işlevleri doğrulamaz. Kullanacağınız işlemleri ürün koduyla
              paylaşarak uygunluğu sipariş öncesinde teyit edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-black">12 Haneli Hesap Makinesi Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Hesap makinelerinin belirtilen ürün ölçüleri, baskı alanları ve model farkları</caption>
                <thead className="bg-white text-black">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model</th>
                    <th scope="col" className="px-4 py-3">Ürün ölçüsü</th>
                    <th scope="col" className="px-4 py-3">Baskı alanı / model farkı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["HM-100", "175 x 125 x 40 mm", "30 x 15 mm logo alanı; beyaz"],
                    ["HM-110", "172 x 104 x 12 mm", "55 x 15 mm logo alanı; ince gövde; beyaz"],
                    ["HM-120", "102 x 184 mm", "Beyaz veya siyah; yöntem ve alan teyit edilir"],
                    ["HM-130", "15,5 x 14 x 2 cm", "Eğimli masaüstü form; UV veya serigrafi"],
                    ["HM-140", "12,8 x 14 x 7 cm", "125 x 55 mm logo alanı; yazılabilir not ekranı ve kalem"],
                    ["HM-150", "23 x 10 x 12 cm", "80 x 25 mm logo alanı; eğimli masaüstü form"],
                  ].map(([model, size, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{size}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Gövde Ölçüsü, Renk ve Masa Yerleşimi</h2>
            <p>
              HM-110 için belirtilen 12 mm kalınlık ile HM-100 için belirtilen
              40 mm kalınlık masa yerleşiminde farklı seçenekler sunar.
              Eğimli form arıyorsanız HM-130 ve HM-150 modellerini
              değerlendirebilirsiniz. Ürünlerin belirtilen ölçülerini masada
              ayıracağınız alanla karşılaştırın.
            </p>
            <p>
              HM-120 siyah ve beyaz; diğer modeller beyaz olarak listelenir.
              Renk stoklarını, tuş ve ekran kullanımını sipariş öncesinde
              kontrol edin. Pil veya güneş enerjisi desteği belirtilmediğinden
              enerji kaynağını ve pil dahil teslim kapsamını ayrıca teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">HM-140 Yazılabilir Not Ekranlı Model</h2>
            <p>
              HM-140, 12 haneli hesap makinesini yan bölümdeki yazılabilir not
              ekranı ve yazım kalemiyle birleştiren kapaklı modeldir.
              Hesaplama sırasında kısa not veya çizim alanı isteyen kullanıcılar
              için diğer modellerden ayrılır.
            </p>
            <p>
              Not ekranının kullanım ve silme ayrıntılarını, kalemin teslim
              kapsamını ve açık-kapalı yerleşim ölçülerini teyit edin.
              Yazılabilir ekran bulunmasını dijital kayıt, dosya saklama veya
              veri aktarımı özelliği olarak değerlendirmeyin.
            </p>
            <p>
              Kağıt üzerinde not alma ihtiyacı için{" "}
              <Link href="/promosyon-defter" className="font-semibold text-black underline underline-offset-4">tarihsiz defter</Link>{" "}
              seçeneklerini de karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Hesap Makinesine Logo Baskısı</h2>
            <p>
              HM-100, HM-110 ve HM-150 için serigrafi veya tampon baskı;
              HM-130 için UV veya serigrafi; HM-140 için serigrafi, tampon
              veya UV seçenekleri belirtilir. HM-120 için yöntem, alan ve
              renk kapsamı tasarıma göre teklif aşamasında netleştirilir.
            </p>
            <p>
              Ürün ölçüsü ile logo alanını ayırın. HM-100 için 30 x 15 mm,
              HM-110 için 55 x 15 mm, HM-140 için 125 x 55 mm ve HM-150 için
              80 x 25 mm alan belirtilir. Bir modelin uygulama alanını
              diğerine doğrudan uygulamayın.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              İstenen renk, konum ve ek yazıları belirtin; küçük yazıların
              gerçek baskı boyutunda okunabilirliğini tasarım aşamasında kontrol edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Hesap Makinesi Fiyatları ve Sipariş Kapsamı</h2>
            <p>
              Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV
              ayrıca belirtilir. Fiyatı bulunmayan modeller için güncel teklif
              isteyin. Aynı model, adet ve logo kapsamıyla karşılaştırma yapın.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Model, gövde ölçüsü, renk ve not ekranı gibi özellikler.</li>
              <li>Logo yöntemi, uygulama alanı ve renk kapsamı.</li>
              <li>Sipariş adedi, stok, enerji kaynağı ve dahil aksesuarlar.</li>
              <li>Ambalaj, varsa ek kutulama, sevkiyat ve KDV.</li>
            </ul>
            <p>
              HM-100 için 50; HM-110, HM-140 ve HM-150 için 100 adet koli
              bilgisi verilir. Bu değerler minimum sipariş adedi değildir.
              Minimum miktarı ve teslim süresini teklif aşamasında teyit edin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Toplu Hesap Makinesi Sipariş Adımları</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, adedi ve renk tercihini paylaşın.</li>
              <li>İhtiyaç duyduğunuz hesaplama işlevlerini ve enerji kaynağını teyit edin.</li>
              <li>Logo dosyanızı, baskı konumunu ve renk beklentinizi iletin.</li>
              <li>Paketleme talebini, teslimat adresini ve etkinlik tarihini belirtin.</li>
              <li>Stok, tasarım yerleşimi, toplam tutar ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Ofis masasını tamamlamak için{" "}
              <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-black underline underline-offset-4">masaüstü organizerleri</Link>{" "}
              veya{" "}
              <Link href="/promosyon-masa-sumeni" className="font-semibold text-black underline underline-offset-4">masa sümeni setlerini</Link>{" "}
              inceleyebilirsiniz. Ek ürünleri teklif kapsamına ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Hesap Makinesi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Hesap Makineleri Hakkında Sık Sorulan Sorular</h2>
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
      <section aria-labelledby="hesap-makinesi-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="hesap-makinesi-rehberi-baslik" className="text-xl font-bold !text-black">Ekran, Tuş Düzeni ve Logo Alanını Karşılaştırın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Masaüstü kullanımını, not ekranı seçeneklerini ve güç kaynağı için teyit edilecek bilgileri inceleyerek baskı kapsamını planlayın.</p>
        <Link href="/rehber/promosyon-hesap-makinesi-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-hesap-makinesi-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Hesap Makinesi Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Masaüstü hesap makinelerini ekran, tuş düzeni, gövde ve logo alanıyla karşılaştırın. Not ekranı seçeneklerini ve güç kaynağı için sorulacakları öğrenin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
