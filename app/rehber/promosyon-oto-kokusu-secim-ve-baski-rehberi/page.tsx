import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/rehber/promosyon-oto-kokusu-secim-ve-baski-rehberi";
const IMAGE_PATH = "/guides/promosyon-oto-kokusu-secim-ve-baski-rehberi.jpg";
const TITLE = "Promosyon Oto Kokusu: Özel Kesim, Koku ve Baskı Rehberi";
const DESCRIPTION = "Promosyon oto kokusunda özel kesim, koku seçimi ve logo tasarımını birlikte planlayın. Baskı dosyası, numune, ambalaj ve sipariş onayı adımlarını öğrenin.";
const FAQ_ITEMS = [
  {
    "question": "Özel kesim oto kokusu için hangi dosya gerekir?",
    "answer": "Logo mümkünse vektörel dosyayla paylaşılmalı; kesim çizgisi, baskı yerleşimi, varsa askı deliği ve üretim payları üretici şablonuna göre hazırlanmalıdır."
  },
  {
    "question": "Ürünün toplam ebatı baskı alanı mıdır?",
    "answer": "Hayır. Toplam ebat ifadesi doğrudan en-boy ölçüsü veya kullanılabilir baskı alanı olarak kabul edilmemelidir. Kesim şablonu ve uygulama alanı ayrıca teyit edilmelidir."
  },
  {
    "question": "Promosyon oto kokusunda hangi koku seçilmeli?",
    "answer": "Güncel fresh, meyveli veya parfüm seçenekleri arasından dağıtım kitlesine ve tasarıma uygun alternatifler değerlendirilebilir. Kesin tercih mümkünse numuneyle yapılmalıdır."
  },
  {
    "question": "Beyaz zeminli tasarımda koku tercihi önemli mi?",
    "answer": "Tedarikçinin beyaz zeminli işler için önerileri tasarımla birlikte değerlendirilmelidir. Seçilen koku, zemin ve baskı uygulamasının birlikte uygunluğu sipariş öncesinde teyit edilmelidir."
  },
  {
    "question": "Oto kokusu kaç gün kalıcıdır?",
    "answer": "Mevcut ürün kaynağında kesin bir gün sayısı belirtilmemiştir. Numune veya güncel ürün bilgisiyle doğrulanmayan bir kalıcılık süresi sipariş şartı olarak varsayılmamalıdır."
  },
  {
    "question": "Ofset baskı dahil teklif bütün ek işlemleri kapsar mı?",
    "answer": "Baskının dahil olması; her özel kesim, ek tasarım, ambalaj veya teslimat talebinin de dahil olduğu anlamına gelmez. Model, adet, kesim ve uygulama kapsamı nihai teklifte ayrı netleştirilmelidir."
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
      alt: "Farklı kesim biçimlerinde temsili askılı oto kokuları ve ambalaj örneği" }],
  },
  twitter: {
    card: "summary_large_image", title: TITLE, description: DESCRIPTION,
    images: [SITE_URL + IMAGE_PATH],
  },
};

export default function CarScentGuidePage() {
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
      { "@type": "ListItem", position: 3, name: "Oto Kokusu Seçim ve Baskı Rehberi", item: PAGE_URL },
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
          <span>Oto Kokusu Seçimi</span>
        </nav>
        <article>
          <header>
            <p className="text-sm font-semibold text-gray-600">FirmaPromosyon Rehber</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">{TITLE}</h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Promosyon oto kokusu siparişinde kesim biçimi, logo yerleşimi ve koku
              tercihi aynı üretim kararının parçalarıdır. Logoyu farklı bir şekle
              uygulamak ya da beyaz zeminli tasarım seçmek, onay sürecinde ayrıca
              değerlendirilmesi gereken ayrıntılar oluşturur.
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Bu rehber, oto servisleri, araç kiralama firmaları, oto yıkamalar ve
              kampanya ekipleri için tasarımın siparişe dönüşme adımlarını ele alır.
              Güncel ürün ve fiyat kapsamı için{" "}
              <Link href="/promosyon-oto-kokusu" className="font-semibold text-blue-700 underline">promosyon oto kokusu kategorisini</Link>{" "}
              inceleyebilirsiniz.
            </p>
            <figure className="mt-7">
              <Image src={IMAGE_PATH} width={1200} height={630} priority
                sizes="(max-width: 768px) 100vw, 856px"
                alt="Farklı kesim biçimlerinde temsili askılı oto kokuları ve ambalaj örneği"
                className="h-auto w-full rounded-2xl border border-gray-200" />
              <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                Rehber için hazırlanmış temsili görsel. Kesim, renk, askı ve
                ambalaj biçimi seçilen modele göre değişir.
              </figcaption>
            </figure>
          </header>
          <div className="mt-10 space-y-10 text-base leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Dağıtım amacını ve tasarım mesajını belirleyin</h2>
              <p className="mt-4">Servis tesliminde müşteriye verilecek bir ürün ile fuarda dağıtılacak kampanya hediyesinin mesajı farklı olabilir. Önce kime, nerede ve hangi adetlerde dağıtım yapılacağını belirleyin. Firma adını hatırlatmak, servis iletişimini paylaşmak veya bir kampanyayı duyurmak gibi tek bir öncelik seçin.</p>
              <p className="mt-4">Küçük bir üründe logo, uzun slogan, telefon, adres ve yoğun görsel kullanımı okunaklılığı azaltabilir. Önemli bilgiyi öne alın; kampanya ayrıntılarını farklı bir tanıtım materyaline ayırmak gerekebilir. Belirli bir satış sonucu veya herkes için aynı koku beğenisi varsaymadan alıcının kullanabileceği sade bir tasarım hedefleyin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Özel kesim tasarımını üretim şablonuna oturtun</h2>
              <p className="mt-4">Özel kesimde ilk adım logonun dış hatlarını doğrudan kesim çizgisine dönüştürmek değildir. Logonun okunaklı kalacağı formu, askı konumunu ve üretime uygun konturu birlikte değerlendirin. İnce çıkıntılar veya dar bağlantılar içeren bir şeklin uygulanabilirliğini tasarım onayından önce sorun.</p>
              <p className="mt-4">Ürün açıklamasındaki toplam ebat ifadesi tek başına en-boy çizimi değildir. Dış ölçü, kullanılabilir baskı alanı, kesim çizgisi ve kenar paylarını üretim şablonunda ayrı görün. Askı deliğinin yeri, önemli bir harfi veya logo detayını kapatmayacak şekilde planlanmalıdır.</p>
              <p className="mt-4">Kesime uygun son tasarımı üreticiden onaylatın. Yeni kalıp veya farklı şekil için ek hazırlık bedeli olup olmadığını netleştirin; özel kesim seçeneğinin bütün şekilleri aynı maliyet ve teslim koşuluyla kapsadığını varsaymayın.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Fresh, meyveli ve parfüm gruplarında nasıl seçim yapılır?</h2>
              <p className="mt-4">Koku adları ilk eleme için kullanılabilir; fakat adını okuyarak kesin tercih yapmak zordur. Dağıtım kitlenizi düşünerek güncel seçeneklerden birkaç alternatif belirleyin. Fresh, meyveli ve parfüm grupları arasındaki kararı mümkünse numuneleri karşılaştırarak verin.</p>
              <p className="mt-4">Birden fazla koku istenecekse her kokunun adetini ayrı yazın. Minimum miktarın toplam sipariş için mi, her koku veya tasarım için mi geçerli olduğunu sorun. Seçeneklerin stok ve üretim uygunluğunu onay almadan dağıtım planına kesinleştirmeyin.</p>
              <p className="mt-4">Mevcut ürün bilgisinde doğrulanmış bir kalıcılık süresi bulunmadığından belirli bir gün sayısı vaat etmeyin. Numune değerlendirmesinde koku tercihini, ürünün görünümünü ve teslim ambalajını ayrı kontrol edin. Bir kişinin beğenisini bütün alıcıların tercihi olarak kabul etmeyin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Koku ile tasarım zeminini birlikte onaylayın</h2>
              <p className="mt-4">Beyaz veya açık zeminli bir tasarım planlıyorsanız koku tercihinizi son aşamaya bırakmayın. Tedarikçinin beyaz zeminli işler için önerdiği seçenekleri tasarımla birlikte değerlendirin. Seçilen koku ve uygulamanın görsel sonuçla birlikte uygunluğunu sipariş öncesinde teyit edin.</p>
              <p className="mt-4">Bir koku adının kategoride listelenmesi, her tasarımda aynı sonucun alınacağını göstermez. Kritik bir beyaz alan, açık renk logo veya belirli bir renk tonu varsa bunu onay talebinde özellikle belirtin. Kararı yalnızca ekrandaki çizimden vermek yerine gerekiyorsa numune koşulunu ayrıca belirleyin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Ofset baskı için dosyayı gerçek ölçüde kontrol edin</h2>
              <p className="mt-4">Logoyu mümkünse vektörel dosyayla paylaşın. Fotoğraf kullanılacaksa gerekli çözünürlüğü son baskı boyutuna göre kontrol edin. Dosya biçimini, renk düzenini ve kesim payını üretici şablonuna göre hazırlayın; her ürün için aynı pay veya çözünürlük sayısını kullanmayın.</p>
              <p className="mt-4">Ön ve arka yüz için farklı tasarım isteniyorsa bunu teklif talebine açıkça yazın. Kullanılabilir yüzleri, yönleri ve baskı kapsamını teyit etmeden çift yön uygulamayı dahil kabul etmeyin. Telefon, internet adresi ve varsa QR kodu son ölçüde inceleyin; QR kodun baskı örneğinde okunmasını da kontrol edin.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Dijital onay ve numune kontrolünü ayrı ele alın</h2>
              <p className="mt-4">Dijital önizleme, metinleri ve yerleşimi kontrol etmeye yardımcı olur; kokuyu veya fiziksel kesimin hissini göstermez. Numune isteniyorsa hangi özellikleri temsil edeceğini sorun. Baskısız bir şekil örneği ile seçilen koku ve baskıyı birlikte taşıyan üretim örneği aynı kontrolü sağlamaz.</p>
              <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[500px] text-left text-sm leading-6">
                  <caption className="p-4 text-left font-semibold text-gray-900">Sipariş onayında ayrı değerlendirilecek başlıklar</caption>
                  <thead className="bg-gray-50 text-gray-900"><tr><th scope="col" className="p-3">Başlık</th><th scope="col" className="p-3">Kontrol sorusu</th></tr></thead>
                  <tbody>{[
                    ["Kesim", "Dış hatlar, ölçü ve askı konumu onaylı şablonla eşleşiyor mu?"],
                    ["Baskı", "Logo, yazılar, yüz yönü ve kenar payları doğru mu?"],
                    ["Koku", "Seçilen koku ve varsa koku başına adet net mi?"],
                    ["Zemin", "Koku tercihi ile açık veya beyaz tasarım birlikte değerlendirildi mi?"],
                    ["Ambalaj", "Paketleme biçimi ve teslim edilecek parçalar açık mı?"],
                  ].map(([name, detail]) => (
                    <tr key={name} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{name}</th><td className="p-3">{detail}</td></tr>
                  ))}</tbody>
                </table>
              </div>
              <p className="mt-4">Son logo, kesim ve koku seçimini tek bir sipariş kaydında birleştirin. Onay dosyasının adını ve tarihini saklayın. Revizyon yapıldıysa hangi tasarımın üretime gireceği açık olmalıdır; yalnızca önceki bir mesajdaki dosyaya referans vermek karışıklık yaratabilir.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Baskı dahil fiyatın kapsamını karşılaştırın</h2>
              <p className="mt-4">Ürün bilgisinde ofset baskının liste fiyatına dahil olduğu belirtiliyorsa aynı baskı bedelini ikinci kez eklemeyin. Buna karşılık farklı kesim, ek tasarım, özel paketleme veya birden fazla teslim adresi gibi taleplerin de otomatik olarak dahil olduğunu düşünmeyin.</p>
              <p className="mt-4">Teklifleri aynı model, adet, koku, kesim ve baskı koşullarıyla karşılaştırın. Minimum sipariş miktarını ve varsa koku ya da tasarım başına alt sınırı ayrıca netleştirin. KDV, hazırlık, ambalaj ve kargo kapsamını birlikte görün; baskısız bir fiyatı baskı dahil fiyatla doğrudan kıyaslamayın.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Ambalaj ve teslim planını dağıtıma göre tamamlayın</h2>
              <p className="mt-4">Oto yıkamada tek tek verilecek ürün ile bir kurumsal hediye paketine eklenecek ürün farklı hazırlık gerektirebilir. Tekli paketleme, koli adedi, askı biçimi ve varsa ek etiket taleplerini önceden belirtin. Kullanım ve saklama bilgilerini üretici talimatıyla birlikte isteyin.</p>
              <p className="mt-4">İhtiyaç tarihinizi ve teslim adresini logo dosyasıyla birlikte paylaşın. Net termin tasarım onayı, tedarik ve üretim planı üzerinden belirlenmelidir. Baskıdan çıkış tarihiyle elinize ulaşması gereken tarihi birbirinden ayırın; kargo süresini plana dahil edin.</p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">Sipariş öncesi kısa kontrol listesi</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Dağıtım kitlesi, ana mesaj ve gerçek ihtiyaç adedi belirlendi mi?</li>
                <li>Kesim çizgisi, toplam ebat ve baskı alanı ayrı onaylandı mı?</li>
                <li>Koku seçimi, tasarım zemini ve varsa koku başına adet teyit edildi mi?</li>
                <li>Logo, yazılar ve varsa iki yüzün yönleri son ölçüde kontrol edildi mi?</li>
                <li>Baskı dahil teklif kapsamı, ambalaj ve teslim planı açık mı?</li>
              </ul>
              <p className="mt-4">Bu listeyle <Link href="/promosyon-oto-kokusu" className="font-semibold text-blue-700 underline">oto kokusu seçeneğini</Link>{" "} değerlendirebilirsiniz. Dağıtım paketini tamamlamak için <Link href="/promosyon-anahtarlik" className="font-semibold text-blue-700 underline">logo baskılı anahtarlıkları</Link>{" "}, diğer seçenekler için <Link href="/promosyon-imalat-urunler" className="font-semibold text-blue-700 underline">imalat ürünlerini</Link>{" "} inceleyebilirsiniz.</p>
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
              <h2 className="text-2xl font-bold">Kesim, koku ve tasarım bilgileriyle teklif alın</h2>
              <p className="mt-3 text-gray-200">Model kodu, adet, logo dosyası, kesim ve koku tercihinizi paylaşın; baskı kapsamını, ambalajı ve teslim planını birlikte netleştirelim.</p>
              <Link href="/kurumsal-teklif-al" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold !text-black">Kurumsal Teklif Al</Link>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
}
