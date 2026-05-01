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

const CATEGORY = "Kalem";
const PAGE_URL = `${SITE_URL}/promosyon-kalem`;

const faqItems = [
  {
    question: "Promosyon kalem minimum kaç adet yaptırılır?",
    answer:
      "Promosyon kalem siparişlerinde minimum adet seçilen modele, baskı türüne ve üretim şartlarına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünlerde toplu sipariş adedi daha yüksek olabilir.",
  },
  {
    question: "Promosyon kalem fiyatları neye göre değişir?",
    answer:
      "Promosyon kalem fiyatları; ürünün malzemesine, modeline, baskı türüne, baskı yönüne, sipariş miktarına ve özel taleplere göre değişiklik gösterebilir. Plastik, metal ve dokunmatik kalem gibi farklı modeller farklı fiyat aralıklarına sahip olabilir.",
  },
  {
    question: "Logo baskılı kalemlerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı kalemlerde ürün modeline göre tampon baskı, UV baskı, serigrafi veya lazer baskı gibi farklı baskı yöntemleri uygulanabilir. Uygun baskı tekniği kalemin yüzeyi, malzemesi ve logo tasarımına göre belirlenir.",
  },
  {
    question: "Promosyon kalem siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, baskı yoğunluğuna, onay sürecine ve stok durumuna bağlı olarak değişebilir. Net termin bilgisi için ürün seçimi sonrası teklif sürecinde bilgi alınması en doğru yöntemdir.",
  },
  {
    question: "Plastik ve metal promosyon kalem arasında ne fark vardır?",
    answer:
      "Plastik promosyon kalemler genellikle ekonomik ve yüksek adetli dağıtımlar için tercih edilir. Metal promosyon kalemler ise daha prestijli bir görünüm sunar ve kurumsal hediye, yönetici seti veya özel müşteri çalışmaları için daha uygun olabilir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Kalem | Logo Baskılı Kurumsal Kalem Modelleri ve Toplu Sipariş",
  description:
    "Promosyon kalem modelleri, logo baskılı kurumsal kalem çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Fuar, etkinlik, ofis ve firma tanıtımı için promosyon kalem ürünlerini inceleyin.",
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
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon kalem modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalem Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalem | FirmaPromosyon",
    description:
      "Logo baskılı promosyon kalem çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Kalem",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Kalem",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon kalem modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon kalem çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Kalem</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Kalem
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Logo baskılı promosyon kalem modellerini inceleyebilir, firmanız için
            toplu sipariş ve hızlı teklif avantajlarından yararlanabilirsiniz.
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
                    Fiyatlar baskı hariç olup referans niteliğindedir. Sipariş adedi ve baskı detaylarına göre özel fiyatlandırma yapılmaktadır. Ürünler stok durumuna göre temin edilmektedir. Size özel en avantajlı teklif için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
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
        <p className="mt-10 text-center text-gray-600">
          Bu kategoride henüz ürün yok.
        </p>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Kalem Modelleri
            </h2>

            <p>
              Promosyon kalem modelleri, kurumsal tanıtım çalışmalarında en çok tercih
              edilen promosyon ürünleri arasında yer alır. Logo baskılı promosyon
              kalem ürünleri; fuar, bayi toplantısı, seminer, lansman, ofis kullanımı
              ve müşteri dağıtımları için hem ekonomik hem de etkili bir tanıtım
              çözümü sunar.
            </p>

            <p>
              FirmaPromosyon’da yer alan promosyon kalem çeşitleri; farklı renk,
              tasarım ve kullanım özellikleri ile kurumsal ihtiyaçlara uygun şekilde
              sunulmaktadır. Firmanızın logosuna uygun baskılı veya baskısız sipariş
              seçenekleri için ürünleri inceleyebilir, toplu alım ve hızlı teklif
              avantajlarından yararlanabilirsiniz.
            </p>

            <p>
              Logo baskılı promosyon kalem ürünleri, markanızı müşterilerinizin
              günlük kullanım alanlarında sürekli görünür hale getiren etkili
              reklam araçlarıdır. Kalem gibi sık kullanılan bir ürünün tercih
              edilmesi, markanızın uzun süre hatırlanmasına ve tekrar tekrar
              görünmesine yardımcı olur.
            </p>

            <p>
              Kurumsal firmalar tarafından en çok tercih edilen promosyon
              ürünlerinden biri olan kalemler; fuar organizasyonlarında, seminer
              ve eğitimlerde, müşteri ziyaretlerinde, bayi toplantılarında ve
              personel dağıtımlarında yoğun şekilde kullanılır.
            </p>

            <p>
              Promosyon kalem çeşitleri; plastik kalem, metal kalem, dokunmatik
              kalem, roller kalem ve özel tasarımlı kurumsal kalem modelleri gibi
              farklı alternatiflerle sunulabilir. Baskılı ve baskısız seçenekler,
              modelin yapısına göre değişebilir.
            </p>

            <p>
              Promosyon kalem fiyatları; ürün modeli, malzeme kalitesi, baskı
              tercihi ve sipariş miktarına göre değişiklik gösterebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Kalem Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Organizasyon Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve etkinliklerde dağıtılan logo baskılı
                  promosyon kalemler, ziyaretçilerin markanızı uzun süre
                  hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Kurumsal Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Şirket içinde personel kullanımı veya müşteri karşılama
                  alanlarında promosyon kalem kullanmak, kurumsal bütünlüğü
                  güçlendiren ekonomik bir çözümdür.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon kalem modelleri, mevcut müşterilere ve bayi ağına
                  verilebilecek kullanışlı ve sürekli elde bulunan kurumsal
                  hediye ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtım Çalışmaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon kalem siparişleri, marka bilinirliği
                  artırmak isteyen firmalar için düşük maliyetli ve etkili bir
                  reklam çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Kalem Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon kalem seçiminde en çok merak edilen konuların başında
              fiyatlandırma gelir. Ancak promosyon kalem fiyatları tek bir kritere
              göre belirlenmez. Kullanılan malzeme, ürünün tasarımı, baskı
              uygulanıp uygulanmayacağı, baskı türü, baskı yönü ve sipariş miktarı
              gibi unsurlar toplam maliyet üzerinde etkili olur.
            </p>

            <p>
              Özellikle yüksek adetli siparişlerde birim maliyet avantajı daha
              belirgin hale gelebilir. Bu nedenle fuar dağıtımı, etkinlik,
              kurumsal kampanya veya bayi organizasyonu gibi toplu alımlarda ürün
              seçiminin doğru planlanması önemlidir. Uygun model ile doğru baskı
              tekniğinin birleşmesi hem bütçe kontrolü sağlar hem de markanızın
              profesyonel görünümünü destekler.
            </p>

            <p>
              Plastik promosyon kalemler genellikle daha ekonomik çözümler sunarken,
              metal promosyon kalem modelleri daha prestijli ve kurumsal bir
              izlenim bırakabilir. Dokunmatik kalem, roller kalem veya özel gövdeli
              ürünler ise hedef kitlenin beklentisine göre farklılaşan alternatifler
              arasında yer alır. Bu yüzden yalnızca fiyat odaklı değil, kullanım
              alanına uygun seçim yapmak da önemlidir.
            </p>

            <p>
              Logo baskılı kalem siparişlerinde baskı tekniği de ayrı bir belirleyici
              etkendir. Bazı ürünlerde tampon baskı öne çıkarken, bazı modellerde UV
              baskı veya lazer baskı daha uygun olabilir. Logo detayı, baskı alanı,
              renk yapısı ve yüzey özelliği gibi etkenler doğru yöntemin
              belirlenmesinde önem taşır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Plastik ve Metal Promosyon Kalem Arasındaki Farklar
            </h2>

            <p>
              Promosyon kalem satın alırken en temel tercihlerden biri plastik kalem
              ile metal kalem arasındadır. Plastik modeller, uygun maliyetleri ve
              geniş renk seçenekleri sayesinde yüksek adetli dağıtımlar için sıkça
              tercih edilir. Özellikle fuar, açık hava etkinliği, seminer ve yoğun
              ziyaretçi trafiği olan organizasyonlarda plastik kalemler pratik bir
              çözüm sunar.
            </p>

            <p>
              Metal promosyon kalem modelleri ise daha şık, daha ağır ve daha
              prestijli bir algı oluşturur. Yönetici hediyeleri, özel müşteri
              ziyaretleri, kurumsal toplantılar ve daha seçici hedef kitlelere
              yönelik çalışmalarda metal gövdeli kalemler daha güçlü bir etki
              bırakabilir. Bu ürünler marka değerini daha premium bir çizgide
              yansıtmak isteyen firmalar için uygun olabilir.
            </p>

            <p>
              Her iki seçenekte de önemli olan nokta, kalemin kime dağıtılacağı ve
              hangi amaçla kullanılacağıdır. Eğer hedef mümkün olduğunca fazla kişiye
              ulaşmaksa ekonomik promosyon kalem modelleri daha doğru olabilir.
              Eğer amaç daha sınırlı ama daha etkili bir kurumsal sunum yapmaksa
              metal veya özel tasarım kalemler daha uygun hale gelir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Kalem Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı kalem siparişi verirken yalnızca ürün seçimine değil,
              marka görünürlüğüne de odaklanmak gerekir. Kullanılacak logonun okunaklı
              olması, baskı alanına uygun yerleşmesi ve kalemin gövdesiyle uyumlu bir
              görünüm sunması önemlidir. Çok küçük detay içeren logolarda baskı
              yönteminin doğru belirlenmesi gerekir.
            </p>

            <p>
              Sipariş öncesinde hedef kullanım alanının netleştirilmesi de süreci
              kolaylaştırır. Örneğin bir fuar dağıtımı için tercih edilen promosyon
              kalem ile kurumsal hediye amacıyla seçilen bir reklam kalemi aynı
              özellikleri taşımayabilir. Adet, hedef kitle, dağıtım biçimi ve marka
              konumlandırması doğru modelin belirlenmesinde yardımcı olur.
            </p>

            <p>
              Ayrıca promosyon kalem siparişinde stok durumu, renk seçenekleri,
              baskılı veya baskısız talep, teslim süreci ve ürün kombinasyonu gibi
              detaylar da göz önünde bulundurulmalıdır. Kalem ile birlikte{" "}
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
              gibi tamamlayıcı ürünler tercih edilerek daha güçlü bir kurumsal
              promosyon seti de oluşturulabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Kalem Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon kalem siparişlerinde en verimli sonuç, ihtiyaçların
              önceden doğru belirlenmesiyle elde edilir. Hangi etkinlikte
              kullanılacağı, kaç kişiye dağıtılacağı, hangi baskı tekniğinin uygun
              olduğu ve teslim süresinin ne kadar kritik olduğu gibi detaylar sipariş
              planlamasında önemlidir.
            </p>

            <p>
              Özellikle düzenli tanıtım yapan firmalar için promosyon kalem,
              maliyet-fayda dengesi yüksek ürünlerden biridir. Günlük kullanımda yer
              alması sayesinde reklam etkisi kısa süreli değil, uzun vadeli olabilir.
              Bu nedenle yalnızca anlık kampanya ürünü olarak değil, sürekli marka
              görünürlüğü sağlayan kurumsal bir araç olarak değerlendirilmelidir.
            </p>

            <p>
              Toplu sipariş öncesinde ürünleri incelemek, uygun modelleri karşılaştırmak
              ve ihtiyaçlarınıza göre teklif almak daha sağlıklı sonuç verir. Bu
              sayfada yer alan ürünleri inceleyerek doğrudan{" "}
              <Link
                href="/kurumsal-teklif-al"
                className="font-semibold text-white underline underline-offset-4"
              >
                kurumsal teklif
              </Link>{" "}
              talebinde bulunabilir, firmanız için en uygun promosyon kalem
              seçeneklerini değerlendirebilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Kalem Hakkında Sık Sorulan Sorular
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

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Kalem Rehberleri
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link
                href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  Promosyon Kalem Fiyatları Nasıl Hesaplanır?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon kalem fiyatlarını etkileyen temel unsurları ve sipariş
                  sürecinde dikkat edilmesi gereken noktaları inceleyin.
                </p>
              </Link>

              <Link
                href="/rehber/logo-baskili-kalem-fiyatlari"
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  Logo Baskılı Kalem Seçerken Nelere Dikkat Edilmeli?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Kalem modeli, baskı alanı, kullanım amacı ve kurumsal görünüm
                  açısından dikkat edilmesi gereken detayları keşfedin.
                </p>
              </Link>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}