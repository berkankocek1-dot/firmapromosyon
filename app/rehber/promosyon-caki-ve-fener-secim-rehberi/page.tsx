import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-caki-ve-fener-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-caki-ve-fener-secim-rehberi.jpg";
const TITLE = "Promosyon Çakı ve Fener Seçim Rehberi";
const DESCRIPTION = "Çakı, el feneri, kalem fener ve kutulu setleri karşılaştırın. İşlev listesi, güç kaynağı, parça bazında logo ve teslim kapsamını birlikte planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Çakıda fonksiyon sayısı hangi araçları içerir?",
    "answer": "Sayı tek başına araç listesini açıklamaz. Hangi parçaların bulunduğunu ve nasıl sayıldığını seçilen model için öğrenin. Gerekli tornavida ucu veya başka işlevin varlığını ayrıca teyit edin."
  },
  {
    "question": "Daha fazla fonksiyon her zaman daha uygun mu?",
    "answer": "Uygunluk kullanılacak işlevlere, gövdeye ve açma-kapama deneyimine bağlıdır. Yalnız toplam sayıyı değil ihtiyaç duyulan parçaların bulunmasını değerlendirin."
  },
  {
    "question": "LED fener şarjlı mı?",
    "answer": "LED ifadesi güç kaynağını açıklamaz. Pil türü, şarj desteği ve pilin teslimata dahil olup olmadığı ayrı doğrulanmalıdır."
  },
  {
    "question": "Fenerin ışık gücü ve çalışma süresi nedir?",
    "answer": "Kaynakta doğrulanmış değer bulunmuyorsa lümen, aydınlatma mesafesi veya çalışma süresi vaat edilmemelidir. Teknik ihtiyacınızı model koduyla paylaşarak bilgi isteyin."
  },
  {
    "question": "Kalem fener yazı yazmak için de kullanılır mı?",
    "answer": "Kalem biçiminde olması yazım işlevi bulunduğunu göstermez. Penlight veya kalem fener, formu tarif eder; ek işlevler açıkça belirtilmelidir."
  },
  {
    "question": "Setin bütün parçalarında logo aynı bedelle mi uygulanır?",
    "answer": "Çakı, fener ve kutu farklı alan ve yöntemlere sahip olabilir. Hangi parçaya logo istendiğini ayrı belirtin; her uygulamanın fiyat kapsamını teyit edin."
  },
  {
    "question": "Koli adedi minimum sipariş miktarı mı?",
    "answer": "Koli ve kutu bilgisi paketleme adedidir. Açıkça belirtilmiş minimum sipariş varsa onu esas alın; belirtilmeyen modellerde minimum miktarı ayrıca sorun."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kutulu çakı ve el fenerinin temsili görünümü" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Çakı ve Fener Seçim Rehberi", item: PAGE_URL },
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
        <span>Çakı ve Fener Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Çakı ve Fener Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon çakı ve fener seçerken ürünün kaç işlevli olduğundan önce hangi ihtiyacı karşılayacağını belirleyin. Çok amaçlı bir çakı, bağımsız el feneri ve kutulu hediye seti farklı seçim soruları doğurur. Bu rehber işlev listesini, aydınlatma için sorulacak teknik bilgileri ve parça bazında logo kapsamını ayrı değerlendirmenize yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Kutuda kapalı çok amaçlı çakı ve el feneri, yanında ayrı kalem fener" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli bir modeli, işlev listesini veya teslim kapsamını göstermez. Yan taraftaki kalem fener ayrı ürün örneğidir.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Tek araç mı, birlikte sunulan hediye mi?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-caki-fener-tornavida-seti">Çakı ve fener modellerini</Link> incelemeden önce dağıtım amacını belirleyin. Yalnız taşınabilir aydınlatma isteyen kullanıcı için el feneri; farklı küçük araçları bir arada isteyen kullanıcı için çok amaçlı çakı değerlendirilebilir. İki ihtiyacı birlikte karşılamak isteniyorsa kutulu setin içeriğini ayrıca inceleyin.</p>
              <p>Bir kategori adında set veya tornavida ifadesi geçmesi bütün ürünlerde aynı parçaların bulunduğunu göstermez. Tekli ürün ile birlikte paketlenmiş ürünün adet ve teslim kapsamını ayırın. Kutuyu da ürünün teknik işlevi yerine sunum ve paketleme bileşeni olarak değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Çakıdaki fonksiyonları adlarıyla karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Fonksiyon sayısı karşılaştırmaya başlangıç olabilir; hangi araçların bulunduğunu tek başına açıklamaz. İhtiyaç duyduğunuz parçaları adlarıyla listeleyin ve seçilen modelde karşılığını sorun. Tornavida ucu gerekiyorsa yalnız fonksiyon sayısına bakarak uygun olduğunu kabul etmeyin.</p>
              <p>Numunede parçaların açılıp kapanmasını ve kapalı gövdenin tutuşunu değerlendirin. Aynı dış ölçüye sahip seçenekler aynı araç dizilimini sunmayabilir. Belirtilmeyen kilit mekanizması, çelik türü veya profesyonel çalışma kapasitesi gibi nitelikleri ürün açıklamasına eklemeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">El feneriyle kalem feneri kullanım biçimine göre ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kalem formu, ürünün biçimini anlatır; yazı yazma işlevi bulunduğunu göstermez. İnce gövdeyi taşıma tercihiyle birlikte değerlendirin. Bağımsız el fenerinde ise elde tutuş, düğme konumu ve ayrılacak yer seçimde öne çıkabilir.</p>
              <p>Birden fazla fonksiyon ifadesi varsa bunların adını öğrenin; bunu otomatik olarak ışık modu sayısı gibi yorumlamayın. Numune üzerinde açma-kapama ve taşıma deneyimini kontrol edin. Ölçü belirtilen ürünleri aynı birime çevirin; daha büyük gövdeyi doğrudan daha güçlü ışık anlamında kullanmayın.</p>
            </div>
          </section>
          <section><h2 className="text-2xl font-extrabold">Çakı, fener ve kutulu set karşılaştırması</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><caption className="mb-3 text-left text-gray-600">İşlev sayısını, güç kaynağını ve teslim kapsamını ayrı bilgiler olarak okuyun.</caption><thead><tr><th scope="col" className="border p-3">Başlık</th><th scope="col" className="border p-3">Kontrol</th><th scope="col" className="border p-3">Dikkat</th></tr></thead><tbody>
<tr><th scope="row" className="border p-3 font-semibold">Çok amaçlı çakı</th><td className="border p-3">İhtiyaç duyulan araçlar</td><td className="border p-3">Fonksiyonların tek tek listesi</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">El feneri</th><td className="border p-3">Taşıma ve elde kullanım</td><td className="border p-3">Güç kaynağı ve doğrulanmış performans</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Kalem fener</th><td className="border p-3">İnce gövde tercihi</td><td className="border p-3">Form ile ek işlevi ayırma</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Kutulu set</th><td className="border p-3">Birlikte dağıtım</td><td className="border p-3">Çakı, fener, kutu ve ek parçalar</td></tr>
<tr><th scope="row" className="border p-3 font-semibold">Logo</th><td className="border p-3">Parça bazında uygulama</td><td className="border p-3">Ayrı alan, yöntem ve bedel</td></tr>
</tbody></table></div></section>
          <section>
            <h2 className="text-2xl font-extrabold">LED bilgisini güç kaynağı ve performanstan ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>LED ifadesi şarj desteğini, pil türünü veya çalışma süresini açıklamaz. Pil gerekip gerekmediğini, gerekiyorsa türünü ve teslimata dahil olup olmadığını ayrı sorun. Şarj bilgisi doğrulanmayan modele kablo veya şarj özelliği eklemeyin.</p>
              <p>Aydınlatma ihtiyacı belirli bir düzey gerektiriyorsa lümen, kullanım süresi ve varsa üreticinin test koşullarını isteyin. Suya dayanıklılık veya darbe dayanımı belirtilmemişse varsaymayın. Numunede ışığın görünmesi, ölçülmüş teknik performans bilgisinin yerini tutmaz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Set içeriğini kutu ve ek parçalarla birlikte yazdırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kutulu bir set için çakı, fener ve kutuyu ayrı satırlarda tanımlayın. Varsa pil veya başka aksesuarların dahil durumunu teyit edin. Hediye görselindeki ek nesneleri otomatik olarak paketin parçası saymayın; onaylanan içerik listesiyle sipariş verin.</p>
              <p>Kurumsal dağıtımda kutunun kapalı ölçüsü ve iç yerleşimi taşıma planını etkiler. Ürünlerin kutuda nasıl sabitlendiğini ve teslim ambalajını öğrenin. Koli miktarıyla set adedini karıştırmadan, dağıtılacak paket sayısını netleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Çakı, fener ve kutu için ayrı logo onayı hazırlayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Çakının gövdesiyle silindirik fenerin uygulama alanı aynı değildir. Her parçanın alanını ayrı ölçüde değerlendirin. Dar alanda uzun bir slogan yerine marka adı veya sadeleştirilmiş amblem gerekip gerekmediğine gerçek ölçülü tasarım üzerinden karar verin.</p>
              <p>Sette çakı ve fener için lazer, kutu için serigrafi gibi farklı yöntemler bulunabilir. Bu yöntemleri bütün tekli ürünlere genellemeyin. Hangi parçaya uygulama yapılacağını, yönünü ve her baskının bedelini açıkça belirtin; yalnız kutunun baskılı olması ürünlerin de baskılı olduğu anlamına gelmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numune kontrolüyle teklif kapsamını eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Numunede işlev listesini, fenerin çalışmasını ve kutu yerleşimini ayrı kontrol edin. Seri siparişte aynı ürün, renk ve uygulama alanının kullanılacağını onay kaydına ekleyin. Kullanım bilgisini ve varsa üretici talimatlarını ürünle birlikte talep edin.</p>
              <p>Teklifte model, adet, parça bazında baskı ve paket içeriğini belirtin. Açık minimum sipariş bilgisiyle koli/kutu adedini ayırın. Ürün ve uygulama bedelleri, KDV, pil kapsamı, stok ve teslim koşulları netleştikten sonra son tasarımı onaylayın.</p>
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
            <Link href="/promosyon-caki-fener-tornavida-seti" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Çakı ve Fener Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
