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
 openGraph: { title: "Logo Baskılı Doldurulabilir Çakmak Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isRefillableLighter(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Çakmak", item: `${SITE_URL}/promosyon-cakmak` },
    { "@type": "ListItem", position: 3, name: "Doldurulabilir Çakmak", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Doldurulabilir Promosyon Çakmak", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-cakmak" className="underline">Promosyon Çakmak</Link> / Doldurulabilir Çakmak</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Doldurulabilir Promosyon Çakmak Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Ürün bilgilerinde doldurulabilir veya siboplu olduğu belirtilen çakmakları bir arada inceleyin. Taşlı, manyetolu ve turbo seçeneklerini dolum özelliği, gövde boyutu ve logo alanıyla karşılaştırıp kurumsal sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-cakmak" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Çakmak Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} doldurulabilir çakmak modeli gösteriliyor</p>
      <section aria-label="Doldurulabilir çakmak ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Çakmak</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Doldurulabilir Çakmak Seçiminde Önce Dolum Bilgisini Kontrol Edin</h2>
        <p>Yeniden dolum tercihi, çakmağın ateşleme türünden ayrı bir seçim ölçütüdür. Bu listede ürün başlığı veya kısa açıklamasında doldurulabilir ya da siboplu olarak tanımlanan seçenekler bulunur. Teknik bilgisi belirtilmeyen bir modele yalnız benzer göründüğü için dolum özelliği atfedilmez.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Dolum bilgisine göre çakmak seçenekleri</caption><thead><tr><th scope="col" className="p-3 text-white">Modeller</th><th scope="col" className="p-3 text-white">Ürün bilgilerindeki ayrım</th></tr></thead><tbody>{[
         ["ÇM-160", "MRY, taşlı ve doldurulabilir"], ["CM-200, CM-400, CM-450", "Taşlı siboplu; CM-400 mini boy"], ["CM-250, ÇM-260, CM-300", "Manyetolu siboplu; CM-250 mini boy"], ["CM-350, CM-360", "Turbo seçenekleri; CM-350 doldurulabilir, CM-360 siboplu olarak belirtilir"], ["CM-600", "Clipper Brio tipi, açıklamasında doldurulabilir yapı belirtilir"],
        ].map(([code, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Taşlı veya Manyetolu Olması Yeterli Bir Ölçüt Değildir</h3>
        <p>Bir ürün taşlı olduğunda otomatik olarak doldurulabilir sayılmaz. Aynı şekilde bütün manyetolu çakmaklar da aynı dolum yapısını taşımaz. Örneğin sibopsuz olarak adlandırılan ÇM-150 bu grubun dışında kalır. Seçtiğiniz kodun ürün açıklamasını esas alın ve güncel ürün özelliklerini sipariş öncesinde teyit edin.</p>
        <h3 className="text-xl font-bold text-white">Mini Boy ve Turbo Seçenekleri Birlikte Değerlendirin</h3>
        <p>Küçük gövde arayanlar CM-250 ve CM-400 modellerini inceleyebilir. Bu iki model ateşleme türü bakımından ayrılır. Turbo tercihi olanlar CM-350 ile CM-360 bilgilerini karşılaştırabilir. Bu sayfada aynı ürünün birden fazla grupta bulunması, farklı teknik tercihlerin birlikte değerlendirilmesini sağlar.</p>
        <p>Gövde ölçüsü, uygulanabilir baskı alanı ve renk seçeneklerini ayrı kontrol edin. Bir modeldeki dolum veya baskı bilgisini benzer kodlu başka bir ürüne taşımayın. Listelenen özelliklerin kapsamı ürün detay sayfasındaki bilgilere dayanır.</p>
        <h3 className="text-xl font-bold text-white">Teklifte Ürün ve Ek Hizmet Kapsamını Netleştirin</h3>
        <p>Doldurulabilir ifadesi; yedek dolum malzemesi, bakım hizmeti veya sınırsız kullanımın ürün bedeline dahil olduğu anlamına gelmez. Talebinizde böyle bir ek ihtiyaç varsa ayrıca belirtin. Kullanım ve dolum için ürünle verilen talimatları esas alın.</p>
        <h3 className="text-xl font-bold text-white">Logo Baskısı ve Adet Bazında Fiyat Karşılaştırması</h3>
        <p>Kart fiyatları baskı hariç TL + KDV olarak sunulur. Logo uygulamasının yöntemi, tasarımın renk sayısı ve baskı yönü toplam teklifi etkileyebilir. Aynı model için farklı adetleri karşılaştırırken gövde rengi ve baskı kapsamını sabit tutun; böylece teklifler aynı ihtiyacı karşılar.</p>
        <p>Logo dosyanızı ve varsa ikinci yüzeyde kullanılacak iletişim bilgilerini paylaşın. Sınırlı alana çok fazla metin yerleştirmek yerine okunaklı bir tasarım hazırlatın. Tampon veya UV baskı uygunluğu ürün yüzeyi ve logo birlikte incelenerek belirlenir.</p>
        <h3 className="text-xl font-bold text-white">Sipariş Öncesi Tedarik ve Termin Kontrolü</h3>
        <p>Renk dağılımı, toplam adet, teslimat ili ve ihtiyaç tarihini teklif talebine ekleyin. Güncel tedarik durumu ile tasarım onayı teslim planında birlikte değerlendirilir. Özellikle belirli bir etkinliğe yetişmesi gereken siparişlerde hedef tarihi en başta paylaşın.</p>
        <p>Ateşleme türüne göre incelemek için <Link href="/promosyon-tasli-cakmak" className="font-semibold text-white underline">taşlı</Link> ve <Link href="/promosyon-manyetolu-cakmak" className="font-semibold text-white underline">manyetolu çakmakları</Link>; alev özelliğine göre seçim için <Link href="/promosyon-turbo-cakmak" className="font-semibold text-white underline">turbo modelleri</Link> karşılaştırabilirsiniz. Bütün ürünler <Link href="/promosyon-cakmak" className="font-semibold text-white underline">ana çakmak kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Doldurulabilir Çakmak Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="promosyon-doldurulabilir-cakmak-rehber-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="promosyon-doldurulabilir-cakmak-rehber-baslik" className="text-xl font-bold !text-black">Doldurulabilir Çakmak Seçimini Netleştirin</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Doldurulabilirlik bilgisini model üzerinden doğrularken gövde, logo uygulaması ve sipariş kapsamını nasıl karşılaştırabileceğinizi öğrenin.</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/rehber/promosyon-cakmak-alirken-dikkat-edilmesi-gereken-10-kritik-nokta" className="font-semibold !text-black underline underline-offset-4">Çakmak Alırken Dikkat Edilecek Noktaları İncele →</Link>
        </div>
      </section>
    </div>
  );
}
