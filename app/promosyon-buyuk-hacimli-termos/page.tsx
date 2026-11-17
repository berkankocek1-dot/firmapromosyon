import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Termos", item: `${SITE_URL}/promosyon-termos` },
    { "@type": "ListItem", position: 3, name: "Büyük Hacimli Termos", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Büyük Hacimli Promosyon Termos", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-termos" className="underline">Promosyon Termos</Link> / Büyük Hacimli Termos</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Büyük Hacimli Promosyon Termos Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">700 ml ve üzerindeki termosları kapasite, dış ölçü ve taşıma ihtiyacına göre karşılaştırın. 900 ml modellerden 1 litre seçeneklere ve 1300 ml TK-140’a kadar ürünleri inceleyerek logo baskılı kurumsal sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-termos" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Termos Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-buyuk-hacimli-termos-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">700 ml ve Üzeri Termoslarda Kapasiteyi İhtiyaca Göre Seçin</h2>
        <p>Bu gruptaki modeller, 500 ml seçeneklere göre daha fazla içecek taşımak isteyenler için karşılaştırılabilir. Büyük hacim tanımını sitemizde 700 ml ve üzeri ürünler için kullanıyoruz. Her modelin kapasitesi güncel ürün başlığından alınır; eski adres metinleri teknik özellik kaynağı olarak kullanılmaz.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Büyük hacimli termosların kapasite karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-black">Kapasite</th><th scope="col" className="p-3 text-black">Modeller</th><th scope="col" className="p-3 text-black">Kontrol edilecek nokta</th></tr></thead><tbody>{[
         ["700 ml", "TK-280", "Dış ölçü ve kapak yapısı"], ["750 ml", "TK-210", "Taşıma biçimi ve gövde ölçüsü"], ["900 ml", "TK-120, TK-125, TK-155", "Aynı kapasitede model farkları"], ["1000 ml / 1 litre", "TK-150, TK-200", "TK-200 gösterge ve kutu kapsamı"], ["1300 ml", "TK-140", "Dolu ağırlık ve yer ihtiyacı"],
        ].map(([capacity, code, check]) => <tr key={capacity} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{capacity}</th><td className="p-3">{code}</td><td className="p-3">{check}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Dolu Ağırlık ve Taşıma Alanını Birlikte Değerlendirin</h3>
        <p>Kapasite artışı, taşınacak içecek miktarını ve dolu ürünün ağırlığını etkiler. Günlük çanta, çalışma masası veya seyahat kullanımında ürünün dış ölçüsünü ayrıca inceleyin. Bir litrelik hacim, bütün modellerin aynı çap ve yüksekliğe sahip olduğu anlamına gelmez.</p>
        <p>Araçta kullanmayı planlıyorsanız tabanın bardaklığa uygunluğunu; çantada taşımada kapak ve conta talimatlarını kontrol edin. Kapak kilidini veya gövde formunu tek başına tam sızdırmazlık garantisi olarak değerlendirmeyin. Tutuş ve içim biçimi de seçimde kapasite kadar önem taşıyabilir.</p>
        <h3 className="text-xl font-bold text-black">900 ml ve 1 Litre Seçenekleri Nasıl Karşılaştırılır?</h3>
        <p>TK-120, TK-125 ve TK-155 900 ml kapasiteyle listelenir. TK-150 ile TK-200 ise 1000 ml, yani 1 litre grubundadır. Bu ayrım miktarı gösterir; gövde veya kapak özelliklerinin aynı olduğunu söylemez. Karşılaştırmada ürün detaylarını ve kullanım talimatlarını model koduyla birlikte esas alın.</p>
        <h3 className="text-xl font-bold text-black">Dijital Gösterge ve Hediye Kutusu</h3>
        <p>TK-200 dijital ısı göstergeli ve hediye kutulu olarak tanımlanır. Gösterge, içeceğin ısıtıldığı veya sıcaklığının aktif biçimde ayarlandığı anlamına gelmez. Kutunun kapsamını ve ürün üzerindeki logo uygulamasını ayrı teyit edin; bütün büyük hacimli modellerin aynı aksesuarlarla sunulduğunu varsaymayın.</p>
        <h3 className="text-xl font-bold text-black">Büyük Gövdede Logo Uygulama Alanı</h3>
        <p>Dış gövdenin büyük olması bütün yüzeyin baskıya uygun olduğu anlamına gelmez. Kavis, kaplama ve tutuş alanı uygulanabilir logo ölçüsünü sınırlayabilir. Lazer kazıma veya renkli uygulama tercihini seçilen ürün ve logo dosyası üzerinden değerlendirin.</p>
        <p>Tek ya da çift yön uygulama, ek yazı ve farklı renk dağılımını teklif talebinde belirtin. Logoyu gerçek baskı ölçüsünde inceleyin; gövde rengiyle kontrastı ve ince çizgilerin okunabilirliğini tasarım onayında kontrol edin.</p>
        <h3 className="text-xl font-bold text-black">Fiyat ve Teslimat Kapsamını Netleştirin</h3>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak gösterilir. Aynı adet, logo yöntemi ve paketleme kapsamıyla teklif karşılaştırın. Güncel tedarik durumu, renk seçenekleri ve baskı onayı teslim planında birlikte değerlendirilir. İhtiyaç tarihi ile teslimat ilini baştan paylaşın.</p>
        <p>Daha küçük kapasite arıyorsanız <Link href="/promosyon-500-ml-termos" className="font-semibold text-black underline">500 ml termos modellerini</Link>; bütün seçenekler için <Link href="/promosyon-termos" className="font-semibold text-black underline">ana termos kategorisini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Büyük Hacimli Termos Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-buyuk-hacimli-termos-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-buyuk-hacimli-termos-rehber-baslik" className="text-xl font-bold !text-black">Büyük Hacimli Termosları Karşılaştırın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Hacim tercihini taşıma biçimi, kapak ve kurumsal kullanım ihtiyacıyla birlikte değerlendirin; logo uygulaması için seçim ölçütlerini inceleyin.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-termos-rehberi-logolu-celik-mug-ve-kahve-termosu-modelleri-nasil-secilir-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Termos Seçim ve Baskı Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon termos seçerken çelik termos, mug termos, kahve termosu, baskı teknikleri, kullanım alanları ve kurumsal hediye avantajları hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
