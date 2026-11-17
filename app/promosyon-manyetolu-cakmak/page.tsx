import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMagnetoLighter } from "@/data/lighterSubcategories";

const CATEGORY = "Çakmak";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-manyetolu-cakmak`;
const description = "Manyetolu promosyon çakmak modellerini inceleyin. Siboplu, sibopsuz, mini boy ve turbo seçeneklerini karşılaştırıp logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
 { question: "Manyetolu çakmakların hepsi turbo mu?", answer: "Hayır. Manyetolu ifadesi ateşleme yapısıyla, turbo ise ürünün belirtilen alev özelliğiyle ilgilidir. Bu listede CM-350, CM-360 ve CM-550 turbo olarak tanımlanan modellerdir. Diğer ürünlere aynı özellik atfedilmemelidir." },
 { question: "Siboplu ve sibopsuz model arasındaki seçim nasıl yapılır?", answer: "Ürün adındaki sibop bilgisi dolum tercihi açısından ayrı değerlendirilmelidir. ÇM-150 sibopsuz olarak; CM-250 ve CM-300 siboplu olarak tanımlanır. Yeniden dolum beklentiniz varsa seçilen modelin teknik özelliklerini sipariş öncesinde teyit edin." },
 { question: "Mini boy manyetolu çakmak seçenekleri hangileri?", answer: "CM-250 mini boy siboplu; CM-550 mini turbo rüzgar modeli olarak listelenir. Gövde boyutu ile baskıya ayrılan alan farklı ölçülerdir; tasarımınızı uygulanabilir baskı alanına göre hazırlatın." },
 { question: "Manyetolu çakmak fiyatına logo baskısı dahil mi?", answer: "Ürün kartlarındaki tutarlar baskı hariç TL + KDV fiyatlarıdır. Baskı bedeli adet, renk sayısı, yön ve modele uygun yönteme göre ayrıca hesaplanır. Fiyat gösterilmeyen ürün için güncel teklif isteyin." },
 { question: "Renk ve teslim süresi için hangi bilgiler gerekli?", answer: "Model kodunu, toplam adedi, renk dağılımını, logo dosyasını ve ihtiyaç tarihinizi paylaşın. Tedarik durumu ve baskı planı kontrol edilerek renk seçenekleri ve teslim süresi teyit edilir." },
];
export const metadata: Metadata = {
 title: "Manyetolu Promosyon Çakmak Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-cricket-mayyetolu-sibopsuz-cakmak-cm-150-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Manyetolu Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMagnetoLighter(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
    { "@type": "ListItem", position: 3, name: "Manyetolu Çakmak", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Manyetolu Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Manyetolu Çakmak</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Manyetolu Promosyon Çakmak Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">Manyetolu çakmakları sibop, gövde boyutu ve turbo özelliklerine göre karşılaştırın. Cricket ÇM-150’den Clipper Brio CM-600’e kadar ürün açıklamalarında manyetolu olarak belirtilen seçenekleri inceleyin; adet ve logo bilgilerinizle kurumsal teklif isteyin.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Çakmak Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-cricket-mayyetolu-sibopsuz-cakmak-cm-150-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-manyetolu-cakmak-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Manyetolu Çakmaklarda Ateşleme ve Alev Özelliğini Ayırın</h2>
        <p>Manyetolu modeller tek bir ürün yapısından oluşmaz. Ateşleme türü aynı grupta olsa da gövde ölçüsü, dolum imkanı ve alev özelliği değişebilir. Bu nedenle model seçiminde yalnız kategori adını değil, ürün koduna ait teknik açıklamayı esas alın.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Manyetolu çakmak model karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ürün bilgilerindeki temel ayrım</th></tr></thead><tbody>{[
         ["ÇM-150", "Cricket, manyetolu sibopsuz"], ["CM-250", "Mini boy, manyetolu siboplu"], ["ÇM-260", "Manyetolu model; dolum bilgisi ürün detayında"], ["CM-300", "Manyetolu siboplu"], ["CM-350", "Manyetolu turbo rüzgar"], ["CM-360", "Manyetolu turbo siboplu rüzgar"], ["CM-550", "Manyetolu mini turbo rüzgar"], ["CM-600", "Clipper Brio tipi manyetolu"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Sibopsuz ve Yeniden Doldurulabilir Seçenekler</h3>
        <p>ÇM-150 ürün bilgilerinde sibopsuz olarak tanımlanır. CM-250 ve CM-300 ise siboplu modellerdir. Bu farklılık logo baskısından bağımsızdır. Yeniden doldurulabilir ürün arıyorsanız dolum bilgisini model bazında kontrol edin; manyetolu ifadesinden tek başına dolum özelliği çıkarmayın.</p>
        <h3 className="text-xl font-bold text-black">Turbo ve Mini Gövde Tercihi</h3>
        <p>CM-350, CM-360 ve CM-550, adlarında turbo rüzgar özelliği belirtilen ürünlerdir. Bu tanım her kullanım koşulunda aynı performansın garanti edildiği anlamına gelmez. CM-550 mini turbo, CM-250 ise mini boy siboplu seçenek olarak ayrılır. Boyut önceliğiniz varsa ürün ölçüsünü ve ele alınışını değerlendirin.</p>
        <h3 className="text-xl font-bold text-black">Baskı Alanına Uygun Logo Hazırlığı</h3>
        <p>Gövde şekli değiştikçe uygulanabilir logo alanı da değişebilir. Büyük bir tasarımı doğrudan küçültmek yerine amblem, firma adı ve iletişim bilgisinin önceliğini belirleyin. İnce yazılar için okunabilirliği; koyu ve açık gövdelerde logo kontrastını baskı yerleşiminde kontrol edin.</p>
        <p>Tek ya da çift yön baskı, renk sayısı ve kullanılacak yöntem seçilen yüzeye göre değerlendirilir. Logonuzu mümkünse vektörel dosya olarak paylaşın. Farklı gövde renklerine aynı baskı uygulanacaksa her renkte görünürlüğü tasarım onayı sırasında teyit edin.</p>
        <h3 className="text-xl font-bold text-black">Manyetolu Promosyon Çakmak İçin Teklif Bilgileri</h3>
        <p>Ürün bedeli ile logo uygulamasını birlikte değerlendirmek için model kodu, toplam adet ve renklere göre dağılımı belirtin. Kartlardaki fiyatlar baskı hariçtir. Aynı tasarımın bir ya da iki yüze uygulanması ve tasarımın renk sayısı teklif kapsamını değiştirebilir.</p>
        <p>Güncel renk ve tedarik durumu sipariş öncesinde kontrol edilir. Baskı planı ve tasarım onayı sonrasında teslim süresi netleştirilir; belirli bir etkinlik tarihi varsa baştan paylaşın. Ateşleme tercihinizi karşılaştırmak için <Link href="/promosyon-tasli-cakmak" className="font-semibold text-black underline">taşlı çakmak modellerini</Link>, diğer seçenekler için <Link href="/promosyon-cakmak" className="font-semibold text-black underline">ana çakmak kategorisini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Manyetolu Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-manyetolu-cakmak-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-manyetolu-cakmak-rehber-baslik" className="text-xl font-bold !text-black">Manyetolu Çakmakları Karşılaştırın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Mekanizma bilgisinin yanında boyut, alev yapısı ve logo alanını da değerlendirin; sipariş öncesi kontrol noktalarını inceleyin.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Çakmak Alırken Dikkat Edilecek Noktaları İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon çakmak alırken nelere dikkat edilmeli? Ürün kalitesi, baskı türü, model seçimi, sipariş adedi, teslim süresi ve fiyat dengesi hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
