import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isLargeThermos } from "@/data/thermosSubcategories";

const CATEGORY = "Termos";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-buyuk-hacimli-termos`;
const description = "700 ml ve üzeri promosyon termos modellerini inceleyin. 750, 900, 1000 ve 1300 ml seçeneklerini karşılaştırıp logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
 { question: "Büyük hacimli termos grubuna hangi kapasiteler giriyor?", answer: "Bu sayfa, ana termos sayfasındaki Büyük Hacim filtresiyle aynı kapsamda, ürün başlığında kapasitesi 700 ml ve üzeri olarak belirtilen görünür modelleri listeler. Bu eşik sitemizdeki gruplamadır; bütün termoslar için evrensel bir sınıflandırma değildir." },
 { question: "1 litre promosyon termos modelleri hangileri?", answer: "TK-150 ve TK-200, güncel ürün başlıklarında 1000 ml olarak belirtilir. TK-200 dijital ısı göstergeli ve hediye kutulu olarak tanımlanır. Diğer özellikler ve kutu kapsamı model bazında teyit edilmelidir." },
 { question: "Daha büyük termos daha uzun süre sıcak tutar mı?", answer: "Kapasite tek başına karşılaştırmalı ısı koruma garantisi vermez. Yalıtım, doluluk, başlangıç ve ortam sıcaklığı ile kapak kullanımı sonucu etkiler. Seçilen modelin doğrulanmış teknik bilgilerini esas alın." },
 { question: "900 ml termosların hepsi aynı mı?", answer: "TK-120, TK-125 ve TK-155 aynı kapasite grubunda yer alır; dış ölçü, ağırlık, kapak ve gövde özellikleri ayrı değerlendirilmelidir. Kapasitenin eşit olması bütün parçaların veya kullanım biçiminin aynı olduğunu göstermez." },
 { question: "Büyük hacimli termos fiyatına baskı dahil mi?", answer: "Kartlarda tutarlar baskı hariç TL + KDV olarak sunulur. Logo yöntemi, baskı yönü, adet ve ek paketleme talepleriyle toplam teklif hazırlanır. Tedarik durumu ve teslim süresi sipariş kapsamına göre teyit edilir." },
];
export const metadata: Metadata = {
 title: "Büyük Hacimli Promosyon Termos Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Büyük Hacimli Termos Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isLargeThermos(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Termos", item: `${SITE_URL}/promosyon-termos` },
    { "@type": "ListItem", position: 3, name: "Büyük Hacimli Termos", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Büyük Hacimli Promosyon Termos", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-termos" className="underline">Promosyon Termos</Link> / Büyük Hacimli Termos</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Büyük Hacimli Promosyon Termos Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">700 ml ve üzerindeki termosları kapasite, dış ölçü ve taşıma ihtiyacına göre karşılaştırın. 900 ml modellerden 1 litre seçeneklere ve 1300 ml TK-140’a kadar ürünleri inceleyerek logo baskılı kurumsal sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-termos" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Termos Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} büyük hacimli termos modeli gösteriliyor</p>
      <section aria-label="Büyük hacimli termos ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Termos</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">700 ml ve Üzeri Termoslarda Kapasiteyi İhtiyaca Göre Seçin</h2>
        <p>Bu gruptaki modeller, 500 ml seçeneklere göre daha fazla içecek taşımak isteyenler için karşılaştırılabilir. Büyük hacim tanımını sitemizde 700 ml ve üzeri ürünler için kullanıyoruz. Her modelin kapasitesi güncel ürün başlığından alınır; eski adres metinleri teknik özellik kaynağı olarak kullanılmaz.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Büyük hacimli termosların kapasite karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-white">Kapasite</th><th scope="col" className="p-3 text-white">Modeller</th><th scope="col" className="p-3 text-white">Kontrol edilecek nokta</th></tr></thead><tbody>{[
         ["700 ml", "TK-280", "Dış ölçü ve kapak yapısı"], ["750 ml", "TK-210", "Taşıma biçimi ve gövde ölçüsü"], ["900 ml", "TK-120, TK-125, TK-155", "Aynı kapasitede model farkları"], ["1000 ml / 1 litre", "TK-150, TK-200", "TK-200 gösterge ve kutu kapsamı"], ["1300 ml", "TK-140", "Dolu ağırlık ve yer ihtiyacı"],
        ].map(([capacity, code, check]) => <tr key={capacity} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{capacity}</th><td className="p-3">{code}</td><td className="p-3">{check}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Dolu Ağırlık ve Taşıma Alanını Birlikte Değerlendirin</h3>
        <p>Kapasite artışı, taşınacak içecek miktarını ve dolu ürünün ağırlığını etkiler. Günlük çanta, çalışma masası veya seyahat kullanımında ürünün dış ölçüsünü ayrıca inceleyin. Bir litrelik hacim, bütün modellerin aynı çap ve yüksekliğe sahip olduğu anlamına gelmez.</p>
        <p>Araçta kullanmayı planlıyorsanız tabanın bardaklığa uygunluğunu; çantada taşımada kapak ve conta talimatlarını kontrol edin. Kapak kilidini veya gövde formunu tek başına tam sızdırmazlık garantisi olarak değerlendirmeyin. Tutuş ve içim biçimi de seçimde kapasite kadar önem taşıyabilir.</p>
        <h3 className="text-xl font-bold text-white">900 ml ve 1 Litre Seçenekleri Nasıl Karşılaştırılır?</h3>
        <p>TK-120, TK-125 ve TK-155 900 ml kapasiteyle listelenir. TK-150 ile TK-200 ise 1000 ml, yani 1 litre grubundadır. Bu ayrım miktarı gösterir; gövde veya kapak özelliklerinin aynı olduğunu söylemez. Karşılaştırmada ürün detaylarını ve kullanım talimatlarını model koduyla birlikte esas alın.</p>
        <h3 className="text-xl font-bold text-white">Dijital Gösterge ve Hediye Kutusu</h3>
        <p>TK-200 dijital ısı göstergeli ve hediye kutulu olarak tanımlanır. Gösterge, içeceğin ısıtıldığı veya sıcaklığının aktif biçimde ayarlandığı anlamına gelmez. Kutunun kapsamını ve ürün üzerindeki logo uygulamasını ayrı teyit edin; bütün büyük hacimli modellerin aynı aksesuarlarla sunulduğunu varsaymayın.</p>
        <h3 className="text-xl font-bold text-white">Büyük Gövdede Logo Uygulama Alanı</h3>
        <p>Dış gövdenin büyük olması bütün yüzeyin baskıya uygun olduğu anlamına gelmez. Kavis, kaplama ve tutuş alanı uygulanabilir logo ölçüsünü sınırlayabilir. Lazer kazıma veya renkli uygulama tercihini seçilen ürün ve logo dosyası üzerinden değerlendirin.</p>
        <p>Tek ya da çift yön uygulama, ek yazı ve farklı renk dağılımını teklif talebinde belirtin. Logoyu gerçek baskı ölçüsünde inceleyin; gövde rengiyle kontrastı ve ince çizgilerin okunabilirliğini tasarım onayında kontrol edin.</p>
        <h3 className="text-xl font-bold text-white">Fiyat ve Teslimat Kapsamını Netleştirin</h3>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak gösterilir. Aynı adet, logo yöntemi ve paketleme kapsamıyla teklif karşılaştırın. Güncel tedarik durumu, renk seçenekleri ve baskı onayı teslim planında birlikte değerlendirilir. İhtiyaç tarihi ile teslimat ilini baştan paylaşın.</p>
        <p>Daha küçük kapasite arıyorsanız <Link href="/promosyon-500-ml-termos" className="font-semibold text-white underline">500 ml termos modellerini</Link>; bütün seçenekler için <Link href="/promosyon-termos" className="font-semibold text-white underline">ana termos kategorisini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Büyük Hacimli Termos Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-buyuk-hacimli-termos-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-buyuk-hacimli-termos-rehber-baslik" className="text-xl font-bold !text-black">Büyük Hacimli Termosları Karşılaştırın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Hacim tercihini taşıma biçimi, kapak ve kurumsal kullanım ihtiyacıyla birlikte değerlendirin; logo uygulaması için seçim ölçütlerini inceleyin.</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir" className="font-semibold !text-black underline underline-offset-4">Termos Seçim ve Baskı Rehberini İncele →</Link>
        </div>
      </section>
    </div>
  );
}
