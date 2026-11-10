import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-telefon-tutucu-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-telefon-tutucu-secim-rehberi.jpg";
const TITLE = "Promosyon Telefon Tutucu Seçimi | Cihaz Uyumu ve Logo Rehberi";
const DESCRIPTION = "Masaüstü ve araç içi promosyon telefon tutucuları cihaz, kılıf, denge ve logo alanıyla karşılaştırın. Şarj özelliği, numune ve toplu sipariş kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Telefon tutucu her telefonla kullanılabilir mi?",
    "answer": "Evrensel uyum varsayılmamalıdır. Telefonun kılıflı ölçüsü, ağırlığı, destek alanı ve varsa bağlantı sistemi seçilen model üzerinden kontrol edilmelidir."
  },
  {
    "question": "Masaüstü standı araç içinde kullanabilir miyim?",
    "answer": "Masaüstü ve araç içi modellerin kullanım biçimleri farklıdır. Araç için tasarlanmış bağlantı sistemini ve araçla uyumunu seçilen ürünün kullanım bilgisine göre doğrulayın."
  },
  {
    "question": "Katlanabilir bir standın yüksekliği de ayarlanır mı?",
    "answer": "Katlanma, açı ayarı ve yükseklik ayarı farklı özelliklerdir. Modelin hangi hareketleri desteklediğini ürün açıklaması ve numuneden kontrol edin."
  },
  {
    "question": "Telefon tutucu telefonu şarj eder mi?",
    "answer": "Yalnızca şarj özelliği açıkça belirtilen modeller bu amaçla değerlendirilmelidir. Stand veya tutucu adı tek başına şarj işlevi olduğunu göstermez."
  },
  {
    "question": "Manyetik tutucu kılıflı telefonla çalışır mı?",
    "answer": "Uyum telefon, kılıf ve tutucunun bağlantı sistemine bağlıdır. Manyetik tutunma ile kablosuz şarj uyumu ayrı değerlendirilmelidir; kendi cihazınız ve kılıfınızla numune kontrolü yapın."
  },
  {
    "question": "Ahşap telefon tutucu geri dönüştürülmüş ürün müdür?",
    "answer": "Ahşap olması veya geri dönüşümlü ürünler kategorisinde listelenmesi geri dönüştürülmüş içerik oranını ya da sertifikayı tek başına doğrulamaz. Böyle bir özellik iletişimde kullanılacaksa modelin malzeme bilgisi ve varsa belgesi teyit edilmelidir."
  },
  {
    "question": "Telefon tutucuya logo nasıl uygulanır?",
    "answer": "Yöntem malzemeye ve uygulanabilir yüzeye bağlıdır. Logonun ölçüsü ve konumu cihaz destek alanı, hareketli parçalar ve varsa şarj bölgesi dikkate alınarak seçilen model için onaylanmalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Ahşap ve ayarlanabilir metal masaüstü telefon standlarının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Telefon Tutucu Seçim Rehberi", item: PAGE_URL },
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
        <span>Telefon Tutucu Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Telefon Tutucu Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon telefon tutucu seçerken önce ürünün nerede kullanılacağını belirleyin. Masada not alırken ekranı görünür tutmak ile araç içi bağlantı ihtiyacı farklı modeller gerektirir. Cihaz ve kılıf uyumunu, dengeyi, varsa şarj özelliğini ve logo alanını birlikte değerlendirerek toplu siparişe hazırlanın.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Ahşap telefon tutucu ve üzerinde telefon bulunan ayarlanabilir metal stand" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, şarj özelliğini veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Masaüstü ve araç içi kullanımını ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-telefon-tutucu">Telefon tutucu ve stand modellerini</Link> kullanım ortamına göre karşılaştırın. Masaüstünde tabanın kapladığı alan, bakış açısı ve telefonu yerleştirme kolaylığı öne çıkar. Araç içi modelde ise bağlantı biçimi ve araçla uyum belirleyicidir.</p>
              <p>Masaüstü için tasarlanmış ürünü araç içi bağlantının yerine düşünmeyin. Araç modelinde montaj yeri ve bağlantı uyumunu üreticinin kullanım bilgisine göre doğrulayın. Görseldeki yerleşimin her araçta aynı şekilde uygulanabileceğini varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Telefonu kılıfıyla birlikte değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Karşılaştırma için telefonun kılıflı kalınlığını, genişliğini ve ağırlığını esas alın. Cihazın oturduğu yuva, destek kenarı veya bağlantı yüzeyi bu ölçülerle birlikte değerlendirilmelidir. Kamera çıkıntısı ve kılıf üzerindeki ek parçalar yerleşimi etkileyebilir.</p>
              <p>Ürün açıklamasında cihaz ölçüsü veya taşıma sınırı varsa bu bilgiyi kontrol edin. Belirtilmiyorsa bütün telefonlara uygun olduğunu kabul etmeyin. Numuneyi hedef kullanıcıların cihazları ve kılıflarıyla denemek seçim belirsizliğini azaltır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Denge, açı ayarı ve katlanma özelliklerine bakın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Taban yapısı, temas yüzeyi ve telefonun konumu masaüstü kullanımını etkiler. Yatay ve dikey yerleşim gerekiyorsa iki konumu da numunede deneyin. Ekrana hafifçe dokunurken ürünün kullanım hissini gözlemleyin; model bilgisi olmadan kaymazlık veya devrilmezlik garantisi çıkarmayın.</p>
              <p>Katlanabilir, açı ayarlı ve yükseklik ayarlı ifadeleri aynı şeyi anlatmaz. İstenen hareketin seçilen üründe bulunduğunu teyit edin. Taşınabilirlik önemliyse kapalı ölçüsünü ve mekanizmanın kullanımını da inceleyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Seçenekleri hangi ölçütle karşılaştırmalısınız?</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Özellikler modele göre değişir; aynı üründe birden fazla özellik bulunabilir.</caption>
              <thead><tr><th scope="col" className="border p-3">Seçenek</th><th scope="col" className="border p-3">Kullanım önceliği</th><th scope="col" className="border p-3">Kontrol edilecek bilgi</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Ahşap masaüstü</th><td className="border p-3">Sabit masa kullanımı ve yüzey görünümü</td><td className="border p-3">Yuva ölçüsü, kılıflı cihaz ve logo alanı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Katlanabilir stand</th><td className="border p-3">Taşıma kolaylığı</td><td className="border p-3">Kapalı ölçü ve desteklenen ayarlar</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ayarlanabilir metal stand</th><td className="border p-3">Ekran konumu</td><td className="border p-3">Açı veya yükseklik ayarı ve taban dengesi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Aynalı stand</th><td className="border p-3">Stand ve ayna kullanımının birlikte değerlendirilmesi</td><td className="border p-3">Cihaz yerleşimi ve kullanılabilir yüzeyler</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Araç içi tutucu</th><td className="border p-3">Araçla uyumlu bağlantı</td><td className="border p-3">Montaj sistemi, cihaz ve kılıf uyumu</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Şarj özellikli tutucu</th><td className="border p-3">Taşıma ve şarj ihtiyacı</td><td className="border p-3">Cihaz uyumu, güç gereksinimi ve aksesuar kapsamı</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Tutucu ile şarj cihazının özelliklerini ayrı okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Standın telefonu taşıması şarj ettiği anlamına gelmez. Kablosuz şarj veya güç değeri yalnızca bu özelliğin belirtildiği model için değerlendirilmelidir. Genel bir kategori başlığından bütün ürünlere aynı özellik aktarılmamalıdır.</p>
              <p>Manyetik bağlantı ve kablosuz şarj uyumu ayrı konulardır. Telefon, kılıf ve ürünün teknik bilgilerini birlikte kontrol edin. Şarj özellikli modelde güç değeri, uygun adaptör ve kablo gereksinimi ile paket içeriğini sorun. İlgili ürün grubu için <Link href="/promosyon-kablosuz-sarj-cihazi">kablosuz şarj cihazlarını</Link> da inceleyebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Malzemeyi çevresel iddialardan ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ahşap, metal ve plastik seçenekleri yüzey hissi, görünüm ve kullanım biçimi açısından değerlendirin. Ahşap yüzeyde doğal desen veya ton farkları bulunabilir; görsel beklentisini numuneyle netleştirin. Metal bir modelin bütün parçalarının aynı malzemeden olduğunu varsaymayın.</p>
              <p><Link href="/promosyon-geri-donusumlu-urunler">Geri dönüşümlü ürünler</Link> kategorisinde listelenmek, ürünün belirli oranda geri dönüştürülmüş içerik veya sertifika taşıdığını tek başına göstermez. Kurumsal iletişimde böyle bir ifade kullanılacaksa seçilen modele ait bilgi ve varsa belge üzerinden ilerleyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo alanını kullanım yüzeyiyle birlikte planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Logo yöntemi ahşap, metal veya plastik yüzeye göre değişebilir. Baskı ya da lazer uygunluğu her model için ayrıca teyit edilmelidir. Telefon yerleştirildiğinde logonun görünürlüğünü de değerlendirin; yalnızca boş ürün fotoğrafına göre karar vermeyin.</p>
              <p>Yerleşim onayını telefon takılı ve çıkarılmış durumları düşünerek verin: logo cihazın arkasında kalıyor mu, ayar yapıldığında görünümü değişiyor mu? Destek noktaları, hareketli parçalar ve varsa şarj bölgesinin uygulamaya uygunluğu seçilen model için netleşsin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numuneyi gerçek kullanım düzeninde deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kılıflı cihazı yerleştirme ve çıkarma, ekran açısı, taban dengesi ve varsa ayar mekanizmasını kontrol edin. Numunenin seri siparişle aynı model ve yapıda olduğunu doğrulayın. Şarj özelliği varsa uyumu kullanılacak cihaz ve gerekli ekipmanla değerlendirin.</p>
              <p>Telefon yerleştirildiğinde logonun görünürlüğünü de numune değerlendirmesine ekleyin. Renkli baskı veya yüzey uygulamasının sonucunu görmek gerekiyorsa uygulamalı örnek isteyin; boş stand fotoğrafını cihazla kullanımın yerine koymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Toplu teklifin kapsamını netleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Model, adet, renk, kullanım ortamı ve hedef cihaz bilgisini paylaşın. Logo dosyası, uygulama ölçüsü, teslim adresi ve ihtiyaç tarihini ekleyin. Varsa araç bağlantı parçaları, adaptör, kablo ve kutunun pakete dahil olup olmadığını yazılı netleştirin.</p>
              <p>Araç içi modelde bağlantı parçalarının, şarj özellikli modelde gerekli kablo ve adaptörün teklif kapsamını kontrol edin. Masaüstü standında ise kapalı ölçü ve varsa ayar özelliği ihtiyacınızla eşleşsin. Diğer cihaz aksesuarları için <Link href="/promosyon-teknolojik-urunler">teknolojik promosyon ürünlerini</Link> inceleyebilirsiniz.</p>
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
            <Link href="/promosyon-telefon-tutucu" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Telefon Tutucu Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
