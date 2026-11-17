import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPenHolderNotebook } from "@/data/notebookSubcategories";

const CATEGORY = "Tarihsiz Defter";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-kalem-tutuculu-defter`;
const description = "Kalem tutuculu ve kalem yuvalı promosyon defterleri karşılaştırın. Ebat, kapak ve sayfa özelliklerini inceleyerek logo baskılı toplu defter teklifi alın.";
const faqItems = [
  {
    "question": "Hangi defterler kalem tutuculu grupta yer alıyor?",
    "answer": "TD-115, TD-120, TD-125, TD-200, TD-210, TD-300, TD-340 ve TD-390 ürün bilgilerinde kalem tutucu, kalem yuvası veya kalem geçme yeri belirtilir."
  },
  {
    "question": "Defterle birlikte kalem de geliyor mu?",
    "answer": "Kalem tutucu veya kalem yuvası bulunması, kalemin ürün bedeline dahil olduğu anlamına gelmez. Kalem ve varsa kutu isteğinizi teklif sırasında ayrıca belirtin."
  },
  {
    "question": "Her kalem tutucuya aynı kalem sığar mı?",
    "answer": "Tutucu biçimi ve ölçüsü modele göre değişebilir. Kullanmak istediğiniz kalemin gövde çapını ve klips yapısını belirterek uyumu teyit edin."
  },
  {
    "question": "Kalem tutuculu defterler tarihli mi?",
    "answer": "Bu sayfada Tarihsiz Defter kategorisindeki modeller listelenir. Sayfa düzeni ve sayfa sayısı modele göre değişir. Takvimli planlama için ajanda seçeneklerini inceleyebilirsiniz."
  },
  {
    "question": "Fiyatlara logo baskısı dahil mi?",
    "answer": "Kart fiyatları baskı hariç TL + KDV olarak gösterilir. Model, adet, logo yöntemi ve varsa kalem veya paketleme talebiyle toplam teklif hazırlanır."
  }
];
export const metadata: Metadata = {
 title: "Kalem Tutuculu Promosyon Defter Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-tarihsiz-defter-td-105-155x215.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Kalem Tutuculu Defter Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isPenHolderNotebook(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Defter", item: `${SITE_URL}/promosyon-defter` },
    { "@type": "ListItem", position: 3, name: "Kalem Tutuculu Defter", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Kalem Tutuculu Promosyon Defter", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-defter" className="underline">Promosyon Defter</Link> / Kalem Tutuculu Defter</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Kalem Tutuculu Promosyon Defter Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">Kalem tutucu, kalem yuvası veya kalem geçme yeri bulunan tarihsiz defterleri karşılaştırın. Kapak, ebat ve iç sayfa özelliklerini inceleyerek toplantı, çalışan kiti ve kurumsal hediye siparişiniz için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-defter" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Defter Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-kalem-tutuculu-defter-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Kalem Yuvalı ve Tutuculu Defterlerde Model Seçimi</h2>
        <p>Toplantıda veya eğitimde defterin yanında bir kalem bulundurmak isteyen kullanıcılar için tutucu ayrıntısı seçim ölçütü olabilir. Bu grupta ürün bilgisinde kalem yuvası, kalem tutucu veya kalem geçme yeri belirtilen modeller bulunur. Ortak özellik kalemi defterle birlikte taşımaya yönelik bir alan olmasıdır; tutucunun biçimi ve ölçüsü bütün ürünlerde aynı değildir.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Kalem tutuculu defterlerde ürün bilgilerinde belirtilen ayrıntılar</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ölçü / sayfa bilgisi</th><th scope="col" className="p-3 text-black">Belirtilen özellik</th></tr></thead><tbody>{[
         ["TD-115", "14,5 x 21 cm", "Termo PU kapak, kalem tutucu"], ["TD-120 / TD-125", "15 x 21 cm, 224 sayfa", "Kalem yuvası"], ["TD-200", "13 x 21 cm", "Termo deri kapak, kalem geçme yeri"], ["TD-210", "15 x 21 cm", "Kalem tutucu, karton kılıf"], ["TD-300", "224 sayfa", "Kalem yuvalı kapak"], ["TD-340", "160 çizgili sayfa", "Lastikli kapak, kalem tutucu"], ["TD-390", "192 sayfa", "Termo deri kapak, kalem tutucu"],
        ].map(([code, size, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{size}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Kalem Dahil mi, Kalem İçin Alan mı Var?</h3>
        <p>Kalem tutucu ifadesi, kalemin defterle birlikte verildiği anlamına gelmez. Kurumsal hediye paketinde kalem de istiyorsanız modelini ve adedini ayrıca belirtin. <Link href="/promosyon-kalem" className="font-semibold text-black underline">Logo baskılı kalem modellerinden</Link> birini seçerek defterle birlikte teklif isteyebilirsiniz. Kalem üzerindeki logo uygulaması da ayrı bir işlem olarak değerlendirilmelidir.</p>
        <h3 className="text-xl font-bold text-black">Gövde Çapı ve Klips Uyumu</h3>
        <p>Seçtiğiniz kalemin gövde çapını, uzunluğunu ve klipsini tutucuyla birlikte değerlendirin. İnce gövdeli ve kalın gövdeli kalemler aynı yuvada farklı durabilir. Belirli bir kalemi kullanacaksanız ürün kodunu paylaşın; mümkünse numune veya güncel ürün ölçüsüyle uyumu kontrol edin. Tutucudan tek başına düşmeme veya bütün kalemlere uyma garantisi çıkarılmamalıdır.</p>
        <h3 className="text-xl font-bold text-black">Ebat ve İç Sayfa İhtiyacı</h3>
        <p>TD-200 için 13 x 21 cm, TD-115 için 14,5 x 21 cm, TD-120, TD-125 ve TD-210 için 15 x 21 cm bilgisi bulunur. Çantada taşıma ile masa üzerinde not alma ihtiyaçları farklı olabilir. Dış ölçünün yanında ürün kalınlığını ve iç sayfa düzenini de kontrol edin.</p>
        <p>TD-340 açıklamasında 160 çizgili sayfa, TD-390 için 192 sayfa; TD-120, TD-125 ve TD-300 için 224 sayfa bilgisi belirtilir. Sayfa sayısını yaprak sayısıyla aynı kabul etmeyin. Bu grup tarihsiz defterlerden oluşur; tarihli planlama ihtiyacında <Link href="/promosyon-ajanda" className="font-semibold text-black underline">ajanda modellerini</Link> inceleyebilirsiniz.</p>
        <h3 className="text-xl font-bold text-black">Kapak Üzerinde Logo Yerleşimi</h3>
        <p>Kalem yuvası, lastik ve kapak ayrıntıları logo konumunu etkileyebilir. Tutucunun bulunduğu bölümü dikkate alarak tasarımın kullanılabilir alana yerleşmesini sağlayın. Termo deri ve termo PU yüzeylerde uygun yöntem modele göre belirlenir; baskı veya gofre tercihinizi ürün koduyla birlikte paylaşın.</p>
        <p>Mümkünse vektörel logo dosyası gönderin. İnce yazılar, ek iletişim bilgileri ve renk beklentisi gerçek uygulama ölçüsünde değerlendirilmelidir. Üretim öncesinde yerleşimi ve uygulanacak yöntemi netleştirin.</p>
        <h3 className="text-xl font-bold text-black">Toplu Sipariş ve Fiyat Karşılaştırması</h3>
        <p>Ürün kartlarında fiyatlar baskı hariç TL + KDV olarak sunulur. Aynı model, adet ve uygulama kapsamını karşılaştırarak toplam teklif isteyin. TD-210 açıklamasında karton kılıf belirtilir; diğer modeller için aynı paketleme içeriği varsayılmamalıdır.</p>
        <p>Model kodu, renk dağılımı, adet, varsa kalem ve kutu isteği ile teslimat adresini paylaşın. Güncel tedarik uygunluğu ve logo onayı teslim planını etkiler; etkinlik tarihinizi baştan bildirin. Tüm seçeneklere dönmek için <Link href="/promosyon-defter" className="font-semibold text-black underline">promosyon defter modellerini</Link> inceleyin.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Kalem Tutuculu Defter Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-defter-ajanda-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Defter ve Ajanda Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
