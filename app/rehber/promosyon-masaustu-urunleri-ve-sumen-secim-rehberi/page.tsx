import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-masaustu-urunleri-ve-sumen-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-masaustu-urunleri-ve-sumen-secim-rehberi.jpg";
const TITLE = "Promosyon Masaüstü Ürünleri ve Sümen Seçim Rehberi";
const DESCRIPTION = "Masaüstü organizer, sümen ve kristal masa setlerini alan, içerik ve malzemeyle değerlendirin. Bölme uyumu, parça başına logo ve kurumsal dağıtımı planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Masaüstü organizer ile masa sümeni aynı ürün mü?",
    "answer": "Aynı kullanım işlevi olarak değerlendirilmemelidir. Organizer bölme düzeniyle, sümen ise yazı alanı ve varsa set bileşenleriyle incelenir. İhtiyacı masa üzerindeki yerleşimle birlikte belirleyin."
  },
  {
    "question": "Kategori adındaki deri ifadesi gerçek deri mi?",
    "answer": "Kategori adı tek başına malzeme taahhüdü değildir. Suni deri olarak belirtilen ürün hakiki deri diye değerlendirilmemeli; malzemesi açıklanmayan modelde kaplama türü ayrıca öğrenilmelidir."
  },
  {
    "question": "Ahşap ve deri kategorisindeki bütün ürünler ahşap içerir mi?",
    "answer": "Kategori adından bütün ürünlere ortak bir malzeme özelliği aktarılmamalıdır. Seçilen ürünün gövde ve yüzey malzemesi kendi açıklamasından kontrol edilmelidir."
  },
  {
    "question": "Aynı parça sayısındaki sümen setlerinin içeriği aynı mı?",
    "answer": "Hayır. Telefon standı, dosyalık, takvimlik, mouse pad veya kağıtlık gibi bileşenler modele göre değişebilir. Toplam sayı yerine tam parça listesini karşılaştırın."
  },
  {
    "question": "Telefon standındaki telefon veya kalemlikteki kalem dahil mi?",
    "answer": "Görselde kullanılan telefon, kalem, not kağıdı ve diğer aksesuarların dahil olduğu varsayılmamalıdır. Teslim kapsamı ürün ve set bileşenleri için ayrı netleştirilmelidir."
  },
  {
    "question": "Kristal masa setinin dış ölçüsü baskı alanı mı?",
    "answer": "Hayır. Dış ölçü masa yerleşimini, belirtilen baskı alanı ise tasarımın uygulanabilir bölümünü anlatır. Logo ve ek yazıları net uygulama alanında onaylayın."
  },
  {
    "question": "Setin bütün parçaları aynı yöntemle baskılı mı gelir?",
    "answer": "Bir parçada logo uygulaması bulunması diğer parçaların da aynı yöntemle veya aynı bedelle uygulamalı olduğunu göstermez. İstenen parçaları, yöntemi ve yerleşimi tek tek tanımlayın."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Masa sümeni, bölmeli organizer ve şeffaf masa aksesuarının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Masaüstü Ürünleri ve Sümen Seçim Rehberi", item: PAGE_URL },
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
        <span>Masaüstü Ürünleri ve Sümen Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Masaüstü Ürünleri ve Sümen Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Masaüstü hediyesi seçerken önce masada hangi işin düzenleneceğini belirleyin: yazı yazmak, evrak ayırmak, telefonu yerleştirmek veya kalemleri toplamak. Organizer, sümen ve kristal masa seti farklı ihtiyaçlara yönelir. Bu rehber, ürünleri yalnız görünüş ve parça sayısıyla değil masa alanı, gerçek içerik ve logo yerleşimiyle birlikte karşılaştırmanıza yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Koyu renk masa sümeni, kalem ve kart bölmeli organizer ile yazısız şeffaf masa aksesuarı" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, malzeme türünü veya set içeriğini göstermez. Kalem ve kartlar kullanım örneğidir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Masa düzenindeki eksik işlevden başlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-ahsap-ve-deri-masaustu-urunler">Masaüstü organizer modellerini</Link> kalem, kart ve küçük aksesuarların yerleşimi için değerlendirebilirsiniz. Yazı alanı ve birden fazla masa bileşeni gerekiyorsa <Link href="/promosyon-masa-sumeni">masa sümeni ve kristal setleri</Link> kendi içerikleriyle karşılaştırın. Bunları ajanda biçimindeki organizerle aynı ürün türü saymayın.</p>
              <p>Önce kullanılacak parçaları yazın. Sadece kalemlik gereken bir masaya sırf parça sayısı fazla diye set seçmeyin. Kristal bir masa aksesuarının da sümenle aynı genişlikte yazı yüzeyi sağladığını varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Masayı boş bir dikdörtgen gibi değerlendirmeyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ekran ayağı, klavye, evrak ve günlük kullanılan parçaların kapladığı alanı belirleyin. Sümen için gereken düz alanı; organizer ve diğer aksesuarlar için taban ölçüsünü ayrı değerlendirin. Bütün parçalar aynı anda yerleştiğinde kullanılabilir yazı alanı kalıp kalmadığını kontrol edin.</p>
              <p>Tek büyük parçanın ölçüsü yeterli değildir. Dosyalığın kullanılacak belgeye, notluğun kağıda ve varsa telefon standının cihazla kılıfa uygunluğunu öğrenin. Mümkünse numuneyi masadaki gerçek yerleşimle deneyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Set içeriğini adet yerine bileşen listesiyle karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Aynı toplam parça sayısındaki iki sette farklı aksesuarlar bulunabilir. Telefon standı, dosyalık, takvimlik, kalem seti, mouse pad veya kağıtlık ihtiyacını listeleyerek hangi modelin ne sunduğunu işaretleyin. Bir modelde belirtilen parçayı diğerine aktarmayın.</p>
              <p>Fotoğraftaki kalem, telefon ve not kağıdı ürünün kullanımını göstermek için yerleştirilmiş olabilir. Bunların ve diğer sarf malzemelerinin dahil olup olmadığını yazılı netleştirin. Yalnız kutudan çıkacak parçaları esas alarak sipariş içeriği oluşturun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Masaüstü gruplarını hangi ihtiyaçla karşılaştırmalısınız?</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Bütün modeller aynı işlevi veya aynı set içeriğini sunmaz.</caption>
              <thead><tr><th scope="col" className="border p-3">Grup</th><th scope="col" className="border p-3">İhtiyaç</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Organizer</th><td className="border p-3">Kalem, kart ve aksesuarları ayırma</td><td className="border p-3">Bölme ölçüsü ve erişim</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Masa sümeni</th><td className="border p-3">Yazı alanı ve set düzeni</td><td className="border p-3">Masa üzerindeki boş alan ve tam içerik</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kristal masa seti</th><td className="border p-3">Masaüstü sunum veya isimlik ihtiyacı</td><td className="border p-3">Taban ölçüsü ve ayrı baskı alanı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Tamamlayıcı parçalar</th><td className="border p-3">Altlık veya yazım hediyesi ekleme</td><td className="border p-3">Standart setten ayrı teslim kapsamı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Markalama</th><td className="border p-3">Logo ve varsa kişi adı</td><td className="border p-3">Her parçanın yöntemi ve görünür yüzü</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Gövde ve kaplama malzemesini modelden okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ahşap veya deri geçen kategori adı bütün modellere ortak bir malzeme özelliği vermez. Suni deri belirtilen ürünü hakiki deri olarak değerlendirmeyin. Malzeme bilgisi açık olmayan sümen veya set için gövde ve kaplama türünü ayrıca sorun.</p>
              <p>Yüzey hissini, kenar ve dikiş görünümünü numunede değerlendirin. Kullanım ve bakım bilgisini ilgili üründen öğrenin; yalnız fotoğraftan suya dayanım, çizilmezlik veya diğer performans sonuçlarını çıkarmayın. Renk uyumu önemliyse birlikte alınacak parçaları yan yana inceleyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Markalamayı masadaki bakış yönüne göre yerleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Sümen üzerindeki logo yazı veya klavyenin altında kalabilir; organizer üzerindeki konum ise bölmeler doluyken farklı görünebilir. Yerleşim onayını boş ürünün yakın çekimiyle sınırlamayın. Kullanım sırasında görünen yüzü ve logonun yönünü belirleyin.</p>
              <p>Kristal setlerde dış ölçü ile belirtilen baskı alanını ayrı okuyun. Organizerde bölme, dikiş veya kenar; sümende kullanılan yüzey alanı tasarımı etkileyebilir. Her bileşenin yöntemi ve net uygulama ölçüsü ayrı onaylansın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Tamamlayıcı parçaları gereksinime göre ekleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İçecek alanını da düzenlemek istiyorsanız altlık sayısı, stand ve fiyat birimi için <Link href="/rehber/promosyon-bardak-altligi-secim-ve-baski-rehberi">bardak altlığı seçim rehberine</Link> geçebilirsiniz. Altlık grubunun ayrıntılarını masaüstü organizerin bütün parçaları için ortak kabul etmeyin.</p>
              <p>Ayrı bir yazım hediyesi eklenecekse <Link href="/promosyon-kalem-setleri">kalem setlerinin</Link> kutulu ölçüsünü ve teslim kapsamını öğrenin. Sonradan eklenen aksesuarlar hazır sümen setinin standart içeriğinden ayrı tanımlansın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune ve teslim kaydını masa veya kişi bazında hazırlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numunede yazı alanını, bölmelerin erişimini ve varsa cihaz yerleşimini kontrol edin. İsimlik veya kişiye özel yazı isteniyorsa isim, model ve renk eşleştirmesini onay listesine ekleyin. Aynı ismin hangi parçalarda bulunacağı açık olsun.</p>
              <p>Teklifte masa veya kişi başına verilecek parçalar, logo uygulanacak bileşenler ve ambalaj kapsamı yer alsın. Set bedelini bütün parçalarda baskı dahil tutar olarak kabul etmeyin. Farklı ofislere dağıtım için miktar ve adresleri ayırıp KDV, sevkiyat ve teslim koşullarını öğrenin.</p>
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
            <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Masaüstü Ürünlerini İncele</Link>
            <Link href="/promosyon-masa-sumeni" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Masa Sümenlerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
