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
  openGraph: { title: "Logo Baskılı Taşlı Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isFlintLighter(p)));
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
        { "@type": "ListItem", position: 3, name: "Taşlı Çakmak", item: PAGE_URL },
      ] }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Taşlı Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
      <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
        <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Taşlı Çakmak</nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Taşlı Promosyon Çakmak Modelleri</h1>
        <p className="mt-3 max-w-3xl leading-7 text-gray-200">Cricket ÇM-100, MRY ÇM-160 ve siboplu taşlı modelleri gövde yapısı, boyut ve ek işlevlerine göre karşılaştırın. Mini boy CM-400 ve telefon standlı CM-500 seçeneklerini inceleyin; model kodu, adet ve logonuzla baskılı sipariş için teklif alın.</p>
        <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Çakmak Modelleri</Link></div>
      </section>
      <p className="mb-4 text-sm font-medium !text-white">{list.length} taşlı çakmak modeli gösteriliyor</p>
      <section aria-label="Taşlı çakmak ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Çakmak</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Taşlı Çakmak Seçerken Model Farklarını Karşılaştırın</h2>
        <p>Taşlı çakmak seçimi yalnız ateşleme türüyle bitmez. Aynı grupta farklı gövde boyutları, dolum özellikleri ve ek işlevler bulunur. Dağıtım amacınıza uygun modeli belirlerken ürün kodunu esas alın; renk ve baskı alanını ayrıca kontrol edin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Taşlı çakmak modellerinin temel farkları</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ürün bilgilerindeki ayırt edici özellik</th></tr></thead><tbody>{[
          ["ÇM-100", "Cricket taşlı çakmak"], ["ÇM-160", "MRY, doldurulabilir taşlı çakmak"], ["CM-200", "Taşlı siboplu model"], ["CM-400", "Mini boy taşlı siboplu model"], ["CM-450", "Klasik gövdeli taşlı siboplu model"], ["CM-500", "Telefon tutuculu, stand işlevli taşlı model"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Taşlı Olması Dolum Özelliğini Belirlemez</h3>
        <p>Ateşleme yapısı ile yeniden doldurulabilirlik ayrı özelliklerdir. Dolum tercih ediyorsanız seçtiğiniz ürünün sibop veya doldurulabilirlik bilgisini detay sayfasından kontrol edin. Tüm taşlı modellerin aynı teknik özellikleri taşıdığını varsaymayın; sipariş öncesinde güncel ürün bilgisini teyit edin.</p>
        <h3 className="text-xl font-bold text-white">Mini Boy ve Telefon Standlı Seçenekler</h3>
        <p>CM-400 mini boy gövde isteyenler için; CM-500 ise telefon tutucu ve stand işlevini birlikte değerlendirmek isteyenler için incelenebilir. Küçük gövde, baskı alanının da değerlendirilmesini gerektirir. Stand işlevli üründe kullanım biçimi ve telefonla uyumluluk ayrıca kontrol edilmelidir.</p>
        <h3 className="text-xl font-bold text-white">Logo Alanı, Gövde Rengi ve Baskı Yönü</h3>
        <p>Logonun ince çizgilerini, telefon numarasının okunabilirliğini ve gövde rengiyle kontrastını baskı öncesinde değerlendirin. Tek veya çift yön uygulama imkanı modele bağlıdır. Tampon ya da UV baskının uygunluğu, ürün yüzeyi ve tasarım birlikte incelenerek belirlenir; her yöntemin her modele uygulanabildiği kabul edilmemelidir.</p>
        <h3 className="text-xl font-bold text-white">Baskılı Toplu Siparişin Fiyatı Nasıl Hazırlanır?</h3>
        <p>Ürün kartındaki tutar baskı bedelini içermez. Aynı model için farklı adet, renk sayısı ve baskı yönleri toplam teklifi değiştirebilir. Karşılaştırılabilir bir teklif için ürün kodunu, toplam adedi, renk dağılımını ve logonuzu paylaşın. Varsa ikinci yüzeye uygulanacak bilgileri ve teslimat ilini ekleyin.</p>
        <p>Güncel tedarik durumu, renkler ve hazırlık süresi sipariş kapsamıyla birlikte teyit edilir. Belirli bir tarihe ihtiyaç varsa bu tarihi tasarım onayından önce bildirin. Manyetolu ve turbo seçeneklerini de görmek için <Link href="/promosyon-cakmak" className="font-semibold text-white underline">tüm promosyon çakmak modellerini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Taşlı Promosyon Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
