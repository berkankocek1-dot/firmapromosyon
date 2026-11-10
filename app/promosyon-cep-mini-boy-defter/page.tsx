import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPocketNotebook } from "@/data/notebookSubcategories";

const CATEGORY = "Tarihsiz Defter";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-cep-mini-boy-defter`;
const description = "Cep ve mini boy promosyon defterleri karşılaştırın. TD-430, TD-460 ve TD-470 modellerinin ölçü, cilt ve sayfa özellikleriyle logo baskılı teklif alın.";
const faqItems = [
  {
    "question": "Hangi modeller cep ve mini boy grubunda yer alıyor?",
    "answer": "TD-430 cep boy; TD-460 ve TD-470 mini boy olarak tanımlanır. Bu sayfa, ürün başlığı veya kısa açıklamasında bu boy bilgileri belirtilen tarihsiz defterleri listeler."
  },
  {
    "question": "Cep ve mini boy defterlerin ölçüleri nedir?",
    "answer": "TD-430 10 x 17 cm, TD-460 9,5 x 14 cm ve TD-470 9 x 14 cm olarak belirtilir. Kullanacağınız cep veya çantanın alanıyla ürünün kalınlığını da karşılaştırın."
  },
  {
    "question": "Hangi model lastikli, hangisi terzi dikişli?",
    "answer": "TD-460 lastikli termo deri kapaklı olarak tanımlanır. TD-470 ürün bilgilerinde terzi dikiş cilt yapısı bulunur. Bu özellikler bütün küçük boy defterlerde ortak değildir."
  },
  {
    "question": "Sayfa sayıları aynı mı?",
    "answer": "TD-430 ve TD-460 için 196 sayfa, TD-470 için 80 sayfa belirtilir. Sayfa sayısı ile yaprak sayısını aynı kabul etmeyin; güncel ürün bilgilerini sipariş öncesinde teyit edin."
  },
  {
    "question": "Küçük boy defterlere logo uygulanabilir mi?",
    "answer": "Logo uygulaması kapak malzemesi, kullanılabilir alan ve tasarıma göre değerlendirilir. Model ve logonuzla uygun yöntem ve ölçü için teklif alın. Kart fiyatları baskı hariç TL + KDV olarak sunulur."
  }
];
export const metadata: Metadata = {
 title: "Cep ve Mini Boy Promosyon Defter Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Cep ve Mini Boy Defter Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isPocketNotebook(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Defter", item: `${SITE_URL}/promosyon-defter` },
    { "@type": "ListItem", position: 3, name: "Cep ve Mini Boy Defter", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Cep ve Mini Boy Promosyon Defter", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-defter" className="underline">Promosyon Defter</Link> / Cep ve Mini Boy Defter</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Cep ve Mini Boy Promosyon Defter Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">10 x 17 cm TD-430, 9,5 x 14 cm TD-460 ve 9 x 14 cm TD-470 küçük boy tarihsiz defterleri karşılaştırın. Kapak, cilt ve sayfa özelliklerini inceleyerek logo baskılı toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-defter" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Defter Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} cep ve mini boy defter modeli gösteriliyor</p>
      <section aria-label="Cep ve mini boy defter ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Tarihsiz Defter</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Cep Boy ve Mini Defterlerde Ebat Karşılaştırması</h2>
        <p>Küçük boy bir defter seçerken taşıma alanını ve not alma ihtiyacını birlikte değerlendirin. Cep veya küçük çantada taşınacak bir modelde dış ölçü kadar kalınlık da önemlidir. Bu gruptaki üç ürünün ölçüleri birbirinden farklıdır; cep boy ifadesi her cebe aynı şekilde sığacakları anlamına gelmez.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Cep ve mini boy defter ölçüleri ve özellikleri</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ölçü ve sayfa</th><th scope="col" className="p-3 text-white">Belirtilen ayrıntı</th></tr></thead><tbody>{[
         ["TD-430", "10 x 17 cm, 196 sayfa", "Kenar boyalı, Ivory kâğıt"], ["TD-460", "9,5 x 14 cm, 196 sayfa", "Lastikli termo deri kapak, 80 gr krem kâğıt"], ["TD-470", "9 x 14 cm, 80 sayfa", "Terzi dikiş, Ivory kâğıt"],
        ].map(([code, size, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{size}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Taşınacak Alanı Ölçerek Seçin</h3>
        <p>TD-430 10 x 17 cm ölçüsüyle bu üçlüde daha uzun bir seçenektir. TD-460 9,5 x 14 cm, TD-470 ise 9 x 14 cm olarak belirtilir. Kullanacağınız cep, çanta bölmesi veya hediye kutusuyla kapalı ürünün dış ölçülerini karşılaştırın. Kalınlık ve varsa kapak çıkıntıları için güncel ürün bilgisi isteyin.</p>
        <h3 className="text-xl font-bold text-white">Lastikli Kapak ve Terzi Dikiş Cilt</h3>
        <p>TD-460 açıklamasında lastikli termo deri kapak bulunur. TD-470 terzi dikiş cilt yapısıyla tanımlanır. TD-430 ise kenar boyalı tasarımıyla öne çıkar. Bunlar farklı ayrıntılardır; bir modeldeki kapama veya cilt özelliğini diğer iki modelde de var kabul etmeyin. Kullanım biçiminize uygunluğu ürün görselleri veya numuneyle değerlendirin.</p>
        <h3 className="text-xl font-bold text-white">196 Sayfa ile 80 Sayfa Arasındaki Seçim</h3>
        <p>TD-430 ve TD-460 için 196 sayfa, TD-470 için 80 sayfa bilgisi belirtilir. Günlük kısa notlar ve daha uzun süreli kayıt ihtiyacı için sayfa sayısını yazım alanıyla birlikte düşünün. Sayfa ile yaprak sayısı aynı değildir; kıyaslamayı ürün açıklamalarındaki birim üzerinden yapın.</p>
        <p>TD-460 açıklamasında 80 gr krem kâğıt, TD-430 ve TD-470 için Ivory kâğıt belirtilir. Kâğıt gramajını ya da çizgili, kareli veya düz iç düzeni tüm modellere genellemeyin. Belirli bir sayfa yapısı veya kalemle kullanım arıyorsanız iç sayfa örneği isteyin.</p>
        <h3 className="text-xl font-bold text-white">Küçük Kapakta Okunabilir Logo</h3>
        <p>Küçük boy kapakta firma adı ve logo için kullanılabilir alan sınırlı olabilir. Çok satırlı iletişim bilgileri ve ince çizgiler gerçek uygulama ölçüsünde değerlendirilmelidir. Mümkünse vektörel logo gönderin; konum, renk ve ölçüyü kapak malzemesine uygun yöntemle birlikte netleştirin.</p>
        <p>TD-460’ın lastik alanını veya diğer modellerin kapak ayrıntılarını logo yerleşiminde dikkate alın. Her kapakta aynı baskı yönteminin uygulanabildiğini varsaymayın. Tasarımı üretim öncesinde onaylayın; kalem veya kutu istiyorsanız paket içeriğini ayrıca belirtin.</p>
        <h3 className="text-xl font-bold text-white">Toplu Mini Defter Siparişi ve Fiyat</h3>
        <p>Ürün kartlarındaki bedeller baskı hariç TL + KDV olarak gösterilir. Model kodunu, adet ve renk dağılımını, logo isteğinizi ve teslimat adresinizi paylaşarak toplam teklif alın. Güncel tedarik uygunluğu, baskı onayı ve paketleme talepleri teslim planını etkiler; kullanım tarihinizi baştan bildirin.</p>
        <p>Daha geniş yazım alanı için <Link href="/promosyon-defter" className="font-semibold text-white underline">tüm promosyon defter modellerini</Link> karşılaştırabilirsiniz. İç sayfa düzeni önceliğinizse <Link href="/promosyon-kareli-defter" className="font-semibold text-white underline">kareli defter seçeneklerini</Link> inceleyin.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Cep ve Mini Boy Defter Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Defter ve Ajanda Seçim Rehberini İncele →</Link>
      </section>
    </div>
  );
}
