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
    "question": "Kalem numunesinde hangi özellikler kontrol edilmeli?",
    "answer": "Kullanılacak kağıtta yazım akışı, çizgi görünümü, tutuş, ağırlık dengesi, klips ve açma kapama mekanizması değerlendirilebilir. Numune tek başına tüm siparişin aynı performansı sağlayacağını kanıtlamaz."
  },
  {
    "question": "Plastik veya metal gövde yazım kalitesini gösterir mi?",
    "answer": "Hayır. Gövde malzemesi ile uç, mürekkep ve yazım hissi ayrı özelliklerdir. Metal gövde tek başına daha iyi yazım veya daha uzun kullanım garantisi değildir."
  },
  {
    "question": "Mürekkep rengi ve uç bilgisi nasıl öğrenilir?",
    "answer": "Seçilen modelin açıklaması ve yazılı tedarik teyidi esas alınmalıdır. Gövde rengi mürekkep rengini göstermez; açıklamada yoksa uç kalınlığı veya yedek değişimi varsayılmamalıdır."
  },
  {
    "question": "Baskısız numune logo sonucunu gösterir mi?",
    "answer": "Hayır. Baskısız numune ürünün fiziksel özelliklerini incelemek içindir. Logo yerleşimi gerçek baskı ölçüsünde onaylanmalı; fiziksel baskılı numune isteniyorsa koşulları ayrıca sorulmalıdır."
  },
  {
    "question": "Adet ve teslim planı nasıl belirlenmeli?",
    "answer": "Dağıtılacak kişi sayısı, etkinlik tarihleri ve gerekiyorsa yedek payı belirlenmelidir. Model, renk, baskı ve ambalaj teyidiyle birlikte üretim ve sevkiyat aşamaları planlanmalıdır."
  }
];

const relatedCategories = [
  {
    "title": "Promosyon Kalem",
    "href": "/promosyon-kalem",
    "desc": "Güncel kalem modellerini karşılaştırın."
  },
  {
    "title": "Plastik Kalem",
    "href": "/promosyon-plastik-kalem",
    "desc": "Plastik gövdeli model seçeneklerini inceleyin."
  },
  {
    "title": "Metal Kalem",
    "href": "/promosyon-metal-kalem",
    "desc": "Metal gövdeli model seçeneklerini inceleyin."
  },
  {
    "title": "Dokunmatik Kalem",
    "href": "/promosyon-dokunmatik-kalem",
    "desc": "Model özelliklerinden dokunmatik uç bilgisini teyit edin."
  }
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
          /{" "}
          <span className="text-gray-700">
            Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?
          </span>
        </nav>

        <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <header className="relative">
            <div className="relative h-[240px] w-full overflow-hidden md:h-[430px]">
              <Image
                src={GUIDE_IMAGE}
                alt="Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?"
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/35 to-transparent md:block" />
            </div>

            <div className="p-6 md:absolute md:bottom-0 md:left-0 md:right-0 md:p-10">
              <div className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold text-gray-800 md:bg-white/90 md:text-gray-900 md:shadow-sm">
                Satın Alma Rehberi
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:max-w-4xl md:text-5xl md:text-white">
                Promosyon Kalem Seçerken Nelere Dikkat Edilmeli?
              </h1>

              <p className="mt-4 text-base leading-7 text-gray-700 md:max-w-3xl md:text-lg md:text-gray-100">
                Logo baskılı kalem siparişi verirken yalnızca fiyat değil;
                hedef kitle, kalite, baskı alanı, kullanım amacı ve kurumsal
                imaj da birlikte değerlendirilmelidir.
              </p>
            </div>
          </header>

          <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-10">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">1. Hedef Kitleyi Net Belirleyin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Kısa bir form doldurmak, toplantıda uzun süre not almak veya saha ziyaretinde belge imzalamak farklı kullanım anlarıdır. Alıcı grubunu ve kalemin nerede kullanılacağını tarif ederek başlayın.</p>
                  <p>Gövde malzemesini alıcının mesleğinden otomatik olarak çıkarmayın. Dağıtım miktarı, taşıma biçimi ve gerçekten yazı yazma ihtiyacı birlikte değerlendirilmelidir.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">2. Modelin Özelliklerini Ayrı Ayrı Okuyun</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Plastik veya metal gövde, jel veya roller tanımı, dokunmatik uç ve yüzey kaplaması aynı özelliği anlatmaz. Bir model birden fazla tanıma sahip olabilir. Gövde malzemesi tek başına yazım performansını göstermez.</p>
                  <p>Mürekkep rengi, uç bilgisi, mekanizma ve varsa yedek değişimi model açıklamasından doğrulanmalıdır. Gövde rengi mürekkep rengi değildir; ürün açıklamasında bulunmayan özellikleri varsaymayın.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">3. Baskı Alanını Gerçek Ölçüsünde İnceleyin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Kalemin gövdesi ile klipsinde kullanılabilir alanlar farklı olabilir. Hangi yüzeye ne ölçüde uygulama yapılabileceğini isteyin. Logoyu ve küçük harfleri gerçek baskı boyutunda değerlendirin.</p>
                  <p>Yöntemin uygunluğu seçilen yüzey ve kaplamayla birlikte teyit edilmelidir. Her metal yüzeyde aynı lazer sonucu veya her plastik gövdede aynı baskı seçeneği beklenmemelidir. Ayrıntılar için <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold underline">kalem baskı türleri rehberine</Link> geçebilirsiniz.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">4. Yazım Kalitesi ve Kullanım Konforunu Numunede Deneyin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Kalemi kullanacağınız kağıtta kısa çizgiler ve birkaç satır yazıyla değerlendirin. Yazının başlangıcını, akışını, çizgi görünümünü ve kağıt üzerindeki hissi gözlemleyin. Tek bir kısa denemeden uzun yazım ömrü sonucu çıkarmayın.</p>
                  <p>Tutuş alanını, ağırlık dengesini, klipsi ve açma kapama mekanizmasını inceleyin. Uzun süre not alınacaksa yalnız fotoğraftaki görünüşle karar vermeyin. Numunenin sipariş edilecek model ve renkle eşleştiğini teyit edin.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">5. Kullanım Ortamı ve Ambalajı Birlikte Düşünün</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Cep veya çantada taşınacak kalemde klips ve mekanizma; toplantı masasında sunulacak kalemde yerleşim ve ambalaj ihtiyacı farklı önem taşıyabilir. Kutulu sunum isteniyorsa kutunun teklife dahil olduğunu ayrıca sorun.</p>
                  <p><Link href="/promosyon-defter" className="font-semibold underline">Defter</Link> veya ajandayla birlikte verilecekse kalemin ilgili tutucuya uyup uymadığını kontrol edin. Ürünlerin birlikte sunulması tek başına daha yüksek reklam etkisi sağlayacağını göstermez.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">6. Adet ve Teslim Planını Netleştirin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Dağıtılacak kişi sayısı, etkinlik tarihleri ve gerekiyorsa yedek payı üzerinden miktar belirleyin. Sadece birim fiyatı azaltmak için ihtiyaçtan fazla ürün almayın. Minimum adet ve mevcut renk stoklarını seçilen model için teyit edin.</p>
                  <p>Tasarım onayı, varsa numune, üretim ve sevkiyat aşamalarını ayırın. Kargoya verilme tarihi ile teslim alınma beklentisi aynı değildir. Fiyat hesabını ayrıntılandırmak için <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir" className="font-semibold underline">kalem maliyet hesaplama rehberini</Link> inceleyebilirsiniz.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">7. Son Onayı Yazılı Siparişle Eşleştirin</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Model kodu, gövde ve mürekkep rengi, adet, baskı yöntemi, basılacak alan, tasarımın son sürümü ve ambalaj bilgisi kayıtlı olsun. Kesin renk beklentisi varsa yalnız ekran görüntüsüne dayanmak yerine teyit yöntemini sorun.</p>
                  <p>Baskısız numune logo sonucunu göstermez. Yerleşimi gerçek ölçüde onaylayın; baskılı numune gerekiyorsa bedel ve süreyi öğrenin. Teslimde adet, model ve baskıyı onay kaydıyla karşılaştırın.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900">Sipariş Öncesi Kısa Kontrol</h2>
                <div className="mt-4 space-y-4 leading-7 text-gray-700">
                  <p>Kullanım amacı belli mi? Mürekkep ve uç bilgisi doğrulandı mı? Numunede yazım ve tutuş değerlendirildi mi? Baskı ölçüsü ve son tasarım onaylandı mı? Adet, ambalaj ve teslim planı yazılı mı?</p>
                  <p>Toplu siparişin dağıtım ve hazırlık planı için <Link href="/rehber/promosyon-kalem-toptan" className="font-semibold underline">toplu kalem siparişi rehberine</Link> geçebilirsiniz.</p>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-extrabold">İlgili Kalem Kategorileri</h2>
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
                    <li>Hedef kitle seçimi</li>
                    <li>Kalem modeli belirleme</li>
                    <li>Baskı alanı kontrolü</li>
                    <li>Yazım kalitesi</li>
                    <li>Bütçe ve adet planı</li>
                    <li>Sipariş öncesi kısa kontrol</li>
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
    </div>
  );
}