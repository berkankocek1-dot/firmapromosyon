import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-ajanda-aj-180-v2.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Termo PU Ajanda Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isThermoPuAgenda(p)));
 return (
  <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Ajanda", item: `${SITE_URL}/promosyon-ajanda` },
    { "@type": "ListItem", position: 3, name: "Termo PU Ajanda", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Termo PU Promosyon Ajanda", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-ajanda" className="underline">Promosyon Ajanda</Link> / Termo PU Ajanda</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
    <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Termo PU Promosyon Ajanda Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">AJ-180, AJ-280, AJ-300 ve AJ-320 termo PU kapaklı ajandaları inceleyin. 17 x 24 cm ve 20 x 28 cm seçeneklerini sayfa sayısı ve kapak ayrıntılarıyla karşılaştırarak firma logolu toplu sipariş için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-ajanda" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Ajanda Modelleri</Link></div>
   </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

      <FpCategoryCatalog anchorId="promosyon-termo-pu-ajanda-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
      <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-black">Termo PU Kapaklı Ajandalarda Model Farkları</h2>
        <p>Bu grupta kapak bilgisi termo PU olarak belirtilen dört ajanda yer alır. Aynı kapak grubunda olmaları, ebatlarının veya iç sayfa yapılarının da aynı olduğu anlamına gelmez. Çalışan, müşteri veya bayi hediyesi seçerken günlük kullanım biçimini ve firmanızın logo yerleşimini birlikte değerlendirin.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Termo PU ajanda ölçü ve sayfa karşılaştırması</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ölçü</th><th scope="col" className="p-3 text-black">Sayfa bilgisi</th></tr></thead><tbody>{[
         ["AJ-180", "17 x 24 cm", "336 sayfa"], ["AJ-280", "17 x 24 cm", "320 sayfa"], ["AJ-300", "20 x 28 cm", "336 sayfa"], ["AJ-320", "17 x 24 cm", "320 sayfa"],
        ].map(([code, size, pages]) => <tr key={code} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{code}</th><td className="p-3">{size}</td><td className="p-3">{pages}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-black">17 x 24 cm mi, 20 x 28 cm mi?</h3>
        <p>AJ-180, AJ-280 ve AJ-320 için 17 x 24 cm ölçüsü belirtilir. AJ-300 ise 20 x 28 cm dış ölçüsüyle daha büyük bir seçenektir. Masa üzerinde kullanılacak bir ajanda ile sürekli çantada taşınacak bir ajanda için farklı ebatlar tercih edilebilir. Kapalı ürünün kalınlığını ve varsa paketleme ölçüsünü de teklif sırasında sorun.</p>
        <p>Sayfa sayısı tek başına kullanılabilir yazım alanını göstermez. Günlük veya haftalık planlama düzeni, tarih alanları ve ek bilgi sayfaları bu alanı etkileyebilir. Kullanıcınızın ihtiyacını belirleyerek iç sayfa örneği isteyin; dış ebatlardan belirli bir iç düzen sonucu çıkarmayın.</p>
        <h3 className="text-xl font-bold text-black">AJ-180 Modelindeki Ön Cep</h3>
        <p>AJ-180, ürün açıklamasında telefon bölmeli ön cep bilgisiyle ayrılır. Cebin ölçüsünü, yerleşimini ve kullanacağınız cihazla uyumunu kontrol edin. Bu detay logo uygulanacak alanın seçiminde de dikkate alınmalıdır. AJ-280, AJ-300 ve AJ-320 için aynı cep özelliği bulunduğu kabul edilmemelidir.</p>
        <h3 className="text-xl font-bold text-black">Kapak Tasarımı ve Logo Alanı</h3>
        <p>AJ-280 açıklamasında desenli kapak tasarımı belirtilir. Diğer modellerde de yüzey, aksesuar ve dikiş ayrıntılarını görsellerden inceleyin. Termo PU kapak ifadesi bütün yüzeylerin aynı dokuda olduğu veya bütün baskı yöntemlerine aynı şekilde uygun olduğu anlamına gelmez.</p>
        <p>Logonun genişliği, ince çizgileri ve renkleri kapak üzerinde uygulanabilir alanla birlikte değerlendirilir. Renkli baskı veya kabartmasız logo görünümü gibi beklentilerinizi teklif talebinde açıklayın. Seçilen yöntemin modele uygunluğunu ve tasarım yerleşimini üretim öncesinde netleştirin.</p>
        <h3 className="text-xl font-bold text-black">320 ve 336 Sayfalı Seçenekler</h3>
        <p>Ürün açıklamalarında AJ-180 ve AJ-300 için 336 sayfa, AJ-280 ve AJ-320 için 320 sayfa bilgisi bulunur. Güncel tedarik edilen üründe sayfa sayısını ve iç düzeni ayrıca teyit edin. Tarihli siparişlerde kullanılacak takvim yılını açıkça belirtin; yalnız kapak fotoğrafındaki yıl bilgisine dayanmayın.</p>
        <h3 className="text-xl font-bold text-black">Firma Logolu Toplu Ajanda Teklifi</h3>
        <p>Teklif almak için model kodunu, kapak rengini ve sipariş adedini paylaşın. Mümkünse vektörel logo dosyanızı, uygulama konumunu ve varsa kişiye özel isim taleplerini ekleyin. Kalem, kutu veya ayrı paketleme istiyorsanız kapsamını baştan belirtin.</p>
        <p>Kartlardaki ürün fiyatları baskı hariç TL + KDV olarak gösterilir. Toplam bedel ürün, logo uygulaması ve seçilen ek hizmetlerle belirlenir. Güncel tedarik uygunluğu ve baskı onayı teslim planını etkiler; dağıtım tarihini ve teslimat adresini teklif aşamasında bildirin.</p>
        <p>Cilt yapısına göre alternatif için <Link href="/promosyon-spiralli-ajanda" className="font-semibold text-black underline">spiralli ajanda modellerini</Link>, tüm seçenekler için <Link href="/promosyon-ajanda" className="font-semibold text-black underline">ana ajanda kategorisini</Link> inceleyebilirsiniz.</p>
      </section>
      <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Termo PU Ajanda Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
      <section aria-labelledby="defter-ajanda-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="defter-ajanda-secim-rehberi-baslik" className="text-xl font-bold !text-black">Defter ve Ajanda Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Boyut, iç sayfa, kapak ve cilt seçeneklerini karşılaştırın; takvim yılı, logo ve toplu sipariş onayını birlikte değerlendirin.</p>
        <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-defter-ajanda-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Defter ve Ajanda Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon defter ve ajandayı kullanım amacı, boyut, iç sayfa, kapak ve cilt yapısıyla karşılaştırın. Takvim yılı, logo, numune ve toplu sipariş onayını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
    </div></div>
  );
}
