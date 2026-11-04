import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { is500mlThermos } from "@/data/thermosSubcategories";

const CATEGORY = "Termos";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-500-ml-termos`;
const description = "500 ml promosyon termos modellerini karşılaştırın. Bambu, dijital göstergeli, French press ve set seçeneklerinde logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
 { question: "Bu listedeki termosların tamamı 500 ml mi?", answer: "Ürün başlığında kapasitesi 500 ml olarak belirtilen görünür modeller listelenir. Set ürününde kapasite termos parçasına aittir; setin bütün parçalarının toplam hacmi olarak yorumlanmamalıdır." },
 { question: "500 ml termos kaç saat sıcak tutar?", answer: "Kapasite tek başına ısı koruma süresini belirlemez. Yalıtım yapısı, doluluk, ortam sıcaklığı ve kapağın açılma sıklığı etkilidir. Seçilen model için doğrulanmış bilgi olmadan bütün ürünlere ortak bir saat garantisi verilemez." },
 { question: "Dijital gösterge içeceği ısıtır mı?", answer: "Sıcaklık göstergesi ile ısıtma işlevi farklı özelliklerdir. TK-196 dijital ısı göstergeli ve süzgeçli olarak tanımlanır; gösterge bulunması ürünün içeceği ısıttığı anlamına gelmez." },
 { question: "500 ml termos seti ile tek ürün arasındaki fark nedir?", answer: "TK-135 çelik 3’lü termos seti olarak listelenir. Sipariş öncesinde set içeriğini, kutuyu ve hangi parçalara logo uygulanacağını teyit edin. Tek ürün fiyatıyla set fiyatını aynı kapsamdaymış gibi karşılaştırmayın." },
 { question: "Fiyatlara logo baskısı dahil mi?", answer: "Kartlardaki tutarlar baskı hariç TL + KDV olarak gösterilir. Model, adet, renk, logo yöntemi ve baskı yönü netleştikten sonra toplam teklif hazırlanır. Güncel tedarik ve teslim süresi teklif aşamasında teyit edilir." },
];
export const metadata: Metadata = {
 title: "500 ml Promosyon Termos Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı 500 ml Termos Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && is500mlThermos(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Termos", item: `${SITE_URL}/promosyon-termos` },
    { "@type": "ListItem", position: 3, name: "500 ml Termos", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "500 ml Promosyon Termos", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-termos" className="underline">Promosyon Termos</Link> / 500 ml Termos</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı 500 ml Promosyon Termos Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">500 ml termosları kapak, gövde ve kullanım özelliklerine göre karşılaştırın. Bambu TK-111, dijital göstergeli TK-196, rubber gövdeli TK-270 ve French press TK-310 gibi seçenekleri inceleyin; logo baskılı sipariş için model kodu ve adetle teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-termos" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Termos Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} 500 ml termos modeli gösteriliyor</p>
      <section aria-label="500 ml termos ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Termos</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Aynı Kapasitede Farklı Termos Özelliklerini Karşılaştırın</h2>
        <p>500 ml kapasite ürünleri aynı depolama hacmi etrafında toplar; gövde, kapak veya yalıtım özelliklerinin aynı olduğu anlamına gelmez. Ofis masasında kullanılacak bir ürünle günlük taşımaya ayrılacak termosu seçerken tutuş, dış ölçü ve kullanım talimatını birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">500 ml termos modellerinde seçim noktaları</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Karşılaştırılacak özellik</th></tr></thead><tbody>{[
         ["TK-100, TK-110, TK-205, TK-265, TK-290, TK-300", "500 ml kapasite; kapak, ölçü ve gövde bilgileri ürün bazında incelenmeli"],
         ["TK-111", "Bambu tasarım"], ["TK-135", "Çelik 3’lü termos seti"], ["TK-196", "Dijital ısı göstergesi ve süzgeç"], ["TK-230", "Devrilmez termos modeli"], ["TK-270", "Rubber gövde"], ["TK-310", "French press kahve termosu"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Kapasiteyi Dış Ölçü ve Taşıma Biçiminden Ayırın</h3>
        <p>500 ml iç hacim, bütün modellerin aynı boyda veya ağırlıkta olduğunu göstermez. Çantada taşıma planlanıyorsa ürünün kapak ve taşıma talimatını; araçta kullanılacaksa taban ölçüsünün bardaklıkla uyumunu kontrol edin. Kilit veya devrilmezlik tanımı tek başına tam sızdırmazlık garantisi olarak kabul edilmemelidir.</p>
        <h3 className="text-xl font-bold text-white">Bambu ve Rubber Gövde Seçenekleri</h3>
        <p>TK-111 bambu tasarımıyla, TK-270 rubber gövdesiyle listelenir. Malzeme görünümü seçimi, logo uygulanabilecek yüzeyden ayrı değerlendirilmelidir. Bambu detayın konumunu veya rubber kaplamanın baskıyla uyumunu model bazında kontrol edin; tek bir yöntemin her gövdeye uygulanabileceğini varsaymayın.</p>
        <h3 className="text-xl font-bold text-white">Gösterge, Süzgeç ve French Press İşlevi</h3>
        <p>TK-196 dijital ısı göstergeli süzgeçli model, TK-310 ise French press kahve termosu olarak tanımlanır. Süzgeç bulunması ile kahve demleme mekanizması aynı işlev değildir. Kahve hazırlama ihtiyacı varsa parçaların kullanım ve temizlik biçimini inceleyin. Dijital göstergeyi de içeceği ısıtan bir sistem olarak değerlendirmeyin.</p>
        <h3 className="text-xl font-bold text-white">500 ml Termos Setinin Kapsamı</h3>
        <p>TK-135, 500 ml termos içeren çelik 3’lü set olarak sunulur. Hediye paketinde hangi parçaların bulunduğunu, kutu kapsamını ve her parçanın logo alanını teklif aşamasında netleştirin. Set ürününü tek termosla karşılaştırırken fiyatın içerdiği parçaları ve uygulamaları dikkate alın.</p>
        <h3 className="text-xl font-bold text-white">Logo ve Baskı Bedelini Nasıl Planlamalısınız?</h3>
        <p>Ürün kartlarında tutarlar baskı hariç TL + KDV olarak gösterilir. Lazer kazıma veya renkli logo uygulamasının uygunluğu gövde kaplamasına ve modele bağlıdır. Logo dosyanızı, tek veya çift yön tercihinizi ve varsa ek yazıları paylaşın; kavisli yüzeyde gerçek baskı ölçüsünü tasarım onayında değerlendirin.</p>
        <p>Ürün kodu, toplam adet, renk dağılımı ve teslimat iliyle teklif isteyin. Farklı modelleri aynı adet ve baskı kapsamıyla karşılaştırmak toplam maliyeti değerlendirmeyi kolaylaştırır. Kutu veya ek paketleme isteniyorsa bunu ayrıca belirtin.</p>
        <h3 className="text-xl font-bold text-white">Isı Koruma ve Teslimat Bilgilerini Teyit Edin</h3>
        <p>Isı koruma süresi kapasiteye bakılarak tahmin edilmemelidir. Seçilen modelin teknik bilgisini esas alın; doluluk, ortam ve kapağın açılmasının sonucu etkileyebileceğini dikkate alın. Güncel tedarik durumu ile tasarım onayı da teslim planında birlikte değerlendirilir. Etkinlik tarihinizi teklif talebinde baştan paylaşın.</p>
        <p>Diğer kapasite ve işlevler için <Link href="/promosyon-termos" className="font-semibold text-white underline">tüm promosyon termos modellerini</Link> inceleyebilirsiniz. Cam veya plastik su mataraları için <Link href="/promosyon-matara" className="font-semibold text-white underline">matara kategorisine</Link> geçebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">500 ml Termos Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
