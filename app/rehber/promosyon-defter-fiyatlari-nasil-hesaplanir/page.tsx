import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GuideRelatedProducts from "@/app/components/GuideRelatedProducts";

const SITE_URL = "https://www.firmapromosyon.com";
const SLUG = "promosyon-defter-fiyatlari-nasil-hesaplanir";
const PAGE_URL = `${SITE_URL}/rehber/${SLUG}`;
const IMAGE = `/guides/${SLUG}.jpg`;
const TITLE = "Promosyon Defter Fiyatları Nasıl Hesaplanır?";
const DESCRIPTION = "Promosyon defter fiyatını etkileyen ölçü, kapak, sayfa, adet ve logo uygulamasını öğrenin. Baskı dahil teklifleri örnek hesap ve kontrol listesiyle karşılaştırın.";

export const metadata: Metadata = {
  title: "Promosyon Defter Fiyatları | Baskı ve Toplu Sipariş Hesabı",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMAGE}`, width: 1200, height: 630, alt: "Farklı ölçü ve cilt yapılarında defterler ile teklif hesabını temsil eden hesap makinesi" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}${IMAGE}`] },
};

const FAQ = [
  {
    "question": "Promosyon defter fiyatına logo baskısı dahil mi?",
    "answer": "Ürün kartlarında gösterilen fiyatlar baskı ve KDV hariç birim ürün fiyatıdır. Logo yöntemi, uygulama alanı ve adet belirlenerek baskı dahil teklif hazırlanır. Kalem ve kutu gibi ek parçaların kapsamı ayrıca belirtilmelidir."
  },
  {
    "question": "Toplu alımda defterin birim fiyatı her zaman düşer mi?",
    "answer": "Ürün ve baskının birim bedeli sipariş adedine göre teklif edilir. Aynı model ve logo uygulaması için farklı adetlerde teklif istenerek karşılaştırma yapılabilir. Daha yüksek adedin her koşulda aynı oranda indirim sağlayacağı varsayılmamalıdır."
  },
  {
    "question": "Gofre ve UV uygulaması aynı fiyatla mı hesaplanır?",
    "answer": "Yöntem, yüzey uygunluğu, tasarım ve sipariş adedine göre değerlendirilir. Seçilen uygulamanın adet başına bedeli ürün fiyatından ayrı belirtilir. Bir yöntemin bütün siparişlerde daha ucuz olduğu varsayılmamalıdır."
  },
  {
    "question": "Defter fiyatlarını karşılaştırırken sayfa mı yaprak mı esas alınmalı?",
    "answer": "Teklifte kullanılan birim açık yazılmalıdır. Bir yaprağın ön ve arka yüzü bulunduğu için yaprak sayısı ile sayfa sayısını aynı değer gibi karşılaştırmak yanıltıcıdır. İç kağıdın ölçüsü ve özelliği de aynı kapsamda değerlendirilmelidir."
  },
  {
    "question": "Bu rehberdeki hesap güncel satış fiyatı mı?",
    "answer": "Hayır. Hesap tablosu, gider kalemlerinin nasıl birleştirildiğini göstermek için hazırlanmış varsayımsal örnektir. Güncel ürün bedelleri kartlarda görülebilir; baskı, adet, paketleme ve teslim kapsamıyla siparişe özel teklif alınır."
  }
];

const BODY = [
  {
    "id": "urun-ozellikleri",
    "title": "Ölçü, kapak ve iç sayfayı aynı teklif satırında eşitleyin",
    "paragraphs": [
      "İki defterin kapağı benzer görünse de içeriği aynı olmayabilir. Dış ölçüyle iç sayfa ölçüsünü, kalınlığı ve sayfa düzenini ayrı kontrol edin. Küçük boy bir defterle daha büyük bir defteri yalnız adet fiyatına göre karşılaştırmak, toplam bütçenin hangi ürün için ayrıldığını belirsiz bırakır.",
      "Sayfa ve yaprak bilgisinde birim farklılığını giderin. Aynı rakamın bir teklifte yaprak, diğerinde sayfa anlamına gelmesi karşılaştırmayı değiştirebilir. Kağıt gramajı, çizgili veya kareli düzen ve kapak malzemesi belirtilmişse bunların aynı modele ait olduğunu teyit edin.",
      "Spiral, dikiş veya başka bir cilt yapısının yanında kapanma lastiği, kalem tutucu ve cep gibi parçaları da kayıt altına alın. Bir kalem tutucunun bulunması, kalemin fiyatın içinde olduğunu göstermez. Kalem ve kutu isteniyorsa bunlar ayrı ürün veya paket kalemi olarak yazılmalıdır."
    ]
  },
  {
    "id": "baski",
    "title": "Logo uygulamasını ürün bedelinden ayrı karşılaştırın",
    "paragraphs": [
      "Gofre, UV veya başka bir uygulama yöntemi her kapak için aynı biçimde değerlendirilemez. Önce seçilen yüzeye uygun yöntemi belirleyin. Teklifte logo ölçüsü, uygulanacak alan ve baskı yönü açık olsun; ön kapak uygulamasıyla birden fazla alanı kapsayan işi aynı kapsam gibi karşılaştırmayın.",
      "Teklifte ürünün birim bedeliyle adet başına logo uygulama bedeli ayrı görülsün. Sipariş adedi değiştiğinde toplam tutarı bu iki kalem üzerinden yeniden karşılaştırın. Baskı alanı veya uygulama sayısı değişiyorsa yeni kapsamın birim bedele etkisini öğrenin.",
      "Her deftere farklı isim yazılması isteniyorsa tek logolu siparişten ayrı bir kişiselleştirme kapsamı oluşur. İsim listesinin dosya biçimi, yazım kontrolü ve değişiklik süreci teklifle birlikte netleşsin. Üretime geçmeden önce logo konumu ve kişiselleştirme örneği onaylansın."
    ]
  },
  {
    "id": "adet",
    "title": "Adet değişikliğinin toplam ve birim bedele etkisini ayrı okuyun",
    "paragraphs": [
      "Aynı model için 100, 250 veya 500 adet teklif istenebilir; fakat yalnız toplam tutarlara bakmak yeterli değildir. Ürün ve baskının birim bedelini ayrı karşılaştırın. Toplam sipariş büyürken birim tutar farklı bir yönde değişebilir.",
      "Her adet seçeneğinde baskı yöntemi, logo ölçüsü ve uygulama alanı aynı kalsın. Böylece fiyat farkının ürün veya baskı kapsamının değişmesinden mi, yoksa adet teklifinden mi kaynaklandığını anlayabilirsiniz.",
      "Renk, model veya logo tasarımı dağılımı değişiyorsa yalnız genel adedi iletmeyin. Her grubun kaç adet olduğunu belirtin. Aynı toplam sayıya sahip iki siparişin stok ve uygulama planı farklı olabilir."
    ]
  },
  {
    "id": "paketleme",
    "title": "Kalem, kutu ve sevkiyat kapsamını teklif dışında bırakmayın",
    "paragraphs": [
      "Defter tek başına mı, kalemle birlikte mi, yoksa kutulu hediye olarak mı teslim edilecek? Kutu fotoğrafında görülen parçaların tamamının dahil olduğunu varsaymayın. Parça listesi, yerleştirme ve varsa kutu üzerine logo uygulaması ayrı belirtilsin.",
      "Tek adrese toplu sevkiyat ile farklı adreslere dağıtım aynı iş değildir. Teslim adresini, paketleme biçimini ve ihtiyaç tarihini paylaşın. Nakliye bedelinin dahil olup olmadığını öğrenin; KDV hariç tutarı KDV dahil bir teklifle doğrudan karşılaştırmayın.",
      "Teklifin geçerlilik süresini ve stok teyidini kaydedin. Model veya kapak rengi değişecekse yeni kapsam üzerinden onay alın. Daha düşük toplam elde etmek için değiştirilen özelliğin kullanım ihtiyacınızı karşılamaya devam ettiğini kontrol edin."
    ]
  }
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function DefterFiyatRehberi() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: TITLE, description: DESCRIPTION, inLanguage: "tr-TR",
    image: [`${SITE_URL}${IMAGE}`], mainEntityOfPage: PAGE_URL,
    author: { "@type": "Organization", name: "FirmaPromosyon", url: `${SITE_URL}/hakkimizda` },
    publisher: { "@type": "Organization", name: "FirmaPromosyon", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rehber", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 text-gray-900 sm:px-6">
      <JsonLd data={articleSchema} /><JsonLd data={breadcrumbSchema} /><JsonLd data={faqSchema} />
      <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-600">
        <Link href="/" className="underline">Ana Sayfa</Link><span aria-hidden="true">/</span>
        <Link href="/rehber" className="underline">Rehber</Link><span aria-hidden="true">/</span>
        <span>Defter Fiyatları Rehberi</span>
      </nav>
      <article className="min-w-0 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600"><Link href="/hakkimizda" className="underline">FirmaPromosyon</Link> · Kurumsal defter siparişi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Promosyon defter fiyatı, yalnızca kapak fotoğrafına veya sipariş adedine bakılarak karşılaştırılamaz. Ölçü, iç sayfa, kapak, cilt ve logo uygulaması toplam teklifi birlikte oluşturur. Bu rehber, baskısız ürün bedelini baskı dahil toplamdan ayırarak teklifleri aynı kapsamda değerlendirmenizi sağlar.</p>
          <figure className="mt-6">
            <Image src={IMAGE} alt="Farklı ölçü ve cilt yapılarında defterler ile teklif hesabını temsil eden hesap makinesi" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-xs leading-5 text-gray-500">Temsili görseldir. Model ve renk seçenekleri için ürün detaylarını inceleyin.</figcaption>
          </figure>
        </header>
        <div className="mt-8 space-y-9">
          <section>
            <h2 className="text-2xl font-extrabold">Önce baskısız ürünle baskı dahil teklifi ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Bir fiyat listesinde görülen defter bedeli, siparişin teslim edilmiş toplam tutarı olmayabilir. Logo uygulaması, kişiselleştirme veya paketleme ayrıca hesaplanabilir. Fiyat istemeden önce hangi giderlerin karşılaştırmaya dahil olacağını belirleyin.</p>
              <p>Aynı ürün kodu ve adetle başlayın. Kapak rengi, sayfa özelliği ve logo yerleşimi değişiyorsa farkı teklife yazdırın. Daha düşük görünen rakamın gerçekten aynı ürün ve hizmet kapsamını karşılayıp karşılamadığını böyle kontrol edebilirsiniz.</p>
            </div>
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[480px] text-left text-sm leading-6">
                <caption className="sr-only">Defter teklifinde ayrı görülmesi gereken fiyat kalemleri</caption>
                <thead className="bg-gray-50"><tr><th scope="col" className="p-3">Kalem</th><th scope="col" className="p-3">Teklifte sorulacak bilgi</th></tr></thead>
                <tbody>
                  <tr className="border-t"><th scope="row" className="p-3">Ürün</th><td className="p-3">Model, kapak rengi, iç sayfa, adet ve birim fiyat</td></tr>
                  <tr className="border-t"><th scope="row" className="p-3">Logo uygulaması</th><td className="p-3">Yöntem, ölçü, alan sayısı ve adet başına bedel</td></tr>
                  <tr className="border-t"><th scope="row" className="p-3">Ekler ve teslim</th><td className="p-3">Kalem, kutu, paketleme, kargo ve KDV kapsamı</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <GuideRelatedProducts guideSlug={SLUG} />

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-2xl font-extrabold">Baskı dahil defter maliyeti için örnek hesap</h2>
            <p className="mt-3 leading-7 text-gray-700">Aşağıdaki rakamlar yalnız hesap yöntemini anlatır; güncel ürün veya baskı fiyatı değildir. Örnekte tüm kalemler KDV hariçtir; kargo, kutu ve kişiselleştirme hesaba dahil edilmemiştir.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm leading-6">
                <caption className="sr-only">200 adet için varsayımsal maliyet hesabı</caption>
                <thead><tr><th scope="col" className="p-3">Gider</th><th scope="col" className="p-3">Hesap</th><th scope="col" className="p-3">Tutar</th></tr></thead>
                <tbody>
                  <tr className="border-t"><th scope="row" className="p-3">Defter</th><td className="p-3">200 adet × 100 TL</td><td className="p-3">20.000 TL</td></tr>
                  <tr className="border-t"><th scope="row" className="p-3">Logo uygulaması</th><td className="p-3">200 adet × 20 TL</td><td className="p-3">4.000 TL</td></tr>
                  <tr className="border-t font-semibold"><th scope="row" className="p-3">Ara toplam</th><td className="p-3">KDV ve ek giderler hariç</td><td className="p-3">24.000 TL</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-7 text-gray-700">Bu örnekte giderlerin ürün başına payı 24.000 ÷ 200 = <strong>120 TL</strong> olur. Buradaki 120 TL yalnız örnek hesabın sonucudur. Gerçek siparişte ilgili kalemleri aldığınız teklifteki tutarlarla değiştirin; dahil edilmeyen giderleri ve KDV kapsamını ayrıca ekleyin.</p>
          </section>

          {BODY.map(({ id, title, paragraphs }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <div className="mt-4 space-y-4 leading-8 text-gray-700">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
          ))}

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-extrabold">Model seçimini fiyat karşılaştırmasından ayrı tamamlayın</h2>
            <p className="mt-3 leading-7 text-gray-700">Tarihsiz defter ile tarihli ajanda arasındaki seçim, ölçü ve cilt tercihi için <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="font-semibold underline">defter ve ajanda seçim rehberini</Link> inceleyebilirsiniz. Bu yazı ise seçilen ürünün fiyat ve teklif kapsamını karşılaştırmaya odaklanır.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">Teklif istemeden önce hazırlayacağınız bilgiler</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-gray-700">
              <li>Ürün kodu, kapak rengi, ölçü ve iç sayfa özellikleri.</li>
              <li>Model veya tasarım başına sipariş adedi.</li>
              <li>Logo dosyası, uygulama alanları ve varsa isim listesi.</li>
              <li>Kalem, kutu ve paketleme talepleri.</li>
              <li>Teslim adresi, ihtiyaç tarihi ve karşılaştırılacak fiyat kapsamı.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-6">{FAQ.map(({ question, answer }) => <div key={question}><h3 className="text-lg font-semibold">{question}</h3><p className="mt-2 leading-7 text-gray-700">{answer}</p></div>)}</div>
          </section>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/promosyon-defter" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-5 py-3 text-center font-semibold text-white">Defter Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-center font-semibold">E-posta ile Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
