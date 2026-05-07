import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-nedir`;
const GUIDE_IMAGE = "/guides/promosyon-kalem-nedir.jpg";

export const metadata: Metadata = {
  title: "Promosyon Kalem Nedir? Logo Baskılı Kalem Rehberi",
  description:
    "Promosyon kalem nedir, firmalar neden tercih eder? Logo baskılı promosyon kalemlerin avantajları, kullanım alanları, kalem seçimi, baskı süreci ve marka bilinirliğine katkısı hakkında kapsamlı rehber.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Kalem Nedir? Logo Baskılı Kalem Rehberi",
    description:
      "Promosyon kalemlerin avantajları, kullanım alanları, baskı seçenekleri ve firmalar için neden etkili bir tanıtım ürünü olduğu hakkında detaylı rehber.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}${GUIDE_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Nedir? Logo Baskılı Kalem Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem Nedir? Logo Baskılı Kalem Rehberi",
    description:
      "Promosyon kalem nedir, neden tercih edilir ve firmalara ne kazandırır? Detaylı rehber.",
    images: [`${SITE_URL}${GUIDE_IMAGE}`],
  },
};

const relatedCategories = [
  {
    title: "Promosyon Kalem",
    href: "/kategori/kalem",
    desc: "Logo baskılı plastik, metal ve roller kalem modellerini inceleyin.",
  },
  {
    title: "Promosyon Anahtarlık",
    href: "/kategori/anahtarlik",
    desc: "Kurumsal dağıtım için logo baskılı anahtarlık seçenekleri.",
  },
  {
    title: "Promosyon Termos",
    href: "/kategori/termos",
    desc: "Prestijli kurumsal hediye için termos ve matara modelleri.",
  },
  {
    title: "Promosyon Defter",
    href: "/kategori/tarihsiz-defter",
    desc: "Toplantı, fuar ve ofis kullanımı için defter seçenekleri.",
  },
];

const faqItems = [
  {
    question: "Promosyon kalem nedir?",
    answer:
      "Promosyon kalem, üzerine firma logosu, marka adı, slogan veya iletişim bilgileri basılarak tanıtım amacıyla dağıtılan kurumsal promosyon ürünüdür.",
  },
  {
    question: "Promosyon kalem neden tercih edilir?",
    answer:
      "Promosyon kalemler uygun maliyetli, kullanışlı ve günlük hayatta sık kullanılan ürünler olduğu için firmalara uzun süreli marka görünürlüğü sağlar.",
  },
  {
    question: "Promosyon kalem hangi alanlarda kullanılır?",
    answer:
      "Fuarlar, seminerler, bayi toplantıları, ofisler, mağaza açılışları, eğitim kurumları, sağlık kuruluşları ve kurumsal ziyaretlerde sık kullanılır.",
  },
  {
    question: "Promosyon kalem seçerken nelere dikkat edilmelidir?",
    answer:
      "Hedef kitle, ürün kalitesi, baskı alanı, sipariş adedi, kullanım amacı ve kurumsal imaj dikkate alınmalıdır.",
  },
];

export default function PromosyonKalemNedirPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Kalem Nedir? Logo Baskılı Kalem Rehberi",
    description:
      "Promosyon kalem nedir, firmalar neden tercih eder, hangi alanlarda kullanılır ve marka bilinirliğine nasıl katkı sağlar? Detaylı promosyon kalem rehberi.",
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
        url: `${SITE_URL}/og.jpg`,
      },
    },
    image: [`${SITE_URL}${GUIDE_IMAGE}`],
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
        name: "Promosyon Kalem Nedir?",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Ana Sayfa
          </Link>{" "}
          /{" "}
          <Link href="/rehber" className="hover:text-gray-900 hover:underline">
            Rehber
          </Link>{" "}
          / <span className="text-gray-700">Promosyon Kalem Nedir?</span>
        </nav>

        <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <header>
            <div className="relative h-[240px] w-full overflow-hidden md:h-[430px]">
              <Image
                src={GUIDE_IMAGE}
                alt="Promosyon Kalem Nedir?"
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/75 via-black/25 to-transparent md:block" />

              <div className="absolute bottom-0 left-0 right-0 hidden p-10 md:block">
                <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm">
                  Promosyon Ürün Rehberi
                </div>

                <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white">
                  Promosyon Kalem Nedir? Firmalar Neden Tercih Eder?
                </h1>

                <p className="mt-4 max-w-3xl text-lg leading-7 text-gray-100">
                  Logo baskılı promosyon kalemler; düşük maliyet, yüksek kullanım
                  oranı ve uzun süreli marka görünürlüğü sayesinde firmaların en
                  çok tercih ettiği kurumsal tanıtım ürünleri arasında yer alır.
                </p>
              </div>
            </div>

            <div className="p-6 md:hidden">
              <div className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold text-gray-800">
                Promosyon Ürün Rehberi
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
                Promosyon Kalem Nedir? Firmalar Neden Tercih Eder?
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-700">
                Logo baskılı promosyon kalemler; düşük maliyet, yüksek kullanım
                oranı ve uzun süreli marka görünürlüğü sayesinde firmaların en
                çok tercih ettiği kurumsal tanıtım ürünleri arasında yer alır.
              </p>
            </div>
          </header>

          <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-10">
            <div className="space-y-10">
              <section className="rounded-3xl border border-gray-200 bg-gray-50 p-5 md:p-7">
                <p className="text-base leading-8 text-gray-700 md:text-lg">
                  Promosyon kalem, firmaların marka bilinirliğini artırmak,
                  müşterileriyle temas kurmak ve kurumsal görünürlüğünü günlük
                  hayatın içine taşımak için kullandığı en etkili promosyon
                  ürünlerinden biridir. Üzerine firma logosu, marka adı, slogan
                  veya iletişim bilgileri basılan kalemler; ofislerde, toplantılarda,
                  fuarlarda, okullarda ve günlük kullanımda markanızın sürekli
                  görünür kalmasına yardımcı olur.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
                  Broşür, kartvizit veya kısa süreli reklam çalışmalarının aksine,
                  promosyon kalem uzun süre kullanılabilen pratik bir üründür. Bu
                  nedenle yalnızca dağıtıldığı anda değil, kullanım süresi boyunca
                  da firmanız için reklam değeri üretir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalem Nedir?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem; kurumsal tanıtım, müşteri ilişkileri,
                    marka hatırlanabilirliği ve etkinlik dağıtımları için hazırlanan
                    logo baskılı kalem modelidir. Genellikle plastik, metal,
                    roller, tükenmez, dokunmatik veya set halinde sunulan farklı
                    kalem türleriyle hazırlanabilir.
                  </p>

                  <p>
                    Bu ürünlerin temel amacı, markayı günlük kullanımda görünür
                    hale getirmektir. Kullanıcı kalemi her eline aldığında, üzerinde
                    yer alan logo veya marka adı ile tekrar temas eder. Bu tekrar
                    eden görünürlük, marka bilinirliğini zaman içinde güçlendirir.
                  </p>

                  <p>
                    Özellikle yüksek adetli dağıtımlarda promosyon kalemler,
                    maliyet-performans açısından oldukça avantajlıdır. Bu nedenle
                    küçük işletmelerden büyük kurumsal firmalara kadar birçok marka
                    promosyon kalemleri aktif olarak kullanır.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Firmalar Promosyon Kalemi Neden Tercih Eder?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Firmaların promosyon kalem tercih etmesinin en önemli nedeni,
                    uygun bütçeyle geniş kitlelere ulaşabilmesidir. Kalem, hemen
                    herkesin günlük hayatta kullandığı bir ürün olduğu için hedef
                    kitle sınırlaması oldukça düşüktür.
                  </p>

                  <p>
                    Bir müşteriye, ziyaretçiye veya iş ortağına verilen logo
                    baskılı kalem; markanızın masa üzerinde, çantada, ofiste ya da
                    toplantı ortamında görünmesini sağlar. Bu görünürlük doğal
                    olduğu için kullanıcı tarafından rahatsız edici bir reklam gibi
                    algılanmaz.
                  </p>

                  <p>
                    Ayrıca promosyon kalemler fuar, seminer, bayi toplantısı,
                    mağaza açılışı, saha satışı, eğitim programı ve kurumsal ziyaret
                    gibi birçok alanda kolayca dağıtılabilir. Hafif, pratik ve
                    kullanışlı olması, dağıtım sürecini de oldukça kolaylaştırır.
                  </p>
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-2">
                {[
                  "Düşük maliyetle yüksek marka görünürlüğü sağlar.",
                  "Günlük kullanım sayesinde reklam etkisi uzun sürer.",
                  "Fuar ve etkinliklerde kolay dağıtılır.",
                  "Kurumsal kimlik algısını güçlendirir.",
                  "Toplu siparişlerde bütçe dostu çözümler sunar.",
                  "Her sektöre uygun kullanılabilir.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      ✓
                    </div>
                    <p className="text-sm font-semibold leading-6 text-gray-800">
                      {item}
                    </p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  En Çok Tercih Edilen Promosyon Kalem Türleri
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem seçimi yapılırken hedef kitle, bütçe, dağıtım
                    amacı ve marka imajı birlikte değerlendirilmelidir. Her kalem
                    modeli aynı etkiyi oluşturmaz. Bu nedenle doğru ürün seçimi,
                    promosyon çalışmasının başarısını doğrudan etkiler.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900">
                    Plastik Promosyon Kalem
                  </h3>
                  <p>
                    Plastik promosyon kalem modelleri, ekonomik yapıları sayesinde
                    yüksek adetli dağıtımlar için idealdir. Fuar, okul, kampanya,
                    mağaza açılışı ve geniş kitleli tanıtım çalışmalarında sık
                    tercih edilir.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900">
                    Metal Promosyon Kalem
                  </h3>
                  <p>
                    Metal promosyon kalemler daha prestijli bir görünüm sunar.
                    Yönetici hediyesi, özel müşteri sunumu, bayi toplantısı ve
                    kurumsal hediye çalışmalarında güçlü bir marka algısı oluşturur.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900">
                    Dokunmatik Promosyon Kalem
                  </h3>
                  <p>
                    Dokunmatik uçlu kalemler, klasik kalem kullanımını telefon ve
                    tablet ekran uyumuyla birleştirir. Teknoloji odaklı firmalar
                    veya modern kurumsal hediye arayan markalar için dikkat çekici
                    bir alternatiftir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalem Hangi Alanlarda Kullanılır?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalemler çok geniş bir kullanım alanına sahiptir.
                    Eğitim kurumları, sağlık kuruluşları, inşaat firmaları,
                    danışmanlık şirketleri, emlak ofisleri, oteller, ajanslar,
                    bankalar, mağazalar ve üretim firmaları tarafından rahatlıkla
                    kullanılabilir.
                  </p>

                  <p>
                    Fuar standlarında ziyaretçilere dağıtılabilir, toplantılarda
                    katılımcılara sunulabilir, müşterilere teklif dosyası ile
                    birlikte verilebilir veya ofis içinde misafir kullanımına
                    sunulabilir. Bu esneklik, promosyon kalemi kurumsal tanıtım
                    çalışmalarında güçlü bir ürün haline getirir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalem Seçerken Nelere Dikkat Edilmelidir?
                </h2>

                <div className="mt-5 space-y-5">
                  {[
                    {
                      title: "Hedef Kitle",
                      text: "Kalemin kimlere dağıtılacağı model seçimini doğrudan etkiler. Fuar ziyaretçisi, yönetici, öğrenci veya kurumsal müşteri için farklı ürünler tercih edilebilir.",
                    },
                    {
                      title: "Ürün Kalitesi",
                      text: "Kalemin yazım kalitesi, malzeme yapısı ve elde bıraktığı his marka algısını etkiler. Kaliteli ürün, markanın daha profesyonel görünmesine yardımcı olur.",
                    },
                    {
                      title: "Baskı Alanı",
                      text: "Logo veya marka adının net görünmesi için baskı alanı yeterli olmalıdır. Ürünün yüzeyi, baskı tekniğiyle uyumlu seçilmelidir.",
                    },
                    {
                      title: "Sipariş Adedi",
                      text: "Toplu siparişlerde ürün maliyeti değişebilir. Dağıtım planına göre doğru adet belirlemek, bütçenin daha verimli kullanılmasını sağlar.",
                    },
                    {
                      title: "Kurumsal İmaj",
                      text: "Ekonomik dağıtımlar için plastik kalemler, daha prestijli sunumlar için metal veya özel tasarımlı kalemler tercih edilebilir.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                    >
                      <h3 className="text-lg font-extrabold text-gray-900">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-700 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-black p-6 text-white md:p-8">
                <h2 className="text-2xl font-extrabold">
                  Logo Baskılı Promosyon Kalem ile Markanızı Daha Görünür Hale Getirin
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-200 md:text-base">
                  Promosyon kalemler, tek başına basit bir kırtasiye ürünü gibi
                  görünse de doğru kullanıldığında güçlü bir reklam aracına dönüşür.
                  Üzerinde yer alan logo, slogan veya iletişim bilgisi sayesinde
                  markanız müşterinin günlük hayatına doğal şekilde dahil olur.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kategori/kalem"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-gray-100"
                  >
                    Promosyon Kalem Modellerini İncele
                  </Link>

                  <Link
                    href="/kurumsal-teklif-al"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Kurumsal Teklif Al
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalem Marka Bilinirliğine Nasıl Katkı Sağlar?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Marka bilinirliği, yalnızca markanın görülmesiyle değil, tekrar
                    tekrar hatırlanmasıyla güçlenir. Promosyon kalemler bu noktada
                    oldukça etkilidir. Çünkü kullanıcı kalemi gün içinde birçok kez
                    eline alabilir, masasında tutabilir veya başka kişilere
                    kullandırabilir.
                  </p>

                  <p>
                    Bu durum, tek bir promosyon ürününün birden fazla kişiye temas
                    etmesini sağlar. Özellikle sade, okunaklı ve profesyonel logo
                    baskısı ile hazırlanan kalemler, markanın daha güvenilir ve
                    kurumsal algılanmasına katkı sunar.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalem ile Birlikte Hangi Ürünler Tercih Edilebilir?
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                  Promosyon kalemler tek başına kullanılabileceği gibi farklı
                  promosyon ürünleriyle birlikte set halinde de sunulabilir. Özellikle
                  kurumsal hediye paketlerinde kalem, defter, anahtarlık, termos,
                  USB bellek veya powerbank gibi ürünlerle birlikte daha güçlü bir
                  tanıtım etkisi oluşturabilir.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {relatedCategories.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md"
                    >
                      <h3 className="text-base font-extrabold text-gray-900 group-hover:underline">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Sık Sorulan Sorular
                </h2>

                <div className="mt-5 space-y-4">
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                    >
                      <h3 className="text-base font-extrabold text-gray-900">
                        {item.question}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-700">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Sonuç</h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem, düşük maliyetli olmasına rağmen uzun süreli
                    marka görünürlüğü sağlayan en güçlü kurumsal promosyon
                    ürünlerinden biridir. Günlük kullanımda yer alması, geniş hedef
                    kitlelere hitap etmesi ve logo baskısına uygun yapısı sayesinde
                    firmalar için etkili bir tanıtım aracıdır.
                  </p>

                  <p>
                    Doğru model, kaliteli baskı ve hedef kitleye uygun seçim ile
                    promosyon kalemler yalnızca bir hediye değil, markanızın sürekli
                    görünür kalmasını sağlayan profesyonel bir reklam ürününe dönüşür.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kurumsal-teklif-al"
                    className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
                  >
                    Kurumsal Teklif Al
                  </Link>

                  <Link
                    href="/urunler"
                    className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
                  >
                    Tüm Ürünleri İncele
                  </Link>
                </div>
              </section>
            </div>

            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Rehber Özeti
                  </p>

                  <ul className="mt-4 space-y-3 text-sm font-medium text-gray-700">
                    <li>Promosyon kalem nedir?</li>
                    <li>Firmalar neden tercih eder?</li>
                    <li>Kalem türleri nelerdir?</li>
                    <li>Seçim yaparken nelere dikkat edilmeli?</li>
                    <li>Marka bilinirliğine katkısı nedir?</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-black p-5 text-white">
                  <h3 className="text-lg font-extrabold">
                    Logo Baskılı Ürün Teklifi Alın
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    Kalem, anahtarlık, termos ve diğer promosyon ürünleri için
                    firmanıza özel teklif isteyin.
                  </p>

                  <Link
                    href="/kurumsal-teklif-al"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-gray-100"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </main>
  );
}