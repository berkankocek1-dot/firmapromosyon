import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-usb-bellek-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-usb-bellek-secim-rehberi.jpg";
const TITLE = "Promosyon USB Bellek Seçimi | Kapasite, Hız ve Logo Rehberi";
const DESCRIPTION = "Promosyon USB bellek seçerken kapasiteyi, bağlantıyı, gerçek aktarım hızını ve logo alanını ayrı değerlendirin. Numune, dosya yükleme ve toplu siparişinizi planlayın.";
const FAQ_ITEMS = [
  {
    "question": "USB bellek kapasitesi nasıl seçilmeli?",
    "answer": "Dağıtılacak dosyaların toplam boyutu ölçülmeli ve gerekirse güncelleme payı bırakılmalıdır. İşletim sisteminde görünen kullanılabilir alanın etiket kapasitesiyle aynı olmayabileceği dikkate alınmalı; seçilen kapasitenin temini teyit edilmelidir."
  },
  {
    "question": "Metal USB bellek daha hızlı mı?",
    "answer": "Gövde malzemesi belirli bir USB standardını veya okuma-yazma hızını göstermez. Metal yüzey, bağlantı, kapasite ve performans ayrı özelliklerdir."
  },
  {
    "question": "USB 3.0 ifadesi kesin dosya kopyalama hızı mı?",
    "answer": "Hayır. Bağlantı standardı ile gerçek okuma-yazma performansı aynı bilgi değildir. Bellek, bilgisayar portu ve dosya yapısı sonucu etkiler; modelin doğrulanmış performans bilgileri esas alınmalıdır."
  },
  {
    "question": "Type-C ucu bulunan her USB bellek aynı özellikleri sunar mı?",
    "answer": "Hayır. Konnektör biçimi hız standardını veya her telefonla kullanım desteğini tek başına göstermez. Hedef cihaz, işletim sistemi ve modelin bağlantı özellikleri birlikte teyit edilmelidir."
  },
  {
    "question": "Boş alan olmasına rağmen büyük dosya neden yüklenmeyebilir?",
    "answer": "Toplam boş alanın yanında dosya sistemi ve tek dosya sınırı da önemlidir. Örneğin FAT32 tek dosyada 4 GiB eksi 1 bayt sınırına sahiptir. Dosya ve hedef cihaz uyumu birlikte kontrol edilmelidir."
  },
  {
    "question": "Katalog veya sunum dosyaları siparişten önce yüklenebilir mi?",
    "answer": "Bu hizmetin sunulup sunulmadığı, bedeli ve teslim planına etkisi ayrıca sorulmalıdır. Dosyaların son sürümü, toplam boyutu, klasör düzeni ve hedef cihazda açılması örnek üzerinde kontrol edilmelidir."
  },
  {
    "question": "Her metal USB belleğe lazer logo uygulanır mı?",
    "answer": "Uygunluk yüzeyin kaplamasına ve logo alanına bağlıdır. Lazer, UV veya diğer yöntemler model bazında değerlendirilmelidir. Logo yerleşimi ve gerçek ölçüde okunurluk üretimden önce onaylanmalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kurumsal USB bellek seçimini temsil eden farklı gövde seçenekleri" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon USB Bellek Seçim Rehberi", item: PAGE_URL },
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
        <span>USB Bellek Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon USB Bellek Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">USB bellek seçiminde depolama kapasitesi, bağlantı biçimi ve gerçek aktarım performansı ayrı karar noktalarıdır. Gövde tasarımı ve logo uygulamasını bu teknik ihtiyaçlarla birlikte değerlendirin. Bu rehber, model seçimi ile numune ve toplu sipariş hazırlığını adım adım ele alır.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Metal, döner kapaklı ve ahşap görünümlü USB bellek seçeneklerinin temsili görünümü" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, kapasiteleri veya kutu içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Dosyadan ve hedef cihazdan başlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bellek hangi amaçla verilecek: fuar kataloğu, sunum dosyaları, çalışan kiti veya kurumsal hediye mi? Önce alıcının kullanacağı cihazları ve aktarılacak içeriği belirleyin. Yalnız dış görünüşe veya kapasite etiketine göre karar vermeyin.</p>
              <p>Güncel <Link href="/promosyon-usb-bellek">USB bellek modellerinde</Link> açıklanan bağlantı ve kapasite bilgilerini karşılaştırın. Ürün bilgisinde bulunmayan hız, çift uç veya telefon desteğini varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapasiteyi dosya toplamına göre belirleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Katalog, video ve sunumların son sürümlerini bir araya getirerek toplam boyutu ölçün. İçerik daha sonra güncellenecekse ek alan ihtiyacını da planlayın. Seçilen modelde istenen kapasitenin mevcut olduğunu teklif aşamasında teyit edin.</p>
              <p>Etiket kapasitesi ile işletim sisteminin gösterdiği kullanılabilir alan aynı olmayabilir. Birimlerin gösterimi ve biçimlendirme için ayrılan alan bu farkta rol oynayabilir. Bu nedenle dosyaların sığmasını yalnız etiketteki sayıya bakarak değerlendirmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Bağlantı biçimi ile USB standardını ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>USB-A veya Type-C gibi adlar fiziksel bağlantıyla; USB 2.0 veya USB 3.x ifadeleri ise ayrı teknik özelliklerle ilgilidir. Type-C bağlantısı tek başına belirli bir aktarım standardı anlamına gelmez.</p>
              <p>Bilgisayar, telefon veya başka bir cihaz hedefleniyorsa port ve işletim sistemi uyumunu birlikte sorun. Çift uçlu bir modelde uçların türünü açıklamadan teyit edin; telefonun harici depolamayı kullanabilmesi yalnız ucun oturmasına bağlı değildir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Okuma ve yazma hızını ayrı değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>USB standardının teorik aktarım kapasitesi, dosyanın belleğe kopyalanacağı gerçek hız değildir. Okuma ve yazma performansı da aynı değer olmak zorunda değildir. Varsa model için doğrulanmış değerleri ve bunların hangi koşullara ait olduğunu isteyin.</p>
              <p>Numunede hedef cihaz ve benzer dosyalarla deneme yapın. Çok sayıda küçük dosyayla tek büyük dosyanın aktarımı farklı sonuç verebilir. Metal gövde veya yüksek kapasite tek başına daha yüksek hız garantisi değildir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">USB bellek bilgilerinde neyi karşılaştırıyorsunuz?</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-gray-600">Kapasite, uç, standart ve gövde bilgileri birbirinin yerine geçmez.</caption>
                <thead><tr><th scope="col" className="border p-3">Özellik</th><th scope="col" className="border p-3">Anlamı</th><th scope="col" className="border p-3">Kontrol</th></tr></thead><tbody>
                  <tr><th scope="row" className="border p-3 font-semibold">Kapasite</th><td className="border p-3">Dosyalar için depolama alanı</td><td className="border p-3">İçeriğin toplam boyutu, güncelleme payı ve sunulan kapasite</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold">Bağlantı biçimi</th><td className="border p-3">Cihaza takılan fiziksel uç</td><td className="border p-3">USB-A, Type-C veya çift uç özellikleri</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold">USB standardı</th><td className="border p-3">Aktarım arayüzüne ilişkin bilgi</td><td className="border p-3">Seçilen modelin doğrulanmış standardı</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold">Gerçek hız</th><td className="border p-3">Dosyaların okunma ve yazılma performansı</td><td className="border p-3">Numunede hedef cihaz ve benzer dosyalarla sonuç</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold">Gövde ve logo</th><td className="border p-3">Taşıma, mekanizma ve markalama alanı</td><td className="border p-3">Kaplama, baskı yöntemi, net ölçü ve yerleşim</td></tr>
                </tbody></table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Metal gövde ve diğer tasarımlar neyi değiştirir?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-metal-usb-bellek">Metal USB belleklerde</Link> gövde biçimi, kapak mekanizması, anahtarlık veya askı bağlantısı taşıma ve logo yerleşimi açısından değerlendirilebilir. Bu özellikler depolama standardını belirlemez.</p>
              <p>Ahşap, deri, kart veya kalem biçimindeki alternatiflerde de dış ölçü, kullanılabilir logo alanı ve paket kapsamı ayrı teyit edilmelidir. Bir gövde tipinin bütün kullanıcılar için daha uygun olduğu varsayılmamalıdır.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dosya sistemi ve büyük dosya uyumunu kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Toplam boş alan yeterli olsa bile tek dosyanın boyutu ve dosya sistemi yüklemeyi sınırlayabilir. FAT32 için tek dosya üst sınırı 4 GiB eksi 1 bayttır; bu konu toplam bellek kapasitesinden farklıdır.</p>
              <p>Büyük video veya arşiv dosyası dağıtılacaksa kullanılacak dosya sistemi ile hedef bilgisayar, televizyon veya başka cihazın desteğini birlikte teyit edin. Hazırlanan örnekte dosyaların açılabildiğini kontrol edin; yalnız kopyalamanın tamamlanması kullanım uyumunu göstermez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Katalog yükleme talebini siparişe ekleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Dosya yükleme hizmetinin sunulabilirliğini, ayrıca ücretlendirilip ücretlendirilmediğini ve teslim planına etkisini sorun. Dosyaların son sürümünü, klasör adlarını ve içeriğin toplam boyutunu yazılı olarak netleştirin.</p>
              <p>Toplu hazırlıktan önce örnek bellekte içerik ve açılabilirlik onayı verin. Alıcıya sunulacak dosyalarla ürünün teknik özelliklerini birbirine karıştırmayın; içerik yükleme seçeneği her modelde otomatik hizmet kapsamı değildir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo, numune ve teklif kapsamını tamamlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Metal kaplamanın lazer uygulamasına veya renkli baskıya uygunluğu model bazında değerlendirilmelidir. Döner kapak, sürgü, anahtarlık ve gösterge gibi parçaların logo alanına etkisini kontrol edin. Tasarımı gerçek uygulama ölçüsünde inceleyin.</p>
              <p>USB bellek teklifini kapasite, bağlantı türü ve istenen gövde üzerinden oluşturun. Tek ya da çift yüz logo, kutu ve varsa dosya yükleme hizmeti ayrı satırlarda tanımlansın. Böylece yalnız kapasitesi aynı olan, fakat sunumu ve hizmet kapsamı farklı iki teklif karıştırılmaz.</p>
              <p>Dosya yüklemesi isteniyorsa önce onaylanmış içerik sürümünü, ardından örnek bellekteki dosya kontrolünü tamamlayın. Logo uygulamasını da ayrıca onaylayarak üretim başlangıcını bu iki kararla ilişkilendirin. Set hazırlanacaksa <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi">kurumsal hediye seti rehberi</Link> kutu ve sunum planını tamamlayabilir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş öncesi kısa kontrol listesi</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-700">
              <li>Dosyaların toplam boyutu ve hedef cihazlar belli mi?</li>
              <li>Kapasite, bağlantı ve standart ayrı teyit edildi mi?</li>
              <li>Okuma-yazma beklentisi ve dosya uyumu numunede değerlendirildi mi?</li>
              <li>Logo, varsa içerik yükleme ve kutu kapsamı onaylandı mı?</li>
              <li>Model, adet, toplam bedel ve teslim planı yazılı mı?</li>
            </ul>
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
          <section>
            <h2 className="text-xl font-extrabold">Teknik açıklamalar için kaynaklar</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
              <li><a href="https://www.usb.org/sites/default/files/usb_3_2_language_product_and_packaging_guidelines_final.pdf" className="underline">USB-IF: aktarım standardı ve fiziksel bağlantı ayrımı</a></li>
              <li><a href="https://www.kingston.com/en/support/technical/products/dtig4" className="underline">Kingston: kullanılabilir kapasite ve aktarım performansı açıklamaları</a></li>
              <li><a href="https://support-eu.sandisk.com/app/answers/detailweb/a_id/35105" className="underline">SanDisk: dosya sistemi ve tek dosya boyutu sınırları</a></li>
            </ul>
          </section>
          <div className="flex flex-wrap gap-3">
            <Link href="/promosyon-usb-bellek" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">USB Bellek Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
