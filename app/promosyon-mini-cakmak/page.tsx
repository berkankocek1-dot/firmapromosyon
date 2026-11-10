import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMiniLighter } from "@/data/lighterSubcategories";

const CATEGORY = "Çakmak";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-mini-cakmak`;
const description = "Mini boy promosyon çakmak modellerini inceleyin. CM-250, CM-400 ve mini turbo CM-550 seçeneklerini karşılaştırıp logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
 { question: "Mini boy çakmaklar aynı ateşleme türüne mi sahip?", answer: "Hayır. CM-250 manyetolu siboplu, CM-400 taşlı siboplu ve CM-550 manyetolu mini turbo rüzgar modeli olarak tanımlanır. Küçük gövde tercihini ateşleme ve alev özelliğinden ayrı değerlendirin." },
 { question: "Mini boy ifadesi belirli bir ölçüyü mü gösterir?", answer: "Bu sayfa ürün başlığı veya kısa açıklamasında mini boy ya da mini turbo olarak belirtilen modelleri bir araya getirir. Ortak bir santimetre ölçüsü vaat edilmez. Her modelin dış ölçüsünü kendi detay sayfasından kontrol edin." },
 { question: "Mini çakmağın iki yüzüne logo basılabilir mi?", answer: "Çift yön uygulama imkanı seçilen ürünün yüzeyine ve baskı alanına bağlıdır. Logo dosyasını ve ikinci yüzeye yerleştirmek istediğiniz bilgileri paylaşarak uygunluğu teyit edin." },
 { question: "Bütün mini çakmaklar doldurulabilir mi?", answer: "Mini boy olması dolum özelliğini belirlemez. CM-250 ile CM-400 siboplu olarak tanımlanır. Diğer modellerin dolum bilgisini ayrıca kontrol edin; yalnız boyut veya turbo ifadesinden dolum özelliği çıkarmayın." },
 { question: "Mini promosyon çakmak fiyatları baskı dahil mi?", answer: "Kartlarda tutarlar baskı hariç TL + KDV olarak gösterilir. Toplam teklif ürün kodu, adet, renk dağılımı, logo ve baskı yönüne göre hazırlanır. Tedarik durumu ve teslim süresi sipariş öncesinde teyit edilir." },
];
export const metadata: Metadata = {
 title: "Mini Boy Promosyon Çakmak Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Mini Boy Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMiniLighter(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
    { "@type": "ListItem", position: 3, name: "Mini Boy Çakmak", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Mini Boy Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Mini Boy Çakmak</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Mini Boy Promosyon Çakmak Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Mini boy gövde arayanlar için CM-250, CM-400 ve mini turbo CM-550 seçeneklerini karşılaştırın. Ateşleme yapısını, dolum bilgisini ve küçük yüzeye uygun logo yerleşimini değerlendirerek baskılı toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Çakmak Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} mini boy çakmak modeli gösteriliyor</p>
      <section aria-label="Mini boy çakmak ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Çakmak</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Mini Çakmak Modellerinde Boyut ve İşlevi Birlikte Karşılaştırın</h2>
        <p>Mini çakmak grubu tek bir ateşleme veya alev türünü ifade etmez. Ürün bilgilerinde mini olarak tanımlanan modeller küçük gövde tercihi etrafında bir araya gelir. Seçim yaparken dış ölçü, logo alanı ve kullanım özelliklerini ayrı ayrı inceleyin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Mini boy çakmak model farkları</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Belirtilen ürün yapısı</th><th scope="col" className="p-3 text-white">Karşılaştırma noktası</th></tr></thead><tbody>{[
         ["CM-250", "Mini boy manyetolu siboplu", "Manyetolu ateşleme ve dolum bilgisi"],
         ["CM-400", "Mini boy taşlı siboplu", "Taşlı ateşleme ve dolum bilgisi"],
         ["CM-550", "Manyetolu mini turbo rüzgar", "Turbo özelliği ve gövde ölçüsü"],
        ].map(([code, feature, check]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{feature}</td><td className="p-3">{check}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">CM-250 ile CM-400 Arasındaki Ateşleme Farkı</h3>
        <p>CM-250 manyetolu, CM-400 ise taşlı model olarak tanımlanır. Her ikisinin adında sibop bilgisi bulunmasına rağmen ateşleme tercihleri farklıdır. Boyut odaklı seçim yaparken hedeflediğiniz ürün yapısını da belirtin; benzer görünen küçük gövdeler aynı teknik özellikleri taşımayabilir.</p>
        <h3 className="text-xl font-bold text-white">CM-550 Mini Turbo Seçeneği</h3>
        <p>Mini gövdede turbo rüzgar özelliği arıyorsanız CM-550 ürün detaylarını inceleyebilirsiniz. Turbo tanımı bütün ortamlar veya rüzgar şiddetleri için performans garantisi değildir. Modelin belirtilen kullanım özelliklerini esas alın; dolum gibi ayrı bir özelliği yalnız turbo adından çıkarmayın.</p>
        <h3 className="text-xl font-bold text-white">Küçük Gövdede Okunabilir Logo Tasarımı</h3>
        <p>Mini ürünlerde dış ölçü ile uygulanabilir baskı alanı aynı değildir. Logo, telefon, web adresi ve sloganı aynı yüzeye sıkıştırmak yerine öncelikli bilgiyi seçin. Ayrıntılı logolarda ince çizgiler ve küçük yazılar için tasarım onayında okunabilirliği kontrol edin.</p>
        <p>Gövde rengi ile baskı renginin kontrastı görünürlüğü etkiler. Farklı renklerde ürün isteniyorsa aynı tasarımın her gövdede nasıl görüneceği değerlendirilmelidir. Tek veya çift yön uygulama ve tampon ya da UV gibi yöntemlerin uygunluğu ürün yüzeyine göre teyit edilir.</p>
        <h3 className="text-xl font-bold text-white">Mini Boy Tanımını Ölçüyle Teyit Edin</h3>
        <p>Bu listedeki ürünlerin ortak ve sabit bir santimetre ölçüsü olduğu varsayılmamalıdır. Gövdenin eni ve boyu ile baskı alanı model bazında kontrol edilir. Belirli bir paket veya dağıtım düzenine uygunluk arıyorsanız ihtiyaç duyduğunuz ölçüyü teklif talebinde ayrıca paylaşın.</p>
        <h3 className="text-xl font-bold text-white">Adet, Baskı ve Teslimat Bilgileriyle Teklif Alın</h3>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak gösterilir. Toplu sipariş için model kodunu, adedi, gövde rengi dağılımını ve logo dosyasını gönderin. İkinci yüzeyde baskı veya farklı tasarımlar isteniyorsa kapsamı ayrı belirtin; böylece toplam teklif aynı ihtiyaç üzerinden hazırlanır.</p>
        <p>Güncel tedarik durumu, renkler ve baskı planı kontrol edilerek teslim süresi teyit edilir. İhtiyaç tarihini ve teslimat ilini tasarım onayından önce paylaşın. Kesin adet veya süre bilgisi model ve sipariş kapsamı netleşmeden varsayılmamalıdır.</p>
        <p>Boyut dışındaki özellikleri karşılaştırmak için <Link href="/promosyon-tasli-cakmak" className="font-semibold text-white underline">taşlı</Link>, <Link href="/promosyon-manyetolu-cakmak" className="font-semibold text-white underline">manyetolu</Link>, <Link href="/promosyon-turbo-cakmak" className="font-semibold text-white underline">turbo</Link> ve <Link href="/promosyon-doldurulabilir-cakmak" className="font-semibold text-white underline">doldurulabilir çakmak</Link> sayfalarını inceleyebilirsiniz. Bütün modeller <Link href="/promosyon-cakmak" className="font-semibold text-white underline">ana çakmak kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Mini Boy Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-mini-cakmak-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-mini-cakmak-rehber-baslik" className="text-xl font-bold !text-black">Mini Çakmak Siparişini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyutu dağıtım ihtiyacıyla birlikte değerlendirin; mekanizma, baskı yüzü, adet ve teslim onayında dikkat edilecek noktaları inceleyin.</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="font-semibold !text-black underline underline-offset-4">Çakmak Alırken Dikkat Edilecek Noktaları İncele →</Link>
        </div>
      </section>
    </div>
  );
}
