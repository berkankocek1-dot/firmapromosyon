import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalem-seti-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-kalem-seti-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Kalem Seti Seçimi | İçerik, Kutu ve Baskı Rehberi";
const DESCRIPTION = "Kalem seti ile ayrı kalem kutusunu ayırın; yazım türü, kutu uyumu ve her parçanın logo alanını değerlendirin. İsim uygulaması ve set bazında teklif kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Kalem seti kategorisindeki her üründe kalem bulunur mu?",
    "answer": "Hayır. Ayrı kalem kutuları da listelenebilir. Fotoğraftaki kalemi dahil kabul etmeden ürün içeriğini ve teklif birimini kontrol edin."
  },
  {
    "question": "İki kalemli setin kalemleri aynı yazım türünde mi?",
    "answer": "Set adı tek başına yazım türlerini açıklamaz. Her kalemin tükenmez, roller veya dolma kalem bilgisini ayrı kontrol edin; mürekkep rengi ve refil ya da dolum sistemini öğrenin."
  },
  {
    "question": "Ayrı kalem kutusunun dış ölçüsü uyumu gösterir mi?",
    "answer": "Dış ölçü tek başına yeterli değildir. Kalemin boyu ve çapı, iç yuvanın şekli ve kutunun kapanması birlikte değerlendirilmelidir."
  },
  {
    "question": "Kaleme ve kutuya aynı baskı yöntemi uygulanır mı?",
    "answer": "Aynı yöntem otomatik olarak uygun kabul edilmez. Kalem gövdesi, kutu ve varsa diğer parçalar için yüzey ve kullanılabilir alan ayrı değerlendirilmelidir."
  },
  {
    "question": "Bir setin fiyatı bütün parçaların baskısını kapsar mı?",
    "answer": "Ürün veya set fiyatı bütün parçalarda logo uygulaması olduğunu göstermez. Kalem, kutu ve varsa anahtarlık için uygulama sayısı, yöntem ve bedel teklif üzerinde netleştirilmelidir."
  },
  {
    "question": "Kalem setine isim yazılabilir mi?",
    "answer": "Seçilen modelde uygunluk ayrıca teyit edilmelidir. İsim uygulanacak parçalar, yazı ölçüsü, isim–ürün eşleştirmesi ve ek maliyet üretim öncesinde onaylanmalıdır."
  },
  {
    "question": "Set adedi ile toplam parça adedi aynı mı?",
    "answer": "Aynı birim değildir. Sete dahil her parça ve set sayısı ayrı tanımlanmalıdır. Sipariş ve baskı hesabı yalnız toplam parça adediyle yapılmamalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kutulu kalem seti ve ayrı boş kalem kutusunun temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Kalem Seti Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Kalem Seti Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Kalem Seti Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon kalem seti seçerken önce paketin gerçekten hangi parçaları içerdiğini netleştirin. Kutulu bir kalem, farklı yazım türlerini birleştiren set ve ayrı satılan boş kalem kutusu aynı sipariş birimi değildir. İçeriği belirledikten sonra kutu uyumunu, her parçanın logo alanını ve varsa isim eşleştirmesini planlayabilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Lacivert kutuda iki koyu renk kalem ve yanında ayrı boş kalem kutusu" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, yazım türlerini veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Ürün fotoğrafından değil içerik listesinden başlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-kalem-setleri">Kalem setleri kategorisinde</Link> hazır setlerle ayrı kutular birlikte bulunabilir. Fotoğrafta kalem görülmesini fiyatın o kalemi de içerdiği şeklinde yorumlamayın. Teklifte kalem, kutu ve varsa anahtarlık ya da diğer parçaları adlarıyla listeleyin.</p>
              <p>Hediye sunumunu çok parçalı bir pakete dönüştürmek istiyorsanız <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi">kurumsal hediye seti rehberi</Link> paket bütününü ele alır. Burada ise yazım ürünleri ve kutunun kendi uyumunu netleştirmeye odaklanın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Her kalemin yazım türünü ayrı öğrenin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Birden fazla kalem içeren sette her parçanın yazım türünü kontrol edin. Tükenmez, roller veya dolma kalem ifadesi setin bütün parçaları için ortak kabul edilmemelidir. Mürekkep rengi, uç ve refil ya da dolum bilgisi ilgili kalem için öğrenilmelidir.</p>
              <p>Dolma kalem düşünülüyorsa kartuş veya dolum sistemini ve dahil parçaları sorun. Yazım alışkanlığına göre daha ayrıntılı karşılaştırma için <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli">kalem seçim rehberini</Link> inceleyebilirsiniz. Set görünümü, yazım tercihinin yerine geçmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ayrı kutuyu kullanılacak kalemle deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kalem kutusunun dış boyutu iç yuvanın aynı ölçüde olduğunu göstermez. Kalemin boyunu, çapını, klipsini ve varsa kapak yapısını kutudaki yerleşimle birlikte değerlendirin. Tekli veya çoklu yuvanın içeriğe uygunluğunu kontrol edin.</p>
              <p>Numunede kalemi yerleştirip kutuyu kapatın; parçanın nasıl durduğunu ve çıkarılışını inceleyin. Görselde başka bir kalemle gösterilen kutuyu seçtiğiniz kaleme uygun kabul etmeyin. Sonradan eklenen parçalar varsa yerleşimi tüm içerikle birlikte değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kalem seti için parça bazında kontrol tablosu</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Setin görünümü bütün parçaların teknik özelliklerini veya fiyat kapsamını açıklamaz.</caption>
              <thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Netleştirilecek bilgi</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">İçerik</th><td className="border p-3">Kalem, kutu ve ek parçalar</td><td className="border p-3">Fotoğraf yerine yazılı liste</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Yazım</th><td className="border p-3">Her kalemin türü ve mürekkep bilgisi</td><td className="border p-3">Tek tek yazım denemesi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kutu</th><td className="border p-3">İç yuva ve kapanış</td><td className="border p-3">Seçilen kalemle yerleşim</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Markalama</th><td className="border p-3">Her parçanın yöntemi ve alanı</td><td className="border p-3">Ayrı yerleşim onayı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">İsim uygulaması</th><td className="border p-3">Kişi, renk ve parça eşleşmesi</td><td className="border p-3">Son isim listesinin kontrolü</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo uygulamasını parça parça tanımlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kalem gövdesi, kutu kapağı ve varsa anahtarlık farklı malzeme veya yüzeylere sahip olabilir. Birinde lazer uygunluğu belirtilmesi diğerlerinin de aynı uygulamayı desteklediğini göstermez. Her parça için yöntem ve net alanı ayrı öğrenin.</p>
              <p>Kalemin klipsi ile gövde biçimini, kutunun ise yüzey ve kapanışını tasarımda dikkate alın. Aynı logonun farklı parçalarda birebir aynı görünmesi beklenmemelidir. Uygulama yönü ve ölçüsünü tek bir genel görsel yerine her parça üzerinde gösterin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kişiye özel isimlerde ürün eşleştirmesini kurun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İsim yazılacaksa önce seçilen kalem ve kutuda uygulama uygunluğunu teyit edin. Logoyla ismin aynı yüzde mi, ayrı konumlarda mı bulunacağını belirtin. Kısa ve uzun isimleri gerçek uygulama alanında değerlendirin.</p>
              <p>Onay listesinde kişi adı, ürün rengi ve isim uygulanacak parçalar birlikte yer alsın. Kaleme isim yazılıp kutuya yazılmayacaksa bu fark açık olsun. Yazım kontrolü tamamlanan listeyi sürümü belli bir dosyayla paylaşın; kişiselleştirmeyi standart logo bedeline dahil varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numuneyi kapalı kutudan yazım denemesine kadar inceleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Önce kutunun dış sunumuna ve içeriğin yerleşimine, ardından kalemlerin tek tek kullanımına bakın. Tutuş, kapak veya mekanizma ve yazım beklentisini değerlendirin. Numunenin seri siparişle aynı içerik ve renkte hazırlanacağını teyit edin.</p>
              <p>Logo ya da isim sonucunu görmek gerekiyorsa uygulamalı numune koşullarını ayrıca sorun. Onay kaydında kalem yerleşimleri, kutu görünümü ve parça bazındaki tasarımlar bulunsun. Yalnız kapalı kutu fotoğrafıyla bütün seti onaylamayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklif ve teslim hesabını set bazında yapın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Set adediyle toplam parça sayısını ayırın. Teklifte bir setin içeriği ve her parçadaki uygulama sayısı açıkça yer alsın. Aynı sayıda set içeren iki teklifin kutu, kalem ve markalama kapsamı farklı olabilir.</p>
              <p>İsimli ve isimsiz setler birlikte hazırlanacaksa miktarlarını ayırın. Ambalaj, varsa ek kutulama, KDV ve sevkiyat kapsamını netleştirin. Stok ve tasarım onayını ihtiyaç tarihiyle planlayın; tekli kalem veya boş kutu için verilen sipariş koşulunu hazır sete aktarmayın.</p>
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
            <Link href="/promosyon-kalem-setleri" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Kalem Setlerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
