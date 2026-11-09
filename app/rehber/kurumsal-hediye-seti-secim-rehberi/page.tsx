import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/rehber/kurumsal-hediye-seti-secim-rehberi";
const IMAGE_PATH = "/guides/kurumsal-hediye-seti-secim-rehberi.jpg";
const TITLE = "Kurumsal Hediye Seti Nasıl Seçilir? Bütçe ve İçerik Rehberi";
const DESCRIPTION = "Kurumsal hediye setini alıcı profili, bütçe, ürün ve kutu uyumu üzerinden seçin. Hazır set, kişiselleştirme, numune ve teslim planını birlikte değerlendirin.";
const FAQ_ITEMS = [
  {
    "question": "Hazır kurumsal hediye seti ile boş hediye kutusu aynı mı?",
    "answer": "Hayır. Hazır sette ürün açıklamasında belirtilen içerik esas alınır. Boş kutuda içine yerleştirilecek hediyeler ayrıca seçilir; dolgu, sünger ve baskı kapsamı da teyit edilmelidir."
  },
  {
    "question": "Kurumsal hediye seti bütçesi nasıl belirlenir?",
    "answer": "Alıcı adedi ve toplam bütçe belirlendikten sonra ürünler, kutu ve iç yerleşim, kişiselleştirme, paketleme, KDV ve sevkiyat aynı kapsamda hesaplanmalıdır. Fiyata dahil kalemler ikinci kez eklenmemelidir."
  },
  {
    "question": "Hazır setin içeriği değiştirilebilir mi?",
    "answer": "İçerik değişikliği otomatik olarak mümkün kabul edilmemelidir. Stok, parça ölçüleri, kutu yerleşimi, uygulama bedeli ve teslim planı seçilen model için ayrıca değerlendirilmelidir."
  },
  {
    "question": "Setteki bütün parçalara aynı baskı uygulanabilir mi?",
    "answer": "Her parçanın yüzeyi ve baskı alanı farklı olabilir. Logo uygulanacak parçalar, kutu ve varsa isimler ayrı belirtilerek yöntem ve bedel teklif aşamasında netleştirilmelidir."
  },
  {
    "question": "Hediye kutusu ürünlere nasıl uygun seçilir?",
    "answer": "Kullanılabilir iç alan, ürün yükseklikleri, dolgu, bölücüler ve kapak kapanışı birlikte kontrol edilmelidir. Dış ölçü tek başına kesin yerleşim planı sağlamaz."
  },
  {
    "question": "Kişiye özel setlerde teslim öncesi ne kontrol edilmeli?",
    "answer": "İsim, ürün, not kartı ve adres eşleşmesi; paket içeriği, baskı onayları ve sevk adedi kontrol edilmelidir. Kargo çıkışı ile gerekli teslim tarihi ayrı planlanmalıdır."
  }
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: PAGE_URL,
    type: "article", locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [{ url: SITE_URL + IMAGE_PATH, width: 1200, height: 630,
      alt: "Açık hediye kutusunda temsili defter, termos ve metal kalem düzeni" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    images: [SITE_URL + IMAGE_PATH],
  },
};

export default function CorporateGiftGuidePage() {
  const article = {
    "@context": "https://schema.org", "@type": "Article",
    headline: TITLE, description: DESCRIPTION, inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL, url: PAGE_URL,
    image: [SITE_URL + IMAGE_PATH],
    author: { "@type": "Organization", name: "FirmaPromosyon", url: SITE_URL },
    publisher: { "@type": "Organization", name: "FirmaPromosyon", url: SITE_URL },
  };
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Rehber", item: SITE_URL + "/rehber" },
      { "@type": "ListItem", position: 3, name: "Kurumsal Hediye Seti Seçim Rehberi", item: PAGE_URL },
    ],
  };
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question", name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <div className="bg-white text-gray-900">
      {[article, breadcrumb, faq].map((schema, index) => (
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <div className="mx-auto max-w-4xl px-5 py-10 md:py-14">
        <nav aria-label="İçerik yolu" className="mb-6 text-sm text-gray-600">
          <Link href="/" className="underline">Ana Sayfa</Link>{" / "}
          <Link href="/rehber" className="underline">Rehber</Link>{" / "}
          <span>Kurumsal Hediye Seti Seçimi</span>
        </nav>
        <article>
          <header>
            <p className="text-sm font-semibold text-gray-600">FirmaPromosyon Rehber</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Kurumsal hediye seti seçimine kutudaki parça sayısıyla değil, alıcının
              ne kullanacağı ve hediyenin hangi amaçla verileceğiyle başlayın.
              Çalışan karşılama paketi, müşteri ziyareti ve bayi toplantısı aynı
              bütçe ve içerik planını gerektirmeyebilir.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Bu rehber, hazır set ile özel paket arasında karar vermeyi, teklifleri
              aynı kapsamda karşılaştırmayı ve teslimden önce kontrol edilecek
              ayrıntıları açıklar. Güncel ürünleri{" "}
              <Link href="/promosyon-vip-urunler" className="font-semibold text-blue-700 underline">VIP hediye setleri kategorisinden</Link>{" "}
              inceleyebilirsiniz.
            </p>
            <figure className="mt-7">
              <Image src={IMAGE_PATH} width={1200} height={630} priority
                sizes="(max-width: 768px) 100vw, 856px"
                alt="Açık hediye kutusunda temsili defter, termos ve metal kalem düzeni"
                className="h-auto w-full rounded-2xl border border-gray-200" />
              <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                Rehber için hazırlanmış temsili görsel. Ürünler, kutu ve iç
                yerleşim seçilen setin içeriğine göre değişir.
              </figcaption>
            </figure>
          </header>
          <div className="mt-10 space-y-10 text-base leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Alıcı grubuna göre kısa bir hediye özeti hazırlayın</h2>
              <p className="mt-4">Sipariş öncesinde kime, hangi tarihte ve hangi amaçla hediye verileceğini yazın. Yeni çalışan için iş gününde kullanılacak ürünler; müşteri ziyaretinde ise taşınması ve sunulması kolay bir paket öncelikli olabilir. Aynı dağıtımda farklı alıcı grupları varsa bunları adetleriyle ayrı belirtin.</p>
              <p className="mt-4">İçerik kararını pahalı veya kalabalık görünmesine göre vermeyin. Alıcının kullanmayacağı bir parça yerine işlevli bir ürün ve düzgün bir sunum daha uygun olabilir. Marka rengi, kullanım ortamı ve taşıma alışkanlığını birlikte değerlendirerek seçim ölçütlerinizi daraltın.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Hazır set mi, ürünleri ayrı seçilen kutu mu?</h2>
              <p className="mt-4">Hazır setin açıklamasındaki parçalar bir içerik listesi oluşturur. Boş hediye kutusu ise tek başına bu ürünleri içermez. Önce hangi yaklaşımın ihtiyacınıza uyduğunu belirleyin; ardından kutu, dolgu ve uygulama kapsamını teklifle eşleştirin.</p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[540px] text-left text-sm leading-6">
                  <caption className="p-4 text-left font-semibold text-gray-900">İhtiyaca göre set hazırlama yaklaşımı</caption>
                  <thead className="bg-gray-50 text-gray-900"><tr><th scope="col" className="p-3">Yaklaşım</th><th scope="col" className="p-3">Ne zaman değerlendirilir?</th><th scope="col" className="p-3">İlk kontrol</th></tr></thead>
                  <tbody>{[
                    ["Hazır hediye seti", "Listelenen parçalar kullanım amacınızı karşılıyorsa", "Tam içerik, renk ve güncel stok"],
                    ["Boş kutu ve ayrı ürünler", "İçeriği belirli bir alıcı grubuna göre kurmak istiyorsanız", "Ürün ölçüleri, iç yerleşim ve toplam bedel"],
                    ["Termoslu set", "İçecek taşıma veya masa kullanımı paketin ana ihtiyacıysa", "Termos özellikleri ve diğer parçalarla uyum"],
                  ].map(([kind, purpose, check]) => (
                    <tr key={kind} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{kind}</th><td className="p-3">{purpose}</td><td className="p-3">{check}</td></tr>
                  ))}</tbody>
                </table>
              </div>
              <p className="mt-4">Özel içerik hazırlamak için <Link href="/kurumsal-hediye-kutulari" className="font-semibold text-blue-700 underline">kurumsal hediye kutularını</Link>{" "}, termos odaklı hazır seçenekler için <Link href="/termoslu-kurumsal-hediye-setleri" className="font-semibold text-blue-700 underline">termoslu kurumsal hediye setlerini</Link>{" "} karşılaştırabilirsiniz. Hazır sette içerik değişikliğinin uygunluğu ayrıca teyit edilmelidir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Alıcı başına bütçeyi teslim edilecek paket üzerinden hesaplayın</h2>
              <p className="mt-4">Önce toplam bütçeyi ve hediye alacak kişi sayısını belirleyin. Ürünler dışında kutu, iç yerleşim, logo uygulaması, kişiye özel isim, not kartı, paketleme ve sevkiyat gibi ihtiyaçları da listeleyin. Her kalemin gerekli olması şart değildir; talep ettiğiniz kapsamın teklifte görünmesi gerekir.</p>
              <p className="mt-4"><strong>Paket başına maliyet:</strong> İç ürünler + ayrıca alınan kutu ve dolgu + kişiselleştirme + paketleme + varsa sabit hazırlık bedelinin sipariş adedine düşen payı. Ardından sipariş toplamında sevkiyat ve KDV kapsamını aynı esasta değerlendirin. Hazır set fiyatına dahil bir parçayı veya kutuyu ikinci kez eklemeyin.</p>
              <p className="mt-4">Örneğin aynı içerikli iki tekliften biri kutu baskısı ve paketlemeyi içerirken diğeri bunları ayrıca fiyatlandırabilir. Yalnız ilk görünen birim tutarı kıyaslamak yerine teslim edilecek paketlerin toplam kapsamını eşitleyin. Minimum adet ve varsa isim, renk veya tasarım başına koşulları da sorun.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Setin parçalarını ortak kullanım senaryosunda birleştirin</h2>
              <p className="mt-4">Defter, kalem ve termos birlikte ofis kullanımına yönelik bir paket oluşturabilir. Teknoloji parçası isteniyorsa yalnız sette bulunmasına değil, alıcının cihazlarıyla uyumuna da bakılmalıdır. İşlevini kullanmayacak bir gruba ek elektronik ürün koymak bütçeyi verimli kullanmayabilir.</p>
              <p className="mt-4">Birbirine benzeyen setlerin içindeki ürünler aynı özellikte olmayabilir. Defterin düzeni ve ölçüsü, kalemin yazım türü, termosun hacmi ve varsa teknoloji ürünlerinin teknik bilgilerini seçilen set kaydından kontrol edin. Aynı kapasite veya aynı parça sayısı, aynı kullanım deneyimi anlamına gelmez.</p>
              <p className="mt-4">Tek ürüne ilişkin ayrıntılı seçim için <Link href="/rehber/kurumsal-kalem" className="font-semibold text-blue-700 underline">kurumsal kalem rehberini</Link>{" "} ve <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir" className="font-semibold text-blue-700 underline">termos seçim rehberini</Link>{" "} kullanabilirsiniz. Buradaki karar, bu parçaların aynı hediye paketinde ihtiyacı karşılayıp karşılamadığıdır.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Kutu yerleşimini ürün yüksekliği ve kapak kapanışıyla deneyin</h2>
              <p className="mt-4">Kutunun dış ölçüsünü doğrudan kullanılabilir iç hacim kabul etmeyin. Ürün yükseklikleri, kapak payı, dolgu ve varsa bölücüler yerleşimi değiştirir. Kutunun içine üstten sığan bir termos veya defter, kapak kapatıldığında aynı rahatlıkla yerleşmeyebilir.</p>
              <p className="mt-4">Özel set kuruyorsanız ürünlerin tam ölçülerini aynı yerleşim çiziminde gösterin. Sünger, bölücü veya kırpık kağıt ihtiyacının dahil olup olmadığını teyit edin. Taşıma sırasında parçaların birbirine temasını, kutudan çıkarılmasını ve paketin son görünümünü numunede kontrol edin.</p>
              <p className="mt-4">Görselde görünen her aksesuarı teslim içeriği saymayın. Kutu, iç dolgu, hediye notu ve dış taşıma ambalajını sipariş kaydında ayrı belirtin. Sonradan bir ürün değişirse kutu yerleşiminin yeniden kontrol edilmesi gerekebilir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Logo ve kişiye özel isimler için parça bazında onay alın</h2>
              <p className="mt-4">Defter kapağı, kalem, termos ve kutu farklı yüzeylerdir. Tek bir görsele logo yerleştirmek, bütün parçalarda aynı yöntem ve maliyetin geçerli olduğunu göstermez. Hangi parçaya, hangi yüzüne ve hangi ölçüde uygulama istediğinizi listeleyin.</p>
              <p className="mt-4">Setin renk bütünlüğünü yalnız gövde renkleriyle sınırlamayın. Logo ölçüsü, konumu ve görünümü parçalar arasında birlikte değerlendirilmelidir. Kişiye özel isim varsa yazım, Türkçe karakterler ve alıcı eşleşmesini kontrol edin; birden fazla isim listesinin üretimde karışmaması için son dosyayı netleştirin.</p>
              <p className="mt-4">İsim veya logo uygulamasını bütün parçalara zorunlu kabul etmeyin. Alıcının kullanımı ve tasarımın okunaklılığına göre hangi uygulamanın gerekli olduğuna karar verin. Her ek talebin yapılabilirliği ve bedeli üretim onayından önce belirlenmelidir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Bir örnek paketi onaylayıp sonra toplu hazırlığa geçin</h2>
              <p className="mt-4">Yalnız tek ürün numunesi yerine, mümkünse tamamlanmış bir örnek paket üzerinden kontrol yapın. Parça listesi, renkler, logo yerleşimleri, isimler, dolgu ve kapak kapanışı aynı onayda görülsün. Fiziksel örnek mümkün değilse hangi ayrıntıların fotoğraf veya tasarımla onaylandığını açıkça kaydedin.</p>
              <p className="mt-4">Set içeriğini model kodları ve açıklamalarla yazılı tutun. Seçilen parça stokta yoksa alternatif ürünün özelliklerini, fiyatını ve kutuya uyumunu ayrıca onaylayın. Benzer görünen bir ürünün otomatik olarak aynı kapsamda olduğunu kabul etmeyin.</p>
              <p className="mt-4">Son tasarım ve içerik onayını verdikten sonra değişikliklerin adedi, kişiselleştirmeyi ve teslim tarihini etkileyebileceğini hesaba katın. Güncel onay kaydı, toplu hazırlığın hangi pakete göre yapılacağını belirlemelidir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Sevkiyat planını alıcı listesiyle eşleştirin</h2>
              <p className="mt-4">Tek adrese toplu sevkiyat ile farklı adreslere kişiye özel gönderim aynı paketleme ve sayım planını gerektirmez. Her gönderinin içeriğini, hediye notunu ve varsa kişiselleştirilmiş parçayı alıcıyla eşleştirin. Koli etiketleri ve sevk listesi hazırlık sırasında kontrolü kolaylaştırabilir.</p>
              <p className="mt-4">Etkinlik veya hediye tarihi ile kargo çıkış tarihini ayrı belirleyin. Stok, logo onayı, kişiselleştirme ve paket hazırlığı için planlanan adımları teyit edin. Tek bir sabit termin varsaymak yerine seçilen içerik ve adet üzerinden net teslim planı alın.</p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">Teklif talebine eklenecek kısa sipariş özeti</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Alıcı grubu, hediye amacı, adet ve ihtiyaç tarihi.</li>
                <li>Hazır set kodu veya ayrı seçilecek ürünlerin tam listesi.</li>
                <li>Kutu, dolgu, paketleme ve varsa not kartı talebi.</li>
                <li>Logo uygulanacak parçalar ve varsa kişiye özel isimler.</li>
                <li>KDV ve sevkiyat dahil karşılaştırılacak toplam kapsam.</li>
                <li>Teslimat adresleri, örnek paket onayı ve alıcı eşleşme planı.</li>
              </ul>
              <p className="mt-4">Bu özetle <Link href="/promosyon-vip-urunler" className="font-semibold text-blue-700 underline">kurumsal VIP hediye seçeneklerini</Link>{" "} değerlendirerek teklif isteyebilirsiniz. Başka ürün grupları arasında karar veriyorsanız <Link href="/rehber/promosyon-urunleri-secim-rehberi" className="font-semibold text-blue-700 underline">promosyon ürünleri seçim rehberi</Link>{" "} genel karşılaştırma için kullanılabilir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Sık Sorulan Sorular</h2>
              <div className="mt-5 space-y-5">
                {FAQ_ITEMS.map((item) => (
                  <div key={item.question} className="rounded-xl border border-gray-200 p-5">
                    <h3 className="font-bold text-gray-900">{item.question}</h3>
                    <p className="mt-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-2xl bg-gray-950 p-6 text-white">
              <h2 className="text-2xl font-bold">Hediye setinizi kullanım amacına göre planlayın</h2>
              <p className="mt-3 text-gray-200">Alıcı grubunu, adedi, ürün ve kutu tercihlerinizi paylaşın; kişiselleştirme, toplam kapsam ve teslim planını birlikte netleştirelim.</p>
              <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold !text-black">Kurumsal Teklif Al</Link>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
}
