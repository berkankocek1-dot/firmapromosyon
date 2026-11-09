import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kalemlerde-baski-turleri-nelerdir`;
const GUIDE_IMAGE = "/guides/promosyon-kalemlerde-baski-turleri-nelerdir.jpg";

const FAQ_ITEMS = [
  {
    "question": "Kalemde hangi baskı yöntemi daha iyidir?",
    "answer": "Tek bir yöntem bütün kalemler ve tasarımlar için daha iyi değildir. Gövde ve kaplama, baskı alanı, logo renkleri ve beklenen görünüm birlikte değerlendirilmelidir."
  },
  {
    "question": "Lazer uygulaması renkli logo baskısıyla aynı mı?",
    "answer": "Hayır. Lazer markalama yüzey veya kaplamada bir değişim oluşturur; sonuç malzeme ve işleme bağlıdır. Renkli mürekkeple basılmış logonun aynı görünümünü vereceği varsayılmamalıdır."
  },
  {
    "question": "UV baskı her kaleme uygulanabilir mi?",
    "answer": "Her gövde ve kaplama için otomatik uygunluk yoktur. Yüzey, mürekkep uyumu, ürünün sabitlenmesi ve uygulanabilir alan model bazında teyit edilmelidir."
  },
  {
    "question": "Dijital tasarım onayı baskının dayanıklılığını gösterir mi?",
    "answer": "Hayır. Dijital onay tasarım, ölçü ve yerleşimi değerlendirmeye yardımcı olur. Fiziksel yüzeyde görünüm ve tutunma için gerekiyorsa baskılı numune ve uygun değerlendirme koşulları ayrıca belirlenmelidir."
  },
  {
    "question": "Çift yön baskıda iki yüzün alanı aynı mıdır?",
    "answer": "Her modelde aynı olduğu kabul edilmemelidir. Klips, mekanizma ve gövde biçimi uygulanabilecek alanı etkileyebilir. Her yüzün ölçüsü ve tasarımı ayrı teyit edilmelidir."
  }
];

export const metadata: Metadata = {
  title: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
  description:
    "Promosyon kalemlerde kullanılan baskı türleri nelerdir? Tampon baskı, UV baskı, serigrafi ve lazer baskı gibi yöntemlerin farklarını, avantajlarını ve kullanım alanlarını inceleyin.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
    description:
      "Promosyon kalemlerde tampon baskı, UV baskı, serigrafi ve lazer baskı gibi yöntemlerin farklarını anlatan detaylı rehber.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}${GUIDE_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
    description:
      "Promosyon kalemlerde kullanılan baskı yöntemlerini ve aralarındaki farkları detaylı olarak inceleyin.",
    images: [`${SITE_URL}${GUIDE_IMAGE}`],
  },
};

export default function PromosyonKalemlerdeBaskiTurleriNelerdirPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
    description:
      "Promosyon kalemlerde kullanılan baskı türlerini, avantajlarını ve hangi kalem modelleri için uygun olduklarını anlatan detaylı rehber.",
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og.jpg`,
      },
    },
    image: [`${SITE_URL}${GUIDE_IMAGE}`],
    dateModified: "2026-11-09",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: `${SITE_URL}/rehber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Promosyon Kalemlerde Baskı Türleri Nelerdir?",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Promosyon Kalemlerde Baskı Türleri Nelerdir?</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="mb-6 overflow-hidden rounded-2xl">
            <Image
              src={GUIDE_IMAGE}
              alt="Promosyon Kalemlerde Baskı Türleri Nelerdir?"
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Kalemlerde Baskı Türleri Nelerdir?
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
            Promosyon kalemlerde tampon baskı, UV dijital baskı, lazer markalama ve
            uygun üretim koşullarında serigrafi gibi yöntemler değerlendirilebilir.
            Aynı yöntemin her gövdeye uygulanabildiği veya her tasarımda aynı sonucu
            verdiği varsayılmamalıdır. Seçim, kalemin yüzeyi ile logo beklentisinin
            birlikte değerlendirilmesine dayanır.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Tampon baskı nasıl çalışır?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Tampon baskıda görsel, hazırlanmış baskı plakasından silikon bir tampon aracılığıyla ürünün yüzeyine aktarılır. Kalemin biçimi, tampon ve mürekkep seçimi uygulamanın değerlendirilmesinde önemlidir.</p>
              <p>Logonun renk sayısı ve ince detayları, kullanılabilir alanla birlikte kontrol edilmelidir. Tampon baskının her işte en ucuz olduğu veya tüm yüzeylerde aynı tutunmayı sağlayacağı kabul edilmemelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">UV dijital baskının farkı nedir?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>UV dijital baskıda mürekkep yüzeye uygulanır ve ultraviyole ışıkla kürlenir. Çok renkli bir tasarım değerlendirilirken yöntem bir seçenek olabilir; fakat kalemin yüzeyi, kaplaması ve uygun mürekkep sistemi ayrıca kontrol edilmelidir.</p>
              <p>Koyu zemin, renk beklentisi ve varsa beyaz alt baskı ihtiyacı uygulayıcıyla konuşulmalıdır. Dijital dosyadaki görünümün her gövdede aynen elde edileceği veya baskının aşınmaz olacağı varsayılmamalıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Lazer baskı ile lazer markalama ne anlatır?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Günlük kullanımda lazer baskı denilen işlem, yüzeyin veya kaplamanın lazerle işaretlenmesini ifade edebilir. Metal üzerindeki işlem; malzemeye göre kazıma, yüzeyde değişim veya kaplama kaldırma gibi farklı sonuçlar verebilir.</p>
              <p>Bu nedenle markanın renkli logosunun lazerle aynı renklerde oluşacağı kabul edilmemelidir. Görünür renk ve kontrast seçilen kalemin malzemesi ile kaplamasına bağlıdır. Model üzerindeki örnek sonucu değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Serigrafi kalemlerde değerlendirilebilir mi?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Serigrafide mürekkep, desenin açık alanlarından bir şablon veya elek üzerinden yüzeye aktarılır. Yöntemin kaleme uygunluğu gövde biçimi, uygulama alanı ve üretim düzeneğine bağlıdır.</p>
              <p>Bir yöntem hakkında bilgi verilmesi, her kalem modelinde o hizmetin sunulduğu anlamına gelmez. Serigrafi veya diğer uygulamalar için seçtiğiniz model üzerinde mevcut seçenekleri teyit edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Yöntemleri karşılaştırırken hangi sorular sorulmalı?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Gövde ve kaplama nedir? Logo kaç renk ve hangi boyutta? Tek yüz mü çift yüz mü basılacak? Gerçek uygulama ölçüsünde küçük harfler okunuyor mu? Klips veya mekanizma baskı alanını sınırlıyor mu?</p>
              <p>Bu soruları <Link href="/promosyon-kalem">seçilen kalem modeli</Link> üzerinden yanıtlayın. Sadece plastik veya metal sınıflandırması, yöntem uygunluğunu ve nihai görünümü tek başına belirlemez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo dosyası ve baskı onayı nasıl hazırlanmalı?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Varsa vektörel logo dosyasını paylaşın; kabul edilen biçimi ve gerekli hazırlıkları uygulayıcıyla teyit edin. Baskı alanını ölçüsüyle birlikte isteyin ve tasarımı gerçek boyutta inceleyin. Ekranda büyütülmüş bir görsel okunurluğu kanıtlamaz.</p>
              <p>Her yüzde hangi tasarımın yer alacağı, yönü, ölçüsü ve gövde rengi onay kaydında görülsün. Fiziksel renk veya yüzey beklentisi belirleyiciyse baskılı numune koşullarını sorun. Dijital yerleşim onayı fiziksel tutunma veya aşınma değerlendirmesinin yerine geçmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune ve teklif aşamasına geçiş</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Numunenin baskılı mı baskısız mı olduğunu ve seri siparişle aynı model, kaplama ve renge sahip olup olmadığını teyit edin. Yazım ve tutuş kontrolleri için <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli">kalem seçim rehberine</Link> geçebilirsiniz.</p>
              <p>Baskı yüzü, renkler ve hazırlık kapsamı maliyet hesabında açıkça yer almalıdır. Bu kalemlerin toplama nasıl eklendiği için <Link href="/rehber/promosyon-kalem-fiyatlari-nasil-hesaplanir">kalem fiyat hesaplama rehberini</Link> inceleyebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı yöntemleri karşılaştırma tablosu</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <caption className="mb-2 text-left text-gray-600">Uygunluk ve hizmet kapsamı seçilen model için ayrıca teyit edilir.</caption>
                <thead><tr><th scope="col" className="border p-3">Yöntem</th><th scope="col" className="border p-3">Temel ayrım</th><th scope="col" className="border p-3">Kontrol edilecek nokta</th></tr></thead><tbody>
                  <tr><th scope="row" className="border p-3">Tampon baskı</th><td className="border p-3">Mürekkebin silikon tamponla aktarılması</td><td className="border p-3">Yüzey ve mürekkep uyumu, renk ve detaylar</td></tr>
                  <tr><th scope="row" className="border p-3">UV dijital baskı</th><td className="border p-3">Mürekkebin UV ışıkla kürlenmesi</td><td className="border p-3">Yüzey tutunması, renk beklentisi ve uygulama alanı</td></tr>
                  <tr><th scope="row" className="border p-3">Lazer markalama</th><td className="border p-3">Malzeme veya kaplamanın işaretlenmesi</td><td className="border p-3">Modelde oluşan gerçek renk ve kontrast</td></tr>
                  <tr><th scope="row" className="border p-3">Serigrafi</th><td className="border p-3">Şablon veya elek üzerinden mürekkep aktarılması</td><td className="border p-3">Gövdeye uygun üretim düzeneği ve hizmetin mevcut olması</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-4 space-y-5 leading-7 text-gray-700">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-semibold">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teknik açıklamalar için kaynaklar</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              <li><a href="https://printexusa.com/introduction-to-pad-printing/" className="underline">Printex: tampon baskının çalışma prensibi</a></li>
              <li><a href="https://singapore.mimaki.com/application/solution/uv-printing.html" className="underline">Mimaki: UV ve serigrafi yöntemleri</a></li>
              <li><a href="https://www.troteclaser.com/static/images/Contact_Support/Manuals/engravers-handbook/Handbook-for-engravers.pdf" className="underline">Trotec: metal yüzeylerde lazer işaretleme yöntemleri</a></li>
            </ul>
          </section>
          <div className="flex flex-wrap gap-4 font-semibold underline">
            <Link href="/promosyon-kalem">Kalem modellerini incele</Link>
            <Link href="/kurumsal-teklif-al">Kurumsal teklif al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}