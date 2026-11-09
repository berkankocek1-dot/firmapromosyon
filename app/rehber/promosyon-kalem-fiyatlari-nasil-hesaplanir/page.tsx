import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir`;
const IMAGE_PATH = "/guides/promosyon-kalem-fiyatlari-nasil-hesaplanir.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;

const FAQ_ITEMS = [
  {
    "question": "Baskı dahil kalem fiyatına baskı tekrar eklenir mi?",
    "answer": "Aynı uygulama zaten birim fiyata dahilse tekrar eklenmez. Dahil olan yöntem, yüz sayısı ve tasarım kapsamı netleştirilmelidir; farklı bir uygulama ayrıca fiyatlandırılabilir."
  },
  {
    "question": "Hazırlık bedeli birim maliyete nasıl dağıtılır?",
    "answer": "Ayrıca belirtilmiş sabit hazırlık bedeli sipariş adedine bölünerek ürün başına düşen pay bulunur. Bedel başka bir kaleme zaten dahilse ikinci kez eklenmemelidir."
  },
  {
    "question": "Adet arttığında toplam ödeme düşer mi?",
    "answer": "Birim tutar bazı koşullarda azalabilir ancak daha fazla ürün alındığı için toplam ödeme artabilir. Güncel teklif olmadan adet indirimi veya toplam tutar sonucu varsayılmamalıdır."
  },
  {
    "question": "Tek yön ve çift yön baskı nasıl karşılaştırılır?",
    "answer": "Aynı kalem, adet, yöntem ve tasarım koşullarında teklif alınmalıdır. İkinci yüzün bedeli sabit bir çarpanla hesaplanmaz; teklif kapsamından öğrenilir."
  },
  {
    "question": "Net kalem teklifi için hangi bilgiler gerekir?",
    "answer": "Model veya ürün bağlantısı, adet, gövde rengi, logo dosyası, basılacak yüzler, ambalaj beklentisi, teslim adresi ve istenen tarih paylaşılmalıdır."
  }
];

export const metadata: Metadata = {
  title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
  description:
    "Promosyon kalem fiyatları nasıl hesaplanır? Adet, baskı türü, kalem modeli, baskı yönü ve sipariş detaylarına göre fiyatların nasıl değiştiğini detaylı rehberde inceleyin.",
  keywords: [
    "promosyon kalem fiyatları",
    "promosyon kalem fiyat hesaplama",
    "logo baskılı kalem fiyatları",
    "promosyon kalem baskı fiyatları",
    "toptan promosyon kalem",
    "promosyon kalem adet fiyatı",
    "kurumsal promosyon kalem",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
    description:
      "Promosyon kalem fiyatlarını etkileyen adet, model, baskı türü ve sipariş detaylarını anlatan detaylı rehber.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
    description:
      "Promosyon kalem fiyatlarını etkileyen temel unsurları detaylı şekilde öğrenin.",
    images: [IMAGE_URL],
  },
};

export default function PromosyonKalemFiyatlariNasilHesaplanirPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
    description:
      "Promosyon kalem fiyatlarının nasıl hesaplandığını, adet, baskı türü, model ve sipariş detaylarına göre nasıl değiştiğini anlatan detaylı rehber.",
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    image: [IMAGE_URL],
    dateModified: "2026-11-09",
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: `${SITE_URL}/rehber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Promosyon Kalem Fiyatları Nasıl Hesaplanır?",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Promosyon Kalem Fiyatları Nasıl Hesaplanır?</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Kalem Fiyatları Nasıl Hesaplanır?
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Promosyon Kalem Fiyatları Nasıl Hesaplanır?"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <p className="mt-6 text-base leading-7 text-gray-700 md:text-lg">
            Promosyon kalem fiyatını hesaplamak için ürün bedelini, baskıyı ve varsa
            sabit hazırlık bedelini ayrı okuyun. Ardından ambalaj ve sevkiyat kapsamını
            kontrol edin. Birim fiyatın baskı dahil mi hariç mi olduğunu bilmeden yapılan
            toplama, aynı bedelin iki kez hesaplanmasına yol açabilir.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">1. Önce teklifin kapsamını belirleyin</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Aynı kalem modeli, adet, gövde rengi, baskı yöntemi ve basılacak yüzler için verilen tutarları karşılaştırın. Ürün bedeli baskısız mı, yoksa belirli bir uygulama dahil mi? Hazırlık veya kalıp bedeli ayrıca mı sunulmuş? Bu bilgiler hesaplamanın başlangıcıdır.</p>
              <p>Güncel modelleri <Link href="/promosyon-kalem">promosyon kalem kategorisinden</Link> inceleyebilirsiniz. Bir ürünün adına veya fotoğrafına bakarak baskının fiyata dahil olduğu sonucu çıkarılmamalıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">2. Ürün ve baskı toplamını ayrı hesaplayın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Baskısız birim ürün bedeli ile adet çarpılarak ürün toplamı bulunur. Baskı adet başına ayrıca belirtilmişse baskı birim bedeli de aynı kapsamda basılacak adetle çarpılır. Hazırlık bedeli ayrıca verilmişse bu iki toplamın üzerine bir kez eklenir.</p>
              <p>Baskı dahil birim fiyat kullanılıyorsa ürün ve dahil baskıyı tek kalem olarak hesaplayın. İkinci yüz, farklı tasarım veya özel ambalaj bu kapsama girmiyorsa ek bedeli yazılı teklifte teyit edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Varsayımsal hesaplama örneği</h2>
            <p className="mt-4 leading-7 text-gray-700">Aşağıdaki rakamlar yalnız hesaplamayı göstermek için seçilmiştir. Güncel ürün fiyatı, satış teklifi veya minimum sipariş koşulu değildir. Örnekte baskı ve hazırlık bedellerinin ayrı sunulduğu varsayılmıştır; KDV, ambalaj ve kargo dahil değildir.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <caption className="mb-2 text-left">500 adet için varsayımsal ürün, baskı ve hazırlık hesabı</caption>
                <thead><tr><th scope="col" className="border p-3">Kalem</th><th scope="col" className="border p-3">Hesap</th><th scope="col" className="border p-3">Tutar</th></tr></thead>
                <tbody>
                  <tr><th scope="row" className="border p-3">Baskısız ürün</th><td className="border p-3">500 × 10 TL</td><td className="border p-3">5.000 TL</td></tr>
                  <tr><th scope="row" className="border p-3">Baskı</th><td className="border p-3">500 × 2 TL</td><td className="border p-3">1.000 TL</td></tr>
                  <tr><th scope="row" className="border p-3">Ayrı hazırlık bedeli</th><td className="border p-3">Bir kez</td><td className="border p-3">500 TL</td></tr>
                  <tr><th scope="row" className="border p-3">Ara toplam</th><td className="border p-3">5.000 + 1.000 + 500</td><td className="border p-3">6.500 TL</td></tr>
                  <tr><th scope="row" className="border p-3">Bu kapsamdaki birim tutar</th><td className="border p-3">6.500 / 500</td><td className="border p-3">13 TL</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">3. Hazırlık bedelini adede dağıtın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Ürün başına düşen sabit hazırlık payı = ayrıca belirtilmiş hazırlık bedeli / sipariş adedi. Bu pay, ürün ve baskının birim bedelleriyle aynı kapsamdaki birim maliyeti hesaplamaya yardımcı olur.</p>
              <p>Sabit bedelin gerçekten sabit kaldığı ve aynı tasarım için geçerli olduğu teyit edilmelidir. Tasarım, yüz sayısı veya baskı yöntemi değiştiğinde yeni hazırlık kalemi oluşup oluşmadığını sorun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">4. Adet değiştiğinde hem birim tutarı hem toplamı karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Daha fazla ürüne dağıtılan sabit bedelin ürün başına payı azalabilir. Ancak bu, ürünün kendi fiyatının veya baskı birim bedelinin otomatik olarak düşeceğini göstermez. Her miktar için güncel teklif gerekir.</p>
              <p>Düşük birim fiyat daha düşük toplam ödeme anlamına gelmez. Gerçek dağıtım ihtiyacınızdan fazla ürün almak yerine, yakın iki miktar için aynı kapsamlı toplam tutarları karşılaştırın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">5. Model ve baskı farklarını fiyat sıralaması gibi okumayın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Plastik, metal, jel veya dokunmatik kalem ifadeleri tek bir ucuzdan pahalıya sıralama oluşturmaz. Modelin kendi özellikleri, stok ve uygulama koşulları önemlidir. <Link href="/promosyon-plastik-kalem">Plastik kalem</Link> ve <Link href="/promosyon-metal-kalem">metal kalem</Link> seçenekleri model bazında incelenmelidir.</p>
              <p>UV, tampon veya lazer uygulamasının uygunluğu seçilen yüzey için teyit edilmelidir. Logo renkleri ve tek ya da çift yüz baskı isteği aynı model üzerinden fiyatlandırılmalıdır. Yöntemlere giriş için <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir">kalem baskı türleri rehberine</Link> geçebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">6. Ambalaj, sevkiyat ve vergi kapsamını kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Kutulama veya tekli ambalaj talebi ürün ve baskıdan ayrı bir bedel oluşturabilir. Sevkiyat dahil değilse teslim bütçesinde ayrıca değerlendirilmelidir. Her teklifte KDV dahil veya hariç sunum açık olmalıdır.</p>
              <p>Aynı kapsamlı teklifleri karşılaştırdıktan sonra ürün başına karşılaştırılabilir tutarı toplam / adet hesabıyla bulabilirsiniz. Vergi dahil tutarla vergi hariç tutarı doğrudan karşılaştırmayın; uygulanacak tutarı ve kapsamı teklifte teyit edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">7. Teklif talebine eklenecek bilgiler</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Model kodu veya ürün bağlantısı, adet, gövde rengi ve logo dosyasını paylaşın. Hangi yüzlere ne uygulanacağını, ambalaj isteğini, teslim adresini ve istenen tarihi belirtin. Teklifin geçerlilik süresini ve stok teyidini isteyin.</p>
              <p>Ürünün yazım ve kullanım özelliklerini değerlendirmek için <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli">kalem seçim rehberini</Link> inceleyebilirsiniz. Bu sayfadaki hesaplama, seçtiğiniz modele ait güncel yazılı teklifin yerine geçmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-4 space-y-5 leading-7 text-gray-700">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-semibold">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="flex flex-wrap gap-4 font-semibold underline">
            <Link href="/promosyon-kalem">Kalem modellerini incele</Link>
            <Link href="/kurumsal-teklif-al">Kurumsal teklif al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}