import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/kurumsal-kalem`;
const IMAGE_PATH = "/guides/kurumsal-kalem.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Kurumsal Kalem: Hediye, İsim Baskısı ve Set Seçimi";
const DESCRIPTION =
  "Kurumsal hediye kalemi seçerken yazım, logo ve isim uygulaması, kutu, set uyumu, alıcı başına bütçe ve teslim kontrolünü değerlendirin.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "kurumsal kalem",
    "kurumsal kalem nedir",
    "logo baskılı kurumsal kalem",
    "promosyon kalem",
    "firma logolu kalem",
    "kurumsal hediye kalem",
    "metal kurumsal kalem",
    "kurumsal kalem modelleri",
    "kurumsal kalem fiyatları",
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
        alt: "Kurumsal Kalem Nedir? 2026 Detaylı Rehber",
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
        name: "Kurumsal Kalem",
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
        "name": "Kurumsal kalem ayrı bir kalem türü müdür?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kurumsal kalem teknik bir mekanizma sınıfı değildir; firma kimliğiyle hediye veya profesyonel kullanım için seçilen kalemi ifade eder."
        }
      },
      {
        "@type": "Question",
        "name": "Kurumsal hediye için mutlaka metal kalem mi seçilmeli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Alıcının kullanım alışkanlığı, yazım konforu, bütçe ve sunum birlikte değerlendirilmelidir."
        }
      },
      {
        "@type": "Question",
        "name": "Logo ile kişiye özel isim birlikte uygulanabilir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uygun model ve baskı alanında mümkün olabilir; yerleşim, isim listesi ve uygulama bedeli sipariş öncesinde teyit edilmelidir."
        }
      },
      {
        "@type": "Question",
        "name": "Kalem setinde neler kontrol edilmeli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parçaların stok ve renk uyumu, kutuya oturması, logo uygulamaları, ambalajın fiyata dahil olması ve teslim süreci kontrol edilmelidir."
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
        / <span>Kurumsal Kalem</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Kurumsal Kalem: Hediye ve Set Seçimi Nasıl Yapılır?
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Kurumsal Kalem Nedir? 2026 Detaylı Rehber"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
              <p>
                Kurumsal kalem seçimi, müşteriye, iş ortağına veya çalışana verilecek hediyenin kullanımını ve sunumunu birlikte planlamaktır. Kalemin marka kimliğine uyması kadar rahat yazması, doğru kişiselleştirilmesi ve alıcıya uygun sunulması da önemlidir.
              </p>
              <p>
                Bu rehber, geniş fuar dağıtımından farklı olarak alıcıya göre hediye hazırlayan ekipler içindir. Model denemesi, logo ve isim yerleşimi, kutu seçimi ve set hazırlığını aynı karar sürecinde ele alır.
              </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Kurumsal Hediye Kaleminde Önce Alıcı ve Kullanım Belirlenir</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalem burada müşteri, iş ortağı veya çalışan için hediye olarak seçilen logo baskılı kalemi ifade eder. Ayrı bir teknik kalem sınıfı değildir; hediye amacı, model ve sunum tercihini değiştirir.
              </p>
              <p>
                Masa başında not alan bir çalışan için hafif ve rahat yazan model öne çıkabilir. İş ortağı ziyaretinde ise kutu, renk ve eşlik eden ürünlerle uyum önem kazanabilir. Her alıcı için ağır veya pahalı kalemin daha uygun olduğunu varsaymayın.
              </p>
              <p>
                Temel kalem türlerini tanımak için <Link href="/rehber/promosyon-kalem-nedir" className="font-semibold text-blue-600 underline">promosyon kalem nedir rehberine</Link>{" "}, fuarda geniş dağıtım planı için <Link href="/rehber/reklam-kalemleri" className="font-semibold text-blue-600 underline">reklam kalemleri rehberine</Link>{" "} bakabilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Metal, Roller ve Kalem Seti Nasıl Karşılaştırılır?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                <Link href="/promosyon-metal-kalem" className="font-semibold text-blue-600 underline">Metal kalem modellerini</Link>{" "} değerlendirirken tutuş, ağırlık, klips ve mekanizma kontrol edilmelidir. Dış görünüm tek başına yazım kalitesini veya kullanım süresini göstermez. Mümkünse numuneyle kısa bir yazım denemesi yapın.
              </p>
              <p>
                <Link href="/promosyon-roller-kalem" className="font-semibold text-blue-600 underline">Roller kalemlerde</Link>{" "} yazım hissi ve mürekkebin kullanılacak kağıtla uyumu değerlendirilmelidir. Gövdenin metal olması ile yazım mekanizmasının roller olması aynı sınıflandırma değildir; modelin teknik açıklamasını kontrol edin.
              </p>
              <p>
                Birden fazla parçalı sunum düşünüyorsanız <Link href="/promosyon-kalem-setleri" className="font-semibold text-blue-600 underline">kalem setlerini</Link>{" "} inceleyin. Kutu ve set içeriğinin ürün fiyatına dahil olup olmadığını, renklerin ve parçaların birlikte temin edilip edilemediğini teyit edin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Logo ve Kişiye Özel İsim Nasıl Planlanır?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Logo ile alıcının adının aynı kalemde bulunması baskı alanını daraltabilir. Firma adını, kişisel ismi ve varsa unvanı gerçek ölçekte birlikte görün. Logonun gövdede hangi yönde yer alacağı ve klipsle ilişkisi onay görselinde anlaşılır olmalı.
              </p>
              <p>
                Kişiye özel isim uygulanacaksa isim listesini son haliyle paylaşın. Türkçe karakterler, büyük-küçük harfler ve isimlerin doğru alıcıyla eşleşmesi üretimden önce kontrol edilmelidir. Farklı isimlerin ek uygulama veya hazırlık bedeli oluşturup oluşturmadığını sorun.
              </p>
              <p>
                Lazer, UV veya tampon uygulamasını seçilen yüzeye göre değerlendirin. Her modelin aynı işlemi desteklediğini varsaymayın; teknik ayrıntılar için <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-blue-600 underline">kalem baskı yöntemlerini</Link>{" "} inceleyebilirsiniz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Kutu ve Tamamlayıcı Ürünlerle Set Uyumu</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kalem kutuya rahat oturmalı, taşıma sırasında korunmalı ve kolay çıkarılmalıdır. Sunumun sade veya çok parçalı olması alıcının kullanımına göre seçilir. Tekli kutu, hediye notu veya farklı alıcılara ayrı paketleme gerekip gerekmediğini önceden belirleyin.
              </p>
              <p>
                Kalem bir <Link href="/promosyon-defter" className="font-semibold text-blue-600 underline">defter</Link>{" "} veya <Link href="/promosyon-ajanda" className="font-semibold text-blue-600 underline">ajanda</Link>{" "} ile sunulacaksa renk, boyut ve kullanım amacı birlikte düşünülmelidir. Parçalara uygulanan logoların ölçüsü ve rengi aynı görünmeyebilir; onayları birlikte kontrol edin.
              </p>
              <p>
                Hazır paket seçenekleri için <Link href="/promosyon-vip-urunler" className="font-semibold text-blue-600 underline">kurumsal hediye setlerini</Link>{" "} inceleyebilirsiniz. Tekli ürünlerden özel paket hazırlamak ile hazır set seçmek farklı stok, ambalaj ve uygulama koşullarına sahip olabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Hediye Başına Bütçe Hangi Kalemleri İçermeli?</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kalem bedeli, logo uygulaması, kişiye özel isim, kutu ve varsa paketleme maliyetini ayrı görün. KDV ve kargonun dahil olup olmadığını netleştirin. Bir hizmet fiyata dahilse toplam hesaba ikinci kez eklemeyin.
              </p>
              <p>
                Sınırlı alıcı grubunda kişiselleştirme ve sunumun toplam payı daha belirgin olabilir. Aynı alıcı adedi ve aynı sunum koşullarında teklifleri karşılaştırın. Bütçe hesabının ayrıntıları için <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir" className="font-semibold text-blue-600 underline">kalem maliyet hesabı rehberine</Link>{" "} geçebilirsiniz.
              </p>
              <p>
                Fiyatı yükseltmek tek başına daha iyi hediye deneyimi sağlamaz. Yazım, doğru isim, sağlam paket ve zamanında teslim gibi ihtiyaçlar karşılanmadan yalnızca görünüşe ek bütçe ayırmayın.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">Onay, Alıcı Eşleşmesi ve Teslim Kontrolü</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Model kodu, gövde rengi, baskı yönü, logo dosyası, isim listesi ve kutu seçimini aynı sipariş kaydında birleştirin. Numune veya tasarım onayında değişiklik olduysa eski dosyanın kullanılmadığını teyit edin.
              </p>
              <p>
                Kişiselleştirilmiş siparişlerde isim, kalem ve paket eşleşmesini kontrol edecek bir liste hazırlayın. Ayrı adreslere gönderim planlanıyorsa adres ve teslim alacak kişi bilgilerini doğru ve yalnızca gerekli kapsamda paylaşın.
              </p>
              <p>
                Hediye tarihi ile kargo çıkış tarihini ayırın. Stok, baskı süreci ve paketlemenin ne zaman tamamlanacağını teyit ederek onay verin. Ürün seçeneklerini <Link href="/promosyon-kalem" className="font-semibold text-blue-600 underline">promosyon kalem kategorisinden</Link>{" "} karşılaştırabilirsiniz.
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
            <Link href="/promosyon-ajanda" className="hover:underline">
              Promosyon Ajanda
            </Link>
            <Link href="/promosyon-anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
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