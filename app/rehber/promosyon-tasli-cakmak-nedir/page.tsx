import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-tasli-cakmak-nedir`;
const IMAGE_PATH = "/guides/promosyon-tasli-cakmak-nedir.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const TITLE = "Promosyon Taşlı Çakmak Nedir? Avantajları Nelerdir?";
const DESCRIPTION =
  "Promosyon taşlı çakmak nedir, neden tercih edilir, nerelerde kullanılır ve firmalara ne kazandırır? Logo baskılı taşlı çakmak modelleri hakkında detaylı rehber.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "promosyon taşlı çakmak nedir",
    "promosyon taşlı çakmak",
    "logo baskılı taşlı çakmak",
    "taşlı çakmak promosyon",
    "baskılı taşlı çakmak",
    "promosyon çakmak çeşitleri",
    "promosyon çakmak rehberi",
    "kurumsal taşlı çakmak",
  ],
  alternates: {
    canonical: PAGE_URL,
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
        alt: "Promosyon Taşlı Çakmak Nedir?",
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
        name: "Promosyon Taşlı Çakmak Nedir?",
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
        name: "Promosyon taşlı çakmak nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon taşlı çakmak, firmaların marka tanıtımı amacıyla üzerine logo veya firma bilgisi basarak dağıttığı ekonomik çakmak modellerinden biridir.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon taşlı çakmak neden tercih edilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Düşük maliyetli olması, toplu dağıtıma uygun bulunması ve günlük kullanımda görünürlük sağlaması nedeniyle sık tercih edilir.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon taşlı çakmak nerelerde kullanılır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fuar, etkinlik, restoran, kafe, gece kulübü, kampanya ve bayi dağıtımlarında kullanılabilir.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon taşlı çakmak hangi firmalar için uygundur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Restoranlar, kafeler, eğlence mekanları, organizasyon firmaları, yerel işletmeler ve geniş kitleye düşük maliyetle ulaşmak isteyen markalar için uygundur.",
        },
      },
      {
        "@type": "Question",
        name: "Promosyon taşlı çakmak alırken nelere dikkat edilmelidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ürün kalitesi, baskı alanı, baskı netliği, sipariş adedi ve dağıtım amacı önceden değerlendirilmelidir.",
        },
      },
    ],
  };

  return (
    <main className="bg-white">
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

      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-red-600">
                  Ana Sayfa
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/rehber" className="transition-colors hover:text-red-600">
                  Rehber
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">Promosyon Taşlı Çakmak Nedir?</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <header>
            <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              Rehber
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Promosyon Taşlı Çakmak Nedir? Avantajları Nelerdir?
            </h1>

            <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <Image
                src={IMAGE_PATH}
                alt="Promosyon Taşlı Çakmak Nedir? Avantajları Nelerdir?"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
              Promosyon taşlı çakmak, firmaların marka görünürlüğünü artırmak için
              kullandığı en ekonomik promosyon ürünlerinden biridir. Üzerine logo,
              slogan, firma adı veya iletişim bilgisi basılarak dağıtılan bu ürünler,
              özellikle yüksek adetli kampanyalarda çok sık tercih edilir. Düşük
              maliyetli olması ve günlük kullanımda yer bulması, taşlı çakmakları
              tanıtım açısından güçlü hale getirir.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
              Özellikle fuarlar, kampanyalar, restoranlar, kafeler, gece kulüpleri
              ve saha dağıtımları gibi alanlarda promosyon taşlı çakmak oldukça
              yaygın kullanılır. Küçük boyutlu olması sayesinde dağıtımı kolaydır.
              Kullanıcı ürünü cebinde, aracında veya günlük hayatında taşıyabildiği
              için marka tekrar tekrar görünür kalabilir.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
              Bu rehberde promosyon taşlı çakmak nedir, neden tercih edilir, hangi
              işletmeler için uygundur, nerelerde kullanılır, baskı ve kalite
              seçiminde nelere dikkat edilmelidir gibi en çok merak edilen konuları
              detaylı şekilde inceleyeceğiz.
            </p>
          </header>

          <div
            className="
              mt-10 max-w-none
              text-[17px] leading-8 text-gray-800
              [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-gray-900
              [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900
              [&_p]:mb-5 [&_p]:text-[17px] [&_p]:leading-8 [&_p]:text-gray-700
              [&_strong]:font-semibold [&_strong]:text-gray-900
              [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-gray-700
              [&_a]:font-semibold [&_a]:text-red-600 hover:[&_a]:text-red-700
            "
          >
            <section>
              <h2>Promosyon taşlı çakmak nedir?</h2>
              <p>
                Promosyon taşlı çakmak, klasik çakmak mekanizmasına sahip, ateşleme
                için taş sistemi kullanılan ve üzerine baskı uygulanabilen promosyon
                ürünüdür. Bu ürünler özellikle maliyet avantajı nedeniyle geniş
                kitleye yönelik tanıtım çalışmalarında öne çıkar.
              </p>
              <p>
                Taşlı çakmaklar yıllardır promosyon sektöründe kullanılan temel
                ürünlerden biridir. Çünkü hem tanıdık hem işlevsel hem de dağıtıma
                uygundur. Kullanıcı ürünü günlük hayatında kullandığında, ürün
                üzerindeki marka da görünür kalmaya devam eder.
              </p>
              <p>
                Özellikle düşük bütçeyle çok sayıda kişiye ulaşmak isteyen firmalar
                için promosyon taşlı çakmak, klasik ama hâlâ etkili bir reklam
                aracı olmayı sürdürmektedir.
              </p>
            </section>

            <section>
              <h2>Promosyon taşlı çakmak neden tercih edilir?</h2>
              <p>
                En önemli neden maliyet avantajıdır. Özellikle yüksek adetli
                siparişlerde promosyon taşlı çakmak, firmalara uygun bütçeyle geniş
                dağıtım imkanı sağlar. Bu da ürünü kampanya odaklı tanıtım
                çalışmalarında güçlü hale getirir.
              </p>
              <p>
                Bir diğer neden ise dağıtım kolaylığıdır. Ürün hafif, küçük ve
                taşınabilir olduğu için fuar, açılış, saha etkinliği veya müşteri
                temas noktalarında rahatlıkla verilebilir.
              </p>
              <p>
                Ayrıca kullanıcının cebinde veya çantasında yer bulabilmesi, marka
                görünürlüğünün kısa süreli değil daha uzun süreli olmasına katkı
                sağlar.
              </p>
            </section>

            <section>
              <h2>Promosyon taşlı çakmak nerelerde kullanılır?</h2>
              <p>
                Promosyon taşlı çakmak; restoranlar, kafeler, eğlence mekanları,
                gece kulüpleri, beach işletmeleri, fuarlar, kampanyalar ve bayi
                dağıtımları gibi pek çok alanda kullanılabilir.
              </p>
              <p>
                Özellikle müşteri teması yüksek olan işletmeler için bu ürün,
                görünürlük sağlayan düşük maliyetli bir reklam aracıdır.
              </p>
              <p>
                Yerel işletmeler, organizasyon firmaları, etkinlik düzenleyen
                markalar ve toplu dağıtım yapmak isteyen şirketler için de son
                derece uygun bir promosyon ürünüdür.
              </p>
            </section>

            <section>
              <h2>Promosyon taşlı çakmak avantajları nelerdir?</h2>
              <ul>
                <li>Ekonomik fiyatlıdır.</li>
                <li>Toplu dağıtım için uygundur.</li>
                <li>Günlük kullanım sayesinde marka görünürlüğü sağlar.</li>
                <li>Küçük boyutu sayesinde kolay taşınır.</li>
                <li>Logo baskısına uygundur.</li>
                <li>Yüksek adetli siparişlerde maliyet avantajı sunar.</li>
                <li>Geniş hedef kitleye ulaşmayı kolaylaştırır.</li>
              </ul>
              <p>
                Özellikle “az bütçeyle çok kişiye ulaşmak” isteyen firmalar için
                promosyon taşlı çakmak mantıklı bir tercihtir.
              </p>
            </section>

            <section>
              <h2>Promosyon taşlı çakmak alırken nelere dikkat edilmeli?</h2>
              <p>
                Ürünün kalitesi, baskı alanı, baskı netliği ve sipariş adedi dikkat
                edilmesi gereken başlıca konulardır. Çok düşük kaliteli ürünler
                kısa sürede olumsuz algı oluşturabilir.
              </p>
              <p>
                Bunun yanında baskının okunaklı ve dengeli görünmesi de çok
                önemlidir. Çünkü promosyon ürünün asıl reklam gücü, üzerindeki
                marka görünürlüğünden gelir.
              </p>
              <p>
                Ayrıca ürünün kimlere verileceği de düşünülmelidir. Geniş kitleye
                toplu dağıtım yapılacaksa maliyet odaklı seçim mantıklı olabilir;
                daha seçilmiş kitlelerde ise baskı ve ürün kalitesi biraz daha öne
                alınmalıdır.
              </p>
            </section>

            <section>
              <h2>Promosyon taşlı çakmak ile diğer promosyon ürünler arasında nasıl bir fark vardır?</h2>
              <p>
                Promosyon taşlı çakmak, düşük maliyetli ve kolay dağıtılabilir ürün
                olmasıyla öne çıkar. Örneğin{" "}
                <Link href="/kategori/kalem">promosyon kalem</Link> ofis ve eğitim
                alanlarında daha yoğun kullanılırken, taşlı çakmak bazı sektörlerde
                daha hızlı görünürlük sağlayabilir.
              </p>
              <p>
                <Link href="/kategori/anahtarlik">Promosyon anahtarlık</Link>{" "}
                sürekli taşınma avantajı sunarken, taşlı çakmak da günlük kullanım
                alışkanlığı sayesinde benzer şekilde tekrar eden görünürlük
                oluşturabilir. Bu nedenle ürün seçimi tamamen hedef kitleye ve
                kullanım senaryosuna göre yapılmalıdır.
              </p>
            </section>

            <section>
              <h2>Sık Sorulan Sorular</h2>

              <h3>Promosyon taşlı çakmak nedir?</h3>
              <p>
                Üzerine logo basılarak dağıtılan, taş mekanizmalı ekonomik
                promosyon çakmak modelidir.
              </p>

              <h3>Kimler için uygundur?</h3>
              <p>
                Geniş kitleye ulaşmak isteyen restoranlar, kafeler, organizasyon
                firmaları ve kampanya yapan markalar için uygundur.
              </p>

              <h3>Minimum sipariş kaç adet olur?</h3>
              <p>
                Modele göre değişmekle birlikte genellikle 100 ile 300 adet arası
                minimum sipariş görülebilir.
              </p>

              <h3>Promosyon taşlı çakmak neden ekonomik kabul edilir?</h3>
              <p>
                Üretim maliyetinin uygun olması ve yüksek adetli siparişlerde birim
                fiyatın daha da düşebilmesi nedeniyle ekonomik promosyon ürünleri
                arasında yer alır.
              </p>
            </section>
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-bold text-gray-900">İlgili Kategoriler</h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/kategori/cakmak" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Çakmak
              </Link>
              <Link href="/kategori/kalem" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Kalem
              </Link>
              <Link href="/kategori/anahtarlik" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Anahtarlık
              </Link>
              <Link href="/kategori/termos" className="font-semibold text-gray-800 hover:text-red-600">
                Promosyon Termos
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Teklif Al
            </Link>
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-500"
            >
              Ürünleri İncele
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}