import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isSquaredNotebook } from "@/data/notebookSubcategories";

const CATEGORY = "Tarihsiz Defter";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-kareli-defter`;
const description = "Kareli promosyon defterleri ebat, kapak ve cilt özelliklerine göre karşılaştırın. TD-130, TD-180, TD-250, TD-270 ve TD-420 için logo baskılı teklif alın.";
const faqItems = [
  {
    "question": "Hangi modeller kareli defter grubunda bulunuyor?",
    "answer": "TD-130, TD-180, TD-250, TD-270 ve TD-420 ürün bilgilerinde kareli iç sayfa belirtilir. Kapak deseni yerine iç sayfa özelliği esas alınır."
  },
  {
    "question": "Kareli defterlerin ebatları aynı mı?",
    "answer": "Hayır. TD-130 19,5 x 25 cm, TD-180 17 x 24 cm, TD-250 13 x 21 cm ve TD-270 16 x 24 cm olarak belirtilir. TD-420 dahil sipariş edeceğiniz modelin güncel ölçüsünü ürün detayından kontrol edin."
  },
  {
    "question": "Spiralli kareli defter hangisi?",
    "answer": "TD-180 ürün açıklamasında spiralli ve kareli olarak tanımlanır. Diğer kareli modellerin aynı cilt yapısına sahip olduğu varsayılmamalıdır."
  },
  {
    "question": "Kare aralıkları ve sayfa sayıları aynı mı?",
    "answer": "Kare aralığı bütün modeller için ortak belirtilmez; ihtiyacınıza göre iç sayfa örneği isteyin. TD-130 için 196, TD-250 için 224 ve TD-420 için 200 sayfa bilgisi bulunur. Sayfa ile yaprak sayısını aynı kabul etmeyin."
  },
  {
    "question": "Kareli defter fiyatına baskı dahil mi?",
    "answer": "Kart fiyatları baskı hariç TL + KDV olarak sunulur. Logo yöntemi, sipariş adedi ve varsa kalem veya paketleme isteğiyle toplam teklif alın."
  }
];
export const metadata: Metadata = {
 title: "Kareli Promosyon Defter Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Kareli Defter Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isSquaredNotebook(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Defter", item: `${SITE_URL}/promosyon-defter` },
    { "@type": "ListItem", position: 3, name: "Kareli Defter", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Kareli Promosyon Defter", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-defter" className="underline">Promosyon Defter</Link> / Kareli Defter</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Kareli Promosyon Defter Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Kareli iç sayfalı TD-130, TD-180, TD-250, TD-270 ve TD-420 defterleri karşılaştırın. Farklı ebat, kapak ve cilt seçeneklerini inceleyerek logo baskılı kurumsal siparişiniz için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-defter" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Defter Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} kareli defter modeli gösteriliyor</p>
      <section aria-label="Kareli defter ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Tarihsiz Defter</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Kareli İç Sayfalı Defterlerde Seçim Ölçütleri</h2>
        <p>Kareli defterler; hesap, tablo, taslak ve notları aynı sayfada düzenlemek isteyen kullanıcılar için değerlendirilebilir. Bu listedeki modeller iç sayfalarında kareli düzen belirtilen ürünlerden oluşur. Kapak üzerindeki çizgili veya geometrik desen, iç sayfanın da aynı düzende olduğu anlamına gelmez.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Kareli defter modellerinde belirtilen özellikler</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ölçü / sayfa bilgisi</th><th scope="col" className="p-3 text-white">Kapak veya cilt</th></tr></thead><tbody>{[
         ["TD-130", "19,5 x 25 cm, 196 sayfa", "Termo deri"], ["TD-180", "17 x 24 cm", "Spiralli, termo deri"], ["TD-250", "13 x 21 cm, 224 sayfa", "Termo deri"], ["TD-270", "16 x 24 cm", "Termo deri"], ["TD-420", "200 sayfa", "Kuşe taslama sert kapak"],
        ].map(([code, size, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{size}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Kare Aralığını ve Sayfa Örneğini Kontrol Edin</h3>
        <p>Teknik notlar, sayısal çalışmalar veya tablo oluşturma için kare aralığı önemli olabilir. Ürün bilgilerinde belirtilmeyen bir kare ölçüsünü bütün modellerde var kabul etmeyin. Belirli bir düzen arıyorsanız sipariş öncesinde iç sayfa görseli ya da numune isteyin. Kareli sayfa bulunması tek başına mühendislik çizimine uygun belirli bir ölçek veya kâğıt performansı garantisi değildir.</p>
        <h3 className="text-xl font-bold text-white">Taşıma Kolaylığı ve Yazım Alanı</h3>
        <p>TD-250 için 13 x 21 cm, TD-270 için 16 x 24 cm, TD-180 için 17 x 24 cm ve TD-130 için 19,5 x 25 cm ölçüsü belirtilir. Günlük taşımada dış ölçü ve kalınlık, masa üzerinde çalışmada ise kullanılabilir yazım alanı önem kazanabilir. Daha büyük bir ürünün her kullanım için daha uygun olduğunu varsaymak yerine alıcının ihtiyacına göre karar verin.</p>
        <h3 className="text-xl font-bold text-white">Spiral Cilt ve Kapak Seçenekleri</h3>
        <p>TD-180 spiralli tasarımıyla tanımlanır. Açılma biçimini ve sayfa kullanımını güncel ürün görsellerinden inceleyin; bütün modellerin aynı açıyla açıldığını veya sayfalarının çıkarılabildiğini kabul etmeyin. TD-420 kuşe taslama sert kapak bilgisiyle diğer termo deri seçeneklerden ayrılır. Kapak görünümünü ve logo alanını ayrıca değerlendirin.</p>
        <h3 className="text-xl font-bold text-white">Kâğıt ve Sayfa Sayısı</h3>
        <p>TD-130 için 196 sayfa ve 90 gr Ivory krem kâğıt bilgisi bulunur. TD-250 224 sayfa, TD-420 200 sayfa kareli iç yapısıyla tanımlanır. Bu ayrıntıları diğer modellere genellemeyin; özellikle belirli bir kalemle kullanım planlıyorsanız kâğıt örneğini kontrol edin. Sayfa sayısını yaprak sayısıyla karıştırmadan güncel ürün bilgisi üzerinden karşılaştırma yapın.</p>
        <h3 className="text-xl font-bold text-white">Logo Baskısında Kapak Yüzeyinin Etkisi</h3>
        <p>Logo yöntemi yalnız kareli iç düzene göre belirlenmez. Kapak malzemesi, doku ve uygulama alanı birlikte değerlendirilmelidir. Termo deri yüzey ile kuşe taslama kapak için aynı yöntemin uygun olduğunu varsaymayın. Ürün kodunu ve mümkünse vektörel logonuzu paylaşarak renk, ölçü ve konumu netleştirin.</p>
        <p>İnce yazılar ve ek iletişim bilgileri gerçek baskı ölçüsünde okunabilir olmalıdır. Logo yerleşimini üretim öncesinde onaylayın. İç sayfalara özel baskı gibi ek bir isteğiniz varsa hazır ürünün standart içeriğinden ayrı olarak uygulanabilirliğini sorun.</p>
        <h3 className="text-xl font-bold text-white">Toplu Kareli Defter Siparişi</h3>
        <p>Kart fiyatları baskı hariç TL + KDV olarak sunulur. Aynı model, adet ve uygulama kapsamını karşılaştırarak toplam teklif isteyin. Kalem, kutu veya ayrı paketleme gerekiyorsa bunları ayrıca belirtin. Güncel tedarik uygunluğu ve logo onayı teslim planını etkiler; etkinlik tarihinizi ve teslimat adresinizi baştan paylaşın.</p>
        <p>Diğer iç sayfa ve kapak seçenekleri için <Link href="/promosyon-defter" className="font-semibold text-white underline">tüm promosyon defter modellerine</Link> dönebilirsiniz. Kalem taşıma alanı önceliğinizse <Link href="/promosyon-kalem-tutuculu-defter" className="font-semibold text-white underline">kalem tutuculu defterleri</Link> de inceleyin.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Kareli Defter Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Defter ve Ajanda Seçim Rehberini İncele →</Link>
      </section>
    </div>
  );
}
