import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-cep-aynasi-ve-aynali-set-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-cep-aynasi-ve-aynali-set-secim-rehberi.jpg";
const TITLE = "Promosyon Cep Aynası ve Aynalı Set Seçim Rehberi";
const DESCRIPTION = "Cep aynası ve aynalı setleri form, kapak ve kullanım kapsamıyla karşılaştırın. Ayna özelliklerini, set içeriğini ve logo alanını ayrı değerlendirin.";
const FAQ_ITEMS = [
  {
    "question": "Katlanır ayna çift taraflı veya büyütmeli midir?",
    "answer": "Katlanabilir form, ayna yüzeyi sayısını veya büyütme oranını tek başına açıklamaz. Bu özellikler ayrıca belirtilmiyorsa var kabul edilmemelidir."
  },
  {
    "question": "Kare aynanın ürün ölçüsü baskı alanı mı?",
    "answer": "Hayır. Dış gövde, yansıtıcı yüzey ve logo uygulama alanı ayrı ölçülerdir. Kare gövdede tek bir baskı ölçüsü verilmesi de aynı değerde en ve boy olduğu anlamına gelmez."
  },
  {
    "question": "Derili ayna gerçek deri mi?",
    "answer": "Derili ifadesi gerçek deri türünü doğrulamaz. Kaplama malzemesinin ayrıntısı ve kullanılacak ürün açıklaması seçilen model için teyit edilmelidir."
  },
  {
    "question": "Aynalı manikür setinde hangi parçalar bulunur?",
    "answer": "Setin belirtilen parça sayısı tek başına araç listesini açıklamaz. Parçaların adlarını ve aynanın sayıya dahil olup olmadığını teklif sırasında öğrenin."
  },
  {
    "question": "Her cep aynasına aynı yöntemle baskı yapılır mı?",
    "answer": "Hayır. Yöntem ve alan seçilen kapak yüzeyiyle birlikte değerlendirilmelidir. Bir modelde belirtilen serigrafi, tampon, UV veya dijital uygulama bütün modellere genellenmemelidir."
  },
  {
    "question": "Cep aynalarında ışık veya kırılmazlık özelliği var mı?",
    "answer": "Bu özellikler açıkça belirtilmediğinde ışıklı, çizilmez veya kırılmaz olarak sunulmamalıdır. Fotoğraf ve gövde görünüşü bu tür özellikleri kanıtlamaz."
  },
  {
    "question": "Manikür seti tıbbi ya da steril bir ürün müdür?",
    "answer": "Kategoride kişisel bakım hediyesi olarak sunulması tıbbi kullanım veya steril teslim taahhüdü değildir. Belirtilmeyen sterilizasyon veya sağlık iddiası eklenmemelidir."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Katlanır cep aynalarının temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Cep Aynası ve Aynalı Set Seçim Rehberi", item: PAGE_URL },
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
        <span>Cep Aynası ve Aynalı Set Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Cep Aynası ve Aynalı Set Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon cep aynası seçerken taşıma kolaylığı, kapağın açılması ve logo yerleşimini birlikte değerlendirin. Aynalı bir kişisel bakım setinde ise bunlara ek olarak teslim edilecek parçaları öğrenmek gerekir. Bu rehber, ayna özelliğiyle gövde formunu ayırarak kampanya hediyesini kullanım amacına göre seçmenize yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Açık kare cep aynası ve kapalı yuvarlak beyaz ayna" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, malzeme türünü, büyütme oranını veya set içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Hediyenin kullanım senaryosunu belirleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-ayna-deri-kartliklar">Cep aynası ve aynalı set modellerini</Link> günlük çantada taşıma, etkinlik dağıtımı veya kişisel bakım kampanyası ihtiyacına göre inceleyin. Sadece ayna isteyen kullanıcıyla ek bakım parçaları isteyen kullanıcı için aynı içerik gerekli olmayabilir.</p>
              <p>Kampanya mesajını ürünün doğrulanan işlevine bağlayın. Ayna sunumuyla bakım setini tek bir teslim kapsamı gibi anlatmayın. Dağıtım biçimi, paketin kapladığı alan ve kullanıcının ürünü nasıl taşıyacağı seçimde birlikte düşünülmelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapalı gövdeyle açık kullanım alanını karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kompakt ürünün kapalı ölçüsü çantada kapladığı yeri anlatır. Kapak açıldığında gerekli boşluk ve aynayı tutuş biçimi farklıdır. Kare form ile yuvarlak formu yalnız dış görünüş açısından değil, elde açma ve kapatma deneyimi açısından da değerlendirin.</p>
              <p>Numunede menteşenin hareketini, kapak kapanışını ve varsa kilitleme parçasını gözlemleyin. Katlanır olması kendi başına masada sabit duracağını göstermez. Stand olarak kullanılmasını istiyorsanız açılma ve duruş biçimini seçilen ürün üzerinde kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ayna yüzeyi sayısı ve büyütmeyi ayrıca sorun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bir ürünün katlanması, içinde iki ayna bulunduğunu veya yüzeylerden birinin büyütmeli olduğunu kanıtlamaz. Kullanıcının bu özelliklere ihtiyacı varsa yüzey sayısını ve varsa büyütme bilgisini ayrı isteyin. Fotoğraftaki yansımadan teknik özellik çıkarmayın.</p>
              <p>Aydınlatma, kırılmazlık veya çizilmezlik gibi kaynakta bulunmayan iddiaları eklemeyin. Numuneyi kullanım konumunda inceleyerek görüntüyü ve tutuşu değerlendirin. Yansıtıcı yüzeyin ölçüsüyle dış kapak ölçüsünün aynı olduğunu varsaymayın.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Cep aynası ve aynalı sette seçim tablosu</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">Gövde, yansıtıcı yüzey ve set içeriğini ayrı değerlendirin.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Cep aynası</th><td className="border p-3">Günlük taşıma</td><td className="border p-3">Kapalı ölçü ve açma biçimi</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Ayna yüzeyi</th><td className="border p-3">Yansıtıcı alan</td><td className="border p-3">Yüzey sayısı ve varsa büyütme bilgisi</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Kaplama</th><td className="border p-3">Görünüm ve logo zemini</td><td className="border p-3">Doğrulanmış malzeme niteliği</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Aynalı set</th><td className="border p-3">Birlikte sunulan bakım parçaları</td><td className="border p-3">Tek tek teslim içeriği</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Logo</th><td className="border p-3">Kapak üzerinde yerleşim</td><td className="border p-3">Kesin alan şekli ve uygun yöntem</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">Kaplama bilgisini malzeme taahhüdüne dönüştürmeyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Derili ayna adı, kaplamanın gerçek deri olduğunu veya belirli bir deri türünü açıklamaz. Malzeme bilgisini doğrulanmış kapsamıyla kullanın. Hediye kartında veya kampanya metninde ayrıca bir malzeme iddiası yer alacaksa önce tedarikçiye teyit ettirin.</p>
              <p>Kapak rengi ve dokusu logo görünümünü etkileyebilir. Açık renk kapakta kullanılacak tasarımı gerçek yüzey örneğiyle değerlendirin. Katalogdaki renk adı, fotoğraf tonu ve güncel stok bilgisini birbirinden ayrı tutun; dağıtımda renk karışımı isteniyorsa adetleri netleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Aynalı setin parça listesini onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Aynalı manikür setinde parça sayısını tek tek araç isimleri yerine kullanmayın. Aynanın sayıya dahil olup olmadığını, parçaların nasıl yerleştirildiğini ve hangi içeriğin teslim edileceğini liste olarak isteyin. Görselde bir araç görünmesi bütün siparişlerde aynı içerik geleceğini tek başına garanti etmez.</p>
              <p>Ürünü kişisel bakım hediyesi olarak değerlendirirken belirtilmeyen tıbbi kullanım, steril teslim veya özel malzeme niteliği vaat etmeyin. Varsa kullanım ve bakım bilgisini talep edin. Yalnız ayna ihtiyacı olan bir dağıtımda, kullanılmayacak ek parçalar yerine daha sade bir ürün seçeneğini de karşılaştırın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı alanının şeklini tasarım öncesinde öğrenin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ürün ölçüsü ve uygulama alanı farklı bilgilerdir. Kare gövdede tek bir uzunlukla belirtilen baskı alanını aynı ölçüde kare alan diye yorumlamayın. Kesin sınırı ve şekli gösteren yerleşim çalışmasını isteyin; kapak kenarıyla menteşe payını dikkate alın.</p>
              <p>Serigrafi, tampon, UV ve dijital seçeneklerini modelin yüzeyiyle birlikte değerlendirin. Bir üründe belirtilen yöntemi bütün aynalara veya set kapaklarına genellemeyin. Logonun dış kapakta hangi yönde görüleceğini ve küçük yazıların gerçek ölçüde okunmasını tasarım onayında kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dağıtım paketini ve teslim kontrolünü planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Teklife model, adet, renk dağılımı ve logo dosyasını ekleyin. Baskı bedeli, ürün fiyatı, KDV ve ek ambalajı ayrı öğrenin. Kutu miktarını minimum sipariş saymadan stok ve teslim koşullarını ihtiyaç tarihinizle netleştirin.</p>
              <p>Teslim kontrolünde kapakların açılıp kapanmasını, yüzey görünümünü ve logo konumunu onaylı numuneyle karşılaştırın. Set siparişinde parça listesini de kontrol edin. Taşıma ve toplu paketlemede aynaların nasıl ayrılacağını ve ambalaj kapsamını üretim öncesinde görüşün.</p>
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
            <Link href="/promosyon-ayna-deri-kartliklar" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Cep Aynası ve Aynalı Setleri İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
