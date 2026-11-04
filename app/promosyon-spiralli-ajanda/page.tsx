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
 openGraph: { title: "Logo Baskılı Spiralli Ajanda Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isSpiralAgenda(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Ajanda", item: `${SITE_URL}/promosyon-ajanda` },
    { "@type": "ListItem", position: 3, name: "Spiralli Ajanda", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Spiralli Promosyon Ajanda", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-ajanda" className="underline">Promosyon Ajanda</Link> / Spiralli Ajanda</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Spiralli Promosyon Ajanda Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Spiral ciltli yedi ajanda modelini ölçü, kapak ve iç sayfa özelliklerine göre karşılaştırın. 17 x 24 ve 17,5 x 24 cm seçenekleri ile gizli spiralli AJ-290 modelini inceleyerek firma logolu toplu siparişiniz için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-ajanda" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Ajanda Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} spiralli ajanda modeli gösteriliyor</p>
      <section aria-label="Spiralli ajanda ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Ajanda</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Spiral Ciltli Ajandalar Arasında Nasıl Seçim Yapılır?</h2>
        <p>Spiralli ajanda seçerken cilt yapısının yanında yazım alanını, kapak tasarımını ve iç sayfa düzenini birlikte inceleyin. Bu listedeki ürünlerin ortak özelliği spiral cilt bilgisidir. Ölçüleri ve diğer ayrıntıları aynı değildir; kurumsal hediye siparişinizde alıcının günlük planlama alışkanlığına uygun modeli seçebilirsiniz.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Spiralli ajanda modelleri ve ölçüleri</caption><thead><tr><th scope="col" className="p-3 text-white">Modeller</th><th scope="col" className="p-3 text-white">Ölçü</th><th scope="col" className="p-3 text-white">Cilt bilgisi</th></tr></thead><tbody>{[
         ["AJ-190, AJ-200, AJ-250, AJ-270", "17 x 24 cm", "Spiral"], ["AJ-230, AJ-240", "17,5 x 24 cm", "Spiral"], ["AJ-290", "17 x 24 cm", "Gizli spiral"],
        ].map(([code, size, feature]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{size}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">17 x 24 ve 17,5 x 24 cm Seçenekleri</h3>
        <p>AJ-230 ve AJ-240 ürün bilgilerinde 17,5 x 24 cm olarak belirtilir. Diğer listelenen modeller 17 x 24 cm ölçüsündedir. Çantada taşıma veya masa üzerinde kullanım için dış ölçünün yanında kalınlığı da sorun. Birbirine yakın dış ebatlar, iç sayfa yerleşiminin ve yazım alanının tamamen aynı olduğu anlamına gelmez.</p>
        <h3 className="text-xl font-bold text-white">Gizli Spiralli AJ-290 Modeli</h3>
        <p>AJ-290, gizli spiral cilt sistemiyle diğer seçeneklerden ayrılır. Kapağın ve cildin görünümünü ürün detayındaki görsellerle değerlendirin. Kullanıcınız belirli bir açılma biçimi arıyorsa numune veya güncel ürün bilgisi üzerinden kontrol edin. Spiral cilt ifadesinden bütün modeller için aynı açılma açısı ya da sayfa çıkarma özelliği sonucu çıkarılmamalıdır.</p>
        <h3 className="text-xl font-bold text-white">İç Sayfa Düzeni ve Takvim Yılı</h3>
        <p>AJ-190, AJ-200, AJ-230, AJ-240 ve AJ-250 açıklamalarında 336 sayfa Ivory krem kâğıt bilgisi bulunur. AJ-270 ve AJ-290 tarihli iç sayfalarıyla tanımlanır. Sipariş edeceğiniz modelde güncel sayfa düzenini, sayfa sayısını ve kullanılacak takvim yılını teyit ederek karar verin.</p>
        <p>Günlük randevu takibi ile haftalık planlama farklı düzenler gerektirebilir. Ürün bilgisinde açıkça belirtilmeyen bir düzeni tüm modellerde var kabul etmeyin. Takvim yılına bağlı olmayan not alma ürünü arıyorsanız <Link href="/promosyon-defter" className="font-semibold text-white underline">tarihsiz defter modellerini</Link> karşılaştırabilirsiniz.</p>
        <h3 className="text-xl font-bold text-white">Termo Deri Kapağa Logo Uygulaması</h3>
        <p>Bu gruptaki modeller termo deri kapak bilgisiyle sunulur. Logonun konumu ve uygulanabilir ölçüsü; kapaktaki dikiş, aksesuar ve yüzey detaylarıyla birlikte değerlendirilmelidir. Gofre, sıcak baskı veya renkli uygulama isteğinizi ürün koduyla paylaşarak uygun yöntemi netleştirin. Her uygulamanın bütün kapaklara aynı sonuçla yapılabildiğini varsaymayın.</p>
        <p>Mümkünse vektörel logo dosyanızı gönderin. Firma adının yanında slogan veya kişiye özel isim isteniyorsa tasarımın tamamını belirtin. Küçük harflerin okunurluğu ve logo yerleşimi gerçek uygulama ölçüsünde incelenerek üretim öncesinde onaylanmalıdır.</p>
        <h3 className="text-xl font-bold text-white">Toplu Spiralli Ajanda Fiyatı ve Sipariş Planı</h3>
        <p>Ürün kartlarındaki fiyatlar baskı hariç TL + KDV olarak gösterilir. Toplam sipariş bedelini karşılaştırmak için aynı model kodu, adet, logo yöntemi ve paketleme kapsamını esas alın. Kalem veya hediye kutusu istiyorsanız bunları ayrıca teklif talebinize ekleyin.</p>
        <p>Kapak rengi, adet dağılımı, güncel takvim yılı ve teslimat adresiyle teklif isteyin. Tedarik uygunluğu ve baskı onayı teslim planını etkiler; dağıtım tarihinizi baştan paylaşın. Bütün seçeneklere dönmek için <Link href="/promosyon-ajanda" className="font-semibold text-white underline">promosyon ajanda modellerini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Spiralli Ajanda Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
