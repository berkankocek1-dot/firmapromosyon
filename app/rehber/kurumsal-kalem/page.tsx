import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/kurumsal-kalem`;
const IMAGE_PATH = "/guides/kurumsal-kalem.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Kurumsal Kalem Nedir? 2026 Detaylı Rehber";
const DESCRIPTION =
  "Kurumsal kalem nedir, neden tercih edilir ve firmalara ne kazandırır? Logo baskı, model seçimi, kullanım alanları ve kurumsal hediye avantajlarıyla detaylı rehber.";

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
    title: "Kurumsal Kalem Nedir? 2026 Detaylı Rehber",
    description:
      "Kurumsal kalem seçimi, baskı türleri, kullanım alanları ve marka etkisini detaylı inceleyin.",
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
        name: "Kurumsal Kalem",
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
        name: "Kurumsal kalem nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kurumsal kalem, bir firmanın marka kimliğini temsil eden, üzerine logo veya firma bilgileri uygulanabilen ve profesyonel kullanım için tercih edilen promosyon kalem türüdür.",
        },
      },
      {
        "@type": "Question",
        name: "Kurumsal kalem neden tercih edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Profesyonel görünüm sağlaması, uzun süreli görünürlük sunması ve müşteri ilişkilerinde güçlü bir marka teması oluşturması nedeniyle tercih edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Kurumsal kalemlerde hangi baskılar kullanılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kurumsal kalemlerde en sık tampon baskı, UV baskı ve lazer baskı kullanılır. Ürünün malzemesine ve hedeflenen görünüme göre baskı tekniği seçilir.",
        },
      },
      {
        "@type": "Question",
        name: "Kurumsal kalem fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün segmenti, gövde malzemesi, baskı tekniği, sipariş adedi ve kutu gibi ek sunum detayları fiyatı doğrudan etkiler.",
        },
      },
      {
        "@type": "Question",
        name: "Kurumsal kalem hangi alanlarda kullanılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toplantı odaları, satış ofisleri, müşteri ziyaretleri, bayi buluşmaları, kurumsal hediye setleri ve iş ortaklığı sunumlarında sıkça kullanılır.",
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
        / <span>Kurumsal Kalem</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Kurumsal Kalem Nedir? Firmalar İçin Neden Önemlidir?
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
              Kurumsal kalem, bir firmanın marka kimliğini temsil eden, üzerine
              logo, firma adı veya iletişim bilgileri uygulanabilen ve genellikle
              profesyonel kullanım amacıyla tercih edilen promosyon kalem
              türüdür. Standart tanıtım kalemlerinden farklı olarak kurumsal
              kalemler, sadece dağıtım amacı taşımaz; aynı zamanda markanın
              kalitesini, ciddiyetini ve kurumsal duruşunu da yansıtmayı hedefler.
            </p>

            <p>
              Günümüzde birçok firma müşteri ilişkilerini güçlendirmek, bayi
              ağında daha profesyonel görünmek ve marka hatırlanırlığını artırmak
              için kurumsal kalem kullanımına önem vermektedir. Özellikle
              toplantılarda, müşteri ziyaretlerinde, sözleşme imza süreçlerinde
              ve kurumsal hediye setlerinde kalem hâlâ çok güçlü bir araçtır.
            </p>

            <p>
              Kurumsal kalemler çoğu zaman tek başına değil,{" "}
              <Link href="/kategori/ajanda" className="text-blue-600 underline">
                promosyon ajanda
              </Link>
              ,{" "}
              <Link href="/kategori/anahtarlik" className="text-blue-600 underline">
                promosyon anahtarlık
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
              <Link href="/kategori/cakmak" className="text-blue-600 underline">
                promosyon çakmak
              </Link>{" "}
              gibi ürünlerle birlikte değerlendirilerek daha güçlü bir kurumsal
              promosyon seti oluşturur.
            </p>

            <p>
              İyi seçilmiş bir kurumsal kalem, yalnızca işlevsel bir araç değil;
              aynı zamanda firmanın detaylara verdiği önemi ve profesyonel
              yaklaşımını yansıtan küçük ama etkili bir marka temas noktasıdır.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalem Ne Anlama Gelir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalem kavramı, yalnızca üzerine baskı yapılmış bir kalemi
                ifade etmez. Aynı zamanda markanın konumlandırmasına uygun, daha
                düzenli, daha profesyonel ve çoğu zaman daha kaliteli bir ürün
                seçimini ifade eder. Yani burada amaç sadece bir kalem vermek
                değil, marka algısını güçlendiren bir temas noktası oluşturmaktır.
              </p>

              <p>
                Örneğin fuar dağıtımı için seçilen ekonomik bir plastik kalem ile
                yönetici seviyesinde müşterilere verilecek metal bir kalem aynı
                kategoride değerlendirilmez. İkisi de kalemdir ama oluşturdukları
                etki farklıdır. Kurumsal kalemler daha çok ikinci gruba yakın
                düşünülmelidir.
              </p>

              <p>
                Bu nedenle kurumsal kalem seçimi yapılırken fiyat kadar kalite,
                tutuş hissi, yazım performansı, baskı görünümü ve markaya uyum da
                dikkate alınmalıdır.
              </p>

              <p>
                Kısacası kurumsal kalem, görünüşte küçük ama temsil değeri yüksek
                bir üründür. Doğru seçildiğinde markanın profesyonel yüzünü
                destekleyen güçlü bir araç haline gelir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalem Neden Tercih Edilir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalemlerin tercih edilmesinin ilk nedeni profesyonel
                görünüm sağlamasıdır. Özellikle müşteri ile yüz yüze temasın yoğun
                olduğu sektörlerde detaylar önemlidir. Masada duran bir kalem,
                teklif dosyasına eklenen küçük bir hediye veya toplantıda sunulan
                bir not alma aracı bile marka algısını etkileyebilir.
              </p>

              <p>
                İkinci neden uzun süreli görünürlüktür. İyi seçilmiş bir kalem
                tek seferlik kullanılmaz; kişi tarafından uzun süre boyunca
                taşınabilir ve kullanılabilir. Bu da logonun tekrar tekrar
                görünmesi anlamına gelir.
              </p>

              <p>
                Üçüncü neden ise işlevsellik ve maliyet dengesidir. Kurumsal
                kalemler, diğer reklam araçlarına göre daha düşük maliyetle uzun
                süreli etki bırakır. Bu nedenle hem küçük işletmeler hem de büyük
                firmalar için mantıklı bir yatırım olabilir.
              </p>

              <p>
                Ayrıca kalem gibi kullanışlı ürünler, alıcı tarafından çoğu zaman
                saklanır ve aktif olarak kullanılır. Bu da markanın yalnızca
                görülmesini değil, günlük iş akışı içinde yer edinmesini sağlar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalem Nerelerde Kullanılır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalemler özellikle toplantı odalarında, resepsiyon
                alanlarında, satış ofislerinde, bayi buluşmalarında ve müşteri
                ziyaretlerinde sıkça kullanılır. Ayrıca yeni müşteri dosyaları
                hazırlanırken katalog, kartvizit ve ajanda ile birlikte sunulması
                da yaygındır.
              </p>

              <p>
                Eğitim kurumları, hukuk büroları, finans şirketleri, sağlık
                kuruluşları, üretim firmaları ve danışmanlık şirketleri kurumsal
                kalem kullanımına en çok ihtiyaç duyan alanlar arasında yer alır.
                Çünkü bu sektörlerde güven, düzen ve profesyonellik algısı çok
                önemlidir.
              </p>

              <p>
                Bunun dışında kurumsal kalemler özel hediye kutularında da
                değerlendirilebilir. Özellikle yıl sonu hediyeleri, iş ortaklığı
                sunumları veya lansman süreçlerinde iyi seçilmiş bir kalem çok
                şık bir tamamlayıcı olabilir.
              </p>

              <p>
                Aynı zamanda ofis içinde personel kullanımında da tercih
                edilebilir. Böylece kurum içi kullanım ile dış müşteri teması
                arasında tutarlı bir kurumsal görünüm sağlanmış olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalem Modelleri Nelerdir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalem kategorisinde en çok öne çıkan modeller metal
                kalemler, roller kalemler, soft touch yüzeyli kalemler ve şık
                kutulu kalem setleridir. Bunlar hem elde daha kaliteli his verir
                hem de baskı sonrasında daha prestijli görünür.
              </p>

              <p>
                Bununla birlikte her kurumsal kalem mutlaka yüksek segment olmak
                zorunda değildir. Bazı plastik gövdeli ama sade tasarımlı ve iyi
                yazan modeller de kurumsal kullanım için uygun olabilir. Burada
                önemli olan ürünün ucuz görünmemesi, markayı doğru temsil etmesi
                ve hedef kitleye hitap etmesidir.
              </p>

              <p>
                Eğer daha ekonomik ama yine de düzenli bir görünüm isteyen bir
                firma iseniz sade çizgili kaliteli plastik modeller tercih
                edilebilir. Daha premium bir algı hedefleniyorsa metal gövdeli ve
                lazer baskıya uygun ürünler daha doğru seçim olur.
              </p>

              <p>
                Doğru model seçimi tamamen kullanım amacına bağlıdır. Bu yüzden
                yalnızca fiyat değil, ürünün bırakacağı his de dikkate alınmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalemlerde Hangi Baskılar Kullanılır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalemlerde en çok kullanılan baskı teknikleri tampon
                baskı, UV baskı ve lazer baskıdır. Plastik gövdeli modellerde
                tampon baskı ekonomik bir çözüm sunarken, metal kalemlerde lazer
                baskı daha prestijli bir görünüm oluşturur.
              </p>

              <p>
                UV baskı ise renkli logoların daha canlı görünmesini sağlar. Eğer
                markanızın logosunda birden fazla renk varsa veya daha dikkat
                çekici bir baskı hedefleniyorsa UV baskı değerlendirilebilir.
                Ancak burada hem maliyet hem de kalemin yüzey yapısı dikkate
                alınmalıdır.
              </p>

              <p>
                Daha detaylı maliyet değerlendirmesi için{" "}
                <Link href="/rehber/logo-baskili-kalem" className="text-blue-600 underline">
                  logo baskılı kalem
                </Link>
                ,{" "}
                <Link href="/rehber/baskili-kalem-fiyatlari" className="text-blue-600 underline">
                  baskılı kalem fiyatları
                </Link>{" "}
                ve{" "}
                <Link href="/rehber/kalem-baski-fiyatlari" className="text-blue-600 underline">
                  kalem baskı fiyatları
                </Link>{" "}
                rehberleri de incelenebilir.
              </p>

              <p>
                Burada amaç yalnızca logoyu uygulamak değil, markayı estetik ve
                okunaklı biçimde sunmaktır. Bu yüzden baskı tekniği ile ürün
                yüzeyi uyumlu olmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalem Seçerken Nelere Dikkat Edilmeli?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                İlk dikkat edilmesi gereken konu hedef kitledir. Kalem kimlere
                verilecek? Bayilere mi, son kullanıcılara mı, yöneticilere mi,
                yoksa etkinlik katılımcılarına mı? Bu sorunun cevabı ürün
                segmentini belirler.
              </p>

              <p>
                İkinci olarak yazım kalitesi kontrol edilmelidir. Şık görünen ama
                kötü yazan bir kalem, kullanıcıda olumsuz deneyim yaratabilir.
                Kurumsal bir üründe görünüm kadar işlev de önemlidir.
              </p>

              <p>
                Üçüncü olarak logo uygulaması düşünülmelidir. Baskı alanı,
                logonun boyutu ve okunurluğu ürün seçimini etkiler. Çok küçük
                veya çok detaylı bir alan, markanın istediği netliği vermeyebilir.
              </p>

              <p>
                Son olarak ürünün genel hissi önemlidir. Tutarken kaygan mı,
                hafif mi, ağır mı, dengeli mi? Bunların hepsi küçük ama marka
                algısı üzerinde etkili ayrıntılardır.
              </p>

              <p>
                Ayrıca mümkünse ürün örneği veya baskı simülasyonu görülmeden karar
                verilmemelidir. Böylece seçim daha güvenli ve daha doğru yapılır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Kurumsal Kalem Fiyatları Neye Göre Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalem fiyatları; ürün segmentine, gövde malzemesine,
                baskı tekniğine, adet miktarına ve ek sunum detaylarına göre
                değişir. Kutulu ürünler, metal gövdeler veya özel kaplama
                seçenekleri fiyatı artırabilir.
              </p>

              <p>
                Ancak burada önemli olan sadece fiyatın düşük olması değildir.
                Doğru ürünü seçmek, uzun vadede daha iyi marka etkisi yaratır.
                Bazen biraz daha yüksek bütçeli ama daha kaliteli bir ürün,
                firmanıza çok daha güçlü dönüş sağlayabilir.
              </p>

              <p>
                Genel fiyat yapısını daha iyi anlamak için{" "}
                <Link href="/rehber/promosyon-kalem-fiyatlari" className="text-blue-600 underline">
                  promosyon kalem fiyatları
                </Link>{" "}
                rehberi de incelenebilir.
              </p>

              <p>
                Bu nedenle fiyat değerlendirmesi yapılırken yalnızca satın alma
                maliyeti değil, ürünün bırakacağı algı ve kullanım ömrü de
                hesaba katılmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Kurumsal kalem, markanın ciddiyetini ve profesyonel duruşunu
                destekleyen en etkili promosyon ürünlerinden biridir. Doğru model
                ve doğru baskı ile hem işlevsel hem de prestijli bir marka teması
                oluşturmak mümkündür.
              </p>

              <p>
                Özellikle müşteri ilişkilerini güçlendirmek, toplantılarda daha
                düzenli görünmek ve kurumsal hediye çalışmalarında etkili sonuç
                almak isteyen firmalar için kalem hâlâ çok güçlü bir seçenektir.
              </p>

              <p>
                Farklı ürünleri incelemek için{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfasını ziyaret ederek markanıza uygun alternatifleri
                değerlendirebilirsiniz.
              </p>

              <p>
                Sonuç olarak kurumsal kalem, küçük görünen ama marka algısı
                açısından büyük rol oynayan bir promosyon ürünüdür. Doğru
                kullanıldığında firmanızın profesyonel etkisini ciddi biçimde
                güçlendirebilir.
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
            <Link href="/kategori/termos" className="hover:underline">
              Promosyon Termos
            </Link>
            <Link href="/kategori/usb-bellek" className="hover:underline">
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
    </main>
  );
}