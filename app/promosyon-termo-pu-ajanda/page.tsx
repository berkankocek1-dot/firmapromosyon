import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isThermoPuAgenda } from "@/data/agendaSubcategories";

const CATEGORY = "Ajanda";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-termo-pu-ajanda`;
const description = "Termo PU kapaklı promosyon ajandaları ölçü ve sayfa özelliklerine göre karşılaştırın. AJ-180, AJ-280, AJ-300 ve AJ-320 için logo baskılı toplu teklif alın.";
const faqItems = [
  {
    "question": "Hangi ajandalar termo PU kapaklı olarak listeleniyor?",
    "answer": "AJ-180, AJ-280, AJ-300 ve AJ-320 modellerinin ürün bilgilerinde termo PU kapak belirtilir. Bu grup kapak malzemesine göre oluşturulmuştur."
  },
  {
    "question": "Termo PU ajandaların ölçüleri nedir?",
    "answer": "AJ-180, AJ-280 ve AJ-320 17 x 24 cm; AJ-300 ise 20 x 28 cm olarak tanımlanır. Taşıma ve kullanım ihtiyacınıza göre dış ölçüyü ve kalınlığı birlikte değerlendirin."
  },
  {
    "question": "Telefon bölmeli ön cep hangi modelde bulunuyor?",
    "answer": "AJ-180 ürün bilgilerinde telefon bölmeli ön cep belirtilir. Bölmenin ölçüsünü ve kullanacağınız cihazla uyumunu sipariş öncesinde teyit edin; diğer modellerde aynı özellik bulunduğunu varsaymayın."
  },
  {
    "question": "Termo PU kapaklı ajandaların sayfa sayısı aynı mı?",
    "answer": "AJ-180 ve AJ-300 açıklamalarında 336 sayfa; AJ-280 ve AJ-320 açıklamalarında 320 sayfa bilgisi bulunur. Güncel iç sayfa düzeni ve tarihli modellerin takvim yılı ayrıca teyit edilmelidir."
  },
  {
    "question": "Fiyatlara logo baskısı ve KDV dahil mi?",
    "answer": "Ürün kartlarında fiyatlar baskı hariç TL + KDV olarak gösterilir. Model, adet, logo yöntemi ve varsa kutu veya paketleme talebinizle toplam teklif isteyebilirsiniz."
  }
];
export const metadata: Metadata = {
 title: "Termo PU Promosyon Ajanda Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Termo PU Ajanda Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isThermoPuAgenda(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Ajanda", item: `${SITE_URL}/promosyon-ajanda` },
    { "@type": "ListItem", position: 3, name: "Termo PU Ajanda", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Termo PU Promosyon Ajanda", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-ajanda" className="underline">Promosyon Ajanda</Link> / Termo PU Ajanda</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Termo PU Promosyon Ajanda Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">AJ-180, AJ-280, AJ-300 ve AJ-320 termo PU kapaklı ajandaları inceleyin. 17 x 24 cm ve 20 x 28 cm seçeneklerini sayfa sayısı ve kapak ayrıntılarıyla karşılaştırarak firma logolu toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-ajanda" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Ajanda Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} termo PU ajanda modeli gösteriliyor</p>
      <section aria-label="Termo PU ajanda ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Ajanda</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Termo PU Kapaklı Ajandalarda Model Farkları</h2>
        <p>Bu grupta kapak bilgisi termo PU olarak belirtilen dört ajanda yer alır. Aynı kapak grubunda olmaları, ebatlarının veya iç sayfa yapılarının da aynı olduğu anlamına gelmez. Çalışan, müşteri veya bayi hediyesi seçerken günlük kullanım biçimini ve firmanızın logo yerleşimini birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Termo PU ajanda ölçü ve sayfa karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ölçü</th><th scope="col" className="p-3 text-white">Sayfa bilgisi</th></tr></thead><tbody>{[
         ["AJ-180", "17 x 24 cm", "336 sayfa"], ["AJ-280", "17 x 24 cm", "320 sayfa"], ["AJ-300", "20 x 28 cm", "336 sayfa"], ["AJ-320", "17 x 24 cm", "320 sayfa"],
        ].map(([code, size, pages]) => <tr key={code} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{code}</th><td className="p-3">{size}</td><td className="p-3">{pages}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">17 x 24 cm mi, 20 x 28 cm mi?</h3>
        <p>AJ-180, AJ-280 ve AJ-320 için 17 x 24 cm ölçüsü belirtilir. AJ-300 ise 20 x 28 cm dış ölçüsüyle daha büyük bir seçenektir. Masa üzerinde kullanılacak bir ajanda ile sürekli çantada taşınacak bir ajanda için farklı ebatlar tercih edilebilir. Kapalı ürünün kalınlığını ve varsa paketleme ölçüsünü de teklif sırasında sorun.</p>
        <p>Sayfa sayısı tek başına kullanılabilir yazım alanını göstermez. Günlük veya haftalık planlama düzeni, tarih alanları ve ek bilgi sayfaları bu alanı etkileyebilir. Kullanıcınızın ihtiyacını belirleyerek iç sayfa örneği isteyin; dış ebatlardan belirli bir iç düzen sonucu çıkarmayın.</p>
        <h3 className="text-xl font-bold text-white">AJ-180 Modelindeki Ön Cep</h3>
        <p>AJ-180, ürün açıklamasında telefon bölmeli ön cep bilgisiyle ayrılır. Cebin ölçüsünü, yerleşimini ve kullanacağınız cihazla uyumunu kontrol edin. Bu detay logo uygulanacak alanın seçiminde de dikkate alınmalıdır. AJ-280, AJ-300 ve AJ-320 için aynı cep özelliği bulunduğu kabul edilmemelidir.</p>
        <h3 className="text-xl font-bold text-white">Kapak Tasarımı ve Logo Alanı</h3>
        <p>AJ-280 açıklamasında desenli kapak tasarımı belirtilir. Diğer modellerde de yüzey, aksesuar ve dikiş ayrıntılarını görsellerden inceleyin. Termo PU kapak ifadesi bütün yüzeylerin aynı dokuda olduğu veya bütün baskı yöntemlerine aynı şekilde uygun olduğu anlamına gelmez.</p>
        <p>Logonun genişliği, ince çizgileri ve renkleri kapak üzerinde uygulanabilir alanla birlikte değerlendirilir. Renkli baskı veya kabartmasız logo görünümü gibi beklentilerinizi teklif talebinde açıklayın. Seçilen yöntemin modele uygunluğunu ve tasarım yerleşimini üretim öncesinde netleştirin.</p>
        <h3 className="text-xl font-bold text-white">320 ve 336 Sayfalı Seçenekler</h3>
        <p>Ürün açıklamalarında AJ-180 ve AJ-300 için 336 sayfa, AJ-280 ve AJ-320 için 320 sayfa bilgisi bulunur. Güncel tedarik edilen üründe sayfa sayısını ve iç düzeni ayrıca teyit edin. Tarihli siparişlerde kullanılacak takvim yılını açıkça belirtin; yalnız kapak fotoğrafındaki yıl bilgisine dayanmayın.</p>
        <h3 className="text-xl font-bold text-white">Firma Logolu Toplu Ajanda Teklifi</h3>
        <p>Teklif almak için model kodunu, kapak rengini ve sipariş adedini paylaşın. Mümkünse vektörel logo dosyanızı, uygulama konumunu ve varsa kişiye özel isim taleplerini ekleyin. Kalem, kutu veya ayrı paketleme istiyorsanız kapsamını baştan belirtin.</p>
        <p>Kartlardaki ürün fiyatları baskı hariç TL + KDV olarak gösterilir. Toplam bedel ürün, logo uygulaması ve seçilen ek hizmetlerle belirlenir. Güncel tedarik uygunluğu ve baskı onayı teslim planını etkiler; dağıtım tarihini ve teslimat adresini teklif aşamasında bildirin.</p>
        <p>Cilt yapısına göre alternatif için <Link href="/promosyon-spiralli-ajanda" className="font-semibold text-white underline">spiralli ajanda modellerini</Link>, tüm seçenekler için <Link href="/promosyon-ajanda" className="font-semibold text-white underline">ana ajanda kategorisini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Termo PU Ajanda Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
