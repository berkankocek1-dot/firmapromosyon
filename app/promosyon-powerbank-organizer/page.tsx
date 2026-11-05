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
 openGraph: { title: "Logo Baskılı Powerbank Organizer Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({data}: {data: Record<string, unknown>}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isOrganizerPowerbank(p)));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"Powerbank Organizer",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon Powerbank Organizer",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / Powerbank Organizer</nav>
   <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Powerbank Organizer Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">PB-350, PB-360, PB-370 ve PB-380 powerbank organizer modellerini inceleyin. Kapasite, iç düzen, kablosuz şarj ve logo uygulaması seçeneklerini karşılaştırarak kurumsal hediyeniz için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Powerbank Modelleri</Link></div>
  </section>
  <p className="mb-4 text-sm font-medium !text-white">{list.length} powerbank organizer modeli gösteriliyor</p>
  <section aria-label="Powerbank organizer ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Powerbank</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
     <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
     <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
    </div></Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Powerbank Organizer Seçerken Modelleri Nasıl Karşılaştırmalı?</h2>
   <p>Promosyon powerbank organizer, not alma ve eşya düzenleme alışkanlığını mobil şarj ihtiyacıyla bir araya getirir. Yönetici hediyeleri, iş ortağı buluşmaları ve çalışan karşılama paketleri için seçim yaparken yalnız kapasiteye bakmayın. İç bölmelerin düzeni, dış ölçüler ve kullanılacak telefonlarla bağlantı uyumu da günlük kullanım açısından önemlidir.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Powerbank organizer modellerinin belirtilen özellikleri</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Kapasite</th><th scope="col" className="p-3 text-white">Ayırt edici özellik</th></tr></thead><tbody>{[
    ["PB-350","6.500 mAh","10W kablosuz şarj, 16 GB USB bellek, A5 PU deri"],
    ["PB-360","6.500 mAh","Light-Up ışıklı logo, PU deri organizer"],
    ["PB-370","8.000 mAh","Bölmeli iç tasarım ve not alma alanı"],
    ["PB-380","6.500 mAh","5W kablosuz şarj, 2A USB-A çıkış, A5"],
   ].map(([model,capacity,feature])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{model}</th><td className="p-3">{capacity}</td><td className="p-3">{feature}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Kablosuz Şarj Her Modelde Aynı Değildir</h3>
   <p>PB-350 ürün bilgilerinde 10W, PB-380 için 5W kablosuz şarj belirtilir. Kullanılacak telefonun kablosuz şarj desteği ve kılıf yapısı kontrol edilmelidir. Telefonun yerleşimi de şarjı etkileyebilir. Bu değerler her cihazın sürekli aynı güçte şarj olacağını göstermez.</p>
   <p>PB-360 ve PB-370 için kablosuz şarj özelliğini varsaymayın. PB-360 bilgilerinde Micro giriş ve USB çıkışı bulunur. PB-370 bağlantı uçları ile giriş ve çıkış değerleri teklif aşamasında teyit edilir. Çalışanların kullandığı cihazları paylaşmak uygun bağlantının belirlenmesini kolaylaştırır.</p>
   <h3 className="text-xl font-bold text-white">İç Düzen ve Paket İçeriğini Birlikte Değerlendirin</h3>
   <p>Toplantı sırasında kart, not ve küçük aksesuarların nasıl taşınacağı organizer seçiminde belirleyicidir. PB-350 ve PB-380 A5 formatıyla tanımlanır; PB-360 ölçüsü 180 × 225 mm olarak belirtilir. PB-370 bölmeli tasarımı ve not alma alanıyla sunulur. Bütün modellerin aynı iç düzeni veya defter ölçüsünü taşıdığını kabul etmeyin.</p>
   <p>PB-350 ürün bilgilerinde 16 GB USB bellek yer alır. Bu donanımın diğer organizerlerde de bulunduğu varsayılmamalıdır. Fotoğraftaki telefon, kalem ve diğer aksesuarların dahil olup olmadığını ayrıca sorun. Not defteri, kablolar ve kutu içeriğinin model bazında yazılı olarak netleşmesi hediye hazırlığında karışıklığı önler.</p>
   <h3 className="text-xl font-bold text-white">Işıklı Logo ile UV Baskı Arasındaki Seçim</h3>
   <p>PB-360 modelinde Light-Up ışıklı logo uygulaması belirtilir. Bu özellik batarya doluluk göstergesinden farklıdır. Logonun ışıklı alana uygunluğu, çizgi ayrıntıları ve uygulama ölçüsü önceden değerlendirilmelidir. Aynı logo yönteminin bütün organizerlere uygulanabildiğini varsaymayın.</p>
   <p>PB-350 ve PB-380 için UV renkli baskı bilgisi bulunur. PB-370 logo yöntemi ve yerleşimi ürün yüzeyine göre teklif aşamasında belirlenir. Logonuzu mümkünse vektörel dosyayla iletin; kurum adı ve küçük yazıların okunabilirliğini uygulama ölçüsü üzerinden kontrol edin.</p>
   <h3 className="text-xl font-bold text-white">Kapasite ve Kurumsal Sipariş Planı</h3>
   <p>PB-350, PB-360 ve PB-380 modelleri 6.500 mAh; PB-370 ise 8.000 mAh olarak tanımlanır. Kapasiteden tek başına kesin telefon dolum sayısı çıkarılamaz. Telefon bataryası, enerji dönüşüm kayıpları ve kullanım koşulları sonucu etkiler. Kullanım beklentinizi ürünün bağlantılarıyla birlikte değerlendirin.</p>
   <p>Kartlardaki tutarlar baskı hariç TL + KDV olarak sunulur. Model kodu, adet, logo dosyası, paketleme tercihi ve hedef teslim tarihini paylaşarak toplam teklif alın. Güncel tedarik uygunluğu ve uygulama onayı teslim planında birlikte değerlendirilir.</p>
   <p>Organizer yerine bağımsız şarj ürünü arıyorsanız <Link href="/promosyon-powerbank" className="font-semibold text-white underline">tüm powerbank modellerini</Link>, şarj ünitesi dışındaki seçenekler için <Link href="/promosyon-organizerler" className="font-semibold text-white underline">organizer modellerini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Powerbank Organizer Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
 </div>;
}
