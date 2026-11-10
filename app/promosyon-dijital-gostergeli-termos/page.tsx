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
 openGraph: { title: "Logo Baskılı Dijital Göstergeli Termos Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isDigitalThermos(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Termos", item: `${SITE_URL}/promosyon-termos` },
    { "@type": "ListItem", position: 3, name: "Dijital Göstergeli Termos", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Dijital Göstergeli Promosyon Termos", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-termos" className="underline">Promosyon Termos</Link> / Dijital Göstergeli Termos</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Dijital Göstergeli Promosyon Termos Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">350 ml TK-195, 500 ml TK-196 ve 1000 ml TK-200 dijital ısı göstergeli termosları karşılaştırın. Kilitli kapak, süzgeç ve hediye kutusu bilgilerini model bazında inceleyin; logo baskılı toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-termos" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Termos Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} dijital göstergeli termos modeli gösteriliyor</p>
      <section aria-label="Dijital göstergeli termos ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Termos</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Dijital Isı Göstergeli Termoslarda Model Farkları</h2>
        <p>Bu üç modelin ortak noktası ürün bilgilerinde dijital ısı göstergesinin belirtilmesidir. Kapasite, kapak ve ek parçalar ise farklıdır. Kurumsal hediye seçiminde yalnız göstergeye odaklanmak yerine ürünün günlük kullanım biçimini ve logo uygulanacak yüzeyi birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Dijital göstergeli termos modellerinin karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Kapasite</th><th scope="col" className="p-3 text-white">Ayrıca belirtilen özellik</th></tr></thead><tbody>{[
         ["TK-195", "350 ml", "Kilitli kapak"], ["TK-196", "500 ml", "Süzgeç"], ["TK-200", "1000 ml / 1 litre", "Hediye kutusu"],
        ].map(([code, capacity, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{capacity}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Sıcaklık Gösterme ile Isıtma İşlevini Ayırın</h3>
        <p>Dijital gösterge bulunması, termosun içeceği aktif olarak ısıttığı veya belirli bir sıcaklıkta tuttuğu anlamına gelmez. Göstergeyi sıcaklık ayarı yapan bir sistem olarak değerlendirmeyin. Ölçüm biçimi, kullanım koşulları ve göstergeyle ilgili talimatlar ürün bazında kontrol edilmelidir.</p>
        <p>Ayrıca bütün modeller için ortak bir ölçüm hassasiyeti veya çalışma süresi vaat edilmez. Gösterge bölümünün enerji kaynağı, değişim veya bakım gereksinimi gibi ayrıntıları teklif aşamasında sorun. Bu bilgi yalnız ürün görselinden çıkarılmamalıdır.</p>
        <h3 className="text-xl font-bold text-white">350 ml, 500 ml ve 1 Litre Arasında Seçim</h3>
        <p>TK-195 350 ml, TK-196 500 ml ve TK-200 1000 ml kapasiteyle listelenir. İçecek miktarının yanında dış ölçü, dolu ağırlık ve taşıma alanını değerlendirin. Daha yüksek kapasite tek başına daha uzun ısı koruma süresi veya daha iyi yalıtım garantisi değildir.</p>
        <h3 className="text-xl font-bold text-white">Kapak Kilidi, Süzgeç ve Kutu Kapsamı</h3>
        <p>TK-195’in kilitli kapak bilgisi ile TK-196’nın süzgeç özelliği farklı ihtiyaçlara yöneliktir. Kapak kilidi, ürünün çantada her koşulda sızdırmadan taşınabileceği sonucunu vermez. Süzgeç de tek başına French press demleme mekanizmasıyla aynı kabul edilmemelidir.</p>
        <p>TK-200 hediye kutulu olarak tanımlanır. Kutunun yapısını ve varsa ek paketleme isteğinizi teklif sırasında netleştirin. Bir modeldeki aksesuarı diğer modellerin standart içeriği olarak değerlendirmeyin.</p>
        <h3 className="text-xl font-bold text-white">Gösterge Bölümünün Bakımı</h3>
        <p>Kapak ve elektronik bölümün temizliğinde ürüne ait talimatları esas alın. Suya daldırma veya bulaşık makinesi kullanımının uygunluğunu varsaymayın. Gövde ve kapak farklı bakım koşulları gerektirebilir; logo uygulamasından sonraki temizlik önerisini de ayrıca teyit edin.</p>
        <h3 className="text-xl font-bold text-white">Logo Baskılı Kurumsal Sipariş</h3>
        <p>Logonun gövdeye yerleşimi yüzey kaplaması, kavis ve uygulanabilir baskı alanına göre hazırlanır. Lazer kazıma veya renkli uygulama tercihinde ürün ve tasarım birlikte değerlendirilmelidir. Mümkünse vektörel logo dosyasını, tek veya çift yön isteğini ve ek yazıları paylaşın.</p>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak sunulur. Model kodu, adet, renk dağılımı ve paketleme kapsamıyla toplam teklif isteyin. Güncel tedarik durumu ve tasarım onayı teslim planını etkiler; ihtiyaç tarihini baştan bildirin.</p>
        <p>Kapasiteye göre incelemek için <Link href="/promosyon-500-ml-termos" className="font-semibold text-white underline">500 ml termosları</Link> ve <Link href="/promosyon-buyuk-hacimli-termos" className="font-semibold text-white underline">büyük hacimli termosları</Link> karşılaştırabilirsiniz. Bütün ürünler <Link href="/promosyon-termos" className="font-semibold text-white underline">ana termos kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Dijital Göstergeli Termos Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-dijital-gostergeli-termos-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-dijital-gostergeli-termos-rehber-baslik" className="text-xl font-bold !text-black">Göstergeyi Diğer Termos Özellikleriyle Birlikte Değerlendirin</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Gösterge özelliğinin yanında kapasite, kapak yapısı ve logo alanını da değerlendirmek için genel termos seçim rehberine bakın.</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir" className="font-semibold !text-black underline underline-offset-4">Termos Seçim ve Baskı Rehberini İncele →</Link>
        </div>
      </section>
    </div>
  );
}
