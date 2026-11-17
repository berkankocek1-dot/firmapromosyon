import Image from "next/image";
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
    <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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

      <section className="rounded-2xl bg-gray-50 px-6 py-7 text-black md:px-8 md:py-9 border border-gray-200">
        <nav className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-black hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-black hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-black">Promosyon Defter</span>
        </nav>

        <header><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">
            Logo Baskılı Tarihsiz Promosyon Defter Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
            Toplantı notları, çalışan kitleri ve müşteri hediyeleri için tarihsiz
            defterleri ebat, kapak ve iç sayfa özelliklerine göre karşılaştırın.
            Logolu toplu sipariş için model kodu, adet ve baskı tercihinizle
            kurumsal teklif isteyin.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler?kategori=Tarihsiz%20Defter"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Ürünlerde Filtrele
            </Link>
          </div>
        </div>{filtered[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-tarihsiz-defter-td-100-v2-clean.webp" alt={filtered[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>
      </section>

      <DefterProductGrid products={filtered} />

      {filtered.length > 0 && (
        <div className="mt-14 rounded-2xl bg-gray-50 px-6 py-8 text-black md:px-8 md:py-10 border border-gray-200">
          <section className="max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Tarihsiz Defter Seçerken Hangi Özelliklere Bakılmalı?</h2>
            <p>Defter seçiminde dış görünüm kadar kullanım biçimi de önemlidir. Çantada taşınacak bir ürün ile masada toplantı notları için kullanılacak bir modelde farklı ebatlar tercih edilebilir. Ürün detaylarında belirtilen ölçüleri, kapak yapısını ve iç sayfa özelliklerini birlikte inceleyin.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Kurumsal defter seçiminde özellik ve sipariş kontrol tablosu</caption>
                <thead className="text-black"><tr>
                  <th scope="col" className="border-b border-gray-200 p-3">Özellik</th>
                  <th scope="col" className="border-b border-gray-200 p-3">Seçime etkisi</th>
                  <th scope="col" className="border-b border-gray-200 p-3">Kontrol edilecek bilgi</th>
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
                      <th scope="row" className="border-b border-gray-200 p-3 font-semibold text-black">{feature}</th>
                      <td className="border-b border-gray-200 p-3">{effect}</td>
                      <td className="border-b border-gray-200 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Bir aksesuarın veya sayfa özelliğinin tüm modellerde bulunduğunu varsaymayın. Özellikle sayfa sayısı ile yaprak sayısını aynı kabul etmeden ürün açıklamasını kontrol edin; belirtilmeyen ayrıntıları teklif aşamasında sorun.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Tarihsiz Defter mi, Ajanda mı?</h2>
            <p>Tarihsiz defter belirli bir takvim yılına bağlı olmadan not almak için kullanılabilir. Yıl içinde farklı tarihlerde yapılan eğitimler, çalışan başlangıç paketleri ve toplantı dağıtımları için bu esneklik değerlendirilebilir.</p>
            <p>Gün, hafta veya ay bazında tarihli planlama arıyorsanız <Link href="/promosyon-ajanda" className="font-semibold text-black underline underline-offset-4">promosyon ajanda modellerini</Link> de inceleyin. Tarihsiz defter seçiminde ise iç sayfa düzeninin kullanım amacınıza uygunluğunu kontrol edin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Defter Fiyatlarını Nasıl Karşılaştırmalısınız?</h2>
            <p>Benzer görünümlü iki defterin ebatları, kapak malzemesi, sayfa sayısı ve cilt yapısı farklı olabilir. Toptan siparişte karşılaştırmayı aynı özellikler üzerinden yapın; ürün fiyatının yanında logo uygulamasının kapsamını da netleştirin.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-black">Ürün:</strong> Model kodu, ebat, kapak, iç sayfa yapısı ve sipariş adedi.</li>
              <li><strong className="text-black">Baskı:</strong> Uygulama yöntemi, logo boyutu, renk sayısı ve baskı yapılacak yüzeyler.</li>
              <li><strong className="text-black">Sunum:</strong> Varsa kutu, kalem veya diğer ek ürünlerin teklife dahil olup olmadığı.</li>
              <li><strong className="text-black">Toplam tutar:</strong> Ürün ve baskı bedelleri ile KDV kapsamı.</li>
            </ul>
            <p>Ürün kartındaki fiyat açıklamasını esas alın. Baskı hariç gösterilen bir tutarı baskılı toplam fiyat olarak değerlendirmeyin. Fiyatı bulunmayan modellerde güncel stok ve fiyat bilgisi için teklif isteyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Defter Kapağına Logo Baskısı</h2>
            <p>Serigraf, UV veya sıcak baskı gibi uygulamaların uygunluğu kapak malzemesine ve logo tasarımına göre değerlendirilir. Aynı yöntemin her kapakta uygulanabildiğini varsaymayın; model seçimi sırasında uygun tekniği ve baskı ölçüsünü teyit edin.</p>
            <p>Logonun konumunu belirlerken lastik, cep, dikiş, kalem tutucu ve varsa metal detayların yerini dikkate alın. Logonuzla birlikte firma adı veya iletişim bilgisi de kullanılacaksa bunların kapak üzerindeki okunurluğunu değerlendirin.</p>
            <p>Mümkünse vektörel logo dosyanızı paylaşın. Renkli logo mu yoksa kapak üzerinde daha sade bir uygulama mı istediğinizi belirterek yerleşimi, baskı alanını ve görsel onay sürecini sipariş öncesinde netleştirin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Toplu Logo Baskılı Defter Siparişi</h2>
            <p>İhtiyacınıza uygun teklif hazırlanabilmesi için şu bilgileri paylaşabilirsiniz:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Defterin model kodu, tercih ettiğiniz ebat ve kapak rengi.</li>
              <li>Toplam adet ve varsa farklı renklere göre adet dağılımı.</li>
              <li>Logo dosyası, baskı konumu ve uygulama tercihi.</li>
              <li>Varsa kalem veya kutu talebi, teslimat ili ve hedef teslim tarihi.</li>
            </ol>
            <p>Minimum sipariş adedi ve hazırlık süresi model, stok ve baskı planına göre değişir. Eğitim, fuar veya çalışan dağıtımı için sipariş verecekseniz tarih bilgisini baştan paylaşarak teslim planını teyit edin.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Logolu Defter İçin Teklif Al</Link>
            <p>Defterle birlikte sunmak için <Link href="/promosyon-kalem" className="font-semibold text-black underline underline-offset-4">logo baskılı kalem</Link> ve <Link href="/promosyon-kalem-setleri" className="font-semibold text-black underline underline-offset-4">kalem seti modellerini</Link> inceleyebilirsiniz. Paket içeriğinin ve ek ürünlerin teklif kapsamını ayrıca netleştirin.</p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-black">
              Promosyon Defter Hakkında Sık Sorulan Sorular
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-black">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <section aria-label="Defter alt kategorileri" className="mt-10 rounded-2xl bg-white p-6">
        <h2 className="text-xl font-bold !text-black">Defterleri Özelliklerine Göre İnceleyin</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><Link href="/promosyon-kalem-tutuculu-defter" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Kalem Tutuculu Defter Modellerini İncele →</Link>
        <Link href="/promosyon-metal-detayli-defter" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Metal Detaylı Defter Modellerini İncele →</Link>
        <Link href="/promosyon-kareli-defter" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Kareli Defter Modellerini İncele →</Link>
        <Link href="/promosyon-cep-mini-boy-defter" className="flex min-h-14 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-gray-400 hover:bg-gray-50">Cep ve Mini Boy Defter Modellerini İncele →</Link></div>
      </section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-defter-ajanda-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Defter ve Ajanda Seçim Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
    </div></div>
  );
}
