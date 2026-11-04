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
 openGraph: { title: "Logo Baskılı Manyetolu Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMagnetoLighter(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
    { "@type": "ListItem", position: 3, name: "Manyetolu Çakmak", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Manyetolu Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Manyetolu Çakmak</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Manyetolu Promosyon Çakmak Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Manyetolu çakmakları sibop, gövde boyutu ve turbo özelliklerine göre karşılaştırın. Cricket ÇM-150’den Clipper Brio CM-600’e kadar ürün açıklamalarında manyetolu olarak belirtilen seçenekleri inceleyin; adet ve logo bilgilerinizle kurumsal teklif isteyin.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Çakmak Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} manyetolu çakmak modeli gösteriliyor</p>
      <section aria-label="Manyetolu çakmak ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Çakmak</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Manyetolu Çakmaklarda Ateşleme ve Alev Özelliğini Ayırın</h2>
        <p>Manyetolu modeller tek bir ürün yapısından oluşmaz. Ateşleme türü aynı grupta olsa da gövde ölçüsü, dolum imkanı ve alev özelliği değişebilir. Bu nedenle model seçiminde yalnız kategori adını değil, ürün koduna ait teknik açıklamayı esas alın.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Manyetolu çakmak model karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ürün bilgilerindeki temel ayrım</th></tr></thead><tbody>{[
         ["ÇM-150", "Cricket, manyetolu sibopsuz"], ["CM-250", "Mini boy, manyetolu siboplu"], ["ÇM-260", "Manyetolu model; dolum bilgisi ürün detayında"], ["CM-300", "Manyetolu siboplu"], ["CM-350", "Manyetolu turbo rüzgar"], ["CM-360", "Manyetolu turbo siboplu rüzgar"], ["CM-550", "Manyetolu mini turbo rüzgar"], ["CM-600", "Clipper Brio tipi manyetolu"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Sibopsuz ve Yeniden Doldurulabilir Seçenekler</h3>
        <p>ÇM-150 ürün bilgilerinde sibopsuz olarak tanımlanır. CM-250 ve CM-300 ise siboplu modellerdir. Bu farklılık logo baskısından bağımsızdır. Yeniden doldurulabilir ürün arıyorsanız dolum bilgisini model bazında kontrol edin; manyetolu ifadesinden tek başına dolum özelliği çıkarmayın.</p>
        <h3 className="text-xl font-bold text-white">Turbo ve Mini Gövde Tercihi</h3>
        <p>CM-350, CM-360 ve CM-550, adlarında turbo rüzgar özelliği belirtilen ürünlerdir. Bu tanım her kullanım koşulunda aynı performansın garanti edildiği anlamına gelmez. CM-550 mini turbo, CM-250 ise mini boy siboplu seçenek olarak ayrılır. Boyut önceliğiniz varsa ürün ölçüsünü ve ele alınışını değerlendirin.</p>
        <h3 className="text-xl font-bold text-white">Baskı Alanına Uygun Logo Hazırlığı</h3>
        <p>Gövde şekli değiştikçe uygulanabilir logo alanı da değişebilir. Büyük bir tasarımı doğrudan küçültmek yerine amblem, firma adı ve iletişim bilgisinin önceliğini belirleyin. İnce yazılar için okunabilirliği; koyu ve açık gövdelerde logo kontrastını baskı yerleşiminde kontrol edin.</p>
        <p>Tek ya da çift yön baskı, renk sayısı ve kullanılacak yöntem seçilen yüzeye göre değerlendirilir. Logonuzu mümkünse vektörel dosya olarak paylaşın. Farklı gövde renklerine aynı baskı uygulanacaksa her renkte görünürlüğü tasarım onayı sırasında teyit edin.</p>
        <h3 className="text-xl font-bold text-white">Manyetolu Promosyon Çakmak İçin Teklif Bilgileri</h3>
        <p>Ürün bedeli ile logo uygulamasını birlikte değerlendirmek için model kodu, toplam adet ve renklere göre dağılımı belirtin. Kartlardaki fiyatlar baskı hariçtir. Aynı tasarımın bir ya da iki yüze uygulanması ve tasarımın renk sayısı teklif kapsamını değiştirebilir.</p>
        <p>Güncel renk ve tedarik durumu sipariş öncesinde kontrol edilir. Baskı planı ve tasarım onayı sonrasında teslim süresi netleştirilir; belirli bir etkinlik tarihi varsa baştan paylaşın. Ateşleme tercihinizi karşılaştırmak için <Link href="/promosyon-tasli-cakmak" className="font-semibold text-white underline">taşlı çakmak modellerini</Link>, diğer seçenekler için <Link href="/promosyon-cakmak" className="font-semibold text-white underline">ana çakmak kategorisini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Manyetolu Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
