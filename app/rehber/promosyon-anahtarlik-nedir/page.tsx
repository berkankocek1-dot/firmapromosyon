import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-anahtarlik-nedir`;
const IMAGE_PATH = "/guides/promosyon-anahtarlik-nedir.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Anahtarlık Nedir? Türleri ve Kullanım Alanları";
const DESCRIPTION =
  "Logo baskılı anahtarlığın ne olduğunu, malzeme ve işlev türlerini, kullanım alanlarını ve kişiselleştirme seçeneklerini öğrenin.";

const FAQ_ITEMS = [
  {
    "question": "Promosyon anahtarlık nedir?",
    "answer": "Bir işletmenin logosu, adı veya kısa iletişim bilgisiyle kişiselleştirilen, anahtarları bir arada taşımaya yarayan tanıtım ürünüdür. Müşterilere, çalışanlara veya etkinlik katılımcılarına verilebilir."
  },
  {
    "question": "Normal anahtarlıktan farkı nedir?",
    "answer": "Temel kullanım işlevi aynıdır. Promosyon amaçlı modelde işletmeye ait logo veya mesaj bulunur ve ürün belirli bir tanıtım ya da kurumsal dağıtım planı kapsamında sunulur."
  },
  {
    "question": "Deri görünümlü anahtarlık gerçek deri midir?",
    "answer": "Deri görünümü malzemenin gerçek deri olduğunu göstermez. Suni deri veya farklı kaplama malzemeleri kullanılabilir. Kesin malzeme bilgisi seçilen ürünün açıklamasından ve tedarik teyidinden öğrenilmelidir."
  },
  {
    "question": "Her anahtarlığa aynı baskı yapılabilir mi?",
    "answer": "Hayır. Uygulama gövdeye, kaplamaya ve baskı alanına bağlıdır. Lazer, UV baskı, tampon baskı veya gofre gibi seçeneklerin uygunluğu her model için ayrıca kontrol edilmelidir."
  },
  {
    "question": "Promosyon anahtarlık için ortak bir minimum adet var mı?",
    "answer": "Bütün modeller için geçerli tek bir minimum adet yoktur. Güncel adet koşulu model, stok ve kişiselleştirme uygulamasına göre ürün bilgisi ve yazılı teklifle teyit edilmelidir."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon anahtarlık nedir",
    "promosyon anahtarlık",
    "logo baskılı anahtarlık",
    "baskılı promosyon anahtarlık",
    "promosyon anahtarlık kullanım alanları",
    "promosyon anahtarlık baskı türleri",
    "metal promosyon anahtarlık",
    "deri promosyon anahtarlık",
    "kurumsal promosyon anahtarlık",
    "promosyon anahtarlık rehberi",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Anahtarlık Nedir?",
    description:
      "Promosyon anahtarlık çeşitleri, kullanım alanları ve baskı teknikleri hakkında kapsamlı rehber.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Anahtarlık Nedir?",
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
        name: "Promosyon Anahtarlık Nedir?",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
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
        / <span>Promosyon Anahtarlık Nedir?</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Promosyon Anahtarlık Nedir?
        </h1>

        <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={IMAGE_PATH}
            alt="Promosyon Anahtarlık Nedir?"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Promosyon anahtarlık, bir işletmenin logosu, adı veya kısa iletişim bilgisiyle
          kişiselleştirilen ve tanıtım amacıyla dağıtılan anahtarlıktır. Anahtarları bir
          arada taşıma işlevini, işletmeye ait görsel kimlikle birleştirir.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          Kullanıcı ürünü tercih edip taşımaya devam ederse marka günlük kullanımda
          görünür olabilir. Dağıtılmış olması tek başına satış, müşteri sadakati veya
          belirli bir reklam getirisi sağlayacağı anlamına gelmez.
        </p>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Normal anahtarlık ile promosyon anahtarlık arasındaki fark</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>Anahtarlığın temel görevi değişmez: anahtarları bir arada tutar ve taşımayı kolaylaştırır. Promosyon kullanımında fark, ürünün bir işletmenin kimliğini taşıması ve müşteriye, çalışana ya da ziyaretçiye kurumsal dağıtım kapsamında sunulmasıdır.</p>
              <p>Kişiselleştirme yalnız basılı logo anlamına gelmez. Seçilen modele göre lazer uygulaması, yüzeye baskı veya kabartma görünümü veren bir uygulama kullanılabilir. Bunlar her üründe birlikte sunulan özellikler değildir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Nerelerde kullanılır?</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>Emlak ofisi anahtar tesliminde, otomotiv işletmesi araç tesliminde veya servis noktası müşteri ziyaretinde anahtarlık verebilir. Bu örneklerde ürünün kullanım işlevi ile teslim anı arasında doğrudan bir ilişki vardır.</p>
              <p>Fuar ve etkinliklerde ziyaretçilere, işletme içinde çalışanlara veya bayi toplantılarında katılımcılara da dağıtılabilir. Otel ve tesislerde oda ya da birim bilgisi taşıyan modellerin operasyonel kullanımı bulunabilir; her operasyonel anahtarlık mutlaka promosyon amacı taşımaz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Malzeme türü ve ek işlev aynı şey değildir</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>Metal, deri veya deri görünümlü gövde bir malzeme tanımıdır. Açacaklı ya da ev biçimli olması ise ürünün işlevini veya şeklini anlatır. Bu nedenle bir anahtarlık birden fazla tanımla ifade edilebilir.</p>
              <p><Link href="/promosyon-metal-anahtarlik" className="font-semibold text-blue-600 underline">Metal anahtarlık</Link> ve <Link href="/promosyon-deri-anahtarlik" className="font-semibold text-blue-600 underline">deri anahtarlık</Link> sayfalarında malzeme odaklı modelleri; <Link href="/promosyon-acacakli-anahtarlik" className="font-semibold text-blue-600 underline">açacaklı anahtarlık</Link> sayfasında ek işlevli seçenekleri inceleyebilirsiniz.</p>
              <p>Deri görünümü gerçek deri garantisi vermez; metal görünümü de alaşım veya kaplama bilgisini tek başına açıklamaz. Malzeme ve ölçü bilgisi seçilen modelin açıklamasından doğrulanmalıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo ve iletişim bilgisi nasıl uygulanır?</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>Kişiselleştirme yöntemi gövdenin ve kaplamanın uygunluğuna göre belirlenir. Bazı yüzeylerde lazer, bazılarında UV veya tampon baskı; uygun deri ya da benzeri yüzeylerde gofre seçeneği değerlendirilebilir. Bir yöntemin uygunluğu model bazında teyit edilmelidir.</p>
              <p>Logo, kısa işletme adı veya iletişim bilgisi eklenebilir. Uygulanabilecek bilgi miktarı gerçek baskı alanına ve okunurluğa bağlıdır. Gövdenin tamamının baskıya uygun olduğu varsayılmamalıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Hangi beklentiyle değerlendirilmelidir?</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>Anahtarlık günlük kullanımda işe yarayan bir tanıtım ürünü olabilir; ancak bütün alıcıların fiziksel anahtar taşıdığı veya verilen ürünü kullanacağı kabul edilmemelidir. Alıcının alışkanlığı, ürünün boyutu ve kullanım rahatlığı sonucu etkileyebilir.</p>
              <p>Ürün üzerinde logo bulunması kullanım sıklığını ya da satış etkisini ölçmez. Tanıtım amacı ile günlük kullanım ihtiyacının uyumlu olması, dağıtım planı hazırlanırken değerlendirilmelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Model seçimi ve fiyat için nereden devam edilmeli?</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>Bu sayfa ürünün tanımını ve türlerini açıklar. Numune, baskı onayı ve teslim kontrolü için <Link href="/rehber/promosyon-anahtarlik-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="font-semibold text-blue-600 underline">anahtarlık satın alma kontrol listesini</Link> inceleyebilirsiniz.</p>
              <p>Teklifte hangi kalemlerin karşılaştırılacağını öğrenmek için <Link href="/rehber/promosyon-anahtarlik-fiyatlari" className="font-semibold text-blue-600 underline">anahtarlık fiyatları rehberine</Link>, güncel modeller için <Link href="/promosyon-anahtarlik" className="font-semibold text-blue-600 underline">promosyon anahtarlık kategorisine</Link> geçebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sıkça Sorulan Sorular</h2>
            <div className="mt-4 space-y-5 text-gray-700 leading-7">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-semibold">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="font-bold text-lg">İlgili Kategoriler</h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/promosyon-anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/promosyon-cakmak" className="hover:underline">
              Promosyon Çakmak
            </Link>
            <Link href="/promosyon-kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/promosyon-termos" className="hover:underline">
              Promosyon Termos
            </Link>
            <Link href="/promosyon-usb-bellek" className="hover:underline">
              Promosyon USB Bellek
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}