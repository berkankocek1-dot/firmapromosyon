import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-cakmak-nedir`;
const IMAGE_PATH = "/guides/promosyon-cakmak-nedir.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Çakmak Nedir? Türleri ve Logo Uygulamaları";
const DESCRIPTION =
  "Promosyon çakmağın tanımını, normal çakmaktan farkını ve model adlarında geçen temel özellikleri öğrenin. Logo uygulamalarını ve ilgili rehberleri inceleyin.";

const FAQ_ITEMS = [
  {
    "question": "Promosyon çakmak nedir?",
    "answer": "İşletmenin logosu, adı veya kısa mesajıyla kişiselleştirilen ve tanıtım amacıyla dağıtılan çakmaktır. Promosyon ifadesi ürünün teknik mekanizmasını değil, kurumsal kullanım amacını belirtir."
  },
  {
    "question": "Normal çakmaktan teknik olarak farklı mıdır?",
    "answer": "Promosyon olarak sunulması tek başına farklı bir mekanizma veya kalite seviyesi göstermez. Teknik özellikler seçilen modelin bilgilerine göre değerlendirilir; fark işletmeye ait kişiselleştirme ve dağıtım amacıdır."
  },
  {
    "question": "Turbo, manyetolu ve doldurulabilir aynı anlama mı gelir?",
    "answer": "Hayır. Bunlar aynı özelliğin alternatif adları olarak okunmamalıdır. Ateşleme mekanizması, alev yapısı ve doldurulabilirlik model açıklamasında ayrı ayrı kontrol edilmelidir."
  },
  {
    "question": "Logo baskısı her çakmağa aynı şekilde mi uygulanır?",
    "answer": "Hayır. Gövde, kaplama, uygun baskı alanı ve tasarım uygulamayı etkiler. UV, tampon veya başka bir yöntemin uygunluğu seçilen model için teyit edilmelidir."
  },
  {
    "question": "Promosyon çakmak her alıcıya uygun mudur?",
    "answer": "Hayır. Ürünün yetişkin alıcının ihtiyacına ve dağıtım ortamına uygunluğu değerlendirilmelidir. Logo taşıması tek başına kullanım, müşteri sadakati veya satış sonucu garanti etmez."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon çakmak nedir",
    "promosyon çakmak",
    "logo baskılı çakmak",
    "baskılı promosyon çakmak",
    "promosyon çakmak fiyatları",
    "promosyon taşlı çakmak",
    "promosyon elektronik çakmak",
    "firma logolu çakmak",
    "kurumsal promosyon çakmak",
    "promosyon ürünleri çakmak",
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
        alt: "Promosyon Çakmak Nedir? Türleri ve Logo Uygulamaları",
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
    datePublished: "2026-04-01",
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
        name: "Promosyon Çakmak Nedir?",
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
              <li className="text-gray-900">Promosyon Çakmak Nedir?</li>
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
              Promosyon Çakmak Nedir? Türleri ve Logo Uygulamaları
            </h1>

            <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <Image
                src={IMAGE_PATH}
                alt="Promosyon Çakmak Nedir? Türleri ve Logo Uygulamaları"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
              Promosyon çakmak, bir işletmenin logosu, adı veya kısa mesajıyla
              kişiselleştirilen ve tanıtım amacıyla sunulan çakmaktır. Ürünün temel
              işlevine kurumsal kimlik eklenir. Buradaki “promosyon” sözcüğü ateşleme
              mekanizmasını, malzemeyi veya belirli bir kalite sınıfını tanımlamaz.
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
              <h2>Normal çakmak ile promosyon çakmak arasındaki fark</h2>
              <p>Aynı model çakmak kişiselleştirilmeden veya firma kimliği uygulanarak sunulabilir. Promosyon kullanımındaki fark, işletmeye ait logo veya mesajın ürüne eklenmesi ve ürünün bir tanıtım planı kapsamında verilmesidir.</p>
              <p>Bu nedenle promosyon ifadesinden yakıt, gövde malzemesi, kullanım süresi ya da mekanizma hakkında sonuç çıkarılmamalıdır. Bunlar seçilen ürünün kendi açıklamasında aranmalıdır.</p>
            </section>

            <section>
              <h2>Model adları hangi bilgileri verir?</h2>
              <p>Model adlarında taşlı, manyetolu, turbo, mini veya doldurulabilir gibi ifadeler görülebilir. Bu etiketlerin hepsi aynı sınıflandırmaya ait değildir: mekanizma, alev yapısı, boyut ve tekrar doldurulabilme ayrı özelliklerdir.</p>
              <p><Link href="/promosyon-tasli-cakmak">Taşlı çakmak</Link>, <Link href="/promosyon-manyetolu-cakmak">manyetolu çakmak</Link> ve <Link href="/promosyon-turbo-cakmak">turbo çakmak</Link> gruplarını incelerken her modelin açıklamasına bakın. Turbo ifadesini tek başına doldurulabilirlik bilgisi olarak okumayın.</p>
              <p><Link href="/promosyon-mini-cakmak">Mini çakmak</Link> boyut odaklı, <Link href="/promosyon-doldurulabilir-cakmak">doldurulabilir çakmak</Link> ise farklı bir özellik odaklı gruptur. Kesin ölçü ve özellikler model bazında doğrulanmalıdır.</p>
            </section>

            <section>
              <h2>Logo ve mesaj ürüne nasıl eklenir?</h2>
              <p>Gövde üzerine işletme adı, logo veya kısa iletişim bilgisi uygulanabilir. Yazılabilecek bilgi miktarı, ürünün tüm dış yüzeyine değil net uygulama alanına ve okunurluğa bağlıdır.</p>
              <p>UV veya tampon baskı gibi yöntemlerin uygunluğu seçilen gövde ve kaplamaya göre değerlendirilmelidir. Metal görünümlü her ürüne lazer uygulanabileceği veya her yöntemin bütün modellerde sunulduğu varsayılmamalıdır. Bu sayfa yöntemlerin belirli bir üründe mevcut olduğunu taahhüt etmez.</p>
            </section>

            <section>
              <h2>Firmalar hangi amaçla kullanabilir?</h2>
              <p>İşletmeler ürünü, uygun yetişkin alıcılara yönelik kurumsal dağıtımlarda bir hatırlatma veya tanıtım aracı olarak değerlendirebilir. Alıcı ürünü kullanırsa üzerindeki kimlik günlük kullanımda görünür olabilir.</p>
              <p>Ürünü dağıtmak tek başına reklam getirisi veya müşteri bağlılığı kanıtı değildir. Müşteri ziyareti, bayi ve etkinlik senaryolarının ayrıntıları için <Link href="/rehber/promosyon-cakmak-kullanim-alanlari">çakmak kullanım alanları rehberine</Link> geçebilirsiniz.</p>
            </section>

            <section>
              <h2>Ürün özelliği ile sipariş koşulu arasındaki fark</h2>
              <p>Mekanizma, ölçü ve doldurulabilirlik ürün özellikleridir. Minimum adet, stok rengi, baskı kapsamı ve teslim planı ise sipariş sırasında ayrıca teyit edilmesi gereken koşullardır. Bütün çakmaklar için geçerli tek bir minimum adet veya teslim süresi kabul edilmemelidir.</p>
              <p>Güncel seçenekleri <Link href="/promosyon-cakmak">promosyon çakmak kategorisinde</Link> inceleyebilirsiniz. Açıklamada bulunmayan özellik veya sipariş koşulu, ürünün adına bakılarak tamamlanmamalıdır.</p>
            </section>

            <section>
              <h2>Tanımdan sonra hangi rehber okunmalı?</h2>
              <p>Numune, tasarım onayı ve teslim kontrolü için <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta">çakmak satın alma kontrol listesi</Link>; teklif kalemlerini anlamak için <Link href="/rehber/promosyon-cakmak-fiyatlari">çakmak fiyatları rehberi</Link> ayrı konuları ele alır.</p>
              <p>Ürün türüne henüz karar vermediyseniz <Link href="/rehber/promosyon-cakmak-mi-kalem-mi-en-dogru-promosyon-urunu-secimi">çakmak mı kalem mi karşılaştırmasını</Link> kullanarak alıcı ihtiyacından başlayabilirsiniz.</p>
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