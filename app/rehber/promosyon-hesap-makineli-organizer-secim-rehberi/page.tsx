import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-hesap-makineli-organizer-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-hesap-makineli-organizer-secim-rehberi.jpg";
const TITLE = "Hesap Makineli Organizer Seçimi | İç Düzen ve Logo Rehberi";
const DESCRIPTION = "Hesap makineli promosyon organizer seçerken iç blok, dış ölçü, kapama, hesap makinesi ve logo alanını karşılaştırın. Numune ve toplu sipariş kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Hesap makineli organizer ile ajanda aynı mı?",
    "answer": "Organizer, iç blokla birlikte hesap makinesi ve modele göre başka bölümler sunabilir. Ajanda adı ise iç sayfanın mutlaka tarihli olduğunu göstermez. Sayfa düzenini ve varsa takvim yılını ayrıca kontrol edin."
  },
  {
    "question": "Her hesap makineli organizerin hesap makinesi aynı mı?",
    "answer": "Hayır. Hane sayısı, işlevler, tuş düzeni, güç kaynağı ve sabit ya da çıkarılabilir yapı model bazında teyit edilmelidir. Bir ürünün özelliği diğerlerine aktarılmamalıdır."
  },
  {
    "question": "Dış ölçü ile iç blok ölçüsü neden farklı?",
    "answer": "Dış ölçü kapak ve kapanış dahil ürün boyutuyla, iç blok ölçüsü ise yazım bölümünün boyutuyla ilgilidir. Taşıma ihtiyacını dış ölçüyle, not alanını iç blokla değerlendirin."
  },
  {
    "question": "Organizerin iç bloğu değiştirilebilir mi?",
    "answer": "Yalnızca organizer adından bu özellik çıkarılamaz. Bloğun bağlantı biçimi, çıkarılabilirliği ve uygun yedek blok temini seçilen model için teyit edilmelidir."
  },
  {
    "question": "Termo deri organizer hakiki deri midir?",
    "answer": "Termo deri ifadesi tek başına hakiki deri taahhüdü değildir. Kapak ve iç yüzey malzemesini ürünün teknik bilgisi üzerinden kontrol edin."
  },
  {
    "question": "Kalem tutucusu varsa kalem de dahil mi?",
    "answer": "Tutucu veya yuva bulunması kalemin dahil olduğunu göstermez. Kalem, kutu, hesap makinesinin enerji kaynağı ve diğer aksesuarların kapsamı nihai teklifte ayrı netleştirilmelidir."
  },
  {
    "question": "Organizer kapağına hangi logo yöntemi uygulanır?",
    "answer": "Gofre, lazer veya dijital gibi yöntemlerin uygunluğu seçilen kapak yüzeyine bağlıdır. Logo alanı, ölçüsü ve yöntemi model üzerinden onaylanmalıdır; bütün yöntemler bütün yüzeylere uygun kabul edilmez."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Hesap makinesi ve not bloğu bulunan açık organizer ile kapalı organizerin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Hesap Makineli Organizer Seçim Rehberi", item: PAGE_URL },
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
        <span>Hesap Makineli Organizer Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Hesap Makineli Organizer Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Hesap makineli organizer seçimi, bir kapakta kaç özellik bulunduğundan çok bu özelliklerin günlük çalışma düzenine uygunluğuyla ilgilidir. Toplantı notları, kısa hesaplamalar ve kart taşıma ihtiyacınızı belirleyin; iç blok, hesap makinesi, kapama biçimi ve logo alanını birlikte değerlendirin. Bu rehber, ürünleri aynı koşullarda karşılaştırıp toplu sipariş kapsamını netleştirmek için hazırlanmıştır.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Hesap makinesi ve not bloğu bulunan açık lacivert organizer ile kapalı koyu renk organizer" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, hesap makinesi işlevlerini veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Organizeri hangi iş akışı için seçiyorsunuz?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-hesap-makineli-organizer">Hesap makineli organizer modellerini</Link> toplantı, müşteri görüşmesi ve ofis kullanımı açısından değerlendirin. Not alırken hesap makinesine erişimin kolay olması sizin için önemliyse iç yerleşimi inceleyin. Kart bölmesi veya başka bir alan gerekiyorsa bu özelliği seçilen modelde ayrıca kontrol edin.</p>
              <p>Hesap makinesine ihtiyaç olmayan bir kullanım için <Link href="/promosyon-organizerler">ana organizer kategorisindeki</Link> diğer seçenekler de değerlendirilebilir. Her organizerde aynı bölmelerin veya aynı kapanış biçiminin bulunduğunu varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dış ölçüyle yazım alanını ayrı karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Dış kapak ölçüsü taşıma ve çantaya yerleştirme açısından, iç blok ölçüsü ise not alanı açısından anlamlıdır. Ürünü dış ölçüsünden hareketle aynı boyutta sayfalar içeriyormuş gibi değerlendirmeyin. Kalınlık ve kapama parçasının konumunu da numunede gözlemleyin.</p>
              <p>Organizer açıkken hesap makinesi ve diğer bölümlere erişimi değerlendirin. Fotoğrafın açısı gerçek kullanım alanını olduğundan farklı gösterebilir; ürünün ölçü bilgisini ve numunesini birlikte esas alın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">İç bloğun düzeni, yılı ve bağlantısını sorun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ajanda veya organizer adı tek başına tarihli sayfa anlamına gelmez. Çizgili, tarihli ya da farklı iç düzen gereksiniminizi belirtin. Tarihli ürün düşünülüyorsa güncel stoktaki takvim yılını teyit edin; kapak fotoğrafından yıl sonucu çıkarmayın.</p>
              <p>Sayfa ve yaprak aynı birim değildir; bir yaprağın ön ve arka yüzü bulunur. Adet bilgisinin neyi kapsadığını öğrenin. Bloğun çıkarılması veya sonradan yenilenmesi önemliyse bağlantı yapısını ve uygun yedek blok bulunup bulunmadığını sorun. Genel karşılaştırma için <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi">defter ve ajanda seçim rehberini</Link> inceleyebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Organizer karşılaştırmasında hangi bilgi neyi anlatır?</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Özellikler modele göre değişir; karşılaştırmada aynı bilgi türlerini esas alın.</caption>
              <thead><tr><th scope="col" className="border p-3">Bilgi</th><th scope="col" className="border p-3">Kullanım karşılığı</th><th scope="col" className="border p-3">Ayrıca sorulacak nokta</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Dış ölçü</th><td className="border p-3">Çantada ve masada kapladığı alan</td><td className="border p-3">Kalınlık ve kapanışın konumu</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">İç blok ölçüsü</th><td className="border p-3">Not alanının boyutu</td><td className="border p-3">Sayfa düzeni ve bağlantı biçimi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Sayfa adedi</th><td className="border p-3">Belirtilen içeriğin miktarı</td><td className="border p-3">Sayfa–yaprak birimi ve takvim yılı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Hesap makinesi</th><td className="border p-3">Hesaplama bölümü</td><td className="border p-3">Hane, işlev, güç kaynağı ve yapı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kalem veya kart bölmesi</th><td className="border p-3">İç düzenin kullanım biçimi</td><td className="border p-3">Ölçü, uyum ve aksesuar kapsamı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Kapak ve metal detay</th><td className="border p-3">Yüzey ve kapanış özelliği</td><td className="border p-3">Malzeme ve uygulanabilir logo alanı</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Hesap makinesinin özelliklerini model bazında okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Hesap makinesi bulunduğu bilgisi hane sayısını, bütün işlevleri veya güç kaynağını açıklamaz. Gereken işlemleri ve ekran beklentinizi belirtin. Tuşların kullanımını, ekranın okunmasını ve hesap makinesinin organizer içindeki konumunu numunede değerlendirin.</p>
              <p>Sabit veya çıkarılabilir yapı, pil ya da başka bir enerji kaynağı ve pakete dahil parçalar hakkında açık bilgi isteyin. Bir modelde belirtilen hane sayısını diğer ürünlere aktarmayın. Özel hesaplama işlevleri gerekiyorsa mevcut olduğunu varsaymak yerine bu ihtiyacı teklif talebine yazın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak, kapama ve ek bölmeleri birlikte inceleyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Termo deri ifadesi tek başına hakiki deri anlamına gelmez. Kapak ile iç yüzeyin malzemesini seçilen modelin açıklamasından kontrol edin. Metal toka veya kilit ifadesini de yalnızca belirtilen kapanış özelliği olarak değerlendirin.</p>
              <p>Kartvizit bölmesi, kalem tutucu veya ek cep gereken bir kullanımda bunların yerleşimini ve ölçüsünü inceleyin. Tutucu kalemin pakete dahil olduğunu göstermez. Kullanılacak kalemi ayrıca seçecekseniz tutucuyla uyumunu numunede kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo alanını kapama parçasına göre planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Gofre, lazer veya dijital gibi yöntemlerin uygunluğu kapak malzemesi ve uygulanabilir yüzeye bağlıdır. Toka, dikiş, kenar ve varsa metal detayların yerini dikkate alın. Dış kapak ölçüsünün tamamını kullanılabilir logo alanı olarak kabul etmeyin.</p>
              <p>Organizer kapalıyken toka ve metal detayların logoyla ilişkisini gösteren bir kapak yerleşimi hazırlatın. İsim uygulaması da isteniyorsa logoyla aynı alanı paylaşacağı mı, ayrı konumda mı bulunacağı belli olsun. İsim listesini kapak renkleriyle eşleştirerek onaylayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numunede yazım ve erişimi birlikte deneyin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İç blokta kullanacağınız kalemle kısa bir yazım denemesi yapın; kağıt bilgisinden bütün kalemlerde aynı sonucu beklemeyin. Hesap makinesine erişimi, kapama parçasını ve varsa kart bölmelerini kullanarak iç yerleşimi değerlendirin.</p>
              <p>Numune değerlendirmesinin sonucunu üç başlıkla kaydedin: iç blokta yazım, hesap makinesini kullanma ve kapağı kapatma. Seri siparişte bu iç düzenin korunacağını teyit edin. Kapak markalaması için ayrıca seçilen yüzeyde uygulama örneği isteyebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklifte ürün ve aksesuar kapsamını netleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Model, adet, renk, iç blok beklentisi, gerekiyorsa takvim yılı, logo dosyası ve uygulama konumunu paylaşın. Kalem, kutu veya isim kişiselleştirmesi taleplerini ayrıca belirtin. Hesap makinesinin güç kaynağı ve dahil parçaları konusunda bilgi isteyin.</p>
              <p>İki organizer teklifini karşılaştırırken hesap makinesi bilgisi, iç blok ve aksesuar listesini yan yana koyun. Bunlar eşleşmeden yalnız toplam bedel üzerinden karar vermeyin. Takvim yılı gerekiyorsa stok teyidinde belirtin; koli miktarını minimum sipariş olarak yorumlamayın.</p>
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
            <Link href="/promosyon-hesap-makineli-organizer" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Hesap Makineli Organizerleri İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
