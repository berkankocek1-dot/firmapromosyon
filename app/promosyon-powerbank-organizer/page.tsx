import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isOrganizerPowerbank } from "@/data/powerbankSubcategories";

const CATEGORY = "Powerbank";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-powerbank-organizer`;
const description = "Logo baskılı powerbank organizer modellerini karşılaştırın. PB-350, PB-360, PB-370 ve PB-380 için kapasite, kablosuz şarj ve logo seçeneklerini inceleyin.";
const faqItems = [{"question": "Powerbank organizer hangi ihtiyacı karşılar?", "answer": "Entegre powerbank ile organizer düzenini bir araya getirir. Toplantı notları ve küçük eşyaların düzenlenmesiyle mobil şarj ihtiyacını birlikte değerlendiren kullanıcılar için seçilebilir."}, {"question": "Bütün organizer modelleri kablosuz şarjlı mı?", "answer": "Hayır. PB-350 için 10W, PB-380 için 5W kablosuz şarj belirtilir. PB-360 ve PB-370 modellerinde bu özelliğin bulunduğu varsayılmamalıdır."}, {"question": "Hangi modelde ışıklı logo var?", "answer": "PB-360 ürün bilgilerinde Light-Up ışıklı logo uygulaması belirtilir. Diğer modellerin logo yöntemi kendi yüzey ve uygulama bilgilerine göre değerlendirilir."}, {"question": "Fotoğraftaki telefon ve kalem pakete dahil mi?", "answer": "Görseldeki aksesuarların dahil olduğu varsayılmamalıdır. Not defteri, kablo ve diğer parçalar dahil teslim edilecek paket içeriğini model bazında teklif aşamasında teyit edin."}, {"question": "Powerbank organizer fiyatına logo baskısı dahil mi?", "answer": "Kartlardaki fiyatlar baskı hariç TL + KDV olarak sunulur. Model, adet, logo uygulaması ve paketleme talepleriyle toplam teklif isteyin."}];
export const metadata: Metadata = {
 title: "Promosyon Powerbank Organizer Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: {images: [{ url: "https://www.firmapromosyon.com/category-heroes/clean/promosyon-powerbank-organizer-pb-350-v2-clean.webp", alt: "Logo baskılı promosyon ürün modelleri" }],  title: "Logo Baskılı Powerbank Organizer Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({data}: {data: Record<string, unknown>}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isOrganizerPowerbank(p)));
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"Powerbank Organizer",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon Powerbank Organizer",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / Powerbank Organizer</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Powerbank Organizer Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">PB-350, PB-360, PB-370 ve PB-380 powerbank organizer modellerini inceleyin. Kapasite, iç düzen, kablosuz şarj ve logo uygulaması seçeneklerini karşılaştırarak kurumsal hediyeniz için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Powerbank Modelleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-powerbank-organizer-pb-350-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-powerbank-organizer-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Powerbank Organizer Seçerken Modelleri Nasıl Karşılaştırmalı?</h2>
   <p>Promosyon powerbank organizer, not alma ve eşya düzenleme alışkanlığını mobil şarj ihtiyacıyla bir araya getirir. Yönetici hediyeleri, iş ortağı buluşmaları ve çalışan karşılama paketleri için seçim yaparken yalnız kapasiteye bakmayın. İç bölmelerin düzeni, dış ölçüler ve kullanılacak telefonlarla bağlantı uyumu da günlük kullanım açısından önemlidir.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Powerbank organizer modellerinin belirtilen özellikleri</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Kapasite</th><th scope="col" className="p-3 text-black">Ayırt edici özellik</th></tr></thead><tbody>{[
    ["PB-350","6.500 mAh","10W kablosuz şarj, 16 GB USB bellek, A5 PU deri"],
    ["PB-360","6.500 mAh","Light-Up ışıklı logo, PU deri organizer"],
    ["PB-370","8.000 mAh","Bölmeli iç tasarım ve not alma alanı"],
    ["PB-380","6.500 mAh","5W kablosuz şarj, 2A USB-A çıkış, A5"],
   ].map(([model,capacity,feature])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{model}</th><td className="p-3">{capacity}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Kablosuz Şarj Her Modelde Aynı Değildir</h3>
   <p>PB-350 ürün bilgilerinde 10W, PB-380 için 5W kablosuz şarj belirtilir. Kullanılacak telefonun kablosuz şarj desteği ve kılıf yapısı kontrol edilmelidir. Telefonun yerleşimi de şarjı etkileyebilir. Bu değerler her cihazın sürekli aynı güçte şarj olacağını göstermez.</p>
   <p>PB-360 ve PB-370 için kablosuz şarj özelliğini varsaymayın. PB-360 bilgilerinde Micro giriş ve USB çıkışı bulunur. PB-370 bağlantı uçları ile giriş ve çıkış değerleri teklif aşamasında teyit edilir. Çalışanların kullandığı cihazları paylaşmak uygun bağlantının belirlenmesini kolaylaştırır.</p>
   <h3 className="text-xl font-bold text-black">İç Düzen ve Paket İçeriğini Birlikte Değerlendirin</h3>
   <p>Toplantı sırasında kart, not ve küçük aksesuarların nasıl taşınacağı organizer seçiminde belirleyicidir. PB-350 ve PB-380 A5 formatıyla tanımlanır; PB-360 ölçüsü 180 × 225 mm olarak belirtilir. PB-370 bölmeli tasarımı ve not alma alanıyla sunulur. Bütün modellerin aynı iç düzeni veya defter ölçüsünü taşıdığını kabul etmeyin.</p>
   <p>PB-350 ürün bilgilerinde 16 GB USB bellek yer alır. Bu donanımın diğer organizerlerde de bulunduğu varsayılmamalıdır. Fotoğraftaki telefon, kalem ve diğer aksesuarların dahil olup olmadığını ayrıca sorun. Not defteri, kablolar ve kutu içeriğinin model bazında yazılı olarak netleşmesi hediye hazırlığında karışıklığı önler.</p>
   <h3 className="text-xl font-bold text-black">Işıklı Logo ile UV Baskı Arasındaki Seçim</h3>
   <p>PB-360 modelinde Light-Up ışıklı logo uygulaması belirtilir. Bu özellik batarya doluluk göstergesinden farklıdır. Logonun ışıklı alana uygunluğu, çizgi ayrıntıları ve uygulama ölçüsü önceden değerlendirilmelidir. Aynı logo yönteminin bütün organizerlere uygulanabildiğini varsaymayın.</p>
   <p>PB-350 ve PB-380 için UV renkli baskı bilgisi bulunur. PB-370 logo yöntemi ve yerleşimi ürün yüzeyine göre teklif aşamasında belirlenir. Logonuzu mümkünse vektörel dosyayla iletin; kurum adı ve küçük yazıların okunabilirliğini uygulama ölçüsü üzerinden kontrol edin.</p>
   <h3 className="text-xl font-bold text-black">Kapasite ve Kurumsal Sipariş Planı</h3>
   <p>PB-350, PB-360 ve PB-380 modelleri 6.500 mAh; PB-370 ise 8.000 mAh olarak tanımlanır. Kapasiteden tek başına kesin telefon dolum sayısı çıkarılamaz. Telefon bataryası, enerji dönüşüm kayıpları ve kullanım koşulları sonucu etkiler. Kullanım beklentinizi ürünün bağlantılarıyla birlikte değerlendirin.</p>
   <p>Kartlardaki tutarlar baskı hariç TL + KDV olarak sunulur. Model kodu, adet, logo dosyası, paketleme tercihi ve hedef teslim tarihini paylaşarak toplam teklif alın. Güncel tedarik uygunluğu ve uygulama onayı teslim planında birlikte değerlendirilir.</p>
   <p>Organizer yerine bağımsız şarj ürünü arıyorsanız <Link href="/promosyon-powerbank" className="font-semibold text-black underline">tüm powerbank modellerini</Link>, şarj ünitesi dışındaki seçenekler için <Link href="/promosyon-organizerler" className="font-semibold text-black underline">organizer modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Powerbank Organizer Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
  <section aria-labelledby="powerbank-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
    <h2 id="powerbank-secim-rehberi-baslik" className="text-xl font-bold !text-black">Powerbank Seçimini Planlayın</h2>
    <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, cihaz ve bağlantı uyumu, kablolu ve kablosuz şarj ile logo seçeneklerini birlikte değerlendirin.</p>
    <Link href="/rehber/promosyon-powerbank-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-powerbank-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Powerbank Seçim Rehberini İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg></h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon powerbank seçerken kapasite, kablolu ve kablosuz şarj, MagSafe uyumu, dahili kablo ve logo alanını karşılaştırın. Numune ve toplu sipariş kontrolünü planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M5 19 19 5M5 5h14v14" /></svg></span></div></Link>
  </section>
 </div></div>;
}
