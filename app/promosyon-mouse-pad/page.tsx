import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMousePad } from "@/data/manufacturingSubcategories";

const CATEGORY = "İmalat Ürünler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-mouse-pad";
const title = "Promosyon Mouse Pad Modelleri ve Fiyatları";
const description = "Logo baskılı MP-600 ve bilek destekli MP-650 mouse pad modellerini karşılaştırın. 18 × 22 cm ölçü, baskı seçenekleri ve adede göre fiyat için teklif alın.";
const faqItems = [{"question": "Promosyon mouse pad modellerinin ölçüsü nedir?", "answer": "MP-600 ve MP-650 için 18 × 22 cm ürün ölçüsü belirtilir. Bu ölçü doğrudan kullanılabilir baskı alanı değildir; tasarım yerleşimi ayrıca netleştirilir."}, {"question": "MP-600 ile MP-650 arasındaki fark nedir?", "answer": "MP-650 bilek desteği bulunan modeldir. MP-600 standart mouse pad seçeneğidir. İki modelde de ofset ve dijital baskı seçenekleri belirtilir."}, {"question": "Mouse pad minimum sipariş miktarı kaç adet?", "answer": "Mevcut ürün bilgilerinde her iki model için minimum 500 adet belirtilir. Ancak kartlarda görünen fiyatın esas alındığı miktar 1.000 adettir; 500 adet için ayrıca teklif alın."}, {"question": "Gösterilen mouse pad fiyatına baskı ve KDV dahil mi?", "answer": "Gösterilen fiyat 1.000 adet sipariş için baskı dahildir. Fiyata KDV eklenir. 500 adet ve diğer miktarlar için baskı kapsamını da içeren güncel teklif hazırlanır."}, {"question": "Her mouse ile uyumlu mu ve teslim süresi nedir?", "answer": "Kullanılacak mouse ve yüzey uyumu sipariş öncesinde değerlendirilir; tüm cihazlar için uyum taahhüt edilmez. Teslim süresi adet, tedarik ve uygulama planına göre teklifte netleştirilir."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-mouse-pad-mp-600-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isMousePad));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"İmalat Ürünler",item:SITE_URL+"/promosyon-imalat-urunler"},
   {"@type":"ListItem",position:3,name:"Mouse Pad",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-imalat-urunler" className="underline">İmalat Ürünler</Link> / Mouse Pad</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Mouse Pad Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">18 × 22 cm MP-600 ve bilek destekli MP-650 modellerini inceleyin. Ofset veya dijital logo tasarımınızı sipariş adediyle birlikte planlayın. Gösterilen fiyatlar 1.000 adet için baskı dahildir; diğer adetlerde teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-imalat-urunler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm İmalat Ürünleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-mouse-pad-mp-600-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-mouse-pad-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Görülen fiyat 1.000 adet için baskı dahildir. 500 adet ve diğer sipariş miktarları için ayrıca teklif alınır."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Logo Baskılı Mouse Pad Seçerken Neye Bakılmalı?</h2>
   <p>Promosyon mouse pad, çalışma masasında firma logosuna veya kampanya tasarımına yer vermek isteyen kurumsal siparişler için değerlendirilebilir. Seçime kullanım alanını ve mouse hareketi için ayrılabilecek masa yüzeyini belirleyerek başlayın. Çalışan dağıtımı, bayi hediyesi veya etkinlik paketi hazırlanacaksa ürünün taşınma ve paketleme biçimini de planlayın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">MP-600 ve MP-650 mouse pad karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve özellik</th><th scope="col" className="p-3">Sipariş ve fiyat kapsamı</th></tr></thead><tbody>{[
    ["MP-600","18 × 22 cm standart mouse pad","Minimum 500 adet; gösterilen fiyat 1.000 adet için baskı dahil"],
    ["MP-650","18 × 22 cm, bilek destekli","Minimum 500 adet; gösterilen fiyat 1.000 adet için baskı dahil"]
   ].map(([model,feature,scope])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{feature}</td><td className="p-3">{scope}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Standart ve Bilek Destekli Modelin Ayrımı</h3>
   <p>MP-600 standart mouse pad, MP-650 ise bilek destekli model olarak sunulur. Her ikisinin belirtilen ürün ölçüsü 18 × 22 cm’dir. Bilek desteği, bileğin yerleşebileceği ayrı bir alan oluşturur; kullanıcıların masa düzeni ve mouse kullanma alışkanlığıyla birlikte değerlendirilmelidir.</p>
   <p>Destekli yapıdan tıbbi fayda veya bütün kullanıcılar için aynı rahatlık sonucu çıkarılmamalıdır. Ürünün kalınlığı, destek bölümünün yapısı ve yüzey malzemesi mevcut açıklamalarda kesinleştirilmediğinden bu ayrıntıları sipariş öncesinde sorun. Jel dolgu, kaymaz taban veya yıkanabilirlik gibi özellikleri yalnız görsele bakarak varsaymayın.</p>
   <h3 className="text-xl font-bold text-black">Ofset ve Dijital Baskı İçin Tasarım Hazırlığı</h3>
   <p>İki modelde de ofset ve dijital baskı seçenekleri belirtilir. Uygun yöntemi sipariş miktarı, tasarım ve üretim koşullarıyla birlikte netleştirin. Fotoğraf, logo ve iletişim bilgisini aynı tasarımda kullanacaksanız küçük yazıların okunabilirliğini gerçek uygulama boyutunda kontrol edin.</p>
   <p>18 × 22 cm ürün ölçüsünü doğrudan baskı alanı kabul etmeyin. Kesim payı, logo konumu ve varsa bilek desteği çevresindeki yerleşim tasarım onayında değerlendirilmelidir. Logoyu mümkünse vektörel dosyayla, fotoğrafları yeterli çözünürlükte iletin. Kullanılabilir alanı ve tasarımın son görünümünü üretim öncesinde teyit edin.</p>
   <h3 className="text-xl font-bold text-black">Minimum Adet ile Liste Fiyatının Esası Farklıdır</h3>
   <p>MP-600 ve MP-650 bilgilerinde minimum sipariş 500 adet olarak belirtilir. Kartlarda görünen fiyatlar ise 1.000 adet sipariş için baskı dahildir. Bu yüzden 500 adet siparişin toplamını yalnızca karttaki tutarla çarparak hesaplamayın. Diğer adetlerde uygulama kapsamıyla birlikte güncel teklif alın.</p>
   <p>Fiyatlara KDV eklenir. Tasarım, paketleme, teslimat adresi ve varsa ek talepleri aynı teklif kapsamında değerlendirin. Farklı firmalardan gelen teklifleri karşılaştırırken model, adet ve baskı kapsamının aynı olduğundan emin olun. Ek masrafları ve teslim koşullarını sipariş onayından önce netleştirin.</p>
   <h3 className="text-xl font-bold text-black">Kullanım Uyumu ve Teslim Planı</h3>
   <p>Kullanılacak mouse ile yüzey uyumu model bazında değerlendirilmelidir. Bütün optik veya lazer mouse modellerinde aynı performansı varsaymayın. Çalışanlara dağıtım yapılacaksa kullanılan cihazları ve çalışma koşullarını paylaşın; gerekli ürün ayrıntılarını teklif aşamasında kontrol edin.</p>
   <p>Teklif talebine MP-600 veya MP-650 kodunu, adedi, logo dosyasını, renk ve tasarım taleplerini ekleyin. İhtiyaç tarihi ve dağıtım adresleri teslim planının değerlendirilmesini kolaylaştırır. Güncel tedarik uygunluğu, tasarım onayı ve uygulama planına göre net termin alın.</p>
   <p>Diğer özel üretim seçenekleri için <Link href="/promosyon-imalat-urunler" className="font-semibold text-black underline">imalat promosyon ürünlerini</Link>, masa düzenini tamamlamak için <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-black underline">masaüstü ürünlerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-2xl border border-gray-200 p-6 text-gray-600">
   <h2 className="text-xl font-bold text-black">Mouse Pad Seçim ve Baskı Tasarımı Rehberi</h2>
   <p className="mt-3 leading-7">Masa alanı, bilek desteği, yüzey özellikleri ve tasarım onayı için sipariş öncesi kontrol adımlarını inceleyin.</p>
   <Link href="/rehber/promosyon-mouse-pad-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-mouse-pad-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Mouse Pad Seçim ve Baskı Rehberini Oku</h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon mouse pad seçerken ölçü, bilek desteği, yüzey ve baskı tasarımını değerlendirin. Logo yerleşimi, tasarım onayı ve sipariş kontrol adımlarını öğrenin.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Promosyon Mouse Pad Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div></div>;
}
