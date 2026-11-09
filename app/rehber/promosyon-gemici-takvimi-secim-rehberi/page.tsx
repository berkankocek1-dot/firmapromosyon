import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/rehber/promosyon-gemici-takvimi-secim-rehberi";
const IMAGE_PATH = "/guides/promosyon-gemici-takvimi-secim-rehberi.jpg";
const TITLE = "Gemici Takvimi Seçimi ve Baskıya Hazırlık Rehberi";
const DESCRIPTION = "Gemici takviminde ölçü, blok ve spiral düzeni ile reklam alanını karşılaştırın. Takvim yılı, logo tasarımı, prova ve toplu sipariş onayını adım adım planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Gemici takviminin toplam ölçüsü logo alanı mıdır?",
    "answer": "Hayır. Toplam ürün ölçüsü, tarih blokları ve reklam alanı farklı ölçülerdir. Tasarım seçilen modelin güncel reklam alanı ve üretim şablonuna göre hazırlanmalıdır."
  },
  {
    "question": "Spiral sayısı görünür ay sayısını gösterir mi?",
    "answer": "Tek başına göstermez. Spiral yapısı, yaprak sayısı, blok düzeni ve aynı anda görünür ay sayısı ayrı ayrı kontrol edilmelidir."
  },
  {
    "question": "Jumbo, sıvama ve taslama aynı şeyi mi belirtir?",
    "answer": "Hayır. Bu adlar ölçü ve taşıyıcı yapısına ilişkin farklı ayrımlarda kullanılır. Kesin dış ölçü, karton veya mukavva bilgisi ve reklam alanı model bazında karşılaştırılmalıdır."
  },
  {
    "question": "Ürün görselindeki yıl sipariş yılı kabul edilir mi?",
    "answer": "Hayır. Görsel eski bir yılı veya başka bir firmaya ait örnek baskıyı gösterebilir. İstenen takvim yılı, dil ve yaprak içeriği sipariş kaydında açıkça belirtilmelidir."
  },
  {
    "question": "Takvim baskı dosyasında neler kontrol edilmeli?",
    "answer": "Yıl, ay sırası, gün ve tarih yerleşimi, istenen içerik, logo ve iletişim bilgileri kontrol edilmelidir. Kesim ve spiral payları ile reklam alanı üretim şablonundan teyit edilmelidir."
  },
  {
    "question": "Minimum adet ve teslim tarihi nasıl belirlenir?",
    "answer": "Seçilen model, adet, takvim yılı, tasarım onayı, tedarik ve üretim planı üzerinden belirlenir. Baskı, paketleme, KDV ve sevkiyat kapsamı aynı teklifte netleştirilmelidir."
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
      alt: "Ofis duvarında reklam bölümü ve ayrı tarih blokları bulunan temsili gemici takvimi" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    images: [SITE_URL + IMAGE_PATH],
  },
};

export default function MarineCalendarGuidePage() {
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
      { "@type": "ListItem", position: 3, name: "Gemici Takvimi Seçim Rehberi", item: PAGE_URL },
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
          <span>Gemici Takvimi Seçimi</span>
        </nav>
        <article>
          <header>
            <p className="text-sm font-semibold text-gray-600">FirmaPromosyon Rehber</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Gemici takvimi, tarih bölümlerini duvarda takip etmek ve firma
              tasarımını aynı yüzeyde sunmak için değerlendirilen bir takvim türüdür.
              Seçimde dış ölçü kadar tarihlerin okunması, görünür ay düzeni ve
              logo için ayrılan reklam alanı da önemlidir.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Bu rehber, modeli seçtikten sonra takvim yılı ve baskı dosyasını doğru
              onaylamak isteyen satın alma ve tasarım ekipleri içindir. Güncel
              ürünleri ve teknik ayrımları{" "}
              <Link href="/promosyon-gemici-takvimi" className="font-semibold text-blue-700 underline">promosyon gemici takvimi kategorisinden</Link>{" "}
              karşılaştırabilirsiniz.
            </p>
            <figure className="mt-7">
              <Image src={IMAGE_PATH} width={1200} height={630} priority
                sizes="(max-width: 768px) 100vw, 856px"
                alt="Ofis duvarında reklam bölümü ve ayrı tarih blokları bulunan temsili gemici takvimi"
                className="h-auto w-full rounded-2xl border border-gray-200" />
              <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                Rehber için hazırlanmış temsili görsel. Takvim yılı, görünür ay
                sayısı, spiral ve baskı düzeni seçilen modele göre belirlenir.
              </figcaption>
            </figure>
          </header>
          <div className="mt-10 space-y-10 text-base leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Takvimin kullanılacağı duvarı ve okunacağı mesafeyi belirleyin</h2>
              <p className="mt-4">Önce takvimin asılacağı alanı ve çevresindeki raf, dolap veya diğer duvar aksesuarlarını ölçün. Takvime masa başından mı, ayakta mı, yoksa daha uzaktan mı bakılacağını değerlendirin. Asıldıktan sonra tarih bölümlerinin rahat görülebilmesi, yalnızca ürünün boşluğa sığmasından farklı bir ihtiyaçtır.</p>
              <p className="mt-4">Boyut kararı verirken mümkünse gerçek ölçüde bir yerleşim taslağı kullanın. Aylar çevrildiğinde veya bloklar değiştiğinde erişimin nasıl olacağını da düşünün. Çalışma alanında duvar kullanımı uygun değilse <Link href="/promosyon-takvim" className="font-semibold text-blue-700 underline">diğer takvim seçeneklerini</Link>{" "} ayrıca değerlendirebilirsiniz.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Toplam ölçü, blok ölçüsü ve reklam alanını ayırın</h2>
              <p className="mt-4">Bir modelin büyük olması logo için aynı oranda geniş alan sunduğu anlamına gelmez. Ürün karşılaştırmasında aşağıdaki ölçüleri ayrı kaydedin. Tasarım dosyasını yalnız ürün adındaki dış ölçüye göre hazırlamayın.</p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[510px] text-left text-sm leading-6">
                  <caption className="p-4 text-left font-semibold text-gray-900">Gemici takviminde ölçülerin kullanım amacı</caption>
                  <thead className="bg-gray-50 text-gray-900"><tr><th scope="col" className="p-3">Ölçü</th><th scope="col" className="p-3">Neyi belirler?</th><th scope="col" className="p-3">Kontrol</th></tr></thead>
                  <tbody>{[
                    ["Toplam ürün ölçüsü", "Duvar yerleşimi ve genel taşıma boyutu", "Asılacağı alana sığıyor mu?"],
                    ["Tarih bloğu ölçüsü", "Tarih bölümünün kapladığı alan", "Seçilen düzen ve okunaklılık uygun mu?"],
                    ["Reklam alanı", "Logo ve kurumsal tasarımın yerleştirileceği bölüm", "Güncel baskı şablonuyla eşleşiyor mu?"],
                  ].map(([name, purpose, check]) => (
                    <tr key={name} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{name}</th><td className="p-3">{purpose}</td><td className="p-3">{check}</td></tr>
                  ))}</tbody>
                </table>
              </div>
              <p className="mt-4">Ölçülerin yazılış yönünü ve birimini de kontrol edin. Aynı değerler farklı sırayla verilmişse en ve boyu teyit edin. Spiral, askı ve kesim için ayrılacak alanlar reklam bölümünün yerleşimini etkileyebilir; bu ayrıntıları üretim şablonunda görün.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Spiral, yaprak ve görünür ay düzenini birlikte karşılaştırın</h2>
              <p className="mt-4">Tek parça veya üç parça spiral bilgisi, takvimin bütün kullanım düzenini tek başına açıklamaz. Kaç yaprak bulunduğunu, blokların nasıl değiştirildiğini ve aynı anda hangi ayların görüleceğini ayrıca kontrol edin. Aynı dış boyuttaki modeller farklı tarih düzeni sunabilir.</p>
              <p className="mt-4">Önceki ve sonraki ayları birlikte görmek gerekiyorsa bu ihtiyacı teklif talebine açıkça yazın. Beş aylık görünüm gibi bir özellik yalnız ilgili model için doğrulanmalıdır. Spiral sayısından veya örnek görseldeki bir kesitten bütün modellerin aynı görünümü sunduğunu çıkarmayın.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Jumbo, sıvama ve taslama tanımlarını teknik bilgilerle eşleştirin</h2>
              <p className="mt-4">Jumbo, sıvama ve taslama ifadelerini birbirinin yerine kullanmayın. Jumbo adıyla listelenen ürünlerde kesin dış ölçüyü, sıvama veya taslama olarak sunulanlarda ise taşıyıcı yapısını model kaydından karşılaştırın. Tek bir ad, bütün malzeme ve boyut özelliklerini anlatmaz.</p>
              <p className="mt-4">Alt ve üst taşıyıcı, karton veya mukavva, kaplama ve yaprak kağıdı bilgilerini ayrı inceleyin. Kalınlık ile gramajı aynı özellik saymayın. Benzer görünen iki takvimin reklam alanı, taşıma biçimi ve parça düzeni farklı olabilir; seçilen ürünün güncel teknik bilgisini esas alın.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Takvim yılını ve yaprak içeriğini sipariş kaydında açık yazın</h2>
              <p className="mt-4">Ürün fotoğrafında eski bir yıl veya başka firmanın örnek tasarımı görülebilir. Sipariş yılını kendiliğinden güncel yıl kabul etmeyin; istenen yılı teklif ve onay dosyasına açıkça ekleyin. Tekrarlanan siparişte önceki yılın tasarımını kopyalarken yalnız kapaktaki yılı değiştirmek yeterli değildir.</p>
              <p className="mt-4">Ay ve gün adlarının dili, haftanın başlangıcı ve istenen özel gün veya tatil gösterimleri gibi içerik beklentilerini de belirtin. Hangi yaprakların ve hangi içerik sürümünün teslim edileceğini teyit edin. İstenen tarih bilgilerinin doğruluğu son prova kontrolünde ayrıca incelenmelidir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Kurumsal tasarımı reklam alanının gerçek boyutunda hazırlayın</h2>
              <p className="mt-4">Logoyu mümkünse vektörel dosyayla paylaşın. Firma adı, telefon, internet adresi ve varsa görselin son baskı boyutunda okunaklı olmasını kontrol edin. Ekranda büyütülmüş bir tasarımın rahat okunması, duvarda aynı sonucu vereceği anlamına gelmez.</p>
              <p className="mt-4">Güncel üretim şablonunu alın; kesim, spiral ve askı çevresindeki yerleşimi bu şablona göre yapın. Her model için aynı kenar payı veya dosya gereksinimini varsaymayın. Fotoğrafların çözünürlüğü, dosya biçimi ve renk düzeni uygulama yöntemine göre teyit edilmelidir.</p>
              <p className="mt-4">Logo ile tarih bölümlerinin birbiriyle ilişkisini de görün. Önemli iletişim bilgisini spiral veya hareketli yaprakların kapatacağı bir yere yerleştirmeyin. Renk açısından kritik işlerde renk referansını ve fiziksel örnek onayı gerekip gerekmediğini üretim öncesinde netleştirin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Provayı tarih bilgisi ve baskı tasarımı için iki ayrı turda kontrol edin</h2>
              <p className="mt-4">İlk kontrolde yılı, ay sırasını, gün başlıklarını ve tarihlerin yerleşimini inceleyin. İstenen özel gün veya tatil bilgilerinin onaylı içerikle eşleştiğini ayrıca kontrol edin. Tasarımın güzel görünmesi takvim içeriğinin doğru olduğu anlamına gelmez.</p>
              <p className="mt-4">İkinci kontrolde logo, yazım, iletişim bilgileri, reklam alanı ve kesim çevresindeki yerleşime bakın. Varsa birden fazla dil veya tasarım sürümünü kendi dosyasıyla eşleştirin. Her revizyondan sonra eski dosyanın üretime gönderilmediğini teyit edin.</p>
              <p className="mt-4">Fiziksel numune veya örnek ürün inceleniyorsa spiral kullanımı, yaprakların hareketi ve duvarda duruşu da değerlendirin. Numunenin baskıyı mı, taşıyıcı yapısını mı, yoksa ikisini birlikte mi temsil ettiğini sorun. Son prova dosyasının adını, yılını ve onay tarihini kaydedin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Fiyat kapsamını dağıtım ve teslim tarihine göre tamamlayın</h2>
              <p className="mt-4">Teklifleri aynı model, yıl, adet, malzeme ve tasarım kapsamıyla karşılaştırın. Ürün bedelinin logo baskısını, tasarım hazırlığını ve paketlemeyi içerip içermediğini açıkça sorun. KDV ve sevkiyat koşullarını da aynı kapsamda değerlendirin; fiyata dahil bir uygulamayı ikinci kez eklemeyin.</p>
              <p className="mt-4">Dağıtım adedini ve teslim edilecek adresleri tasarım aşamasında belirleyin. Uzun gövdeli takvimlerin paketleme ve taşımada nasıl korunacağını sorun. Kargo çıkış günüyle alıcıya ulaşması gereken tarihi ayırın; üretim ve teslim süresini stok, adet ve onay planına göre netleştirin.</p>
              <p className="mt-4">Sabit bir minimum adet veya bütün modeller için geçerli termin varsaymayın. Model kodu, istenen yıl, adet, logo dosyası ve ihtiyaç tarihiyle <Link href="/kurumsal-teklif-al" className="font-semibold text-blue-700 underline">kurumsal teklif talebi</Link>{" "} oluşturabilirsiniz.</p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">Baskı onayından önce son kontrol</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Takvim yılı, dil ve istenen yaprak içeriği yazılı mı?</li>
                <li>Toplam ölçü, tarih blokları ve reklam alanı ayrı kontrol edildi mi?</li>
                <li>Spiral, yaprak sayısı ve görünür ay düzeni teyit edildi mi?</li>
                <li>Logo ve iletişim bilgileri gerçek baskı ölçüsünde incelendi mi?</li>
                <li>Yıl, ay sırası ve tarih yerleşimi son provada kontrol edildi mi?</li>
                <li>Onay dosyası, paketleme, toplam kapsam ve teslim planı net mi?</li>
              </ul>
              <p className="mt-4">Kontrol listenizle <Link href="/promosyon-gemici-takvimi" className="font-semibold text-blue-700 underline">gemici takvimi modellerini</Link>{" "} karşılaştırabilirsiniz. Masa kullanımı veya başka takvim biçimleri için <Link href="/promosyon-takvim" className="font-semibold text-blue-700 underline">tüm takvim kategorisini</Link>{" "} inceleyebilirsiniz.</p>
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
              <h2 className="text-2xl font-bold">Gemici takviminizi yıl ve tasarımıyla birlikte planlayın</h2>
              <p className="mt-3 text-gray-200">Model kodu, takvim yılı, adet ve logo dosyanızı paylaşın; reklam alanını, uygulama kapsamını ve teslim planını birlikte netleştirelim.</p>
              <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold !text-black">Kurumsal Teklif Al</Link>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
}
