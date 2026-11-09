import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-cakmak-mi-kalem-mi-en-dogru-promosyon-urunu-secimi`;
const IMAGE_PATH =
  "/guides/promosyon-cakmak-mi-kalem-mi-en-dogru-promosyon-urunu-secimi.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE =
  "Promosyon Çakmak mı Kalem mi? En Doğru Promosyon Ürünü Seçimi";
const DESCRIPTION =
  "Promosyon çakmak mı yoksa promosyon kalem mi daha mantıklı? Hedef kitle, dağıtım ortamı, baskı kapsamı ve toplam bütçeye göre iki ürünü karşılaştırın.";

const FAQ_ITEMS = [
  {
    "question": "Ofis toplantısında çakmak mı kalem mi seçilmeli?",
    "answer": "Not alma veya form doldurma ihtiyacı olan bir toplantıda kalem doğrudan kullanım sağlayabilir. Yine de katılımcıların çalışma biçimi ve mevcut malzemeler değerlendirilmelidir."
  },
  {
    "question": "Yetişkinlere yönelik her etkinlikte çakmak uygun mu?",
    "answer": "Hayır. Yetişkin katılımcı bulunması tek başına yeterli değildir. Ürünün alıcı ihtiyacıyla örtüşmesi ve organizasyonun dağıtım koşullarına uygun olması gerekir."
  },
  {
    "question": "Çakmak mı kalem mi daha ucuzdur?",
    "answer": "Ürün grubu adına göre sabit bir fiyat sıralaması yapılamaz. Seçilen modeller aynı adet, baskı yüzü, ambalaj ve sevkiyat kapsamıyla tekliflendirilmelidir."
  },
  {
    "question": "İki ürün aynı kampanyada kullanılabilir mi?",
    "answer": "Farklı kullanıcı gruplarına veya farklı temas anlarına hizmet ediyorlarsa değerlendirilebilir. Her alıcıya iki ürünü birlikte vermek yerine dağıtım amacını ve toplam bütçeyi netleştirmek gerekir."
  },
  {
    "question": "Hangi ürünün daha başarılı olduğu nasıl anlaşılır?",
    "answer": "Dağıtılan adet tek başına başarı ölçüsü değildir. Kullanım geri bildirimi, kampanyayla ilişkilendirilebilen başvurular ve alıcı ihtiyacına uyum birlikte değerlendirilmelidir. Bunlar tek başına kesin satış etkisi kanıtlamaz."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon çakmak mı kalem mi",
    "en doğru promosyon ürünü seçimi",
    "promosyon kalem mi promosyon çakmak mı",
    "promosyon çakmak",
    "promosyon kalem",
    "kurumsal promosyon ürünü seçimi",
    "logo baskılı promosyon kalem",
    "logo baskılı promosyon çakmak",
    "promosyon ürünleri karşılaştırma",
    "firma için en iyi promosyon ürünü",
    "toptan promosyon kalem",
    "toptan promosyon çakmak",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Çakmak mı Kalem mi? En Doğru Promosyon Ürünü Seçimi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE_URL],
  },
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
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
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
    image: [IMAGE_URL],
    datePublished: "2026-04-13",
    dateModified: "2026-11-09",
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
        name: "Promosyon Çakmak mı Kalem mi?",
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
    <div className="bg-white">
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

      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-red-600">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/rehber"
                  className="transition-colors hover:text-red-600"
                >
                  Rehber
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">
                Promosyon Çakmak mı Kalem mi?
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <header>
            <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              Rehber
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Promosyon Çakmak mı Kalem mi? En Doğru Promosyon Ürünü Seçimi
            </h1>

            <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <Image
                src={IMAGE_PATH}
                alt="Promosyon Çakmak mı Kalem mi? En Doğru Promosyon Ürünü Seçimi"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
              Çakmak ile kalem arasındaki karar, ürünün kullanılacağı ana göre verilmelidir.
              Not alınan bir toplantı ile yetişkin müşteriye yapılan birebir ziyaret aynı
              ihtiyacı doğurmaz. Bu rehber, iki ürünü kullanım ortamı ve teklif kapsamı
              üzerinden karşılaştırır; her işletme için tek bir kazanan ilan etmez.
            </p>
          </header>

          <div
            className="
              mt-10 max-w-none
              text-[17px] leading-8 text-gray-800
              [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-gray-900
              [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900
              [&_p]:mb-5 [&_p]:text-[17px] [&_p]:leading-8 [&_p]:text-gray-700
              [&_strong]:font-semibold [&_strong]:text-gray-900
              [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-gray-700
              [&_a]:font-semibold [&_a]:text-red-600 hover:[&_a]:text-red-700
            "
          >
            <section>
              <h2>Kullanım senaryosuna göre karşılaştırma</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <caption className="mb-3 text-left text-gray-600">Ürünlerin uygunluğu seçilen modele ve alıcı ihtiyacına bağlıdır.</caption>
                  <thead><tr>
                    <th scope="col" className="border p-3">Karar noktası</th>
                    <th scope="col" className="border p-3">Promosyon çakmak</th>
                    <th scope="col" className="border p-3">Promosyon kalem</th>
                  </tr></thead>
                  <tbody>
                    <tr><th scope="row" className="border p-3 font-semibold">Not alma ve form doldurma</th><td className="border p-3">İhtiyaçla doğrudan örtüşen bir işlev sunmaz.</td><td className="border p-3">Toplantı, kayıt veya eğitim sırasında kullanılabilir.</td></tr>
                    <tr><th scope="row" className="border p-3 font-semibold">Birebir müşteri ziyareti</th><td className="border p-3">Ürünü kullanacak yetişkin alıcı için değerlendirilebilir.</td><td className="border p-3">Alıcının yazma ihtiyacı varsa değerlendirilebilir.</td></tr>
                    <tr><th scope="row" className="border p-3 font-semibold">Fuar ve etkinlik</th><td className="border p-3">Alıcı profili ve organizatör koşulları birlikte teyit edilir.</td><td className="border p-3">Kayıt, not alma veya görüşme sırasında kullanım ihtiyacı değerlendirilir.</td></tr>
                    <tr><th scope="row" className="border p-3 font-semibold">Baskı alanı</th><td className="border p-3">Seçilen gövdenin uygun yüzü ve net baskı ölçüsü kontrol edilir.</td><td className="border p-3">Gövde veya klips alanının uygunluğu ve okunurluk kontrol edilir.</td></tr>
                    <tr><th scope="row" className="border p-3 font-semibold">Teklif karşılaştırması</th><td className="border p-3">Model, adet, baskı, ambalaj ve sevkiyat kapsamı netleştirilir.</td><td className="border p-3">Aynı maliyet kalemleri seçilen kalem modeli için netleştirilir.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Önce alıcının ihtiyacını tarif edin</h2>
              <p>İlk soru ürünün kimlere verileceğidir. Çalışan, bayi, toplantı katılımcısı ve mağaza müşterisi aynı kullanım alışkanlıklarına sahip olmayabilir. Alıcının ürünü nerede kullanacağını açıklayamıyorsanız yalnız birim fiyata göre seçim yapmayın.</p>
              <p><Link href="/promosyon-kalem">Promosyon kalem</Link> not alma ihtiyacına, <Link href="/promosyon-cakmak">promosyon çakmak</Link> ise uygun yetişkin kullanıcının farklı bir ihtiyacına karşılık gelebilir. Ürün grubunun adı satış veya görünürlük sonucunu belirlemez.</p>
            </section>

            <section>
              <h2>Ofis, toplantı ve eğitim senaryosu</h2>
              <p>Katılımcıların not aldığı, belge imzaladığı veya form doldurduğu ortamlarda kalemin işlevi açıktır. Kalemin yazım rahatlığı, mürekkep bilgisi ve baskının okunurluğu seçilen model üzerinden değerlendirilmelidir.</p>
              <p>Toplantının tamamen dijital yürütülmesi veya katılımcıların kendi ekipmanını kullanması ihtiyacı değiştirebilir. Kalemin bütün ofis ortamlarında mutlaka kullanılacağı varsayılmamalıdır.</p>
            </section>

            <section>
              <h2>Müşteri ziyareti ve etkinlik senaryosu</h2>
              <p>Çakmak, ürünü kullanabilecek yetişkin alıcılara yönelik bir görüşmede değerlendirilebilir. Her ziyaretçiye aynı ürünü sunmak yerine alıcı ihtiyacı ve işletmenin hediye kabul yaklaşımı göz önünde tutulmalıdır.</p>
              <p>Etkinliklerde katılımcı profili ve organizatörün koşulları önemlidir. Çakmak dağıtımının uygun olmadığı veya ihtiyaca uymadığı bir ortamda başka ürün seçilmelidir. Ayrıntılı örnekler için <Link href="/rehber/promosyon-cakmak-kullanim-alanlari">çakmak kullanım alanları rehberini</Link> inceleyebilirsiniz.</p>
            </section>

            <section>
              <h2>Birim tutar yerine aynı kapsamlı toplam teklifi karşılaştırın</h2>
              <p>Ekonomik bir kalem ile farklı özelliklerde bir çakmağı karşılaştırmak tüm ürün grupları için fiyat sonucu vermez. Önce her gruptan ihtiyacı karşılayan bir model belirleyin; aynı adet için baskı ve ambalaj dahil kapsamı sorun.</p>
              <p>Ürün, baskı, varsa hazırlık, ambalaj ve sevkiyat bedellerini birlikte değerlendirin. KDV kapsamı da aynı olmalıdır. Çakmak tarafındaki maliyet kalemleri için <Link href="/rehber/promosyon-cakmak-fiyatlari">çakmak fiyatları rehberine</Link> geçebilirsiniz.</p>
            </section>

            <section>
              <h2>Baskı alanı ve kurumsal görünümü model üzerinden değerlendirin</h2>
              <p>Kalemin dar ve kavisli bir alanı, çakmağın ise modele göre farklı yüzleri olabilir. Bir ürün grubunun her modelde daha büyük veya daha iyi baskı alanı sunduğu varsayılmamalıdır. Net uygulama ölçüsü ve tasarım yerleşimi teyit edilmelidir.</p>
              <p>Profesyonel görünüm yalnız ürünün kalem ya da çakmak olmasıyla oluşmaz. Yüzey, uygulama kalitesi ve okunurluk birlikte değerlendirilir. Gerçek baskı ölçüsündeki tasarım onayı ve gerekiyorsa numune bu kararı destekler.</p>
            </section>

            <section>
              <h2>İki ürünü aynı kampanyada nasıl planlayabilirsiniz?</h2>
              <p>Ayrı kullanıcı grupları varsa farklı ürünler seçilebilir: not alınan görüşmeler için kalem, uygun yetişkin alıcıların bulunduğu başka bir temas noktası için çakmak gibi. Bu, bütün alıcılara iki ürünü birlikte vermek zorunda olduğunuz anlamına gelmez.</p>
              <p>Her ürün için adet, dağıtım noktası ve sorumlu kişi belirleyin. Ayrı baskı hazırlıkları ve paketleme toplam bütçeyi etkileyebilir. Dağıtılan ve kalan miktarları ayrı kaydetmek stok takibini kolaylaştırır.</p>
            </section>

            <section>
              <h2>Kararı vermek için kısa kontrol listesi</h2>
              <p>Alıcı kim, ürünü hangi anda kullanacak ve dağıtım ortamı uygun mu? Seçilen iki modelin aynı adet için toplam teklifleri karşılaştırıldı mı? Baskı ölçüsü, tasarım ve teslim planı net mi? Bu sorular cevaplanmadan yalnız marka algısı veya görünürlük iddiasıyla karar vermeyin.</p>
              <p>Kalem seçimi için <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli">kalem seçim rehberine</Link>; çakmak için <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta">çakmak satın alma kontrol listesine</Link> geçebilirsiniz.</p>
            </section>

            <section>
              <h2>Sık Sorulan Sorular</h2>
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </section>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-bold text-gray-900">İlgili Kategoriler</h3>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/promosyon-cakmak"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Çakmak
              </Link>
              <Link
                href="/promosyon-kalem"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Kalem
              </Link>
              <Link
                href="/promosyon-anahtarlik"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Anahtarlık
              </Link>
              <Link
                href="/promosyon-termos"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon Termos
              </Link>
              <Link
                href="/promosyon-usb-bellek"
                className="font-semibold text-gray-800 hover:text-red-600"
              >
                Promosyon USB Bellek
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
            >
              Ürünleri İncele
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}