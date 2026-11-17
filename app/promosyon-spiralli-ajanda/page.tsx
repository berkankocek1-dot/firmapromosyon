import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isSpiralAgenda } from "@/data/agendaSubcategories";

const CATEGORY = "Ajanda";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-spiralli-ajanda`;
const description = "Spiralli promosyon ajanda modellerini ebat, cilt ve kapak özelliklerine göre karşılaştırın. Firma logolu toplu ajanda siparişiniz için teklif alın.";
const faqItems = [
  {
    "question": "Hangi modeller spiralli ajanda grubunda yer alıyor?",
    "answer": "AJ-190, AJ-200, AJ-230, AJ-240, AJ-250, AJ-270 ve AJ-290 modellerinin ürün bilgilerinde spiral cilt belirtilir. AJ-290 gizli spiralli olarak tanımlanır."
  },
  {
    "question": "Spiralli ajandaların ölçüleri aynı mı?",
    "answer": "AJ-190, AJ-200, AJ-250, AJ-270 ve AJ-290 için 17 x 24 cm; AJ-230 ve AJ-240 için 17,5 x 24 cm ölçüsü belirtilir. İç sayfa düzenini ve kalınlığı ayrıca karşılaştırın."
  },
  {
    "question": "Gizli spiralli ajanda hangi model?",
    "answer": "AJ-290 gizli spiral cilt sistemiyle tanımlanır. Cilt detayını ürün görsellerinden inceleyebilir, sipariş öncesinde güncel model bilgisi isteyebilirsiniz."
  },
  {
    "question": "Ajandalar hangi takvim yılına ait?",
    "answer": "Tarihli modellerde güncel takvim yılını tedarik durumuyla birlikte teyit edin. Fotoğraftaki yıl veya model kodu tek başına sipariş edilecek ürünün takvim yılını belirlemez."
  },
  {
    "question": "Spiralli ajanda fiyatına logo baskısı dahil mi?",
    "answer": "Gösterilen ürün fiyatları baskı hariç TL + KDV olarak sunulur. Logo uygulaması, adet ve varsa paketleme talepleriyle birlikte toplam teklif hazırlanır."
  }
];
export const metadata: Metadata = {
 title: "Spiralli Promosyon Ajanda Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-ajanda-aj-190-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Spiralli Ajanda Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isSpiralAgenda(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Ajanda", item: `${SITE_URL}/promosyon-ajanda` },
    { "@type": "ListItem", position: 3, name: "Spiralli Ajanda", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Spiralli Promosyon Ajanda", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-ajanda" className="underline">Promosyon Ajanda</Link> / Spiralli Ajanda</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Spiralli Promosyon Ajanda Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">Spiral ciltli yedi ajanda modelini ölçü, kapak ve iç sayfa özelliklerine göre karşılaştırın. 17 x 24 ve 17,5 x 24 cm seçenekleri ile gizli spiralli AJ-290 modelini inceleyerek firma logolu toplu siparişiniz için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-ajanda" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Ajanda Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-ajanda-aj-190-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-spiralli-ajanda-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Spiral Ciltli Ajandalar Arasında Nasıl Seçim Yapılır?</h2>
        <p>Spiralli ajanda seçerken cilt yapısının yanında yazım alanını, kapak tasarımını ve iç sayfa düzenini birlikte inceleyin. Bu listedeki ürünlerin ortak özelliği spiral cilt bilgisidir. Ölçüleri ve diğer ayrıntıları aynı değildir; kurumsal hediye siparişinizde alıcının günlük planlama alışkanlığına uygun modeli seçebilirsiniz.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Spiralli ajanda modelleri ve ölçüleri</caption><thead><tr><th scope="col" className="p-3 text-black">Modeller</th><th scope="col" className="p-3 text-black">Ölçü</th><th scope="col" className="p-3 text-black">Cilt bilgisi</th></tr></thead><tbody>{[
         ["AJ-190, AJ-200, AJ-250, AJ-270", "17 x 24 cm", "Spiral"], ["AJ-230, AJ-240", "17,5 x 24 cm", "Spiral"], ["AJ-290", "17 x 24 cm", "Gizli spiral"],
        ].map(([code, size, feature]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{size}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">17 x 24 ve 17,5 x 24 cm Seçenekleri</h3>
        <p>AJ-230 ve AJ-240 ürün bilgilerinde 17,5 x 24 cm olarak belirtilir. Diğer listelenen modeller 17 x 24 cm ölçüsündedir. Çantada taşıma veya masa üzerinde kullanım için dış ölçünün yanında kalınlığı da sorun. Birbirine yakın dış ebatlar, iç sayfa yerleşiminin ve yazım alanının tamamen aynı olduğu anlamına gelmez.</p>
        <h3 className="text-xl font-bold text-black">Gizli Spiralli AJ-290 Modeli</h3>
        <p>AJ-290, gizli spiral cilt sistemiyle diğer seçeneklerden ayrılır. Kapağın ve cildin görünümünü ürün detayındaki görsellerle değerlendirin. Kullanıcınız belirli bir açılma biçimi arıyorsa numune veya güncel ürün bilgisi üzerinden kontrol edin. Spiral cilt ifadesinden bütün modeller için aynı açılma açısı ya da sayfa çıkarma özelliği sonucu çıkarılmamalıdır.</p>
        <h3 className="text-xl font-bold text-black">İç Sayfa Düzeni ve Takvim Yılı</h3>
        <p>AJ-190, AJ-200, AJ-230, AJ-240 ve AJ-250 açıklamalarında 336 sayfa Ivory krem kâğıt bilgisi bulunur. AJ-270 ve AJ-290 tarihli iç sayfalarıyla tanımlanır. Sipariş edeceğiniz modelde güncel sayfa düzenini, sayfa sayısını ve kullanılacak takvim yılını teyit ederek karar verin.</p>
        <p>Günlük randevu takibi ile haftalık planlama farklı düzenler gerektirebilir. Ürün bilgisinde açıkça belirtilmeyen bir düzeni tüm modellerde var kabul etmeyin. Takvim yılına bağlı olmayan not alma ürünü arıyorsanız <Link href="/promosyon-defter" className="font-semibold text-black underline">tarihsiz defter modellerini</Link> karşılaştırabilirsiniz.</p>
        <h3 className="text-xl font-bold text-black">Termo Deri Kapağa Logo Uygulaması</h3>
        <p>Bu gruptaki modeller termo deri kapak bilgisiyle sunulur. Logonun konumu ve uygulanabilir ölçüsü; kapaktaki dikiş, aksesuar ve yüzey detaylarıyla birlikte değerlendirilmelidir. Gofre, sıcak baskı veya renkli uygulama isteğinizi ürün koduyla paylaşarak uygun yöntemi netleştirin. Her uygulamanın bütün kapaklara aynı sonuçla yapılabildiğini varsaymayın.</p>
        <p>Mümkünse vektörel logo dosyanızı gönderin. Firma adının yanında slogan veya kişiye özel isim isteniyorsa tasarımın tamamını belirtin. Küçük harflerin okunurluğu ve logo yerleşimi gerçek uygulama ölçüsünde incelenerek üretim öncesinde onaylanmalıdır.</p>
        <h3 className="text-xl font-bold text-black">Toplu Spiralli Ajanda Fiyatı ve Sipariş Planı</h3>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak gösterilir. Toplam sipariş bedelini karşılaştırmak için aynı model kodu, adet, logo yöntemi ve paketleme kapsamını esas alın. Kalem veya hediye kutusu istiyorsanız bunları ayrıca teklif talebinize ekleyin.</p>
        <p>Kapak rengi, adet dağılımı, güncel takvim yılı ve teslimat adresiyle teklif isteyin. Tedarik uygunluğu ve baskı onayı teslim planını etkiler; dağıtım tarihinizi baştan paylaşın. Bütün seçeneklere dönmek için <Link href="/promosyon-ajanda" className="font-semibold text-black underline">promosyon ajanda modellerini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Spiralli Ajanda Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-defter-ajanda-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Defter ve Ajanda Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
