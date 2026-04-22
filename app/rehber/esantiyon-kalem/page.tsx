import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/esantiyon-kalem`;
const IMAGE_PATH = "/guides/esantiyon-kalem.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Eşantiyon Kalem Nedir? 2026 Detaylı Rehber";
const DESCRIPTION =
  "Eşantiyon kalem nedir, neden tercih edilir ve firmalara ne kazandırır? Baskı, model, kullanım alanları ve fiyat detaylarıyla kapsamlı rehber.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "eşantiyon kalem",
    "eşantiyon kalem nedir",
    "promosyon kalem",
    "logo baskılı kalem",
    "baskılı kalem",
    "eşantiyon kalem fiyatları",
    "kurumsal promosyon kalem",
    "firma logolu kalem",
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
    title: "Eşantiyon Kalem Nedir? 2026 Detaylı Rehber",
    description:
      "Eşantiyon kalemlerin kullanım alanları, avantajları ve fiyat yapısını detaylı inceleyin.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Eşantiyon Kalem Nedir? 2026 Detaylı Rehber",
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
        name: "Eşantiyon Kalem",
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
        name: "Eşantiyon kalem nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eşantiyon kalem, firmaların marka bilinirliğini artırmak için üzerine logo, firma adı veya iletişim bilgisi bastırarak ücretsiz dağıttığı promosyon ürünlerinden biridir.",
        },
      },
      {
        "@type": "Question",
        name: "Eşantiyon kalem neden tercih edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Düşük maliyetli olması, günlük kullanımda sık yer alması ve markayı uzun süre görünür tutması nedeniyle tercih edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Eşantiyon kalemlerde hangi baskılar uygulanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En sık kullanılan baskı yöntemleri tampon baskı, UV baskı ve lazer baskıdır. Ürün modeline ve logo yapısına göre doğru baskı yöntemi seçilir.",
        },
      },
      {
        "@type": "Question",
        name: "Eşantiyon kalem fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fiyatlar kalemin modeli, gövde malzemesi, sipariş adedi, baskı türü, baskı yönü ve renk sayısına göre değişir.",
        },
      },
      {
        "@type": "Question",
        name: "Eşantiyon kalem tek başına yeterli midir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Çoğu zaman evet. Ancak kampanyanın gücünü artırmak için anahtarlık, ajanda, termos veya USB bellek gibi ürünlerle birlikte de kullanılabilir.",
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
        / <span>Eşantiyon Kalem</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Eşantiyon Kalem Nedir? Firmalar Neden Hâlâ Tercih Ediyor?
          </h1>

          <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src={IMAGE_PATH}
              alt="Eşantiyon Kalem Nedir? 2026 Detaylı Rehber"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 md:text-lg">
            <p>
              Eşantiyon kalem, firmaların marka bilinirliğini artırmak amacıyla
              üzerine logo, firma adı, telefon numarası veya slogan bastırarak
              ücretsiz olarak dağıttığı en klasik ama en etkili promosyon
              ürünlerinden biridir. Özellikle düşük maliyetli olması, her
              sektöre uyum sağlaması ve günlük kullanımda sıkça yer alması
              nedeniyle eşantiyon kalemler uzun yıllardır kurumsal tanıtımın
              vazgeçilmez parçalarından biri olmayı sürdürmektedir.
            </p>

            <p>
              Bugün dijital reklamlar çok yaygın olsa da fiziksel promosyon
              ürünlerin etkisi hâlâ çok güçlüdür. Çünkü bir reklam görseli birkaç
              saniye içinde geçip giderken, iyi seçilmiş bir kalem kişinin
              masasının üstünde, çantasında veya ofis çekmecesinde uzun süre
              kalabilir. Bu da markanın tekrar tekrar görünmesini sağlar.
            </p>

            <p>
              Eşantiyon kalemler çoğu zaman tek başına dağıtılmaz. Birçok firma
              kampanyalarını{" "}
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
              gibi ürünlerle destekleyerek daha güçlü bir kurumsal hediye veya
              tanıtım seti oluşturur.
            </p>

            <p>
              Özellikle yeni müşteri kazanımı, fuar standı görünürlüğü, saha
              ziyareti, toplantı sonrası hatırlanabilirlik ve marka temasını
              artırma gibi amaçlar söz konusu olduğunda eşantiyon kalem hâlâ en
              işlevsel promosyon araçlarından biri olarak öne çıkar. Çünkü hem
              dağıtımı kolaydır hem de kullanım süresi yüksektir.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Ne Anlama Gelir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                “Eşantiyon” kelimesi, genellikle ücretsiz dağıtılan tanıtım
                ürünlerini ifade eder. Eşantiyon kalem de bu mantıkla dağıtılan,
                üzerinde marka bilgisi bulunan reklam kalemidir. Amaç doğrudan
                kalem satmak değil, kalem üzerinden markayı görünür hale
                getirmektir.
              </p>

              <p>
                Bu yüzden eşantiyon kalem seçerken sadece maliyete bakmak doğru
                değildir. Kalemin yazım kalitesi, elde bıraktığı his, baskının
                okunaklı olması ve ürünün hedef kitleye uygunluğu da önemlidir.
                Çünkü dağıtılan kalem ne kadar çok kullanılırsa, markanın görünme
                sıklığı da o kadar artar.
              </p>

              <p>
                Özellikle ofis çalışanları, öğrenciler, saha ekipleri, fuar
                ziyaretçileri ve kurumsal müşteriler için kalem hâlâ en pratik
                ve işe yarar hediyelerden biridir. Bu nedenle eşantiyon kalem
                kullanımı birçok sektörde devam etmektedir.
              </p>

              <p>
                Eşantiyon kalem, görünüşte basit bir ürün olsa da doğru seçildiğinde
                firmanın kurumsal yüzünü temsil eden küçük ama etkili bir reklam
                yüzeyine dönüşür. Bu da onu yıllardır geçerliliğini koruyan bir
                tanıtım ürünü haline getirir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Neden Bu Kadar Tercih Ediliyor?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Eşantiyon kalemlerin tercih edilmesinin ilk nedeni maliyet
                avantajıdır. Televizyon, radyo, açık hava veya yüksek bütçeli
                dijital reklamlara kıyasla çok daha düşük bütçeyle çok sayıda
                insana ulaşmak mümkündür. Özellikle toplu alımlarda birim maliyet
                son derece makul seviyelere iner.
              </p>

              <p>
                İkinci önemli neden kullanım sıklığıdır. Kalem, neredeyse her
                yaş grubunda ve her sektörde ihtiyaç duyulan temel bir üründür.
                İnsanlar not alırken, sözleşme imzalarken, toplantıda yazı
                yazarken veya eğitim sürecinde defter kullanırken kaleme ihtiyaç
                duyar. Bu da eşantiyon kalemlerin kısa süreli değil, uzun süreli
                etki yaratmasını sağlar.
              </p>

              <p>
                Üçüncü neden ise marka görünürlüğüdür. Basit görünen bir kalem,
                masada durduğu sürece logo görünmeye devam eder. Bu görünürlük,
                zaman içinde marka hatırlanırlığını güçlendirir. Özellikle yerel
                işletmeler, tedarik firmaları, eğitim kurumları, sağlık
                kuruluşları ve kurumsal hizmet veren şirketler için bu çok değerli
                bir avantajdır.
              </p>

              <p>
                Ayrıca kalem, kullanıcıyı rahatsız etmeyen doğal bir promosyon
                ürünüdür. El ilanı gibi doğrudan satış hissi vermez; daha işlevsel
                ve daha kabul edilebilir bir hediye olarak algılanır. Bu yüzden
                kullanıcı ürünü reddetmek yerine çoğunlukla kullanmaya devam eder.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Nerelerde Kullanılır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Eşantiyon kalemler çok geniş kullanım alanına sahiptir. Fuarlar,
                açılış organizasyonları, mağaza etkinlikleri, seminerler,
                eğitimler, bayi toplantıları ve müşteri ziyaretleri bu ürünlerin
                en sık kullanıldığı alanlardır. Ayrıca resepsiyon masalarında,
                danışma noktalarında ve satış ofislerinde de sıklıkla tercih
                edilir.
              </p>

              <p>
                Bazı firmalar eşantiyon kalemleri doğrudan tanıtım dağıtımı için
                kullanırken, bazıları yeni müşteri kazanma sürecinde küçük ama
                işlevsel bir hatırlatıcı olarak değerlendirir. Özellikle teklif
                dosyaları, kataloglar veya tanıtım broşürleriyle birlikte verilen
                kalemler profesyonel bir sunum etkisi yaratır.
              </p>

              <p>
                Bunun yanında kalemlerin ajanda, bloknot, defter veya kurumsal
                hediye setleriyle birlikte kullanılması da yaygındır. Böylece
                tek bir ürün yerine küçük ama etkili bir promosyon seti elde
                edilir.
              </p>

              <p>
                Eğitim kurumları, muhasebe ofisleri, emlak firmaları, sağlık
                kuruluşları, hukuk büroları, kargo ve lojistik firmaları gibi çok
                farklı alanlarda da eşantiyon kalem kullanımı görülür. Çünkü ürün
                geniş kitleye hitap eden genel kullanım alışkanlığına sahiptir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Modelleri Nelerdir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Eşantiyon kalem deyince akla genellikle ekonomik plastik modeller
                gelir. Çünkü geniş dağıtımlar için en çok tercih edilen grup bu
                kalemlerdir. Ancak tek seçenek bunlar değildir. Metal kalemler,
                soft touch yüzeyli kalemler, dokunmatik kalemler ve çevre dostu
                gövdeli modeller de eşantiyon amaçlı kullanılabilir.
              </p>

              <p>
                Ekonomik plastik kalemler fuarlar ve yüksek adetli kampanyalar
                için idealdir. Metal kalemler ise daha prestijli müşteri
                ziyaretleri, özel toplantılar ve kurumsal hediye sunumlarında
                daha güçlü bir izlenim bırakır. Dokunmatik kalemler ise teknoloji
                odaklı markalar için modern bir seçenek olabilir.
              </p>

              <p>
                Doğru model seçimi tamamen hedef kitleye bağlıdır. Bu yüzden ürün
                seçerken “en ucuz hangisi?” yerine “hangi kalem benim markamı en
                iyi temsil eder?” sorusunu sormak daha doğrudur.
              </p>

              <p>
                Eğer geniş dağıtım planlanıyorsa sade ve dengeli fiyatlı bir ürün
                tercih edilebilir. Ancak daha seçilmiş müşteri kitlesi için daha
                kaliteli gövde yapısına sahip modeller, bırakacağı his açısından
                çok daha etkili olabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalemlerde Hangi Baskılar Uygulanır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Eşantiyon kalemlerde en sık kullanılan baskı yöntemleri tampon
                baskı, UV baskı ve lazer baskıdır. Plastik kalemlerde çoğunlukla
                tampon baskı tercih edilir. Bu yöntem tek renkli logolarda ekonomik
                ve hızlı bir çözümdür.
              </p>

              <p>
                UV baskı ise daha renkli ve daha canlı bir görünüm sunar. Marka
                logosu çok renkliyse veya dikkat çekici bir tasarım hedefleniyorsa
                UV baskı daha uygun olabilir. Metal kalemlerde ise lazer baskı
                öne çıkar. Çünkü yüzey üzerine işlenen yazı veya logo daha kalıcı
                ve premium bir görünüm sağlar.
              </p>

              <p>
                Baskı seçimi yalnızca görünümle ilgili değildir; maliyet üzerinde
                de doğrudan etkilidir. Bu nedenle uygun ürün ile doğru baskı
                tekniğini eşleştirmek gerekir. Daha detaylı maliyet yapısı için{" "}
                <Link
                  href="/rehber/kalem-baski-fiyatlari"
                  className="text-blue-600 underline"
                >
                  kalem baskı fiyatları
                </Link>{" "}
                ve{" "}
                <Link
                  href="/rehber/baskili-kalem-fiyatlari"
                  className="text-blue-600 underline"
                >
                  baskılı kalem fiyatları
                </Link>{" "}
                rehberleri de incelenebilir.
              </p>

              <p>
                Özellikle logo okunurluğu burada çok önemlidir. Kalem küçük bir
                yüzey sunduğu için baskı alanı dikkatli planlanmalı, gereksiz
                karmaşa oluşturan tasarımlardan kaçınılmalıdır. Sade ama net
                baskılar çoğu zaman daha başarılı sonuç verir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Fiyatları Nasıl Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Eşantiyon kalem fiyatları sabit değildir. Fiyatı belirleyen temel
                unsurlar arasında kalemin modeli, gövde malzemesi, sipariş adedi,
                baskı türü, baskı yönü ve renk sayısı yer alır. Aynı kalem modeli
                bile baskısız, tek yön baskılı veya çift yön baskılı olduğunda
                farklı maliyetlere ulaşabilir.
              </p>

              <p>
                En büyük fiyat avantajı genellikle toplu siparişlerde ortaya
                çıkar. Çünkü baskı hazırlığı ve üretim planlaması gibi sabit
                maliyetler daha fazla ürüne bölünür. Bu yüzden 300 adet ile 3000
                adet arasında ciddi birim maliyet farkı oluşabilir.
              </p>

              <p>
                Eğer doğrudan fiyat odaklı araştırma yapıyorsanız{" "}
                <Link
                  href="/rehber/promosyon-kalem-fiyatlari"
                  className="text-blue-600 underline"
                >
                  promosyon kalem fiyatları
                </Link>{" "}
                rehberi de size yardımcı olabilir.
              </p>

              <p>
                Fiyatı değerlendirirken yalnızca ucuzluk değil, ürünün ne kadar
                süre kullanılacağı ve markaya nasıl bir algı kazandıracağı da
                düşünülmelidir. Çünkü bazen biraz daha kaliteli bir ürün çok daha
                uzun süreli bir reklam etkisi yaratabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Seçerken Nelere Dikkat Edilmeli?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                İlk dikkat edilmesi gereken konu hedef kitleye uygunluk olmalıdır.
                Her müşteriye aynı ürün uygun değildir. Geniş dağıtım yapılacaksa
                ekonomik ve sade bir model daha mantıklıdır. Ancak VIP müşteri
                ziyareti veya kurumsal sunum yapılacaksa daha kaliteli gövdeye
                sahip bir kalem seçmek daha doğru olabilir.
              </p>

              <p>
                İkinci olarak baskı alanı değerlendirilmelidir. Logo okunaklı
                şekilde görünmeli ve kalem yüzeyinde kaybolmamalıdır. Çok küçük
                gövdeli modellerde detaylı logolar istenen sonucu vermeyebilir.
                Bu nedenle logo yapısına göre model seçimi yapmak önemlidir.
              </p>

              <p>
                Üçüncü olarak kalemin gerçekten kullanılabilir olması gerekir.
                Sırf ucuz diye kötü yazan, çabuk bozulan veya elde rahatsız his
                veren bir ürün seçmek markaya fayda yerine zarar verebilir.
                Reklam etkisi ancak ürün memnuniyet yarattığında daha güçlü olur.
              </p>

              <p>
                Ayrıca mümkünse ürünün yazım performansı ve baskı örneği sipariş
                öncesinde kontrol edilmelidir. Böylece hem ürün kalitesinden hem
                de baskı görünümünden emin olarak daha sağlıklı karar verilebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Eşantiyon Kalem Tek Başına Yeterli mi?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Çoğu zaman evet; çünkü kalem tek başına bile güçlü bir promosyon
                ürünüdür. Ancak kampanya hedefinize göre farklı ürünlerle birlikte
                kullanıldığında etkisi daha da artabilir. Örneğin kalem ile
                birlikte anahtarlık, ajanda veya termos vermek daha yüksek algı
                oluşturur.
              </p>

              <p>
                Bazı firmalar yeni müşteri ziyaretlerinde kalem ve bloknot
                kombinasyonu yaparken, bazıları fuarlarda kalem ve anahtarlık
                dağıtmayı tercih eder. Teknoloji veya kurumsal hediye odaklı
                çalışmalarda ise kalem ile birlikte USB bellek veya powerbank
                gibi ürünler de değerlendirilebilir.
              </p>

              <p>
                Buradaki temel amaç, markayı akılda tutacak işlevsel ürünleri bir
                araya getirmektir. Bu sayede hem kullanım sıklığı artar hem de
                marka daha profesyonel algılanır.
              </p>

              <p>
                Tekli dağıtımlar hızlı ve ekonomik olabilir; set halinde sunumlar
                ise daha kurumsal ve daha etkileyici bir izlenim bırakabilir.
                Kampanyanın hedefi hangisine uygunsa ona göre planlama yapılmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Eşantiyon kalem, düşük maliyetle yüksek görünürlük sağlayan en
                güçlü promosyon ürünlerinden biridir. Günlük kullanım sıklığı,
                geniş hedef kitleye hitap etmesi ve farklı sektörlere rahatça
                uyum sağlaması nedeniyle firmalar tarafından hâlâ yoğun şekilde
                tercih edilmektedir.
              </p>

              <p>
                Doğru model, doğru baskı ve doğru adet planlaması ile eşantiyon
                kalemler markanız için çok verimli bir reklam aracına dönüşebilir.
                Özellikle uzun süre kullanılabilen ve kaliteli algı veren
                modeller seçildiğinde tek bir dağıtım bile güçlü bir kurumsal
                iz bırakabilir.
              </p>

              <p>
                Eğer markanız için uygun kalem modellerini incelemek istiyorsanız{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfasını ziyaret edebilir, farklı ürünleri karşılaştırarak
                ihtiyacınıza en uygun seçeneği değerlendirebilirsiniz.
              </p>

              <p>
                Sonuç olarak eşantiyon kalem, eski ama etkisini kaybetmeyen bir
                tanıtım aracıdır. Doğru kullanıldığında markanızın görünürlüğünü
                artırır, profesyonel algısını destekler ve çok geniş bir kitleye
                ekonomik şekilde ulaşmanızı sağlar.
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
            <Link href="/kategori/anahtarlik" className="hover:underline">
              Promosyon Anahtarlık
            </Link>
            <Link href="/kategori/cakmak" className="hover:underline">
              Promosyon Çakmak
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