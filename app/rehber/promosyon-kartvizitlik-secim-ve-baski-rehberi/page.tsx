import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-kartvizitlik-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-kartvizitlik-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Kartvizitlik Seçimi | Kart Uyumu ve Baskı Rehberi";
const DESCRIPTION = "Kartvizitlikleri kart uyumu, kapak, malzeme ve logo alanıyla değerlendirin. Dış ölçü ile iç kapasiteyi ayırın, kurumsal hediye uygulamasını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Dış ölçü kartvizitin sığacağını gösterir mi?",
    "answer": "Tek başına göstermez. İç bölümün ölçüsü, kapak payı ve kart kalınlığı birlikte değerlendirilmelidir. Kullanacağınız kartvizitle numune kontrolü yapın."
  },
  {
    "question": "Kartvizitlik kaç kart alır?",
    "answer": "Doğrulanmış kapasite belirtilmiyorsa sabit bir adet söylenmemelidir. Kağıdın kalınlığı ve kaplaması da yerleşimi etkileyebilir. Hedef adedi kendi kartlarınızla kontrol edin."
  },
  {
    "question": "Termo deri gerçek deri midir?",
    "answer": "Termo deri ifadesi gerçek deri taahhüdü olarak kullanılmamalıdır. Ürün adında deri geçmesi de tek başına deri türünü açıklamaz. Malzeme ayrıntısını seçilen model için doğrulayın."
  },
  {
    "question": "Kart taşıma modeli kartvizitlikle aynı mı?",
    "answer": "Kullanım amacı benzer olsa da bölme ve kapak yapısı farklı olabilir. Kağıt kartvizit sunumu ile ayrı bölmelerde kart taşıma ihtiyacını ürün bazında değerlendirin."
  },
  {
    "question": "Her kartvizitliğe lazer uygulanır mı?",
    "answer": "Hayır. Lazer seçeneği belirtilen modelde alan ve tasarıma göre planlanır. Diğer yüzeylerde yöntem uygunluğu ayrıca teyit edilmelidir."
  },
  {
    "question": "Kartvizitlikte RFID koruması bulunur mu?",
    "answer": "Bu özellik açıkça belirtilip doğrulanmadıkça var kabul edilmemelidir. Metal görünümlü parça veya kapalı gövde tek başına RFID korumasını kanıtlamaz."
  },
  {
    "question": "Fiyata logo ve hediye kutusu dahil mi?",
    "answer": "Ürün, logo uygulaması, kişiselleştirme ve ambalaj kapsamı teklifte ayrı belirtilmelidir. Görseldeki kartlar veya kutu dahil içerik olarak varsayılmamalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Açık ve kapalı kartvizitliklerin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Kartvizitlik Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Kartvizitlik Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Kartvizitlik Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon kartvizitlik seçerken ilk soru hangi kartın nasıl taşınacağıdır. Müşteri görüşmesinde kağıt kartvizit sunmakla farklı kartları bölmelerde düzenlemek aynı kullanım değildir. Bu rehber iç uyumu, kapak davranışını ve malzeme bilgisini ayrı değerlendirerek logo uygulamasını doğru alanda planlamanıza yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Boş kartvizitlerin bulunduğu açık lacivert kartvizitlik ve kapalı bordo kartvizitlik" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, gerçek deri niteliğini veya kart kapasitesini göstermez. Kartlar kullanım örneğidir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Kartvizit sunumuyla kart taşımayı ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-kartvizitlik">Promosyon kartvizitlik modellerini</Link> incelemeden önce kullanıcının kendi kartvizitlerini mi sunacağını, aldığı kartvizitleri mi saklayacağını yoksa farklı kartları mı taşıyacağını belirleyin. Açık bir hazne ile ayrı kart bölmeleri aynı yerleşimi sunmayabilir.</p>
              <p>Müşteri ziyaretinde tek kartı kolay çıkarabilmek, etkinlikte ise kartları düzenli tutmak öne çıkabilir. Kart taşıma modeli adıyla sunulan seçeneğin kağıt kartvizit ihtiyacına da uygun olduğunu varsaymayın. İç bölüm ve kapak yapısını seçilen modelde görün.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dış ölçü yerine iç uyumu kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ürünün eni ve boyu dış gövdeyi anlatır; iç kart alanını veya logo ölçüsünü açıklamaz. Milimetre ve santimetreyle verilen değerleri aynı birime çevirerek karşılaştırın. Dikiş, kenar payı ve kapak gibi bölümler kullanılabilen iç alanı değiştirebilir.</p>
              <p>Kullanacağınız kartın gerçek ölçüsünü ve kalınlığını paylaşın. Kabartmalı, kalın veya farklı kesimli kartvizitleri yalnız dış gövde ölçüsüne göre uyumlu saymayın. Numunede kartın yerleşmesini, çıkarılmasını ve kapak kapandığında kenarlarının sıkışıp sıkışmadığını kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kart kapasitesini kendi kağıdınızla değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Doğrulanmış kart adedi verilmeyen modelde fotoğraftaki desteden kapasite tahmini yapmayın. Aynı sayıda iki kart destesi, kağıt kalınlığı veya kaplama nedeniyle farklı yer kaplayabilir. Günlük taşınacak hedef miktarı önceden belirleyin.</p>
              <p>Numuneyi bu miktarla doldurup kapatın; kartları çıkarırken zorlanıp zorlanmadığınızı gözlemleyin. Kartvizitliği doldurmak ile rahat kullanmak aynı sonuç değildir. Fazla doldurmayı standart kapasite olarak tanımlamadan modelin kullanım bilgisini teyit edin.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Kartvizitlikte kullanım ve baskı karşılaştırması</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">Kart ölçüsü, kapasite ve logo alanını ayrı bilgiler olarak değerlendirin.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Kullanım</th><td className="border p-3">Kartvizit sunma veya kart taşıma</td><td className="border p-3">İç bölme yapısı</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Uyum</th><td className="border p-3">Kartın gerçek eni, boyu ve kalınlığı</td><td className="border p-3">Dış ölçüden ayrı iç alan</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Kapasite</th><td className="border p-3">Günlük hedef kart miktarı</td><td className="border p-3">Kendi kartlarıyla kapak denemesi</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Malzeme</th><td className="border p-3">Doğrulanmış yüzey bilgisi</td><td className="border p-3">Termo deri ile gerçek deriyi ayırma</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Logo</th><td className="border p-3">Gerçek ölçülü tasarım</td><td className="border p-3">Yöntem, renk ve ayrı baskı alanı</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">Malzemeyi ürün adından daha ayrıntılı okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Termo deri olarak sunulan bir ürünü gerçek deri diye tanıtmayın. Ürün adında yalnız deri ifadesi bulunması da deri türünü, bileşimini veya üretim niteliğini açıklamaz. Kurumsal hediye açıklamasında kullanacağınız malzeme bilgisini tedarikçiden doğrulayın.</p>
              <p>Kapak yüzeyini, kenarları ve varsa dikişi numunede inceleyin. Renk seçimini katalog adıyla birlikte kaydedin; fotoğraf tonunu kesin renk örneği olarak kullanmayın. Farklı renklerde aynı dokunun veya aynı logo sonucunun elde edileceği ayrıca değerlendirilmelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak ve günlük taşıma biçimini birlikte deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapaklı kartvizitlikte açma yönü, masada sunum ve tek kart çıkarma davranışını deneyin. Cüzdan biçimindeki modelde ise kartların hangi bölümlere yerleştirildiğini görün. Dış görünüşten hareketle mıknatıs, kilit veya özel kapama mekanizması var saymayın.</p>
              <p>Taşınacak kart türüne göre ihtiyaç duyulan özellikleri ayrı yazın. RFID koruması, su geçirmezlik veya çizilmezlik gibi açıklanmayan özellikleri kapalı gövdeye ya da metal görünümlü parçaya dayanarak vaat etmeyin. Ürünü doğrulanan kullanım kapsamıyla sunun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logoyu dar baskı alanında gerçek ölçüde görün</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Gövde ölçüsüyle baskı alanını ayrı kaydedin. Uzun ve dar bir alanda yatay marka adı okunabilirken çok satırlı bir slogan aynı sonucu vermeyebilir. Küçük uygulamada ince çizgileri ve harfleri ekrandaki büyütülmüş tasarımla değil gerçek ölçülü prova üzerinden değerlendirin.</p>
              <p>Lazer belirtilen modelin yöntemini bütün kategoriye genellemeyin. Logo uygulaması, seçilen yüzey ve renk için teyit edilmelidir. Kapak kapalıyken logo yönünü, kenar payını ve varsa parça birleşimlerini kontrol edin. Logo ile kişi adı isteniyorsa bunları ayrı tasarım alanları olarak netleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Hediye ve sipariş kapsamını ayrı kaydedin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Çalışan adına uygulama yapılacaksa isim listesinin son halini ve her isim için adedi üretim onayından önce kontrol edin. Ortak kurumsal logo ile kişiye özel bilgi iki farklı onay gerektirebilir. Yazım ve karakterlerin doğru göründüğünü nihai tasarımda inceleyin.</p>
              <p>Teklifte ürün, logo, kişiselleştirme, kutu ve KDV kapsamını öğrenin. Görseldeki kartları veya hediye kutusunu dahil kabul etmeyin. Koli miktarını minimum siparişe çevirmeden stok, renk dağılımı ve teslim koşullarını ihtiyaç tarihiyle birlikte netleştirin.</p>
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
            <Link href="/promosyon-kartvizitlik" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Kartvizitlik Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
