import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/reklam-kalemleri`;
const IMAGE_PATH = "/guides/reklam-kalemleri.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Reklam Kalemleri: Fuar ve Toplu Dağıtım Planlaması";
const DESCRIPTION =
  "Reklam kalemleri için fuar adedi, model seçimi, okunaklı logo, paketleme, teslim ve kampanya takibini adım adım planlayın.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "reklam kalemleri",
    "reklam kalemi",
    "logo baskılı kalem",
    "promosyon kalem",
    "kurumsal reklam kalemleri",
    "firma logolu kalem",
    "baskılı kalem",
    "reklam kalemleri fiyatları",
    "promosyon kalem modelleri",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
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
        alt: "Reklam Kalemleri Nedir? 2026 Detaylı Rehber",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE_URL],
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
        name: "Reklam Kalemleri",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Reklam kalemleri nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reklam kalemleri, firma logosu veya tanıtım mesajı taşıyan ve belirli bir hedef kitleye dağıtılan kalemlerdir."
        }
      },
      {
        "@type": "Question",
        "name": "Fuar için kalem adedi nasıl belirlenir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standınızda kalem vermeyi planladığınız kişi sayısı, etkinlik süresi, dağıtım yöntemi ve mevcut ürünler birlikte değerlendirilmelidir."
        }
      },
      {
        "@type": "Question",
        "name": "Kalem üzerine hangi bilgiler basılmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gerçek baskı alanında okunaklı kalacak logo ve öncelikli iletişim bilgisi seçilmelidir; fazla metin okunabilirliği azaltabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Dağıtılan kalem sayısı satış başarısını gösterir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Dağıtım miktarı, teklif talepleri ve varsa kampanya ziyaretleri ayrı izlenmelidir; her kalem satış veya müşteri anlamına gelmez."
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
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

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Reklam Kalemleri</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Reklam Kalemleri: Fuar ve Toplu Dağıtım Nasıl Planlanır?
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Reklam Kalemleri Nedir? 2026 Detaylı Rehber"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
              <p>
                Reklam kalemleri, firma logosu veya tanıtım mesajı taşıyan ve hedef kitleye dağıtılan kalemlerdir. Başarılı bir dağıtım planında yalnızca kalemin fiyatı değil, kime, nerede ve hangi amaçla verileceği de belirlenir.
              </p>
              <p>
                Bu rehber fuar, etkinlik ve kampanya dağıtımlarını hazırlayan ekipler içindir. Kalem adedini tahmin etmeyi, baskı mesajını sadeleştirmeyi ve teslimden dağıtım sonrasına kadar kontrol edilecek adımları ele alır.
              </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Reklam Kalemleri ile Hangi Dağıtım Hedefleniyor?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemi planını ürün seçimiyle değil, dağıtım noktasıyla başlatın. Fuar standında ilk temas için verilen kalem, eğitim oturumunda not almak için sunulan kalem ve mağazada alışverişe eşlik eden kalem farklı kullanım senaryolarına sahiptir.
              </p>
              <p>
                Hedefinizi yazılı belirleyin: ziyaretçinin firma adını hatırlaması mı, iletişim sayfasına ulaşması mı, yoksa toplantı sırasında kullanabileceği bir araç edinmesi mi bekleniyor? Kalem tek başına satış veya yeni müşteri garantisi vermez; dağıtımın amacına uygun bir tamamlayıcıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Fuar ve Etkinlik İçin Kalem Adedi Nasıl Planlanır?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Toplam fuar ziyaretçisi yerine kendi standınızda kalem vermeyi planladığınız kişi sayısını esas alın. Etkinlik günü, ekip sayısı ve günlük dağıtım kapasitesini birlikte değerlendirin. Önceki etkinlikte kalan ürünler varsa bunları da hesaba katın.
              </p>
              <p>
                Örneğin yalnızca teklif görüşmesi yapılan kişilere dağıtım ile stanttan geçen herkese dağıtım aynı adedi gerektirmez. Her iki yaklaşım için de tahmini ihtiyacı ve varsa yedek adedi ayrı yazın. Kesin olmayan ziyaretçi tahminlerini doğrudan sipariş adedi kabul etmeyin.
              </p>
              <p>
                Sipariş öncesi ürün kodu, stok, baskı onayı ve teslim tarihi gibi uygulama adımlarını <Link href="/rehber/promosyon-kalem-toptan" className="font-semibold text-blue-600 underline">toplu kalem siparişi rehberinden</Link>{" "} kontrol edebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Geniş Dağıtım İçin Hangi Kalem Seçilir?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                <Link href="/promosyon-plastik-kalem" className="font-semibold text-blue-600 underline">Plastik kalem modelleri</Link>{" "} geniş dağıtım için değerlendirilebilecek seçeneklerdir. Numunede yazımın kesintisiz olmasını, mekanizmanın çalışmasını ve klipsin kullanım amacına uygunluğunu kontrol edin. Gövde rengi ile logo kontrastı da dağıtım miktarı kadar önemlidir.
              </p>
              <p>
                Sınırlı sayıda özel görüşme yapılacaksa tek model yerine iki dağıtım grubu düşünülebilir. Genel ziyaretçi için ekonomik model, önceden planlanmış iş ortağı görüşmesi için farklı sunum ayrılabilir. İkinci grubun hazırlığını <Link href="/rehber/kurumsal-kalem" className="font-semibold text-blue-600 underline">kurumsal hediye kalemi seçimi rehberinde</Link>{" "} inceleyebilirsiniz.
              </p>
              <p>
                Baskı dahil bütçeye göre ürün elemek için <Link href="/rehber/en-ucuz-promosyon-kalem" className="font-semibold text-blue-600 underline">ekonomik kalem seçimindeki karşılaştırma adımlarını</Link>{" "} kullanın; tek başına baskısız etiket fiyatına göre karar vermeyin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Küçük Baskı Alanında Reklam Mesajı Nasıl Kurulur?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Gövdeye logo, slogan, telefon, internet adresi ve uzun bir metni birlikte sığdırmaya çalışmak okunaklılığı azaltabilir. Öncelikli bilgiyi belirleyin; tasarımı gerçek baskı alanı ölçüsünde kontrol edin. Koyu ve açık gövde alternatiflerinde aynı logonun görünümü değişebilir.
              </p>
              <p>
                Bir internet adresi veya QR kod kullanılacaksa baskı örneği üzerinde okunabilirlik ve çalışırlık kontrolü yapın. Çok küçük bir QR kodu her kaleme uygun kabul etmeyin. Kampanya ayrıntılarını broşür veya kart üzerinde vermek daha uygun olabilir.
              </p>
              <p>
                Yöntem seçimini ürün yüzeyiyle birlikte yapın. Teknik farklar için <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-blue-600 underline">kalem baskı türleri rehberine</Link>{" "} geçebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Dağıtım, Paketleme ve Etkinliğe Teslim Kontrolü</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Ürünün baskıdan çıkış tarihi ile etkinlik alanına ulaşması aynı şey değildir. Logo onayı, üretim veya baskı sırası, kalite kontrolü, kolileme ve kargo için ayrı zaman gerektiğini teklif aşamasında netleştirin. Doğrulanmamış bir teslim gününe göre dağıtım sözü vermeyin.
              </p>
              <p>
                Kalemleri gün veya ekip bazında ayırmak sayım ve takip işini kolaylaştırır. Açık dağıtılacak ürünlerde tekli ambalaj gerekip gerekmediğini belirleyin; fazla ambalaj hem bütçeyi hem hazırlık süresini etkileyebilir.
              </p>
              <p>
                Standa gidecek kolilerin adres, teslim alacak kişi ve etkinlik giriş koşullarını kontrol edin. Yedek ürünleri ayrı tutun ve dağıtım sonunda kalanları kaydedin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Kampanya Sonucu Nasıl Değerlendirilir?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Başlangıç adedi, dağıtılan miktar ve kalan ürün sayısını kaydedin. Teklif görüşmesi, iletişim talebi veya kampanya sayfası ziyareti gibi hedefleri de ayrı izleyin. Dağıtılan her kalemi yeni müşteri veya satış olarak saymayın.
              </p>
              <p>
                Kampanyaya özel bir bağlantı kullanılıyorsa ziyaretleri izlemek mümkün olabilir; ancak bu ölçüm tüm kalemlerin etkisini göstermez. Fuardaki diğer temaslar da sonuca katkı yapabilir. Önceki etkinliklerle benzer koşullarda karşılaştırma yapmak daha yararlıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Dağıtım Öncesi Kısa Kontrol Listesi</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Dağıtım noktası, kişi tahmini, model kodu, gerçek baskı ölçüsü, onaylı tasarım, baskı dahil toplam bedel ve teslim alacak kişi netleşmiş olmalı. Yazım ve logo kontrolünü yaptıktan sonra sipariş onayına geçin.
              </p>
              <p>
                Temel kavramları öğrenmek için <Link href="/rehber/promosyon-kalem-nedir" className="font-semibold text-blue-600 underline">promosyon kalem nedir rehberini</Link>{" "}, ürün seçenekleri için <Link href="/promosyon-kalem" className="font-semibold text-blue-600 underline">promosyon kalem kategorisini</Link>{" "} inceleyebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 md:text-base">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name}>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="mt-2">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-bold text-gray-900">
            İlgili Kategoriler
          </h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/promosyon-kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/promosyon-anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/promosyon-cakmak" className="hover:underline">
              Promosyon Çakmak
            </Link>
            <Link href="/promosyon-termos" className="hover:underline">
              Promosyon Termos
            </Link>
            <Link href="/promosyon-usb-bellek" className="hover:underline">
              Promosyon USB Bellek
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Teklif Al
          </Link>

          <Link
            href="/urunler"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition hover:border-gray-500"
          >
            Ürünleri İncele
          </Link>
        </div>
      </article>
    </div>
  );
}