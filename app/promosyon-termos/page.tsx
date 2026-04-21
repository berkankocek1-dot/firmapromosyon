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

const CATEGORY = "Termos";
const PAGE_URL = `${SITE_URL}/promosyon-termos`;

const faqItems = [
  {
    question: "Promosyon termos minimum kaç adet yaptırılır?",
    answer:
      "Promosyon termos siparişlerinde minimum adet; seçilen modele, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı termos modelleri daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon termos fiyatları neye göre değişir?",
    answer:
      "Promosyon termos fiyatları; ürün kapasitesi, malzeme kalitesi, gövde yapısı, baskı yöntemi, sipariş miktarı ve özel taleplere göre değişebilir. Farklı ml seçeneklerine ve kapak tasarımlarına sahip modeller farklı fiyat aralıklarında değerlendirilebilir.",
  },
  {
    question: "Logo baskılı termoslarda hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon termos modellerinde ürün yüzeyine göre lazer baskı, UV baskı veya uygun farklı baskı teknikleri uygulanabilir. Doğru baskı yöntemi; ürün yüzeyi, logo detayı ve kullanım amacına göre belirlenmelidir.",
  },
  {
    question: "Promosyon termos siparişi ne kadar sürede hazırlanır?",
    answer:
      "Sipariş hazırlık süresi; stok durumu, sipariş adedi, baskı yoğunluğu ve onay sürecine göre değişebilir. Net teslim süresi, seçilen model ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Promosyon termos kimler için uygundur?",
    answer:
      "Promosyon termos; müşterilere, bayilere, çalışanlara, iş ortaklarına ve etkinlik katılımcılarına verilebilecek kullanışlı ve prestijli promosyon ürünleri arasında yer alır. Özellikle ofis kullanımı ve günlük taşınabilir ürün ihtiyacı olan hedef kitleler için oldukça uygundur.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Termos | Logo Baskılı Kurumsal Promosyon Termos Modelleri",
  description:
    "Promosyon termos modelleri, logo baskılı kurumsal termos çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Fuar, etkinlik, ofis ve firma tanıtımı için promosyon termos ürünlerini inceleyin.",
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
    title: "Promosyon Termos | FirmaPromosyon",
    description:
      "Logo baskılı promosyon termos çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon termos modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Termos Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Termos | FirmaPromosyon",
    description:
      "Logo baskılı promosyon termos çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Termos",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Termos",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon termos modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon termos çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Termos</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Termos
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon termos modelleri, kurumsal tanıtım çalışmalarında en çok tercih
            edilen promosyon ürünleri arasında yer alır. Logo baskılı promosyon
            termos ürünleri; fuar, bayi toplantısı, seminer, lansman, ofis kullanımı
            ve müşteri dağıtımları için hem prestijli hem de etkili bir tanıtım
            çözümü sunar.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon termos çeşitleri; farklı kapasite,
            renk, tasarım ve kullanım özellikleri ile kurumsal ihtiyaçlara uygun
            şekilde sunulmaktadır. Firmanızın logosuna uygun baskılı veya baskısız
            sipariş seçenekleri için ürünleri inceleyebilir, toplu alım ve hızlı
            teklif avantajlarından yararlanabilirsiniz.
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
              Logo Baskılı Promosyon Termos Modelleri
            </h2>

            <p>
              Logo baskılı promosyon termos ürünleri, markanızı müşterilerinizin
              günlük kullanım alanlarında sürekli görünür hale getiren etkili
              reklam araçlarıdır. Termos gibi sık kullanılan bir ürünün tercih
              edilmesi, markanızın uzun süre hatırlanmasına ve tekrar tekrar
              görünmesine yardımcı olur.
            </p>

            <p>
              Kurumsal firmalar tarafından en çok tercih edilen promosyon
              ürünlerinden biri olan termoslar; fuar organizasyonlarında, seminer
              ve eğitimlerde, müşteri ziyaretlerinde, bayi toplantılarında ve
              personel dağıtımlarında yoğun şekilde kullanılır.
            </p>

            <p>
              Promosyon termos çeşitleri; farklı ml seçenekleri, metal gövde,
              kilitli kapak, lazer baskı, UV baskı ve özel tasarımlı kurumsal
              modeller gibi farklı alternatiflerle sunulabilir. Baskılı ve
              baskısız seçenekler, modelin yapısına göre değişebilir.
            </p>

            <p>
              Promosyon termos fiyatları; ürün modeli, malzeme kalitesi, baskı
              tercihi ve sipariş miktarına göre değişiklik gösterebilir. Firmanız
              için en uygun modeli belirleyerek daha etkili bir kurumsal hediye
              veya promosyon planı oluşturabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Termos Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Organizasyon Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve etkinliklerde dağıtılan logo baskılı
                  promosyon termoslar, ziyaretçilerin markanızı uzun süre
                  hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Şirket içinde personel kullanımı veya müşteri karşılama
                  alanlarında promosyon termos kullanmak, kurumsal bütünlüğü
                  güçlendiren prestijli bir çözümdür.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon termos modelleri, mevcut müşterilere ve bayi ağına
                  verilebilecek kullanışlı ve uzun ömürlü kurumsal hediye
                  ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon termos siparişleri, marka bilinirliği
                  artırmak isteyen firmalar için güçlü ve etkili bir reklam
                  çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Termos Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon termos fiyatları yalnızca ürünün dış görünümüne göre
              belirlenmez. Ürünün kapasitesi, malzeme yapısı, gövde kalitesi,
              kapak mekanizması, baskı alanı, baskı tekniği ve sipariş miktarı
              toplam maliyet üzerinde etkili olabilir.
            </p>

            <p>
              Daha ekonomik dağıtım çözümleri için farklı modeller tercih
              edilebilirken, daha premium kurumsal hediye planlarında daha güçlü
              malzeme yapısına sahip termoslar öne çıkabilir. Bu nedenle seçim
              yapılırken yalnızca fiyat değil, hedef kitle ve kullanım amacı da
              birlikte değerlendirilmelidir.
            </p>

            <p>
              Özellikle ofis çalışanları, saha ekipleri, bayi ağı ve kurumsal
              müşteriler için termos gibi günlük hayatta sürekli kullanılan bir
              ürün tercih edildiğinde marka görünürlüğü daha uzun süre devam eder.
            </p>

            <p>
              Logo baskılı termos siparişlerinde ürün yüzeyine göre lazer baskı
              veya UV baskı gibi yöntemler daha uygun olabilir. Logonun detay
              seviyesi ve görsel etkisi doğru baskı tekniği seçimiyle doğrudan
              ilişkilidir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Farklı Kapasite ve Tasarımdaki Promosyon Termos Modelleri
            </h2>

            <p>
              Promosyon termos kategorisinde farklı kullanım alışkanlıklarına uygun
              birçok model bulunabilir. Küçük hacimli modeller daha pratik taşınabilirlik
              sunarken, daha büyük kapasiteli termoslar gün boyu kullanım avantajı
              sağlayabilir.
            </p>

            <p>
              Kilitli kapak, dijital ısı göstergesi, mat yüzey, metal gövde veya
              özel tasarım detayları gibi unsurlar ürünün kullanım deneyimini ve
              kurumsal algısını doğrudan etkileyebilir. Bu nedenle model seçimi
              yapılırken sadece görünüm değil, kullanım senaryosu da düşünülmelidir.
            </p>

            <p>
              Daha premium bir tanıtım hedefleniyorsa tasarım ve malzeme kalitesi
              öne çıkan modeller tercih edilebilir. Daha geniş dağıtım planlarında
              ise maliyet avantajı ve adet uyumu daha belirleyici olabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Termos Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı termos siparişi verirken ürün yüzeyi, baskı alanı,
              kapasite, kapak yapısı, renk seçeneği ve kullanım amacı birlikte
              değerlendirilmelidir. Çok detaylı logolarda baskı tekniğinin doğru
              seçilmesi daha da önemli hale gelir.
            </p>

            <p>
              Sipariş öncesinde ürünlerin kimlere dağıtılacağı netleştirilmelidir.
              Fuar dağıtımı için seçilecek promosyon termos ile yönetici hediyesi
              olarak tercih edilecek model aynı özellikte olmayabilir. Hedef kitleye
              göre doğru model seçmek, promosyon etkisini doğrudan artırır.
            </p>

            <p>
              Ayrıca promosyon termos ile birlikte{" "}
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
                href="/promosyon-defter"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon defter
              </Link>{" "}
              veya{" "}
              <Link
                href="/promosyon-anahtarlik"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon anahtarlık
              </Link>{" "}
              gibi tamamlayıcı ürünlerle daha güçlü bir kurumsal promosyon seti
              hazırlanabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Termos Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon termos siparişlerinde doğru sonuç almak için hedef
              kitle, sipariş adedi, baskı tercihi, teslim tarihi ve kullanım amacı
              önceden belirlenmelidir. Bu yaklaşım hem teklif sürecini hızlandırır
              hem de doğru model seçiminde avantaj sağlar.
            </p>

            <p>
              Promosyon termos, yalnızca kısa süreli kampanyalarda değil; günlük
              kullanımda uzun süre görünür kalan bir ürün olduğu için marka
              bilinirliği açısından güçlü avantaj sağlar. Bu nedenle kalıcı etki
              bırakmak isteyen firmalar için öne çıkan promosyon kategorilerinden biridir.
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
              termos seçeneklerini daha sağlıklı şekilde karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Termos Hakkında Sık Sorulan Sorular
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