import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-semsiye-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-semsiye-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Şemsiye Seçimi | Ölçü ve Logo Baskı Rehberi";
const DESCRIPTION = "Promosyon şemsiye seçiminde taşıma biçimi, açma mekanizması, ölçü ve logo yerleşimini değerlendirin. Baskı kapsamı, numune ve toplu sipariş onayını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Baston şemsiye mi, kompakt şemsiye mi seçilmeli?",
    "answer": "Taşıma ve dağıtım biçimine göre karar verin. Kapalı uzunluğu, ağırlığı ve varsa kılıfı model bazında kontrol edin. Kompakt yapı tek başına otomatik açma veya kapama özelliği anlamına gelmez."
  },
  {
    "question": "Otomatik açma ile otomatik aç/kapa aynı mı?",
    "answer": "Aynı özellik olarak kabul edilmemelidir. Ürünün açma, kapama ve yeniden kurma adımlarını kullanım bilgisi ve numune üzerinden öğrenin."
  },
  {
    "question": "Açık ölçü baskı alanını gösterir mi?",
    "answer": "Hayır. Açık ölçünün hangi boyutu ifade ettiği ayrıca teyit edilmelidir. Logo için kullanılabilir panel alanı, dikişlerden uzaklık ve yerleşim ayrı belirlenir."
  },
  {
    "question": "Şemsiyede tel sayısı rüzgar dayanımını garanti eder mi?",
    "answer": "Tel sayısı tek başına dayanım garantisi değildir. Malzeme, yapı ve varsa modele ait test bilgisi değerlendirilmelidir. Belirtilmeyen rüzgar dayanımı veya ters dönmezlik iddiası kullanılmamalıdır."
  },
  {
    "question": "Serigrafi, tampon ve DTF her şemsiyeye uygulanır mı?",
    "answer": "Her yöntem bütün yüzeyler için uygun kabul edilmez. Kumaş veya diğer uygulama yüzeyi, kaplama, logo ölçüsü ve renk sayısına göre seçilen modelde uygunluk teyit edilmelidir."
  },
  {
    "question": "Koli adedi minimum sipariş miktarı mıdır?",
    "answer": "Koli miktarı paketleme bilgisidir. Minimum sipariş, stok ve uygulama planına göre teklif aşamasında ayrıca belirlenir."
  },
  {
    "question": "Liste fiyatına logo baskısı dahil mi?",
    "answer": "Dahil olduğu açıkça belirtilmedikçe varsayılmamalıdır. Baskı yapılacak panel sayısı, logo rengi, hazırlık, paketleme, KDV ve sevkiyat kapsamını nihai teklifte netleştirin."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Açık lacivert baston şemsiye ve kapalı kompakt şemsiyenin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Şemsiye Seçim ve Baskı Rehberi", item: PAGE_URL },
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
        <span>Şemsiye Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Şemsiye Seçim ve Baskı Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon şemsiye seçerken kullanım ve taşıma biçimini logo uygulamasıyla birlikte düşünün. Baston veya kompakt yapı, açma mekanizması ve ürün ölçüleri farklı seçim ölçütleridir. Bu rehber, model listesini tekrarlamak yerine baskı yerleşimi, numune ve toplu sipariş onayında hangi bilgileri netleştirmeniz gerektiğini açıklar.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Açık lacivert baston şemsiye ve kapalı koyu renk kompakt şemsiye" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, mekanizmayı veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Taşıma ve dağıtım biçimiyle başlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-semsiye">Promosyon şemsiye modellerini</Link> hedef kullanımınıza göre inceleyin. Baston yapı ile çantada taşınması planlanan kompakt bir seçenek aynı kapalı uzunluğa sahip olmayabilir. Ürünün kapalı ölçüsünü ve ağırlığını teyit ederek dağıtım ve taşıma planı yapın.</p>
              <p>Etkinlikte elden teslim ile kutulu sevkiyatın ambalaj ihtiyacı farklı olabilir. Kılıf veya kutunun pakete dahil olup olmadığını sorun. Ürün fotoğrafındaki aksesuarları otomatik olarak sipariş kapsamına dahil kabul etmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Mekanizmanın bütün adımlarını öğrenin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Otomatik açma, otomatik aç/kapa ve katlanabilir yapı farklı özelliklerdir. Ürün açıklamasında hangi işlevin belirtildiğini kontrol edin. Kapanmanın hangi aşamalarının düğmeyle, hangilerinin elle yapıldığını kullanım bilgisi ve numune üzerinden öğrenin.</p>
              <p>Işıklı veya fener özellikli bir model değerlendiriyorsanız ışığın konumunu, çalıştırılma biçimini ve enerji kaynağıyla ilgili kapsamı sorun. Işık özelliğini bütün şemsiyelerde varmış gibi düşünmeyin; doğrulanmamış parlaklık veya çalışma süresi belirtmeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ölçünün neyi anlattığını netleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Açık ölçü ifadesi tek başına bunun çap, uzunluk veya başka bir boyut olduğunu açıklamayabilir. Ölçüm yönünü gösteren teknik çizim veya açıklama isteyin. Kapalı uzunluğu da açık ölçüyle karıştırmadan karşılaştırın.</p>
              <p>Ürünün açık ölçüsü logo alanı değildir. Panelin kullanılabilir genişliği ve yüksekliği, dikişler ve seçilen uygulama yöntemiyle birlikte değerlendirilmelidir. Ürün ölçüsünden tahmini bir baskı ebadı çıkarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Şemsiye karşılaştırmasında temel ayrımlar</h2>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-gray-600">Bu ölçütler farklı özellikleri anlatır; her biri model bazında kontrol edilmelidir.</caption>
              <thead><tr><th scope="col" className="border p-3">Ölçüt</th><th scope="col" className="border p-3">Ne anlatır?</th><th scope="col" className="border p-3">Ayrıca netleştirilecek bilgi</th></tr></thead><tbody>
              <tr><th scope="row" className="border p-3 font-semibold">Baston veya kompakt yapı</th><td className="border p-3">Taşıma biçimi</td><td className="border p-3">Kapalı uzunluk, ağırlık ve ambalaj</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Otomatik mekanizma</th><td className="border p-3">Belirtilen açma veya kapama işlevi</td><td className="border p-3">Elle tamamlanan adımlar ve kullanım bilgisi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Açık ölçü</th><td className="border p-3">Ürüne ait ölçüm bilgisi</td><td className="border p-3">Ölçüm yönü ve kullanılabilir panel alanı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Tel sayısı</th><td className="border p-3">İskelet yapısının bir özelliği</td><td className="border p-3">Malzeme ve varsa performans bilgisi</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Işık veya fener</th><td className="border p-3">Modele özel ek işlev</td><td className="border p-3">Enerji kaynağı ve paket kapsamı</td></tr>
              <tr><th scope="row" className="border p-3 font-semibold">Baskı paneli sayısı</th><td className="border p-3">Logo uygulamasının kapsamı</td><td className="border p-3">Yöntem, yön, ölçü ve fiyat kapsamı</td></tr>
            </tbody></table></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Yapı bilgisinden dayanım garantisi çıkarmayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Tel sayısı ürün yapısını anlatır; tek başına rüzgar dayanımı veya ters dönmezlik garantisi vermez. İskelet ve kumaş malzemesi önemliyse seçilen modele ait bilgiyi isteyin. Açıklamada yer almayan özellikleri kurumsal dağıtım metnine eklemeyin.</p>
              <p>Su geçirmezlik, UV koruması veya belirli bir rüzgar seviyesine dayanım gibi iddialar için modele ait doğrulanabilir bilgi gerekir. Numune mekanizmayı ve yüzey görünümünü değerlendirmeye yardımcı olur; belgelendirilmiş bir performans testinin yerine geçmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Panel sayısı ve logo yönünü birlikte planlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Logonun hangi panelde, hangi yönde ve kaç kez yer alacağını belirleyin. Bir panel uygulaması ile birden fazla panele uygulamanın kapsamı aynı değildir. Şemsiye açıkken logonun dışarıdan görünümünü ve dikişlere yakınlığını onay görselinde kontrol edin.</p>
              <p>Tasarım dosyasında uygulama yapılacak panelleri işaretleyin. Aynı logo birden fazla panelde kullanılacaksa her birinin yönünü gösterin. İnce yazıları gerçek baskı boyutunda kontrol ederek kumaş rengiyle birlikte değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Baskı yöntemini yüzey üzerinden seçin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Serigrafi, tampon ve DTF seçenekleri belirtilen modelin uygulanabilir yüzeyine göre değerlendirilmelidir. Bir ürün için listelenen yöntemi bütün şemsiyelerde veya sap dahil her parçada kullanılabilir kabul etmeyin. Kumaş, kaplama, logo boyutu ve renk sayısını paylaşarak uygun yöntemi sorun.</p>
              <p><Link href="/rehber/dtf-baski-nedir">DTF baskı rehberi</Link> yöntemin genel mantığını anlamaya yardımcı olabilir; seçilen şemsiyeye uygunluk onayının yerine geçmez. Nihai teklifte yöntem, uygulama yeri ve panel sayısı açıkça yer alsın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numunede ürün ve baskıyı ayrı değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numunede tutuşu, kapalı taşıma ölçüsünü, açma ve kapama adımlarını inceleyin. Seri siparişin aynı model, renk ve mekanizmayla hazırlanacağını teyit edin. Kullanım talimatını izleyin; numuneden belirtilmeyen dayanım sonuçları çıkarmayın.</p>
              <p>Panel baskısını değerlendirmek için uygulamalı örnek koşullarını sorun. Logonun açık şemsiyedeki yönü, dikişlere uzaklığı ve kumaş rengiyle görünümü tasarım kararıyla eşleşsin. Ekrandaki yerleşim onayıyla kumaş üzerindeki fiziksel sonucu ayrı kontrol edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklifte koli, minimum adet ve teslimi ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Koli miktarı paketleme bilgisidir; minimum sipariş adedinin yerine geçmez. Model, adet, renk, logo dosyası, baskı yapılacak panel sayısı, teslim adresi ve ihtiyaç tarihini paylaşarak teklif isteyin.</p>
              <p>Ürün, baskı, varsa hazırlık ve aksesuar, paketleme, KDV ve sevkiyat kapsamını yazılı netleştirin. Liste fiyatında baskının dahil olduğu açıkça belirtilmemişse dahil kabul etmeyin. Stok teyidi, tasarım onayı ve üretim süresini birlikte planlayın. Diğer kurumsal dağıtım seçenekleri için <Link href="/promosyon-imalat-urunler">imalat ürünlerini</Link> inceleyebilirsiniz.</p>
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
            <Link href="/promosyon-semsiye" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Şemsiye Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
