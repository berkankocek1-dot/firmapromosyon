import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GuideRelatedProducts from "@/app/components/GuideRelatedProducts";

const SITE_URL = "https://www.firmapromosyon.com";
const SLUG = "promosyon-tisort-secim-ve-baski-rehberi";
const PAGE_URL = `${SITE_URL}/rehber/${SLUG}`;
const IMAGE = `/guides/${SLUG}.jpg`;
const TITLE = "Logo Baskılı Promosyon Tişört Nasıl Seçilir?";
const DESCRIPTION = "Promosyon tişört seçiminde bisiklet ve polo yaka, kumaş, beden dağılımı, logo yerleşimi ve fiyat teklifini karşılaştırın. Toplu siparişinizi adım adım planlayın.";

export const metadata: Metadata = {
  title: "Promosyon Tişört Seçimi | Kumaş, Beden ve Logo Baskı",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE_URL}${IMAGE}`, width: 1200, height: 630, alt: "Bisiklet yaka ve polo yaka tişörtler ile kumaş örnekleri" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}${IMAGE}`] },
};

const FAQ = [
  {
    question: "Promosyon tişörtte polo yaka mı bisiklet yaka mı seçilmeli?",
    answer: "Etkinlik ekibinde sade bir görünüm için bisiklet yaka, mağaza veya karşılama ekibinde yakalı bir görünüm için polo modeller karşılaştırılabilir. Kalıp, kumaş ve ekibin çalışma biçimi birlikte değerlendirilmelidir; yaka tipi tek başına kalite ölçütü değildir.",
  },
  {
    question: "Toplu tişört siparişinde beden dağılımı nasıl belirlenir?",
    answer: "Önce seçilen modelin ölçü tablosu alınır. Kullanıcıların tercihleri bu tabloyla karşılaştırılarak beden adetleri kaydedilir. Mümkünse numune denenir; toplam adet, beden ve renk kırılımıyla birlikte onaylanır.",
  },
  {
    question: "Promosyon tişört fiyatına baskı dahil mi?",
    answer: "Sitedeki ürün kartlarında gösterilen fiyatlar birim ürün fiyatıdır; baskı ve KDV hariçtir. Baskı alanı, uygulama sayısı, adet ve teslim kapsamı belirlenerek toplam teklif hazırlanır.",
  },
  {
    question: "Her tişörte aynı ölçüde logo basılabilir mi?",
    answer: "Logo alanı beden, yaka, cep, dikiş ve tasarıma göre değerlendirilir. Özellikle farklı bedenlerde aynı yerleşimin nasıl görüneceği kontrol edilmelidir. Nihai baskı ölçüsü ve konumu üretim öncesinde onaylanır.",
  },
  {
    question: "Logo baskılı tişört nasıl yıkanmalı?",
    answer: "Seçilen ürünün bakım etiketi ve baskı uygulayıcısının talimatları birlikte izlenmelidir. Bütün kumaşlar ve baskılar için ortak bir sıcaklık veya yıkama ömrü varsayılmamalıdır.",
  },
];

const BODY = [
  {
    id: "kumas",
    title: "Kumaş içeriğini, gramajı ve kalıbı ayrı değerlendirin",
    paragraphs: [
      "Kumaş içeriği hangi liflerin kullanıldığını, gramaj ise kumaşın alan başına ağırlığını ifade eder. Aynı gramajdaki iki kumaşın dokusu ve kullanım hissi farklı olabilir. Daha yüksek gramajı otomatik olarak daha iyi ürün veya her ortamda daha rahat kullanım şeklinde yorumlamayın.",
      "Ürün açıklamasındaki malzeme ve gramaj bilgisinin yanında kumaşın eldeki hissini, görünürlüğünü ve hareket sırasında nasıl durduğunu inceleyin. Personel gün boyunca hareket ediyorsa yalnız düz fotoğrafa göre karar vermek yerine numune üzerinde kol, omuz ve gövde rahatlığını değerlendirmek daha yararlıdır.",
      "Penye ve polo adlarını aynı özelliğin iki alternatifi gibi kullanmayın. Polo yaka bir model ayrımıdır; penye ifadesi yaka biçimini açıklamaz. Teklifte model kodu, yaka tipi ve kumaş bilgisini ayrı yazın. Böylece karşılaştırdığınız iki teklifin gerçekten aynı ürüne ait olup olmadığı anlaşılır.",
    ],
  },
  {
    id: "beden",
    title: "Toplam adedi, beden ve renk dağılımına dönüştürün",
    paragraphs: [
      "100 adet tişört istemek, üretim veya stok planlaması için tek başına yeterli değildir. Önce seçilen modelin beden tablosunu alın. S, M veya L etiketinin farklı modellerde aynı ölçüyü ifade edeceğini varsaymayın; göğüs genişliği ve ürün boyu gibi ölçülerin nasıl alındığını da sorun.",
      "Ekipten beden tercihlerini toplarken modelin ölçü tablosunu paylaşın. Mümkünse birkaç beden numunesiyle deneme yapın. Dağıtım listesinde model, renk, beden ve adet ayrı sütunlarda bulunsun. Son değişiklikleri tek bir listede birleştirip toplamı yeniden kontrol edin.",
      "Örneğin 100 kişilik bir ekip için oluşan dağılımın başka bir ekipte de uygun olacağı söylenemez. Yedek ürün planlanacaksa hangi bedenlerde tutulacağını mevcut kullanıcı dağılımına göre belirleyin. Renk ve bedenin birlikte bulunabilirliğini, sadece toplam stok adedini sormaktan ayrı bir kontrol olarak ele alın.",
    ],
  },
  {
    id: "logo",
    title: "Logo yerleşimini tişörtün üzerinde onaylayın",
    paragraphs: [
      "Sol göğüs, sırt veya kol baskısı aynı kullanım amacına hizmet etmeyebilir. Karşılama ekibinde ön taraftan görülecek küçük bir logo yeterli olabilirken etkinlik görevlisinin uzaktan tanınması için sırt yerleşimi de değerlendirilebilir. Önce logonun kim tarafından, hangi mesafeden görüleceğine karar verin.",
      "Baskıyı yalnız ekrandaki logo dosyası üzerinden onaylamayın. Konumu ve ölçüsü belirtilmiş tişört yerleşimi isteyin. Cep, düğme, yaka ve dikişlerin uygulama alanıyla ilişkisini kontrol edin. Küçük bedenlerde alanın daralabileceğini hesaba katarak seçilen ölçünün farklı bedenlerdeki görünümünü değerlendirin.",
      "İnce çizgiler, küçük harfler ve zeminle yakın renkler baskıda okunabilirliği etkileyebilir. Markanın kullanıma uygun logo dosyasını ve varsa renk referansını paylaşın. Ürün rengi, baskı ölçüsü ve son tasarım birlikte onaylandığında sipariş dosyası daha açık hale gelir.",
    ],
  },
  {
    id: "teklif",
    title: "Promosyon tişört fiyatlarını aynı kapsamla karşılaştırın",
    paragraphs: [
      "Promosyon tişört fiyatı değerlendirilirken baskısız ürün bedeliyle baskı dahil teklif birbirine karıştırılmamalıdır. Aynı adette iki teklifin farklı çıkması; yaka, kumaş, model, baskı alanı veya uygulama sayısından kaynaklanabilir. Karşılaştırmaya başlamadan önce bu başlıkları eşitleyin.",
      "Teklifte birim ürün fiyatı ve adet, baskının konumu ve ölçüsü, varsa hazırlık veya numune bedeli, paketleme, kargo ve KDV kapsamı ayrı görülsün. Ön ve arka baskı isteniyorsa iki alanı da belirtin. Birden fazla tasarımın aynı siparişte bulunması halinde her tasarımın adet kırılımını paylaşın.",
      "Sitedeki ürün kartları güncel ürün kaydındaki fiyatı gösterir; bu tutar baskı ve KDV hariç birim ürün fiyatıdır. Sabit bir baskılı toplam varsaymak yerine seçtiğiniz model ve beden dağılımıyla teklif isteyin. Minimum adet ve teslim planını aynı teklif içinde netleştirin.",
    ],
  },
  {
    id: "teslim",
    title: "Tasarım onayıyla teslim planını birlikte tamamlayın",
    paragraphs: [
      "Fuar veya etkinlik için sipariş veriyorsanız ihtiyaç tarihini ve teslim adresini en başta paylaşın. Bu tarih yalnız baskının tamamlanacağı gün değil, ürünlerin kullanım yerinde hazır bulunacağı gün olmalıdır. Model ve bedenlerin temini, tasarım onayı, uygulama ve sevkiyat aşamalarını birlikte planlayın.",
      "Üretim öncesinde son dosyada model, renk, beden adetleri, baskı alanları ve onaylı tasarımın bulunduğunu kontrol edin. Teslim alırken aynı listeyi kullanarak adet ve bedenleri karşılaştırın. Ürünün bakım etiketiyle baskı uygulayıcısının bakım talimatını da ekibe iletin.",
    ],
  },
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function TisortSecimRehberi() {
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
        <span>Tişört Seçim ve Baskı Rehberi</span>
      </nav>
      <article className="min-w-0 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600"><Link href="/hakkimizda" className="underline">FirmaPromosyon</Link> · Kurumsal tekstil seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Logo baskılı promosyon tişört siparişinde önce kullanım amacını, sonra model ve beden dağılımını belirleyin. Bu rehber; fuar ekibi, personel kıyafeti veya etkinlik dağıtımı için yaka, kumaş, baskı alanı ve fiyat teklifini aynı sipariş planında değerlendirmenize yardımcı olur.</p>
          <figure className="mt-6">
            <Image src={IMAGE} alt="Bisiklet yaka ve polo yaka tişörtler ile kumaş örnekleri" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-xs leading-5 text-gray-500">Temsili görseldir. Model ve renk seçenekleri için ürün detaylarını inceleyin.</figcaption>
          </figure>
        </header>
        <div className="mt-8 space-y-9">
          <section>
            <h2 className="text-2xl font-extrabold">Bisiklet ve polo yakayı kullanım amacına göre karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Tek günlük bir organizasyonda dağıtılacak tişörtle her gün kullanılacak personel kıyafetinin öncelikleri farklı olabilir. İlkinde etkinlik tasarımı ve dağıtım planı, ikincisinde kalıp rahatlığı, bakım ve ekip içinde tutarlı görünüm daha fazla önem kazanabilir.</p>
              <p>Bisiklet yaka daha sade bir modeldir; polo yaka ise yakalı ve düğmeli görünüm isteyen ekipler için karşılaştırılabilir. İkisini de yalnız fotoğraftaki duruşuna göre seçmeyin. Kumaşı, beden tablosunu ve logo yerleşimini aynı değerlendirmeye katın.</p>
            </div>
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[480px] text-left text-sm leading-6">
                <caption className="sr-only">Bisiklet yaka ve polo yaka tişört seçim ölçütleri</caption>
                <thead className="bg-gray-50"><tr><th scope="col" className="p-3">Ölçüt</th><th scope="col" className="p-3">Bisiklet yaka</th><th scope="col" className="p-3">Polo yaka</th></tr></thead>
                <tbody>
                  <tr className="border-t"><th scope="row" className="p-3">Yaka yapısı</th><td className="p-3">Yuvarlak, sade yaka</td><td className="p-3">Yakalı, düğmeli ön bölüm</td></tr>
                  <tr className="border-t"><th scope="row" className="p-3">Kullanım örneği</th><td className="p-3">Etkinlik, kampanya ve ekip dağıtımı</td><td className="p-3">Mağaza, karşılama ve personel kıyafeti</td></tr>
                  <tr className="border-t"><th scope="row" className="p-3">Logo kontrolü</th><td className="p-3">Ön ve arka yerleşim, bedenle birlikte değerlendirilir</td><td className="p-3">Yaka, düğme ve varsa cep konumu dikkate alınır</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <GuideRelatedProducts guideSlug={SLUG} />

          {BODY.map(({ id, title, paragraphs }) => (
            <section key={id} id={id} className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold">{title}</h2>
              <div className="mt-4 space-y-4 leading-8 text-gray-700">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </section>
          ))}

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-extrabold">Baskı yöntemini ayrıca inceleyin</h2>
            <p className="mt-3 leading-7 text-gray-700">Bu yazı tişört ve sipariş seçimine odaklanır. Filmden tekstile transfer süreci, yüzey uygunluğu ve uygulama adımları için <Link href="/rehber/dtf-baski-nedir" className="font-semibold underline">DTF baskı rehberini</Link> okuyabilirsiniz. Seçilen kumaş ve tasarımın uygulamaya uygunluğunu teklif aşamasında birlikte değerlendirin.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">Teklif istemeden önce hazırlayacağınız bilgiler</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-gray-700">
              <li>Kullanım amacı, model veya yaka tercihi.</li>
              <li>Renk ve beden bazında adet dağılımı.</li>
              <li>Logo dosyası, baskı konumları ve istenen ölçüler.</li>
              <li>Teslim adresi ve ürünlerin hazır olması gereken tarih.</li>
              <li>Numune, paketleme ve sevkiyat talepleri.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-5 space-y-6">{FAQ.map(({ question, answer }) => <div key={question}><h3 className="text-lg font-semibold">{question}</h3><p className="mt-2 leading-7 text-gray-700">{answer}</p></div>)}</div>
          </section>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/promosyon-tisort" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-5 py-3 text-center font-semibold text-white">Tişört Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-center font-semibold">E-posta ile Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
