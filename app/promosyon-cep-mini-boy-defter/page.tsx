import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-tarihsiz-defter-td-430-v2.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Cep ve Mini Boy Defter Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isPocketNotebook(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Defter", item: `${SITE_URL}/promosyon-defter` },
    { "@type": "ListItem", position: 3, name: "Cep ve Mini Boy Defter", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Cep ve Mini Boy Promosyon Defter", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-defter" className="underline">Promosyon Defter</Link> / Cep ve Mini Boy Defter</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Cep ve Mini Boy Promosyon Defter Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">10 x 17 cm TD-430, 9,5 x 14 cm TD-460 ve 9 x 14 cm TD-470 küçük boy tarihsiz defterleri karşılaştırın. Kapak, cilt ve sayfa özelliklerini inceleyerek logo baskılı toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-defter" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Defter Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-cep-mini-boy-defter-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Cep Boy ve Mini Defterlerde Ebat Karşılaştırması</h2>
        <p>Küçük boy bir defter seçerken taşıma alanını ve not alma ihtiyacını birlikte değerlendirin. Cep veya küçük çantada taşınacak bir modelde dış ölçü kadar kalınlık da önemlidir. Bu gruptaki üç ürünün ölçüleri birbirinden farklıdır; cep boy ifadesi her cebe aynı şekilde sığacakları anlamına gelmez.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Cep ve mini boy defter ölçüleri ve özellikleri</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ölçü ve sayfa</th><th scope="col" className="p-3 text-black">Belirtilen ayrıntı</th></tr></thead><tbody>{[
         ["TD-430", "10 x 17 cm, 196 sayfa", "Kenar boyalı, Ivory kâğıt"], ["TD-460", "9,5 x 14 cm, 196 sayfa", "Lastikli termo deri kapak, 80 gr krem kâğıt"], ["TD-470", "9 x 14 cm, 80 sayfa", "Terzi dikiş, Ivory kâğıt"],
        ].map(([code, size, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{size}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Taşınacak Alanı Ölçerek Seçin</h3>
        <p>TD-430 10 x 17 cm ölçüsüyle bu üçlüde daha uzun bir seçenektir. TD-460 9,5 x 14 cm, TD-470 ise 9 x 14 cm olarak belirtilir. Kullanacağınız cep, çanta bölmesi veya hediye kutusuyla kapalı ürünün dış ölçülerini karşılaştırın. Kalınlık ve varsa kapak çıkıntıları için güncel ürün bilgisi isteyin.</p>
        <h3 className="text-xl font-bold text-black">Lastikli Kapak ve Terzi Dikiş Cilt</h3>
        <p>TD-460 açıklamasında lastikli termo deri kapak bulunur. TD-470 terzi dikiş cilt yapısıyla tanımlanır. TD-430 ise kenar boyalı tasarımıyla öne çıkar. Bunlar farklı ayrıntılardır; bir modeldeki kapama veya cilt özelliğini diğer iki modelde de var kabul etmeyin. Kullanım biçiminize uygunluğu ürün görselleri veya numuneyle değerlendirin.</p>
        <h3 className="text-xl font-bold text-black">196 Sayfa ile 80 Sayfa Arasındaki Seçim</h3>
        <p>TD-430 ve TD-460 için 196 sayfa, TD-470 için 80 sayfa bilgisi belirtilir. Günlük kısa notlar ve daha uzun süreli kayıt ihtiyacı için sayfa sayısını yazım alanıyla birlikte düşünün. Sayfa ile yaprak sayısı aynı değildir; kıyaslamayı ürün açıklamalarındaki birim üzerinden yapın.</p>
        <p>TD-460 açıklamasında 80 gr krem kâğıt, TD-430 ve TD-470 için Ivory kâğıt belirtilir. Kâğıt gramajını ya da çizgili, kareli veya düz iç düzeni tüm modellere genellemeyin. Belirli bir sayfa yapısı veya kalemle kullanım arıyorsanız iç sayfa örneği isteyin.</p>
        <h3 className="text-xl font-bold text-black">Küçük Kapakta Okunabilir Logo</h3>
        <p>Küçük boy kapakta firma adı ve logo için kullanılabilir alan sınırlı olabilir. Çok satırlı iletişim bilgileri ve ince çizgiler gerçek uygulama ölçüsünde değerlendirilmelidir. Mümkünse vektörel logo gönderin; konum, renk ve ölçüyü kapak malzemesine uygun yöntemle birlikte netleştirin.</p>
        <p>TD-460’ın lastik alanını veya diğer modellerin kapak ayrıntılarını logo yerleşiminde dikkate alın. Her kapakta aynı baskı yönteminin uygulanabildiğini varsaymayın. Tasarımı üretim öncesinde onaylayın; kalem veya kutu istiyorsanız paket içeriğini ayrıca belirtin.</p>
        <h3 className="text-xl font-bold text-black">Toplu Mini Defter Siparişi ve Fiyat</h3>
        <p>Ürün kartlarındaki bedeller baskı hariç TL + KDV olarak gösterilir. Model kodunu, adet ve renk dağılımını, logo isteğinizi ve teslimat adresinizi paylaşarak toplam teklif alın. Güncel tedarik uygunluğu, baskı onayı ve paketleme talepleri teslim planını etkiler; kullanım tarihinizi baştan bildirin.</p>
        <p>Daha geniş yazım alanı için <Link href="/promosyon-defter" className="font-semibold text-black underline">tüm promosyon defter modellerini</Link> karşılaştırabilirsiniz. İç sayfa düzeni önceliğinizse <Link href="/promosyon-kareli-defter" className="font-semibold text-black underline">kareli defter seçeneklerini</Link> inceleyin.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Cep ve Mini Boy Defter Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-defter-ajanda-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Defter ve Ajanda Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
