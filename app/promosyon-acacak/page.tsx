import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
const openingSlugs = new Set(["promosyon-kapak-acacak-ac-100", "promosyon-uzun-acacak-ac-110"]);

const CATEGORY = "İmalat Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-acacak";
const title = "Promosyon Açacak Modelleri ve Fiyatları";
const description = "Logo baskılı AÇ-100 kapak açacak ve AÇ-110 uzun açacak modellerini karşılaştırın. UV baskı ve minimum 100 adet toptan sipariş için teklif alın.";
const faqItems = [{"question": "Promosyon açacak minimum sipariş adedi kaçtır?", "answer": "AÇ-100 ve AÇ-110 modellerinde minimum sipariş 100 adettir. Renk ve baskı kapsamı teklif aşamasında netleştirilir."}, {"question": "Logo baskısı hangi yöntemle yapılır?", "answer": "Her iki model için UV baskı belirtilir. Logo dosyası, renkler ve uygulama alanı tasarım çalışmasında değerlendirilir."}, {"question": "Açacak fiyatına baskı dahil mi?", "answer": "UV baskı için tasarıma göre ayrıca teklif hazırlanır. Ürün bedeli, baskı ve KDV kapsamı nihai teklifte belirtilir."}, {"question": "AÇ-100 ile AÇ-110 arasındaki fark nedir?", "answer": "AÇ-100 kare formda ve 7,7 × 7,7 cm ölçüsündedir. AÇ-110 uzun formda ve 5 × 11 cm ölçüsündedir. Bu değerler ürün ölçüsüdür; baskı alanı ayrıca belirlenir."}, {"question": "Açacaklar mıknatıslı mı?", "answer": "Güncel ürün bilgilerinde mıknatıs özelliği belirtilmemiştir. Bu özellik talebiniz varsa sipariş öncesinde teyit edilmelidir."}, {"question": "Toptan siparişin teslim süresi nedir?", "answer": "Teslim süresi adet, stok ve baskı planına göre belirlenir. Ürün kodu, adet, logo, teslim yeri ve ihtiyaç tarihinizi paylaşarak teklif alabilirsiniz."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-kapak-acacak-ac-100-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(p => openingSlugs.has(p.slug)));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"İmalat Ürünler",item:SITE_URL+"/promosyon-imalat-urunler"},
   {"@type":"ListItem",position:3,name:"Açacak",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-imalat-urunler" className="underline">İmalat Ürünler</Link> / Açacak</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Açacak Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">AÇ-100 kapak açacak ve AÇ-110 uzun açacak modellerini inceleyin. UV logo baskısı ve minimum 100 adet sipariş için tasarımınızı paylaşın. Ürün ve baskı kapsamını içeren güncel teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-imalat-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm İmalat Ürünleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-kapak-acacak-ac-100-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-acacak-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"UV baskı uygulaması için tasarıma göre teklif hazırlanır."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Logo Baskılı Açacak Seçerken Neye Bakılmalı?</h2>
   <p>Promosyon açacak, içecek servisiyle ilişkili kafe ve restoran kampanyalarında, bayi çalışmalarında ve etkinlik dağıtımlarında değerlendirilebilir. Model seçerken ürün formunu, logo yerleşimini ve dağıtım planını birlikte ele alın. AÇ-100 kare formuyla, AÇ-110 ise uzun gövdesiyle ayrılır.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">AÇ-100 ve AÇ-110 açacak karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve özellik</th><th scope="col" className="p-3">Sipariş ve baskı kapsamı</th></tr></thead><tbody>{[
    ["AÇ-100","7,7 × 7,7 cm kare formda kapak açacak","Minimum 100 adet; UV baskı için tasarıma göre teklif"],
    ["AÇ-110","5 × 11 cm uzun açacak","Minimum 100 adet; UV baskı için tasarıma göre teklif"]
   ].map(([model,feature,scope])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{feature}</td><td className="p-3">{scope}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Kapak Açacak ve Uzun Açacak Arasındaki Fark</h3>
   <p>AÇ-100 için 7,7 × 7,7 cm, AÇ-110 için 5 × 11 cm ürün ölçüsü belirtilir. Kare veya uzun form arasında seçim yaparken logonuzun oranını ve ürünü nasıl sunacağınızı değerlendirin. Belirtilen ürün ölçüleri doğrudan baskı alanı değildir; kullanılabilir uygulama alanı tasarım çalışmasında netleştirilir.</p>
   <p>Güncel açıklamalarda mıknatıs özelliği belirtilmemiştir. Mıknatıslı bir açacak istiyorsanız sipariş öncesinde bu talebi ayrıca iletin. Malzeme ve ek işlevlerle ilgili beklentilerinizi de model bazında teyit edin.</p>
   <h3 className="text-xl font-bold text-black">UV Logo Baskısı İçin Tasarım Hazırlığı</h3>
   <p>Her iki modelde de UV baskı seçeneği belirtilir. Logo dosyası, marka adı ve iletişim bilgilerinin yerleşimi seçilen ürünün uygulanabilir baskı alanına göre hazırlanır. Logonuzu mümkünse vektörel dosyayla paylaşın; küçük yazıları gerçek uygulama boyutunda kontrol edin.</p>
   <p>Baskı konumu, renkler ve tasarım boyutu üretim öncesinde netleştirilmelidir. UV baskı bedeli tasarıma göre ayrıca teklif edilir. Ürün kartındaki fiyatı baskı dahil toplam tutar olarak değerlendirmeyin.</p>
   <h3 className="text-xl font-bold text-black">Toptan Açacak Fiyatları ve Minimum Sipariş</h3>
   <p>AÇ-100 ve AÇ-110 için minimum sipariş 100 adettir. Toptan promosyon açacak teklifinde ürün bedeli, adet ve logo uygulaması birlikte değerlendirilir. Fiyatlara KDV eklenir; nihai teklifin ürün ve baskı kapsamını kontrol edin.</p>
   <p>Renk, stok ve teslim koşulları sipariş öncesinde netleştirilir. Farklı teklifleri karşılaştırırken aynı model, adet ve tasarım kapsamını esas alın. Paketleme veya teslimatla ilgili ek taleplerinizi teklif aşamasında paylaşın.</p>
   <h3 className="text-xl font-bold text-black">Kurumsal Dağıtım ve Teslim Planı</h3>
   <p>Kafe ve restoran tanıtımları, açılışlar ve etkinlik paketleri için logo baskılı kapak açacak düşünülebilir. Kullanım ihtiyacına uygun ürün formunu belirledikten sonra model kodunu, adedi, logo dosyasını ve teslim yerini paylaşın. Termin, stok ve uygulama planına göre belirlenir.</p>
   <p>Anahtara takılan seçenekler için <Link href="/promosyon-acacakli-anahtarlik" className="font-semibold text-black underline">açacaklı anahtarlık modellerini</Link> inceleyebilirsiniz. Diğer ürün türlerini karşılaştırmak için <Link href="/promosyon-imalat-urunler" className="font-semibold text-black underline">imalat promosyon ürünlerine</Link> göz atabilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Açacak Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>

      <section aria-labelledby="acacak-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="acacak-rehberi-baslik" className="text-xl font-bold !text-black">Açacak Seçimini ve Logo Baskısını Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Bağımsız açacak ve açacaklı anahtarlığı kullanım, form ve logo alanıyla karşılaştırın; dağıtım ve baskı kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-acacak-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-acacak-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Açacak Seçim ve Baskı Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Bağımsız açacak ve açacaklı anahtarlığı kullanım, form, logo alanı ve dağıtım biçimiyle karşılaştırın. Baskı yerleşimi ve toplu sipariş kapsamını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
 </div></div>;
}
