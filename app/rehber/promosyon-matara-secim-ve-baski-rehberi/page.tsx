import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-matara-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-matara-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Matara Seçimi | Malzeme, Kapak ve Baskı Rehberi";
const DESCRIPTION = "Cam ve plastik promosyon mataraları kapasite, kapak, taşıma ve bakım koşullarıyla değerlendirin. Gövde ile kılıf baskısını ayrı planlayıp sipariş kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Matara ile termos aynı ihtiyacı mı karşılar?",
    "answer": "Matara adı veya kapasite bilgisi ısı yalıtımı anlamına gelmez. Isıyı koruma ihtiyacı varsa bunu ayrıca belirtip ilgili termos modelinin teknik özelliklerini inceleyin."
  },
  {
    "question": "Cam mı plastik matara mı seçilmeli?",
    "answer": "Malzeme tercihini kullanım ortamı, ağırlık, taşıma ve bakım ihtiyacıyla birlikte değerlendirin. Plastik türü ve cam modelin kullanım koşulları ürün bazında öğrenilmelidir; bütün modellere ortak üstünlük atfedilmemelidir."
  },
  {
    "question": "Aynı kapasitedeki mataralar aynı boyutta mı?",
    "answer": "Hayır. Gövde formu, kapak ve varsa kılıf dış ölçüyü etkileyebilir. Kapasitenin yanında yükseklik ve çapı kontrol edin; çanta veya hediye paketine uyumu gerçek ölçüyle değerlendirin."
  },
  {
    "question": "Kılıf matarayı kırılmaz veya sızdırmaz yapar mı?",
    "answer": "Kılıf bulunması bu özellikleri tek başına doğrulamaz. Gövde, kapak ve kılıfın işlevi ayrı değerlendirilmelidir. Özel kullanım beklentisini seçilen model üzerinden teyit edin."
  },
  {
    "question": "Her matara sıcak içeceğe veya bulaşık makinesine uygun mu?",
    "answer": "Bütün modellere aynı kullanım koşulu uygulanmamalıdır. Gövde, kapak ve varsa kılıf için üreticinin sıcaklık ve temizlik talimatlarını esas alın; belirtilmeyen uygunluğu varsaymayın."
  },
  {
    "question": "Hazneli veya detoks adı neyi anlatır?",
    "answer": "Ürün adından sağlık etkisi veya bütün parçaların kullanım koşulları çıkarılmamalıdır. Varsa haznenin yapısını, çıkarılabilirliğini ve temizliğini modelin açıklaması üzerinden öğrenin."
  },
  {
    "question": "Logo gövdeye mi kılıfa mı uygulanır?",
    "answer": "Bu iki alan ayrı uygulama yüzeyleridir. Cam, plastik ve kumaş için aynı yöntem uygun kabul edilmemelidir. Konum, ölçü ve bakım koşulları seçilen model için netleştirilmelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kılıflı cam matara ve plastik spor matarasının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Matara Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Matara Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Matara Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon matara seçiminde yalnız kapasiteye bakmak yeterli değildir. Ofiste masada kullanılacak bir ürünle gün içinde çantada taşınacak model farklı kapak ve ölçü beklentileri doğurur. Cam veya plastik gövdeyi, içim biçimini ve bakım koşullarını belirledikten sonra logo uygulamasını gövde ve varsa kılıf için ayrı planlayabilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Lacivert kılıflı cam matara ve içim kapaklı gri plastik matara" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, kapasiteyi veya kullanım uygunluğunu göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Günlük kullanım düzenini belirleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-matara">Cam ve plastik promosyon matara modellerini</Link> karşılaştırmadan önce ürünün masada mı, çantada mı veya etkinlik boyunca elde mi taşınacağını düşünün. Kapasitenin yanında kapağı açma biçimi, dolum ve taşıma ayrıntıları da bu kullanıma uygun olmalıdır.</p>
              <p>Isıyı koruma ihtiyacını matara seçiminden ayrı belirtin. Cam veya plastik gövde, kendiliğinden termos özelliği göstermez. Sıcak ya da soğuk tutma beklentiniz varsa <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir">termos seçim rehberindeki</Link> farklı model ölçütlerini inceleyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Malzemeyi görünüm ve kullanım talimatıyla birlikte okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Cam ve plastik seçeneklerde ağırlık, tutuş ve taşıma beklentisini numuneyle değerlendirin. Plastik ürünün türünü yalnız şeffaflığı veya renginden çıkarmayın. Malzeme bilgisi açıklanmamışsa tedarikçiden model bazında bilgi isteyin.</p>
              <p>Kılıflı cam modelde kılıfın hangi bölümü kapladığını ve bakım için çıkarılıp çıkarılmadığını sorun. Kılıfı kırılmazlık garantisi olarak değerlendirmeyin. Belirtilmeyen malzeme, sertifika veya dayanım özelliğini kurumsal tanıtım metnine eklemeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapasite ile dolu taşıma biçimini birlikte değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Aynı kapasitedeki iki mataranın yüksekliği, çapı ve kapak yapısı farklı olabilir. Çanta cebi, masa alanı veya kutuya yerleştirme için dış ölçüyü esas alın. Numuneyi yalnız boş halde görmek yerine planlanan taşıma düzeniyle değerlendirin.</p>
              <p>Daha fazla su taşıma ihtiyacıyla ürünün dolu halde taşınmasını birlikte düşünün. Taşıma halkası, kulp veya kılıf gibi parçaların kullanım biçimini öğrenin. Bunların bulunması kapağın sızdırmaz olduğunu göstermez; çantada taşıma uygunluğunu ayrıca teyit edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Matara seçimini bu bilgilerle netleştirin</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Kapasite tek başına malzeme, kapak veya kullanım uygunluğunu göstermez.</caption>
              <thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Ürün bilgisi</th><th scope="col" className="border p-3">Numune kontrolü</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Gövde</th><td className="border p-3">Cam veya plastik malzeme bilgisi</td><td className="border p-3">Ağırlık ve tutuş</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapasite</th><td className="border p-3">Hacim ve dış ölçü</td><td className="border p-3">Çanta ve kutuya yerleşim</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapak</th><td className="border p-3">İçim ve kapatma biçimi</td><td className="border p-3">Dolum ve kullanım adımları</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kılıf veya hazne</th><td className="border p-3">Dahil parçalar ve bakım bilgisi</td><td className="border p-3">Çıkarma ve yeniden yerleştirme</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Logo</th><td className="border p-3">Gövde ve kılıf için ayrı alan</td><td className="border p-3">Elde kullanımda görünürlük</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak ve içim biçimini numunede inceleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Vida kapak, emzik veya farklı açma mekanizması model bazında değişebilir. Kullanıcının ürünü doldurma, içme ve kapatma adımlarını numunede deneyin. Kullanım uygunluğunu yalnız ürün fotoğrafındaki kapak görünümüne göre belirlemeyin.</p>
              <p>Hazneli veya detoks olarak adlandırılan ürünlerde ayrı bölümün yapısını ve çıkarılabilirliğini kontrol edin. Ürün adı bir sağlık etkisi taahhüdü değildir. Hazne, kapak ve diğer parçaların bakımını kendi kullanım bilgisi üzerinden öğrenin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Temizlik ve içecek sıcaklığını siparişten önce sorun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Sıcak içecek veya bulaşık makinesi uygunluğunu bütün mataralarda var kabul etmeyin. Üreticinin gövde, kapak ve kılıf için verdiği talimatları ayrı öğrenin. Ayrılan parçalar varsa nasıl temizlenip yeniden birleştirileceğini sorun.</p>
              <p>Gövde baskısı veya kılıf uygulaması yapılacaksa markalama sonrasındaki bakım koşullarını da netleştirin. Numune dış görünümü ve kullanım hissini değerlendirmeye yardımcı olur; belirtilmeyen sıcaklık ya da dayanım değerlerini doğrulamaz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Gövde ve kılıf markalamasını ayrı yerleşimlerle onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Cam yüzey, plastik gövde ve kumaş kılıf aynı uygulama zemini değildir. Kılıfın dikişleri, gövdenin eğimi ve kapağın konumu kullanılabilir alanı etkileyebilir. Logo dosyanızı ileterek yöntem ve net ölçüyü seçilen yüzey için öğrenin.</p>
              <p>Kılıf logoyu kapatıyor mu, ürün elde tutulurken tasarım hangi yönde görünüyor? Yerleşim onayını bu kullanım üzerinden verin. Gövde ve kılıfa birlikte uygulama isteniyorsa iki alanın ölçüsü ve fiyat kapsamı ayrı tanımlansın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kurumsal dağıtım paketini ürünle birlikte planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Teklif talebinde gövde malzemesi, kapasite, kapak, renk dağılımı ve varsa kılıfı modelle eşleştirin. Logo uygulanacak yüzeyleri ve ayrı kutu ihtiyacını belirtin. Özellikle cam ürün için ambalajın nasıl hazırlanacağını ve sevkiyat kapsamını öğrenin.</p>
              <p>Farklı adreslere dağıtım, etkinlik paketi veya çalışan hediyesi isteniyorsa bunu sipariş adediyle birlikte paylaşın. Ürün bedelinin baskı, KDV ve paketleme kapsamını kontrol edin; minimum adet veya termin için modelde belirtilmeyen rakamları varsaymayın.</p>
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
            <Link href="/promosyon-matara" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Matara Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
