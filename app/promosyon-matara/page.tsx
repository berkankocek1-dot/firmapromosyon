import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import MataraProductGrid from "./MataraProductGrid";

const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-matara`;
const PAGE_TITLE = "Promosyon Matara Modelleri ve Fiyatları | Logo Baskılı";
const description = "Logo baskılı cam ve plastik promosyon matara modellerini karşılaştırın. Kapasite, kapak ve baskı seçenekleriyle toptan sipariş için teklif alın.";

const faqItems = [
  {
    "question": "Promosyon matara minimum kaç adet sipariş edilir?",
    "answer": "Minimum sipariş adedi modele, stok rengine ve logo uygulamasına göre değişir. Ürün kodunu, kapasiteyi, renk dağılımını ve istediğiniz toplam adedi paylaşarak sipariş koşullarını öğrenebilirsiniz."
  },
  {
    "question": "Cam ve plastik matara arasında nasıl seçim yapılır?",
    "answer": "Kullanım ortamını, taşınacak ürünün ölçüsünü, ağırlığını, kapak ve içim biçimini birlikte değerlendirin. Cam modellerde varsa kılıfı; plastik modellerde malzeme türünü ve kullanım talimatını kontrol edin. Aynı kapasitedeki modellerin ölçüsü ve kullanım özellikleri farklı olabilir."
  },
  {
    "question": "Matara ile termos aynı ürün müdür?",
    "answer": "Hayır. Bu kategorideki cam ve plastik mataraların ısı yalıtımlı olduğu varsayılmamalıdır. Sıcak veya soğuk tutma ihtiyacınız varsa termos kategorisindeki modelleri ve ilgili ürünün teknik özelliklerini inceleyin."
  },
  {
    "question": "Logo mataraya mı kılıfa mı uygulanır?",
    "answer": "Uygulama konumu ve yöntemi seçilen modelin gövdesine, yüzeyine ve varsa kılıfına göre belirlenir. Cam yüzey, plastik gövde ve kumaş kılıf aynı baskı yöntemine uygun olmayabilir. Logo yerleşimini, ölçüsünü ve renklerini teklif öncesinde belirtin."
  },
  {
    "question": "Matara fiyatlarına baskı ve KDV dahil mi?",
    "answer": "Ürün kartında fiyat gösterilen modellerde ürün bedeli baskı ve KDV hariçtir. Logo uygulaması, adet, varsa kutu veya paketleme ve sevkiyat kapsamı teklif aşamasında netleştirilir. Fiyatı bulunmayan modeller için güncel teklif isteyebilirsiniz."
  },
  {
    "question": "Her matara sıcak içeceğe veya bulaşık makinesine uygun mudur?",
    "answer": "Tüm modellere aynı kullanım koşulları uygulanmamalıdır. İçecek sıcaklığı, temizlik yöntemi, kapak ve kılıf bakımı için seçilen ürünün talimatlarını esas alın. Ürün açıklamasında belirtilmeyen bir kullanım uygunluğunu sipariş öncesinde ayrıca teyit edin."
  },
  {
    "question": "Toplu matara siparişinde teslim süresi nasıl belirlenir?",
    "answer": "Stok, renk dağılımı, adet, logo uygulaması, tasarım onayı ve paketleme talepleri birlikte değerlendirilir. Teslimat adresinizi ve etkinlik tarihinizi paylaşın; net termin ve toplam bedeli sipariş öncesinde teyit edin."
  }
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { title: PAGE_TITLE, description, url: PAGE_URL, siteName: "FirmaPromosyon", locale: "tr_TR", type: "website", images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: "Cam ve Plastik Promosyon Matara Modelleri" }] },
  twitter: { card: "summary_large_image", title: PAGE_TITLE, description, images: [`${SITE_URL}/og.jpg`] },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function MataraPage() {
  const list = sortProductsByCode(visibleProducts.filter(p => p.category === "Matara"));
  return (
    <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Ürünler", item: `${SITE_URL}/urunler` },
          { "@type": "ListItem", position: 3, name: "Promosyon Matara", item: PAGE_URL },
        ] }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Promosyon Matara", url: PAGE_URL, description, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, idx) => ({ "@type": "ListItem", position: idx + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />

        <section className="rounded-2xl border border-gray-200 bg-white px-6 py-6 md:px-8 md:py-6 border border-gray-200">
          <nav aria-label="Sayfa yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:underline">Ana Sayfa</Link><span aria-hidden="true">/</span>
            <Link href="/urunler" className="hover:underline">Ürünler</Link><span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-black">Promosyon Matara</span>
          </nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
          <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Promosyon Matara</h1>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">Cam ve plastik promosyon matara modellerini inceleyin. Ofis, spor ve etkinlik hediyeleri için kapasite ve malzemeyi karşılaştırın; logo baskılı toplu siparişiniz için teklif alın.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Kurumsal Teklif Al</Link>
            <Link href="/promosyon-termos" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold hover:bg-white">Termos Modellerini İncele</Link>
          </div>
        </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-matara-cm-100-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

        <MataraProductGrid products={list} />

        <section className="mt-14 space-y-8 rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <section className="max-w-4xl space-y-4 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kullanım Amacına Göre Cam ve Plastik Matara Seçimi</h2>
            <p>
              Çalışan hediyesi, spor etkinliği veya fuar dağıtımı için matara
              seçerken kullanım ortamını ve taşıma ihtiyacını birlikte düşünün.
              Kapasite kadar gövde ölçüsü, kulp ya da taşıma aparatı, kapak ve
              içim biçimi de günlük kullanımda belirleyicidir.
            </p>
            <p>
              Yukarıdaki filtrelerle cam ve plastik modelleri, ayrıca kapasite
              seçeneklerini ayırabilirsiniz. Seçtiğiniz ürünün malzeme türü,
              renkleri ve kullanım bilgileri ürün detayında incelenmelidir.
              Bir modelin özelliğini tüm matara kategorisine genellemeyin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black">Matara Modellerini Karşılaştırın</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm text-gray-600">
                <caption className="sr-only">Matara türleri, kullanım örnekleri ve seçimde kontrol edilecek özellikler</caption>
                <thead className="bg-white text-black">
                  <tr>
                    <th scope="col" className="px-4 py-3">Model grubu</th>
                    <th scope="col" className="px-4 py-3">Kullanım örneği</th>
                    <th scope="col" className="px-4 py-3">Seçerken kontrol edin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Cam gövdeli", "Masa, ofis ve günlük su kullanımı", "Ağırlık, ölçü, kapak ve kullanım koşulları"],
                    ["Kılıflı cam", "Kılıf ve taşıma detayını tercih edenler", "Kılıf malzemesi, çıkarılabilirlik ve logo alanı"],
                    ["Plastik / emzikli", "İçim ve taşıma biçimine göre günlük kullanım", "Malzeme türü, kapak mekanizması ve temizlik talimatı"],
                    ["Hazneli / detoks olarak adlandırılan", "Ayrı hazneli modeli tercih eden kullanıcılar", "Haznenin yapısı, kapasite ve parçaların temizliği"],
                  ].map(([model, usage, detail]) => (
                    <tr key={model}>
                      <th scope="row" className="px-4 py-4 font-semibold text-black">{model}</th>
                      <td className="px-4 py-4">{usage}</td>
                      <td className="px-4 py-4">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Kılıf veya taşıma aparatı bulunması ürünün kırılmaz ya da tam
              sızdırmaz olduğu anlamına gelmez. Bu özellikleri model bazında teyit edin.
            </p>
          </section>

          <section className="max-w-4xl space-y-4 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Kapasite, Kapak ve Taşıma İhtiyacı</h2>
            <p>
              Kapasiteyi, kullanıcının gün içinde nasıl su taşıyacağını düşünerek
              seçin. Büyük kapasite daha fazla su taşımaya imkân verirken dolu
              ürünün ağırlığı ve çantada kaplayacağı alan da değerlendirilmelidir.
              Aynı hacimdeki iki modelin yükseklik ve çapı farklı olabilir.
            </p>
            <p>
              Vida kapak, emzik veya farklı içim mekanizmalarını kullanım
              alışkanlığına göre karşılaştırın. Çantada taşınacaksa sızdırmazlık
              bilgisini ayrıca teyit edin; kapakta kilit veya taşıma halkası
              bulunması tek başına yeterli bilgi değildir.
            </p>
            <p>
              Matara kapasitesi ısı yalıtımını göstermez. Sıcak veya soğuk tutma
              özelliği arıyorsanız{" "}
              <Link href="/promosyon-termos" className="font-semibold text-black underline underline-offset-4">promosyon termos modellerini</Link>{" "}
              inceleyin. İçecek sıcaklığı ve temizlik için seçilen ürünün
              talimatlarını esas alın.
            </p>
          </section>

          <section className="max-w-4xl space-y-4 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Logo Gövdeye mi Kılıfa mı Uygulanmalı?</h2>
            <p>
              Gövdeye ve kılıfa logo uygulaması farklı işlemlerdir. Cam veya
              plastik yüzeyin biçimi, kaplaması ve kullanılabilir alanı;
              kılıfın ise kumaş yapısı, dikişleri ve tasarımı yöntemi etkiler.
              Her ürünün aynı baskı uygulamasına uygun olduğunu varsaymayın.
            </p>
            <p>
              Logonuzu mümkünse vektörel PDF, AI, EPS veya SVG olarak paylaşın.
              Uygulama konumunu, tek veya çift yön isteğinizi ve ek yazıları
              belirtin. İnce çizgilerin ve küçük harflerin gerçek baskı
              ölçüsünde okunabilirliği değerlendirilmelidir.
            </p>
            <p>
              Kılıf ve gövdeye birlikte uygulama istiyorsanız iki alanı da teklif
              talebine ekleyin. Yerleşim, ölçü ve renk beklentisini üretim
              öncesinde netleştirin; baskı sonrasındaki bakım koşullarını da sorun.
            </p>
          </section>

          <section className="max-w-4xl space-y-4 leading-7 text-gray-600">
            <h2 className="text-2xl font-bold text-black">Promosyon Matara Fiyatları Nasıl Karşılaştırılır?</h2>
            <p>
              Fiyat gösterilen ürün kartlarında bedel baskı ve KDV hariçtir.
              Baskılı siparişin toplamını karşılaştırırken aynı ürün kodu,
              kapasite, adet ve uygulama kapsamını esas alın. Fiyatı bulunmayan
              modeller için güncel teklif isteyin.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Gövde malzemesi, kapasite, kapak ve varsa kılıf.</li>
              <li>Sipariş adedi, renk dağılımı ve stok durumu.</li>
              <li>Logo yöntemi, uygulama alanı ve baskı yönü.</li>
              <li>Varsa kutu, ayrı paketleme, sevkiyat ve KDV.</li>
            </ul>
            <p>
              Özellikle cam ürünlerde paketleme ve teslimat biçimini teklif
              kapsamına dahil ettirin. Farklı adreslere gönderim veya ayrı
              hediye paketi gerekiyorsa önceden bildirin.
            </p>
          </section>

          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-black">Toptan Matara Siparişi İçin Gerekli Bilgiler</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-gray-600">
              <li>Ürün kodunu, kapasiteyi, rengi ve istediğiniz adedi belirtin.</li>
              <li>Logonuzu ve gövde ya da kılıf üzerinde istediğiniz alanı paylaşın.</li>
              <li>Kutu, paketleme ve teslimat adresi taleplerini ekleyin.</li>
              <li>Etkinlik tarihinizi bildirin; renk ve stok uygunluğunu teyit edin.</li>
              <li>Logo yerleşimi, baskı bedeli, KDV, toplam tutar ve termini netleştirin.</li>
            </ol>
            <p className="mt-5 leading-7 text-gray-600">
              Etkinlik veya ekip paketini{" "}
              <Link href="/promosyon-sapka" className="font-semibold text-black underline underline-offset-4">şapka</Link>{" "}
              ve{" "}
              <Link href="/promosyon-kalem" className="font-semibold text-black underline underline-offset-4">kalem</Link>{" "}
              gibi tamamlayıcı ürünlerle birlikte planlayabilirsiniz. Genel model
              seçimi için{" "}
              <Link href="/rehber/promosyon-urunleri-secim-rehberi" className="font-semibold text-black underline underline-offset-4">promosyon ürünleri seçim rehberini</Link>{" "}
              de inceleyebilirsiniz.
            </p>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              Matara Siparişi İçin Teklif Al
            </Link>
          </section>

          <div>
            <h2 className="text-2xl font-bold">Promosyon Matara Hakkında Sık Sorulan Sorular</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqItems.map(item => <div key={item.question} className="rounded-2xl border border-gray-200 p-5"><h3 className="text-lg font-semibold">{item.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{item.answer}</p></div>)}
            </div>
          </div>
        </section>
      </div>
      <section aria-labelledby="matara-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="matara-rehberi-baslik" className="text-xl font-bold !text-black">Matara Seçimini ve Logo Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Cam ve plastik modelleri kapasite, kapak, taşıma ve bakım koşullarıyla değerlendirin; gövde ve kılıf uygulamasını ayrı planlayın.</p>
        <Link href="/rehber/promosyon-matara-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-matara-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Matara Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Cam ve plastik promosyon mataraları kapasite, kapak, taşıma ve bakım koşullarıyla değerlendirin. Gövde ile kılıf baskısını ayrı planlayıp sipariş kapsamını netleştirin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
