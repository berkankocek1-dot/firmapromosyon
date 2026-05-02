import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const CATEGORY = "Çakmak";
const PAGE_URL = `${SITE_URL}/promosyon-cakmak`;

const faqItems = [
  {
    question: "Promosyon çakmak minimum kaç adet yaptırılır?",
    answer:
      "Promosyon çakmak siparişlerinde minimum adet; seçilen modele, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon çakmak fiyatları neye göre değişir?",
    answer:
      "Promosyon çakmak fiyatları; ürün modeli, gövde yapısı, baskı tekniği, baskı alanı, sipariş miktarı ve özel taleplere göre değişebilir. Taşlı çakmak, elektronik çakmak veya farklı yüzey özelliklerine sahip modeller farklı fiyat aralıklarında değerlendirilebilir.",
  },
  {
    question: "Logo baskılı çakmaklarda hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon çakmaklarda modele göre tampon baskı, UV baskı veya ürün yüzeyine uygun farklı baskı teknikleri uygulanabilir. Doğru baskı yöntemi; logo yapısı, renk sayısı ve ürün yüzeyine göre belirlenmelidir.",
  },
  {
    question: "Promosyon çakmak siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, stok durumuna, baskı yoğunluğuna ve onay sürecine göre değişebilir. Net teslim süresi, seçilen ürün ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Taşlı ve elektronik promosyon çakmak arasında ne fark vardır?",
    answer:
      "Taşlı promosyon çakmak modelleri klasik kullanım yapısıyla öne çıkarken, elektronik çakmaklar farklı kullanım konforu sunabilir. Model seçimi yapılırken hedef kitle, kullanım alanı ve kurumsal dağıtım amacı birlikte değerlendirilmelidir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Çakmak | Logo Baskılı Kurumsal Promosyon Çakmak Modelleri",
  description:
    "Promosyon çakmak modelleri, logo baskılı kurumsal çakmak çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Fuar, etkinlik, kafe, restoran ve firma tanıtımı için promosyon çakmak ürünlerini inceleyin.",
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Promosyon Çakmak | FirmaPromosyon",
    description:
      "Logo baskılı promosyon çakmak çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon çakmak modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Çakmak Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Çakmak | FirmaPromosyon",
    description:
      "Logo baskılı promosyon çakmak çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function Page() {
  const list = products.filter((p) => p.category === CATEGORY);

  const itemListElement = list.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Ürünler",
              item: `${SITE_URL}/urunler`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Promosyon Çakmak",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Çakmak",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon çakmak modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon çakmak çeşitleri.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <JsonLd
        data={{
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
        }}
      />

   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
  <nav className="mb-5 text-sm text-gray-300">
    <Link href="/" className="hover:text-white hover:underline">
      Ana Sayfa
    </Link>
    <span className="px-2">/</span>
    <Link href="/urunler" className="hover:text-white hover:underline">
      Ürünler
    </Link>
    <span className="px-2">/</span>
    <span className="font-semibold text-white">Promosyon Çakmak</span>
  </nav>

  <h1 className="text-3xl font-extrabold text-white md:text-4xl">
    Promosyon Çakmak
  </h1>

  <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
    Logo baskılı promosyon çakmak modellerini inceleyin, toplu alım ve
    kurumsal siparişler için hızlı teklif alın.
  </p>

  <div className="mt-5 flex flex-wrap gap-3">
    <Link
      href="/kurumsal-teklif-al"
      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
    >
      Kurumsal Teklif Al
    </Link>

    <Link
      href="/urunler"
      className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      Tüm Ürünleri Gör
    </Link>
  </div>
</section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
                loading="lazy"
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                {p.shortDesc}
              </p>

              {p.price && (
                <div className="mt-3">
                  <div className="text-base font-bold text-gray-900">
                    {p.price.toLocaleString("tr-TR")} TL + KDV
                  </div>

                  <div className="mt-1 text-xs font-medium text-green-600">
                    Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                  </div>
                </div>
              )}

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {list.length === 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Bu kategoride henüz ürün yok.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Çakmak
            </h2>

            <p>
              Promosyon çakmak modelleri, markanızı günlük kullanım alanlarında öne
              çıkaran ekonomik ve etkili promosyon ürünleri arasında yer alır. Logo
              baskılı promosyon çakmak ürünleri; fuar, etkinlik, restoran, kafe,
              otel, bayi toplantısı ve saha dağıtımları için sık tercih edilen
              kurumsal tanıtım çözümlerindendir.
            </p>

            <p>
              FirmaPromosyon’da yer alan promosyon çakmak çeşitleri; farklı gövde
              yapıları, renk seçenekleri ve baskı uygulamaları ile kurumsal
              ihtiyaçlara uygun olarak sunulmaktadır. Firmanızın logosuna uygun
              baskılı veya baskısız sipariş seçenekleri için ürünleri inceleyebilir,
              toplu alım ve hızlı teklif avantajlarından yararlanabilirsiniz.
            </p>

            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Çakmak Modelleri
            </h2>

            <p>
              Logo baskılı promosyon çakmak ürünleri, markanızı kullanıcıların
              günlük hayatında sürekli görünür kılan pratik tanıtım ürünleridir.
              Özellikle yoğun kullanılan alanlarda dağıtılan promosyon çakmaklar,
              uzun süreli marka hatırlanırlığı sağlar.
            </p>

            <p>
              Kurumsal firmalar, kafe ve restoranlar, oteller, organizasyon
              şirketleri, saha dağıtımı yapan markalar ve etkinlik düzenleyen
              işletmeler promosyon çakmak modellerini sıklıkla tercih eder.
              Yüksek adetli siparişe uygun yapısı sayesinde hem ekonomik hem de
              etkili bir reklam çözümü sunar.
            </p>

            <p>
              Promosyon çakmak çeşitleri; taşlı çakmak, elektronik çakmak,
              plastik gövdeli modeller ve farklı baskı alanlarına sahip ürünler
              gibi çeşitli alternatiflerle sunulabilir. Tampon baskı, UV baskı
              veya modele uygun diğer baskı teknikleri ile firma logosu ürün
              üzerine uygulanabilir. Baskılı ve baskısız seçenekler modele göre
              değişebilir.
            </p>

            <p>
              Promosyon çakmak fiyatları; model, baskı tekniği, malzeme yapısı,
              sipariş miktarı ve üretim detaylarına göre değişiklik gösterebilir.
              Firmanız için en uygun promosyon çakmak modelini seçerek toplu
              sipariş ve hızlı teklif avantajlarından yararlanabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Çakmak Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve organizasyonlarda dağıtılan logo baskılı
                  çakmaklar, ziyaretçilerin markanızı uzun süre hatırlamasına
                  yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kafe, Restoran ve Otel Kullanımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon çakmak ürünleri özellikle kafe, restoran, otel ve
                  eğlence mekanlarında hem işlevsel hem de reklam amaçlı tercih
                  edilen ürünler arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon çakmak modelleri, mevcut müşterilere veya bayi ağına
                  verilebilecek ekonomik ve yüksek görünürlüklü promosyon
                  ürünlerinden biridir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtım Kampanyaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon çakmak siparişleri, marka bilinirliği
                  artırmak isteyen firmalar için düşük maliyetli ve etkili bir
                  tanıtım çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Çakmak Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon çakmak fiyatları tek bir detaya bağlı değildir. Ürünün
              modeli, gövde yapısı, baskı alanı, baskı yöntemi, sipariş miktarı
              ve özel talepler toplam maliyet üzerinde etkili olabilir. Bu nedenle
              toplu sipariş öncesinde ürünün hangi amaçla kullanılacağı net şekilde
              belirlenmelidir.
            </p>

            <p>
              Özellikle yüksek adetli dağıtımlarda birim maliyet avantajı öne
              çıkar. Fuarlar, açılış organizasyonları, saha kampanyaları veya
              işletme içi dağıtımlar için promosyon çakmak tercih edilirken hem
              bütçe hem de görünürlük birlikte değerlendirilmelidir.
            </p>

            <p>
              Logo baskılı çakmak siparişlerinde uygulanacak baskı tekniği de
              önemlidir. Bazı modellerde tampon baskı daha uygun olurken, bazı
              ürünlerde UV baskı daha dikkat çekici sonuç verebilir. Ürün yüzeyi,
              logo yapısı ve kullanım amacı doğru baskı tekniğinin seçiminde
              belirleyici rol oynar.
            </p>

            <p>
              Kurumsal promosyon planlamasında yalnızca en düşük fiyatı değil,
              dağıtım etkisini ve ürünün kullanıcıda bırakacağı algıyı da
              değerlendirmek gerekir. Doğru ürün seçimi, promosyon çakmak
              kampanyasının verimini artırır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Taşlı ve Elektronik Promosyon Çakmak Modelleri
            </h2>

            <p>
              Promosyon çakmak kategorisinde en sık karşılaşılan seçeneklerden
              biri taşlı ve elektronik modeller arasındaki farktır. Taşlı
              promosyon çakmaklar klasik kullanım yapısı ile bilinir ve birçok
              kampanyada yaygın biçimde tercih edilir.
            </p>

            <p>
              Elektronik promosyon çakmak modelleri ise kullanım alışkanlığına ve
              hedef kitle beklentisine göre farklı bir alternatif sunabilir.
              Model seçerken yalnızca görünüm değil, dağıtım yapılacak alan ve
              kullanıcı profili de dikkate alınmalıdır.
            </p>

            <p>
              Eğer amaç yüksek adetli, ekonomik ve geniş kitleye hitap eden bir
              dağıtım yapmaksa klasik modeller öne çıkabilir. Daha farklı bir
              görünüm veya kullanım tercihi hedefleniyorsa alternatif çakmak
              modelleri değerlendirilebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Çakmak Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı çakmak siparişi verirken ürünün baskı alanı, yüzey
              yapısı, gövde rengi ve logonun okunabilirliği dikkatle
              değerlendirilmelidir. Küçük yüzeyli ürünlerde çok detaylı tasarımlar
              istenilen görünümü vermeyebilir. Bu nedenle logo yapısına uygun ürün
              seçimi önemlidir.
            </p>

            <p>
              Sipariş öncesinde ürünün kimlere dağıtılacağı, hangi ortamda
              kullanılacağı ve kampanyanın amacı netleştirilmelidir. Kafe,
              restoran, fuar, etkinlik veya saha promosyonu için seçilecek çakmak
              modeli birbirinden farklı olabilir.
            </p>

            <p>
              Ayrıca stok durumu, renk seçenekleri, baskılı veya baskısız tercih
              ve teslim planı da sipariş sürecinin önemli parçalarıdır. Promosyon
              çakmak ile birlikte{" "}
              <Link
                href="/promosyon-kalem"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon kalem
              </Link>
              ,{" "}
              <Link
                href="/promosyon-anahtarlik"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon anahtarlık
              </Link>
              ,{" "}
              <Link
                href="/promosyon-termos"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon termos
              </Link>{" "}
              veya{" "}
              <Link
                href="/promosyon-usb-bellek"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon USB bellek
              </Link>{" "}
              gibi tamamlayıcı ürünlerle daha güçlü bir kurumsal promosyon seti
              oluşturulabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Çakmak Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon çakmak siparişi verirken hedef kitle, dağıtım
              alanı, sipariş adedi, baskı tercihi ve teslim tarihi önceden
              planlanmalıdır. Bu yaklaşım hem teklif sürecini hızlandırır hem de
              doğru ürün seçiminde avantaj sağlar.
            </p>

            <p>
              Promosyon çakmak, kısa süreli kampanyalarda olduğu kadar sürekli
              marka görünürlüğü isteyen işletmeler için de işlevsel bir seçenektir.
              Uygun model ve doğru baskı ile markanızın hatırlanma gücü artırılabilir.
            </p>

            <p>
              Sayfada yer alan ürünleri inceleyerek ihtiyacınıza uygun modeli
              belirleyebilir ve doğrudan{" "}
              <Link
                href="/kurumsal-teklif-al"
                className="font-semibold text-white underline underline-offset-4"
              >
                kurumsal teklif
              </Link>{" "}
              talebinde bulunabilirsiniz. Böylece firmanız için uygun promosyon
              çakmak seçeneklerini daha sağlıklı şekilde karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Sık Aranan Promosyon Çakmak Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon çakmak",
                "logo baskılı çakmak",
                "kurumsal çakmak",
                "toptan promosyon çakmak",
                "firma logolu çakmak",
                "baskılı çakmak",
                "promosyon ürünleri",
                "taşlı çakmak",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Çakmak Hakkında Sık Sorulan Sorular
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}