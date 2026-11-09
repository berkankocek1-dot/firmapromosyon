import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/rehber/promosyon-mouse-pad-secim-ve-baski-rehberi";
const IMAGE_PATH = "/guides/promosyon-mouse-pad-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Mouse Pad Seçimi ve Baskı Tasarımı Rehberi";
const DESCRIPTION = "Promosyon mouse pad seçerken ölçü, bilek desteği, yüzey ve baskı tasarımını değerlendirin. Logo yerleşimi, tasarım onayı ve sipariş kontrol adımlarını öğrenin.";
const FAQ_ITEMS = [
  {
    "question": "Mouse pad ölçüsü ile baskı alanı aynı mı?",
    "answer": "Hayır. Ürün ölçüsü dış boyutu belirtir; uygulanabilir baskı alanı, kesim payı ve varsa bilek desteği tasarım şablonunda ayrıca kontrol edilmelidir."
  },
  {
    "question": "Standart mı bilek destekli mouse pad mi seçilmeli?",
    "answer": "Masa alanı, kullanıcının mouse hareketi ve kullanım alışkanlığı birlikte değerlendirilmelidir. Destekli modelin bütün kullanıcılar için daha uygun olduğu varsayılmamalıdır."
  },
  {
    "question": "Mouse pad için logo dosyası nasıl hazırlanmalı?",
    "answer": "Logo mümkünse vektörel dosyayla iletilmeli, fotoğraflar istenen baskı boyutuna uygun çözünürlükte hazırlanmalıdır. Dosya biçimi, renk düzeni ve kesim payı üretim şablonuna göre teyit edilmelidir."
  },
  {
    "question": "Mouse pad kaymaz mı ve yıkanabilir mi?",
    "answer": "Bu özellikler yüzey ve taban malzemesine bağlıdır. Ürün görselinden çıkarılamaz; seçilen modelin malzeme bilgisi ve bakım talimatı ayrıca sorulmalıdır."
  },
  {
    "question": "Ofset mi dijital baskı mı daha uygun?",
    "answer": "Uygun yöntem seçilen ürünün üretim yapısı, tasarım, sipariş miktarı ve numune beklentisiyle birlikte belirlenmelidir. Her adet için geçerli tek bir fiyat sıralaması varsayılmamalıdır."
  },
  {
    "question": "Minimum sipariş ile fiyatın esas alındığı adet aynı mı?",
    "answer": "Aynı olmak zorunda değildir. Ürün açıklamasındaki minimum miktar ile liste fiyatının geçerli olduğu miktar ayrı kontrol edilmeli; farklı adet için baskı kapsamıyla birlikte teklif alınmalıdır."
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
      alt: "Masa üzerinde standart ve bilek destekli temsili mouse padler ile kablosuz mouse" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    images: [SITE_URL + IMAGE_PATH],
  },
};

export default function MousePadGuidePage() {
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
      { "@type": "ListItem", position: 3, name: "Mouse Pad Seçim ve Baskı Rehberi", item: PAGE_URL },
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
          <span>Mouse Pad Seçimi</span>
        </nav>
        <article>
          <header>
            <p className="text-sm font-semibold text-gray-600">FirmaPromosyon Rehber</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Promosyon mouse pad siparişinde logo tasarımı kadar masada ayrılan alan,
              mouse hareketi ve ürünün yüzeyi de önemlidir. İyi görünen bir tasarımın
              kullanılabilir olması için ölçü, baskı yerleşimi ve model seçimi birlikte ele alınmalıdır.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Bu rehber, çalışan dağıtımı, bayi hediyesi veya etkinlik paketi hazırlayan
              ekipler için seçim ve baskı onayı adımlarını açıklar. Güncel modelleri ve
              fiyat kapsamını karşılaştırmak için{" "}
              <Link href="/promosyon-mouse-pad" className="font-semibold text-blue-700 underline">promosyon mouse pad kategorisini</Link>{" "}
              inceleyebilirsiniz.
            </p>
            <figure className="mt-7">
              <Image src={IMAGE_PATH} width={1200} height={630} priority
                sizes="(max-width: 768px) 100vw, 856px"
                alt="Masa üzerinde standart ve bilek destekli temsili mouse padler ile kablosuz mouse"
                className="h-auto w-full rounded-2xl border border-gray-200" />
              <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                Rehber için hazırlanmış temsili görsel. Ölçü, yüzey, baskı ve
                destek biçimi seçilen modele göre değişir.
              </figcaption>
            </figure>
          </header>
          <div className="mt-10 space-y-10 text-base leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Masadaki alanı ürün ölçüsüyle karşılaştırın</h2>
              <p className="mt-4">İlk olarak klavye, ekran, evrak ve diğer aksesuarlar yerindeyken mouse için kalan alanı ölçün. Ürünün yalnızca masaya sığması yetmez; kullanıcı mouse hareketini rahatça tamamlayabilmelidir. Ürünün uzun ve kısa kenarının hangi yönde kullanılacağını tasarım hazırlığından önce belirleyin.</p>
              <p className="mt-4">Katalogda belirtilen 18 × 22 cm gibi bir ürün ölçüsünü doğrudan baskı dosyası ölçüsü kabul etmeyin. Dış ölçü, tasarımın uygulanabilir alanı ve mouse hareketine ayrılan bölüm farklı olabilir. Bilek desteği veya yuvarlatılmış köşeler varsa bunları da şablonda görün.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Standart ve bilek destekli formu kullanıcıyla değerlendirin</h2>
              <p className="mt-4">Standart form ile bilek desteği bulunan modelin masa üzerinde kapladığı dış alan benzer olsa da kullanılabilir yüzey düzeni farklılaşabilir. Mouse tutuşu, elin yerleşimi ve masa yüksekliği gibi kullanım koşullarını göz önüne alın. Çalışanlara dağıtımda mümkünse model numunesini kullanan ekiplerle değerlendirin.</p>
              <p className="mt-4">Destek bölümünün yüksekliğini ve yapısını ürün görselinden tahmin etmeyin. Jel dolgu, belirli bir sertlik veya herkes için aynı rahatlık gibi özellikleri doğrulanmadan yazılı şartnameye eklemeyin. Amaç, seçilecek formun gerçek çalışma düzenine uygunluğunu kontrol etmektir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Yüzey, taban ve bakım özelliklerini ayrı sorun</h2>
              <p className="mt-4">Mouse padin üst yüzeyi ile masaya temas eden tabanı farklı işlev görür. Üst yüzeyin mouse hareketine verdiği his, tabanın masadaki duruşu ve kenarların kullanımda nasıl davrandığı numunede ayrı gözlemlenebilir. Bütün optik veya lazer mouse modellerinde aynı sonucu alacağınızı varsaymayın.</p>
              <p className="mt-4">Mevcut ürün açıklamasında malzeme, kalınlık veya bakım şekli kesin belirtilmiyorsa bu bilgileri tedarikçiden isteyin. Yalnız fotoğrafa bakarak kaymaz taban, kauçuk malzeme, yıkanabilirlik veya belirli bir dayanıklılık süresi sonucuna varmayın. Kullanılacak mouse ile numune denemesi yapın; bakım talimatını teslim bilgilerine ekletin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Tasarımda logo, iletişim bilgisi ve kullanım alanını ayırın</h2>
              <p className="mt-4">Tasarımın tek bir öncelikli mesajı olsun. Logo, slogan, telefon, internet adresi ve yoğun bir fotoğrafı aynı alana doldurmak okunaklılığı azaltabilir. Kullanıcı mouseu hareket ettirirken kapanabilecek bölümlere hangi bilgilerin yerleştiğini düşünün. Marka adının her konumda görünür kalacağını varsaymayın.</p>
              <p className="mt-4">Logo dosyasını mümkünse vektörel olarak paylaşın. Fotoğraf veya dokulu arka plan kullanılacaksa dosyanın gerçek baskı boyutunda yeterli çözünürlükte olmasını sağlayın. Küçük yazıları ve ince çizgileri ekranda büyüterek değil, son ölçüde kontrol edin. QR kod varsa tasarım onayını yalnız görüntüyle sınırlamayın; baskı örneğinde okunmasını da deneyin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Baskı dosyasını üretim şablonuna göre hazırlayın</h2>
              <p className="mt-4">Ürün için ofset veya dijital baskı seçeneği belirtilmiş olsa bile dosya gereksinimlerinin aynı olacağını varsaymayın. Üretime uygun dosya biçimini, renk düzenini, kesim payını ve kullanılabilir alanı isteyin. Fotoğrafın veya logonun kenarlardan taşması gereken durumlar üretim şablonuna göre ele alınmalıdır.</p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[500px] text-left text-sm leading-6">
                  <caption className="p-4 text-left font-semibold text-gray-900">Tasarım onayında kontrol edilecek bilgiler</caption>
                  <thead className="bg-gray-50 text-gray-900"><tr><th scope="col" className="p-3">Kontrol</th><th scope="col" className="p-3">Netleştirilecek ayrıntı</th></tr></thead>
                  <tbody>
                    {[
                      ["Ürün ölçüsü", "Dış boyut ve kullanımdaki yön"],
                      ["Uygulanabilir alan", "Kesim çizgisi, köşeler ve destek bölümünün etkisi"],
                      ["Dosya hazırlığı", "Dosya biçimi, çözünürlük, yazı ve logo dosyaları"],
                      ["Renk onayı", "Ekran önizlemesi, varsa renk referansı ve numune koşulu"],
                      ["Son kontrol", "Logo oranı, iletişim bilgileri ve gerçek ölçüde okunaklılık"],
                    ].map(([name, detail]) => (
                      <tr key={name} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{name}</th><td className="p-3">{detail}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">Kesim payını veya gerekli çözünürlüğü her ürün için aynı sayıyla belirlemeyin. Seçilen modelin üretim şablonunu esas alın. Baskı yöntemini de yalnızca fiyatına göre değil, tasarımın ve sipariş miktarının uygulanabilirliğiyle birlikte netleştirin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Dijital önizleme ile fiziksel numuneyi ayırın</h2>
              <p className="mt-4">Dijital onay görseli yerleşimi, metinleri ve genel tasarımı kontrol etmeye yardımcı olur; yüzeyin elde verdiği hissi veya mouse hareketini göstermez. Fiziksel numune isteniyorsa baskılı mı baskısız mı olacağını, nihai üretimle hangi özelliklerde aynı olacağını ve varsa numune bedelini önceden sorun.</p>
              <p className="mt-4">Tasarımı son ölçüde kontrol edin. Logo, telefon, internet adresi ve yazım hatalarını ayrı inceleyin. Renk açısından kritik bir işte yalnız ekran görüntüsüne dayanmayın; kabul edilecek renk referansını ve örnek onay biçimini üretim öncesinde kararlaştırın. Son onay dosyasının adını ve tarihini kaydederek eski tasarımın kullanılmasını önleyin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Minimum adet ile liste fiyatının kapsamını ayırın</h2>
              <p className="mt-4">Minimum sipariş miktarı, üretimin kabul edildiği alt sınırdır. Liste fiyatının hesaplandığı adet bununla aynı olmayabilir. Ürün kartında belirli bir adet için baskı dahil fiyat yazıyorsa farklı miktarı aynı birim tutarla çarparak kesin toplam çıkarmayın.</p>
              <p className="mt-4">Teklifte model kodu, adet, baskı yöntemi ve tasarımı birlikte belirtin. Baskının, hazırlığın ve ambalajın dahil olup olmadığını kontrol edin. KDV ve kargo kapsamı da aynı olmalı. Baskı zaten ürün fiyatına dahilse ikinci kez eklemeyin; ek uygulama veya paketleme varsa ayrıca netleştirin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Dağıtım ve teslim planını tasarımla birlikte tamamlayın</h2>
              <p className="mt-4">Tek bir ofise toplu teslim ile farklı adreslere tekli paket gönderimi aynı hazırlığı gerektirmez. Dağıtım sayısını, paket ölçüsünü ve ürünlerin nasıl korunacağını sipariş onayından önce belirleyin. Bilek destekli form veya özel ambalaj varsa kutuya yerleşimi numuneyle kontrol edin.</p>
              <p className="mt-4">İhtiyaç tarihi, tasarım onayı ve teslim adresini birlikte paylaşın. Stok, üretim ve uygulama planı netleşmeden sabit bir teslim günü varsaymayın. Diğer masa aksesuarlarıyla bir paket oluşturulacaksa <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-blue-700 underline">masaüstü promosyon ürünlerini</Link>{" "} de ölçü ve kullanım amacı bakımından değerlendirebilirsiniz.</p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">Sipariş onayı öncesi kontrol listesi</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Masa alanı, dış ölçü ve mouse hareketi birlikte kontrol edildi mi?</li>
                <li>Destek formu, yüzey ve taban özellikleri seçilen modelde teyit edildi mi?</li>
                <li>Üretim şablonu ile baskı dosyasının ölçüsü ve yerleşimi eşleşiyor mu?</li>
                <li>Logo, yazılar, iletişim bilgileri ve varsa QR kod son ölçüde kontrol edildi mi?</li>
                <li>Fiyatın geçerli olduğu adet, baskı kapsamı, paketleme ve teslim planı açık mı?</li>
              </ul>
              <p className="mt-4">Kontrol listenizle <Link href="/promosyon-mouse-pad" className="font-semibold text-blue-700 underline">mouse pad modellerini</Link>{" "} karşılaştırabilir; diğer seçenekler için <Link href="/promosyon-imalat-urunler" className="font-semibold text-blue-700 underline">imalat ürünlerini</Link>{" "} inceleyebilirsiniz.</p>
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
              <h2 className="text-2xl font-bold">Model ve tasarım bilgileriyle teklif alın</h2>
              <p className="mt-3 text-gray-200">Model kodu, adet, logo ve tasarım dosyanızı paylaşın; baskı kapsamını, paketlemeyi ve teslim planını birlikte netleştirelim.</p>
              <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold !text-black">Kurumsal Teklif Al</Link>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
}
