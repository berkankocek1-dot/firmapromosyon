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

const CATEGORY = "Anahtarlık";
const PAGE_URL = `${SITE_URL}/promosyon-anahtarlik`;

const faqItems = [
  {
    question: "Promosyon anahtarlık minimum kaç adet yaptırılır?",
    answer:
      "Promosyon anahtarlık siparişlerinde minimum adet seçilen modele, baskı türüne ve üretim şartlarına göre değişebilir. Bazı ürünler daha düşük adetlerde hazırlanabilirken, bazı modeller toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon anahtarlık fiyatları neye göre değişir?",
    answer:
      "Promosyon anahtarlık fiyatları; ürünün malzemesine, modeline, baskı tekniğine, baskı alanına, sipariş miktarına ve özel üretim taleplerine göre değişiklik gösterebilir. Metal, plastik veya özel tasarım anahtarlıklar farklı fiyat aralıklarında yer alabilir.",
  },
  {
    question: "Logo baskılı anahtarlıklarda hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı anahtarlıklarda modele göre lazer baskı, UV baskı, tampon baskı veya farklı yüzey uygulamaları kullanılabilir. Uygun baskı yöntemi ürün yüzeyi, logo yapısı ve kullanım amacına göre belirlenir.",
  },
  {
    question: "Promosyon anahtarlık siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, baskı yoğunluğuna, stok durumuna ve onay sürecine göre değişebilir. Net termin bilgisi ürün seçimi ve teklif sürecinde daha sağlıklı şekilde verilebilir.",
  },
  {
    question: "Metal ve plastik promosyon anahtarlık arasında ne fark vardır?",
    answer:
      "Plastik promosyon anahtarlıklar genellikle daha ekonomik ve yüksek adetli kampanyalar için tercih edilir. Metal anahtarlıklar ise daha güçlü, daha prestijli ve daha kurumsal bir görünüm sunabilir. Hedef kitleye göre doğru model seçilmelidir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Anahtarlık | Logo Baskılı Kurumsal Anahtarlık Modelleri ve Toplu Sipariş",
  description:
    "Promosyon anahtarlık modelleri, logo baskılı kurumsal anahtarlık çeşitleri ve toptan promosyon ürünleri için hızlı teklif alın. Fuar, etkinlik ve firma tanıtımı için ideal çözümleri inceleyin.",
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
    title: "Promosyon Anahtarlık | FirmaPromosyon",
    description:
      "Logo baskılı promosyon anahtarlık modelleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon anahtarlık çeşitlerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Anahtarlık Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Anahtarlık | FirmaPromosyon",
    description:
      "Logo baskılı promosyon anahtarlık çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Anahtarlık",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Anahtarlık",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon anahtarlık modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon anahtarlık çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Anahtarlık</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Anahtarlık
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Logo baskılı promosyon anahtarlık modellerini inceleyin, firmanız için
            toplu sipariş ve kurumsal teklif talebinde bulunun.
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
          <p className="text-gray-700">Bu kategoride henüz ürün yok.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon Anahtarlık Modelleri
            </h2>

            <p>
              Promosyon anahtarlık modelleri, markanızı günlük yaşamda görünür
              kılan en etkili kurumsal promosyon ürünleri arasında yer alır. Logo
              baskılı promosyon anahtarlık çeşitleri; fuar, etkinlik, bayi
              toplantısı, kurumsal tanıtım çalışmaları ve toplu firma dağıtımları
              için hem ekonomik hem de kullanışlı bir çözümdür.
            </p>

            <p>
              FirmaPromosyon’da yer alan promosyon anahtarlık ürünleri, farklı
              model ve tasarım seçenekleri ile kurumsal ihtiyaçlara uygun olarak
              sunulmaktadır. Firmanızın logosuna uygun baskılı veya baskısız
              sipariş seçenekleri için ürünleri inceleyebilir, size en uygun model
              için hızlı teklif alabilirsiniz.
            </p>

            <p>
              Logo baskılı promosyon anahtarlık ürünleri, markanızı müşterilerin
              günlük hayatında sürekli görünür hale getiren etkili tanıtım
              araçlarıdır. Özellikle anahtar ile birlikte sürekli taşınması,
              promosyon anahtarlık ürünlerini uzun ömürlü reklam çözümleri
              arasına sokar.
            </p>

            <p>
              Kurumsal firmalar, fuar organizasyonları, mağaza açılışları, bayi
              toplantıları ve özel kampanyalarda promosyon anahtarlık modellerini
              sıklıkla tercih eder. Ekonomik maliyetli olması ve yüksek adetli
              siparişlere uygun yapısı sayesinde toplu promosyon ürünleri içinde
              oldukça güçlü bir yere sahiptir.
            </p>

            <p>
              Promosyon anahtarlık çeşitleri; metal, plastik, özel tasarım ve
              işlevsel modeller gibi farklı alternatiflerle sunulabilir. Baskılı
              ve baskısız seçenekler modele göre değişebilir. Sipariş öncesinde
              ürün tipi, baskı alanı, minimum adet ve teslim süresi hakkında
              bilgi alınması önerilir.
            </p>

            <p>
              Promosyon anahtarlık fiyatları; model, malzeme, baskı türü ve
              sipariş miktarına göre değişiklik gösterebilir. Firmanız için en
              uygun anahtarlık modelini seçerek kurumsal teklif alabilir,
              markanızı hedef kitlenize daha profesyonel şekilde ulaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Anahtarlık Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve kurumsal etkinliklerde dağıtılan logo
                  baskılı anahtarlıklar, ziyaretçilerin markanızı uzun süre
                  hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Hediyeleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon anahtarlık modelleri, bayi ağına veya mevcut
                  müşterilere verilebilecek ekonomik ve sürekli kullanılan
                  kurumsal hediye ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Firma Tanıtım Kampanyaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yeni müşteri kazanımı veya marka bilinirliği kampanyalarında
                  promosyon anahtarlık kullanmak, düşük maliyetle geniş kitlelere
                  ulaşmak açısından avantaj sağlar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Kurumsal Siparişler
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli siparişlerde promosyon anahtarlık ürünleri hem
                  ekonomik hem de etkili bir kurumsal promosyon çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Anahtarlık Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon anahtarlık seçiminde fiyatlandırma çoğu zaman ilk bakılan
              konular arasında yer alır. Ancak promosyon anahtarlık fiyatları tek
              bir kritere bağlı değildir. Ürünün malzemesi, tasarımı, baskı alanı,
              baskı yöntemi, sipariş miktarı ve özel talepler toplam maliyet
              üzerinde doğrudan etkili olur.
            </p>

            <p>
              Plastik anahtarlık modelleri çoğu zaman ekonomik çözümler sunarken,
              metal promosyon anahtarlık çeşitleri daha prestijli ve daha kalıcı
              bir algı oluşturabilir. Hedef kitleniz, dağıtım alanınız ve kurumsal
              tanıtım hedefiniz doğru modelin seçiminde belirleyici olmalıdır.
              Böylece yalnızca uygun fiyatlı değil, aynı zamanda etkili bir ürün
              tercih edilmiş olur.
            </p>

            <p>
              Özellikle yüksek adetli dağıtımlarda birim maliyet avantajı öne
              çıkar. Fuarlar, etkinlikler, kampanya dönemleri veya mağaza
              açılışları gibi alanlarda toptan promosyon anahtarlık siparişi
              vermek daha verimli sonuç sağlayabilir. Doğru ürün ve doğru baskı
              tekniği ile hem bütçe korunur hem de marka görünürlüğü daha
              profesyonel hale gelir.
            </p>

            <p>
              Logo baskılı anahtarlık siparişlerinde ürün yüzeyine göre
              uygulanacak baskı tekniği de önem taşır. Bazı modellerde lazer
              baskı daha iyi sonuç verirken, bazı ürünlerde UV baskı veya farklı
              uygulamalar daha uygun olabilir. Logo yapısı, renk sayısı ve
              kullanım alanı bu seçimde dikkat edilmesi gereken başlıca
              noktalardır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Metal ve Plastik Promosyon Anahtarlık Arasındaki Farklar
            </h2>

            <p>
              Promosyon anahtarlık seçerken en temel kararlardan biri metal ve
              plastik modeller arasında yapılır. Plastik promosyon anahtarlıklar
              genellikle ekonomik bütçeli kampanyalar için uygundur. Yüksek adetli
              dağıtımlarda maliyet avantajı sağladıkları için fuar, etkinlik ve
              geniş hedef kitleli organizasyonlarda sık tercih edilirler.
            </p>

            <p>
              Metal promosyon anahtarlıklar ise daha dayanıklı, daha ağır ve daha
              prestijli bir görünüm sunar. Kurumsal müşteri hediyeleri, bayi
              ilişkileri, özel toplantılar ve daha seçici hedef kitleye hitap eden
              çalışmalar için metal modeller daha güçlü bir etki bırakabilir.
            </p>

            <p>
              Her iki model arasında seçim yapılırken ana kullanım amacı göz
              önünde bulundurulmalıdır. Eğer amaç daha fazla kişiye ekonomik
              şekilde ulaşmaksa plastik anahtarlıklar öne çıkar. Eğer hedef daha
              kurumsal ve premium bir izlenim bırakmaksa metal anahtarlıklar daha
              uygun olabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Anahtarlık Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı anahtarlık siparişi verirken tasarım, malzeme ve
              kullanım amacı birlikte değerlendirilmelidir. Logonun okunaklı
              şekilde uygulanabilmesi, ürün yüzeyine uygun yerleşmesi ve
              anahtarlığın günlük kullanımda dayanıklı kalması önemlidir. Çok
              küçük detaylı logolarda baskı yönteminin doğru seçilmesi daha da
              kritik hale gelir.
            </p>

            <p>
              Sipariş öncesinde ürünün kimlere dağıtılacağı da netleştirilmelidir.
              Örneğin fuar ziyaretçilerine dağıtılacak promosyon anahtarlık ile
              mevcut müşterilere verilecek kurumsal hediye anahtarlık aynı
              özellikte olmayabilir. Hedef kitleye göre doğru model seçmek ürünün
              reklam etkisini artırır.
            </p>

            <p>
              Ayrıca promosyon anahtarlık siparişinde stok durumu, renk
              seçenekleri, baskılı veya baskısız tercih, teslim süreci ve kombin
              ürün kullanımı da önemlidir. Anahtarlık ile birlikte{" "}
              <Link
                href="/promosyon-kalem"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon kalem
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
              gibi tamamlayıcı ürünler de tercih edilerek daha güçlü bir promosyon
              seti hazırlanabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Anahtarlık Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon anahtarlık siparişlerinde doğru sonuç almak için
              ihtiyaçların önceden belirlenmesi gerekir. Dağıtım alanı, hedef
              kitle, kullanılacak etkinlik, baskı şekli ve teslim süresi gibi
              detaylar sipariş planlamasını doğrudan etkiler.
            </p>

            <p>
              Promosyon anahtarlık, uzun süre elde kalan ve kullanım ömrü yüksek
              ürünlerden biri olduğu için marka görünürlüğü açısından güçlü bir
              avantaj sunar. Bu nedenle yalnızca kısa süreli kampanyalarda değil,
              sürekli kurumsal tanıtım faaliyetlerinde de değerlendirilebilecek
              pratik ürünler arasında yer alır.
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
              anahtarlık seçeneklerini daha sağlıklı şekilde karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Anahtarlık Hakkında Sık Sorulan Sorular
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