import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-hesap-makinesi-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-hesap-makinesi-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Hesap Makinesi Seçimi | Ekran, Tuş ve Baskı Rehberi";
const DESCRIPTION = "Masaüstü hesap makinelerini ekran, tuş düzeni, gövde ve logo alanıyla karşılaştırın. Not ekranı seçeneklerini ve güç kaynağı için sorulacakları öğrenin.";
const FAQ_ITEMS = [
  {
    "question": "12 hane bilgisi bütün işlevleri açıklar mı?",
    "answer": "Hayır. Hane bilgisiyle yüzde, hafıza veya özel hesap işlevlerini aynı özellik olarak değerlendirmeyin. İhtiyacınız olan tuş ve işlevleri seçilen modelde ayrı doğrulayın."
  },
  {
    "question": "Eğimli ekran her masada daha rahat okunur mu?",
    "answer": "Okunabilirlik oturma konumu, ışık ve yerleşime göre değişebilir. Numuneyi gerçek çalışma yüksekliğinde deneyerek ekranı ve tuşlara erişimi değerlendirin."
  },
  {
    "question": "Not ekranlı model yazılanları dijital olarak saklar mı?",
    "answer": "Yazılabilir not ekranı ve kalem bulunması dijital kayıt, dosya aktarımı veya senkronizasyon olduğunu göstermez. Bu özellikler açıklanmıyorsa var kabul edilmemelidir."
  },
  {
    "question": "Hesap makineleri pil veya güneş enerjisiyle mi çalışır?",
    "answer": "Güç kaynağı model bilgisiyle teyit edilmelidir. Açıklamada belirtilmeyen pil tipi, güneş enerjisi veya çift güç özelliği fotoğraftan çıkarılamaz. Pilin dahil olup olmadığını da sorun."
  },
  {
    "question": "Gövde ölçüsü logo baskı ölçüsü mü?",
    "answer": "Hayır. Makinenin dış ölçüsüyle logo uygulama alanı ayrı bilgilerdir. Logoyu seçilen yüzeyin baskı alanında, gerçek ölçüde değerlendirin."
  },
  {
    "question": "Her hesap makinesine aynı baskı uygulanır mı?",
    "answer": "Baskı yöntemi gövde yüzeyine ve modele göre değişebilir. UV, tampon veya serigrafi uygunluğunu seçilen ürün ve logo dosyası üzerinden netleştirin."
  },
  {
    "question": "Koli içi adet minimum sipariş midir?",
    "answer": "Koli miktarı paketleme bilgisidir. Minimum sipariş, baskı hazırlığı, stok ve teslim süresi ayrıca teklif sırasında teyit edilmelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Masaüstü hesap makinesinin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Hesap Makinesi Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Hesap Makinesi Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Hesap Makinesi Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon hesap makinesi, gün içinde tekrar tekrar kullanılan bir masa aracıdır. Seçim sırasında ekranın okunması, tuşlara erişim ve masada kapladığı alanı birlikte değerlendirin. Bu rehber bağımsız masaüstü modellerini ele alır; not ekranını, güç kaynağını ve logo uygulamasını ayrı sorularla netleştirmenize yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Beyaz masaüstü hesap makinesi, boş not kağıdı ve kalem" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, güç kaynağını veya paket içeriğini göstermez. Kalem ve not kağıdı kullanım örneğidir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Önce günlük hesap işini tanımlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-hesap-makineleri">Promosyon hesap makinesi modellerini</Link> seçerken kullanıcıların hangi işlemleri sık yaptığını belirleyin. Sipariş miktarlarını toplamak, birim fiyatları çarpmak veya gün içindeki kısa hesapları kontrol etmek farklı tuş kullanım alışkanlıkları doğurabilir. Yalnız gövde rengine göre karar vermeyin.</p>
              <p>12 hane ifadesiyle yüzde, hafıza veya özel hesap işlevlerini birbirine karıştırmayın. Gerekli işlevlerin adını listeleyip ürün üzerinde karşılığını kontrol edin. Katalog açıklamasında bulunmayan bir işlevin benzer görünümlü bütün modellerde olduğunu varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ekranı ve tuşları çalışma konumunda deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Makineyi kullanacağınız masa yüksekliğinde, normal oturma konumunuzdan inceleyin. Ekran açısı ve çevredeki aydınlatma, rakamları okuma deneyimini etkileyebilir. Eğimli gövdeyi yalnız fotoğraf üzerinden değerlendirmek yerine numuneyle kullanım konumunu görün.</p>
              <p>Tuşların büyüklüğü, aralığı ve yerleşimi hızlı giriş sırasında önem kazanır. Alışık olduğunuz toplama, silme ve eşittir tuşlarının konumuna bakın. Numunede kısa bir işlem dizisini tekrarlayarak yanlış tuşa basma veya cihazın masada hareket etmesi gibi kullanım ayrıntılarını gözlemleyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Gövde boyutuyla baskı alanını ayrı ölçün</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Geniş bir makine her zaman geniş logo alanı sunmaz. Dış ölçüler masada kapladığı yeri, belirtilen baskı ölçüsü ise uygulama yüzeyini anlatır. Uzun ve dar bir logo ile kare amblemi aynı alanda farklı büyüklüklerde yerleştirmek gerekebilir.</p>
              <p>Ölçüler farklı birimlerle verilmişse karşılaştırmadan önce aynı birime çevirin. Masadaki kalemlik ve evrakların yanında kullanacağınız boşluğu dikkate alın. Logonun ekrana, tuşlara veya gövdenin açılır parçasına taşmadığını gerçek ölçülü tasarım onayında kontrol edin.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Masaüstü hesap makinesinde seçim tablosu</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">Modeli kullanım, yerleşim ve doğrulanmış teknik bilgilerle karşılaştırın.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Ekran</th><td className="border p-3">Çalışma konumundan okuma</td><td className="border p-3">Hane ile özel işlevleri ayırın</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Tuş düzeni</th><td className="border p-3">Tekrarlanan işlem dizisi</td><td className="border p-3">Silme ve işlem tuşlarının konumu</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Gövde</th><td className="border p-3">Masada ayrılan alan</td><td className="border p-3">Dış ölçü ile logo alanı farklıdır</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Not ekranı</th><td className="border p-3">Geçici yazım ihtiyacı</td><td className="border p-3">Kayıt ve aktarım varsaymayın</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Güç ve baskı</th><td className="border p-3">Model bazında teyit</td><td className="border p-3">Pil kapsamı ve yüzey uygunluğu</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">Not ekranını kayıt özelliğinden ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Yazılabilir ekran ve kalem bulunan bir model, kısa bir rakamı veya ara notu aynı gövdede tutmak için değerlendirilebilir. Yazma ve silme biçimini, kalemin yerini ve kapağın açıkken kapladığı alanı öğrenin. Bu ek bölümü, hesap makinesinin rakam ekranıyla aynı işlevde düşünmeyin.</p>
              <p>Not ekranı bulunması dijital saklama veya bilgisayara aktarım özelliğini kanıtlamaz. Toplantı defteriyle bütünleşik bir ürün arıyorsanız <Link href="/rehber/promosyon-hesap-makineli-organizer-secim-rehberi">hesap makineli organizer rehberini</Link> inceleyin. Orada iç blok ve dosya düzeni öne çıkarken burada bağımsız cihazın masa kullanımı önemlidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Güç kaynağını açıklamadan teyit edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Güç kaynağı belirtilmeyen modelde pil, güneş enerjisi veya çift güç desteği varmış gibi teklif hazırlamayın. Fotoğraftaki koyu bir panel de tek başına bu bilgiyi doğrulamaz. Seçilen ürünün nasıl çalıştığını ve varsa pil türünü tedarikçiye sorun.</p>
              <p>Pil gerekiyorsa kutuya dahil olup olmadığını, değiştirme bilgisini ve kullanım talimatının bulunup bulunmadığını öğrenin. Kurumsal dağıtımda cihazların teslim alınırken çalışmasının nasıl kontrol edileceğini önceden planlayın. Belirtilmeyen pil ömrü veya kesintisiz çalışma süresi vaat etmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo yöntemini yüzeye göre seçin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Tampon, serigrafi ve UV seçeneklerini bütün gövdelerde ortak kabul etmeyin. Seçilen modelin uygulama yüzeyi ve logo dosyasının renkleri üzerinden uygun yöntemi öğrenin. Tuş yazıları ve ekran çevresindeki işlevsel alanlar markalamayla kapanmamalıdır.</p>
              <p>Tasarım onayında logo yönünü kullanıcı otururken görülecek biçimde değerlendirin. Küçük baskı alanında ince yazı ve ayrıntıların okunmasını gerçek ölçüde kontrol edin. Modelin rengi, baskı konumu ve uygulanacak yüzey, onay görseliyle teklif kaydında aynı olsun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Toplu siparişi cihaz ve uygulama olarak netleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Teklif talebine model tercihi, adet ve logo dosyasını ekleyin. Ürün fiyatı, baskı hazırlığı, uygulama ve KDV kapsamını ayrı öğrenin. Varsa kalem, ambalaj veya pil gibi ek parçaların dahil olup olmadığını açıkça yazdırın.</p>
              <p>Koli içi adedi minimum sipariş olarak kullanmayın. Stok, baskı onayı ve teslim koşullarını dağıtım tarihiyle birlikte netleştirin. Numune kontrolünde ekran, tuşlar ve varsa not bölümü için baktığınız noktaları kaydedin; seri teslimatın kontrolünü aynı liste üzerinden yapın.</p>
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
            <Link href="/promosyon-hesap-makineleri" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Hesap Makinelerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
