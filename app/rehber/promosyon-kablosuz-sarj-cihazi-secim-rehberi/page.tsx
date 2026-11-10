import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kablosuz-sarj-cihazi-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-kablosuz-sarj-cihazi-secim-rehberi.jpg";
const TITLE = "Promosyon Kablosuz Şarj Cihazı Seçimi | Güç ve Uyumluluk";
const DESCRIPTION = "Kablosuz şarj standı ve istasyonlarını telefon, kılıf, adaptör ve eş zamanlı kullanım açısından değerlendirin. Kurumsal sipariş için uyumluluk tablosu hazırlayın.";
const FAQ_ITEMS = [
  {
    "question": "Kablosuz şarj cihazında neden kablo var?",
    "answer": "Kablosuz bağlantı, telefon ile şarj yüzeyi arasındadır. Şarj cihazının güç girişi için kablo ve uygun adaptör gerekebilir. Dahili batarya bulunduğu ayrıca belirtilmiyorsa kablosuz şarj işlevinden powerbank sonucu çıkarılmamalıdır."
  },
  {
    "question": "Üzerinde yazan watt değeri telefonun şarj hızı mı?",
    "answer": "Tek başına her telefonda elde edilecek hız garantisi değildir. Hangi çıkışı veya kullanım koşulunu anlattığı, telefonun desteği ve gerekli güç kaynağı seçilen ürün için öğrenilmelidir."
  },
  {
    "question": "Type-C giriş uygun adaptörü seçmek için yeterli mi?",
    "answer": "Hayır. Giriş soketinin yanında üreticinin önerdiği adaptör, giriş değerleri ve varsa gerekli güç protokolü de bilinmelidir. Aynı sokete sahip bütün adaptörlerin aynı sonucu vereceği varsayılmamalıdır."
  },
  {
    "question": "Çoklu istasyon bütün telefon, saat ve kulaklıklarla çalışır mı?",
    "answer": "Görseldeki şarj yüzeyleri bütün cihaz modellerini desteklediğini göstermez. Telefon, saat ve kulaklığın tam modelini bildirerek uyumluluğu ve birlikte şarj koşullarını teyit edin."
  },
  {
    "question": "Qi uyumlu ifadesi Qi sertifikalı demek mi?",
    "answer": "Aynı ifade değildir. Qi sertifikası talep ediliyorsa seçilen ürünün üretici ve model bilgisiyle WPC kayıtları eşleştirilmelidir. Katalog başlığından veya yalnızca bir logodan sertifika sonucu çıkarılmamalıdır."
  },
  {
    "question": "Manyetik tutuş kablosuz şarj uyumunu kanıtlar mı?",
    "answer": "Hayır. Tutunma, cihazın şarj desteği ve kılıfla uyum ayrı kontrol edilmelidir. Manyetik bir aksesuarın telefonu tutması tek başına istenen şarj performansını doğrulamaz."
  },
  {
    "question": "Hoparlörlü veya ışıklı modelin bütün işlevleri aynı anda çalışır mı?",
    "answer": "İşlevlerin tek tek listelenmesi, eş zamanlı çalışma biçimini veya güç paylaşımını açıklamaz. Gerekli adaptörü ve birden fazla işlev açıkken kullanım koşullarını model bazında öğrenin."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Güç kablosu bağlı kablosuz şarj standı ve düz şarj yüzeyinin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Kablosuz Şarj Cihazı Seçim Rehberi", item: PAGE_URL },
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
        <span>Kablosuz Şarj Cihazı Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Kablosuz Şarj Cihazı Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Kablosuz şarj cihazı seçimi, yalnızca katalogdaki watt değerini karşılaştırmak değildir. Hediye edilecek kişinin telefonu, kullandığı kılıf ve masadaki güç kaynağı birlikte düşünülmelidir. Bu rehber, tek telefon standı ile çoklu istasyon arasında karar vermek ve sipariş öncesinde cihaz–adaptör eşleşmesini netleştirmek için bir çalışma sırası sunar.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Telefon bulunan siyah kablosuz şarj standı ve beyaz düz şarj yüzeyi" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, güç değerini veya sertifika durumunu göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Önce şarj edilecek cihaz listesini çıkarın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-kablosuz-sarj-cihazi">Kablosuz şarj cihazı modellerini</Link> incelemeden önce telefonun tam modelini ve kullanılan kılıfı kaydedin. Çoklu istasyon düşünülüyorsa saat ile kulaklığın modelini de ekleyin. Aynı marka cihazlara sahip olmak bütün şarj alanlarında ortak uyum anlamına gelmez.</p>
              <p>Kurumsal dağıtımda tek bir çalışan telefonu üzerinden karar vermek yerine hedef cihaz gruplarını belirleyin. Teknik bilgisi açık olmayan eşleşmeleri tedarikçiye sorun. Uyum sağlanamayan cihaz grubu varsa farklı aksesuar seçimini ayrı değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kablosuz aktarım ile cihazın güç girişini ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kablosuz olan bölüm telefon ile şarj yüzeyi arasındaki bağlantıdır. Masaüstü şarj cihazının kendisi kabloyla bir güç kaynağına bağlanabilir. Ürün açıklamasında dahili batarya belirtilmiyorsa masa başından bağımsız enerji sağlayacağını varsaymayın.</p>
              <p>Type-C veya Micro giriş bilgisi soketi tarif eder; gereken adaptörü tek başına açıklamaz. Üreticinin önerdiği giriş değerleri, adaptör ve kablo koşullarını öğrenin. Gün içinde taşınabilir enerji ihtiyacı varsa <Link href="/rehber/promosyon-powerbank-secim-rehberi">powerbank seçim rehberi</Link> farklı bir karar alanını ele alır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Watt değerinin hangi koşula ait olduğunu sorun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Katalogdaki güç değeri telefonun her durumda aynı güçle şarj edileceğini göstermez. Bunun telefon yüzeyine ait değer mi, birden fazla çıkışın toplamı mı olduğu açık değilse netleştirin. Güç kaynağı ve telefon desteği açıklanmadan bir dolum süresi vaat etmeyin.</p>
              <p>Birden fazla yüzeyli üründe her alanın gücünü ve birlikte kullanımda paylaşımı ayrı sorun. Giriş bilgisi ile ilan edilen güç arasında açıklama gerektiren bir nokta varsa bunu sipariş öncesinde yazılı yanıtla tamamlayın; belirsizliği tahmini bir değerle doldurmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş öncesi uyumluluk tablosu</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Tabloyu seçilen ürün ve hedef cihazlara göre doldurarak belirsiz alanları tedarikçiye sorun.</caption>
              <thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Yazılı teyit</th><th scope="col" className="border p-3">Numune kontrolü</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Telefon</th><td className="border p-3">Tam model ve kablosuz şarj desteği</td><td className="border p-3">Kendi kılıfıyla yerleştirme</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Güç kaynağı</th><td className="border p-3">Önerilen adaptör ve giriş koşulları</td><td className="border p-3">Numunede kullanılan ekipman</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Çoklu istasyon</th><td className="border p-3">Her alan için desteklenen cihaz</td><td className="border p-3">Cihazların birlikte kullanımı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ek işlev</th><td className="border p-3">Hoparlör veya ışığın çalışma biçimi</td><td className="border p-3">Şarjla eş zamanlı kullanım</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Paket</th><td className="border p-3">Adaptör, kablo ve kutu kapsamı</td><td className="border p-3">Teslim edilecek parçaların listesi</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Yerleşimi telefon ve kılıfla deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Düz şarj yüzeyinde telefonun yerleşimi, dikey standda ise destek noktaları ve ekran açısı önemlidir. Apple, iPhone için şarj cihazının merkezine yerleştirmeyi ve kalın ya da metal kılıfta sorun yaşanırsa kılıfı çıkarmayı önerir. Diğer telefonlarda da kendi üreticisinin kullanım bilgisini esas alın.</p>
              <p>Manyetik tutuşu şarj uyumundan ayrı değerlendirin. Numunede hedef telefonu kendi kılıfıyla yerleştirin ve şarjın başladığını kontrol edin. Araç içi bağlantı veya masaüstü taşıma işlevi öncelikliyse <Link href="/rehber/promosyon-telefon-tutucu-secim-rehberi">telefon tutucu rehberi</Link> mekanik seçim ayrıntılarını tamamlar.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Çoklu istasyonda cihazları birlikte kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Telefon, saat ve kulaklık için ayrılmış görünen yüzeyler her modele uygun kabul edilmemelidir. Sipariş onayında hangi alanın hangi cihazla kullanılacağını açıkça belirtin. Gerekirse uyum bilgisini cihaz listesi üzerinde tek tek işaretleyin.</p>
              <p>Hoparlör veya aydınlatma gibi ek işlevler varsa şarjla aynı anda çalışma koşullarını sorun. Numune kontrolünü yalnız telefon şarjıyla bitirmeyin; satın alma gerekçeniz olan işlevleri gerekli güç kaynağıyla birlikte değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sertifika ifadesini model kaydıyla eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Wireless veya Qi uyumlu ifadesinden Qi sertifikası sonucu çıkarılmamalıdır. WPC, sertifikalı ürünlerin kendi ürün veritabanından kontrol edilmesini belirtir. Böyle bir özellik talep ediyorsanız üretici, ürün adı ve model bilgisini ilgili kayıtla eşleştirin.</p>
              <p>Bu rehberdeki temsili görsel veya kategoride listelenme, herhangi bir modelin sertifikalı olduğunu göstermez. Sertifika talebinizi ürün seçim aşamasında belirtin; doğrulanmayan bir işareti kurumsal sunumda ürün özelliği olarak kullanmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Markalama ve teslim kapsamını kullanım planına bağlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Işıklı logo ile renkli baskı farklı uygulama biçimleridir. Telefon standdayken markanın nerede görüneceğini ve şarj yüzeyi çevresindeki uygun alanı seçilen model için onaylayın. Işık özelliğinin çalışma koşullarını da şarj işlevinden ayrı öğrenin.</p>
              <p>Teklifte cihaz modeli, önerilen adaptör, bağlantı kablosu ve markalama ayrı tanımlansın. Adaptör veya kablo dahil değilse kurumsal dağıtım paketine eklenip eklenmeyeceğini baştan kararlaştırın. Numune değerlendirmesinde kullanılan ekipmanla teslim edilen ekipmanın aynı kapsamda olduğunu kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teknik başvuru kaynakları</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-700">
              <li><a href="https://support.apple.com/en-la/108377" className="underline">Apple: iPhone ile kablosuz şarj kullanımı</a> — iPhone yerleşimi, güç bağlantısı ve kılıfla kullanım bilgileri.</li>
              <li><a href="https://www.wirelesspowerconsortium.com/knowledge-base/testing-and-certification/qi-certified-products/" className="underline">WPC: Qi sertifikalı ürünlerin doğrulanması</a> — ürün kaydını üretici ve model bilgisiyle kontrol etme.</li>
            </ul>
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
            <Link href="/promosyon-kablosuz-sarj-cihazi" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Kablosuz Şarj Cihazlarını İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
