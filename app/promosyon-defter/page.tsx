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

function normalizeTR(v: string) {
  return v.trim().toLocaleLowerCase("tr-TR");
}

const PAGE_URL = `${SITE_URL}/promosyon-defter`;
const CATEGORY_NAME = "Tarihsiz Defter";

const faqItems = [
  {
    question: "Promosyon defter minimum kaç adet yaptırılır?",
    answer:
      "Promosyon defter siparişlerinde minimum adet; seçilen modele, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı tarihsiz defter modelleri daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon defter fiyatları neye göre değişir?",
    answer:
      "Promosyon defter fiyatları; ürün ölçüsü, kapak malzemesi, iç sayfa sayısı, baskı yöntemi, sipariş miktarı ve özel üretim taleplerine göre değişebilir. Farklı ebat, kapak ve sayfa yapısına sahip tarihsiz defter modelleri farklı fiyat aralıklarında değerlendirilebilir.",
  },
  {
    question: "Logo baskılı defterlerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon defter modellerinde ürün yapısına göre serigraf baskı, UV baskı, sıcak baskı veya yüzeye uygun farklı uygulamalar tercih edilebilir. Doğru baskı yöntemi; kapak yapısı, logo detayı ve kullanım amacına göre belirlenmelidir.",
  },
  {
    question: "Promosyon defter siparişi ne kadar sürede hazırlanır?",
    answer:
      "Sipariş hazırlık süresi; stok durumu, sipariş adedi, baskı yoğunluğu ve onay sürecine göre değişebilir. Net teslim süresi, seçilen model ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Tarihsiz defter neden daha çok tercih edilir?",
    answer:
      "Tarihsiz defter modelleri tarih sınırlaması olmadan yılın her döneminde kullanılabildiği için çok yönlü bir promosyon ürünüdür. Bu özellik, hem uzun kullanım süresi hem de farklı hedef kitlelere uygunluk açısından önemli avantaj sağlar.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Defter Modelleri | Tarihsiz Defter & Logo Baskılı Kurumsal Defter",
  description:
    "Promosyon defter modelleri, tarihsiz defter seçenekleri ve logo baskılı kurumsal defter çeşitleri için hızlı teklif alın. Toplu siparişe uygun promosyon defter ürünlerini inceleyin.",
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
    title: "Promosyon Defter Modelleri | FirmaPromosyon",
    description:
      "Tarihsiz promosyon defter çeşitleri, logo baskılı kurumsal defter modelleri ve toplu sipariş seçenekleri için hızlı teklif alın.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Defter Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Defter Modelleri | FirmaPromosyon",
    description:
      "Tarihsiz promosyon defter çeşitleri. Kurumsal logo baskı ve toplu sipariş için hızlı teklif alın.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonDefterPage() {
  const filtered = products.filter(
    (p) => normalizeTR(p.category) === normalizeTR(CATEGORY_NAME)
  );

  const itemListElement = filtered.map((p, idx) => ({
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
              name: "Promosyon Defter",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Defter",
          url: PAGE_URL,
          description:
            "Tarihsiz promosyon defter modelleri. Logo baskılı kurumsal defter çeşitleri ve toplu sipariş için hızlı teklif.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: filtered.length,
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

      <section className="rounded-3xl bg-black px-6 py-7 text-white md:px-8 md:py-9">
        <nav className="mb-4 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">Promosyon Defter</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Defter Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Tarihsiz promosyon defter modellerini inceleyin, firmanız için logo
            baskılı kurumsal defter ve toplu sipariş teklifi alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler?kategori=Tarihsiz%20Defter"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ürünlerde Filtrele
            </Link>
          </div>
        </header>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
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
                    Fiyatlar baskı hizmeti hariç olup referans niteliğindedir. Sipariş adedi ve baskı detaylarına göre özel fiyatlandırma yapılmaktadır. Size özel en avantajlı teklif için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
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

      {filtered.length === 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Bu kategoride henüz ürün yok.</p>
        </div>
      )}

      {filtered.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Defter Modelleri
            </h2>

            <p>
              Promosyon defter modelleri, kurumsal tanıtım ve marka görünürlüğü
              için en sık tercih edilen promosyon ürünleri arasında yer alır.
              Özellikle tarihsiz defter seçenekleri; fuar, seminer, bayi
              toplantısı, ofis kullanımı, müşteri hediyesi ve kurumsal
              etkinliklerde hem kullanışlı hem de uzun ömürlü bir promosyon
              çözümü sunar.
            </p>

            <p>
              FirmaPromosyon’da yer alan promosyon defter çeşitleri, logo baskılı
              veya baskısız sipariş seçenekleriyle kurumsal ihtiyaçlara uygun
              şekilde sunulmaktadır. Minimum sipariş adetleri, baskı detayları,
              kapak seçenekleri ve renk alternatifleri ürün bazında değişebilir.
              Sipariş öncesinde güncel stok, baskı alanı ve teslim süresi bilgisi
              alınması önerilir.
            </p>

            <p>
              Logo baskılı promosyon defter ürünleri, markanızı kullanıcıların
              masa üstünde, toplantılarda ve günlük iş akışında görünür hale
              getiren etkili reklam araçlarıdır. Defter gibi sürekli kullanılan
              ürünler, marka bilinirliğini artırmak ve kurumsal prestiji
              güçlendirmek açısından oldukça avantajlıdır.
            </p>

            <p>
              Tarihsiz promosyon defter modelleri, tarih sınırlaması olmadığı
              için yıl boyunca kullanılabilen ve bu nedenle en çok tercih edilen
              kurumsal promosyon ürünlerinden biridir. Şirket içi kullanım, bayi
              dağıtımı, müşteri hediyeleri ve fuar organizasyonları için oldukça
              uygundur.
            </p>

            <p>
              Promosyon defter çeşitleri; farklı kapak malzemeleri, iç sayfa
              düzenleri, ebat seçenekleri ve baskı uygulamaları ile sunulabilir.
              Baskılı ve baskısız seçenekler, ürün modeline göre değişebilir.
              Sipariş öncesinde kapak türü, baskı alanı, minimum adet, renk
              seçeneği ve teslim süresi hakkında bilgi alınması önerilir.
            </p>

            <p>
              Promosyon defter fiyatları; ürün ölçüsü, kapak malzemesi, sayfa
              yapısı, baskı tercihi ve sipariş miktarına göre değişiklik
              gösterebilir. Firmanız için en uygun modeli seçerek toplu sipariş
              ve hızlı teklif avantajlarından yararlanabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Defter Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve kurumsal organizasyonlarda dağıtılan
                  logo baskılı defterler, ziyaretçilerin markanızı uzun süre
                  hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Şirket içi personel kullanımı, toplantılar ve müşteri
                  görüşmeleri için promosyon defter kullanmak, kurumsal
                  bütünlüğü güçlendiren pratik bir çözümdür.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon defter modelleri, mevcut müşterilere ve bayi ağına
                  verilebilecek kullanışlı, prestijli ve uzun ömürlü kurumsal
                  hediye ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon defter siparişleri, marka bilinirliği
                  oluşturmak isteyen firmalar için etkili ve profesyonel bir
                  tanıtım çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Defter Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon defter fiyatları yalnızca ürünün dış görünümüne göre
              belirlenmez. Ebat, kapak malzemesi, iç sayfa sayısı, sayfa
              kalitesi, cilt yapısı, baskı tekniği, sipariş miktarı ve özel
              üretim detayları toplam maliyet üzerinde etkili olabilir.
            </p>

            <p>
              Bazı firmalar daha ekonomik dağıtım çözümleri ararken, bazıları
              daha prestijli ve uzun ömürlü kurumsal hediyelere yönelir. Bu
              nedenle defter seçimi yapılırken yalnızca fiyat değil, hedef kitle
              ve kullanım amacı da birlikte değerlendirilmelidir.
            </p>

            <p>
              Özellikle tarihsiz defter modelleri, yılın her döneminde
              kullanılabildiği için promosyon açısından esnek bir çözüm sunar.
              Doğru model ve doğru baskı tercihi ile hem işlevsellik hem de
              marka görünürlüğü birlikte güçlendirilebilir.
            </p>

            <p>
              Logo baskılı defter siparişlerinde baskı uygulanacak yüzeyin
              yapısı ve logonun detay seviyesi de önemlidir. Bazı modellerde
              sıcak baskı veya serigraf baskı daha uygun olabilirken, bazı
              ürünlerde farklı yüzey uygulamaları daha iyi sonuç verebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Tarihsiz Defter Modellerinin Avantajları
            </h2>

            <p>
              Tarihsiz defter modelleri, belirli bir yıla veya döneme bağlı
              olmadan kullanılabildiği için promosyon dünyasında oldukça güçlü
              bir yere sahiptir. Kullanıcı ürünü aldığı andan itibaren istediği
              zaman kullanmaya başlayabilir.
            </p>

            <p>
              Bu esneklik, ürünün elde kalma riskini azaltır ve dağıtım sonrası
              kullanım ihtimalini artırır. Özellikle fuar, seminer, eğitim,
              toplantı ve kurumsal hediye çalışmalarında tarihsiz defterler
              sıkça tercih edilir.
            </p>

            <p>
              Ayrıca tarihsiz promosyon defter modelleri; ofis kullanımına,
              kişisel not almaya, toplantı notlarına ve günlük iş planlamasına
              uygun yapısıyla çok yönlü bir promosyon ürünü olarak öne çıkar.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Defter Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı defter siparişi verirken ürün ölçüsü, kapak
              malzemesi, iç sayfa düzeni, baskı alanı, renk seçeneği ve kullanım
              amacı dikkatle değerlendirilmelidir. Çok detaylı logolarda uygun
              baskı tekniğinin seçilmesi daha da önemli hale gelir.
            </p>

            <p>
              Sipariş öncesinde defterlerin kimlere dağıtılacağı
              netleştirilmelidir. Fuar dağıtımı için seçilecek promosyon defter
              ile yönetici hediyesi olarak tercih edilecek model aynı özellikte
              olmayabilir. Hedef kitleye göre doğru model seçmek, promosyon
              etkisini artırır.
            </p>

            <p>
              Ayrıca promosyon defter ile birlikte{" "}
              <Link
                href="/promosyon-kalem"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon kalem
              </Link>
              ,{" "}
              <Link
                href="/promosyon-ajanda"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon ajanda
              </Link>
              ,{" "}
              <Link
                href="/promosyon-anahtarlik"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon anahtarlık
              </Link>{" "}
              veya{" "}
              <Link
                href="/promosyon-termos"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon termos
              </Link>{" "}
              gibi tamamlayıcı ürünlerle daha güçlü kurumsal setler
              hazırlanabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Defter Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon defter siparişlerinde doğru sonuç almak için
              ihtiyaçlar önceden belirlenmelidir. Dağıtım yapılacak kitle,
              sipariş adedi, baskı tercihi, teslim tarihi ve ürünün kullanım
              amacı teklif sürecini doğrudan etkiler.
            </p>

            <p>
              Promosyon defter, masa üstünde ve günlük kullanımda uzun süre
              görünür kalabilen bir ürün olduğu için marka bilinirliği açısından
              önemli avantaj sağlar. Bu nedenle yalnızca kısa süreli
              kampanyalarda değil, sürekli kurumsal görünürlük hedefleyen
              firmalar için de uygundur.
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
              defter seçeneklerini daha sağlıklı şekilde karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Sık Aranan Promosyon Defter Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon defter",
                "tarihsiz defter",
                "logo baskılı defter",
                "kurumsal defter",
                "toptan promosyon defter",
                "firma logolu defter",
                "baskılı defter",
                "promosyon ürünleri",
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
              Promosyon Defter Hakkında Sık Sorulan Sorular
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