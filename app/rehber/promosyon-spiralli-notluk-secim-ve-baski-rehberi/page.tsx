import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-spiralli-notluk-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-spiralli-notluk-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Spiralli Notluk Seçimi | İç Düzen ve Baskı Rehberi";
const DESCRIPTION = "Spiralli promosyon notlukları not alanı, yapışkanlı bölümler, spiral, kapak ve logo alanıyla karşılaştırın. Malzeme bilgisi ve toplu sipariş kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Her spiralli notlukta yapışkanlı not bölümü var mı?",
    "answer": "Hayır. Ana not bloğu, yapışkanlı not ve ayraç bölümleri model bazında kontrol edilmelidir. Bir modelde görülen bölümün bütün ürünlerde bulunduğu varsayılmamalıdır."
  },
  {
    "question": "Sayfa ile yaprak sayısı aynı mı?",
    "answer": "Aynı birim değildir. Bir yaprağın ön ve arka yüzü bulunur. Ana blok ve ek not bölümlerinin adetlerini ayrı öğrenin; farklı birimlerle verilen miktarları doğrudan karşılaştırmayın."
  },
  {
    "question": "Spiralli olması sayfaların koparılabilir olduğunu gösterir mi?",
    "answer": "Hayır. Spiral bağlantı ve kolay koparmaya yönelik perforasyon farklı özelliklerdir. Sayfa ayırma ihtiyacınız varsa seçilen modelin bu özelliğini ayrıca teyit edin."
  },
  {
    "question": "Kraft görünümlü kapak geri dönüştürülmüş malzeme mi?",
    "answer": "Renk veya görünüm tek başına malzeme içeriğini doğrulamaz. Geri dönüştürülmüş içerik, oran veya sertifika hakkında ifade kullanılacaksa ilgili modelin malzeme bilgisi ve varsa belgesi kontrol edilmelidir."
  },
  {
    "question": "Kalem tutucu bulunan notluğa kalem dahil mi?",
    "answer": "Tutucu bulunması kalemin dahil olduğunu göstermez. Görseldeki kalem, kutu ve diğer aksesuarların standart içeriğe dahil olup olmadığını teklifte ayrıca netleştirin."
  },
  {
    "question": "Spiralli notluk kapağına hangi baskı uygulanır?",
    "answer": "UV, serigrafi veya dijital gibi yöntemlerin uygunluğu kapak malzemesine ve seçilen modele bağlıdır. Kullanılabilir alan, logo ölçüsü ve yöntem tasarım üzerinden teyit edilmelidir."
  },
  {
    "question": "Kapak ölçüsü baskı alanı olarak kullanılabilir mi?",
    "answer": "Hayır. Spiral, kenarlar, kapanış parçaları ve yüzey yapısı uygulama alanını etkileyebilir. Logo için kullanılabilir ölçü ve yerleşim ayrıca onaylanmalıdır."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: "article",
    siteName: "FirmaPromosyon", locale: "tr_TR",
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Spiralli notluk ve ayrı yapışkanlı not bölümlerinin temsili görünümü" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}${IMAGE_PATH}`] },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: TITLE, description: DESCRIPTION, inLanguage: "tr-TR", mainEntityOfPage: PAGE_URL,
    image: [`${SITE_URL}${IMAGE_PATH}`],
    author: { "@type": "Organization", name: "FirmaPromosyon" },
    publisher: { "@type": "Organization", name: "FirmaPromosyon", url: SITE_URL },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: "Promosyon Spiralli Notluk Seçim ve Baskı Rehberi", item: PAGE_URL },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-600">
        <Link href="/" className="underline">Ana Sayfa</Link><span aria-hidden="true">/</span>
        <Link href="/rehber" className="underline">Rehber</Link><span aria-hidden="true">/</span>
        <span>Spiralli Notluk Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Spiralli Notluk Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Spiralli promosyon notluk seçerken önce not alma biçiminizi belirleyin: uzun toplantı notları mı, kısa hatırlatmalar mı, sayfa işaretleme mi? Ana not bloğu ile yapışkanlı bölümler farklı işlevler sunar. İç düzeni, spiral yapısını, malzeme bilgisini ve logo alanını birlikte değerlendirerek kurumsal dağıtım için doğru kapsamı oluşturabilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Açık spiralli notluk, renkli ayraçlar, yapışkanlı not bloğu ve kapalı kraft görünümlü notluk" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, malzeme içeriğini veya paket kapsamını göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Ana not alanıyla ek bölümleri ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-spiralli-notluk">Spiralli notluk modellerini</Link> incelerken ana yazım bloğunun yanında hangi bölümlerin bulunduğunu kontrol edin. Yapışkanlı notlar kısa hatırlatmalar, renkli ayraçlar ise sayfa işaretleme ihtiyacı için değerlendirilebilir. Bu bölümlerin her modelde aynı olduğu düşünülmemelidir.</p>
              <p>Uzun notlar tutulacaksa ana bloğun yazım alanı, kısa hatırlatmalar öncelikliyse ek notların yerleşimi daha belirleyici olabilir. Fotoğrafta görülen her parçanın ürün içeriğine dahil olduğunu kabul etmeden açıklamayı ve teklif kapsamını kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Adet bilgisini her bölüm için ayrı okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Sayfa ve yaprak aynı birim değildir; bir yaprağın iki yüzü bulunur. Bir üründe sayfa, diğerinde yaprak bilgisi verilmişse bu miktarları doğrudan yan yana koymayın. Adet bilgisinin hangi bölümü ve hangi birimi kapsadığını sorun.</p>
              <p>Ana not bloğuyla yapışkanlı notlar ve ayraçların miktarı ayrı bilgiler olabilir. Belirsiz bir adet ifadesini toplam yazım kapasitesi olarak yorumlamayın. Teklifte ana blok ile ek bölümlerin içeriği ayrı belirtilsin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Spiral konumu ve sayfa çevirme biçimini deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Spiralin konumu ve kapak yapısı, yazarken elin yerleşimini ve sayfa çevirmeyi etkileyebilir. Notluğu açıp hem sağ hem sol sayfada kısa bir yazım denemesi yapın. Kapak geriye katlanarak kullanılacaksa seçilen modelin bu kullanıma uygunluğunu numunede kontrol edin.</p>
              <p>Spiral cilt, sayfaların kolay koparılmasını sağlayan perforasyonla aynı özellik değildir. Notları ayırıp dağıtmanız gerekiyorsa uygun koparma yapısının bulunup bulunmadığını ayrıca öğrenin. Açıklamada belirtilmeyen bir kullanım özelliğini varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Notluk içeriğini kullanım ihtiyacına göre karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Her bölüm her üründe bulunmaz; model açıklamasını ve numuneyi esas alın.</caption>
              <thead><tr><th scope="col" className="border p-3">Bölüm veya özellik</th><th scope="col" className="border p-3">Kullanım amacı</th><th scope="col" className="border p-3">Kontrol edilecek bilgi</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Ana not bloğu</th><td className="border p-3">Uzun veya düzenli not alma</td><td className="border p-3">Ölçü, sayfa düzeni ve adet birimi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Yapışkanlı not bölümü</th><td className="border p-3">Kısa hatırlatma</td><td className="border p-3">Bölümün bulunması, boyutu ve miktarı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Renkli ayraç</th><td className="border p-3">Sayfa işaretleme</td><td className="border p-3">Bölümün bulunması ve paket kapsamı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Spiral bağlantı</th><td className="border p-3">Sayfa çevirme</td><td className="border p-3">Konum, kullanım hissi ve varsa perforasyon</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kalem tutucu</th><td className="border p-3">Kalemi yanında taşıma</td><td className="border p-3">Kalem uyumu ve dahil olup olmadığı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapak yüzeyi</th><td className="border p-3">Görünüm ve logo uygulaması</td><td className="border p-3">Malzeme bilgisi ve uygulanabilir alan</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ölçüyü iç düzenle birlikte karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Dış kapak ölçüsü, ana blok ve ek yapışkanlı not alanları aynı ölçüyü ifade etmez. Cebe veya etkinlik çantasına yerleştirme için dış ölçü ile kalınlığı; yazım ihtiyacı için ana bloğun kullanılabilir alanını kontrol edin.</p>
              <p>Kağıdın çizgili, düz veya farklı düzende olması not alma biçimini etkiler. Kağıt gramajı veya renk bilgisi varsa seçilen model üzerinden teyit edin. Gramajdan tek başına bütün kalemlerde aynı yazım sonucunu beklemeyin. Genel boyut ve sayfa karşılaştırması için <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi">defter ve ajanda seçim rehberine</Link> bakabilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak görünümünden çevresel iddia çıkarmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kraft görünümlü veya kahverengi kapak, tek başına geri dönüştürülmüş içerik oranını göstermez. Kapak, ana blok, yapışkanlı bölümler ve diğer parçaların malzemesi ayrı olabilir. Ürünün yalnızca renginden hareketle bütün bileşenler hakkında sonuç çıkarmayın.</p>
              <p><Link href="/promosyon-geri-donusumlu-urunler">Geri dönüşümlü ürünler</Link> grubunda bir seçenek değerlendirirken kurumsal iletişimde kullanacağınız malzeme ifadesini ürün bilgisiyle eşleştirin. Belirli oran veya sertifika belirtilecekse hangi parçayı kapsadığını ve varsa modele ait belgeyi teyit edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kalem ve diğer aksesuarların kapsamını sorun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kalem tutucusu veya yuva bulunması, kalemin standart içeriğe dahil olduğunu göstermez. Kullanılacak kalem ayrı seçiliyorsa gövdesinin tutucuya uyumunu kontrol edin. Fotoğraftaki aksesuarı dahil varsaymak yerine teklif kapsamına açıkça yazdırın.</p>
              <p>Kutu, ayrı ambalaj veya dağıtım paketi gerekiyorsa ihtiyacınızı baştan belirtin. Aynı notluğun aksesuar dahil ve hariç tekliflerini eşit koşullarda karşılaştırın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo yerleşimini spiral ve yüzeyle birlikte planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>UV, serigrafi veya dijital gibi uygulamaların uygunluğu model ve yüzeye göre değişir. Bir notluk için belirtilen yöntemi bütün kapaklarda mevcut kabul etmeyin. Logonun renk sayısı, ölçüsü ve kapak rengiyle görünümünü paylaşarak uygun yöntemi sorun.</p>
              <p>Kapak yerleşiminde spiralin bulunduğu kenarı işaretleyin; varsa kapanış parçasıyla logonun çakışmadığını kontrol edin. Logo dosyasını paylaşarak kullanılabilir alanı ölçülü bir tasarım üzerinde görün. Kapak renginin küçük yazı ve ince çizgilerin görünümüne etkisini değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune ve toplu sipariş onayını tamamlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numunede önce ana not bloğunda yazın, ardından yapışkanlı not ve ayraç bölümlerini ayrı inceleyin. Sayfa çevirirken spiral ve kapak kullanımını gözlemleyin. Seri sipariş içeriğini onaylarken hangi ek bölümün bulunduğunu da not edin; kapak baskısı için gerekiyorsa uygulamalı örnek isteyin.</p>
              <p>Talebinizi ana blok, yapışkanlı notlar, ayraçlar ve kalem kapsamı olarak ayırın. Her bölümün miktarı veya dahil olup olmadığı teklifte anlaşılır olsun. Logo uygulanacak kapak, ambalaj ve teslim koşulları bu içerikle birlikte fiyatlandırılsın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-6">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="text-lg font-semibold">{question}</h3>
                  <p className="mt-2 leading-7 text-gray-700">{answer}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="flex flex-wrap gap-3">
            <Link href="/promosyon-spiralli-notluk" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Spiralli Notluk Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
