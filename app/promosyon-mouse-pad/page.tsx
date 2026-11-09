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
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isMousePad));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"İmalat Ürünler",item:SITE_URL+"/promosyon-imalat-urunler"},
   {"@type":"ListItem",position:3,name:"Mouse Pad",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-imalat-urunler" className="underline">İmalat Ürünler</Link> / Mouse Pad</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Mouse Pad Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">18 × 22 cm MP-600 ve bilek destekli MP-650 modellerini inceleyin. Ofset veya dijital logo tasarımınızı sipariş adediyle birlikte planlayın. Gösterilen fiyatlar 1.000 adet için baskı dahildir; diğer adetlerde teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-imalat-urunler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm İmalat Ürünleri</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} mouse pad modeli gösteriliyor</p>
  <section aria-label="Promosyon mouse pad ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Mouse Pad</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Görülen fiyat 1.000 adet için baskı dahildir. 500 adet ve diğer sipariş miktarları için ayrıca teklif alınır.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Logo Baskılı Mouse Pad Seçerken Neye Bakılmalı?</h2>
   <p>Promosyon mouse pad, çalışma masasında firma logosuna veya kampanya tasarımına yer vermek isteyen kurumsal siparişler için değerlendirilebilir. Seçime kullanım alanını ve mouse hareketi için ayrılabilecek masa yüzeyini belirleyerek başlayın. Çalışan dağıtımı, bayi hediyesi veya etkinlik paketi hazırlanacaksa ürünün taşınma ve paketleme biçimini de planlayın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-sm"><caption className="sr-only">MP-600 ve MP-650 mouse pad karşılaştırması</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ölçü ve özellik</th><th scope="col" className="p-3">Sipariş ve fiyat kapsamı</th></tr></thead><tbody>{[
    ["MP-600","18 × 22 cm standart mouse pad","Minimum 500 adet; gösterilen fiyat 1.000 adet için baskı dahil"],
    ["MP-650","18 × 22 cm, bilek destekli","Minimum 500 adet; gösterilen fiyat 1.000 adet için baskı dahil"]
   ].map(([model,feature,scope])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold">{model}</th><td className="p-3">{feature}</td><td className="p-3">{scope}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Standart ve Bilek Destekli Modelin Ayrımı</h3>
   <p>MP-600 standart mouse pad, MP-650 ise bilek destekli model olarak sunulur. Her ikisinin belirtilen ürün ölçüsü 18 × 22 cm’dir. Bilek desteği, bileğin yerleşebileceği ayrı bir alan oluşturur; kullanıcıların masa düzeni ve mouse kullanma alışkanlığıyla birlikte değerlendirilmelidir.</p>
   <p>Destekli yapıdan tıbbi fayda veya bütün kullanıcılar için aynı rahatlık sonucu çıkarılmamalıdır. Ürünün kalınlığı, destek bölümünün yapısı ve yüzey malzemesi mevcut açıklamalarda kesinleştirilmediğinden bu ayrıntıları sipariş öncesinde sorun. Jel dolgu, kaymaz taban veya yıkanabilirlik gibi özellikleri yalnız görsele bakarak varsaymayın.</p>
   <h3 className="text-xl font-bold text-white">Ofset ve Dijital Baskı İçin Tasarım Hazırlığı</h3>
   <p>İki modelde de ofset ve dijital baskı seçenekleri belirtilir. Uygun yöntemi sipariş miktarı, tasarım ve üretim koşullarıyla birlikte netleştirin. Fotoğraf, logo ve iletişim bilgisini aynı tasarımda kullanacaksanız küçük yazıların okunabilirliğini gerçek uygulama boyutunda kontrol edin.</p>
   <p>18 × 22 cm ürün ölçüsünü doğrudan baskı alanı kabul etmeyin. Kesim payı, logo konumu ve varsa bilek desteği çevresindeki yerleşim tasarım onayında değerlendirilmelidir. Logoyu mümkünse vektörel dosyayla, fotoğrafları yeterli çözünürlükte iletin. Kullanılabilir alanı ve tasarımın son görünümünü üretim öncesinde teyit edin.</p>
   <h3 className="text-xl font-bold text-white">Minimum Adet ile Liste Fiyatının Esası Farklıdır</h3>
   <p>MP-600 ve MP-650 bilgilerinde minimum sipariş 500 adet olarak belirtilir. Kartlarda görünen fiyatlar ise 1.000 adet sipariş için baskı dahildir. Bu yüzden 500 adet siparişin toplamını yalnızca karttaki tutarla çarparak hesaplamayın. Diğer adetlerde uygulama kapsamıyla birlikte güncel teklif alın.</p>
   <p>Fiyatlara KDV eklenir. Tasarım, paketleme, teslimat adresi ve varsa ek talepleri aynı teklif kapsamında değerlendirin. Farklı firmalardan gelen teklifleri karşılaştırırken model, adet ve baskı kapsamının aynı olduğundan emin olun. Ek masrafları ve teslim koşullarını sipariş onayından önce netleştirin.</p>
   <h3 className="text-xl font-bold text-white">Kullanım Uyumu ve Teslim Planı</h3>
   <p>Kullanılacak mouse ile yüzey uyumu model bazında değerlendirilmelidir. Bütün optik veya lazer mouse modellerinde aynı performansı varsaymayın. Çalışanlara dağıtım yapılacaksa kullanılan cihazları ve çalışma koşullarını paylaşın; gerekli ürün ayrıntılarını teklif aşamasında kontrol edin.</p>
   <p>Teklif talebine MP-600 veya MP-650 kodunu, adedi, logo dosyasını, renk ve tasarım taleplerini ekleyin. İhtiyaç tarihi ve dağıtım adresleri teslim planının değerlendirilmesini kolaylaştırır. Güncel tedarik uygunluğu, tasarım onayı ve uygulama planına göre net termin alın.</p>
   <p>Diğer özel üretim seçenekleri için <Link href="/promosyon-imalat-urunler" className="font-semibold text-white underline">imalat promosyon ürünlerini</Link>, masa düzenini tamamlamak için <Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="font-semibold text-white underline">masaüstü ürünlerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-2xl border border-white/15 p-6 text-gray-200">
   <h2 className="text-xl font-bold text-white">Mouse Pad Seçim ve Baskı Tasarımı Rehberi</h2>
   <p className="mt-3 leading-7">Masa alanı, bilek desteği, yüzey özellikleri ve tasarım onayı için sipariş öncesi kontrol adımlarını inceleyin.</p>
   <Link href="/rehber/promosyon-mouse-pad-secim-ve-baski-rehberi" className="mt-4 inline-block font-semibold text-white underline">Mouse Pad Seçim ve Baskı Rehberini Oku</Link>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Promosyon Mouse Pad Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
