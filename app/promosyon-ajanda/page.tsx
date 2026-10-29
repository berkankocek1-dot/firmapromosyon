import Link from "next/link";
import AjandaProductGrid from "./AjandaProductGrid";
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

const PAGE_URL = `${SITE_URL}/promosyon-ajanda`;
const CATEGORY_NAME = "Ajanda";

const faqItems = [
  {
    question: "Ajandanın hangi takvim yılına ait olduğunu nasıl öğrenebilirim?",
    answer:
      "Tarihli ajandalarda ürün detayındaki takvim bilgisini kontrol edin ve sipariş öncesinde güncel stokla birlikte yılı teyit edin. Yalnızca kapak fotoğrafına dayanarak karar vermeyin; teklif talebinizde kullanacağınız yılı belirtin.",
  },
  {
    question: "Günlük ve haftalık ajanda seçenekleri her modelde var mı?",
    answer:
      "İç sayfa düzeni modele bağlıdır. Ürün açıklamasında günlük veya haftalık düzen belirtilmiyorsa teklif aşamasında iç sayfa bilgisini isteyin. Her kapak modelinin iki düzenle de sunulduğunu varsaymayın.",
  },
  {
    question: "Promosyon ajanda minimum kaç adet yaptırılır?",
    answer:
      "Promosyon ajanda siparişlerinde minimum adet; seçilen modele, baskı türüne, stok durumuna ve üretim planına göre değişebilir. Bazı ajanda modelleri daha düşük adetlerde hazırlanabilirken, bazı ürünler toplu sipariş mantığıyla sunulabilir.",
  },
  {
    question: "Promosyon ajanda fiyatları neye göre değişir?",
    answer:
      "Promosyon ajanda fiyatları; ürün ölçüsü, kapak malzemesi, iç sayfa düzeni, baskı yöntemi, sipariş miktarı ve özel üretim taleplerine göre değişebilir. Termo deri, spiralli veya ciltli ajanda gibi farklı modeller farklı fiyat aralıklarında değerlendirilebilir.",
  },
  {
    question: "Logo baskılı ajandalarda hangi baskı türleri uygulanır?",
    answer:
      "Logo baskılı promosyon ajandalarda modele göre sıcak baskı, serigraf baskı, UV baskı, lazer veya yüzeye uygun farklı uygulamalar tercih edilebilir. Doğru baskı yöntemi ürün yüzeyi, logo detayı ve kullanım amacına göre belirlenmelidir.",
  },
  {
    question: "Promosyon ajanda siparişi ne kadar sürede hazırlanır?",
    answer:
      "Sipariş hazırlık süresi; stok durumu, sipariş adedi, baskı yoğunluğu ve onay sürecine göre değişebilir. Net teslim süresi, seçilen model ve sipariş detayları netleştikten sonra daha sağlıklı şekilde paylaşılır.",
  },
  {
    question: "Promosyon ajanda kimlere hediye edilir?",
    answer:
      "Promosyon ajanda; müşterilere, bayilere, iş ortaklarına, çalışanlara ve kurumsal etkinlik katılımcılarına verilebilecek prestijli promosyon ürünleri arasında yer alır. Özellikle yeni yıl döneminde ve kurumsal hediye çalışmalarında sık tercih edilir.",
  },
];

export const metadata: Metadata = {
  title:
    "Promosyon Ajanda Modelleri ve Fiyatları | Logo Baskılı",
  description:
    "Logo baskılı promosyon ajanda modellerini ebat, kapak ve iç sayfa özellikleriyle karşılaştırın. Kurumsal hediye ve toptan ajanda siparişi için teklif alın.",
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
    title: "Promosyon Ajanda Modelleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ajanda çeşitleri. Kurumsal toplu alım, marka tanıtımı ve hızlı teklif için inceleyin.",
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ajanda Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ajanda Modelleri | FirmaPromosyon",
    description:
      "Logo baskılı promosyon ajanda çeşitleri. Kurumsal toplu alım ve hızlı teklif.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function PromosyonAjandaPage() {
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
              name: "Promosyon Ajanda",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Ajanda",
          url: PAGE_URL,
          description:
            "Logo baskılı promosyon ajanda modelleri. Kurumsal toplu alım ve hızlı teklif.",
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
          <span className="font-semibold text-white">Promosyon Ajanda</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Logo Baskılı Promosyon Ajanda Modelleri
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Çalışanlarınız, müşterileriniz ve bayileriniz için ajanda modellerini
            ebat, kapak ve iç sayfa düzenine göre karşılaştırın. Firma logolu
            toplu sipariş için model kodu, adet ve baskı tercihinizle teklif isteyin;
            tarihli ürünlerde kullanacağınız takvim yılını ayrıca belirtin.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler?kategori=Ajanda"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ürünlerde Filtrele
            </Link>
          </div>
        </header>
      </section>

      <AjandaProductGrid products={filtered} />

      {filtered.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kurumsal Ajanda Seçiminde İç Düzen ve Kapak</h2>
            <p>Ajandayı günlük randevu takibi, haftalık planlama veya toplantı notları için mi kullanacağınızı belirleyerek başlayın. Kapak görselinin yanında ürün detaylarında belirtilen iç düzeni, ebatları ve cilt yapısını da inceleyin. Belirtilmeyen özellikleri teklif aşamasında teyit edebilirsiniz.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="sr-only">Promosyon ajanda seçiminde özellik ve kontrol tablosu</caption>
                <thead className="text-white"><tr>
                  <th scope="col" className="border-b border-white/20 p-3">Özellik</th>
                  <th scope="col" className="border-b border-white/20 p-3">Seçim açısından önemi</th>
                  <th scope="col" className="border-b border-white/20 p-3">Kontrol edilecek bilgi</th>
                </tr></thead>
                <tbody>
                  {[
                    ["İç sayfa düzeni", "Randevu ve not alma alışkanlığına uyum", "Günlük, haftalık veya modelde belirtilen diğer düzen"],
                    ["Takvim yılı", "Dağıtım ve kullanım dönemine uyum", "Tarihli modelin hangi yıla ait olduğu"],
                    ["Ebat", "Taşıma ve yazım alanı", "Santimetre ölçüsü ve ürün kalınlığı"],
                    ["Kapak", "Kurumsal renk ve logo uygulaması", "Malzeme, doku, renk ve baskı alanı"],
                    ["Cilt ve aksesuarlar", "Günlük kullanım biçimi", "Ciltli veya spiralli yapı; varsa lastik, cep ve kalem tutucu"],
                  ].map(([feature, purpose, check]) => (
                    <tr key={feature}>
                      <th scope="row" className="border-b border-white/10 p-3 font-semibold text-white">{feature}</th>
                      <td className="border-b border-white/10 p-3">{purpose}</td>
                      <td className="border-b border-white/10 p-3">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Günlük veya haftalık düzenin, bir aksesuarın ya da belirli bir kapak türünün tüm modellerde bulunduğunu varsaymayın. Aynı dış tasarıma sahip ürünlerde bile iç sayfa ve takvim bilgisi ayrıca kontrol edilmelidir.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Yeni Yıl Ajanda Siparişini Nasıl Planlamalısınız?</h2>
            <p>Tarihli ajandalarda teslim tarihi kadar kullanılacak takvim yılı da önemlidir. Ürün fotoğrafındaki yıl bilgisini esas almak yerine sipariş edeceğiniz modelin iç takvimini ve güncel stok bilgisini teyit edin.</p>
            <p>Dağıtım listesini çalışan, müşteri ve bayi gruplarına göre hazırlayarak toplam adedi belirleyebilirsiniz. Farklı kapak renkleri veya farklı logolar kullanılacaksa her grubun adetlerini ayrı paylaşın. Baskı ve varsa paketleme için gereken süreyi teslim planına dahil edin.</p>
            <p>Belirli bir takvim yılına bağlı olmayan not alma ürünü arıyorsanız <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">tarihsiz promosyon defter modellerini</Link> de inceleyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Ajanda Fiyatlarını Etkileyen Detaylar</h2>
            <p>Ajanda fiyatlarını karşılaştırırken ürünlerin ebat, kapak malzemesi, iç sayfa düzeni ve cilt özelliklerinin aynı olup olmadığına bakın. Toptan siparişin kapsamı, yalnızca kapak üzerindeki model görünümünden anlaşılamaz.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-white">Ürün bedeli:</strong> Model, ebat, kapak, iç sayfalar ve sipariş adedi.</li>
              <li><strong className="text-white">Logo uygulaması:</strong> Teknik, baskı ölçüsü, renkler ve uygulama yapılacak yüzeyler.</li>
              <li><strong className="text-white">Ek ürünler:</strong> Varsa kalem, kutu ve paketleme seçenekleri.</li>
              <li><strong className="text-white">Teklif toplamı:</strong> Ürün ve baskı bedelleri ile KDV kapsamı.</li>
            </ul>
            <p>Ürün kartındaki fiyat açıklamasını esas alın; baskı hariç gösterilen fiyatı logolu siparişin toplam bedeli olarak değerlendirmeyin. Fiyatı bulunmayan modeller için güncel stok ve fiyat bilgisi isteyebilirsiniz.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Ajanda Kapağına Firma Logosu Uygulaması</h2>
            <p>Sıcak baskı, serigraf veya UV gibi yöntemler kapak yüzeyine ve logo tasarımına göre değerlendirilir. Lazer uygulaması da yalnızca buna uygun yüzey veya detay bulunan modellerde ele alınmalıdır. Her tekniğin her kapakta uygulanabildiğini varsaymayın.</p>
            <p>Kapaktaki lastik, dikiş, cep ve varsa metal detayları dikkate alarak logo konumunu seçin. İnce yazıların okunurluğunu, kapak rengiyle kontrastı ve uygulanabilir baskı ölçüsünü sipariş öncesinde netleştirin.</p>
            <p>Teklif talebinde mümkünse vektörel logo dosyanızı paylaşın. Kapakta firma adının yanında slogan veya iletişim bilgisi de yer alacaksa tasarımın tamamını ileterek yerleşim ve onay sürecini belirleyin.</p>
          </section>

          <section className="mt-14 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplu Logo Baskılı Ajanda İçin Teklif Alın</h2>
            <p>Teklifin ihtiyacınıza göre hazırlanabilmesi için şu bilgileri paylaşabilirsiniz:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Model kodu, ebat, kapak rengi ve tercih ettiğiniz iç sayfa düzeni.</li>
              <li>Tarihli ürünlerde takvim yılı; toplam adet ve varsa renklere göre dağılım.</li>
              <li>Logo dosyası, baskı konumu ve varsa farklı tasarım talepleri.</li>
              <li>Varsa kalem veya kutu isteği, teslimat ili ve hedef teslim tarihi.</li>
            </ol>
            <p>Minimum adet ve hazırlık süresi seçilen modelin stok durumuna ve baskı planına göre değişir. Kurumsal dağıtım tarihini baştan paylaşarak ürün, baskı onayı ve teslimat adımlarını birlikte planlayın.</p>
            <Link href="/kurumsal-teklif-al" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Logolu Ajanda İçin Teklif Al</Link>
            <p>Ajandanın yanında sunmak için <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">logo baskılı kalem</Link> veya <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem seti modellerini</Link> değerlendirebilirsiniz. Kutunun ve ek ürünlerin teklif kapsamına dahil olup olmadığını ayrıca teyit edin.</p>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Ajanda Hakkında Sık Sorulan Sorular
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