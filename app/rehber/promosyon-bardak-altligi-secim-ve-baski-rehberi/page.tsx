import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-bardak-altligi-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-bardak-altligi-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Bardak Altlığı Seçimi | Set ve Logo Baskı Rehberi";
const DESCRIPTION = "Promosyon bardak altlıklarını tekli ürün ve set kapsamı, ölçü, malzeme ve logo alanıyla karşılaştırın. Fiyatın esas alındığı adet ve baskı kapsamını netleştirin.";
const FAQ_ITEMS = [
  {
    "question": "Tekli bardak altlığı ile set fiyatı nasıl karşılaştırılır?",
    "answer": "Önce fiyatın tek bir altlığa mı, yoksa belirli sayıda altlık ve standa mı ait olduğunu öğrenin. Set içindeki altlık sayısını ve standın dahil olup olmadığını teyit ederek aynı içerik üzerinden karşılaştırın."
  },
  {
    "question": "Bardak altlığının malzemesi fotoğraftan anlaşılır mı?",
    "answer": "Fotoğraf kesin malzeme ve kalınlık bilgisi yerine geçmez. Özellikle malzemesi açıklanmayan bir ürünü karton, mantar veya başka bir malzemeymiş gibi değerlendirmeyin; teknik bilgiyi ayrıca isteyin."
  },
  {
    "question": "Suni deri bardak altlığı hakiki deri midir?",
    "answer": "Hayır. Suni deri olarak tanımlanan ürün hakiki deri olarak sunulmamalıdır. Özel bir malzeme talebi varsa seçilen ürünün teknik bilgisinden uygunluğu teyit edin."
  },
  {
    "question": "Bardak altlığının dış ölçüsü baskı alanı mı?",
    "answer": "Hayır. Kenarlar, dikişler, yüzey ve uygulanacak yöntem kullanılabilir alanı etkileyebilir. Logo için net ölçü ve yerleşim ayrıca onaylanmalıdır."
  },
  {
    "question": "Minimum siparişte liste birim fiyatı geçerli mi?",
    "answer": "Her zaman değil. Minimum adet siparişin alt sınırını, fiyatın esas alındığı adet ise belirtilen tutarın hangi miktar için hesaplandığını anlatır. Talep ettiğiniz miktar için güncel teklif isteyin."
  },
  {
    "question": "Bütün bardak altlıkları suya veya yüksek ısıya dayanır mı?",
    "answer": "Bütün ürünler için böyle bir özellik varsayılmamalıdır. Kullanım koşullarını, temizlik bilgisini ve varsa modele ait performans verisini sorun. Kaynakta belirtilmeyen test değerlerini ürün özelliği olarak kullanmayın."
  },
  {
    "question": "Logo yalnızca altlığa mı uygulanır?",
    "answer": "Setlerde altlık ve stand farklı uygulama yüzeyleri olabilir. Hangi parçaya, kaç kez ve hangi yöntemle uygulama istendiğini belirtin; yüzey uygunluğu ve baskı kapsamını teklif üzerinden teyit edin."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Standlı suni deri bardak altlıkları ve kupa ile temsili masaüstü görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Bardak Altlığı Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Bardak Altlığı Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Bardak Altlığı Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon bardak altlığı seçerken ilk ayrım tekli dağıtım ile standlı set kullanımıdır. Kafe masası, etkinlik ve toplantı odasında ihtiyaç duyulan adet, sunum ve logo yerleşimi farklı olabilir. Ürün ve set birimini, ölçüyü, malzemeyi ve baskı kapsamını birlikte değerlendirerek teklifleri aynı koşullarda karşılaştırabilirsiniz.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Siyah ve taba suni deri bardak altlıkları, taşıma standı ve beyaz kupa" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, set adedini veya paket kapsamını göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Dağıtım adedi ile masa kullanımını ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-bardak-altligi">Promosyon bardak altlıklarını</Link> nerede ve nasıl kullanacağınızı belirleyerek inceleyin. Etkinlikte tek tek dağıtılacak bir ürünle toplantı masasında stand içinde tutulacak altlıkların sipariş hesabı aynı olmayabilir.</p>
              <p>Kaç masada, aynı anda kaç altlık gerektiğini not edin. Standın masada kapladığı alanı ve kullanım sonrası toplama biçimini değerlendirin. Hediye olarak verilecekse tekli ambalaj veya set sunumu talebini baştan belirtin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Adet ile seti aynı birim gibi değerlendirmeyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bir fiyatın tek altlığa mı yoksa standa sahip bir sete mi ait olduğunu öğrenin. Set içindeki altlık sayısını ayrıca teyit edin; bir modeldeki parça sayısını başka bir standlı ürüne aktarmayın. Standın fiyata dahil olup olmadığını da kontrol edin.</p>
              <p>İhtiyaç hesabında set sayısı ile set başına altlık adedini çarparak toplam altlık miktarını bulun. Ancak fiyat karşılaştırmasında stand ve ambalaj gibi ek parçaları da hesaba katın. Yalnızca parça başına bölünmüş tutar, farklı içerikleri tamamen eşdeğer hale getirmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ölçüyü bardak tabanı ve masa alanıyla birlikte okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Yuvarlak üründe çap ile kare üründe kenar uzunluğu farklı ölçü bilgileridir. Kullanılacak bardak veya kupanın tabanını, altlığın gerçek kullanılabilir yüzeyiyle birlikte değerlendirin. Görseldeki kupanın her bardak için uyum garantisi olmadığını dikkate alın.</p>
              <p>Dikiş, kenar veya farklı bir yüzey detayı varsa numunede inceleyin. Kalınlık ve stand ölçüsü gerekiyorsa ayrıca sorun. Ürünün dış ölçüsünü doğrudan logo baskı alanı olarak kabul etmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Bardak altlığı tekliflerini aynı kapsamda karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Tekli ürün ve set farklı sipariş birimleridir; modelin güncel içeriğini esas alın.</caption>
              <thead><tr><th scope="col" className="border p-3">Ölçüt</th><th scope="col" className="border p-3">Ne anlatır?</th><th scope="col" className="border p-3">Kontrol edilecek bilgi</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Tekli ürün</th><td className="border p-3">Birim altlık miktarı</td><td className="border p-3">Fiyatın esas alındığı adet ve malzeme</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Standlı set</th><td className="border p-3">Altlıklar ve standın birlikte sunumu</td><td className="border p-3">Set başına altlık sayısı ve dahil parçalar</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Dış ölçü</th><td className="border p-3">Ürünün genel boyutu</td><td className="border p-3">Bardak tabanı uyumu ve kullanılabilir alan</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Yüzey malzemesi</th><td className="border p-3">Doku ve uygulama zemini</td><td className="border p-3">Teknik bilgi ve temizlik koşulları</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Logo kapsamı</th><td className="border p-3">Uygulama yapılacak parça ve yüzey</td><td className="border p-3">Yöntem, ölçü ve uygulama sayısı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Minimum sipariş</th><td className="border p-3">Siparişin alt sınırı</td><td className="border p-3">İstenen miktar için güncel fiyat</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Malzeme ve kullanım koşullarını teyit edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Malzeme açıklanmayan bir ürünü fotoğrafına bakarak karton, mantar veya başka bir malzeme olarak tanımlamayın. Malzeme ve kalınlık seçimi sizin için önemliyse teknik bilgi isteyin. Suni deri olarak sunulan seçeneği hakiki deri diye değerlendirmeyin.</p>
              <p>Su, leke veya ısı dayanımı için bütün modellerde aynı sonucu varsaymayın. Kullanacağınız içecek kabı ve masa yüzeyine göre uygunluğu sorun; temizlik bilgisini öğrenin. Numune yüzey hissini ve ölçü uyumunu değerlendirmeye yardımcı olur, belirtilmeyen dayanım değerlerini doğrulamaz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Altlık ve stand için logo yerleşimini ayrı planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Logonun altlıkta mı, standda mı yoksa ikisinde de mi bulunacağını belirtin. Bir sette birden fazla altlığa uygulama isteniyorsa kaç parçada ve hangi yönde olacağını açıkça yazın. Kupa yerleştirildiğinde logo görünümünün değişeceğini de tasarım değerlendirmesine dahil edin.</p>
              <p>Bir setin bütün altlıklarında aynı uygulama isteniyorsa bunu parça sayısıyla belirtin. Stand üzerindeki logo için ayrı konum ve ölçü tanımlayın. Yuvarlak veya kare formda logo yönünü, kenar boşluğunu ve varsa dikiş sınırını tasarım üzerinde kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı yöntemini ürün yüzeyiyle eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ofset veya dijital baskı belirtilen bir ürünle suni deri setin uygulama koşulları aynı olmayabilir. Ürün kaydında belirtilen yöntemi seçilen yüzey için değerlendirin. Suni deri seçenekte yöntem ve kullanılabilir alan açık değilse tasarım üzerinden uygunluk isteyin.</p>
              <p>Logo rengi, yüzey rengi ve uygulama boyutunu birlikte paylaşın. Bir yüzey için uygun görülen yöntemi standa veya başka malzemeye otomatik olarak aktarmayın. Baskı yönü, uygulama sayısı ve varsa hazırlık bedelini nihai teklif kapsamında netleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Minimum adet ile fiyatın esas alındığı miktarı ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Minimum sipariş alt sınırıyla liste fiyatının hesaplandığı miktar farklı olabilir. Daha yüksek bir adet için verilen birim fiyatın minimum adette de geçerli olduğunu varsaymayın. Talep ettiğiniz miktar için yazılı teklif alın.</p>
              <p>Teklifte adet ya da set birimi, set içeriği, baskı yapılacak parça sayısı ve dahil uygulamalar aynı şekilde tanımlansın. Ürün, baskı, varsa hazırlık, ambalaj, KDV ve sevkiyat kapsamını aynı koşullarda karşılaştırın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune ve teslim kapsamını onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numuneyi kullanılacak bardak veya kupayla birlikte inceleyin. Altlığın ölçüsünü, yüzeyini ve varsa stand içindeki yerleşimini değerlendirin. Seri siparişin aynı model ve set içeriğiyle hazırlanacağını teyit edin.</p>
              <p>Set numunesinde standı ve altlıkları birlikte değerlendirin; sipariş onayında set başına parça sayısı açık olsun. Logo için altlık ve standın uygulama örnekleri ayrı değerlendirilebilir. Masa düzenini tamamlamak için <Link href="/promosyon-imalat-urunler">imalat ürünlerine</Link> veya <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler">ahşap ve deri masaüstü ürünlerine</Link> geçebilirsiniz.</p>
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
            <Link href="/promosyon-bardak-altligi" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Bardak Altlığı Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
