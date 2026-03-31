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

const CATEGORY = "Powerbank";
const PAGE_URL = `${SITE_URL}/promosyon-powerbank`;

const faqItems = [
  {
    question: "Promosyon powerbank minimum kaç adet yaptırılır?",
    answer:
      "Promosyon powerbank siparişlerinde minimum adet; seçilen modele, kapasiteye, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı modeller daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon powerbank fiyatları neye göre değişir?",
    answer:
      "Promosyon powerbank fiyatları; kapasite değeri, teknik özellikler, gövde yapısı, baskı yöntemi, sipariş miktarı ve özel taleplere göre değişebilir. Wireless şarj, hızlı şarj veya dahili kablo gibi ek özellikler fiyat üzerinde etkili olabilir.",
  },
  {
    question: "Logo baskılı powerbanklerde hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon powerbank modellerinde ürün yüzeyine göre UV baskı, tampon baskı, lazer baskı veya uygun farklı uygulamalar tercih edilebilir. Doğru baskı yöntemi; ürün malzemesi, logo detayı ve kullanım amacına göre belirlenmelidir.",
  },
  {
    question: "Promosyon powerbank siparişi ne kadar sürede hazırlanır?",
    answer:
      "Sipariş hazırlık süresi; stok durumu, sipariş adedi, baskı yoğunluğu, teknik özellikler ve onay sürecine göre değişebilir. Net teslim süresi, seçilen model ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Promosyon powerbank kimler için uygundur?",
    answer:
      "Promosyon powerbank; müşterilere, bayilere, çalışanlara, iş ortaklarına ve etkinlik katılımcılarına verilebilecek kullanışlı teknolojik promosyon ürünleri arasında yer alır. Özellikle mobil cihaz kullanımının yoğun olduğu hedef kitleler için oldukça uygundur.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Powerbank | Logo Baskılı Kurumsal Powerbank Modelleri",
  description:
    "Promosyon powerbank modelleri, logo baskılı kurumsal powerbank çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Fuar, etkinlik, ofis ve firma tanıtımı için promosyon powerbank ürünlerini inceleyin.",
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
    title: "Promosyon Powerbank | FirmaPromosyon",
    description:
      "Logo baskılı promosyon powerbank çeşitleri. Kurumsal tanıtım, fuar dağıtımı ve toplu sipariş için promosyon powerbank modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Powerbank Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Powerbank | FirmaPromosyon",
    description:
      "Logo baskılı promosyon powerbank çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Powerbank",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Powerbank",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon powerbank modelleri. Kurumsal promosyon, fuar, etkinlik ve toplu siparişler için promosyon powerbank çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Powerbank</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Powerbank
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon powerbank modelleri, kurumsal tanıtım çalışmalarında son
            yılların en dikkat çeken promosyon ürünleri arasında yer alır. Logo
            baskılı powerbank ürünleri; fuar, bayi toplantısı, seminer, lansman,
            müşteri hediyesi ve kurumsal dağıtımlar için hem prestijli hem de
            kullanışlı bir tanıtım çözümü sunar.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon powerbank çeşitleri; farklı
            kapasite, tasarım ve teknik özelliklerle kurumsal ihtiyaçlara uygun
            şekilde sunulmaktadır. Firmanızın logosuna uygun baskılı veya
            baskısız sipariş seçenekleri için ürünleri inceleyebilir, toplu alım
            ve hızlı teklif avantajlarından yararlanabilirsiniz.
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
              Logo Baskılı Promosyon Powerbank Modelleri
            </h2>

            <p>
              Logo baskılı promosyon powerbank ürünleri, markanızı müşterilerinizin
              günlük kullanım alanlarında sürekli görünür hale getiren etkili
              reklam araçlarıdır. Powerbank gibi sık kullanılan teknolojik bir
              ürünün tercih edilmesi, markanızın uzun süre hatırlanmasına ve tekrar
              tekrar görünmesine yardımcı olur.
            </p>

            <p>
              Kurumsal firmalar tarafından en çok tercih edilen promosyon
              ürünlerinden biri olan powerbankler; fuar organizasyonlarında,
              seminer ve eğitimlerde, müşteri ziyaretlerinde, bayi toplantılarında
              ve personel dağıtımlarında yoğun şekilde kullanılır.
            </p>

            <p>
              Promosyon powerbank çeşitleri; farklı kapasite seçenekleri, wireless
              şarj özelliği, hızlı şarj desteği, dahili kablo yapısı ve özel tasarımlı
              kurumsal modeller ile sunulabilir. Baskılı ve baskısız seçenekler,
              modelin yapısına göre değişebilir.
            </p>

            <p>
              Promosyon powerbank fiyatları; ürün kapasitesi, teknik özellikleri,
              baskı tercihi ve sipariş miktarına göre değişiklik gösterebilir.
              Firmanız için en uygun modeli belirleyerek daha etkili bir kurumsal
              hediye veya promosyon planı oluşturabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Powerbank Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Organizasyon Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar standlarında ve etkinliklerde dağıtılan logo baskılı
                  promosyon powerbank modelleri, ziyaretçilerin markanızı uzun
                  süre hatırlamasına yardımcı olur.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Kurumsal Hediye ve Müşteri Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon powerbank ürünleri, müşterilere ve iş ortaklarına
                  verilebilecek prestijli ve kullanışlı kurumsal hediyeler
                  arasında yer alır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Ofis ve Günlük Kullanım
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Sürekli ihtiyaç duyulan bir teknoloji ürünü olduğu için
                  powerbankler, ofis ortamında ve günlük kullanımda markanızın
                  görünürlüğünü artırır.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Toplu Tanıtım Kampanyaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Yüksek adetli promosyon powerbank siparişleri, marka bilinirliği
                  artırmak isteyen firmalar için güçlü ve dikkat çekici bir tanıtım
                  çözümü sunar.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Powerbank Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon powerbank fiyatları yalnızca ürünün dış görünümüne göre
              belirlenmez. Kapasite değeri, batarya yapısı, şarj çıkış gücü,
              baskı alanı, baskı tekniği, ürün malzemesi, sipariş miktarı ve
              teknik özellikler toplam maliyet üzerinde etkili olabilir.
            </p>

            <p>
              Daha ekonomik dağıtım çözümleri için standart modeller tercih
              edilebilirken, daha prestijli kurumsal hediye planlarında wireless
              şarj, hızlı şarj veya özel tasarım detaylarına sahip powerbank
              modelleri öne çıkabilir. Bu nedenle seçim yapılırken yalnızca fiyat
              değil, hedef kitle ve kullanım amacı da birlikte değerlendirilmelidir.
            </p>

            <p>
              Özellikle mobil cihaz kullanımının yoğun olduğu iş ortamlarında
              ve saha ekiplerinde promosyon powerbank oldukça işlevsel bir üründür.
              Günlük hayatta aktif biçimde kullanılması, markanızın görünürlüğünü
              uzun süre canlı tutabilir.
            </p>

            <p>
              Logo baskılı powerbank siparişlerinde ürün yüzeyine göre UV baskı,
              tampon baskı veya lazer baskı gibi yöntemler daha uygun olabilir.
              Logonun okunabilirliği ve görsel etkisi doğru baskı tekniği seçimiyle
              doğrudan ilişkilidir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Farklı Kapasite ve Teknik Özelliklerde Powerbank Modelleri
            </h2>

            <p>
              Promosyon powerbank kategorisinde farklı kullanım alışkanlıklarına
              uygun birçok model bulunabilir. Daha kompakt yapılı modeller günlük
              taşımada avantaj sağlarken, daha yüksek kapasiteli ürünler uzun süreli
              kullanım ihtiyacı olan kişiler için daha uygun olabilir.
            </p>

            <p>
              Wireless şarj desteği, dahili kablo, Type-C uyumluluğu, hızlı şarj,
              çoklu çıkış veya dijital gösterge gibi özellikler ürünün kullanım
              deneyimini ve kurumsal algısını doğrudan etkileyebilir. Bu nedenle
              model seçimi yapılırken yalnızca görünüm değil, teknik ihtiyaçlar da
              dikkate alınmalıdır.
            </p>

            <p>
              Daha premium bir kurumsal hediye hedefleniyorsa tasarım ve teknik
              özellikleri öne çıkan modeller tercih edilebilir. Daha geniş dağıtım
              planlarında ise maliyet avantajı ve adet uyumu daha belirleyici olabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Powerbank Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı powerbank siparişi verirken ürün yüzeyi, kapasite,
              batarya yapısı, baskı alanı, renk seçeneği, teknik özellikler ve
              kullanım amacı birlikte değerlendirilmelidir. Çok detaylı logolarda
              doğru baskı tekniğinin seçilmesi daha da önemli hale gelir.
            </p>

            <p>
              Sipariş öncesinde ürünlerin kimlere dağıtılacağı netleştirilmelidir.
              Fuar dağıtımı için seçilecek promosyon powerbank ile yönetici hediyesi
              olarak tercih edilecek model aynı özellikte olmayabilir. Hedef kitleye
              göre doğru model seçmek, promosyon etkisini doğrudan artırır.
            </p>

            <p>
              Ayrıca promosyon powerbank ile birlikte{" "}
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
                href="/promosyon-termos"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon termos
              </Link>{" "}
              gibi tamamlayıcı ürünlerle daha güçlü bir kurumsal promosyon seti
              hazırlanabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Powerbank Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon powerbank siparişlerinde doğru sonuç almak için
              hedef kitle, kapasite ihtiyacı, sipariş adedi, baskı tercihi,
              teslim tarihi ve kullanım amacı önceden belirlenmelidir. Bu yaklaşım
              hem teklif sürecini hızlandırır hem de doğru ürün seçiminde avantaj sağlar.
            </p>

            <p>
              Promosyon powerbank, yalnızca kısa süreli kampanyalarda değil;
              günlük hayatta aktif kullanılan bir teknoloji ürünü olduğu için marka
              bilinirliği açısından güçlü avantaj sağlar. Özellikle mobil kullanımın
              yoğun olduğu sektörlerde etkili ve dikkat çekici bir promosyon ürünüdür.
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
              powerbank seçeneklerini daha sağlıklı şekilde karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Powerbank Hakkında Sık Sorulan Sorular
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