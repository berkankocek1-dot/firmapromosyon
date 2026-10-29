import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { sortProductsByCode } from "@/data/productSorting";


const SITE_URL = "https://www.firmapromosyon.com";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const CATEGORY = "Promosyon Şapka";
const PAGE_URL = `${SITE_URL}/promosyon-sapka`;
const PAGE_TITLE = "Promosyon Şapka Modelleri ve Fiyatları | Baskılı ve Nakışlı";
const PAGE_DESCRIPTION =
  "Logo baskılı ve nakışlı promosyon şapka modellerini karşılaştırın. Kumaş, fileli ve sandviç siper seçenekleriyle toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon şapka minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi seçilen modele, stok rengine ve baskı ya da nakış uygulamasına göre değişir. Ürün kodunu, renk dağılımını ve istediğiniz toplam adedi paylaşarak sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Şapka fiyatlarına baskı veya nakış dahil mi?",
    "answer": "Ürün kartlarında fiyat verilen modellerde ürün bedeli baskı hariçtir; KDV bilgisi ayrıca gösterilir. Baskı veya nakış bedeli, uygulama alanı, adet ve varsa hazırlık maliyetleri teklif aşamasında ayrıca netleştirilir. Toplam tutarı aynı kapsam üzerinden karşılaştırın."
  },
  {
    "question": "Polyester ve pamuklu şapka arasında nasıl seçim yapılır?",
    "answer": "Ürün adından önce gerçek kumaş içeriğini kontrol edin; polyester olarak adlandırılan bir model pamuk karışımlı olabilir. Kumaş oranı, dokusu, panel yapısı ve kapanış biçimini birlikte değerlendirin. Uzun süreli ekip kullanımı ile etkinlik dağıtımı için farklı modeller uygun olabilir."
  },
  {
    "question": "Şapkaya DTF baskı mı nakış mı uygulanmalı?",
    "answer": "DTF transfer, uygun kumaş ve uygulama alanında renkli logo için değerlendirilebilir. Nakış ise iplikle işlenmiş bir görünüm sağlar; küçük yazılar, ince çizgiler ve renk geçişleri aynı şekilde aktarılmayabilir. Her model her iki tekniğe uygun değildir; logo ve ürün birlikte incelenmelidir."
  },
  {
    "question": "Şapkanın yanına veya arkasına logo uygulanabilir mi?",
    "answer": "Ön, yan ve arka alanların uygunluğu modelin panel, dikiş ve kapanış yapısına bağlıdır. Birden fazla konumda uygulama istiyorsanız her alanın ölçüsünü ve kullanılacak tasarımı belirtin. Uygunluk ve maliyet ayrı değerlendirilir."
  },
  {
    "question": "Fileli şapkada baskı nereye yapılır?",
    "answer": "Fileli modellerde düz ön bölüm logo uygulaması için değerlendirilebilir. Fileli arka bölümün aynı baskıya uygun olduğu varsayılmamalıdır. Seçilen ürünün ön yüz malzemesi, dikişleri ve uygulanabilir logo alanı kontrol edilmelidir."
  },
  {
    "question": "Toplu şapka siparişinde teslim süresi nasıl belirlenir?",
    "answer": "Stok, renk dağılımı, adet, baskı veya nakış yöntemi, tasarım onayı ve sevkiyat adresi birlikte değerlendirilir. Etkinlik tarihinizi önceden paylaşın; logo yerleşimi, toplam bedel ve net teslim süresini sipariş öncesinde teyit edin."
  }
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "FirmaPromosyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Promosyon Şapka Modelleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function Page() {
  const list = sortProductsByCode(products.filter((p) => p.category === CATEGORY));

  const itemListElement = list.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `${SITE_URL}/urunler/${p.slug}`,
    name: p.title,
  }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Ürünler",
              item: `${SITE_URL}/urunler`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Promosyon Şapka",
              item: PAGE_URL,
            },
          ],
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Promosyon Şapka",
          url: PAGE_URL,
          description: PAGE_DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement,
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
        <nav className="mb-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white hover:underline">
            Ana Sayfa
          </Link>
          <span className="px-2">/</span>
          <Link href="/urunler" className="hover:text-white hover:underline">
            Ürünler
          </Link>
          <span className="px-2">/</span>
          <span className="font-semibold text-white">Promosyon Şapka</span>
        </nav>

        <header>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Promosyon Şapka
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">
            Kumaş, panel, siper ve kapanış özelliklerine göre şapka modellerini
            karşılaştırın. Personel kullanımı veya etkinlik dağıtımı için
            logonuza uygun baskı ve nakış seçenekleriyle toplu sipariş teklifi alın.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/kurumsal-teklif-al"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Kurumsal Teklif Al
            </Link>

            <Link
              href="/urunler"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </header>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/urunler/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
                loading="lazy"
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {p.category}
              </div>

              <h2 className="mt-1 text-lg font-bold text-gray-900">
                {p.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">
                {p.shortDesc}
              </p>
              {p.price && (
                <div className="mt-3">
                  <div className="text-base font-bold text-gray-900">
                    {p.price.toLocaleString("tr-TR")} TL + KDV
                  </div>

                  <div className="mt-1 text-xs font-medium text-green-600">
                    Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.
                  </div>
                </div>
              )}
              <div className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                Ürünü İncele
              </div>
            </div>
          </Link>
        ))}
      </section>

      {list.length === 0 && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-gray-700">Bu kategoride henüz ürün yok.</p>
        </div>
      )}

      {list.length > 0 && (
        <div className="mt-14 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
          <section className="max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Kullanım Amacına Göre Promosyon Şapka Seçimi</h2>
            <p>
              Etkinlik dağıtımında sipariş adedi ve bütçe; personel kullanımında
              ise kumaş, oturuş ve ayar mekanizması ön plana çıkabilir. Modeli
              seçerken kimin, hangi ortamda ve ne sıklıkla kullanacağını belirleyin.
              Renk tercihinin yanında logonun kumaş üzerinde nasıl görüneceğini de değerlendirin.
            </p>
            <p>
              Ürün adı tek başına kumaş içeriğini anlatmayabilir. Polyester olarak
              adlandırılan modeller pamuk karışımlı olabilir; pamuklu ve fileli
              modellerin farklı bölümlerinde de farklı malzemeler bulunabilir.
              Karşılaştırmayı ürün detayındaki kumaş oranı ve yapı bilgisine göre yapın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Şapka Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-white/15">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-200">
                <caption className="sr-only">Şapka model grupları, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Polyester–pamuk karışımlı", "Etkinlik ve kampanya dağıtımları", "Gerçek kumaş oranı, panel yapısı ve baskı uygunluğu"],
                    ["Pamuklu gabardin", "Personel ve kurumsal ekip kullanımı", "Kumaş bilgisi, kapanış biçimi ve logo uygulaması"],
                    ["Sandviç siperli", "Siper detayıyla kurumsal renk uyumu", "Siper şeridinin rengi ve kumaşın ayrı özellikleri"],
                    ["Fileli", "Fileli arka yapıyı tercih eden kullanıcılar", "Ön yüzün malzemesi, file yapısı ve baskı alanı"],
                  ].map(([model, usage, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-white">{model}</th>
                      <td className="px-4 py-4">{usage}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Sandviç siper bir kumaş türü değildir; siper kenarındaki tasarım
              detayını ifade eder. Kumaş, panel ve kapanış bilgilerini ayrıca karşılaştırın.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Baskılı mı Nakışlı Şapka mı?</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">DTF ve uygun transfer uygulamaları</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Renkli logolar için kumaşa ve modele uygunluğu değerlendirilir.
                  Ön panelin şekli ve dikişler uygulama alanını etkiler. Kumaş
                  rengi üzerindeki görünümü ve baskı ölçüsünü önceden netleştirin.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">Nakış uygulaması</h3>
                <p className="mt-2 text-sm leading-6 text-gray-200">
                  Uygun modellerde iplikle işlenmiş bir görünüm sağlar. Küçük
                  harfler, ince çizgiler ve renk geçişleri için tasarımın
                  sadeleştirilmesi gerekebilir. Desen hazırlığı ve uygulama
                  bedelini teklif kapsamına dahil ettirin.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-4xl leading-7 text-gray-200">
              Her şapkaya her yöntem uygulanamaz. Ön, yan veya arka logo talebini
              ayrı belirtin; fileli alanlar ve kapanış bölümü düz ön panelle aynı
              koşullara sahip değildir. Uygulanabilir alanı seçilen model ve logo
              birlikte incelendikten sonra belirleyin.
            </p>
          </section>

          <section className="mt-12 max-w-4xl space-y-5 text-gray-200">
            <h2 className="text-2xl font-bold text-white">Promosyon Şapka Fiyatlarını Karşılaştırırken</h2>
            <p>
              Ürün kartında fiyat verilen modellerde tutar baskı hariçtir; KDV
              ayrıca gösterilir. Baskılı veya nakışlı siparişin toplamını
              karşılaştırırken ürün birim fiyatıyla birlikte uygulama ve teslimat
              kapsamını da değerlendirin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Kumaş, panel, siper ve kapanış özellikleri.</li>
              <li>Ürün rengi, toplam adet ve renklere göre miktar dağılımı.</li>
              <li>Baskı veya nakış yöntemi, logo ölçüsü ve uygulama konumu.</li>
              <li>Varsa desen hazırlığı, özel paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Aynı adette farklı model veya yöntemleri karşılaştırabilirsiniz;
              ancak tekliflerin kapsamının aynı olduğundan emin olun. İstenen
              renk stokta yoksa alternatif renk ve termin bilgisini sipariş öncesinde sorun.
            </p>
          </section>

          <section className="mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">Toplu Şapka Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-200">
              <li>Ürün kodunu, renkleri ve her renkten istediğiniz adedi belirtin.</li>
              <li>Logoyu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.</li>
              <li>Baskı ya da nakış isteğinizi ve uygulanacak konumları bildirin.</li>
              <li>Etkinlik tarihini, teslimat adresini ve paketleme talebini ekleyin.</li>
              <li>Logo yerleşimi, stok, toplam bedel ve teslim süresini teyit edin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-200">
              Kumaş ve model seçimi için{" "}
              <Link href="/rehber/promosyon-sapka-rehberi" className="font-semibold text-white underline underline-offset-4">promosyon şapka rehberini</Link>{" "}
              inceleyebilirsiniz. Etkinlik veya ekip paketini{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-white underline underline-offset-4">kalem</Link>,{" "}
              <Link href="/promosyon-anahtarlik" className="font-semibold text-white underline underline-offset-4">anahtarlık</Link>,{" "}
              <Link href="/promosyon-termos" className="font-semibold text-white underline underline-offset-4">termos</Link>{" "}
              ve{" "}
              <Link href="/promosyon-usb-bellek" className="font-semibold text-white underline underline-offset-4">USB bellek</Link>{" "}
              gibi tamamlayıcı ürünlerle birlikte planlayabilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Şapka Siparişi İçin Teklif Al
            </Link>
          </section>

          <section className="mt-14 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              Promosyon Şapka Hakkında Sık Sorulan Sorular
            </h2>

            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}