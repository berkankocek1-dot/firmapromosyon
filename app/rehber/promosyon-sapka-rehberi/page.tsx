import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-sapka-rehberi`;
const GUIDE_IMAGE = "/guides/promosyon-sapka-rehberi.jpg";

export const metadata: Metadata = {
  title:
    "Promosyon Şapka Rehberi | Kumaş, Kalıp ve Logo Seçimi",
  description:
    "Logo baskılı şapka seçerken kumaş içeriği, kalıp, ayar mekanizması ve uygulama alanını karşılaştırın. Numune ve kurumsal sipariş kontrol listesini inceleyin.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Promosyon Şapka Rehberi | Kumaş, Kalıp ve Logo Seçimi",
    description:
      "Logo baskılı promosyon şapka seçimi yaparken kumaş, model, baskı tekniği, kullanım alanı ve kurumsal hedefe göre dikkat edilmesi gerekenler.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}${GUIDE_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Promosyon Şapka Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Promosyon Şapka Rehberi | Kumaş, Kalıp ve Logo Seçimi",
    description:
      "Promosyon şapka için kumaş, kalıp, logo uygulaması ve numune kontrolünü birlikte değerlendirin.",
    images: [`${SITE_URL}${GUIDE_IMAGE}`],
  },
};

const faqItems = [
  {
    "question": "Şapka seçiminde yalnız kumaş adı yeterli mi?",
    "answer": "Hayır. Kumaş içeriği, kalıp, panel yapısı, ayar mekanizması ve logo uygulaması birlikte değerlendirilmelidir. File veya siper detayı tek başına kumaşın tam içeriğini açıklamaz."
  },
  {
    "question": "Ayarlanabilir şapka herkese uyar mı?",
    "answer": "Ayarlanabilir olması bütün kullanıcılarda aynı uyumu sağlayacağını göstermez. Ayar aralığı, başta duruş ve kalıp numunede değerlendirilmelidir."
  },
  {
    "question": "Her şapkaya nakış veya DTF uygulanabilir mi?",
    "answer": "Uygunluk seçilen şapkanın kumaşına, ön paneline, dikişlerine ve tasarıma bağlıdır. Her yöntem için model üzerinde mevcut uygulama alanı ve seçenekler teyit edilmelidir."
  },
  {
    "question": "Sandviç siper veya file detayı neyi karşılaştırmak için kullanılmalı?",
    "answer": "Bunlar modelin yapı ve görünüm özellikleri olarak değerlendirilmelidir. Kumaş içeriği, beden uyumu, performans veya koruma özelliği bu adlardan tek başına çıkarılmamalıdır."
  },
  {
    "question": "Yerli üretim bilgisi ve teslim süresi nasıl doğrulanır?",
    "answer": "Üretim yeri seçilen modelin ürün bilgisi ve tedarik teyidiyle doğrulanmalıdır. Üretim yeri tek başına stok, hız veya özelleştirme garantisi vermez; sipariş koşulları ayrıca netleştirilmelidir."
  },
  {
    "question": "Şapkanın bakım koşulları nereden öğrenilir?",
    "answer": "Seçilen ürünün etiketi ve logo uygulamasına ait bakım bilgileri birlikte esas alınmalıdır. Baskılı veya nakışlı bütün şapkalar için ortak yıkama sıcaklığı ya da bakım yöntemi varsayılmamalıdır."
  }
];

const relatedCategories = [
  {
    "title": "Promosyon Şapka",
    "href": "/promosyon-sapka",
    "desc": "Güncel modellerin özelliklerini inceleyin."
  },
  {
    "title": "Promosyon Tişört",
    "href": "/promosyon-tisort",
    "desc": "Ekip giyimi için model seçeneklerini karşılaştırın."
  },
  {
    "title": "Promosyon Bez ve Tela Çanta",
    "href": "/promosyon-ham-bez-tela-canta",
    "desc": "Etkinlik dağıtımında taşıma ihtiyacını değerlendirin."
  }
];

export default function PromosyonSapkaRehberiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Promosyon Şapka Rehberi: Kumaş, Kalıp ve Logo Seçimi",
    description:
      "Promosyon şapka seçerken kumaş türü, baskı tekniği, kullanım alanı, hedef kitle ve kurumsal marka görünürlüğü açısından dikkat edilmesi gerekenleri anlatan kapsamlı rehber.",
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
        name: "Promosyon Şapka Rehberi",
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
    <div className="bg-gray-50 text-gray-900">
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

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">
            Ana Sayfa
          </Link>{" "}
          /{" "}
          <Link href="/rehber" className="hover:text-gray-900 hover:underline">
            Rehber
          </Link>{" "}
          / <span className="text-gray-700">Promosyon Şapka Rehberi</span>
        </nav>

        <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <header className="relative">
            <div className="relative h-[240px] w-full overflow-hidden md:h-[430px]">
              <Image
                src={GUIDE_IMAGE}
                alt="Promosyon Şapka Rehberi"
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/35 to-transparent md:block" />
            </div>

            <div className="p-6 md:absolute md:bottom-0 md:left-0 md:right-0 md:p-10">
              <div className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold text-gray-800 md:bg-white/90 md:text-gray-900 md:shadow-sm">
                Kurumsal Promosyon Rehberi
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:max-w-5xl md:text-5xl md:text-white">
                Promosyon Şapka Rehberi: Kumaş, Kalıp ve Logo Seçimi
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-700 md:max-w-3xl md:text-lg md:text-gray-100">
                Promosyon şapka seçiminde kullanım amacı, kumaş içeriği ve başta duruş
                birlikte değerlendirilmelidir. Logo alanını, numuneyi ve teslim planını
                netleştirerek kurumsal siparişinizi hazırlayın.
              </p>
            </div>
          </header>

          <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-10">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Promosyon şapka nedir, hangi ihtiyaç için seçilir?</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Promosyon şapka, işletmenin logosu veya mesajıyla kişiselleştirilen ve personel, müşteri ya da etkinlik katılımcılarına sunulan tanıtım ürünüdür. Model seçimi, ürünün uzun süreli ekip kullanımına mı yoksa belirli bir etkinlik dağıtımına mı ayrıldığına göre planlanmalıdır.</p>
                  <p>Şapkanın görünür olması tek başına satış veya marka hatırlanırlığı sonucu göstermez. Kullanıcının ürünü takmayı tercih etmesi, rahatlık ve dağıtımın ihtiyaca uygunluğu birlikte değerlendirilmelidir.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Kumaş içeriğini model detaylarından ayırın</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Polyester veya pamuklu ifadesi kumaş içeriğiyle; fileli veya sandviç siper ifadesi ise modelin farklı detaylarıyla ilgilidir. Bunları birbirinin yerine geçen dört ayrı kumaş türü olarak okumayın. Kesin içerik ve varsa karışım bilgisi ürün açıklamasından teyit edilmelidir.</p>
                  <p>Bir malzeme adından otomatik olarak serinlik, terletmeme, su geçirmezlik veya güneş koruma performansı çıkarmayın. Ürüne ait doğrulanmış bilgi bulunmuyorsa bu özellikler var kabul edilmemelidir.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Kalıp, panel ve ayar mekanizmasını kontrol edin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Numuneyi başta duruş, ön panelin biçimi, siperin görünümü ve arkadaki ayar mekanizması açısından inceleyin. Dikiş yerleri ile logo uygulanacak alanın ilişkisini kontrol edin.</p>
                  <p>Ayarlanabilir olması herkese aynı şekilde uyacağını göstermez. Ayar aralığını ve modelin hedef kullanıcı grubunu teyit edin. Farklı ekip üyelerinin kullanacağı siparişte yalnız fotoğraf üzerinden kalıp kararı vermeyin.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Fileli ve sandviç siper detaylarını karşılaştırın</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Fileli yapı veya siper detayı, görünüm ve model tercihi için değerlendirilebilir. Ancak bu adlardan ürünün tüm kumaş içeriği, ölçüsü veya kullanım performansı anlaşılmaz.</p>
                  <p>Aynı renkte görünen modellerin ön paneli ve siper biçimi farklı olabilir. Numunede gerçek renk, dikiş ve formu inceleyin; seçilen model kodunu siparişte açıkça belirtin.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Logo için DTF, nakış veya arma seçimini modelle eşleştirin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Yöntem seçmeden önce logonun ölçüsünü, renklerini ve uygulanacağı bölgeyi belirleyin. Kumaş, panel dikişleri ve ön yüzün yapısı nedeniyle her uygulama her modelde aynı şekilde sunulmayabilir.</p>
                  <p>DTF transfer, nakış veya arma gibi seçeneklerin uygunluğunu seçtiğiniz şapka üzerinde teyit edin. İnce yazı ve detayların nasıl görüneceğini gerçek ölçüde inceleyin. Dijital yerleşim onayı fiziksel doku, renk veya dayanıklılık sonucu göstermez.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Numune ve son tasarım onayını ayırın</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Baskısız numune kumaş, kalıp ve ayar mekanizmasını değerlendirmek içindir. Logolu numune isteniyorsa kullanılacak model, uygulama yöntemi, bedel ve hazırlık süresi ayrıca konuşulmalıdır.</p>
                  <p>Onayda model kodu, renk, logo ölçüsü, konumu ve tasarımın son sürümü yer alsın. Fiziksel numunede uygulamanın panel ve dikişlere göre yerleşimini kontrol edin. Bakımda ürün etiketi ile uygulamaya ait talimatları birlikte esas alın.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Adet, üretim yeri ve teslim planını teyit edin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Üretim yeri veya yerli üretim bilgisi seçilen modelin açıklaması ve yazılı tedarik teyidiyle doğrulanmalıdır. Bu bilgi tek başına kısa teslim süresi veya sınırsız model değişikliği anlamına gelmez.</p>
                  <p>Dağıtılacak kişi sayısını, gerekli renkleri ve etkinlik tarihini belirleyin. Minimum adet, stok, logo uygulaması, ambalaj, KDV ve sevkiyat kapsamını aynı teklif içinde netleştirin. Tasarım onayı ile kargoya veriliş ve teslim alınma tarihlerini ayrı planlayın.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Sipariş öncesi kısa kontrol listesi</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Kumaş içeriği teyit edildi mi? Kalıp ve ayar aralığı numunede değerlendirildi mi? Logo alanı ve yöntem uygun mu? Son tasarım onaylandı mı? Model, renk, adet ve teslim planı yazılı mı?</p>
                  <p>Güncel modelleri <Link href="/promosyon-sapka" className="font-semibold underline">promosyon şapka kategorisinden</Link> inceleyin. Ekip kıyafetleri birlikte planlanacaksa <Link href="/promosyon-tisort" className="font-semibold underline">tişört</Link> rengini ve logo yerleşimini de aynı kurumsal tasarım üzerinden değerlendirin.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold">İlgili Kategoriler</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {relatedCategories.map((item) => (
                    <div key={item.href} className="rounded-2xl border p-4">
                      <h3 className="font-semibold"><Link href={item.href} className="underline">{item.title}</Link></h3>
                      <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
                <div className="mt-4 space-y-5 leading-7 text-gray-700">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="font-semibold">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
              <Link href="/kurumsal-teklif-al" className="inline-flex rounded-2xl bg-black px-6 py-3 font-semibold text-white">Kurumsal Teklif Al</Link>
            </div>

            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Rehber İçeriği
                  </p>

                  <ul className="mt-4 space-y-3 text-sm font-medium text-gray-700">
                    <li>Kumaş içeriği ve model detayları</li>
                    <li>Kalıp ve ayar mekanizması</li>
                    <li>Logo uygulama alanı</li>
                    <li>Numune ve tasarım onayı</li>
                    <li>Adet ve teslim planı</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-black p-5 text-white">
                  <h3 className="text-lg font-extrabold">
                    Şapka Teklifi Alın
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    Logo uygulamalı promosyon şapka modelleri için
                    firmanıza özel fiyat teklifi isteyin.
                  </p>

                  <Link
                    href="/kurumsal-teklif-al"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-gray-100"
                  >
                    Teklif Al
                  </Link>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-extrabold text-gray-900">
                    İlgili Ürünler
                  </h3>

                  <div className="mt-4 space-y-3">
                    {relatedCategories.slice(0, 5).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
}
