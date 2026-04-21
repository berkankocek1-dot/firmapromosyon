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

const CATEGORY = "Promosyon Şapka";
const PAGE_URL = `${SITE_URL}/promosyon-sapka`;

const faqItems = [
  {
    question: "Promosyon şapka minimum kaç adet yaptırılır?",
    answer:
      "Promosyon şapka siparişlerinde minimum adet; seçilen model, baskı veya nakış yöntemi, stok durumu ve üretim planına göre değişebilir. Bazı ürünler daha düşük adetlerde hazırlanabilirken, bazı modeller toplu siparişe daha uygundur.",
  },
  {
    question: "Promosyon şapka fiyatları neye göre değişir?",
    answer:
      "Promosyon şapka fiyatları; ürün modeli, kumaş türü, işçilik detayı, baskı veya nakış tercihi, sipariş miktarı ve özel taleplere göre değişiklik gösterebilir. Özellikle yüksek adetli siparişlerde birim maliyet avantajı oluşabilir.",
  },
  {
    question: "Logo baskılı şapkalarda hangi uygulamalar yapılabilir?",
    answer:
      "Logo baskılı promosyon şapkalarda modele göre serigraf baskı, transfer baskı, DTF baskı, nakış veya ürüne uygun farklı uygulamalar tercih edilebilir. Uygun yöntem; kumaş yapısı, logo detayı ve kullanım amacı dikkate alınarak belirlenmelidir.",
  },
  {
    question: "Promosyon şapka siparişi ne kadar sürede hazırlanır?",
    answer:
      "Hazırlık süresi sipariş adedine, modelin stok durumuna, baskı yoğunluğuna ve onay sürecine göre değişebilir. Net teslim süresi, ürün ve baskı detayları kesinleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Nakışlı şapka mı baskılı şapka mı tercih edilmeli?",
    answer:
      "Nakışlı promosyon şapka modelleri daha premium ve kurumsal bir görünüm sunabilirken, baskılı şapkalar daha farklı tasarım ihtiyaçlarına uygun olabilir. Doğru seçim; bütçe, hedef kitle, kullanım alanı ve logo yapısına göre yapılmalıdır.",
  },
];

export const metadata: Metadata = {
  title: "Promosyon Şapka | Logo Baskılı Kurumsal Promosyon Şapka Modelleri",
  description:
    "Promosyon şapka modelleri, logo baskılı kurumsal şapka çeşitleri ve toplu sipariş seçenekleri için hızlı teklif alın. Etkinlik, fuar, personel kullanımı ve marka tanıtımı için promosyon şapka ürünlerini inceleyin.",
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
    title: "Promosyon Şapka | FirmaPromosyon",
    description:
      "Logo baskılı promosyon şapka çeşitleri. Kurumsal tanıtım, etkinlik dağıtımı ve toplu sipariş için promosyon şapka modellerini inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Şapka Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Şapka | FirmaPromosyon",
    description:
      "Logo baskılı promosyon şapka çeşitleri. Kurumsal toplu sipariş ve hızlı teklif imkanı.",
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
              name: "Promosyon Şapka",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Şapka",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon şapka modelleri. Kurumsal promosyon, fuar, etkinlik, saha ekibi kullanımı ve toplu siparişler için promosyon şapka çeşitleri.",
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
          <span className="font-semibold text-white">Promosyon Şapka</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Şapka
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Promosyon şapka modelleri, açık hava organizasyonlarında, fuarlarda,
            saha ekiplerinde ve kurumsal tanıtım çalışmalarında öne çıkan
            giyilebilir promosyon ürünleri arasında yer alır. Logo baskılı
            promosyon şapka ürünleri; marka görünürlüğünü artırmak, ekip
            bütünlüğü oluşturmak ve hedef kitleyle daha güçlü bir temas kurmak
            isteyen firmalar için etkili bir tanıtım çözümüdür.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            FirmaPromosyon’da yer alan promosyon şapka çeşitleri; farklı renk,
            kumaş, model ve uygulama seçenekleriyle kurumsal ihtiyaçlara uygun
            şekilde sunulmaktadır. Baskılı veya nakışlı promosyon şapka
            talepleriniz için ürünleri inceleyebilir, toplu alım ve hızlı teklif
            avantajlarından yararlanabilirsiniz.
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
              Logo Baskılı Promosyon Şapka Modelleri
            </h2>

            <p>
              Logo baskılı promosyon şapkalar, markanızı açık alanlarda görünür
              hale getiren ve kullanıcı ile fiziksel temas kuran güçlü reklam
              ürünleridir. Özellikle fuar, festival, saha organizasyonu, spor
              etkinliği ve kurumsal kampanyalarda tercih edilen promosyon şapka
              modelleri, uzun süreli marka hatırlanırlığı oluşturabilir.
            </p>

            <p>
              Kurumsal firmalar tarafından tercih edilen promosyon şapkalar; hem
              çalışan kullanımı hem de dağıtım amaçlı tanıtım planlarında sıkça
              değerlendirilir. Giyilebilir promosyon ürünleri arasında yer alan
              şapka, yalnızca reklam değeri sunmakla kalmaz, aynı zamanda
              kullanıcının günlük yaşamında markanızın tekrar tekrar görünmesini
              sağlar.
            </p>

            <p>
              Promosyon şapka çeşitleri; kep şapka, fileli şapka, pamuklu şapka,
              gabardin şapka ve farklı kurumsal kullanım ihtiyaçlarına uygun
              modellerle sunulabilir. Seçilecek ürün; hedef kitle, kullanım
              alanı, mevsim koşulları ve marka konumlandırmasına göre
              belirlenmelidir.
            </p>

            <p>
              Promosyon şapka fiyatları ise model, kumaş türü, işçilik seviyesi,
              baskı veya nakış uygulaması, sipariş adedi ve özel üretim
              taleplerine göre değişebilir. Doğru ürün seçimi yapıldığında hem
              estetik hem de işlevsel açıdan güçlü bir promosyon yatırımı elde
              edilebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Şapkalar Nerelerde Kullanılır?
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Açık Hava Etkinlikleri
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Promosyon şapkalar; festival, konser, spor organizasyonu ve
                  açık alan etkinliklerinde hem koruyucu hem de dikkat çekici
                  marka taşıyıcısı olarak kullanılabilir.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Fuar ve Organizasyon Dağıtımları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Fuar alanlarında dağıtılan logo baskılı şapkalar, ziyaretçinin
                  etkinlik sonrasında da markanızı hatırlamasına katkı sağlar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Personel ve Saha Ekibi Kullanımı
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Saha ekibi, satış temsilcisi veya etkinlik personeli için
                  kullanılan promosyon şapkalar kurumsal bütünlük ve profesyonel
                  görünüm açısından önemli avantaj sağlar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">
                  Marka Tanıtım Kampanyaları
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Toplu promosyon şapka siparişleri, geniş kitleye ulaşmak isteyen
                  markalar için uzun ömürlü ve görünürlüğü yüksek bir reklam
                  çözümü oluşturur.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Şapka Fiyatlarını Etkileyen Unsurlar
            </h2>

            <p>
              Promosyon şapka fiyatları yalnızca ürünün temel modeline göre
              belirlenmez. Kumaş kalitesi, dikiş yapısı, panel sayısı, siperlik
              tasarımı, ayarlanabilir kapanış tipi, baskı ya da nakış tercihi ve
              sipariş miktarı toplam maliyet üzerinde etkili olabilir.
            </p>

            <p>
              Özellikle toplu siparişlerde adet arttıkça birim maliyet avantajı
              oluşabilir. Bu nedenle firma tanıtımı, saha organizasyonu veya
              etkinlik dağıtımı için promosyon şapka siparişi verirken kullanım
              amacı netleştirilmeli ve buna uygun model seçilmelidir.
            </p>

            <p>
              Şapkanın baskılı mı yoksa nakışlı mı hazırlanacağı da fiyat ve
              algı açısından önemlidir. Bazı kurumsal kullanımlarda nakış daha
              prestijli bir görünüm sunarken, bazı kampanya çalışmalarında baskı
              uygulamaları daha uygun ve esnek olabilir.
            </p>

            <p>
              Doğru fiyat değerlendirmesi yapılırken sadece düşük maliyet değil,
              ürünün kullanıcı üzerindeki etkisi, dayanıklılığı ve marka
              görünürlüğüne sağlayacağı katkı da dikkate alınmalıdır.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Nakışlı ve Baskılı Promosyon Şapka Seçenekleri
            </h2>

            <p>
              Promosyon şapka siparişlerinde en sık değerlendirilen konulardan
              biri, logonun baskı mı yoksa nakış ile mi uygulanacağıdır. Nakışlı
              promosyon şapka modelleri daha kurumsal, daha dayanıklı ve daha
              premium bir görünüm sunabilir.
            </p>

            <p>
              Baskılı promosyon şapka modelleri ise daha farklı tasarım
              ihtiyaçlarına cevap verebilir. Renkli logo uygulamaları, daha geniş
              yüzey kullanımı veya kampanya bazlı hızlı çözümler için baskı
              yöntemleri avantaj sağlayabilir.
            </p>

            <p>
              Doğru tercih yapılırken şapkanın kumaşı, kullanım alanı, hedef
              kitle profili ve firmanın marka algısı birlikte değerlendirilmelidir.
              Böylece hem görsel açıdan güçlü hem de kullanım açısından uygun bir
              sonuç elde edilebilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Logo Baskılı Şapka Siparişinde Nelere Dikkat Edilmeli?
            </h2>

            <p>
              Logo baskılı promosyon şapka siparişi verirken öncelikle ürünün
              kimlere dağıtılacağı ve hangi ortamda kullanılacağı netleştirilmelidir.
              Personel kullanımı için seçilecek model ile fuar dağıtımı için
              seçilecek model aynı olmayabilir.
            </p>

            <p>
              Ayrıca kumaş yapısı, renk seçeneği, logo boyutu, baskı alanı ve
              uygulama yöntemi dikkatle değerlendirilmelidir. Çok detaylı
              logolarda her uygulama tekniği aynı verimi vermeyebilir. Bu yüzden
              ürün ve baskı tekniği birlikte planlanmalıdır.
            </p>

            <p>
              Promosyon şapka ile birlikte{" "}
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
              ve{" "}
              <Link
                href="/promosyon-usb-bellek"
                className="font-semibold text-white underline underline-offset-4"
              >
                promosyon USB bellek
              </Link>{" "}
              gibi tamamlayıcı ürünler de değerlendirilerek daha güçlü bir
              kurumsal promosyon seti oluşturulabilir.
            </p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">
              Toptan Promosyon Şapka Siparişi İçin Doğru Planlama
            </h2>

            <p>
              Toptan promosyon şapka siparişi verirken hedef kitle, kullanım
              alanı, sipariş adedi, baskı yöntemi, teslim tarihi ve bütçe birlikte
              planlanmalıdır. Bu yaklaşım teklif sürecini hızlandırırken doğru
              model seçilmesini de kolaylaştırır.
            </p>

            <p>
              Özellikle açık hava etkinlikleri, kurumsal saha ekipleri ve
              geniş katılımlı dağıtım kampanyalarında promosyon şapka oldukça
              verimli bir tanıtım ürünü olabilir. Uygun model ve doğru tasarım ile
              marka görünürlüğü önemli ölçüde artırılabilir.
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
              Sık Aranan Promosyon Şapka Terimleri
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "promosyon şapka",
                "logo baskılı şapka",
                "nakışlı promosyon şapka",
                "kurumsal şapka",
                "toptan promosyon şapka",
                "firma logolu şapka",
                "baskılı şapka",
                "etkinlik şapkası",
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
              Promosyon Şapka Hakkında Sık Sorulan Sorular
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