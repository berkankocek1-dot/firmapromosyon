import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isCalculatorOrganizer } from "@/data/organizerSubcategories";

const CATEGORY = "Organizerler";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = SITE_URL + "/promosyon-hesap-makineli-organizer";
const title = "Promosyon Hesap Makineli Organizer Modelleri ve Fiyatları";
const description = "Logo baskılı hesap makineli promosyon organizerleri ölçü, iç blok ve kapama özellikleriyle karşılaştırın. Güncel modeller için toptan teklif alın.";
const faqItems = [{"question": "Bu sayfada hangi organizerler listelenir?", "answer": "Hesap makinesi özelliği belirtilen ve güncel ürün listesinde gösterime açık organizerler yer alır. Ürün kartlarında mevcut seçenekleri inceleyebilirsiniz."}, {"question": "Sayfa sayısı ve iç blok ölçüsü nasıl seçilir?", "answer": "Dış kapak, iç blok, sayfa sayısı ve tarih düzeni model bazında değerlendirilir. Dış ölçü logo alanı veya iç sayfa ölçüsü anlamına gelmez."}, {"question": "Hesap makinelerinin özellikleri aynı mı?", "answer": "Hane sayısı, işlevler ve güç kaynağı modele göre teyit edilir. Hesap makinesi bulunduğu bilgisi bütün modellerin aynı teknik özelliklere sahip olduğunu göstermez."}, {"question": "Termo deri hakiki deri mi?", "answer": "Termo deri ifadesi hakiki deri taahhüdü değildir. Malzeme ve renk özellikleri ürün kaydı üzerinden değerlendirilir."}, {"question": "Logo uygulaması ve aksesuarlar nasıl belirlenir?", "answer": "Gofre, lazer veya dijital gibi yöntemlerin uygunluğu seçilen modelin yüzeyine göre belirlenir. Kalem, kutu ve ek aksesuarların kapsamı teklifte ayrıca netleştirilir."}, {"question": "Minimum adet, fiyat ve teslim süresi nedir?", "answer": "Kartlarda fiyat bulunan ürünler baskı hariç TL + KDV olarak sunulur. Minimum sipariş ve termin stok, adet ve tasarım onayına göre netleştirilir. Koli adedi minimum sipariş anlamına gelmez."}];
export const metadata: Metadata = {
 title, description, alternates: { canonical: PAGE_URL },
 openGraph: { title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isCalculatorOrganizer));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Organizerler",item:SITE_URL+"/promosyon-organizerler"},
   {"@type":"ListItem",position:3,name:"Hesap Makineli Organizerler",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-3xl bg-black px-6 py-8 text-white md:px-8">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-organizerler" className="underline">Organizerler</Link> / Hesap Makineli Organizerler</nav>
   <h1 className="mt-5 text-3xl font-bold md:text-4xl">Logo Baskılı Promosyon Hesap Makineli Organizer Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Hesap makinesi ve not alanını bir arada sunan organizer modellerini karşılaştırın. Dış ölçü, iç blok, sayfa sayısı ve kapama biçimini kurumsal kullanımınıza göre seçerek logo uygulamalı toplu sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-organizerler" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white">Tüm Organizerler</Link></div>
  </section>
  <p className="mb-5 mt-8 text-sm text-white">{list.length} hesap makineli organizer modeli gösteriliyor</p>
  <section aria-label="Promosyon hesap makineli organizer ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={"/urunler/"+p.slug} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-100 bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Hesap Makineli Organizerler</p><h2 className="mt-1 text-lg font-bold !text-gray-900">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
    {p.price != null ? <div className="mt-3"><p className="text-base font-bold !text-gray-900">{p.price.toLocaleString("tr-TR")} TL + KDV</p><p className="mt-1 text-xs font-medium !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p></div> : <p className="mt-3 text-sm font-semibold !text-gray-900">Güncel fiyat için teklif alın.</p>}
    <span className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold !text-white">Ürünü İncele</span></div>
   </Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 leading-7 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Hesap Makineli Organizer Modellerini Karşılaştırın</h2>
   <p>Toplantı notlarıyla günlük hesaplamaları aynı üründe toplamak isteyenler için hesap makineli organizerler değerlendirilebilir. Güncel modelleri ürün bilgileriyle birlikte inceleyin; seçiminizi dış ölçü, iç blok, kapama ve logo uygulaması üzerinden yapın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Güncel hesap makineli organizer modelleri ve ürün özellikleri</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ürün bilgileri</th></tr></thead><tbody>{list.map(p=><tr key={p.id} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold"><Link href={"/urunler/"+p.slug} className="underline">{p.title}</Link></th><td className="p-3">{p.shortDesc}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Dış Kapak ve İç Blok Ölçüsü</h3>
   <p>Taşıma çantası ve hediye kutusunu dış ölçüye göre değerlendirin. İç blok ölçüsü not alacağınız alanı belirtir; kapak ölçüsü ve kullanılabilir logo alanıyla aynı değildir. Sayfa sayısını yaprak sayısıyla karıştırmayın. Çizgili veya farklı iç düzen, takvim yılı ve tarihli ya da tarihsiz kullanım ihtiyacını model üzerinden teyit edin.</p>
   <h3 className="text-xl font-bold text-white">Hesap Makinesi, Kapama ve Paket İçeriği</h3>
   <p>Hesap makinesinin hane sayısı ve işlevleri seçilen modelin ürün bilgisinden kontrol edilir. Güç kaynağı, pil kapsamı ve değiştirilebilirlik bütün modeller için aynı kabul edilmez. Metal toka veya farklı kapama biçimlerini kullanım alışkanlığınıza göre karşılaştırın.</p>
   <p>Kalem ve özel kutunun dahil olduğunu görselden varsaymayın. Standart paket içeriğiyle ek aksesuar taleplerini ayrı belirleyin. Kutu ve kalem isteniyorsa adet, tasarım ve toplam teklif kapsamını birlikte netleştirin.</p>
   <h3 className="text-xl font-bold text-white">Kapak Malzemesi ve Logo Uygulaması</h3>
   <p>Termo deri olarak tanımlanan kapakları hakiki deri kabul etmeyin. Renk ve malzeme uygunluğunu ürün bazında teyit edin. Gofre, lazer veya dijital baskı gibi seçenekler modelin yüzeyine göre değerlendirilir; her yöntem bütün kapaklara uygulanabilir değildir.</p>
   <p>Logo dosyanızı mümkünse vektörel biçimde paylaşın. Renk sayısı, baskı konumu, küçük yazıların okunabilirliği ve gerçek uygulama boyutu tasarım onayından önce kontrol edilir. Kapak üzerindeki toka ve diğer parçalar yerleşim planında dikkate alınır.</p>
   <h3 className="text-xl font-bold text-white">Toptan Hesap Makineli Organizer Fiyatları</h3>
   <p>Fiyat bulunan kartlarda tutarlar baskı hariç TL + KDV olarak sunulur. Model, adet, renk, logo dosyası, kutu ve aksesuar talepleriyle toplam teklif alın. Ürün kaydındaki koli adedi minimum sipariş miktarı değildir.</p>
   <p>Minimum adet ve teslim süresi stok, miktar, tasarım onayı ve uygulama planına göre netleştirilir. İhtiyaç tarihinizi ve teslim yerini teklif talebine ekleyin. Diğer seçenekler için <Link href="/promosyon-organizerler" className="font-semibold text-white underline">tüm organizer modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-white">Hesap Makineli Organizerler Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-white/10 p-5 text-gray-200"><h3 className="font-semibold text-white">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
 </div>;
}
