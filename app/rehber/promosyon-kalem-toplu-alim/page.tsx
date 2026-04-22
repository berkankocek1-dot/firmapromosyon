import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-toplu-alim`;
const IMAGE_PATH = "/guides/promosyon-kalem-toplu-alim.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Kalem Toplu Alım Rehberi 2026";
const DESCRIPTION =
  "Promosyon kalem toplu alırken nelere dikkat edilmeli? Adet, baskı, model seçimi, fiyat avantajı ve toplu sipariş stratejileriyle detaylı rehber.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon kalem toplu alım",
    "toplu promosyon kalem",
    "promosyon kalem toplu sipariş",
    "promosyon kalem toptan alım",
    "logo baskılı kalem toplu alım",
    "promosyon kalem adetli sipariş",
    "promosyon kalem fiyat avantajı",
    "promosyon kalem baskı toplu sipariş",
    "kurumsal promosyon kalem alımı",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Promosyon Kalem Toplu Alım Rehberi 2026",
    description:
      "Promosyon kalem toplu sipariş süreci, fiyat avantajları ve doğru ürün seçimini detaylı inceleyin.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Toplu Alım Rehberi 2026",
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
    dateModified: "2026-04-01",
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
        name: "Promosyon Kalem Toplu Alım",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Promosyon kalem toplu alım neden avantajlıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toplu alımda baskı hazırlığı, üretim planlaması ve işçilik gibi sabit maliyetler daha fazla ürüne bölündüğü için birim maliyet düşer.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu promosyon kalem alırken nelere dikkat edilmeli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kullanım alanı, sipariş adedi, ürün kalitesi, baskı türü, baskı yönü ve stok planlaması toplu alım öncesinde mutlaka netleştirilmelidir.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu siparişte hangi kalem modelleri daha çok tercih edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Geniş dağıtımlar için ekonomik plastik kalemler, daha prestijli müşteri grupları için ise metal veya premium kalem modelleri tercih edilebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Toplu alımda baskı seçimi neden önemlidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Baskı seçimi toplam maliyeti ve ürünün marka üzerindeki etkisini doğrudan etkiler. Tek renkli tampon baskı genellikle daha ekonomik, UV ve lazer baskı ise daha dikkat çekici veya premium sonuç verir.",
        },
      },
      {
        "@type": "Question",
        name: "Ucuz ürün toplu siparişte her zaman doğru seçim midir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır. Çok ucuz ama kötü yazan veya kalitesiz görünen bir kalem marka algısına zarar verebilir. Bu yüzden fiyat ve kalite dengesi birlikte değerlendirilmelidir.",
        },
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
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
        / <span>Promosyon Kalem Toplu Alım</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Kalem Toplu Alım Rehberi
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Promosyon Kalem Toplu Alım Rehberi 2026"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
            <p>
              Promosyon kalem toplu alımı, hem maliyet avantajı hem de kurumsal
              tanıtım gücü açısından firmalar için en mantıklı promosyon
              yatırımlarından biridir. Özellikle düzenli dağıtım yapan, fuarlara
              katılan, bayi ağına sahip olan veya müşteri ziyaretlerinde sık sık
              promosyon ürün kullanan işletmeler için toplu kalem alımı ciddi bir
              avantaj sağlar.
            </p>

            <p>
              Çünkü promosyon kalemler düşük maliyetli, taşınması kolay ve günlük
              kullanım ihtiyacı çok yüksek olan ürünlerdir. Toplu alım yapıldığında
              birim maliyetin düşmesi, firmaların daha geniş kitleye daha uygun
              bütçeyle ulaşmasına yardımcı olur.
            </p>

            <p>
              Birçok işletme promosyon kalemi tek başına değil,{" "}
              <Link href="/kategori/anahtarlik" className="text-blue-600 underline">
                promosyon anahtarlık
              </Link>
              ,{" "}
              <Link href="/kategori/cakmak" className="text-blue-600 underline">
                promosyon çakmak
              </Link>
              ,{" "}
              <Link href="/kategori/termos" className="text-blue-600 underline">
                promosyon termos
              </Link>
              ,{" "}
              <Link href="/kategori/usb-bellek" className="text-blue-600 underline">
                promosyon USB bellek
              </Link>{" "}
              ve{" "}
              <Link href="/kategori/ajanda" className="text-blue-600 underline">
                promosyon ajanda
              </Link>{" "}
              gibi ürünlerle destekleyerek kampanya etkisini daha da artırır.
            </p>

            <p>
              Toplu sipariş yaklaşımı, yalnızca fiyat avantajı sağlamakla kalmaz;
              aynı zamanda dönemsel ihtiyaçların daha planlı şekilde yönetilmesini
              ve promosyon çalışmalarının daha istikrarlı hale gelmesini de sağlar.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Promosyon Kalem Toplu Almak Neden Avantajlıdır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Toplu alımın en büyük avantajı birim maliyetin düşmesidir.
                Baskı hazırlığı, üretim planlaması ve işçilik gibi sabit maliyetler
                daha fazla ürüne yayıldığı için ürün başına düşen maliyet azalır.
                Bu da özellikle sık promosyon kullanan firmalar için önemli
                tasarruf sağlar.
              </p>

              <p>
                İkinci avantaj stok planlamasıdır. Firma tek tek küçük siparişler
                vermek yerine dönemlik veya yıllık ihtiyacını planlayarak toplu
                sipariş verdiğinde hem zamandan tasarruf eder hem de daha düzenli
                maliyet yönetimi yapabilir.
              </p>

              <p>
                Üçüncü avantaj ise kampanya esnekliğidir. Elinizde hazır stok
                bulunduğunda fuar, toplantı, açılış veya saha ziyareti gibi
                durumlarda hızlı hareket etmek mümkün olur. Son dakika promosyon
                ihtiyacında yeniden ürün aramak zorunda kalmazsınız.
              </p>

              <p>
                Ayrıca tek seferde daha bilinçli seçim yapma imkanı doğar. Böylece
                hem ürün standardı korunur hem de firmanın promosyon dili daha
                tutarlı hale gelir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Promosyon Kalem Alırken Nelere Dikkat Edilmeli?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                İlk dikkat edilmesi gereken konu hedef kullanım alanıdır. Kalemler
                fuarda mı dağıtılacak, müşteri hediyesi olarak mı verilecek, bayi
                toplantısında mı kullanılacak, yoksa ofis içinde sürekli mi yer
                alacak? Bu soru ürün segmentini belirler.
              </p>

              <p>
                İkinci olarak adet planlaması doğru yapılmalıdır. Gereğinden az
                sipariş vermek birim maliyeti yükseltir, gereğinden fazla sipariş
                vermek ise stokta uzun süre bekleyen ürün riskini doğurur. Bu
                nedenle kullanım sıklığına göre mantıklı bir adet belirlemek
                gerekir.
              </p>

              <p>
                Üçüncü olarak ürün kalitesi mutlaka göz önünde bulundurulmalıdır.
                Çok ucuz ama kötü yazan bir kalem, markanın değerini düşürebilir.
                Toplu alımda maliyet önemli olsa da marka algısını koruyacak
                seviyede bir ürün seçmek gerekir.
              </p>

              <p>
                Bunun yanında baskı alanı, logo görünürlüğü ve ürünün hedef kitleye
                vereceği his de değerlendirilmelidir. Çünkü dağıtım kadar temsil
                etkisi de önem taşır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Alımda Hangi Kalem Modelleri Tercih Edilir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                En çok tercih edilen modeller ekonomik plastik kalemlerdir.
                Bunun nedeni geniş dağıtımlar için maliyet avantajı sağlamalarıdır.
                Özellikle binli adetlerde yapılan siparişlerde plastik modeller
                oldukça verimli sonuç verir.
              </p>

              <p>
                Bununla birlikte her toplu sipariş sadece ekonomik ürünlerden
                oluşmaz. Kurumsal hediye setleri, yönetici sunumları veya daha
                prestijli müşteri grupları için metal kalemler de toplu olarak
                tercih edilebilir. Burada önemli olan hedef kitle ile ürünün
                uyumlu olmasıdır.
              </p>

              <p>
                Çevre dostu ürünler, dokunmatik kalemler veya soft touch yüzeyli
                kalemler de bazı sektörlerde öne çıkabilir. Özellikle teknoloji
                veya sürdürülebilirlik odaklı firmalar için bu tür modeller daha
                anlamlı olabilir.
              </p>

              <p>
                Toplu alımda doğru model seçimi, yalnızca bugünkü maliyeti değil
                ürünün yaratacağı uzun vadeli reklam etkisini de belirler.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Baskı Seçimi Toplu Siparişte Neden Önemlidir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Toplu promosyon kalem alımında baskı seçimi toplam maliyeti
                doğrudan etkiler. Tek renkli tampon baskı genellikle en uygun
                çözümdür ve yüksek adetli siparişlerde çok avantajlı olabilir.
              </p>

              <p>
                Daha renkli ve dikkat çekici tasarımlar için UV baskı tercih
                edilebilir. Metal kalemlerde ise lazer baskı daha premium görünür.
                Ancak baskı türü seçilirken sadece estetik değil, bütçe ve kullanım
                amacı da dikkate alınmalıdır.
              </p>

              <p>
                Daha detaylı bilgi için{" "}
                <Link href="/rehber/kalem-baski-fiyatlari" className="text-blue-600 underline">
                  kalem baskı fiyatları
                </Link>
                ,{" "}
                <Link href="/rehber/baskili-kalem-fiyatlari" className="text-blue-600 underline">
                  baskılı kalem fiyatları
                </Link>{" "}
                ve{" "}
                <Link href="/rehber/logo-baskili-kalem" className="text-blue-600 underline">
                  logo baskılı kalem
                </Link>{" "}
                rehberleri de incelenebilir.
              </p>

              <p>
                Toplu siparişte baskı tekniği yanlış seçilirse maliyet artabilir
                ya da görsel sonuç beklentiyi karşılamayabilir. Bu yüzden ürün ve
                baskı dengesini doğru kurmak gerekir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Alımda Fiyatlar Nasıl Düşer?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Toplu alımda maliyetlerin düşmesinin ana nedeni, sabit giderlerin
                daha fazla ürüne bölünmesidir. Klişe hazırlığı, üretim planı,
                işçilik düzeni ve sevkiyat organizasyonu gibi maliyetler adet
                yükseldikçe ürün başına daha düşük seviyeye iner.
              </p>

              <p>
                Bu yüzden 300 adet sipariş ile 3000 adet sipariş arasında yalnızca
                toplam fiyat değil, birim fiyat açısından da büyük fark oluşur.
                Düzenli promosyon kullanan firmalar için bu fark ciddi bir tasarruf
                anlamına gelir.
              </p>

              <p>
                Eğer daha genel fiyat yapısını öğrenmek istiyorsanız{" "}
                <Link href="/rehber/promosyon-kalem-fiyatlari" className="text-blue-600 underline">
                  promosyon kalem fiyatları
                </Link>{" "}
                rehberi de faydalı olacaktır.
              </p>

              <p>
                Aynı zamanda toplu siparişlerde tedarik süreci daha düzenli
                yönetildiği için zaman maliyeti de düşer. Bu da dolaylı bir avantaj
                sağlar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Siparişte En Çok Yapılan Hatalar
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                İlk hata yalnızca en ucuz ürüne yönelmektir. Çok düşük maliyetli
                ama kötü performans veren bir kalem, dağıtıldığında marka
                algısını zedeleyebilir. Bu nedenle fiyat kadar kalite dengesi de
                korunmalıdır.
              </p>

              <p>
                İkinci hata ihtiyacın altında sipariş vermektir. Küçük küçük sipariş
                vermek kısa vadede kolay gibi görünse de toplamda daha pahalıya
                gelebilir. Toplu sipariş planlaması daha avantajlıdır.
              </p>

              <p>
                Üçüncü hata baskı detaylarını baştan netleştirmemektir. Tek yön mü
                çift yön mü, tek renk mi çok renk mi, logo alanı uygun mu gibi
                sorular önceden belirlenmezse teklif süreci karışabilir.
              </p>

              <p>
                Dördüncü hata ise yalnızca bugünkü ihtiyacı düşünmektir. Gelecek
                dönem kullanımı hesaba katılmazsa sonradan aynı ürün için daha
                maliyetli ek siparişler gerekebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Siparişlerde Stok Planlaması Nasıl Yapılmalı?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Toplu kalem alımında yalnızca bugünkü ihtiyacı düşünmek yeterli
                değildir. Önümüzdeki birkaç ay içinde yapılacak etkinlikler,
                fuarlar, saha ziyaretleri, bayi toplantıları ve müşteri
                görüşmeleri de hesaba katılmalıdır. Böylece hem tekrar sipariş
                verme ihtiyacı azalır hem de daha ekonomik fiyat seviyeleri
                korunabilir.
              </p>

              <p>
                Bazı firmalar çok düşük stokla ilerlemeyi tercih eder; ancak bu
                durum ani ihtiyaçlarda zaman baskısı yaratabilir. Özellikle baskılı
                ürünlerde üretim süresi, onay süreci ve sevkiyat zamanı da
                düşünüldüğünde kontrollü stok planlaması daha güvenli bir
                yaklaşımdır.
              </p>

              <p>
                Bu nedenle toplu alım yaparken yalnızca “şu an kaç adet lazım”
                sorusuna değil, “önümüzdeki dönemde ne kadar kullanım olur” sorusuna
                da cevap vermek gerekir. Akıllı stok yönetimi, promosyon bütçesini
                çok daha verimli hale getirir.
              </p>

              <p>
                Özellikle sezonluk kampanyalar, fuar tarihleri ve dağıtım sıklığı
                önceden düşünülerek yapılan stok planlaması, gereksiz ek maliyetleri
                azaltır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Alımda Ucuz Ürün Her Zaman Doğru Seçim mi?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kısa cevap: Hayır. Çünkü promosyon kalem yalnızca dağıtılan bir
                ürün değil, aynı zamanda markayı temsil eden bir araçtır. Eğer
                ürün çok ucuz görünüyor, kötü yazıyor, elde rahatsız his bırakıyor
                veya kısa sürede bozuluyorsa kullanıcıda olumsuz iz bırakabilir.
              </p>

              <p>
                Bu durum özellikle kurumsal müşteri ilişkilerinde ters etki
                yaratabilir. Marka bilinirliği oluşturmak isterken marka değeri
                zarar görebilir. Bu yüzden toplu alım yaparken fiyat ile kalite
                arasında mantıklı bir denge kurulmalıdır.
              </p>

              <p>
                Geniş dağıtımlar için ekonomik modeller mantıklıdır; ancak yine de
                temel kullanım kalitesini koruyan ürünler seçilmelidir. Biraz daha
                iyi yazan, daha sağlam ve daha estetik görünen kalemler uzun vadede
                daha yüksek reklam verimi sağlayabilir.
              </p>

              <p>
                Yani doğru soru “en ucuz hangisi?” değil, “bütçeye uygun ama marka
                değerini koruyan en doğru ürün hangisi?” olmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Toplu Sipariş Öncesi Teklif Alırken Hangi Bilgiler Net Olmalı?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Sağlıklı teklif alabilmek için ürün tipi, sipariş adedi, baskı
                türü, baskı yönü, logo renk sayısı ve teslim beklentisi en baştan
                net olmalıdır. Bu bilgiler olmadan alınan teklifler çoğu zaman
                karşılaştırılabilir olmaz.
              </p>

              <p>
                Örneğin bir firma sadece “kalem fiyatı istiyorum” dediğinde gelen
                teklif ile “1000 adet, tek renk baskılı plastik kalem fiyatı
                istiyorum” dediğinde gelen teklif aynı doğrulukta olmayacaktır.
                Ne kadar net bilgi verilirse o kadar doğru maliyet hesabı çıkar.
              </p>

              <p>
                Ayrıca logonun vektörel dosya olarak hazır olması da süreci
                kolaylaştırır. Böylece baskı uygunluğu daha hızlı değerlendirilir
                ve deneme süreci kısalır. Toplu alımlarda net brief vermek hem
                zaman hem maliyet açısından ciddi avantaj sağlar.
              </p>

              <p>
                Teslim süresi beklentisi, baskı örneği ihtiyacı ve varsa ürün rengi
                tercihleri de baştan belirtilirse süreç çok daha düzenli ilerler.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Promosyon kalem toplu alımı, maliyet avantajı ve marka görünürlüğü
                açısından son derece güçlü bir yatırımdır. Doğru ürün, doğru adet
                ve doğru baskı seçimi ile firmalar uzun süreli ve verimli bir
                promosyon çalışması yürütebilir.
              </p>

              <p>
                Özellikle fuar, etkinlik, müşteri ziyareti ve bayi ağında düzenli
                promosyon kullanan işletmeler için toplu kalem alımı hem bütçe
                hem operasyon açısından avantaj sağlar. Üstelik doğru planlama ile
                yalnızca düşük fiyat değil, daha güçlü bir marka etkisi de elde
                edilebilir.
              </p>

              <p>
                Ürünleri incelemek için{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfasını ziyaret ederek markanıza uygun seçenekleri
                değerlendirebilirsiniz.
              </p>

              <p>
                Sonuç olarak toplu alım, sadece daha fazla ürün almak değil; daha
                akıllı, daha planlı ve daha verimli bir promosyon stratejisi
                kurmak anlamına gelir.
              </p>
            </div>

            <div className="mt-10 rounded-xl bg-gray-100 p-6">
              <p className="font-semibold text-gray-900">
                Hemen teklif almak için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-bold text-gray-900">
            İlgili Kategoriler
          </h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/kategori/kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/kategori/ajanda" className="hover:underline">
              Promosyon Ajanda
            </Link>
            <Link href="/kategori/anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/kategori/cakmak" className="hover:underline">
              Promosyon Çakmak
            </Link>
            <Link href="/kategori/termos" className="hover:underline">
              Promosyon Termos
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
    </main>
  );
}