import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/reklam-kalemleri`;
const IMAGE_PATH = "/guides/reklam-kalemleri.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Reklam Kalemleri Nedir? 2026 Detaylı Rehber";
const DESCRIPTION =
  "Reklam kalemleri nedir, neden kullanılır ve firmalara ne kazandırır? Logo baskı, model seçimi ve kurumsal kullanım alanlarıyla detaylı rehber.";

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
    title: "Reklam Kalemleri Nedir? 2026 Detaylı Rehber",
    description:
      "Reklam kalemleri hakkında kullanım alanları, baskı türleri ve seçim kriterlerini detaylı inceleyin.",
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
        name: "Reklam Kalemleri",
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
        name: "Reklam kalemleri nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reklam kalemleri, firmaların marka tanıtımı amacıyla üzerine logo, iletişim bilgisi veya slogan bastırdığı tanıtım odaklı kalemlerdir.",
        },
      },
      {
        "@type": "Question",
        name: "Reklam kalemleri neden tercih edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Düşük maliyetli olmaları, günlük kullanımda sıkça yer almaları ve markayı uzun süre görünür tutmaları nedeniyle tercih edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Reklam kalemlerinde hangi baskılar uygulanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tek renkli sade logolarda tampon baskı, daha renkli tasarımlarda UV baskı ve metal ürünlerde lazer baskı sık kullanılır.",
        },
      },
      {
        "@type": "Question",
        name: "Reklam kalemleri hangi alanlarda kullanılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fuarlar, satış ofisleri, müşteri ziyaretleri, seminerler, eğitim kurumları, bayi toplantıları ve kurumsal promosyon dağıtımlarında sık kullanılır.",
        },
      },
      {
        "@type": "Question",
        name: "Reklam kalemleri fiyatları neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün modeli, baskı türü, baskı yönü, sipariş adedi ve ürün kalitesi reklam kalemleri fiyatlarını doğrudan etkiler.",
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
        / <span>Reklam Kalemleri</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Reklam Kalemleri Nedir? Markalar İçin Neden Hâlâ Güçlüdür?
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
              Reklam kalemleri, firmaların marka tanıtımı amacıyla üzerine logo,
              iletişim bilgisi veya slogan bastırdığı tanıtım odaklı kalemlerdir.
              Bu ürünler yıllardır reklam ve promosyon sektörünün en güçlü
              araçları arasında yer alır. Çünkü hem günlük hayatta sürekli
              kullanılır hem de çok düşük bütçelerle geniş bir kitleye
              ulaştırılabilir.
            </p>

            <p>
              Dijital dünyada reklam kanalları sürekli artsa da fiziksel promosyon
              ürünlerin gücü azalmamıştır. Aksine, işlevsel bir ürünün doğrudan
              kullanıcının eline ulaşması marka ile kurulan bağı daha somut hale
              getirir. Reklam kalemleri de bu yüzden hâlâ en çok tercih edilen
              promosyon ürünlerinden biridir.
            </p>

            <p>
              Birçok firma reklam kalemlerini tek başına dağıtmak yerine{" "}
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
              gibi ürünlerle destekleyerek daha geniş bir promosyon etkisi
              oluşturur.
            </p>

            <p>
              Reklam kalemleri, hem düşük bütçeli tanıtımlarda hem de daha düzenli
              kurumsal promosyon çalışmalarında etkili sonuç verir. Ürünün
              işlevselliği ve kolay dağıtımı, onu birçok marka için vazgeçilmez
              hale getirir.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemleri Ne İşe Yarar?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemlerinin temel amacı markayı görünür kılmaktır. Bir
                kalem gün içinde defalarca kullanılabildiği için marka logosu da
                tekrar tekrar görülür. Bu, bilinirlik ve hatırlanırlık açısından
                büyük avantaj sağlar.
              </p>

              <p>
                Ayrıca reklam kalemleri sadece yeni müşteri kazanmak için değil,
                mevcut müşterilerle ilişkiyi sıcak tutmak için de kullanılabilir.
                Küçük ama kullanışlı bir hediye, markanın daha profesyonel ve
                ilgili görünmesini sağlar.
              </p>

              <p>
                Özellikle satış ekipleri, fuar katılımları, showroom
                organizasyonları, bayi toplantıları ve kurumsal ofis kullanımı
                gibi alanlarda reklam kalemleri çok işlevsel bir rol oynar.
              </p>

              <p>
                Kalem gibi sürekli kullanılan bir ürünün tanıtım amacıyla
                değerlendirilmesi, reklamı günlük hayatın doğal bir parçası haline
                getirir. Bu da onu klasik tanıtım materyallerinden ayırır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemleri Neden Hâlâ Etkili?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemlerinin yıllardır güçlü kalmasının en önemli nedeni,
                reklamı kullanıcının günlük yaşamına sokmasıdır. Bir internet
                reklamı gözden kaybolabilir, bir sosyal medya içeriği birkaç
                saniye sonra unutulabilir; fakat masa üzerinde duran bir kalem
                çok daha kalıcı bir görünürlük sağlar.
              </p>

              <p>
                İkinci neden bütçe verimliliğidir. Reklam kalemleri toplu
                üretildiğinde düşük birim maliyetle çok sayıda kişiye
                ulaştırılabilir. Bu özellikle küçük ve orta ölçekli işletmeler
                için büyük avantaj sağlar.
              </p>

              <p>
                Üçüncü neden ise çok yönlü kullanım alanıdır. Hangi sektörde
                faaliyet gösteriyor olursanız olun, reklam kalemi rahatlıkla
                kullanabilirsiniz. Eğitim, sağlık, turizm, finans, perakende,
                teknoloji, üretim ve kurumsal hizmet sektörlerinin tamamında bu
                ürünlere ihtiyaç duyulur.
              </p>

              <p>
                Ayrıca kullanıcı açısından bakıldığında kalem, rahatsız edici bir
                promosyon ürünü değildir. Faydalı olduğu için çoğu zaman atılmaz,
                saklanır ve kullanılmaya devam eder. Bu da markaya daha uzun ömürlü
                görünürlük kazandırır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemleri Hangi Alanlarda Kullanılır?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemleri en sık fuarlarda kullanılır. Çünkü ziyaretçilere
                dağıtılması kolaydır, taşınması pratiktir ve maliyeti düşüktür.
                Bunun yanında danışma masaları, toplantı odaları, satış ofisleri,
                mağaza açılışları ve müşteri temsil süreçlerinde de etkili şekilde
                değerlendirilir.
              </p>

              <p>
                Bazı firmalar yeni müşteri paketi hazırlarken reklam kalemini
                katalog, broşür veya kartvizit ile birlikte sunar. Bazıları ise
                bunu ajanda veya not defteriyle birleştirir. Böylece sıradan bir
                promosyon ürünü yerine daha güçlü ve daha profesyonel bir sunum
                yapılmış olur.
              </p>

              <p>
                Ayrıca eğitim kurumları ve seminer organizasyonlarında reklam
                kalemleri neredeyse standart tanıtım ürünleri arasında yer alır.
                Çünkü doğrudan kullanım alanı olan bir ürün oldukları için israf
                hissi yaratmazlar.
              </p>

              <p>
                Kurumsal ofislerde masa üstünde bulundurulan reklam kalemleri de
                sürekli görünürlük sağlar. Bu da ürünün yalnızca dağıtım amaçlı
                değil, kurum içi görünürlük için de kullanılabileceğini gösterir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemleri Hangi Modellerde Olur?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemleri yalnızca ekonomik plastik modellerden ibaret
                değildir. Evet, en yaygın kullanılan grup plastik kalemlerdir;
                ancak metal kalemler, soft touch yüzeyli ürünler, dokunmatik
                kalemler ve geri dönüştürülmüş malzemeden üretilen çevre dostu
                modeller de bu kategoriye girer.
              </p>

              <p>
                Eğer amaç geniş çaplı dağıtım ise plastik reklam kalemleri daha
                mantıklıdır. Eğer amaç kurumsal etkiyi artırmak, özel müşteriye
                daha güçlü bir izlenim bırakmak veya marka değerini daha yukarıda
                göstermekse metal veya daha premium modeller daha uygun olabilir.
              </p>

              <p>
                Bu noktada seçim yapılırken bütçe kadar marka pozisyonlaması da
                dikkate alınmalıdır. Her zaman en pahalı ürün en iyi tercih
                değildir; ama her zaman en ucuz ürün de doğru seçim olmayabilir.
              </p>

              <p>
                Hedef kitleye göre farklı model seçmek, reklam kaleminin etkisini
                doğrudan değiştirir. Çünkü ürünün kalitesi markanın algısını da
                yansıtır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemlerinde Baskı Neden Önemlidir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemlerinin etkisi yalnızca kalemin kendisinden gelmez.
                Asıl farkı yaratan şey, üzerine yapılan baskının kalitesidir.
                Baskı okunaksız, silik veya kötü konumlandırılmışsa ürünün reklam
                gücü ciddi şekilde düşer.
              </p>

              <p>
                Bu nedenle logo yerleşimi, yazı okunurluğu ve baskı tekniği doğru
                seçilmelidir. Tek renkli sade logolarda tampon baskı ekonomik bir
                çözüm sunar. Daha renkli ve canlı tasarımlarda UV baskı daha iyi
                görünebilir. Metal gövdelerde ise lazer baskı daha profesyonel bir
                algı yaratır.
              </p>

              <p>
                Eğer baskı maliyeti ve teknik detaylar konusunda daha fazla bilgi
                istiyorsanız{" "}
                <Link
                  href="/rehber/kalem-baski-fiyatlari"
                  className="text-blue-600 underline"
                >
                  kalem baskı fiyatları
                </Link>
                ,{" "}
                <Link
                  href="/rehber/logo-baskili-kalem"
                  className="text-blue-600 underline"
                >
                  logo baskılı kalem
                </Link>{" "}
                ve{" "}
                <Link
                  href="/rehber/promosyon-kalem-fiyatlari"
                  className="text-blue-600 underline"
                >
                  promosyon kalem fiyatları
                </Link>{" "}
                rehberleri de incelenebilir.
              </p>

              <p>
                Baskı, markanın kalem üzerinde nasıl algılanacağını belirler.
                Bu yüzden yalnızca maliyet değil, görünüm ve okunurluk da dikkate
                alınmalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemleri Fiyatları Neye Göre Değişir?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemleri fiyatları ürün türüne göre değişir. Plastik
                kalemler daha ekonomik olurken metal ve özel tasarım kalemler
                daha yüksek maliyetli olabilir. Buna ek olarak baskı türü, baskı
                yönü ve sipariş adedi de fiyat üzerinde doğrudan etkilidir.
              </p>

              <p>
                Özellikle yüksek adetli siparişlerde birim maliyet düşer. Çünkü
                hazırlık ve üretim giderleri daha fazla ürüne yayılır. Bu yüzden
                kampanyayı kısa dönemli değil, daha planlı şekilde düşünmek çoğu
                zaman maliyet avantajı sağlar.
              </p>

              <p>
                Fiyat araştırması yapan firmalar için ürün kalitesi ile reklam
                etkisini birlikte değerlendirmek önemlidir. Çok ucuz ama kötü
                yazan bir kalem, marka algısını zayıflatabilir. Biraz daha iyi
                bir ürün ise çok daha kalıcı bir etki bırakabilir.
              </p>

              <p>
                Bu nedenle fiyatı yalnızca satın alma maliyeti olarak değil, elde
                edilecek reklam etkisiyle birlikte değerlendirmek daha doğru olur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Reklam Kalemleri Seçerken Nelere Dikkat Edilmeli?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                İlk olarak hedef kitlenin doğru tanımlanması gerekir. Öğrencilere,
                saha ziyaretçilerine, fuar katılımcılarına veya kurumsal yönetici
                grubuna aynı ürün verilmez. Her hedef kitle için ürün dili
                farklıdır.
              </p>

              <p>
                İkinci olarak ürünün gerçekten kullanılabilir olması gerekir.
                Yazımı kötü olan veya çabuk bozulan bir kalem, kullanıcıda olumsuz
                deneyim yaratabilir. Bu da markaya zarar verebilir. Reklam
                kaleminin etkili olması için önce ürün olarak işlevini yerine
                getirmesi gerekir.
              </p>

              <p>
                Üçüncü olarak baskı alanı ve logo uyumu düşünülmelidir. Her logo
                her kalemde aynı verimle görünmez. Çok detaylı logolarda küçük
                alanlı kalemler sorun oluşturabilir. Bu nedenle hem görsel uyum
                hem okunurluk dikkate alınmalıdır.
              </p>

              <p>
                Son olarak ürünün dağıtım amacı netleştirilmelidir. Geniş kitleye
                verilecek ürün ile VIP müşteriye sunulacak ürün aynı olmamalıdır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Sonuç
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 md:text-base">
              <p>
                Reklam kalemleri, düşük bütçeyle yüksek görünürlük sağlayan en
                güçlü promosyon ürünleri arasında yer almaya devam ediyor. Günlük
                kullanım sıklığı, farklı hedef kitlelere uyum sağlaması ve marka
                bilinirliğini uzun süre desteklemesi bu ürünleri özel kılıyor.
              </p>

              <p>
                Doğru model, doğru baskı ve doğru dağıtım stratejisi ile reklam
                kalemleri yalnızca bir ofis malzemesi olmaktan çıkar ve etkili bir
                tanıtım aracına dönüşür. Özellikle kurumsal görünümünü güçlendirmek
                isteyen firmalar için iyi planlanmış bir kalem çalışması oldukça
                verimli sonuç verebilir.
              </p>

              <p>
                Ürün seçeneklerini görmek için{" "}
                <Link href="/kategori/kalem" className="text-blue-600 underline">
                  promosyon kalem modelleri
                </Link>{" "}
                sayfasını inceleyebilir ve markanıza uygun alternatifleri
                değerlendirebilirsiniz.
              </p>

              <p>
                Kısacası reklam kalemleri, eski ama etkisini kaybetmeyen, kullanım
                değeri yüksek ve marka görünürlüğünü doğal biçimde artıran güçlü
                bir tanıtım aracıdır.
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