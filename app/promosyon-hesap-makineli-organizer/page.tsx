import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/products/promosyon-organizer-org-140-bati-41615c3ad8.jpg", alt: "Logo baskılı promosyon ürün modelleri" }],  title, description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY).filter(isCalculatorOrganizer));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:SITE_URL+"/"},
   {"@type":"ListItem",position:2,name:"Organizerler",item:SITE_URL+"/promosyon-organizerler"},
   {"@type":"ListItem",position:3,name:"Hesap Makineli Organizerler",item:PAGE_URL}
  ] }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage",name:title,description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:SITE_URL+"/urunler/"+p.slug}))} }} />
  <JsonLd data={{ "@context":"https://schema.org", "@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}})) }} />
  <section className="rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 border border-gray-200">
   <nav aria-label="İçerik yolu" className="text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-organizerler" className="underline">Organizerler</Link> / Hesap Makineli Organizerler</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Hesap Makineli Organizer Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Hesap makinesi ve not alanını bir arada sunan organizer modellerini karşılaştırın. Dış ölçü, iç blok, sayfa sayısı ve kapama biçimini kurumsal kullanımınıza göre seçerek logo uygulamalı toplu sipariş için teklif alın.</p>
   <div className="mt-6 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-organizerler" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Organizerler</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src={list[0].image} alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-hesap-makineli-organizer-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 leading-7 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Hesap Makineli Organizer Modellerini Karşılaştırın</h2>
   <p>Toplantı notlarıyla günlük hesaplamaları aynı üründe toplamak isteyenler için hesap makineli organizerler değerlendirilebilir. Güncel modelleri ürün bilgileriyle birlikte inceleyin; seçiminizi dış ölçü, iç blok, kapama ve logo uygulaması üzerinden yapın.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left text-sm"><caption className="sr-only">Güncel hesap makineli organizer modelleri ve ürün özellikleri</caption><thead><tr><th scope="col" className="p-3">Model</th><th scope="col" className="p-3">Ürün bilgileri</th></tr></thead><tbody>{list.map(p=><tr key={p.id} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold"><Link href={"/urunler/"+p.slug} className="underline">{p.title}</Link></th><td className="p-3">{p.shortDesc}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Dış Kapak ve İç Blok Ölçüsü</h3>
   <p>Taşıma çantası ve hediye kutusunu dış ölçüye göre değerlendirin. İç blok ölçüsü not alacağınız alanı belirtir; kapak ölçüsü ve kullanılabilir logo alanıyla aynı değildir. Sayfa sayısını yaprak sayısıyla karıştırmayın. Çizgili veya farklı iç düzen, takvim yılı ve tarihli ya da tarihsiz kullanım ihtiyacını model üzerinden teyit edin.</p>
   <h3 className="text-xl font-bold text-black">Hesap Makinesi, Kapama ve Paket İçeriği</h3>
   <p>Hesap makinesinin hane sayısı ve işlevleri seçilen modelin ürün bilgisinden kontrol edilir. Güç kaynağı, pil kapsamı ve değiştirilebilirlik bütün modeller için aynı kabul edilmez. Metal toka veya farklı kapama biçimlerini kullanım alışkanlığınıza göre karşılaştırın.</p>
   <p>Kalem ve özel kutunun dahil olduğunu görselden varsaymayın. Standart paket içeriğiyle ek aksesuar taleplerini ayrı belirleyin. Kutu ve kalem isteniyorsa adet, tasarım ve toplam teklif kapsamını birlikte netleştirin.</p>
   <h3 className="text-xl font-bold text-black">Kapak Malzemesi ve Logo Uygulaması</h3>
   <p>Termo deri olarak tanımlanan kapakları hakiki deri kabul etmeyin. Renk ve malzeme uygunluğunu ürün bazında teyit edin. Gofre, lazer veya dijital baskı gibi seçenekler modelin yüzeyine göre değerlendirilir; her yöntem bütün kapaklara uygulanabilir değildir.</p>
   <p>Logo dosyanızı mümkünse vektörel biçimde paylaşın. Renk sayısı, baskı konumu, küçük yazıların okunabilirliği ve gerçek uygulama boyutu tasarım onayından önce kontrol edilir. Kapak üzerindeki toka ve diğer parçalar yerleşim planında dikkate alınır.</p>
   <h3 className="text-xl font-bold text-black">Toptan Hesap Makineli Organizer Fiyatları</h3>
   <p>Fiyat bulunan kartlarda tutarlar baskı hariç TL + KDV olarak sunulur. Model, adet, renk, logo dosyası, kutu ve aksesuar talepleriyle toplam teklif alın. Ürün kaydındaki koli adedi minimum sipariş miktarı değildir.</p>
   <p>Minimum adet ve teslim süresi stok, miktar, tasarım onayı ve uygulama planına göre netleştirilir. İhtiyaç tarihinizi ve teslim yerini teklif talebine ekleyin. Diğer seçenekler için <Link href="/promosyon-organizerler" className="font-semibold text-black underline">tüm organizer modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-black">Hesap Makineli Organizerler Hakkında Sık Sorulan Sorular</h2><div className="mt-5 space-y-4">{faqItems.map(x=><div key={x.question} className="rounded-2xl border border-gray-200 p-5 text-gray-600"><h3 className="font-semibold text-black">{x.question}</h3><p className="mt-2 text-sm leading-6">{x.answer}</p></div>)}</div></section>
      <section aria-labelledby="hesap-makineli-organizer-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="hesap-makineli-organizer-rehberi-baslik" className="text-xl font-bold !text-black">Hesap Makineli Organizer Seçimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">İç blok, hesap makinesi, kapama ve logo alanını birlikte değerlendirin; numune ve toplu sipariş kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-hesap-makineli-organizer-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-hesap-makineli-organizer-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Hesap Makineli Organizer Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Hesap makineli promosyon organizer seçerken iç blok, dış ölçü, kapama, hesap makinesi ve logo alanını karşılaştırın. Numune ve toplu sipariş kapsamını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0,backgroundColor:"#fff",borderRadius:"9999px"}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
      </section>
 </div></div>;
}
