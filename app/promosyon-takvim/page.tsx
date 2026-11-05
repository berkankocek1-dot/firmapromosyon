import type { Metadata } from "next";
import Link from "next/link";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import TakvimProductGrid from "./TakvimProductGrid";
const CATEGORY = "Takvimler";
const URL = "https://www.firmapromosyon.com/promosyon-takvim";
const title = "Promosyon Takvim Modelleri | Logo Baskılı Masa ve Gemici Takvimleri";
const description = "Logo baskılı masa ve gemici takvimlerini ölçü, karton ve spiral yapısına göre karşılaştırın. Jumbo, sıvama ve taslama takvimlerde toplu sipariş için teklif alın.";
export const metadata: Metadata = {title,description,alternates:{canonical:URL},openGraph:{title,description,url:URL,type:"website"}};
const faqs = [
 {q:"Masa takvimi ile gemici takvimi arasındaki fark nedir?",a:"Masa takvimleri masaüstünde, gemici takvimleri ise duvarda kullanılmak üzere sunulur. Kullanım yeri, toplam ölçü ve reklam alanı birlikte değerlendirilmelidir."},
 {q:"Hazır masa takviminde logo nereye basılır?",a:"MTB-225 hazır masa takviminde baskı taşıyıcı bölüme uygulanır. Hazır takvim yapraklarının değişmesi standart kapsam olarak sunulmaz; istenen çalışma teklifte netleştirilir."},
 {q:"Sıvama ve taslama gemici takvimleri nasıl karşılaştırılır?",a:"Sıvama modellerde Amerikan Bristol katmanları, taslama modellerde ise mukavva üzeri kaplama belirtilir. Modelin karton yapısı, dış ölçüsü ve reklam alanı ürün sayfasından kontrol edilmelidir."},
 {q:"Görsellerdeki yıl mı teslim edilir?",a:"Görseller örnek baskıları gösterir ve eski yıllar içerebilir. Sipariş edilecek takvim yılı, yaprak düzeni ve tasarım sipariş öncesinde teyit edilir."},
 {q:"Takvim fiyatlarına logo baskısı dahil mi?",a:"Listelenen birim fiyatlar ürün referansıdır. Baskı ve kişiselleştirme kapsamı, adet ve tasarıma göre teklifte netleştirilir. Fiyat belirtilmeyen modeller için teklif alınmalıdır."},
 {q:"Minimum adet ve teslim süresi nedir?",a:"Ürün modeli, talep edilen adet, takvim yılı ve baskı çalışmasına göre belirlenir. Güncel tedarik durumu ve teslim planı teklif aşamasında paylaşılır."}
];
function JsonLd({data}:{data:Record<string,unknown>}) {return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>;}
export default function TakvimPage() {
 const list = sortProductsByCode(visibleProducts.filter(p=>p.category===CATEGORY));
 const cards = list.map(({id,slug,title,image,shortDesc,price})=>({id,slug,title,image,shortDesc,price}));
 return <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Ana Sayfa",item:"https://www.firmapromosyon.com"},{"@type":"ListItem",position:2,name:"Promosyon Takvim",item:URL}]}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:title,description,url:URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,url:`https://www.firmapromosyon.com/urunler/${p.slug}`,name:p.title}))}}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}}/>
  <header className="mb-8 rounded-3xl bg-black p-6 text-white md:p-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/urunler" className="underline">Ürünler</Link> / Promosyon Takvim</nav>
   <h1 className="text-3xl font-extrabold md:text-5xl">Logo Baskılı Promosyon Takvim Modelleri</h1>
   <p className="mt-5 max-w-4xl leading-8">Masa ve gemici takvimlerini kullanım yeri, ölçü ve taşıyıcı yapısına göre inceleyin. Hazır masa takvimlerinden jumbo duvar modellerine kadar farklı seçenekleri karşılaştırın; adet, takvim yılı ve logo çalışmanızla toplu sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Takvim İçin Teklif Al</Link><Link href="#takvim-modelleri" className="rounded-xl border border-white px-5 py-3">Modelleri İncele</Link></div>
  </header>
  <div id="takvim-modelleri" className="scroll-mt-24"><TakvimProductGrid products={cards}/></div>
  <section className="mt-10 space-y-7 rounded-2xl bg-white p-6 text-gray-900 md:p-8">
   <h2 className="text-2xl font-bold">Firmanız İçin Promosyon Takvim Nasıl Seçilir?</h2>
   <p className="leading-8">Takvim seçiminde ilk adım ürünün nerede kullanılacağını belirlemektir. Masaüstü kullanımında taşıyıcının kapladığı alan, duvar kullanımında ise asılacağı yüzeye uygun en ve boy önemlidir. Ürün ölçüsü ile reklam alanı aynı değildir. Logo ve iletişim bilgilerinin sığacağı alanı ürünün teknik özelliklerinden kontrol ederek tasarımı bu bölüme göre hazırlamak gerekir.</p>
   <h3 className="text-xl font-bold">Masa Takvimleri: MTB-220 ve Hazır MTB-225</h3>
   <p className="leading-8">MTB-220, 17 x 20 cm ölçüsünde kuşe taslama mukavva taşıyıcılı bir masa takvimidir. MTB-225 ise 20 x 14 x 7 cm taşıyıcı ve 13 hazır yaprakla sunulur. MTB-225’te firma baskısı taşıyıcı kısma uygulanır. Hazır yapraklı ürün ile özel yaprak tasarımı istenen siparişin kapsamı farklı olabileceğinden tasarım beklentisi teklif öncesinde paylaşılmalıdır.</p>
   <h3 className="text-xl font-bold">Gemici Takvimleri: Boyut ve Yaprak Düzeni</h3>
   <p className="leading-8">Gemici takvimlerinde tek parça ve üç parça spiralli modeller bulunur. MTB-230, 32 x 48 cm ölçüsü ve 12 yaprağıyla; MTB-240 ise 31 x 63 cm ölçüsü ve 6 yaprağıyla sunulur. Beş aylık düzen isteyenler MTB-290 ve MTB-300 modellerini inceleyebilir. Spiral yapısı ve blok ölçüsü, benzer dış boyuta sahip ürünlerin kullanımını farklılaştırabilir.</p>
   <h3 className="text-xl font-bold">Jumbo, Sıvama ve Taslama Seçenekleri</h3>
   <p className="leading-8">MTB-260 serisindeki jumbo modeller 39,6 x 83 cm boyutundadır. JGT, JSG ve JTG kodları taşıyıcı malzemeleri bakımından ayrılır. 32 x 77 cm boyutundaki MTB-270 serisinde ise klasik, sıvama ve taslama seçenekleri vardır. Karşılaştırmayı yalnız fiyat üzerinden yapmak yerine karton türü, kalınlık ve reklam alanını birlikte değerlendirmek daha doğru ürün seçimine yardımcı olur.</p>
   <h3 className="text-xl font-bold">Takvim Yılı ve Logo Tasarımının Hazırlanması</h3>
   <p className="leading-8">Siparişte kullanılacak yılı açıkça belirtin. Görsellerdeki eski yıllar ve firma logoları örnek uygulamalardır; teslim edilecek çalışmanın yılı ve içeriği ayrıca teyit edilir. Firma adı, logo, web adresi ve iletişim bilgilerini paylaşarak yerleşim hazırlanmasını isteyebilirsiniz. Küçük yazılar ve ayrıntılı logolar için okunabilirlik, tasarım onayında kontrol edilmelidir.</p>
   <h3 className="text-xl font-bold">Promosyon Takvim Fiyatını Neler Belirler?</h3>
   <p className="leading-8">Modelin ölçüsü, yaprak ve taşıyıcı malzemesi, adet ve kişiselleştirme kapsamı toplam teklifi etkiler. Listede fiyatı bulunmayan MTB-220 için güncel teklif alınmalıdır. Teslim süresi ve tedarik durumu seçilen takvim yılı ve sipariş kapsamına göre belirlenir. Teklif talebine ürün kodunu eklemek, aynı boyuttaki farklı modellerin karışmasını önler.</p>
   <p className="leading-8">Yıl sonu kurumsal hediye planınızda <Link href="/promosyon-ajanda" className="font-semibold underline">ajanda modellerini</Link>, <Link href="/promosyon-defter" className="font-semibold underline">tarihsiz defterleri</Link> veya <Link href="/promosyon-kalem" className="font-semibold underline">logo baskılı kalemleri</Link> de inceleyebilirsiniz. Birlikte seçilen ürünler için paket içeriği ayrıca planlanır.</p>
  </section>
  <section className="mt-8 rounded-2xl bg-white p-6 text-gray-900 md:p-8"><h2 className="text-2xl font-bold">Promosyon Takvim Hakkında Sık Sorulan Sorular</h2><div className="mt-5 divide-y">{faqs.map(f=><details key={f.q} className="py-4"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-3 leading-7">{f.a}</p></details>)}</div></section>
 <section className="mt-12 rounded-2xl bg-white p-6 text-black"><h2 className="text-xl font-bold !text-black">Promosyon Gemici Takvimleri</h2><p className="mt-2 text-sm leading-6 !text-gray-700">Gemici takvimlerini ölçü, spiral, sıvama ve taslama özellikleriyle karşılaştırın.</p><Link href="/promosyon-gemici-takvimi" className="mt-3 inline-flex font-semibold !text-black underline">Gemici Takvimi Modellerini İncele →</Link></section>
 </div>;
}
