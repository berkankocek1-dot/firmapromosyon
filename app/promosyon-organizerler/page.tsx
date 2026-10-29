import Link from "next/link";
import OrganizerProductGrid from "./OrganizerProductGrid";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
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

const CATEGORY = "Organizerler";
const PAGE_URL = `${SITE_URL}/promosyon-organizerler`;
const PAGE_TITLE = "Promosyon Organizer Modelleri ve Fiyatları | Logo Baskılı";
const PAGE_DESCRIPTION =
  "Logo baskılı termo deri, hesap makineli ve metal tokalı organizer modellerini karşılaştırın. İç düzen, kapak ve toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon organizer minimum kaç adet sipariş edilir?",
    "answer": "Minimum adet modele, stok durumuna ve logo uygulamasına göre değişir. Ürün kodunu, rengi ve istediğiniz miktarı paylaşarak baskılı veya baskısız sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Termo deri organizer gerçek deri midir?",
    "answer": "Termo deri ifadesi tek başına gerçek deri olduğu anlamına gelmez. Kapak malzemesini ürünün teknik açıklamasından kontrol edin; gerçek deri gibi belirli bir malzeme talebiniz varsa teklif aşamasında ayrıca belirtip uygunluğu teyit edin."
  },
  {
    "question": "Organizer içindeki ajanda tarihli midir?",
    "answer": "Organizer veya ajanda adı, iç bloğun mutlaka tarihli olduğunu göstermez. İç sayfa düzeni, varsa takvim yılı, sayfa sayısı ve çizgili ya da farklı düzen bilgisi seçilen ürün için kontrol edilmelidir. Sayfa sayısı tek başına takvim veya günlük planlama düzenini belirtmez."
  },
  {
    "question": "Her organizerde hesap makinesi ve metal toka bulunur mu?",
    "answer": "Hayır. Bu özellikler modele göre değişir. Filtreleri kullanarak uygun modelleri ayırabilir, hesap makinesi, kapanış ve diğer bölmelerin bilgilerini ürün detayından kontrol edebilirsiniz."
  },
  {
    "question": "Organizer kapağına hangi logo uygulamaları yapılabilir?",
    "answer": "Seçilen malzeme ve yüzeye göre gofre, lazer, UV veya dijital uygulamalar değerlendirilebilir. Her yöntem her modele uygun değildir. Logonun renklerini, ölçüsünü ve istediğiniz konumu paylaşarak uygulanabilir alanı ve yöntemi teyit edin."
  },
  {
    "question": "Organizer fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Fiyat gösterilen ürün kartlarında tutar baskı hariçtir; KDV ayrıca belirtilir. Logo yöntemi, uygulama alanı, adet, varsa kutu ve paketleme talepleri teklif aşamasında netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyin."
  },
  {
    "question": "Toplu organizer siparişi ne kadar sürede hazırlanır?",
    "answer": "Stok, renk dağılımı, adet, logo onayı, uygulama yöntemi ve ambalaj talebi süreyi etkiler. Etkinlik tarihinizi ve teslimat adresini paylaşın; iç düzeni, logo yerleşimini, toplam bedeli ve net teslim süresini sipariş öncesinde teyit edin."
  }
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Organizer Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter((p) => p.category === CATEGORY));

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
              name: "Promosyon Organizerler",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Organizerler",
          url: PAGE_URL,
          description: PAGE_DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      {list.length > 0 && (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }} />
      )}

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
          <span className="font-semibold text-white">
            Promosyon Organizerler
          </span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Organizerler
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Termo deri, hesap makineli ve metal tokalı organizer modellerini
            inceleyin. Ölçü, iç sayfa düzeni, kapanış ve logo alanını
            karşılaştırarak kurumsal toplu siparişiniz için teklif alın.
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

      <OrganizerProductGrid products={list} />

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Toplantı ve Ofis Kullanımı İçin Organizer Seçimi</h2>
            <p>
              Organizer seçerken kapak görünümüyle birlikte not alma, taşıma ve
              günlük kullanım ihtiyacını değerlendirin. İç blok, kapanış ve
              varsa ek bölmeler model bazında değişir. Hediye edilecek ürünün
              alıcının çalışma biçimine uygun olması seçimde belirleyicidir.
            </p>
            <p>
              Yukarıdaki Hesap Makineli, Metal Tokalı, 336 Sayfa ve 352 Sayfa
              filtreleriyle seçenekleri ayırabilirsiniz. Bir ürün birden fazla
              özelliğe sahip olabilir; ölçü ve iç düzen bilgisini ilgili
              ürünün açıklamasından kontrol edin.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Organizer Özelliklerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Organizer özellikleri, kullanım ihtiyaçları ve kontrol edilecek ayrıntılar</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Özellik</th>
                    <th scope="col" className="px-4 py-3">Seçimdeki karşılığı</th>
                    <th scope="col" className="px-4 py-3">Kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Hesap makinesi", "Notlarla birlikte hesaplama ihtiyacı", "Seçilen modelde bulunması ve kullanım biçimi"],
                    ["Metal toka", "Kapağın kapanış yapısı", "Tokanın konumu ve logo alanına etkisi"],
                    ["336 veya 352 sayfa", "İç blok seçeneklerinin karşılaştırılması", "Çizgili düzen, varsa takvim yılı ve sayfa ölçüsü"],
                    ["Kapak ölçüsü ve malzemesi", "Taşıma, tutuş ve kurumsal sunum", "Dış ölçü ile iç blok ölçüsünün ayrı bilgileri"],
                  ].map(([feature, usage, detail]) => (
                    <tr key={feature}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{feature}</th>
                      <td className="px-4 py-4">{usage}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">İç Sayfa Düzeni ve Takvim Bilgisini Ayırın</h2>
            <p>
              Üründe organizer veya ajanda adının bulunması, iç bloğun mutlaka
              tarihli olduğu anlamına gelmez. Çizgili not sayfaları, tarih
              alanları ve varsa takvim yılı gibi ayrıntıları model için teyit
              edin. Sayfa sayısı tek başına günlük ya da haftalık düzeni belirtmez.
            </p>
            <p>
              Dış kapak ölçüsüyle yazı alanının ölçüsü aynı olmayabilir. Taşınacak
              çantayla boyut uyumunu, kapağın kapanışını ve varsa kalemlik ya da
              kartlık bölmelerini değerlendirin. İç bloğu sonradan yenilemek
              istiyorsanız çıkarılabilirlik ve uyumlu yedek blok bilgisini ayrıca sorun.
            </p>
            <p>
              Yalnızca not almak için daha sade bir ürün arıyorsanız{" "}
              <Link href="/promosyon-defter" className="font-semibold text-white underline underline-offset-4">promosyon defter modellerini</Link>;{" "}
              takvim odaklı planlama için{" "}
              <Link href="/promosyon-ajanda" className="font-semibold text-white underline underline-offset-4">ajanda seçeneklerini</Link>{" "}
              de karşılaştırabilirsiniz.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Termo Deri Kapak ve Logo Uygulaması</h2>
            <p>
              Termo deri ifadesini doğrudan gerçek deri olarak yorumlamayın.
              Kapak malzemesi ve yüzey dokusu ürünün teknik açıklamasından
              öğrenilmelidir. Renk seçimiyle birlikte logonun yüzey üzerindeki
              görünümünü ve uygulanabilir alanını değerlendirin.
            </p>
            <p>
              Uygun modellerde gofre, lazer, UV veya dijital uygulamalar
              değerlendirilebilir. Gofre ile iz bırakılan görünüm, lazer
              uygulaması ve renkli baskı aynı sonucu vermez. Yöntemi her
              modelin desteklediği uygulamalara ve logonuzun detayına göre seçin.
            </p>
            <p>
              Metal toka, dikiş ve farklı yüzey parçaları logo yerleşimini
              sınırlandırabilir. Mümkünse vektörel PDF, AI, EPS veya SVG
              dosyası paylaşın; konum, ölçü, renk ve varsa isim uygulaması
              talebini üretim öncesinde netleştirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Organizer Fiyatlarını Karşılaştırırken</h2>
            <p>
              Fiyat gösterilen ürün kartlarında bedel baskı hariçtir; KDV
              ayrıca belirtilir. Aynı ürün kodu, renk, adet ve logo kapsamını
              esas alarak teklifleri karşılaştırın. Fiyatı bulunmayan modeller
              için güncel teklif isteyebilirsiniz.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Kapak malzemesi, ölçü, kapanış ve iç sayfa yapısı.</li>
              <li>Hesap makinesi ve üründe belirtilen ek bölmeler.</li>
              <li>Logo yöntemi, uygulama alanı ve sipariş adedi.</li>
              <li>Varsa kutu, kişiselleştirme, paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Görseldeki kalem veya başka bir aksesuarın ürüne dahil olup
              olmadığını sorun. Yalnızca ürün birim fiyatını değil, baskılı
              siparişin toplam tutarını ve teslim kapsamını birlikte değerlendirin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toptan Organizer Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, rengi ve istediğiniz adedi belirleyin.</li>
              <li>İç sayfa düzeni, varsa takvim yılı ve ek özellikleri teyit edin.</li>
              <li>Logo dosyanızı, uygulama konumunu ve varsa isim isteğini paylaşın.</li>
              <li>Kutu, paketleme, teslimat adresi ve etkinlik tarihini belirtin.</li>
              <li>Stok, tasarım yerleşimi, toplam bedel ve teslim süresini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Organizeri bir hediye paketinde sunmak için{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>{" "}
              veya{" "}
              <Link href="/promosyon-kalem-setleri" className="font-semibold text-white underline underline-offset-4">kalem setleriyle</Link>{" "}
              birlikte planlayabilirsiniz. Parçaların kutuya uyumunu ve
              birlikte teslimat talebinizi ayrıca belirtin.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Organizer Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Promosyon Organizer Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
