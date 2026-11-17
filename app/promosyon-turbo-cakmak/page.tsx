import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isTurboLighter } from "@/data/lighterSubcategories";

const CATEGORY = "Çakmak";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-turbo-cakmak`;
const description = "Turbo promosyon çakmak modellerini inceleyin. CM-350, CM-360 ve mini CM-550 seçeneklerini karşılaştırıp logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
 { question: "Turbo rüzgar çakmağı her koşulda çalışır mı?", answer: "Ürünlerdeki turbo veya rüzgar tanımı, her rüzgar şiddetinde ya da her ortamda kesintisiz kullanım garantisi değildir. Kullanım koşulları ve ürün özellikleri model bazında değerlendirilmelidir." },
 { question: "Mini turbo çakmak hangi model?", answer: "CM-550, ürün bilgilerinde manyetolu mini turbo rüzgar çakmak olarak tanımlanır. CM-350 ve CM-360 ile karşılaştırırken gövde ölçüsünü ve logo uygulanabilecek alanı ayrı kontrol edin." },
 { question: "CM-360 modelinde sibop özelliği var mı?", answer: "CM-360 ürün adında manyetolu turbo siboplu rüzgar çakmak olarak belirtilir. Dolum beklentinizi teklif talebinde paylaşarak güncel ürünün dolum ve kullanım bilgilerini teyit edin." },
 { question: "Turbo çakmaklara logo nasıl uygulanır?", answer: "Baskı yöntemi ürün yüzeyine, logo tasarımına ve uygulanabilir alana göre belirlenir. Tek veya çift yön baskı talebinizi, renk sayısını ve logo dosyanızı paylaşın. Her baskı yönteminin tüm modellere uygun olduğu varsayılmamalıdır." },
 { question: "Turbo promosyon çakmak fiyatları baskılı mı?", answer: "Ürün kartlarındaki tutarlar TL + KDV olarak, baskı hariç gösterilir. Baskılı toplam teklif için model kodu, adet, gövde rengi ve tasarım bilgileri gerekir. Güncel tedarik durumu ve teslim süresi teklif sırasında teyit edilir." },
];
export const metadata: Metadata = {
 title: "Turbo Promosyon Çakmak Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-manyetolu-turbo-ruzgar-cakmak-cm-350-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Turbo Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isTurboLighter(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
    { "@type": "ListItem", position: 3, name: "Turbo Çakmak", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Turbo Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Turbo Çakmak</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Turbo Promosyon Çakmak Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">CM-350, CM-360 ve mini boy CM-550 turbo rüzgar çakmaklarını inceleyin. Gövde boyutunu, sibop bilgisini ve logo uygulama alanını birlikte değerlendirerek model kodu ve adetle baskılı sipariş için teklif isteyin.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Çakmak Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-manyetolu-turbo-ruzgar-cakmak-cm-350-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-turbo-cakmak-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Turbo Rüzgar Çakmaklarında Üç Modeli Karşılaştırın</h2>
        <p>Bu grupta ürün bilgilerinde turbo veya rüzgar özelliği belirtilen çakmaklar yer alır. Modeller aynı ateşleme grubunda bulunsa da boyut, dolum bilgisi ve gövde tasarımı bakımından ayrı değerlendirilmelidir. Seçiminizi yalnız görsele göre yapmak yerine ürün koduyla teknik açıklamayı karşılaştırın.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Turbo çakmak modellerinin karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ürün bilgisindeki tanım</th><th scope="col" className="p-3 text-black">Sipariş öncesi kontrol</th></tr></thead><tbody>{[
         ["CM-350", "Manyetolu turbo rüzgar", "Gövde rengi, ölçü ve dolum bilgisi"],
         ["CM-360", "Manyetolu turbo siboplu rüzgar", "Sibop ve uygulanabilir baskı alanı"],
         ["CM-550", "Manyetolu mini turbo rüzgar", "Mini gövde ölçüsü ve logo yerleşimi"],
        ].map(([code, feature, check]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{feature}</td><td className="p-3">{check}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Turbo ve Rüzgar Tanımlarını Nasıl Değerlendirmelisiniz?</h3>
        <p>Turbo veya rüzgar ifadesi ürünün belirtilen alev özelliğini tanımlar. Bundan her hava koşulunda aynı performans sonucu çıkarılmamalıdır. Dağıtım amacınıza uygunluğu değerlendirmek için modelin kullanım bilgilerini ve varsa numuneyi inceleyin. Ateşleme yapısı, dolum özelliği ve dış gövde malzemesi ayrı teknik bilgilerdir.</p>
        <h3 className="text-xl font-bold text-black">CM-550 Mini Gövde ve Logo Yerleşimi</h3>
        <p>Mini boy önceliğiniz varsa CM-550 modelini inceleyebilirsiniz. Küçük gövde üzerinde firma adı, amblem ve uzun iletişim bilgisini bir araya getirmek okunurluğu azaltabilir. Önce hangi bilginin öne çıkacağını belirleyin; mümkünse sade bir logo yerleşimi hazırlatın.</p>
        <p>Ürünün dış ölçüsü ile baskı yapılabilecek alan aynı değildir. Tasarım boyutunu gövde ölçüsünden tahmin etmek yerine uygulanabilir alanı teyit edin. Renk seçenekleri ve baskı yönü için modelin güncel bilgileri esas alınmalıdır.</p>
        <h3 className="text-xl font-bold text-black">CM-350 ve CM-360 Seçiminde Dolum Bilgisi</h3>
        <p>CM-350 ürün açıklamasında doldurulabilir yapıdan söz edilir; CM-360 ise siboplu olarak adlandırılır. Siparişin kullanım beklentisine göre dolum bilgisini ürün detayından kontrol edip teyit edin. Benzer model kodları, ürünlerin bütün teknik özelliklerinin aynı olduğu anlamına gelmez.</p>
        <h3 className="text-xl font-bold text-black">Logo Baskılı Turbo Çakmak İçin Teklif Hazırlığı</h3>
        <p>Ürün fiyatı ile baskı uygulamasını ayrı değerlendirin. Kartlardaki tutarlar baskı hariç TL + KDV olarak gösterilir. Aynı modelde farklı adetler, tek veya çift yön uygulama ve tasarımın renk sayısı toplam teklifi değiştirebilir. Karşılaştırılabilir teklif için ürün kodunu ve baskı kapsamını açıkça belirtin.</p>
        <p>Logo dosyanızı mümkünse vektörel biçimde gönderin. Gövde rengiyle kontrastı, küçük yazıların okunabilirliğini ve yüzeye uygun baskı yöntemini tasarım aşamasında değerlendirin. Tampon veya UV gibi yöntemlerin uygunluğu her ürün için ayrıca kontrol edilir.</p>
        <h3 className="text-xl font-bold text-black">Renk, Tedarik ve Teslimat Planı</h3>
        <p>Toplam adet, renk dağılımı, teslimat ili ve ihtiyaç tarihini teklif talebine ekleyin. Güncel tedarik durumu ve baskı planı kontrol edilmeden kesin termin belirlenmez. Tasarım onayı ile uygulama kapsamı netleştirildikten sonra sipariş planı oluşturulur.</p>
        <p>Ateşleme seçeneklerini karşılaştırmak için <Link href="/promosyon-manyetolu-cakmak" className="font-semibold text-black underline">tüm manyetolu çakmak modellerini</Link> veya <Link href="/promosyon-tasli-cakmak" className="font-semibold text-black underline">taşlı çakmakları</Link> inceleyebilirsiniz. Bütün grupları birlikte görmek için <Link href="/promosyon-cakmak" className="font-semibold text-black underline">ana çakmak kategorisine</Link> geçebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Turbo Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-turbo-cakmak-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-turbo-cakmak-rehber-baslik" className="text-xl font-bold !text-black">Turbo Çakmak Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Alev yapısını ateşleme mekanizmasından ayrı değerlendirin; baskı, numune ve toplu sipariş onayında kullanılacak seçim ölçütlerini inceleyin.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Çakmak Alırken Dikkat Edilecek Noktaları İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon çakmak alırken nelere dikkat edilmeli? Ürün kalitesi, baskı türü, model seçimi, sipariş adedi, teslim süresi ve fiyat dengesi hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
