import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli`;
const GUIDE_IMAGE = "/guides/promosyon-kalem-secerken-nelere-dikkat-edilmeli.jpg";

export const metadata: Metadata = {
  title: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
  description:
    "Promosyon kalem seçerken nelere dikkat edilmeli? Logo baskılı kalem seçiminde hedef kitle, model, baskı alanı, kalite, adet planlaması ve kurumsal kullanım için detaylı rehber.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
    description:
      "Logo baskılı promosyon kalem seçimi yaparken kalite, model, baskı türü, kullanım amacı ve hedef kitle açısından dikkat edilmesi gerekenler.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}${GUIDE_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
    description:
      "Promosyon kalem seçiminde doğru model, kaliteli baskı ve hedef kitle uyumu için kapsamlı rehber.",
    images: [`${SITE_URL}${GUIDE_IMAGE}`],
  },
};

const faqItems = [
  {
    question: "Promosyon kalem seçerken en önemli kriter nedir?",
    answer:
      "Promosyon kalem seçerken en önemli kriter hedef kitleye uygun model belirlemektir. Ürünün kalitesi, baskı alanı, yazım konforu ve kullanım amacı birlikte değerlendirilmelidir.",
  },
  {
    question: "Plastik promosyon kalem mi metal promosyon kalem mi tercih edilmeli?",
    answer:
      "Geniş kitlelere ekonomik dağıtım yapılacaksa plastik promosyon kalemler, daha prestijli kurumsal hediye hedefleniyorsa metal promosyon kalemler tercih edilebilir.",
  },
  {
    question: "Promosyon kalemde baskı alanı neden önemlidir?",
    answer:
      "Baskı alanı, logo ve marka adının okunabilir görünmesini sağlar. Dar baskı alanına sahip ürünlerde karmaşık logolar net görünmeyebilir.",
  },
  {
    question: "Promosyon kalem siparişinde adet nasıl belirlenmelidir?",
    answer:
      "Sipariş adedi; dağıtım yapılacak kişi sayısı, etkinlik planı, kampanya süresi ve bütçeye göre belirlenmelidir. Yüksek adetlerde birim maliyet daha avantajlı olabilir.",
  },
];

const relatedCategories = [
  {
    title: "Promosyon Kalem",
    href: "/kategori/kalem",
    desc: "Logo baskılı plastik, metal ve roller kalem seçeneklerini inceleyin.",
  },
  {
    title: "Promosyon Anahtarlık",
    href: "/kategori/anahtarlik",
    desc: "Kalemle birlikte dağıtılabilecek pratik kurumsal ürünler.",
  },
  {
    title: "Promosyon Termos",
    href: "/kategori/termos",
    desc: "Daha prestijli kurumsal hediye arayan firmalar için ideal seçenekler.",
  },
  {
    title: "Promosyon USB Bellek",
    href: "/kategori/usb-bellek",
    desc: "Teknoloji odaklı kurumsal tanıtım çalışmaları için güçlü alternatif.",
  },
];

export default function PromosyonKalemSecimRehberiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
    description:
      "Promosyon kalem seçerken hedef kitle, model, baskı türü, kalite, adet planlaması ve kurumsal kullanım açısından dikkat edilmesi gereken noktaları anlatan kapsamlı rehber.",
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
        name: "Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?",
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
    <main className="bg-gray-50 text-gray-900">
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
          /{" "}
          <span className="text-gray-700">
            Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?
          </span>
        </nav>

        <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <header className="relative">
            <div className="relative h-[270px] w-full overflow-hidden md:h-[430px]">
              <Image
                src={GUIDE_IMAGE}
                alt="Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?"
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm">
                  Satın Alma Rehberi
                </div>

                <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
                  Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-100 md:text-lg">
                  Logo baskılı kalem siparişi verirken yalnızca fiyat değil;
                  hedef kitle, kalite, baskı alanı, kullanım amacı ve kurumsal
                  imaj da birlikte değerlendirilmelidir.
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-10">
            <div className="space-y-10">
              <section className="rounded-3xl border border-gray-200 bg-gray-50 p-5 md:p-7">
                <p className="text-base leading-8 text-gray-700 md:text-lg">
                  Promosyon kalem, firmaların en sık tercih ettiği kurumsal
                  tanıtım ürünlerinden biridir. Ancak etkili bir sonuç almak için
                  sadece logo baskılı bir kalem yaptırmak yeterli değildir. Doğru
                  kalem modeli, doğru baskı yöntemi, doğru adet planlaması ve
                  doğru hedef kitle uyumu sağlandığında promosyon kalem gerçek
                  anlamda güçlü bir reklam aracına dönüşür.
                </p>

                <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
                  Bu rehberde promosyon kalem seçerken dikkat edilmesi gereken
                  tüm temel noktaları; ürün kalitesi, baskı alanı, kullanım
                  amacı, bütçe dengesi ve marka algısı açısından detaylı şekilde
                  inceleyebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Doğru Promosyon Kalem Seçimi Neden Önemlidir?
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon ürünleri arasında kalemlerin bu kadar yaygın
                    kullanılmasının temel nedeni, günlük hayatta sürekli ihtiyaç
                    duyulan pratik ürünler olmalarıdır. Bir kalem ofiste, okulda,
                    toplantıda, mağazada, fuarda veya müşteri görüşmesinde rahatlıkla
                    kullanılabilir.
                  </p>

                  <p>
                    Ancak seçilen kalem kalitesizse, yazımı rahat değilse veya
                    üzerindeki logo baskısı zayıf görünüyorsa, beklenen marka
                    etkisi oluşmayabilir. Bu nedenle promosyon kalem seçimi
                    sadece maliyet hesabı olarak görülmemelidir.
                  </p>

                  <p>
                    İyi seçilmiş bir promosyon kalem, firmanın profesyonelliğini
                    destekler. Kötü seçilmiş bir ürün ise markanın kalite algısını
                    zayıflatabilir. Bu yüzden ürün küçük olsa bile temsil ettiği
                    marka değeri büyüktür.
                  </p>
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Hedef Kitle",
                    text: "Kalemin kimlere dağıtılacağı ürün modelini belirler.",
                  },
                  {
                    title: "Baskı Kalitesi",
                    text: "Logo ve marka adı net, okunabilir ve kalıcı olmalıdır.",
                  },
                  {
                    title: "Kullanım Amacı",
                    text: "Fuar, toplantı, ofis veya özel hediye için farklı modeller seçilebilir.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-base font-extrabold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  1. Hedef Kitleyi Net Belirleyin
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem seçiminde ilk adım, ürünün kimlere
                    dağıtılacağını belirlemektir. Çünkü her hedef kitle aynı ürün
                    tipinden etkilenmez. Öğrencilere, fuar ziyaretçilerine,
                    yöneticilere, bayi ağına, saha ekiplerine veya düzenli
                    müşterilere verilecek kalemlerin modeli farklı olabilir.
                  </p>

                  <p>
                    Geniş kitlelere dağıtım yapılacaksa ekonomik plastik kalemler
                    daha uygun olabilir. Daha seçkin bir kitleye sunum yapılacaksa
                    metal kalem, roller kalem veya özel kutulu kalem setleri daha
                    güçlü bir izlenim bırakabilir.
                  </p>

                  <p>
                    Hedef kitlenin yaşı, mesleği, kullanım alışkanlıkları ve ürünle
                    temas edeceği ortam dikkate alındığında promosyon kalemden
                    alınacak verim artar.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  2. Kalem Modeli Marka Algısını Doğrudan Etkiler
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem modelleri; plastik, metal, roller, tükenmez,
                    dokunmatik, soft touch veya kalem seti gibi farklı seçeneklere
                    ayrılır. Her modelin oluşturduğu algı farklıdır.
                  </p>

                  <p>
                    Plastik promosyon kalem modelleri yüksek adetli dağıtımlar
                    için ekonomik çözümler sunar. Metal promosyon kalemler daha
                    prestijli görünür. Dokunmatik kalemler teknoloji odaklı
                    firmalar için modern bir alternatif olabilir.
                  </p>

                  <p>
                    Bu nedenle kalem modeli seçilirken ürünün yalnızca fiyatına
                    değil, markanızın dışarıya vermek istediği mesaja da bakmak
                    gerekir.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl border border-gray-200 bg-gray-50 p-5 md:p-7">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Hızlı Seçim Tablosu
                </h2>

                <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <div className="grid grid-cols-3 bg-gray-100 text-xs font-bold text-gray-700 md:text-sm">
                    <div className="p-3">Kullanım Amacı</div>
                    <div className="p-3">Önerilen Model</div>
                    <div className="p-3">Avantaj</div>
                  </div>

                  {[
                    ["Fuar Dağıtımı", "Plastik Kalem", "Ekonomik ve yüksek adetli"],
                    ["Kurumsal Hediye", "Metal Kalem", "Daha prestijli görünüm"],
                    ["Teknoloji Firmaları", "Dokunmatik Kalem", "Modern kullanım"],
                    ["VIP Sunum", "Kalem Seti", "Premium algı"],
                  ].map((row) => (
                    <div
                      key={row[0]}
                      className="grid grid-cols-3 border-t border-gray-100 text-xs text-gray-700 md:text-sm"
                    >
                      <div className="p-3 font-semibold text-gray-900">
                        {row[0]}
                      </div>
                      <div className="p-3">{row[1]}</div>
                      <div className="p-3">{row[2]}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  3. Baskı Alanı ve Logo Görünürlüğü Kontrol Edilmelidir
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalemin temel amacı markanızı görünür hale
                    getirmektir. Bu nedenle baskı alanı çok önemlidir. Logo,
                    marka adı veya iletişim bilgisinin rahat okunabileceği bir
                    yüzey tercih edilmelidir.
                  </p>

                  <p>
                    Bazı kalem modellerinde baskı alanı dar olabilir. Bu durumda
                    çok detaylı logolar veya uzun metinler net görünmeyebilir.
                    Daha sade logo kullanımı, kısa slogan veya yalnızca marka adı
                    baskısı daha profesyonel sonuç verebilir.
                  </p>

                  <p>
                    Metal kalemlerde lazer baskı daha kalıcı ve şık bir etki
                    oluşturabilir. Plastik kalemlerde ise tampon baskı veya UV
                    baskı seçenekleri değerlendirilebilir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  4. Yazım Kalitesi ve Kullanım Konforu Önemlidir
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Bir promosyon kalem gerçekten kullanılıyorsa etkili olur.
                    Kullanıcı kalemi rahat bulmazsa, ürün kısa sürede kenara
                    bırakılabilir. Bu nedenle yazım kalitesi ve kullanım konforu
                    göz ardı edilmemelidir.
                  </p>

                  <p>
                    Kalemin eldeki dengesi, mürekkep akışı, uç mekanizması ve
                    tutuş hissi kullanıcı deneyimini belirler. Rahat yazan bir
                    kalem daha uzun süre kullanılır ve markanız daha fazla görünür
                    olur.
                  </p>

                  <p>
                    Özellikle müşteriye veya iş ortağına verilecek ürünlerde kalite
                    hissi daha önemlidir. Çünkü promosyon ürünü, markanızla ilgili
                    ilk izlenimlerden biri olabilir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  5. Kullanım Alanına Göre Ürün Seçilmelidir
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalemler her ortamda aynı amaçla kullanılmaz. Fuar
                    için seçilen ürün ile yönetici toplantısında verilecek ürün
                    aynı seviyede olmak zorunda değildir. Bu nedenle kullanım
                    alanı seçim sürecinde netleştirilmelidir.
                  </p>

                  <p>
                    Fuar, mağaza açılışı ve kampanya dağıtımlarında uygun
                    maliyetli modeller ön plana çıkar. Bayi toplantısı, özel
                    müşteri ziyareti ve kurumsal sunumlarda ise daha kaliteli ve
                    şık modeller tercih edilebilir.
                  </p>

                  <p>
                    Ayrıca promosyon kalemler defter, ajanda, anahtarlık, USB
                    bellek veya termos gibi ürünlerle birlikte set haline
                    getirildiğinde çok daha güçlü bir kurumsal hediye etkisi
                    oluşturabilir.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl bg-black p-6 text-white md:p-8">
                <h2 className="text-2xl font-extrabold">
                  Kurumsal Promosyon Planı Hazırlarken Kalemi Tek Başına Düşünmeyin
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-200 md:text-base">
                  Promosyon kalem, birçok ürünle birlikte kullanılabilen güçlü bir
                  tamamlayıcıdır. Özellikle defter, ajanda, anahtarlık, termos ve
                  USB bellek gibi ürünlerle birlikte sunulduğunda daha profesyonel
                  bir marka deneyimi oluşturur.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kategori/kalem"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-gray-100"
                  >
                    Kalem Modellerini İncele
                  </Link>

                  <Link
                    href="/kurumsal-teklif-al"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Teklif Al
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  6. Adet Planlaması ve Bütçe Dengesi Kurulmalıdır
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem siparişinde adet planlaması, fiyat ve stok
                    yönetimi açısından önemlidir. Dağıtım yapılacak kişi sayısı,
                    etkinlik takvimi ve kampanya süresi önceden belirlenmelidir.
                  </p>

                  <p>
                    Yüksek adetlerde birim maliyet daha avantajlı olabilir. Ancak
                    sadece ucuz ürün seçmek her zaman doğru değildir. Kalite ve
                    bütçe dengesi birlikte düşünülmelidir.
                  </p>

                  <p>
                    Kısa süreli geniş dağıtım için ekonomik modeller, daha seçici
                    müşteri grupları için ise daha premium modeller tercih
                    edilebilir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  7. Kurumsal Kimliğe Uyum Sağlanmalıdır
                </h2>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
                  <p>
                    Promosyon kalem markanızın dış dünyaya verdiği mesajın küçük
                    ama etkili bir parçasıdır. Bu nedenle renk, model, baskı
                    tekniği ve ürün kalitesi kurumsal kimliğinizle uyumlu olmalıdır.
                  </p>

                  <p>
                    Sade ve modern bir marka için minimal tasarımlı kalemler daha
                    uygun olabilir. Daha klasik ve prestijli bir görünüm için metal
                    gövdeli kalemler tercih edilebilir. Genç ve dinamik markalar
                    için renkli veya dokunmatik modeller daha dikkat çekici olabilir.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalem Seçiminde Sık Yapılan Hatalar
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    "Sadece en düşük fiyatlı ürünü seçmek",
                    "Baskı alanını kontrol etmeden sipariş vermek",
                    "Hedef kitleye uygun olmayan model tercih etmek",
                    "Yazım kalitesini ve kullanım hissini önemsememek",
                    "Logo baskısını fazla küçük veya karmaşık hazırlamak",
                    "Dağıtım amacını netleştirmeden ürün seçmek",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-red-100 bg-red-50 p-5"
                    >
                      <p className="text-sm font-semibold leading-6 text-red-900">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Promosyon Kalemle Birlikte Hangi Ürünler Tercih Edilebilir?
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
                  Kalem, kurumsal promosyon çalışmalarında tek başına etkili
                  olduğu gibi farklı ürünlerle birlikte daha güçlü bir set haline
                  de getirilebilir. Özellikle toplantı, fuar, bayi ziyareti ve
                  müşteri hediyelerinde tamamlayıcı ürünlerle birlikte sunulması
                  daha profesyonel bir izlenim oluşturur.
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
                    Promosyon kalem seçerken hedef kitle, model, baskı alanı,
                    yazım kalitesi, kullanım amacı, adet planlaması ve kurumsal
                    kimlik uyumu birlikte değerlendirilmelidir. Doğru seçilen
                    logo baskılı kalem, yalnızca bir hediye değil, markanızın
                    sürekli görünür kalmasını sağlayan etkili bir reklam ürünüdür.
                  </p>

                  <p>
                    Firmanız için doğru promosyon kalem modelini belirlemek
                    istiyorsanız, ürün kategorilerini inceleyebilir ve ihtiyacınıza
                    uygun adet, baskı ve model seçenekleri için teklif talep
                    edebilirsiniz.
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
                    Rehber İçeriği
                  </p>

                  <ul className="mt-4 space-y-3 text-sm font-medium text-gray-700">
                    <li>Hedef kitle seçimi</li>
                    <li>Kalem modeli belirleme</li>
                    <li>Baskı alanı kontrolü</li>
                    <li>Yazım kalitesi</li>
                    <li>Bütçe ve adet planı</li>
                    <li>Sık yapılan hatalar</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-black p-5 text-white">
                  <h3 className="text-lg font-extrabold">
                    Kalem Teklifi Alın
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    Logo baskılı promosyon kalem modelleri için firmanıza özel
                    fiyat teklifi isteyin.
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