import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isFlintLighter } from "@/data/lighterSubcategories";

const CATEGORY = "Çakmak";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-tasli-cakmak`;
const description = "Taşlı promosyon çakmak modellerini karşılaştırın. Cricket, mini boy, siboplu ve telefon standlı seçenekleri inceleyerek logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
  { question: "Taşlı çakmak ile manyetolu çakmak aynı mı?", answer: "Hayır. Taşlı ve manyetolu ifadeleri farklı ateşleme yapılarını belirtir. Bu listede yalnız ürün bilgilerinde taşlı olduğu belirtilen modeller yer alır. Tüm çakmak seçeneklerini ana kategori sayfasında karşılaştırabilirsiniz." },
  { question: "Bütün taşlı çakmaklar doldurulabilir mi?", answer: "Taşlı olması tek başına doldurulabilir olduğunu göstermez. Dolum özelliği her ürünün açıklamasından ayrı kontrol edilmelidir. Bu grupta siboplu olarak tanımlanan modeller ve doldurulabilir MRY ÇM-160 gibi seçenekler bulunur." },
  { question: "Mini boy taşlı çakmak hangisi?", answer: "CM-400, ürün bilgilerinde mini boy olarak belirtilen taşlı siboplu modeldir. Siparişte gövde ölçüsü ile uygulanabilir logo alanını ayrı ayrı teyit edin." },
  { question: "Taşlı çakmak fiyatına baskı dahil mi?", answer: "Kartlardaki fiyatlar baskı hariç ve TL + KDV olarak gösterilir. Logo baskılı toplam tutar; seçilen model, adet, baskı yönü ve tasarım bilgileriyle hazırlanır. Fiyatı bulunmayan ürünler için teklif alınmalıdır." },
  { question: "Toplu siparişte teslim süresi ve renkler nasıl belirlenir?", answer: "Güncel renk seçenekleri ve tedarik durumu ürün koduyla kontrol edilir. Hazırlık süresi adet, baskı yöntemi ve tasarım onayına bağlıdır. Gerekli teslim tarihini teklif talebinde belirtin." },
];
export const metadata: Metadata = {
  title: "Taşlı Promosyon Çakmak Modelleri ve Fiyatları",
  description, alternates: { canonical: PAGE_URL },
  openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-tasli-cakmak-cm-100-v2-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Taşlı Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isFlintLighter(p)));
  return (
    <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
        { "@type": "ListItem", position: 3, name: "Taşlı Çakmak", item: PAGE_URL },
      ] }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Taşlı Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
      <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
        <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Taşlı Çakmak</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
        <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Taşlı Promosyon Çakmak Modelleri</h1>
        <p className="mt-3 max-w-3xl leading-7 text-gray-600">Cricket ÇM-100, MRY ÇM-160 ve siboplu taşlı modelleri gövde yapısı, boyut ve ek işlevlerine göre karşılaştırın. Mini boy CM-400 ve telefon standlı CM-500 seçeneklerini inceleyin; model kodu, adet ve logonuzla baskılı sipariş için teklif alın.</p>
        <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Çakmak Modelleri</Link></div>
      </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-tasli-cakmak-cm-100-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-tasli-cakmak-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Taşlı Çakmak Seçerken Model Farklarını Karşılaştırın</h2>
        <p>Taşlı çakmak seçimi yalnız ateşleme türüyle bitmez. Aynı grupta farklı gövde boyutları, dolum özellikleri ve ek işlevler bulunur. Dağıtım amacınıza uygun modeli belirlerken ürün kodunu esas alın; renk ve baskı alanını ayrıca kontrol edin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Taşlı çakmak modellerinin temel farkları</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ürün bilgilerindeki ayırt edici özellik</th></tr></thead><tbody>{[
          ["ÇM-100", "Cricket taşlı çakmak"], ["ÇM-160", "MRY, doldurulabilir taşlı çakmak"], ["CM-200", "Taşlı siboplu model"], ["CM-400", "Mini boy taşlı siboplu model"], ["CM-450", "Klasik gövdeli taşlı siboplu model"], ["CM-500", "Telefon tutuculu, stand işlevli taşlı model"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Taşlı Olması Dolum Özelliğini Belirlemez</h3>
        <p>Ateşleme yapısı ile yeniden doldurulabilirlik ayrı özelliklerdir. Dolum tercih ediyorsanız seçtiğiniz ürünün sibop veya doldurulabilirlik bilgisini detay sayfasından kontrol edin. Tüm taşlı modellerin aynı teknik özellikleri taşıdığını varsaymayın; sipariş öncesinde güncel ürün bilgisini teyit edin.</p>
        <h3 className="text-xl font-bold text-black">Mini Boy ve Telefon Standlı Seçenekler</h3>
        <p>CM-400 mini boy gövde isteyenler için; CM-500 ise telefon tutucu ve stand işlevini birlikte değerlendirmek isteyenler için incelenebilir. Küçük gövde, baskı alanının da değerlendirilmesini gerektirir. Stand işlevli üründe kullanım biçimi ve telefonla uyumluluk ayrıca kontrol edilmelidir.</p>
        <h3 className="text-xl font-bold text-black">Logo Alanı, Gövde Rengi ve Baskı Yönü</h3>
        <p>Logonun ince çizgilerini, telefon numarasının okunabilirliğini ve gövde rengiyle kontrastını baskı öncesinde değerlendirin. Tek veya çift yön uygulama imkanı modele bağlıdır. Tampon ya da UV baskının uygunluğu, ürün yüzeyi ve tasarım birlikte incelenerek belirlenir; her yöntemin her modele uygulanabildiği kabul edilmemelidir.</p>
        <h3 className="text-xl font-bold text-black">Baskılı Toplu Siparişin Fiyatı Nasıl Hazırlanır?</h3>
        <p>Ürün kartındaki tutar baskı bedelini içermez. Aynı model için farklı adet, renk sayısı ve baskı yönleri toplam teklifi değiştirebilir. Karşılaştırılabilir bir teklif için ürün kodunu, toplam adedi, renk dağılımını ve logonuzu paylaşın. Varsa ikinci yüzeye uygulanacak bilgileri ve teslimat ilini ekleyin.</p>
        <p>Güncel tedarik durumu, renkler ve hazırlık süresi sipariş kapsamıyla birlikte teyit edilir. Belirli bir tarihe ihtiyaç varsa bu tarihi tasarım onayından önce bildirin. Manyetolu ve turbo seçeneklerini de görmek için <Link href="/promosyon-cakmak" className="font-semibold text-black underline">tüm promosyon çakmak modellerini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Taşlı Promosyon Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-tasli-cakmak-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-tasli-cakmak-rehber-baslik" className="text-xl font-bold !text-black">Taşlı Çakmak ve Sipariş Rehberleri</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Taşlı çakmağın kullanım alanlarını inceleyin; model, baskı ve toplu sipariş kararını genel seçim rehberiyle tamamlayın.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/promosyon-tasli-cakmak-nedir" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-tasli-cakmak-nedir-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Taşlı Çakmak Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon taşlı çakmak nedir, neden tercih edilir, nerelerde kullanılır ve firmalara ne kazandırır? Logo baskılı taşlı çakmak modelleri hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
          <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Çakmak Alırken Dikkat Edilecek Noktaları İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon çakmak alırken nelere dikkat edilmeli? Ürün kalitesi, baskı türü, model seçimi, sipariş adedi, teslim süresi ve fiyat dengesi hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
