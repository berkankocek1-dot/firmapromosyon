import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isDigitalThermos } from "@/data/thermosSubcategories";

const CATEGORY = "Termos";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-dijital-gostergeli-termos`;
const description = "Dijital ısı göstergeli promosyon termosları karşılaştırın. TK-195, TK-196 ve TK-200 modellerinde kapasite ve kapak özelliklerini inceleyip logo baskılı teklif alın.";
const faqItems = [
 { question: "Dijital göstergeli termos içeceği ısıtır mı?", answer: "Sıcaklık göstergesi, aktif ısıtma işleviyle aynı değildir. Bu modellerin dijital göstergeli olması içeceği ısıttıkları veya sıcaklığı ayarladıkları anlamına gelmez. Böyle bir ihtiyaç varsa ayrıca doğrulanmış ürün özelliği aranmalıdır." },
 { question: "Bu grupta hangi kapasiteler bulunuyor?", answer: "TK-195 350 ml, TK-196 500 ml ve TK-200 1000 ml olarak listelenir. Ortak özellik dijital ısı göstergesidir; kapasite ve diğer kullanım özellikleri modele göre değişir." },
 { question: "Kilitli kapak ve süzgeç hangi modellerde belirtiliyor?", answer: "TK-195 kilitli kapaklı, TK-196 süzgeçli olarak tanımlanır. Bu özellikler bütün dijital termoslarda var kabul edilmemelidir. Kapak kilidi tek başına tam sızdırmazlık garantisi de değildir." },
 { question: "Dijital termos nasıl temizlenmeli?", answer: "Kapak ve gösterge bölümünün bakımını modelin kullanım talimatına göre yapın. Elektronik bölümün suya daldırılması veya bulaşık makinesi uygunluğu bütün modeller için varsayılmamalıdır. Kapak temizliği ve enerji kaynağı bilgilerini sipariş öncesinde teyit edin." },
 { question: "Dijital termos fiyatına logo ve kutu dahil mi?", answer: "Kart fiyatları baskı hariç TL + KDV olarak gösterilir. TK-200 hediye kutulu olarak tanımlanır; kutu kapsamı, logo yöntemi ve diğer paketleme istekleri teklif sırasında netleştirilir. Bütün modeller aynı kutuyla sunuluyor kabul edilmemelidir." },
];
export const metadata: Metadata = {
 title: "Dijital Göstergeli Promosyon Termos Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-termos-tk-195-v2.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Dijital Göstergeli Termos Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isDigitalThermos(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Termos", item: `${SITE_URL}/promosyon-termos` },
    { "@type": "ListItem", position: 3, name: "Dijital Göstergeli Termos", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Dijital Göstergeli Promosyon Termos", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-termos" className="underline">Promosyon Termos</Link> / Dijital Göstergeli Termos</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Dijital Göstergeli Promosyon Termos Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">350 ml TK-195, 500 ml TK-196 ve 1000 ml TK-200 dijital ısı göstergeli termosları karşılaştırın. Kilitli kapak, süzgeç ve hediye kutusu bilgilerini model bazında inceleyin; logo baskılı toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-termos" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Termos Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-dijital-gostergeli-termos-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Dijital Isı Göstergeli Termoslarda Model Farkları</h2>
        <p>Bu üç modelin ortak noktası ürün bilgilerinde dijital ısı göstergesinin belirtilmesidir. Kapasite, kapak ve ek parçalar ise farklıdır. Kurumsal hediye seçiminde yalnız göstergeye odaklanmak yerine ürünün günlük kullanım biçimini ve logo uygulanacak yüzeyi birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Dijital göstergeli termos modellerinin karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Kapasite</th><th scope="col" className="p-3 text-black">Ayrıca belirtilen özellik</th></tr></thead><tbody>{[
         ["TK-195", "350 ml", "Kilitli kapak"], ["TK-196", "500 ml", "Süzgeç"], ["TK-200", "1000 ml / 1 litre", "Hediye kutusu"],
        ].map(([code, capacity, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{capacity}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Sıcaklık Gösterme ile Isıtma İşlevini Ayırın</h3>
        <p>Dijital gösterge bulunması, termosun içeceği aktif olarak ısıttığı veya belirli bir sıcaklıkta tuttuğu anlamına gelmez. Göstergeyi sıcaklık ayarı yapan bir sistem olarak değerlendirmeyin. Ölçüm biçimi, kullanım koşulları ve göstergeyle ilgili talimatlar ürün bazında kontrol edilmelidir.</p>
        <p>Ayrıca bütün modeller için ortak bir ölçüm hassasiyeti veya çalışma süresi vaat edilmez. Gösterge bölümünün enerji kaynağı, değişim veya bakım gereksinimi gibi ayrıntıları teklif aşamasında sorun. Bu bilgi yalnız ürün görselinden çıkarılmamalıdır.</p>
        <h3 className="text-xl font-bold text-black">350 ml, 500 ml ve 1 Litre Arasında Seçim</h3>
        <p>TK-195 350 ml, TK-196 500 ml ve TK-200 1000 ml kapasiteyle listelenir. İçecek miktarının yanında dış ölçü, dolu ağırlık ve taşıma alanını değerlendirin. Daha yüksek kapasite tek başına daha uzun ısı koruma süresi veya daha iyi yalıtım garantisi değildir.</p>
        <h3 className="text-xl font-bold text-black">Kapak Kilidi, Süzgeç ve Kutu Kapsamı</h3>
        <p>TK-195’in kilitli kapak bilgisi ile TK-196’nın süzgeç özelliği farklı ihtiyaçlara yöneliktir. Kapak kilidi, ürünün çantada her koşulda sızdırmadan taşınabileceği sonucunu vermez. Süzgeç de tek başına French press demleme mekanizmasıyla aynı kabul edilmemelidir.</p>
        <p>TK-200 hediye kutulu olarak tanımlanır. Kutunun yapısını ve varsa ek paketleme isteğinizi teklif sırasında netleştirin. Bir modeldeki aksesuarı diğer modellerin standart içeriği olarak değerlendirmeyin.</p>
        <h3 className="text-xl font-bold text-black">Gösterge Bölümünün Bakımı</h3>
        <p>Kapak ve elektronik bölümün temizliğinde ürüne ait talimatları esas alın. Suya daldırma veya bulaşık makinesi kullanımının uygunluğunu varsaymayın. Gövde ve kapak farklı bakım koşulları gerektirebilir; logo uygulamasından sonraki temizlik önerisini de ayrıca teyit edin.</p>
        <h3 className="text-xl font-bold text-black">Logo Baskılı Kurumsal Sipariş</h3>
        <p>Logonun gövdeye yerleşimi yüzey kaplaması, kavis ve uygulanabilir baskı alanına göre hazırlanır. Lazer kazıma veya renkli uygulama tercihinde ürün ve tasarım birlikte değerlendirilmelidir. Mümkünse vektörel logo dosyasını, tek veya çift yön isteğini ve ek yazıları paylaşın.</p>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak sunulur. Model kodu, adet, renk dağılımı ve paketleme kapsamıyla toplam teklif isteyin. Güncel tedarik durumu ve tasarım onayı teslim planını etkiler; ihtiyaç tarihini baştan bildirin.</p>
        <p>Kapasiteye göre incelemek için <Link href="/promosyon-500-ml-termos" className="font-semibold text-black underline">500 ml termosları</Link> ve <Link href="/promosyon-buyuk-hacimli-termos" className="font-semibold text-black underline">büyük hacimli termosları</Link> karşılaştırabilirsiniz. Bütün ürünler <Link href="/promosyon-termos" className="font-semibold text-black underline">ana termos kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Dijital Göstergeli Termos Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-dijital-gostergeli-termos-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-dijital-gostergeli-termos-rehber-baslik" className="text-xl font-bold !text-black">Göstergeyi Diğer Termos Özellikleriyle Birlikte Değerlendirin</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Gösterge özelliğinin yanında kapasite, kapak yapısı ve logo alanını da değerlendirmek için genel termos seçim rehberine bakın.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Termos Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon termos seçerken çelik termos, mug termos, kahve termosu, baskı teknikleri, kullanım alanları ve kurumsal hediye avantajları hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
