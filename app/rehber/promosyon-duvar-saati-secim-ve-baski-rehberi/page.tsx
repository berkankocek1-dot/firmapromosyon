import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-duvar-saati-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-duvar-saati-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Duvar Saati Seçimi | Çap, Kadran ve Baskı Rehberi";
const DESCRIPTION = "Promosyon duvar saatlerini kullanım alanı, çap, kadran, kasa ve mekanizmayla değerlendirin. Logo yerleşimi, numune ve şubelere dağıtım kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Duvar saati çapı nasıl seçilir?",
    "answer": "Duvar alanını, bakılacak mesafeyi, kadran düzenini ve ortam ışığını birlikte değerlendirin. Tek bir çap için her mekanda aynı okunabilirlik sonucu beklemeyin; mümkünse numuneyi kullanım yerinde inceleyin."
  },
  {
    "question": "Kasa çapı ile kadran çapı aynı mı?",
    "answer": "Aynı ölçü olarak kabul edilmemelidir. Dış kasa ve görünen kadran ölçülerini ayrı öğrenin. Logo için kullanılabilir alan ise rakamlar ve ibreler dikkate alınarak ayrıca belirlenir."
  },
  {
    "question": "Metalize plastik kasa metal kasa mı?",
    "answer": "Hayır. Metal görünüm verilen plastik kasa ile metal kasa farklı malzeme tanımlarıdır. Renk veya yüzey görüntüsü yerine seçilen modelin kasa ve kadran bilgilerini ayrı kontrol edin."
  },
  {
    "question": "Akar saniye tamamen sessiz çalışır mı?",
    "answer": "Akar saniye ifadesi tek başına tam sessizlik garantisi değildir. Ses beklentisini belirtip seçilen mekanizmayı uygun numune koşullarında değerlendirin."
  },
  {
    "question": "Logo kadranın her yerine basılabilir mi?",
    "answer": "Kadranın tamamı logo alanı sayılmaz. Rakamlar, ibre merkezi, ibrelerin farklı konumları ve net uygulama alanı birlikte değerlendirilmelidir. Yöntem ve yerleşim seçilen model için onaylanır."
  },
  {
    "question": "Pil ve montaj parçaları fiyata dahil mi?",
    "answer": "Dahil oldukları açıkça belirtilmedikçe varsayılmamalıdır. Pil türü, pilin teslim kapsamı ve varsa montaj aksesuarları model bazında netleştirilmelidir."
  },
  {
    "question": "Duvar saati dış mekanda kullanılabilir mi?",
    "answer": "Duvar saati adı dış mekan, nem veya suya dayanıklılık anlamına gelmez. Kullanım alanını belirterek seçilen modelin bu koşullara uygunluğunu üretici bilgisinden teyit edin."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Sade kadranlı yuvarlak duvar saatinin temsili ofis görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Duvar Saati Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Duvar Saati Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Duvar Saati Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon duvar saati seçiminde ürünün görselinden önce asılacağı yer düşünülmelidir. Duvar alanı, saatin izleneceği mesafe ve ışık; çap ile kadran tasarımını birlikte etkiler. Marka yerleşimini de saatin okunmasını koruyacak şekilde planlayarak kasa, mekanizma ve dağıtım kapsamını netleştirebilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Açık renk duvarda gümüş renk çerçeveli, beyaz kadranlı yuvarlak saat" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, kasa malzemesini veya mekanizma özelliğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Saatin asılacağı yeri tarif edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-duvar-saatleri">Promosyon duvar saati modellerini</Link> ofis, toplantı odası, resepsiyon veya bayi alanı gibi kullanım yerlerine göre inceleyin. Kullanılabilir duvar alanını ve saatin nereden izleneceğini belirleyin. Bir katalog fotoğrafı, gerçek mekandaki okunabilirliği tek başına göstermez.</p>
              <p>Pencere ve aydınlatmanın kadran görünümüne etkisini değerlendirin. Dış mekan veya nemli alan düşünülüyorsa bunu baştan belirtin; bu koşullara uygunluğu açıklanmayan modeli uygun kabul etmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Çapı kadran düzeninden ayrı değerlendirmeyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Yuvarlak saatte dış çap; dikdörtgen veya figürlü saatte en-boy bilgisi esas alınır. Aynı dış ölçüdeki iki saatin çerçevesi ve görünen kadranı farklı olabilir. Çapı doğrudan rakamların büyüklüğü ya da logo alanı gibi yorumlamayın.</p>
              <p>Numuneyi planlanan mesafeden inceleyin. Rakam veya işaretlerin, ibrelerin ve zemin renginin birlikte görünümüne bakın. Her oda için geçerli kesin bir çap–mesafe eşleştirmesi varsaymak yerine gerçek kullanım alanını esas alın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kasa, kadran ve camı ayrı özellikler olarak okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Metal kasa ile metalize plastik aynı malzeme değildir. Alüminyum, paslanmaz metal, ABS veya başka bir tanım seçilen modelin hangi parçası için verilmişse o kapsamda değerlendirilmelidir. Metal kadran bulunması kasanın da metal olduğunu göstermez.</p>
              <p>Camın ve varsa bombeli yapının görünümünü ortam ışığında inceleyin. Fotoğraftaki altın ya da gümüş renkten malzeme sonucu çıkarmayın. Kesin malzeme beklentisini kasa ve kadran için ayrı belirterek teklif isteyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Duvar saati için ürün ve numune karşılaştırması</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Dış ölçü, kadran ve mekanizma farklı seçim ölçütleridir.</caption>
              <thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Ürün bilgisi</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Kullanım alanı</th><td className="border p-3">Duvar alanı ve bakış mesafesi</td><td className="border p-3">Kadranın gerçek ortamda görünümü</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Ölçü</th><td className="border p-3">Kasa çapı veya en-boy</td><td className="border p-3">Görünen kadran ile dış ölçü farkı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Malzeme</th><td className="border p-3">Kasa, kadran ve cam bilgisi</td><td className="border p-3">Yüzey ve ışık altında görünüm</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Mekanizma</th><td className="border p-3">Belirtilen yapı ve pil gereksinimi</td><td className="border p-3">Çalışma sesi beklentisi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Tasarım</th><td className="border p-3">Net logo alanı ve kadran şablonu</td><td className="border p-3">Rakamlarla ve ibrelerle yerleşim</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Mekanizma beklentisini yalnız ürün adına bırakmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Akar saniye mekanizma ifadesini tam sessizlik garantisi olarak kullanmayın. Sessiz bir çalışma alanı için ses beklentinizi paylaşın ve ilgili modelin numunesini değerlendirin. Kısa bir incelemeden bütün ortamlarda duyulmayacağı sonucu çıkarılmamalıdır.</p>
              <p>Pil türünü, pilin teslimata dahil olup olmadığını ve gerekli kullanım bilgisini öğrenin. Varsa montaj parçalarının kapsamını ayrıca sorun. Kullanım yeri için asma ve kurulum gereksinimini ürün bilgisine göre netleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo tasarımını ibrelerin farklı konumlarıyla kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Dış kasa çapı ve kadran çapı tasarımın kullanılabilir alanıyla aynı değildir. Logo, kurum adı ve varsa iletişim satırını rakamlarla birlikte yerleştirin. İbreler yalnız örnek fotoğraftaki konumda kalmayacağı için yerleşimi farklı ibre konumlarını düşünerek değerlendirin.</p>
              <p>Gereksiz ayrıntıları azaltarak saatin okunmasını koruyun. Küçük yazıları ekran yakınlaştırmasıyla değil gerçek baskı boyutunda inceleyin. Özel zemin veya kadran tasarımı isteniyorsa bu kapsamı hazır kadrana logo uygulamasından ayrı belirtin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kadran provasını seçilen kasa ve yüzeyle onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ofset, dijital, UV veya serigrafi gibi yöntemler bütün modellerde ortak kabul edilmemelidir. Kadran ve tasarım için uygun yöntemi öğrenin. Onay görselinde gerçek kadran sınırı, rakamlar, ibre merkezi ve logo ölçüsü birlikte yer alsın.</p>
              <p>Numunede kasa rengi, cam görünümü ve mekanizma beklentisini kontrol edin. Fiziksel baskı örneği isteniyorsa bunu ayrıca planlayın; dijital yerleşim onayıyla malzeme üzerindeki sonucu aynı kontrol gibi değerlendirmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Bayi ve şube dağıtımını ambalajla birlikte planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Sipariş listesini model, kasa rengi ve teslim adresiyle eşleştirin. Farklı şubelere gönderilecekse her adresin miktarı belli olsun. Dahil iç ambalaj ve kutuyu öğrenin; ilave paketleme talebini sevkiyat teklifine ekleyin.</p>
              <p>Ürün, kadran uygulaması, varsa özel tasarım hazırlığı, pil, ambalaj, KDV ve nakliye kapsamını ayrı kontrol edin. Koli adedini minimum sipariş yerine kullanmayın. Stok teyidi ve kadran onayını ihtiyaç tarihinizle birlikte planlayın.</p>
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
            <Link href="/promosyon-duvar-saatleri" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Duvar Saati Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
