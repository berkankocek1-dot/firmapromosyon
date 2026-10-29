import Link from "next/link";
import DefterProductGrid from "./DefterProductGrid";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { sortProductsByCode } from "@/data/productSorting";


const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
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
    question: "Promosyon defter ile ajanda arasındaki fark nedir?",
    answer:
      "Tarihsiz defter belirli bir takvim yılına bağlı olmadan not almak için kullanılabilir. Tarihli planlama ihtiyacında ise ajanda seçenekleri değerlendirilebilir. Her ürünün iç sayfa düzeni model bazında kontrol edilmelidir.",
  },
  {
    question: "Defter siparişine kalem veya kutu dahil mi?",
    answer:
      "Kalem, kutu ve diğer aksesuarların kapsamı seçilen ürüne ve teklife bağlıdır. Ürün görselinden dahil oldukları sonucunu çıkarmadan sipariş öncesinde paket içeriğini ve ek ürün bedellerini teyit edin.",
  },
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
    "Promosyon Defter Modelleri ve Fiyatları | Logo Baskılı",
  description:
    "Logo baskılı tarihsiz promosyon defter modellerini inceleyin. Ebat, kapak ve iç sayfa özelliklerini karşılaştırın; toptan defter siparişi için teklif alın.",
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
  const filtered = sortProductsByCode(products.filter(
    (p) => normalizeTR(p.category) === normalizeTR(CATEGORY_NAME)
  ));

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
            Logo Baskılı Tarihsiz Promosyon Defter Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Toplantı notları, çalışan kitleri ve müşteri hediyeleri için tarihsiz
            defterleri ebat, kapak ve iç sayfa özelliklerine göre karşılaştırın.
            Logolu toplu sipariş için model kodu, adet ve baskı tercihinizle
            kurumsal teklif isteyin.
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

      <DefterProductGrid products={filtered} />

      {filtered.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Tarihsiz Defter Seçerken Hangi Özelliklere Bakılmalı?</h2>
            <p>Defter seçiminde dış görünüm kadar kullanım biçimi de önemlidir. Çantada taşınacak bir ürün ile masada toplantı notları için kullanılacak bir modelde farklı ebatlar tercih edilebilir. Ürün detaylarında belirtilen ölçüleri, kapak yapısını ve iç sayfa özelliklerini birlikte inceleyin.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Kurumsal defter seçiminde özellik ve sipariş kontrol tablosu</caption>
                <thead className="text-white"><tr>
                  <th scope="col" className="border-b border-white/20 p-3">Özellik</th>
                  <th scope="col" className="border-b border-white/20 p-3">Seçime etkisi</th>
                  <th scope="col" className="border-b border-white/20 p-3">Kontrol edilecek bilgi</th>
                </tr></thead>
                <tbody>
                  {[
                    ["Ebat", "Taşıma ve not alma alanı", "Ürün detayındaki santimetre ölçüsü"],
                    ["Kapak", "Görünüm ve logo uygulaması", "Malzeme, doku, renk ve baskı alanı"],
                    ["İç sayfalar", "Not alma ve çizim ihtiyacı", "Sayfa düzeni, sayısı ve belirtilmişse kağıt gramajı"],
                    ["Cilt ve aksesuarlar", "Açılma biçimi ve günlük kullanım", "Cilt yapısı; varsa lastik, ayraç, cep ve kalem tutucu"],
                    ["Metal detay", "Logo yerleşimi ve hediye sunumu", "Detayın konumu ve uygulanabilir baskı yöntemi"],
                  ].map(([feature, effect, check]) => (
                    <tr key={feature}>
                      <th scope="row" className="border-b border-white/10 p-3 font-semibold text-white">{feature}</th>
                      <td className="border-b border-white/10 p-3">{effect}</td>
                      <td className="border-b border-white/10 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Bir aksesuarın veya sayfa özelliğinin tüm modellerde bulunduğunu varsaymayın. Özellikle sayfa sayısı ile yaprak sayısını aynı kabul etmeden ürün açıklamasını kontrol edin; belirtilmeyen ayrıntıları teklif aşamasında sorun.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Tarihsiz Defter mi, Ajanda mı?</h2>
            <p>Tarihsiz defter belirli bir takvim yılına bağlı olmadan not almak için kullanılabilir. Yıl içinde farklı tarihlerde yapılan eğitimler, çalışan başlangıç paketleri ve toplantı dağıtımları için bu esneklik değerlendirilebilir.</p>
            <p>Gün, hafta veya ay bazında tarihli planlama arıyorsanız <Link href="/promosyon-ajanda" className="font-semibold text-white underline underline-offset-4">promosyon ajanda modellerini</Link> de inceleyin. Tarihsiz defter seçiminde ise iç sayfa düzeninin kullanım amacınıza uygunluğunu kontrol edin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Defter Fiyatlarını Nasıl Karşılaştırmalısınız?</h2>
            <p>Benzer görünümlü iki defterin ebatları, kapak malzemesi, sayfa sayısı ve cilt yapısı farklı olabilir. Toptan siparişte karşılaştırmayı aynı özellikler üzerinden yapın; ürün fiyatının yanında logo uygulamasının kapsamını da netleştirin.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-white">Ürün:</strong> Model kodu, ebat, kapak, iç sayfa yapısı ve sipariş adedi.</li>
              <li><strong className="text-white">Baskı:</strong> Uygulama yöntemi, logo boyutu, renk sayısı ve baskı yapılacak yüzeyler.</li>
              <li><strong className="text-white">Sunum:</strong> Varsa kutu, kalem veya diğer ek ürünlerin teklife dahil olup olmadığı.</li>
              <li><strong className="text-white">Toplam tutar:</strong> Ürün ve baskı bedelleri ile KDV kapsamı.</li>
            </ul>
            <p>Ürün kartındaki fiyat açıklamasını esas alın. Baskı hariç gösterilen bir tutarı baskılı toplam fiyat olarak değerlendirmeyin. Fiyatı bulunmayan modellerde güncel stok ve fiyat bilgisi için teklif isteyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Defter Kapağına Logo Baskısı</h2>
            <p>Serigraf, UV veya sıcak baskı gibi uygulamaların uygunluğu kapak malzemesine ve logo tasarımına göre değerlendirilir. Aynı yöntemin her kapakta uygulanabildiğini varsaymayın; model seçimi sırasında uygun tekniği ve baskı ölçüsünü teyit edin.</p>
            <p>Logonun konumunu belirlerken lastik, cep, dikiş, kalem tutucu ve varsa metal detayların yerini dikkate alın. Logonuzla birlikte firma adı veya iletişim bilgisi de kullanılacaksa bunların kapak üzerindeki okunurluğunu değerlendirin.</p>
            <p>Mümkünse vektörel logo dosyanızı paylaşın. Renkli logo mu yoksa kapak üzerinde daha sade bir uygulama mı istediğinizi belirterek yerleşimi, baskı alanını ve görsel onay sürecini sipariş öncesinde netleştirin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplu Logo Baskılı Defter Siparişi</h2>
            <p>İhtiyacınıza uygun teklif hazırlanabilmesi için şu bilgileri paylaşabilirsiniz:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Defterin model kodu, tercih ettiğiniz ebat ve kapak rengi.</li>
              <li>Toplam adet ve varsa farklı renklere göre adet dağılımı.</li>
              <li>Logo dosyası, baskı konumu ve uygulama tercihi.</li>
              <li>Varsa kalem veya kutu talebi, teslimat ili ve hedef teslim tarihi.</li>
            </ol>
            <p>Minimum sipariş adedi ve hazırlık süresi model, stok ve baskı planına göre değişir. Eğitim, fuar veya çalışan dağıtımı için sipariş verecekseniz tarih bilgisini baştan paylaşarak teslim planını teyit edin.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Logolu Defter İçin Teklif Al</Link>
            <p>Defterle birlikte sunmak için <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">logo baskılı kalem</Link> ve <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem seti modellerini</Link> inceleyebilirsiniz. Paket içeriğinin ve ek ürünlerin teklif kapsamını ayrıca netleştirin.</p>
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