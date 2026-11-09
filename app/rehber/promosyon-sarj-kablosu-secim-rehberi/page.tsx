import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/rehber/promosyon-sarj-kablosu-secim-rehberi";
const IMAGE_PATH = "/guides/promosyon-sarj-kablosu-secim-rehberi.jpg";
const TITLE = "Promosyon Şarj Kablosu Seçerken Nelere Dikkat Edilmeli?";
const DESCRIPTION = "Promosyon şarj kablosunda cihaz ve adaptör uyumu, hızlı şarj, veri aktarımı, logo baskısı ve numune kontrolünü öğrenin. Toplu siparişinizi adım adım planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Type-C uç varsa hızlı şarj da var mı?",
    "answer": "Hayır. Ucun biçimi tek başına hızlı şarj veya USB Power Delivery desteğini göstermez. Cihaz, güç adaptörü ve kablonun desteklediği özellikler birlikte kontrol edilmelidir."
  },
  {
    "question": "Çoklu şarj kablosu veri aktarımı yapar mı?",
    "answer": "Her model için varsayılamaz. Veri senkronizasyonu veya araç bağlantısı gerekiyorsa seçilen modelin bu işlevi desteklediği ayrıca teyit edilmelidir."
  },
  {
    "question": "iOS uyumlu ifadesi her iPhone için yeterli mi?",
    "answer": "Tek başına yeterli değildir. Kullanılacak cihazın tam modeli ve bağlantı girişi ile kablonun uç ve adaptör listesi karşılaştırılmalıdır."
  },
  {
    "question": "Birden fazla uç aynı anda kullanılabilir mi?",
    "answer": "Uç sayısı eşzamanlı kullanım gücünü göstermez. Aynı anda kaç cihaz bağlanabildiği ve toplam gücün nasıl paylaşıldığı model bazında teyit edilmelidir."
  },
  {
    "question": "Kutulu set mi anahtarlık halkalı kablo mu seçilmeli?",
    "answer": "Çantada saklama, masa kullanımı veya anahtarlarla taşıma ihtiyacına göre seçim yapılmalıdır. Kablo uzunluğu, kaplama ve teslim edilecek parça listesi ayrıca kontrol edilmelidir."
  },
  {
    "question": "Teklif almak için hangi bilgiler gerekli?",
    "answer": "Ürün kodu, adet, hedef cihazlar ve adaptörler, varsa veri veya hızlı şarj beklentisi, logo dosyası, ambalaj talebi ve ihtiyaç tarihi paylaşılmalıdır."
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
      alt: "Masa üzerinde çok uçlu şarj kabloları, taşıma kutusu ve telefon" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    images: [SITE_URL + IMAGE_PATH],
  },
};

export default function ChargingCableGuidePage() {
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
      { "@type": "ListItem", position: 3, name: "Şarj Kablosu Seçim Rehberi", item: PAGE_URL },
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
          <span>Şarj Kablosu Seçimi</span>
        </nav>
        <article>
          <header>
            <p className="text-sm font-semibold text-gray-600">FirmaPromosyon Rehber</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Toplu şarj kablosu siparişinde ilk soru kaç uç bulunduğu değil,
              kablonun hangi cihazla ve hangi güç kaynağıyla kullanılacağıdır.
              Telefonun girişine uyan bir uç, beklediğiniz şarj hızını veya veri
              aktarımını tek başına garanti etmez.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Bu rehber, çalışan kiti, fuar hediyesi veya müşteri paketi hazırlayan
              ekipler için karar ve numune kontrol adımlarını açıklar. Model ve
              güncel fiyat karşılaştırması için{" "}
              <Link href="/promosyon-sarj-kablosu" className="font-semibold text-blue-700 underline">
                promosyon şarj kablosu modellerini
              </Link>{" "}inceleyebilirsiniz.
            </p>
            <figure className="mt-7">
              <Image src={IMAGE_PATH} width={1200} height={630} priority
                sizes="(max-width: 768px) 100vw, 856px"
                alt="Masa üzerinde çok uçlu şarj kabloları, taşıma kutusu ve telefon"
                className="h-auto w-full rounded-2xl border border-gray-200" />
              <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                Rehber için hazırlanmış temsili görsel. Uçlar, kutu ve paket
                içeriği seçilen modele göre değişir.
              </figcaption>
            </figure>
          </header>
          <div className="mt-10 space-y-10 text-base leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Cihaz girişi ile güç kaynağını ayrı yazın</h2>
              <p className="mt-4">
                Önce alıcıların kullanacağı telefon, tablet veya diğer cihazların
                tam modelini belirleyin. Sonra kablonun bağlanacağı adaptör,
                bilgisayar ya da powerbank girişini kontrol edin. Cihaz tarafında
                doğru uç bulunması, güç kaynağı tarafının da uyumlu olduğu anlamına gelmez.
              </p>
              <p className="mt-4">
                Ürün açıklamasında yalnızca Android veya iOS yazması yerine, kutudan
                çıkacak fiziksel uç ve adaptör listesini isteyin. Aynı işletim sistemini
                kullanan cihazların girişi aynı olmak zorunda değildir. Karışık cihaz
                grubuna hediye verilecekse yaygın kullanılan modelleri teklif talebinde belirtin.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Şarj hızı, veri ve araç bağlantısını karıştırmayın</h2>
              <p className="mt-4">
                USB Type-C bağlantı biçimini ifade eder; tek başına USB Power Delivery
                veya belirli bir veri hızı vaadi değildir. İstenen işlev için kablo,
                adaptör ve cihazın özelliklerini birlikte değerlendirin. Şarj amacıyla
                sunulan bir ürüne veri senkronizasyonu veya CarPlay desteği kendiliğinden atfedilmemelidir.
              </p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[520px] text-left text-sm leading-6">
                  <caption className="p-4 text-left font-semibold text-gray-900">Sipariş öncesi ayrı teyit edilecek beklentiler</caption>
                  <thead className="bg-gray-50 text-gray-900"><tr>
                    <th scope="col" className="p-3">Beklenti</th><th scope="col" className="p-3">Sorulacak soru</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ["Fiziksel uyum", "Cihaz ve güç kaynağı için hangi uçlar ve adaptörler geliyor?"],
                      ["Hızlı şarj", "Hangi cihaz ve adaptörle, hangi protokol ve güç değeri destekleniyor?"],
                      ["Veri aktarımı", "Seçilen model veri senkronizasyonunu destekliyor mu?"],
                      ["Araç bağlantısı", "Gereken araç işlevi, araç ve telefon modeliyle doğrulanmış mı?"],
                      ["Eşzamanlı şarj", "Aynı anda kaç cihaz bağlanabilir, toplam güç nasıl paylaşılır?"],
                    ].map(([need, question]) => (
                      <tr key={need} className="border-t border-gray-200">
                        <th scope="row" className="p-3 font-semibold">{need}</th><td className="p-3">{question}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Üç uç bulunması, üç cihazın aynı anda aynı güçle şarj edileceğini göstermez.
                Ürün bilgisinde bir elektrik değeri yazıyorsa bu değerin hangi kullanım
                koşuluna ait olduğunu sorun; bütün cihazlara veya uçlara otomatik olarak genellemeyin.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Taşıma biçimini gerçek kullanıma göre seçin</h2>
              <p className="mt-4">
                Anahtarlarla taşınacak kısa bir kablo ile masa üzerinde kullanılacak
                kutulu set farklı ihtiyaçlara cevap verir. Kablo uzunluğunu, elde tutuşu,
                kutunun çantaya sığmasını ve parçaların kaybolmadan saklanabilmesini değerlendirin.
                Kutudaki adaptör sayısını görsele bakarak varsaymak yerine teslim parça listesini alın.
              </p>
              <p className="mt-4">
                Çalışan kitinde kutunun diğer ürünlerle ölçü ve renk uyumunu kontrol edin.
                Seyahat hediyesinde ise kablonun katlanması ve saklanması daha önemli olabilir.
                Elektrik prizinden bağımsız enerji ihtiyacı varsa ayrıca{" "}
                <Link href="/promosyon-powerbank" className="font-semibold text-blue-700 underline">powerbank seçenekleri</Link>{" "}
                değerlendirilir; şarj kablosunun kendisi enerji depolayan bir ürün değildir.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Logo uygulamasını kutu ve kablo için ayrı onaylayın</h2>
              <p className="mt-4">
                Kablo gövdesi, ışıklı logo alanı ve taşıma kutusu aynı baskı yüzeyi değildir.
                Model için desteklenen yöntemi ve uygulanabilir ölçüyü öğrenin. Bir modelde
                ışıklı lazer uygulaması bulunması, diğer tüm kablolarda da aynı işlemin
                yapılabileceği anlamına gelmez.
              </p>
              <p className="mt-4">
                Vektörel logo dosyasını ve tercih ettiğiniz baskı yönünü paylaşın.
                İnce çizgilerle küçük yazıları gerçek uygulama ölçüsünde kontrol edin.
                Işıklı bir alan seçiliyorsa logonun hem ışıklı hem normal görünümünü
                numune veya uygulama örneği üzerinden değerlendirin.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Numuneyi hangi koşullarda deneyeceğinizi belirleyin</h2>
              <p className="mt-4">
                Denemede kullanılacak cihazın ve adaptörün modelini kaydedin. Önce uçların
                rahat takılıp çıkarılmasını ve parçaların teslim listesiyle eşleşmesini
                kontrol edin. Şarj, veri veya araç bağlantısı beklentileriniz varsa her birini
                ayrıca deneyin; tek bir şarj denemesini bütün işlevlerin doğrulaması kabul etmeyin.
              </p>
              <p className="mt-4">
                Bir numunede alınan sonuç, farklı cihazların tümünde aynı performansın
                sağlanacağını göstermez. Sizin dağıtımınızda önemli olan cihaz grubuna göre
                kontrol yapın. Numune denemesi teknik belge veya sertifikasyonun yerine geçmez;
                gerekli ürün belgelerini de tedarikçiden ayrıca isteyin.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Teklif kapsamını ve teslim planını netleştirin</h2>
              <p className="mt-4">
                Teklif talebinde model kodu, adet, renk, hedef cihazlar, güç kaynağı,
                özel işlev beklentisi, logo dosyası ve ihtiyaç tarihini birlikte paylaşın.
                Ürün bedeline logo uygulaması ve taşıma kutusunun dahil olup olmadığını
                açıkça sorun. Ek paketleme, hazırlık, KDV ve kargo kalemlerini aynı kapsamda karşılaştırın.
              </p>
              <p className="mt-4">
                Sabit minimum adet veya teslim günü varsaymayın. Seçilen modelin stok
                durumu, baskı onayı ve paketleme ihtiyacı üzerinden plan yapın. Etkinlikte
                kullanılacaksa kargo çıkış tarihiyle elinize ulaşması gereken tarihi ayrı belirtin.
              </p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">Sipariş onayı öncesi kısa kontrol listesi</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Cihaz ve güç kaynağı girişleri, tam model bilgileriyle karşılaştırıldı mı?</li>
                <li>Gereken hızlı şarj, veri veya araç işlevi ayrı ayrı teyit edildi mi?</li>
                <li>Eşzamanlı kullanım beklentisi ve teslim edilecek parçalar net mi?</li>
                <li>Kablo ile kutunun logo uygulamaları gerçek ölçüde onaylandı mı?</li>
                <li>Numune, toplam teklif kapsamı ve teslim planı kontrol edildi mi?</li>
              </ul>
              <p className="mt-4">
                Ürünleri bu sorularla değerlendirmek için{" "}
                <Link href="/promosyon-sarj-kablosu" className="font-semibold text-blue-700 underline">şarj kablosu kategorisine</Link>{" "}
                geçebilir veya diğer seçenekleri{" "}
                <Link href="/promosyon-teknolojik-urunler" className="font-semibold text-blue-700 underline">teknolojik promosyon ürünleri</Link>{" "}
                arasında inceleyebilirsiniz.
              </p>
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
              <h2 className="text-2xl font-bold">Cihaz ve logo bilgileriyle teklif alın</h2>
              <p className="mt-3 text-gray-200">Model kodu, adet ve kullanım beklentinizi paylaşın; stok, uygulanabilir logo yöntemi ve toplam sipariş kapsamını birlikte netleştirelim.</p>
              <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold !text-black">Kurumsal Teklif Al</Link>
            </section>
            <section className="border-t border-gray-200 pt-6 text-sm leading-6 text-gray-600">
              <h2 className="font-semibold text-gray-900">Teknik kaynak</h2>
              <p className="mt-2">
                USB Type-C ile güç ve performans özelliklerinin ayrımı için{" "}
                <a href="https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf" className="underline">USB-IF bağlantı ve ürün tanımlama kılavuzu</a>{" "}
                incelenebilir. Bu genel kaynak, katalogdaki belirli bir modelin sertifikalı
                olduğunu veya belirli bir gücü desteklediğini göstermez.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
