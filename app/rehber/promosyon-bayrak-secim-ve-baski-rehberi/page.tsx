import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-bayrak-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-bayrak-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Bayrak Seçimi | Ölçü, Kesim ve Baskı Rehberi";
const DESCRIPTION = "Masa, makam, flama, yelken ve damla bayrakları kullanım yerine göre seçin. Kumaş ölçüsü, kesim, baskı yönü ile direk ve taban kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Masa bayrağında direk sayısı nasıl seçilir?",
    "answer": "Birlikte sergilenecek tasarım sayısını ve masa üzerindeki boşluğu esas alın. Standın dış ölçüsü, direklerin yerleşimi ve kumaşların birbirini örtüp örtmediği seçilen modelde değerlendirilmelidir."
  },
  {
    "question": "Flama ölçüsü kurulu sistemin yüksekliği mi?",
    "answer": "Hayır. Kumaş ölçüsüyle direk ve taban dahil toplam yükseklik farklıdır. Yerleşim için kurulu ölçüyü, tasarım için üretime ait baskı şablonunu ayrıca öğrenin."
  },
  {
    "question": "Kırlangıç ve düz kesimde aynı tasarım kullanılır mı?",
    "answer": "Kesim formu yazı ve logo için kullanılabilen alanı değiştirir. Nihai tasarım, seçilen kesimin şablonuna göre hazırlanmalı; kritik öğeler kesim ve dikiş bölgelerinden uzak tutulmalıdır."
  },
  {
    "question": "Arka yüzden görünen baskı çift yön baskı mı?",
    "answer": "Kumaşın arkasından görünen görüntü ile iki yüzde de doğru yönde okunacak üretim aynı talep değildir. Arka yüzün görünümü, katman yapısı ve baskı kapsamı sipariş öncesinde netleştirilmelidir."
  },
  {
    "question": "Yelken ve damla bayrakta taban dahil mi?",
    "answer": "Her modelde ortak dahil kapsamı varsayılmamalıdır. Kumaş, direk, taban ve bağlantı parçaları teklifte ayrı belirtilmeli; opsiyonel taban seçimi kullanım zeminiyle birlikte değerlendirilmelidir."
  },
  {
    "question": "Dış mekanda her hava koşulunda kullanılabilir mi?",
    "answer": "Böyle bir genel garanti verilmemelidir. Kullanım yeri, kurulum ve üreticinin kullanım sınırları seçilen sistem için teyit edilmeli; belirtilmeyen rüzgar dayanımı veya kullanım ömrü varsayılmamalıdır."
  },
  {
    "question": "Bayrak siparişinde hangi tasarım dosyası gerekir?",
    "answer": "Tercihen düzenlenebilir vektörel logo, marka renk bilgisi ve kullanılacak metinleri paylaşın. Dosya uygunluğu, üretim şablonu ve baskı yöntemi üreticiyle netleştirildikten sonra son tasarımı onaylayın."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Masa bayrağı ve yelken reklam bayrağının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Bayrak Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Bayrak Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Bayrak Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon bayrak seçiminde önce nerede ve hangi mesafeden görüleceğini belirleyin. Resepsiyon masasında kullanılan bir bayrakla fuar girişindeki reklam bayrağının ölçü, kurulum ve tasarım ihtiyacı farklıdır. Bu rehber, ürünleri kullanım senaryosuyla karşılaştırarak kesim formunu, baskı yönünü ve donanım kapsamını birlikte planlamanıza yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Lacivert masa bayrağı ve fuar alanında yelken bayrak" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, ölçüyü veya paket kapsamını göstermez. Direk ve tabanlar seçilen ürün için ayrıca doğrulanır.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Yerleşimi izleyicinin bakış noktasından planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-bayraklar">Promosyon bayrak modellerini</Link> seçerken önce masaüstü sunumu, makam odası veya etkinlik alanı kullanımını ayırın. Tasarımı kim, hangi yönden ve yaklaşık hangi mesafeden görecek? Bu sorular kumaş formunu ve kullanılacak metnin yoğunluğunu belirlemeye yardımcı olur.</p>
              <p>Resepsiyon için düşünülen masa bayrağının yüksekliğiyle görüşmeyi engellememesine, fuar yerleşiminde ise geçiş alanına taşmamasına dikkat edin. Makam bayrağı için zeminde ayrılacak alanı ve üst boşluğu birlikte ölçün. Sadece kumaşın ölçüsüne bakarak kurulu sistemin sığacağına karar vermeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Masa bayrağında tasarım sayısını standla eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Tekli veya çok direkli masa standlarında aynı anda sergilenecek tasarım sayısını belirleyin. Farklı markalar, şubeler ya da etkinlik tasarımları birlikte yer alacaksa her kumaş için ayrı dosya ve adet tanımlayın. Stand adedini toplam kumaş adediyle aynı bilgi olarak kullanmayın.</p>
              <p>L ve T masa formlarında kumaşın asılacağı biçim klasik küçük masa bayrağından farklı olabilir. Açık haldeki genişliği, direk ve taban ölçülerini öğrenin. Tasarım onayını yalnız düz görselde değil, ürün üzerindeki yönüyle de değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kumaş, kurulu yükseklik ve baskı şablonunu ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Katalogda verilen kumaş eni ve boyu, direkle birlikte oluşacak toplam yüksekliği açıklamaz. Kapalı mekanda tavan ve kapı yüksekliği, etkinlik alanında ise tabanın kapladığı yer ayrıca kontrol edilmelidir. Paketleme ve taşımada gerekli kapalı ölçü de farklı bir bilgidir.</p>
              <p>Üretim dosyasını dış ölçüye göre kendiniz ölçeklemek yerine seçilen modelin güncel şablonunu isteyin. Kesim hattı, dikiş ve direk geçişi gibi üretime ait alanlar dosyada gösterilmelidir. Yazı ve amblemi üreticinin belirlediği güvenli alan içinde tutun.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Bayrak türüne göre seçim tablosu</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">Kumaş ve donanım bilgilerini kullanım senaryosuyla birlikte değerlendirin.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Masa bayrağı</th><td className="border p-3">Yakın mesafede kurumsal sunum</td><td className="border p-3">Tasarım sayısı ve stand genişliği</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Makam bayrağı</th><td className="border p-3">Oda ve zemin yerleşimi</td><td className="border p-3">Kurulu yükseklik ve taban alanı</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Flama</th><td className="border p-3">Dikey mesaj ve kesim</td><td className="border p-3">Kumaş ölçüsü ve güvenli tasarım alanı</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Yelken / damla</th><td className="border p-3">Etkinlik ve reklam yerleşimi</td><td className="border p-3">Form, direk ve uygun taban kapsamı</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Ön–arka görünüm</th><td className="border p-3">İki yönden okunma ihtiyacı</td><td className="border p-3">Baskı ve katman yapısının teyidi</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">Kesim formuna göre mesajı yeniden yerleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Düz, kırlangıç ve beşgen kesimler aynı dikdörtgen tasarımı aynı biçimde taşımaz. Alt uçta yer alan bir slogan kesimden etkilenebilir. Yelken ve damla formlarında da kenar kıvrımları boyunca kullanılabilir alan değişir; büyük logoyu yalnız dış hatlara sığdırmak yeterli değildir.</p>
              <p>Uzaktan okunacak reklam bayrağında ana mesajı kısa tutun ve tasarımı hedef bakış mesafesine göre değerlendirin. İnce iletişim bilgileriyle kalabalık bir yerleşim yerine hangi bilginin önce görülmesini istediğinizi belirleyin. Son onayda harflerin kesime veya direk tarafına yaklaşmadığını kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı yönünü ve arka yüz beklentisini tarif edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bayrak hem önden hem arkadan görülecekse bunu teklif talebinde belirtin. Bir yüzeydeki baskının kumaş arkasından görünmesi, iki taraftaki yazının da doğru yönde okunacağı anlamına gelmez. Arka yüz görünümü ile bağımsız çift yönlü üretimi ayrı sorular olarak ele alın.</p>
              <p>Dijital, sublimasyon veya serigrafi uygunluğu seçilen kumaş ve modele göre teyit edilmelidir. Marka renkleri için referans paylaşın; renk değerlendirmesinde ekran görüntüsüyle yetinmeyin. Gerekli olduğunda fiziksel baskı örneği ve renk onayı sürecini üreticiyle görüşün.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Direk ve tabanı zemine göre netleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Yelken ve damla modellerinde taban seçenekleri opsiyonel olabilir. Kumaş, direk, taban ve bağlantı parçalarının hangilerinin teklife dahil olduğunu ayrı yazdırın. Su doldurulabilir veya sabit taban tercihini ürün adı üzerinden değil, kurulum zemini ve kullanım koşullarıyla birlikte değerlendirin.</p>
              <p>Üreticinin montaj ve kullanım talimatlarını isteyin. Dış mekan için belirtilmeyen rüzgar sınırı, devrilmeme garantisi veya kullanım ömrü vaat etmeyin. Etkinlik alanının kurulum kuralları varsa sistemi seçmeden önce paylaşın; tabanın geçiş ve çalışma alanına etkisini de planlayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş dosyasını tasarım ve donanım listesiyle tamamlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Her tasarım için ölçü, form, adet ve baskı yönünü kayıt altına alın. Mevcut direğe yalnız kumaş sipariş edilecekse uyumluluğu ayrıca doğrulayın. Benzer görünümlü bir kumaşın her direğe takılabileceğini varsaymayın.</p>
              <p>Logo dosyası, marka renkleri, kullanım yeri ve ihtiyaç tarihini teklif talebine ekleyin. Baskı, donanım, paketleme, KDV ve sevkiyat kapsamını öğrenin. Üretim öncesi son onayda kesim, ön–arka yön ve tasarım adetlerini birlikte kontrol edin; teslimatta aynı listeyle parçaları karşılaştırın.</p>
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
            <Link href="/promosyon-bayraklar" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Bayrak Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
