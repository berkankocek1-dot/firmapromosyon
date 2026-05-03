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

const CATEGORY = "Duvar Saatleri";
const PAGE_URL = `${SITE_URL}/promosyon-duvar-saatleri`;

const faqItems = [
  {
    question: "Promosyon duvar saati minimum kaç adet yaptırılır?",
    answer:
      "Promosyon duvar saati siparişlerinde minimum adet; seçilen model, baskı alanı, stok durumu ve üretim planına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş yapısına daha uygundur.",
  },
  {
    question: "Promosyon duvar saatleri fiyatları neye göre değişir?",
    answer:
      "Promosyon duvar saati fiyatları; ürün ölçüsü, kasa malzemesi, kadran tasarımı, baskı uygulaması, sipariş miktarı ve özel üretim detaylarına göre değişebilir. Özellikle toplu siparişlerde fiyat avantajı oluşabilir.",
  },
  {
    question: "Logo baskılı duvar saatlerinde hangi baskılar uygulanabilir?",
    answer:
      "Logo baskılı promosyon duvar saatlerinde modele göre kadran baskısı, UV baskı veya ürüne uygun diğer baskı uygulamaları tercih edilebilir. En doğru yöntem, ürün yüzeyi ve logo yapısına göre belirlenmelidir.",
  },
  {
    question: "Promosyon duvar saati siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedi, stok durumu, baskı yoğunluğu ve tasarım onay sürecine göre değişebilir. Net teslim süresi, ürün detayları kesinleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Promosyon duvar saatleri hangi alanlarda tercih edilir?",
    answer:
      "Promosyon duvar saatleri; ofisler, mağazalar, showroomlar, eğitim kurumları, klinikler, fabrikalar ve çeşitli kurumsal alanlarda tercih edilebilir. Sürekli görünür yapısı sayesinde uzun ömürlü reklam etkisi sunar.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Duvar Saatleri | Logo Baskılı Kurumsal Duvar Saati Modelleri",
  description:
    "Promosyon duvar saatleri, logo baskılı kurumsal duvar saati modelleri ve toplu sipariş seçenekleri. Ofis, kurum ve firma tanıtımı için promosyon duvar saatlerini inceleyin.",
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
    title: "Promosyon Duvar Saatleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon duvar saati modelleri. Ofisler ve kurumsal tanıtım için promosyon duvar saatlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Duvar Saatleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Duvar Saatleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon duvar saati modelleri. Kurumsal tanıtım ve toplu sipariş için promosyon duvar saatlerini inceleyin.",
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
              name: "Promosyon Duvar Saatleri",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Duvar Saatleri",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon duvar saatleri. Kurumsal tanıtım, ofis kullanımı, bayi dağıtımı ve toplu siparişler için duvar saati modelleri.",
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

      <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
        <nav className="mb-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">
            Promosyon Duvar Saatleri
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Duvar Saatleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Logo baskılı promosyon duvar saati modellerini inceleyebilir,
            firmanız için toplu sipariş ve hızlı teklif avantajlarından
            yararlanabilirsiniz.
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
        </header>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
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
          <p className="text-gray-700">Bu kategoride henüz ürün bulunmuyor.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Duvar Saati Modelleri
            </h2>

            <p>
              Promosyon duvar saatleri, firmaların marka bilinirliğini artırmak ve
              kurumsal görünürlüğünü uzun süre devam ettirmek için tercih ettiği en
              etkili promosyon ürünleri arasında yer alır. Ofislerde, mağazalarda,
              showroomlarda, bekleme alanlarında ve iş yerlerinde sürekli görünen
              duvar saatleri sayesinde markanız gün boyu dikkat çekici şekilde
              görünür kalır.
            </p>

            <p>
              Logo baskılı promosyon duvar saatleri; fuar organizasyonları, bayi
              toplantıları, müşteri hediyeleri, kurumsal etkinlikler ve ofis içi
              kullanım için hem prestijli hem de işlevsel bir promosyon çözümü
              sunar. FirmaPromosyon’da yer alan promosyon duvar saati modellerini
              inceleyerek firmanıza uygun seçenekler için hızlı teklif
              alabilirsiniz.
            </p>

            <p>
              Logo baskılı promosyon duvar saatleri, markanızı kullanıcıların
              bulunduğu ortamda sürekli görünür kılan kurumsal promosyon
              ürünlerindendir. Günlük kullanım değeri yüksek olan bu ürünler,
              yalnızca dekoratif bir obje değil aynı zamanda kalıcı reklam alanı
              olarak da değerlendirilir.
            </p>

            <p>
              Özellikle ofisler, mağazalar, kamu kurumları, eğitim merkezleri,
              hastaneler, üretim alanları ve müşteri bekleme noktaları gibi
              mekanlarda kullanılan promosyon duvar saatleri, marka ismini uzun
              süre göz önünde tutar. Bu durum, reklam etkisinin tek seferlik
              değil sürekli olmasını sağlar.
            </p>

            <p>
              Promosyon duvar saati modelleri; farklı çap, çerçeve yapısı,
              tasarım dili ve baskı alanlarına sahip seçeneklerle sunulabilir.
              Klasik, modern veya kurumsal görünümlü tasarımlar arasından
              firmanızın kimliğine uygun modeller tercih edilebilir.
            </p>

            <p>
              Kurumsal promosyon planlamasında duvar saati gibi uzun ömürlü
              ürünler, marka hatırlanırlığını artırmak isteyen firmalar için
              güçlü bir seçenektir. Hem kullanışlı hem prestijli olması, bu
              kategoriyi öne çıkaran temel avantajlar arasında yer alır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Duvar Saatleri Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Alanlar
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon duvar saatleri ofislerde, toplantı odalarında ve
                  kurumsal çalışma alanlarında hem dekoratif hem tanıtım amaçlı
                  kullanılabilir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Mağaza ve Showroom Kullanımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Mağaza ve showroomlarda kullanılan logo baskılı duvar saatleri,
                  mekanın içinde markanın daha güçlü ve kalıcı biçimde
                  görünmesine yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Bayilere veya kurumsal müşterilere verilen promosyon duvar
                  saatleri, hem işlevsel hem prestijli bir hediye alternatifi
                  sunar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Kurumsal Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Kurumsal etkinlikler ve fuar organizasyonlarında dağıtılan
                  promosyon duvar saatleri, uzun süre kullanılabilen reklam
                  ürünleri arasında yer alır.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Duvar Saati Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon duvar saatleri fiyatları; ürünün ölçüsüne, çerçeve
              malzemesine, mekanizma kalitesine, baskı alanına ve sipariş
              miktarına göre değişebilir. Bazı modeller daha sade ve ekonomik
              bir yapıya sahipken, bazı ürünler daha kurumsal ve premium
              görünüm sunabilir.
            </p>

            <p>
              Kadran üzerine uygulanacak tasarımın kapsamı da fiyat üzerinde
              etkili olabilir. Tam yüzey baskı, logo uygulaması veya özel
              kurumsal tasarım gibi detaylar ürün planlamasında dikkate
              alınmalıdır.
            </p>

            <p>
              Yüksek adetli siparişlerde birim maliyet avantajı oluşabileceği
              için promosyon duvar saati siparişi verirken dağıtım yapılacak
              alanlar ve toplam ihtiyaç önceden planlanmalıdır. Böylece hem
              bütçe daha doğru yönetilir hem de doğru ürün seçimi yapılır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Duvar Saati Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı promosyon duvar saati siparişi verirken öncelikle
              ürünün kullanılacağı alan belirlenmelidir. Ofis ortamında
              kullanılacak bir model ile mağaza, okul veya bekleme alanı için
              seçilecek model farklı olabilir.
            </p>

            <p>
              Saatin tasarımı, çapı, çerçeve rengi ve logo görünürlüğü birlikte
              değerlendirilmelidir. Özellikle kurumsal kimliğin öne çıkması
              isteniyorsa kadran tasarımında okunabilirlik ve estetik denge önem
              kazanır.
            </p>

            <p>
              Promosyon duvar saatleri ile birlikte{" "}
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
                href="/promosyon-ajanda"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon ajanda
              </Link>{" "}
              gibi ürünler birlikte değerlendirilerek daha güçlü bir kurumsal
              hediye veya promosyon seti oluşturulabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Duvar Saati Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon duvar saati siparişi verirken kullanım alanı,
              sipariş adedi, hedef kitle, kurumsal tasarım beklentisi ve teslim
              tarihi önceden planlanmalıdır. Bu yaklaşım teklif sürecini
              hızlandırır ve daha doğru maliyet hesabı yapılmasını sağlar.
            </p>

            <p>
              Duvar saati gibi uzun ömürlü promosyon ürünleri, kısa süreli
              dağıtımlardan çok daha kalıcı marka etkisi bırakabilir. Bu nedenle
              özellikle kurum içi kullanım ve müşteri hediyesi planlarında sıkça
              tercih edilir.
            </p>

            <p>
              Sayfada yer alan ürünleri inceleyerek ihtiyacınıza uygun modeli
              seçebilir ve doğrudan{" "}
              <Link
                href="/kurumsal-teklif-al"
                className="font-semibold text-white underline underline-offset-4"
              >
                kurumsal teklif
              </Link>{" "}
              talebinde bulunabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Sık Aranan Promosyon Duvar Saati Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon duvar saati",
                "logo baskılı duvar saati",
                "kurumsal duvar saati",
                "toptan duvar saati",
                "firma logolu duvar saati",
                "baskılı duvar saati",
                "ofis duvar saati",
                "promosyon saat",
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
              Promosyon Duvar Saatleri Hakkında Sık Sorulan Sorular
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