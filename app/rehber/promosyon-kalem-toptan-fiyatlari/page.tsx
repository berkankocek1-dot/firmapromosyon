import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-toptan-fiyatlari`;
const IMAGE_PATH = "/guides/promosyon-kalem-toptan-fiyatlari.jpg";
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;

export const metadata: Metadata = {
  title: "Promosyon Kalem Toptan Fiyatları 2026",
  description:
    "Promosyon kalem toptan fiyatları 2026 yılında ne kadar? 100, 500, 1000 adet siparişlerde fiyatlar nasıl değişir detaylı öğrenin.",
  keywords: [
    "promosyon kalem toptan fiyatları",
    "promosyon kalem fiyatları 2026",
    "toptan promosyon kalem",
    "100 adet promosyon kalem fiyatı",
    "500 adet promosyon kalem fiyatı",
    "1000 adet promosyon kalem fiyatı",
    "logo baskılı kalem fiyatları",
    "kurumsal promosyon kalem",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Promosyon Kalem Toptan Fiyatları 2026",
    description:
      "Toptan promosyon kalem fiyatları, baskı maliyetleri ve adet bazlı fiyat rehberi.",
    url: PAGE_URL,
    type: "article",
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Toptan Fiyatları 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem Toptan Fiyatları 2026",
    description:
      "100, 500 ve 1000 adet siparişlerde promosyon kalem fiyatlarının nasıl değiştiğini öğrenin.",
    images: [IMAGE_URL],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Kalem Toptan Fiyatları 2026",
    description:
      "Promosyon kalem toptan fiyatları 2026 yılında ne kadar? 100, 500 ve 1000 adet siparişlerde fiyatların nasıl değiştiğini anlatan detaylı rehber.",
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    image: [IMAGE_URL],
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
        name: "Promosyon Kalem Toptan Fiyatları 2026",
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
        name: "Promosyon kalem toptan fiyatları en çok neye göre değişir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Promosyon kalem toptan fiyatları en çok sipariş adedi, kalem modeli, baskı türü, baskı yönü ve ürün segmentine göre değişir. Adet yükseldikçe birim maliyet genellikle düşer.",
        },
      },
      {
        "@type": "Question",
        name: "1000 adet promosyon kalem siparişi daha avantajlı mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, çoğu durumda 1000 adet ve üzeri siparişlerde birim fiyat daha avantajlı olur. Çünkü üretim ve baskı hazırlık maliyetleri daha fazla ürüne yayılır.",
        },
      },
      {
        "@type": "Question",
        name: "Tampon baskı mı UV baskı mı daha uygun fiyatlıdır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genellikle tampon baskı daha uygun maliyetlidir. UV baskı ise daha canlı ve renkli baskılar sunduğu için maliyet açısından daha yukarıda olabilir.",
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
        / <span>Promosyon Kalem Toptan Fiyatları 2026</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          Rehber
        </div>

        <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
          Promosyon Kalem Toptan Fiyatları 2026
        </h1>

        <div className="relative mt-6 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <Image
            src={IMAGE_PATH}
            alt="Promosyon Kalem Toptan Fiyatları 2026"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          Promosyon kalem toptan fiyatları, sipariş adedi, kalem modeli,
          baskı türü ve üretim kalitesine göre değişiklik gösterir. Özellikle
          yüksek adetli siparişlerde birim fiyatın düşmesi, promosyon kalemleri
          en avantajlı reklam ürünlerinden biri haline getirir. Bu nedenle
          firmalar, pazarlama bütçelerini optimize etmek için promosyon kalem
          fiyatlarını doğru analiz etmek zorundadır.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-700">
          Eğer siz de firmanız için toplu kalem siparişi vermeyi planlıyorsanız,
          fiyatların nasıl oluştuğunu bilmek büyük avantaj sağlar. Bu rehberde
          100, 500 ve 1000 adet promosyon kalem fiyatlarının nasıl değiştiğini,
          baskı türlerinin maliyete etkisini ve en uygun fiyatı nasıl
          alabileceğinizi detaylı şekilde öğrenebilirsiniz.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">
              Promosyon Kalem Toptan Fiyatları Neye Göre Belirlenir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Promosyon kalem fiyatlarını belirleyen en önemli faktörler;
                kalemin üretim maliyeti ve baskı maliyetidir. Plastik kalemler
                daha ekonomik olurken, metal kalemler daha yüksek fiyatlıdır.
                Bunun üzerine baskı türü ve sipariş adedi eklendiğinde toplam
                maliyet ortaya çıkar.
              </p>

              <p>
                Ayrıca üretici firmanın verdiği iskonto oranları da fiyatı
                doğrudan etkiler. Toptan alımlarda genellikle daha avantajlı
                alım koşulları oluşur ve bu da toplam maliyeti aşağı çeker.
                Ancak gerçek fiyatı belirleyen şey yalnızca ürünün çıplak
                maliyeti değil, baskı ve sipariş detayıyla oluşan toplam
                yapıdır.
              </p>

              <p>
                Bu nedenle sağlıklı fiyat karşılaştırması yapmak isteyen firmalar,
                teklif alırken kalem modeli, adet, baskı yönü ve baskı türünü
                birlikte değerlendirmelidir. Aksi halde görünen fiyat ile gerçek
                maliyet arasında fark oluşabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              100 Adet Promosyon Kalem Fiyatı
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                100 adet gibi düşük siparişlerde fiyatlar genellikle daha yüksek
                olur. Çünkü üretim ve baskı hazırlık maliyetleri az ürüne
                bölünür. Bu yüzden birim fiyat, yüksek adetli siparişlere göre
                daha yukarıda kalabilir.
              </p>

              <p>
                Düşük adetli alımlar, özellikle deneme siparişleri, küçük
                organizasyonlar veya butik dağıtımlar için tercih edilebilir.
                Ancak birim maliyet açısından bakıldığında en avantajlı seviye
                genellikle bu değildir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              500 Adet Promosyon Kalem Fiyatı
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                500 adet siparişlerde fiyatlar daha dengeli hale gelir. Bu
                seviyede hem üretici hem de baskı maliyetleri daha verimli
                dağılır ve birim fiyat daha avantajlı bir noktaya yaklaşır.
              </p>

              <p>
                Birçok firma için 500 adetlik siparişler, hem bütçeyi korumak
                hem de yeterli stok oluşturmak açısından mantıklı bir ara
                seviyedir. Özellikle fuar, etkinlik ve kampanya dönemleri için
                sık tercih edilen adetlerden biridir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              1000 Adet Promosyon Kalem Fiyatı
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                1000 adet ve üzeri siparişlerde en avantajlı fiyatlar elde edilir.
                Büyük siparişlerde birim maliyet ciddi şekilde düşer ve firmalar
                için daha verimli bir alım noktası oluşur.
              </p>

              <p>
                Bu seviyedeki siparişler, geniş çaplı dağıtım yapacak firmalar
                için oldukça uygundur. Özellikle kurumsal tanıtım, bayi ağı,
                etkinlik serileri veya yoğun müşteri teması olan sektörlerde
                toplu alım çok daha mantıklı sonuç verir.
              </p>

              <p>
                Bu yüzden promosyon kalem alırken mümkün olduğunca toplu sipariş
                vermek çoğu zaman daha avantajlıdır. Elbette burada ürün kalitesi
                ve baskı detaylarının da birlikte değerlendirilmesi gerekir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Baskı Türüne Göre Fiyat Farkı
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Tampon baskı genellikle en uygun fiyatlı seçeneklerden biridir.
                Özellikle plastik kalemlerde sade ve tek renk logolar için
                ekonomik bir çözüm sunar. UV baskı ise daha canlı, daha renkli
                ve daha dikkat çekici sonuçlar verdiği için maliyet açısından
                daha yukarıda olabilir.
              </p>

              <p>
                Lazer baskı ise metal kalemlerde premium bir görünüm sağlar.
                Kurumsal hediye veya prestij odaklı dağıtımlarda öne çıkar.
                Bu nedenle baskı seçimi yalnızca maliyet değil, marka algısı
                açısından da önemlidir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              En Uygun Promosyon Kalem Nasıl Seçilir?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                En uygun fiyatlı kalemi seçmek için sadece maliyete değil, hedef
                kitlenize de odaklanmalısınız. Eğer geniş kitleye dağıtım
                yapacaksanız plastik kalem mantıklıdır. Kurumsal müşteriler için
                ise metal kalem daha doğru seçim olabilir.
              </p>

              <p>
                Burada en doğru yaklaşım, kullanım senaryosuna uygun ürün
                segmentini belirlemektir. Ucuz olan her ürün en iyi seçenek
                olmayabilir; bazen biraz daha kaliteli bir model çok daha güçlü
                bir kurumsal etki yaratabilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">
              Toptan Promosyon Kalem Alırken Nelere Dikkat Edilmeli?
            </h2>

            <div className="mt-4 space-y-4 text-gray-700 leading-7">
              <p>
                Toptan sipariş verirken yalnızca fiyatı değil, teslim süresini,
                baskı kalitesini, ürün stok durumunu ve minimum sipariş
                koşullarını da değerlendirmek gerekir. Sağlıklı bir teklif için
                ürün modeli, baskı alanı, baskı yönü ve adet bilgileri net
                şekilde paylaşılmalıdır.
              </p>

              <p>
                Eğer birden fazla ürün arasında kararsızsanız, aynı adet ve aynı
                baskı detaylarıyla alternatif teklifler istemek karşılaştırmayı
                kolaylaştırır. Böylece yalnızca fiyatı değil, ürünün marka
                etkisini de daha sağlıklı değerlendirebilirsiniz.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-bold">İlgili Kategoriler</h3>

          <div className="mt-4 flex flex-col gap-2 font-semibold text-gray-800">
            <Link href="/promosyon-kalem" className="hover:underline">
              Promosyon Kalem
            </Link>
            <Link href="/promosyon-cakmak" className="hover:underline">
              Promosyon Çakmak
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

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/teklif"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Teklif Al
          </Link>

          <Link
            href="/urunler"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-semibold transition hover:border-gray-500"
          >
            Ürünleri İncele
          </Link>
        </div>
      </article>
    </main>
  );
}