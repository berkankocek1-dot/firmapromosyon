import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-usb-bellek`;
const CATEGORY = "USB Bellek";

function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const faqItems = [
  {
    question: "Promosyon USB bellek minimum kaç adet yaptırılır?",
    answer:
      "Promosyon USB bellek siparişlerinde minimum adet; seçilen modele, kapasiteye, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon USB bellek fiyatları neye göre değişir?",
    answer:
      "Promosyon USB bellek fiyatları; kapasite seçeneği, ürün gövdesi, baskı yöntemi, sipariş miktarı ve özel üretim taleplerine göre değişebilir. 8 GB, 16 GB, 32 GB veya daha yüksek kapasite seçenekleri farklı fiyat aralıklarında değerlendirilebilir.",
  },
  {
    question: "Logo baskılı USB belleklerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon USB bellek modellerinde ürün yüzeyine göre tampon baskı, UV baskı, lazer baskı veya uygun farklı uygulamalar tercih edilebilir. Doğru baskı yöntemi; ürün malzemesi, logo detayı ve kullanım amacına göre belirlenmelidir.",
  },
  {
    question: "Promosyon USB bellek siparişi ne kadar sürede hazırlanır?",
    answer:
      "Sipariş hazırlık süresi; stok durumu, sipariş adedi, baskı yoğunluğu, kapasite seçimi ve onay sürecine göre değişebilir. Net teslim süresi, seçilen model ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Promosyon USB bellek kimler için uygundur?",
    answer:
      "Promosyon USB bellek; müşterilere, bayilere, iş ortaklarına, etkinlik katılımcılarına ve şirket içi kullanıma yönelik dağıtılabilecek işlevsel promosyon ürünleri arasında yer alır. Özellikle sunum, katalog, teklif veya dijital içerik paylaşımı yapan firmalar için oldukça uygundur.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon USB Bellek | Logo Baskılı Kurumsal Promosyon USB Bellek Modelleri",
  description:
    "Promosyon USB bellek modelleri, logo baskılı USB bellek çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Kurumsal tanıtım, fuar, etkinlik ve müşteri dağıtımları için promosyon USB bellek ürünlerini inceleyin.",
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
    title: "Promosyon USB Bellek | FirmaPromosyon",
    description:
      "Logo baskılı promosyon USB bellek çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon USB bellek modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon USB Bellek Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon USB Bellek | FirmaPromosyon",
    description:
      "Logo baskılı promosyon USB bellek çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function UsbPage() {
  const usbProducts = products.filter((p) => p.category === CATEGORY);

  const itemListElement = usbProducts.map((product, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${product.slug}`,
    name: product.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
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
              name: "Promosyon USB Bellek",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon USB Bellek",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon USB bellek modelleri. Kurumsal toplu sipariş, fuar dağıtımı ve hızlı teklif için USB bellek çeşitleri.",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: usbProducts.length,
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
          <span className="font-semibold text-white">Promosyon USB Bellek</span>
        </nav>

        <header>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Promosyon USB Bellek
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-200">
            Promosyon USB bellek modelleri, firmaların marka tanıtımı için en çok
            tercih ettiği kurumsal promosyon ürünleri arasında yer alır. Logo
            baskılı USB bellek ürünleri; fuar, seminer, bayi toplantısı, lansman,
            eğitim organizasyonları ve kurumsal etkinliklerde dağıtılarak marka
            bilinirliğini artırır.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon USB bellek çeşitleri; farklı
            kapasite, gövde tasarımı ve baskı seçenekleri ile kurumsal ihtiyaçlara
            uygun şekilde sunulmaktadır. Baskılı veya baskısız sipariş, kapasite
            alternatifi, renk uygunluğu ve minimum adet gibi detaylar ürün bazında
            değişebileceği için sipariş öncesinde bilgi alınması önerilir.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler?kategori=USB%20Bellek"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ürünlerde Filtrele
            </Link>
          </div>
        </header>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {usbProducts.map((product) => (
          <Link
            key={product.id}
            href={`/urunler/${product.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {product.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {product.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                {product.shortDesc}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {usbProducts.length === 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Bu kategoride henüz ürün yok.</p>
        </div>
      )}

      {usbProducts.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Promosyon USB Bellek Modelleri
            </h2>

            <p>
              Promosyon USB bellek, kurumsal tanıtım için kullanılan en etkili
              promosyon ürünlerinden biridir. Kullanıcılar tarafından aktif
              şekilde kullanılan bir ürün olması sayesinde marka görünürlüğü
              uzun süre devam eder ve firmanızın akılda kalıcılığını artırır.
            </p>

            <p>
              Firmalar genellikle fuar, lansman, seminer, bayi toplantısı ve
              müşteri ziyaretlerinde logo baskılı USB bellek dağıtarak hem
              kullanışlı hem de prestijli bir tanıtım ürünü sunar. Promosyon USB
              bellek modelleri farklı kapasite ve tasarım seçenekleri ile
              sunulabilir.
            </p>

            <p>
              Toptan promosyon USB bellek siparişlerinde kapasite seçenekleri,
              ürün modeline göre farklılaşabilir. USB bellek kapasitesi seçiminde
              kullanım amacı önemlidir. Tanıtım dosyaları, kataloglar, sunumlar
              ve dijital dökümanlar için uygun kapasite belirlenmesi gerekir.
            </p>

            <p>
              Promosyon USB bellek fiyatları; kapasite seçeneğine, sipariş
              miktarına, baskı türüne, veri aktarım özelliğine ve ürün modeline
              göre değişiklik gösterebilir. Kurumsal firmalar için toplu sipariş
              ve logo baskılı üretim seçenekleri ile uygun maliyetli promosyon
              çözümleri sunulmaktadır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon USB Bellek Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Etkinlik Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve organizasyonlarda dağıtılan USB bellekler,
                  ziyaretçilerin markanızı uzun süre hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Bayi ve Müşteri Sunumları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Katalog, fiyat listesi, sunum dosyası ve tanıtım içerikleri
                  USB bellek içinde sunularak daha profesyonel bir kurumsal
                  izlenim oluşturulabilir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Hediye Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Logo baskılı USB bellek modelleri, müşterilere ve iş
                  ortaklarına verilebilecek kullanışlı ve prestijli promosyon
                  ürünleri arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Firma Tanıtımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli USB bellek siparişleri, marka bilinirliği
                  oluşturmak isteyen firmalar için etkili ve uzun ömürlü bir
                  tanıtım çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon USB Bellek Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon USB bellek fiyatları yalnızca ürünün dış görünümüne göre
              belirlenmez. Kapasite seçeneği, veri aktarım standardı, gövde
              malzemesi, baskı alanı, baskı tekniği, sipariş miktarı ve özel
              üretim detayları toplam maliyet üzerinde etkili olabilir.
            </p>

            <p>
              Daha ekonomik dağıtım çözümleri için standart modeller tercih
              edilebilirken, daha prestijli kurumsal hediye planlarında metal
              gövdeli veya özel tasarımlı USB bellek modelleri öne çıkabilir.
              Bu nedenle seçim yapılırken yalnızca fiyat değil, hedef kitle ve
              kullanım amacı da birlikte değerlendirilmelidir.
            </p>

            <p>
              Özellikle fuar, lansman ve bayi toplantılarında dijital içerik
              aktarımı gereken durumlarda promosyon USB bellek oldukça işlevsel
              bir üründür. Kullanıcı tarafından aktif şekilde kullanılması,
              markanın görünürlüğünü uzun süre canlı tutabilir.
            </p>

            <p>
              Logo baskılı USB bellek siparişlerinde ürün yüzeyine göre UV baskı,
              tampon baskı veya lazer baskı gibi yöntemler daha uygun olabilir.
              Logonun okunabilirliği ve görsel etkisi doğru baskı tekniği seçimiyle
              doğrudan ilişkilidir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Farklı Kapasite ve Tasarımdaki USB Bellek Modelleri
            </h2>

            <p>
              Promosyon USB bellek kategorisinde farklı kullanım amaçlarına uygun
              birçok model bulunabilir. Küçük hacimli veri paylaşımı için daha
              düşük kapasite yeterli olabilirken, daha fazla dosya taşımaya uygun
              modeller farklı ihtiyaçlara cevap verebilir.
            </p>

            <p>
              Metal gövde, plastik gövde, kapaklı tasarım, döner mekanizma veya
              anahtarlık formundaki USB bellek modelleri kullanım deneyimini ve
              ürün algısını doğrudan etkileyebilir. Dağıtım yapılacak hedef kitleye
              göre doğru tasarım seçimi önemlidir.
            </p>

            <p>
              Daha premium bir kurumsal hediye hedefleniyorsa tasarım ve malzeme
              kalitesi öne çıkan modeller tercih edilebilir. Daha geniş dağıtım
              planlarında ise maliyet ve adet uyumu daha belirleyici olabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı USB Bellek Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı USB bellek siparişi verirken ürün yüzeyi, kapasite,
              baskı alanı, veri aktarım ihtiyacı, renk seçeneği ve kullanım amacı
              birlikte değerlendirilmelidir. Çok detaylı logolarda doğru baskı
              tekniğinin seçilmesi daha da önemli hale gelir.
            </p>

            <p>
              Sipariş öncesinde ürünlerin kimlere dağıtılacağı netleştirilmelidir.
              Fuar dağıtımı için seçilecek promosyon USB bellek ile müşteri hediyesi
              olarak tercih edilecek model aynı özellikte olmayabilir. Hedef kitleye
              göre doğru model seçmek, promosyon etkisini doğrudan artırır.
            </p>

            <p>
              Ayrıca promosyon USB bellek ile birlikte{" "}
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
              Toptan Promosyon USB Bellek Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon USB bellek siparişlerinde doğru sonuç almak için
              hedef kitle, kapasite ihtiyacı, sipariş adedi, baskı tercihi,
              teslim tarihi ve kullanım amacı önceden belirlenmelidir. Bu yaklaşım
              hem teklif sürecini hızlandırır hem de doğru ürün seçiminde avantaj sağlar.
            </p>

            <p>
              Promosyon USB bellek, yalnızca kısa süreli kampanyalarda değil;
              aktif kullanılan bir dijital taşıyıcı olduğu için marka bilinirliği
              açısından güçlü avantaj sağlar. Özellikle bilgi, dosya ve katalog
              paylaşımı yapan firmalar için son derece işlevsel bir promosyon ürünüdür.
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
              USB bellek seçeneklerini daha sağlıklı şekilde karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Sık Aranan Promosyon USB Bellek Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon usb bellek",
                "logo baskılı usb bellek",
                "kurumsal usb bellek",
                "toptan usb bellek",
                "firma logolu usb bellek",
                "usb bellek modelleri",
                "baskılı usb bellek",
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
              Promosyon USB Bellek Hakkında Sık Sorulan Sorular
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