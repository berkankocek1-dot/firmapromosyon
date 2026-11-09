import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-urunleri-secim-rehberi`;

const GUIDE_IMAGE = "/guides/promosyon-urunleri-secim-rehberi-kapak-v2.jpg";

const FAQ_ITEMS = [
  {
    "question": "Promosyon ürünü seçerken ilk soru ne olmalı?",
    "answer": "Ürünün kime verileceği ve alıcının onu hangi anda kullanabileceği belirlenmelidir. Ürün grubuna veya birim fiyata karar vermeden önce bu ihtiyaç tarif edilmelidir."
  },
  {
    "question": "Her alıcıya aynı ürün verilmesi gerekir mi?",
    "answer": "Hayır. Ekip, bayi, etkinlik ziyaretçisi ve müşteri grupları farklı ihtiyaçlara sahip olabilir. Ayrı ürünler seçilecekse adet, tasarım ve dağıtım planı da ayrı takip edilmelidir."
  },
  {
    "question": "Birden fazla ürün içeren set her zaman daha iyi midir?",
    "answer": "Hayır. Set içindeki ürünlerin alıcı için anlamlı olması gerekir. Kutu ve birleştirme bedelleri de toplam bütçeyi etkileyebilir; yalnız ürün sayısı üzerinden karar verilmemelidir."
  },
  {
    "question": "Sürdürülebilirlik iddiası nasıl değerlendirilmeli?",
    "answer": "Malzeme, geri dönüştürülmüş içerik veya üretimle ilgili iddialar seçilen ürünün açıklaması ve varsa belgeleri üzerinden doğrulanmalıdır. Renk, görünüm ya da doğal çağrışımlı isim tek başına kanıt değildir."
  },
  {
    "question": "Promosyon dağıtımının başarısı adetle ölçülür mü?",
    "answer": "Dağıtılan adet stok ve uygulama hacmini gösterir. Kullanım geri bildirimi veya kampanyayla ilişkilendirilebilen başvurular ayrıca incelenebilir; dağıtım sayısı tek başına satış etkisini kanıtlamaz."
  }
];

export const metadata: Metadata = {
  title: "Promosyon Ürünleri Seçim Rehberi | Kurumsal Promosyon Ürünleri",
  description:
    "Promosyon ürünleri nasıl seçilir? Promosyon kalem, ajanda, termos, anahtarlık, USB bellek ve diğer kurumsal promosyon ürünleri için seçim rehberi.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Kurumsal promosyon seçimini hedef kitle, kullanım anı, toplam bütçe ve teslim planıyla birlikte değerlendirin.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}${GUIDE_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Promosyon Ürünleri Seçim Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Promosyon ürünleri nasıl seçilir? Kurumsal promosyon ürünleri için detaylı seçim rehberi.",
    images: [`${SITE_URL}${GUIDE_IMAGE}`],
  },
};

export default function PromosyonUrunleriSecimRehberiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Promosyon Ürünleri Seçim Rehberi",
    description:
      "Promosyon ürünleri nasıl seçilir? Kurumsal promosyon ürünleri için detaylı seçim rehberi.",
    inLanguage: "tr-TR",
    mainEntityOfPage: PAGE_URL,
    author: {
      "@type": "Organization",
      name: "FirmaPromosyon",
    },
    publisher: {
      "@type": "Organization",
      name: "FirmaPromosyon",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og.jpg`,
      },
    },
    image: [`${SITE_URL}${GUIDE_IMAGE}`],
    dateModified: "2026-11-09",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehber",
        item: `${SITE_URL}/rehber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Promosyon Ürünleri Seçim Rehberi",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      "@type": "Question", name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Ana Sayfa
        </Link>{" "}
        /{" "}
        <Link href="/rehber" className="hover:underline">
          Rehber
        </Link>{" "}
        / <span>Promosyon Ürünleri Seçim Rehberi</span>
      </nav>

      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            Rehber
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Promosyon Ürünleri Seçim Rehberi
          </h1>

          <figure className="mt-6">
            <Image src={GUIDE_IMAGE} alt="Kurumsal promosyon seçimini temsil eden defter, kalem, termos, bez çanta ve anahtarlık" width={1200} height={630} sizes="(max-width: 768px) 100vw, 896px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün modellerini veya hazır bir set içeriğini göstermez.</figcaption>
          </figure>
          <p className="mt-4 text-base leading-7 text-gray-700 md:text-lg">
            Promosyon ürünü seçimi, alıcının ürünü hangi anda kullanabileceğini
            belirlemekle başlar. Bu rehber; hedef kitle, kullanım senaryosu, toplam
            bütçe ve teslim planını bir araya getirerek ürün grupları arasında karar
            vermenize yardımcı olur. Teknik model ayrıntıları için ilgili kategori
            ve ürün rehberlerine geçebilirsiniz.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">1. Kampanya amacını ve alıcı grubunu tanımlayın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Çalışan karşılama, bayi ziyareti, müşteri teşekkür hediyesi veya fuar dağıtımı aynı ihtiyaç değildir. Alıcı grubunu, temas anını ve dağıtımın amacını kısa bir sipariş özetiyle tarif edin.</p>
              <p>Ürün verildiğinde alıcının ne yapmasını beklediğinizi düşünün: toplantıda not almak, etkinlikte malzeme taşımak veya günlük içecek kullanımına eşlik etmek gibi. Ürün kullanımı için anlamlı bir gerekçe yoksa yalnız görünürlük iddiasıyla karar vermeyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">2. Ürün grubunu kullanım anıyla eşleştirin</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Not alınan görüşmelerde <Link href="/promosyon-kalem">kalem</Link> ve <Link href="/promosyon-defter">defter</Link>, etkinlikte malzeme taşımak için <Link href="/promosyon-ham-bez-tela-canta">bez veya tela çanta</Link> değerlendirilebilir. Bunlar birer senaryo örneğidir; her grupta uygun model ayrıca seçilmelidir.</p>
              <p>İçecek taşıma ihtiyacı varsa <Link href="/promosyon-termos">termos</Link>, fiziksel anahtar tesliminde <Link href="/promosyon-anahtarlik">anahtarlık</Link> seçenekleri incelenebilir. Alıcının mevcut ekipmanı, taşıma alışkanlığı ve gerçek ihtiyacı kararı değiştirebilir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">3. Tek ürün ile set kararını ayrı değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Set planlanıyorsa parçaların aynı kullanıcı ihtiyacına hizmet edip etmediğini kontrol edin. Fazladan ürün eklemek tek başına daha iyi bir hediye veya daha güçlü reklam sonucu anlamına gelmez.</p>
              <p>Kutu, ürünlerin yerleşimi ve tek paket haline getirme ihtiyacı toplam harcamaya dahil edilmelidir. Alıcı ve sunum odaklı ayrıntılar için <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi">kurumsal hediye seti seçim rehberine</Link> geçebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">4. Toplam bütçeyi aynı kapsamda karşılaştırın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Ürün bedeline ek olarak baskı, varsa hazırlık, ambalaj ve sevkiyat kapsamını netleştirin. KDV dahil ve hariç sunulan tutarları doğrudan karşılaştırmayın. Baskı zaten dahilse aynı kalemi tekrar eklemeyin.</p>
              <p>Dağıtılacak kişi sayısı ve gerçek ihtiyaç üzerinden miktar belirleyin. Birim fiyatın azalması toplam ödemenin azalacağı anlamına gelmez. İki adet seçeneği aynı ürün ve uygulama koşullarında tekliflendirilmelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">5. Numune ve logo onayını iki ayrı kontrol olarak ele alın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Ürün numunesi ölçü, tutuş, taşıma veya kullanım hissini değerlendirmeye yardımcı olur. Baskısız numune logonun fiziksel sonucunu göstermez. Model, renk ve varsa kaplamanın siparişle eşleştiği teyit edilmelidir.</p>
              <p>Tasarımı gerçek uygulama ölçüsünde inceleyin. Logo yerleşimi, basılacak yüzler ve son dosya sürümü yazılı onayda yer alsın. Fiziksel renk ve yüzey beklentisi önemliyse baskılı numune koşullarını ayrıca sorun.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">6. Malzeme ve çevresel iddiaları doğrulayın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Geri dönüştürülmüş içerik, malzeme bileşimi veya üretim yeri gibi özellikler ürün bazında teyit edilmelidir. Doğal renkler veya çevre çağrışımlı ürün adları bu iddiaların kanıtı değildir.</p>
              <p>Alıcının uzun süre kullanabileceği bir ürün aramak anlamlı bir seçim ölçütü olabilir. Bununla birlikte görünüşe dayanarak belirli bir çevresel fayda veya kullanım ömrü taahhüt edilmemelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">7. Teslim ve dağıtım planını baştan hazırlayın</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Tasarım onayı, varsa numune, üretim ve sevkiyat için ayrı zaman ayırın. Kargoya veriliş tarihi ile teslim alınma beklentisi aynı değildir. Etkinlik veya dağıtım günü siparişten önce paylaşılmalıdır.</p>
              <p>Tek merkeze gönderim ile farklı şube veya alıcılara gönderim ayrı operasyonlardır. Adresler, paket başına içerik ve miktarlar net olsun. Hazır stok, renk seçenekleri ve minimum adet bütün ürünlerde aynı kabul edilmemelidir.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">8. Sonucu yalnız dağıtılan adetle değerlendirmeyin</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Dağıtılan ve kalan miktarları kayıt altında tutmak stok yönetimini kolaylaştırır. Ancak bu sayılar ürünün kullanıldığını veya satışa katkısını tek başına göstermez.</p>
              <p>Alıcı geri bildirimi ve kampanyayla ilişkilendirilebilen başvurular varsa bunları ayrıca inceleyin. Diğer tanıtım faaliyetlerini hesaba katmadan bütün sonucu promosyon ürününe bağlamayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş özeti: hangi bilgiler paylaşılmalı?</h2>
            <div className="mt-4 space-y-4 leading-7 text-gray-700">
              <p>Alıcı grubu, kullanım amacı, ürün veya model seçenekleri, adet, renk, logo dosyası, basılacak yüzler, ambalaj beklentisi, adres ve istenen teslim tarihini paylaşın. Bütçe hedefi varsa teklifin hangi kapsamda hazırlanacağını belirtin.</p>
              <p>Kalem özelinde <Link href="/rehber/promosyon-kalem-secerken-nelere-dikkat-edilmeli">kalem seçim rehberi</Link>, şapka için <Link href="/rehber/promosyon-sapka-rehberi">şapka rehberi</Link> model kontrolünü ayrıntılandırır. Güncel ürünleri ilgili kategori sayfalarında karşılaştırabilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2>
            <div className="mt-4 space-y-5 leading-7 text-gray-700">
              {FAQ_ITEMS.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-semibold">{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="flex flex-wrap gap-4 font-semibold underline">
            <Link href="/urunler">Tüm ürünleri incele</Link>
            <Link href="/kurumsal-teklif-al">Kurumsal teklif al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}