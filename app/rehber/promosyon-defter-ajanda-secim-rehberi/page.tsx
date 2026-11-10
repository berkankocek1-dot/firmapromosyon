import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/rehber/promosyon-defter-ajanda-secim-rehberi`;
const IMAGE_PATH = "/guides/promosyon-defter-ajanda-secim-rehberi.jpg";
const TITLE = "Promosyon Defter ve Ajanda Seçimi | Boyut, Sayfa ve Logo Rehberi";
const DESCRIPTION = "Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.";
const FAQ_ITEMS = [
  {
    "question": "Defter ile ajanda arasındaki fark nedir?",
    "answer": "Tarihsiz defter belirli bir takvim yılına bağlı olmadan not almak için kullanılabilir. Tarihli planlama gerekiyorsa ajanda modelleri değerlendirilebilir. Ürünün adına bakmakla yetinmeden iç sayfa düzeni ve tarih bilgisi teyit edilmelidir."
  },
  {
    "question": "Ajandanın takvim yılı kapak fotoğrafından anlaşılır mı?",
    "answer": "Fotoğraftaki yıl, sipariş edilecek stok ürününün yılını tek başına doğrulamaz. Kullanılacak dönem, tarihli iç sayfa düzeni ve güncel stok yılı yazılı olarak teyit edilmelidir."
  },
  {
    "question": "Yaprak sayısı ile sayfa sayısı aynı mı?",
    "answer": "Aynı birim değildir. Bir yaprağın ön ve arka yüzü bulunur. Ürün açıklamasındaki adedin hangi birimi ve hangi bölümleri kapsadığını teyit etmeden farklı modellerin sayılarını doğrudan karşılaştırmayın."
  },
  {
    "question": "Kalem tutuculu deftere kalem dahil mi?",
    "answer": "Tutucu veya yuva bulunması kalemin pakete dahil olduğunu göstermez. Kalem, kutu ve diğer aksesuarların teklif kapsamı ayrıca netleştirilmelidir."
  },
  {
    "question": "Termo PU veya metal detay ifadesi neyi gösterir?",
    "answer": "Bunlar kapak veya tasarım özelliği olarak okunmalıdır. Termo PU ifadesinden gerçek deri, metal detaydan da bütün kapağın metal olduğu sonucu çıkarılmamalıdır. Kesin malzeme ve uygulama alanı model bazında teyit edilmelidir."
  },
  {
    "question": "Kağıt gramajı yazının arkaya geçmeyeceğini garanti eder mi?",
    "answer": "Tek başına garanti değildir. Kullanılacak kalem ve iç sayfa numunesi birlikte değerlendirilmelidir. Gramaj, renk ve sayfa düzeni gibi bilgiler açıklamadan doğrulanmalı; bütün modellerde aynı sonuç varsayılmamalıdır."
  },
  {
    "question": "Defter veya ajanda kapağına hangi logo yöntemi uygulanır?",
    "answer": "Gofre, lazer veya renkli baskı gibi seçeneklerin uygunluğu kapak malzemesi, kaplama ve kullanılabilir alana bağlıdır. Yöntem, ölçü ve yerleşim seçilen model için onaylanmalıdır."
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
    images: [{ url: `${SITE_URL}${IMAGE_PATH}`, width: 1200, height: 630, alt: "Kurumsal defter ve ajanda seçimini temsil eden farklı boyut ve cilt seçenekleri" }],
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
      { "@type": "ListItem", position: 3, name: "Promosyon Defter ve Ajanda Seçim Rehberi", item: PAGE_URL },
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
        <span>Defter ve Ajanda Seçim Rehberi</span>
      </nav>
      <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <header>
          <p className="text-sm font-semibold text-gray-600">Kurumsal ürün seçimi</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Promosyon Defter ve Ajanda Seçim Rehberi</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">Defter ve ajanda seçimi, not alma ile tarihli planlama ihtiyacını ayırmakla başlar. Boyut, iç sayfa, kapak ve cilt özelliklerini birlikte değerlendirin; logo uygulaması ile paket içeriğini ayrıca netleştirin. Bu rehber, ürün grupları arasında seçim ve toplu sipariş hazırlığı için bir kontrol çerçevesi sunar.</p>
          <figure className="mt-6">
            <Image src={IMAGE_PATH} alt="Farklı boyutlarda kapalı defterler ile açık spiralli planlayıcının temsili görünümü" width={1200} height={630} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full rounded-2xl" priority />
            <figcaption className="mt-2 text-sm text-gray-500">Temsili görseldir; belirli ürün kodlarını, takvim yılını veya paket içeriğini göstermez.</figcaption>
          </figure>
        </header>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold">Tarihsiz not mu, tarihli planlama mı?</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Toplantı notları, proje takibi ve serbest yazım için <Link href="/promosyon-defter">tarihsiz defter</Link> seçenekleri değerlendirilebilir. Belirli gün ve haftalara plan yapılacaksa <Link href="/promosyon-ajanda">ajanda</Link> modellerinin iç düzenini inceleyin. Bir ürünün ajanda olarak adlandırılması, tüm sayfalarının aynı planlama düzenine sahip olduğunu göstermez.</p>
              <p>Tarihli bir ürün seçiliyorsa kullanılacak takvim yılını ve dönemini yazılı belirtin. Kapak fotoğrafındaki tarih veya model kodu güncel stok yılını tek başına doğrulamaz. İç sayfa örneğini ve tedarik bilgisini birlikte isteyin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">İç sayfa düzenini ve adet birimini doğrulayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Çizgili, kareli veya başka bir sayfa düzeni kullanılacak iş için önemlidir. Teknik çizim veya tablo notları için <Link href="/promosyon-kareli-defter">kareli defter</Link> seçeneklerini inceleyebilirsiniz. Kapaktaki bir desenin iç sayfada da bulunduğunu varsaymayın.</p>
              <p>Yaprak ve sayfa sayısı aynı birim değildir; bir yaprağın ön ve arka yüzü bulunur. Karşılaştırmada adet bilgisinin hangi birimi ve hangi bölümleri kapsadığını sorun. İç kağıdın gramajı veya rengi belirtilmişse model üzerinden teyit edin; bunlardan tek başına yazım performansı garantisi çıkarmayın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Dış ölçü, yazılabilir alan ve cilt aynı bilgi değildir</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapak ölçüsü kullanılabilir iç sayfa alanıyla aynı olmayabilir. Çantada taşıma, masa üzerinde çalışma ve kit içine yerleştirme için dış ölçüyle kalınlığı birlikte kontrol edin. <Link href="/promosyon-cep-mini-boy-defter">Cep ve mini boy defter</Link> adlarında da kesin santimetre ölçüsünü esas alın.</p>
              <p>Spiral, gizli spiral veya dikişli yapı aynı kullanım hissini vermez. Açılma biçimini ve yazarken cilt bölümünün konumunu numunede değerlendirin. <Link href="/promosyon-spiralli-ajanda">Spiralli ajanda</Link> grubunda da her modelin iç düzenini ve ölçüsünü ayrı karşılaştırın.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Alt kategorileri kullanım ihtiyacına göre karşılaştırın</h2>
            <p className="mt-4 leading-8 text-gray-700">Bu özellikler aynı üründe birlikte bulunabilir. Boyut, sayfa düzeni, kapak ve cilt farklı seçim ölçütleridir.</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <caption className="mb-3 text-left text-gray-600">Karşılaştırmada ürünün kendi açıklamasını ve numunesini esas alın.</caption>
                <thead><tr><th scope="col" className="border p-3">Alt kategori</th><th scope="col" className="border p-3">Öncelik</th><th scope="col" className="border p-3">Teyit</th></tr></thead><tbody>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-cep-mini-boy-defter" className="underline">Cep ve mini boy defter</Link></th><td className="border p-3">Taşıma ve kompakt kullanım</td><td className="border p-3">Kesin ebat, kalınlık ve yazılabilir alan</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-kareli-defter" className="underline">Kareli defter</Link></th><td className="border p-3">Kareli iç sayfa ihtiyacı</td><td className="border p-3">İç sayfa örneği, kağıt ve adet birimi</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-kalem-tutuculu-defter" className="underline">Kalem tutuculu defter</Link></th><td className="border p-3">Kalemi defterle taşıma</td><td className="border p-3">Tutucu uyumu ve kalemin paket kapsamı</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-metal-detayli-defter" className="underline">Metal detaylı defter</Link></th><td className="border p-3">Kapak veya kapanma ayrıntısı</td><td className="border p-3">Detayın türü ve gerçek logo alanı</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-spiralli-ajanda" className="underline">Spiralli ajanda</Link></th><td className="border p-3">Cilt ve açılma tercihi</td><td className="border p-3">Spiral yapısı, iç düzen ve takvim yılı</td></tr>
                  <tr><th scope="row" className="border p-3 font-semibold"><Link href="/promosyon-termo-pu-ajanda" className="underline">Termo PU ajanda</Link></th><td className="border p-3">Kapak türü tercihi</td><td className="border p-3">Malzeme, ölçü, sayfa düzeni ve yıl</td></tr>
                </tbody></table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kapak malzemesi ve metal detayı doğru okuyun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Termo PU, termo deri, sert kapak ve metal detay ifadeleri farklı özelliklere işaret edebilir. Ürün adından gerçek deri veya belirli bir malzeme bileşimi sonucu çıkarmayın. Kesin kapak bilgisini seçilen modelin açıklaması ve tedarik teyidiyle öğrenin.</p>
              <p><Link href="/promosyon-termo-pu-ajanda">Termo PU ajandaları</Link> kapak türü üzerinden, <Link href="/promosyon-metal-detayli-defter">metal detaylı defterleri</Link> ise plaka, toka veya şerit gibi ayrıntılar üzerinden inceleyebilirsiniz. Metal detay bulunması bütün kapağın metal veya bütün yüzeyin logo alanı olduğu anlamına gelmez.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Kalem tutucu ile kutu içeriğini ayırın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p><Link href="/promosyon-kalem-tutuculu-defter">Kalem tutuculu defterde</Link> yuva veya tutucu bulunması kalemin dahil olduğu anlamına gelmez. Kalemin boyutu ve gövdesinin tutucuya uygunluğunu, ayrıca teklif edilecekse seçilen kalemle birlikte kontrol edin.</p>
              <p>Kartvizit cebi, kapanma lastiği veya başka bir ek parça da model bazında teyit edilmelidir. Görseldeki kalem, kutu ve aksesuarların paket kapsamını ayrı sorun. Set sunumu için <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi">kurumsal hediye seti rehberine</Link> geçebilirsiniz.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Logo yöntemi ve uygulanabilir alanı onaylayın</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Gofre, lazer veya renkli baskı gibi seçeneklerin uygunluğu kapak yüzeyi ve kaplamaya bağlıdır. Bir modelde belirtilen yöntemi diğer defter veya ajandalarda otomatik olarak mevcut kabul etmeyin. Plaka, toka, lastik ve dikişler yerleşimi etkileyebilir.</p>
              <p>Kapak tasarımında logo ile varsa isim alanını birlikte gösterin. Toka, plaka veya lastiğin bu alanlarla ilişkisi görülsün. Kişiye özel çalışma yapılacaksa isim listesini yazım kontrolünden geçirip hangi ismin hangi kapak rengine uygulanacağını netleştirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Numunede yazım ve kullanım hissini değerlendirin</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Kapak hissi, cildin açılması, iç sayfa düzeni ve varsa tutucu kullanımını numunede inceleyin. Kullanılacak kalemle kısa bir yazım denemesi yaparak sayfa üzerindeki görünümü değerlendirin. Bir gramaj değerinden bütün kalemlerde aynı sonucu beklemeyin.</p>
              <p>Tarihli ajanda numunesinin, sipariş edeceğiniz stokla aynı takvim yılına ait olduğunu kontrol edin. İç sayfa düzeni ve kapak rengi onayını ayrı kaydedin. Kapaktaki uygulamanın görünümü de önemliyse gofre veya baskı örneğini aynı yüzey üzerinden değerlendirin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Teklif ve teslim planını model üzerinden kurun</h2>
            <div className="mt-4 space-y-4 leading-8 text-gray-700">
              <p>Model, adet, kapak rengi, iç sayfa beklentisi ve tarihli üründe takvim yılını paylaşın. Logo dosyası, uygulama yöntemi, isim listesi, varsa kalem ve kutu isteği, teslim adresi ve ihtiyaç tarihi teklifte açık olsun.</p>
              <p>Teklif karşılaştırmasında önce iç sayfa düzenini ve tarihli üründe takvim yılını eşitleyin. Ardından kapak uygulaması, kişiselleştirme ve kalem–kutu kapsamını karşılaştırın. İhtiyaç tarihinden önce stok ve tasarım onayı için ayrılacak süreyi de teslim planına dahil edin.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold">Sipariş öncesi kısa kontrol listesi</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-700">
              <li>Tarihli veya tarihsiz kullanım ve gerekiyorsa takvim yılı belli mi?</li>
              <li>Ölçü, iç sayfa ve yaprak–sayfa birimi doğrulandı mı?</li>
              <li>Kapak, cilt ve ek parçalar numunede değerlendirildi mi?</li>
              <li>Logo ve varsa isim listesi son sürümüyle onaylandı mı?</li>
              <li>Kalem, kutu, toplam bedel ve teslim kapsamı yazılı mı?</li>
            </ul>
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
            <Link href="/promosyon-defter" className="rounded-2xl bg-black px-5 py-3 font-semibold text-white">Defter Modellerini İncele</Link>
            <Link href="/promosyon-ajanda" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Ajanda Modellerini İncele</Link>
            <Link href="/kurumsal-teklif-al" className="rounded-2xl border border-gray-300 px-5 py-3 font-semibold">Kurumsal Teklif Al</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
