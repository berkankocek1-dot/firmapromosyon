import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isRefillableLighter } from "@/data/lighterSubcategories";

const CATEGORY = "Çakmak";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-doldurulabilir-cakmak`;
const description = "Doldurulabilir promosyon çakmak modellerini inceleyin. Siboplu, taşlı, manyetolu ve turbo seçeneklerini karşılaştırıp logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
 { question: "Bu sayfaya hangi çakmaklar dahil ediliyor?", answer: "Ürün başlığında veya kısa açıklamasında doldurulabilir ya da siboplu bilgisi bulunan modeller listelenir. Yalnız görünümden, ateşleme türünden veya marka adından dolum özelliği çıkarılmaz." },
 { question: "Doldurulabilir çakmaklar yalnız manyetolu mu?", answer: "Hayır. Dolum özelliği ateşleme türünden ayrıdır. Listede taşlı modeller ile manyetolu ve turbo seçenekler birlikte bulunur. Seçiminizde ürünün iki özelliğini de ayrı kontrol edin." },
 { question: "Sibopsuz ÇM-150 bu grupta bulunuyor mu?", answer: "Hayır. ÇM-150 ürün bilgilerinde sibopsuz olarak tanımlandığı için bu listede yer almaz. Bütün modelleri ana çakmak kategorisinde inceleyebilirsiniz." },
 { question: "Çakmak fiyatına dolum malzemesi veya logo baskısı dahil mi?", answer: "Kartlardaki fiyatlar baskı hariç TL + KDV olarak gösterilir. Ürün bedelinden ayrıca dolum malzemesi, bakım hizmeti veya başka bir aksesuarın dahil olduğu sonucu çıkarılmamalıdır. Teklif kapsamını ve logo baskı bedelini sipariş öncesinde netleştirin." },
 { question: "Sipariş için hangi bilgileri paylaşmalıyım?", answer: "Model kodu, adet, gövde rengi, logo dosyası, baskı yönü ve ihtiyaç tarihinizi paylaşın. Güncel model özellikleri, tedarik durumu ve teslim süresi teklif aşamasında teyit edilir." },
];
export const metadata: Metadata = {
 title: "Doldurulabilir Promosyon Çakmak Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-tasli-cakmak-cm-160-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Doldurulabilir Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isRefillableLighter(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
    { "@type": "ListItem", position: 3, name: "Doldurulabilir Çakmak", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Doldurulabilir Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Doldurulabilir Çakmak</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Doldurulabilir Promosyon Çakmak Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">Ürün bilgilerinde doldurulabilir veya siboplu olduğu belirtilen çakmakları bir arada inceleyin. Taşlı, manyetolu ve turbo seçeneklerini dolum özelliği, gövde boyutu ve logo alanıyla karşılaştırıp kurumsal sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Çakmak Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-tasli-cakmak-cm-160-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-doldurulabilir-cakmak-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Doldurulabilir Çakmak Seçiminde Önce Dolum Bilgisini Kontrol Edin</h2>
        <p>Yeniden dolum tercihi, çakmağın ateşleme türünden ayrı bir seçim ölçütüdür. Bu listede ürün başlığı veya kısa açıklamasında doldurulabilir ya da siboplu olarak tanımlanan seçenekler bulunur. Teknik bilgisi belirtilmeyen bir modele yalnız benzer göründüğü için dolum özelliği atfedilmez.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Dolum bilgisine göre çakmak seçenekleri</caption><thead><tr><th scope="col" className="p-3 text-black">Modeller</th><th scope="col" className="p-3 text-black">Ürün bilgilerindeki ayrım</th></tr></thead><tbody>{[
         ["ÇM-160", "MRY, taşlı ve doldurulabilir"], ["CM-200, CM-400, CM-450", "Taşlı siboplu; CM-400 mini boy"], ["CM-250, ÇM-260, CM-300", "Manyetolu siboplu; CM-250 mini boy"], ["CM-350, CM-360", "Turbo seçenekleri; CM-350 doldurulabilir, CM-360 siboplu olarak belirtilir"], ["CM-600", "Clipper Brio tipi, açıklamasında doldurulabilir yapı belirtilir"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">Taşlı veya Manyetolu Olması Yeterli Bir Ölçüt Değildir</h3>
        <p>Bir ürün taşlı olduğunda otomatik olarak doldurulabilir sayılmaz. Aynı şekilde bütün manyetolu çakmaklar da aynı dolum yapısını taşımaz. Örneğin sibopsuz olarak adlandırılan ÇM-150 bu grubun dışında kalır. Seçtiğiniz kodun ürün açıklamasını esas alın ve güncel ürün özelliklerini sipariş öncesinde teyit edin.</p>
        <h3 className="text-xl font-bold text-black">Mini Boy ve Turbo Seçenekleri Birlikte Değerlendirin</h3>
        <p>Küçük gövde arayanlar CM-250 ve CM-400 modellerini inceleyebilir. Bu iki model ateşleme türü bakımından ayrılır. Turbo tercihi olanlar CM-350 ile CM-360 bilgilerini karşılaştırabilir. Bu sayfada aynı ürünün birden fazla grupta bulunması, farklı teknik tercihlerin birlikte değerlendirilmesini sağlar.</p>
        <p>Gövde ölçüsü, uygulanabilir baskı alanı ve renk seçeneklerini ayrı kontrol edin. Bir modeldeki dolum veya baskı bilgisini benzer kodlu başka bir ürüne taşımayın. Listelenen özelliklerin kapsamı ürün detay sayfasındaki bilgilere dayanır.</p>
        <h3 className="text-xl font-bold text-black">Teklifte Ürün ve Ek Hizmet Kapsamını Netleştirin</h3>
        <p>Doldurulabilir ifadesi; yedek dolum malzemesi, bakım hizmeti veya sınırsız kullanımın ürün bedeline dahil olduğu anlamına gelmez. Talebinizde böyle bir ek ihtiyaç varsa ayrıca belirtin. Kullanım ve dolum için ürünle verilen talimatları esas alın.</p>
        <h3 className="text-xl font-bold text-black">Logo Baskısı ve Adet Bazında Fiyat Karşılaştırması</h3>
        <p>Kart fiyatları baskı hariç TL + KDV olarak sunulur. Logo uygulamasının yöntemi, tasarımın renk sayısı ve baskı yönü toplam teklifi etkileyebilir. Aynı model için farklı adetleri karşılaştırırken gövde rengi ve baskı kapsamını sabit tutun; böylece teklifler aynı ihtiyacı karşılar.</p>
        <p>Logo dosyanızı ve varsa ikinci yüzeyde kullanılacak iletişim bilgilerini paylaşın. Sınırlı alana çok fazla metin yerleştirmek yerine okunaklı bir tasarım hazırlatın. Tampon veya UV baskı uygunluğu ürün yüzeyi ve logo birlikte incelenerek belirlenir.</p>
        <h3 className="text-xl font-bold text-black">Sipariş Öncesi Tedarik ve Termin Kontrolü</h3>
        <p>Renk dağılımı, toplam adet, teslimat ili ve ihtiyaç tarihini teklif talebine ekleyin. Güncel tedarik durumu ile tasarım onayı teslim planında birlikte değerlendirilir. Özellikle belirli bir etkinliğe yetişmesi gereken siparişlerde hedef tarihi en başta paylaşın.</p>
        <p>Ateşleme türüne göre incelemek için <Link href="/promosyon-tasli-cakmak" className="font-semibold text-black underline">taşlı</Link> ve <Link href="/promosyon-manyetolu-cakmak" className="font-semibold text-black underline">manyetolu çakmakları</Link>; alev özelliğine göre seçim için <Link href="/promosyon-turbo-cakmak" className="font-semibold text-black underline">turbo modelleri</Link> karşılaştırabilirsiniz. Bütün ürünler <Link href="/promosyon-cakmak" className="font-semibold text-black underline">ana çakmak kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Doldurulabilir Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-doldurulabilir-cakmak-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-doldurulabilir-cakmak-rehber-baslik" className="text-xl font-bold !text-black">Doldurulabilir Çakmak Seçimini Netleştirin</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Doldurulabilirlik bilgisini model üzerinden doğrularken gövde, logo uygulaması ve sipariş kapsamını nasıl karşılaştırabileceğinizi öğrenin.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta-kapak-20261115.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Çakmak Alırken Dikkat Edilecek Noktaları İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon çakmak alırken nelere dikkat edilmeli? Ürün kalitesi, baskı türü, model seçimi, sipariş adedi, teslim süresi ve fiyat dengesi hakkında detaylı rehber.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
        </div>
      </section>
    </div></div>
  );
}
