import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-yoyo-boyun-aski-ipi-secim-ve-baski-rehberi`;
const IMAGE_PATH = "/guides/promosyon-yoyo-boyun-aski-ipi-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Yoyo ve Boyun Askı İpi Seçim Rehberi";
const DESCRIPTION = "Yoyo ve boyun askı ipini kart kullanımı, bağlantı uyumu ve logo yerleşimiyle seçin. Kart kabı, baskı yönü ve etkinlik teslim kapsamını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Yoyo mu, boyun askı ipi mi seçmeliyim?",
    "answer": "Kartı gövdeye yakın taşıyıp uzatarak kullanmak ile boyunda sergilemek farklı ihtiyaçlardır. Kullanım konumu ve kart bağlantısı üzerinden seçin; birlikte kullanım için parçaların uyumunu ayrıca doğrulayın."
  },
  {
    "question": "Yoyo kartı okutur mu?",
    "answer": "Yoyo mekanik bir kart taşıma aksesuarıdır. Elektronik okuma özelliği olduğu varsayılmamalıdır. Kullanılacak kart ve kabın mevcut sistemdeki uyumu ayrıca değerlendirilmelidir."
  },
  {
    "question": "Mevcut kart kabımla uyumlu olur mu?",
    "answer": "Bağlantı deliği veya yuvası, yönü ve seçilecek kanca ya da bağlantı parçası birlikte kontrol edilmelidir. Yalnız kartın dış ölçüsü uyumu kanıtlamaz."
  },
  {
    "question": "Askı ipinin boyu ve eni standart mı?",
    "answer": "Kaynakta doğrulanmış standart ölçü belirtilmez. İp eni, uzunluğu, malzemesi ve takıldığındaki yerleşimi seçilecek seçenek için teyit edilmelidir."
  },
  {
    "question": "Logonun ipin iki yanında okunması aynı baskı mı?",
    "answer": "Tek veya çift yüz uygulama ile logo tekrar aralığı ayrı tasarım bilgileridir. İp boyunda takıldığında metnin yönünü gösterecek prova üzerinden son onay verin."
  },
  {
    "question": "Emniyet kilidi veya ayrılabilir toka var mı?",
    "answer": "Bu aksesuarlar açıkça belirtilmedikçe standart kabul edilmemelidir. Böyle bir ihtiyaç varsa bağlantı türünü ve güncel seçenekleri teklif talebinde ayrıca belirtin."
  },
  {
    "question": "Yaka kartı ve şeffaf kap dahil mi?",
    "answer": "Kart baskısı, kart kabı, yoyo ve askı ipinin dahil kapsamı teklifte ayrı yazılmalıdır. Görselde birlikte yer almaları tek bir paket veya ortak fiyat anlamına gelmez."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Yoyo kart tutucu ve boyun askı ipinin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Yoyo ve Boyun Askı İpi Seçim Rehberi", item: PAGE_URL },
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
        <span>Yoyo ve Boyun Askı İpi Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Yoyo ve Boyun Askı İpi Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon yoyo ve boyun askı ipi seçimi, personel veya etkinlik kartının nerede taşınacağıyla başlar. Kartın görünür durması, gerektiğinde uzatılması ve mevcut kart kabına bağlanması farklı gereksinimlerdir. Bu rehber bağlantı uyumunu ve logo yerleşimini ayrı değerlendirerek sipariş kapsamını eksiksiz tanımlamanıza yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Lacivert boyun askı ipi, siyah yoyo kart tutucu ve ayrı şeffaf kart kabı" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, ölçüyü veya standart paket içeriğini göstermez. Yoyo, ip ve kart kabı ayrı aksesuar örnekleridir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Kartın gün içindeki hareketini tarif edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-yoyo-ve-boyun-aski-ipleri">Yoyo ve boyun askı ipi seçeneklerini</Link> değerlendirirken kartın sabit görünür durması mı, sık sık bir noktaya uzatılması mı gerektiğini belirleyin. Etkinlikte isim bilgisinin okunmasıyla personelin kartını günlük kullanması aynı öncelikleri doğurmayabilir.</p>
              <p>Yoyo geri sarılan kordonla taşımayı, boyun askı ipi ise boyunda yerleşimi esas alır. Birlikte kullanım isteniyorsa iki parçanın bağlantısını ve kartın takılıyken duruşunu kontrol edin. Yoyoyu elektronik okuyucu veya kartın işlevini değiştiren cihaz olarak tanımlamayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Bağlantıyı kart kabıyla birlikte kontrol edin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Mevcut kart kullanılacaksa kartın ölçüsünün yanında delik, yuva veya kart kabının bağlantı biçimini paylaşın. Kanca, klips veya başka bir bağlantının aynı noktaya uyduğunu numunede görün. Yatay ve dikey kart yerleşimini bağlantı yönüyle birlikte değerlendirin.</p>
              <p>Kartın rahat çıkarılıp takılması, ön yüzünün görünmesi ve günlük kullanımda dönüp dönmemesi kontrol edilebilir. Kabın dış ölçüsüyle içine yerleşen kartın ölçüsü farklıdır. Yeni kart kabı isteniyorsa aksesuar talebini ayrı belirtin; her kartın aynı kaba sığacağını varsaymayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">İp ölçüsüyle takıldığındaki yerleşimi ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>İp uzunluğu ve eni belirtilmeden standart bir ölçü vaat etmeyin. Ölçünün nasıl alındığını, katlı veya açık uzunluk olup olmadığını öğrenin. Boyunda takıldığında kartın duracağı yer bağlantı parçalarıyla birlikte değişebilir.</p>
              <p>Kumaş, doku ve renk tercihini güncel seçenekler üzerinden değerlendirin. Numunede ipin takılı haldeki duruşunu ve kartla birlikte kullanımını görün. Geniş yüzeyin daha fazla metin alacağı varsayımı yerine gerçek baskı sınırlarını isteyin.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Yoyo, askı ipi ve kart aksesuarı karşılaştırması</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">Her parçayı kendi kullanım amacı ve teslim kapsamıyla değerlendirin.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Yoyo</th><td className="border p-3">Kartı uzatarak kullanım</td><td className="border p-3">Gövde, kordon ve bağlantı</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Boyun askı ipi</th><td className="border p-3">Kartı boyunda sergileme</td><td className="border p-3">Ölçü, malzeme ve takılı duruş</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Kart kabı</th><td className="border p-3">Kartın yerleşimi</td><td className="border p-3">İç ölçü ve bağlantı yönü</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Logo uygulaması</th><td className="border p-3">Yoyo yüzeyi veya ip tekrarı</td><td className="border p-3">Ayrı baskı alanı ve prova</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Etkinlik paketi</th><td className="border p-3">Kişi bazında dağıtım</td><td className="border p-3">Kart, aksesuar ve montaj kapsamı</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">Yoyo için kordon ve gövdeyi ayrı değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Yoyonun gövde şekli, takılma parçası ve kart bağlantısı farklı seçim başlıklarıdır. Kullanıcı kartı nereden uzatacak ve gövdeyi nereye takacak? Numuneyi planlanan konumda kullanarak kartın gerekli noktaya erişimini değerlendirin.</p>
              <p>Kordon uzunluğu, taşıma kapasitesi veya mekanizma ömrü belirtilmiyorsa sayısal değer eklemeyin. Kart dışındaki nesneleri taşıyabileceğini varsaymayın. İhtiyaç duyulan özellikleri teklif talebinde yazın ve seçilen modelin bilgisiyle eşleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Yoyo logosuyla ipteki tekrar düzenini ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Yoyo gövdesindeki sınırlı logo alanıyla askı ipindeki tekrarlı tasarım aynı baskı çalışması değildir. Her parça için yöntem, renk ve uygulama alanını ayrı öğrenin. Küçük gövdede ince yazı veya ayrıntılı amblemin okunmasını gerçek ölçüde değerlendirin.</p>
              <p>Askı ipinde logo aralığı, metnin yönü ve tek ya da çift yüz baskı kapsamını belirleyin. Düz şerit üzerindeki prova yeterli olmayabilir; boyunda takıldığında sağ ve sol tarafta nasıl görüneceğini gösteren yerleşimi inceleyin. Son tasarımı bu kullanım yönüyle onaylayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Ek tokaları ve kart baskısını kapsam listesine yazın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Ayrılabilir toka veya emniyet bağlantısı gibi bir ihtiyaç varsa güncel seçenekleri özellikle sorun. Fotoğraftan bu parçaların her üründe bulunduğu sonucunu çıkarmayın. Mevcut bir kurum standardı varsa talepte açıkça paylaşın ve karşılayan seçeneği teyit edin.</p>
              <p>Kart basılacaksa tasarım, kişi bilgileri ve adet çalışmasını ip üzerindeki logo baskısından ayrı yürütün. Katılımcı kartlarıyla genel görevli kartlarının adetlerini karıştırmayın. Şeffaf kap, basılı kart ve bağlantı parçalarını ayrı kalemler halinde onaylayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Etkinlik siparişini dağıtım düzeniyle tamamlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kaç kişiye hangi parçaların verileceğini listeleyin. Yalnız ip, yalnız yoyo veya birlikte kullanım için ihtiyaç duyulan adetler farklı olabilir. Renklerle görev ayrımı isteniyorsa her renk için sayıyı ve stok uygunluğunu teyit edin.</p>
              <p>Teslim tarihiyle etkinlik tarihini ayrı belirtin; kartların birleştirilmesi ve dağıtıma hazırlanması için gerekli zamanı planlayın. Montajın kimin tarafından yapılacağını, paketleme biçimini ve kartların takılı teslim edilip edilmeyeceğini öğrenin. Minimum adet, baskı, aksesuar, KDV ve sevkiyat kapsamını güncel teklifte netleştirin.</p>
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
            <Link href="/promosyon-yoyo-ve-boyun-aski-ipleri" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Yoyo ve Boyun Askı İplerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
