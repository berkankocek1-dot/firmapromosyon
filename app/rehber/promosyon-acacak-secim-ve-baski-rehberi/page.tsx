import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-acacak-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-acacak-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Açacak Seçimi | Form ve Logo Baskı Rehberi";
const DESCRIPTION = "Bağımsız açacak ve açacaklı anahtarlığı kullanım, form, logo alanı ve dağıtım biçimiyle karşılaştırın. Baskı yerleşimi ve toplu sipariş kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Bağımsız açacak ile açacaklı anahtarlık arasındaki fark nedir?",
    "answer": "Bağımsız açacak ile anahtarlık halkası bulunan ürün farklı taşıma ve sunum biçimleri sunar. Açacak işlevinin yanında anahtarlık olarak taşıma ihtiyacı olup olmadığını belirleyerek seçim yapın."
  },
  {
    "question": "Uzun açacak kare modelden daha mı iyi?",
    "answer": "Yalnız gövde formundan genel bir üstünlük sonucu çıkarılmamalıdır. Tutuşu, logo oranını, taşıma ve sunum biçimini seçilen ürünün ölçüsü ve numunesiyle değerlendirin."
  },
  {
    "question": "Açacağın ölçüsü logo baskı alanı mı?",
    "answer": "Hayır. Gövde ölçüsü ile kullanılabilir uygulama alanı farklıdır. Açma bölümü, delik, kenar ve varsa halka bağlantısı dikkate alınarak net alan ayrıca belirlenmelidir."
  },
  {
    "question": "Her promosyon açacak mıknatıslı mı?",
    "answer": "Hayır. Fotoğraf veya düz gövde mıknatıs özelliğini doğrulamaz. Böyle bir kullanım isteniyorsa seçilen modelde bulunduğu sipariş öncesinde teyit edilmelidir."
  },
  {
    "question": "Açacaklı anahtarlığa da UV baskı yapılır mı?",
    "answer": "Bağımsız açacak için belirtilen yöntemi bütün anahtarlık modellerine aktarmayın. Malzeme, kaplama ve uygulanabilir yüzey seçilen ürün üzerinden kontrol edilmelidir."
  },
  {
    "question": "Ürün fiyatı baskı dahil toplam tutar mı?",
    "answer": "Baskı dahil olduğu açıkça belirtilmedikçe böyle değerlendirilmemelidir. Model, adet, uygulama yüzü ve tasarım kapsamını bildirerek ürün ile markalama bedelini netleştirin."
  },
  {
    "question": "Kapak açacak bütün kapak türlerine uygun mu?",
    "answer": "Ürün adından her kapak türünü açabildiği sonucu çıkarılmamalıdır. Hedef kullanım ve açılacak kapak tipini belirtip seçilen ürünün uygunluğunu teyit edin."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Bağımsız açacak ve açacaklı anahtarlığın temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Açacak Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Açacak Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Açacak Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon açacak seçerken önce ürünün nasıl kullanılacağını ve dağıtılacağını belirleyin. İkram alanında bağımsız kullanılacak bir açacakla anahtarlıkta taşınacak seçenek aynı sunum ihtiyacını karşılamayabilir. Gövde formunu, gerçek logo alanını ve baskı kapsamını birlikte değerlendirerek kurumsal siparişi planlayabilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Uzun metal görünümlü açacak ve halkalı lacivert açacaklı anahtarlık" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, malzemeyi veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Bağımsız açacak mı, anahtarlıkta taşınan seçenek mi?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-acacak">Bağımsız promosyon açacakları</Link> ikram alanı, etkinlik paketi veya ayrı dağıtım için değerlendirebilirsiniz. Anahtarlık halkasıyla taşıma öncelikliyse <Link href="/promosyon-acacakli-anahtarlik">açacaklı anahtarlık modellerine</Link> bakın. İki grupta da ürünün kullanım ve logo alanını kendi yapısı üzerinden inceleyin.</p>
              <p>Hedef kullanımda hangi kapak tipinin açılacağını belirtin. Ürün adından bütün kapaklara veya ek işlevlere uygunluk sonucu çıkarmayın. Mıknatıs, anahtarlık halkası veya başka bir ayrıntı gerekiyorsa seçilen modelde bulunduğunu teyit edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Formu elinizde ve dağıtım paketinde değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kare ve uzun gövde farklı ölçü oranlarına sahiptir. Yalnız fotoğraftaki görünüşe göre karar vermek yerine tutuşu ve ürünün pakette kaplayacağı alanı inceleyin. Numuneyi hedef kullanım biçimiyle değerlendirmek form seçimini somutlaştırır.</p>
              <p>Anahtarlık olarak taşınacak üründe halka bağlantısını ve anahtarlarla birlikte kapladığı alanı da değerlendirin. Bağımsız modelin ölçüsünü veya malzeme bilgisini anahtarlık seçeneğine aktarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Gövde ölçüsünden baskı alanı çıkarmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Açma bölümü, kenarlar, delikler ve varsa halka bağlantısı yerleşimi sınırlandırabilir. Katalogdaki dış ölçü bütün yüzeyin logo uygulamasına açık olduğu anlamına gelmez. Tasarım için kullanılabilir genişlik ve yüksekliği ayrıca öğrenin.</p>
              <p>Kare logo ile yatay yazı ağırlıklı tasarım aynı yüzeyde farklı yerleşim gerektirebilir. Modeli yalnız logonun büyüklüğüne göre seçmeyin; tutuş ve açma alanıyla tasarımın ilişkisini de görün.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Açacak seçiminde hangi bilgiye bakmalısınız?</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Her modelin kendi açıklamasını ve teklif kapsamını esas alın.</caption>
              <thead><tr><th scope="col" className="border p-3">Seçim başlığı</th><th scope="col" className="border p-3">Öncelik</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Bağımsız açacak</th><td className="border p-3">İkram veya ayrı dağıtım</td><td className="border p-3">Form, tutuş ve kapak uygunluğu</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Açacaklı anahtarlık</th><td className="border p-3">Anahtarlıkla taşıma</td><td className="border p-3">Halka bağlantısı ve taşıma alanı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Logo yerleşimi</th><td className="border p-3">Marka ve iletişim bilgisi</td><td className="border p-3">Net uygulama alanı ve okunabilirlik</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ek özellik</th><td className="border p-3">Mıknatıs veya başka işlev</td><td className="border p-3">Modelde açıkça belirtilmesi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Sipariş kapsamı</th><td className="border p-3">Adet ve sunum biçimi</td><td className="border p-3">Baskı yüzü, ambalaj ve toplam bedel</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Malzeme ve ek işlevleri açıklamadan doğrulayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Metal görünümlü bir yüzey veya renk, malzeme ve kaplama bilgisinin yerine geçmez. Kullanım beklentinizi etkileyen malzeme özelliğini seçilen ürün için sorun. Numune görünümü değerlendirmeye yardımcı olur; açıklanmayan bir özelliği tek başına kanıtlamaz.</p>
              <p>Mıknatıslı kullanım isteniyorsa bunu ayrıca belirtin. Gövdenin düz olması veya fotoğrafta bir yüzeye yakın gösterilmesi mıknatıs bulunduğunu göstermez. İlave işlevler teklifte modelle birlikte yazılı yer alsın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı yöntemini seçilen açacağın yüzeyiyle eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bağımsız açacakta UV uygulaması belirtilmiş olması, bütün açacaklı anahtarlıklarda aynı yöntemin bulunduğu anlamına gelmez. Gövde, kaplama ve kullanılabilir yüzey üzerinden yöntem teyidi isteyin. Tek veya çift yüz uygulama talebini ayrı belirtin.</p>
              <p>Logo dosyasında telefon veya internet adresi gibi küçük yazılar varsa gerçek baskı boyutunda okunabilirliğini kontrol edin. Açma bölümüne yakın yerleşim yerine onaylanan uygulama alanını esas alın. Gövde rengiyle tasarım renklerinin görünümü birlikte değerlendirilsin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune ve yerleşim onayını birlikte tamamlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numunede tutuşu, hedef kapakla kullanım uygunluğunu ve varsa halka bağlantısını inceleyin. Seri siparişin aynı model ve yapıda hazırlanacağını teyit edin. Kısa denemeden bütün kullanım koşulları için dayanım garantisi çıkarmayın.</p>
              <p>Logo yerleşimini açacak elde tutulurken ve paket içinde sunulurken değerlendirin. Fiziksel uygulama örneği isteniyorsa bunun koşullarını sorun; dijital onayın konumu gösterdiğini, yüzeydeki baskı sonucunun ayrıca değerlendirilebileceğini dikkate alın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş hesabını dağıtım biçimine göre kurun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kaç kişiye bağımsız ürün, kaç kişiye anahtarlık seçeneği dağıtılacağını ayrı planlayın. Teklifte model, adet, gövde rengi, uygulama yüzü ve ambalaj tanımı açık olsun. Bir modelin minimum siparişini diğer gruba uygulamayın.</p>
              <p>UV veya başka bir uygulamanın bedeli ayrıca veriliyorsa ürün fiyatını baskı dahil toplam olarak kullanmayın. Hazırlık, KDV ve sevkiyat kapsamını öğrenin. Etkinlik paketi hazırlanacaksa <Link href="/promosyon-imalat-urunler">imalat ürünleri</Link> arasındaki diğer seçenekleri aynı teslim planında değerlendirebilirsiniz.</p>
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
            <Link href="/promosyon-acacak" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Açacak Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
