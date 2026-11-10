import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isBuiltInCablePowerbank } from "@/data/powerbankSubcategories";

const CATEGORY = "Powerbank";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-dahili-kablolu-powerbank`;
const description = "Dahili kablolu promosyon powerbank modellerini karşılaştırın. Kablo uçları, şarj gücü ve ek özellikleri inceleyerek logo baskılı toplu sipariş için teklif alın.";
const faqItems = [{"question": "Hangi modeller dahili kablolu olarak listeleniyor?", "answer": "PB-112, PB-115, PB-120, PB-210, PB-240 ve PB-250 başlık veya kısa açıklamalarında dahili kablo bilgisiyle sunulur."}, {"question": "Dahili kablolar her telefona uygun mu?", "answer": "Kablo uçları ve cihazın bağlantısı kontrol edilmelidir. PB-210 için dahili iOS ve USB-C kabloları belirtilir. Bu uçlar diğer bütün modellerde ortak kabul edilmemelidir."}, {"question": "Dahili kablo hızlı şarj garantisi mi?", "answer": "Hayır. Hızlı şarj için ürünün çıkış gücü, desteklenen protokol, kablo ve telefon uyumu birlikte değerlendirilir. Dahili kablo bulunması tek başına belirli bir şarj hızını garanti etmez."}, {"question": "Bütün modeller kablosuz şarj destekliyor mu?", "answer": "Hayır. PB-115 ve PB-120 açıklamalarında kablosuz şarj belirtilir. Dahili kablo ve kablosuz şarj farklı özelliklerdir; diğer modellerin desteği ayrıca kontrol edilmelidir."}, {"question": "Fiyatlara logo uygulaması dahil mi?", "answer": "Fiyat gösterilen kartlarda ürün bedeli baskı hariç TL + KDV olarak sunulur. Model, adet, logo yöntemi ve paketleme kapsamıyla toplam teklif alın. Fiyatı bulunmayan ürünlerde güncel teklif isteyin."}];
export const metadata: Metadata = {
 title: "Promosyon Dahili Kablolu Powerbank Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Dahili Kablolu Powerbank Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({data}: {data: Record<string, unknown>}) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data).replace(/</g, "\\u003c")}} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isBuiltInCablePowerbank(p)));
 return <div className="mx-auto max-w-6xl px-4 py-10">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"Dahili Kablolu Powerbank",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon Dahili Kablolu Powerbank",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / Dahili Kablolu Powerbank</nav>
   <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Dahili Kablolu Powerbank Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-200">Dahili kablo bilgisi bulunan 10.000 mAh powerbank modellerini inceleyin. Kablo uçları, şarj gücü ve ek işlevleri karşılaştırarak firma logolu kurumsal siparişiniz için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Powerbank Modelleri</Link></div>
  </section>
  <p className="mb-4 text-sm font-medium !text-white">{list.length} dahili kablolu powerbank modeli gösteriliyor</p>
  <section aria-label="Dahili kablolu powerbank ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   {list.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
    <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Powerbank</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
     <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
     <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
    </div></Link>)}
  </section>
  <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
   <h2 className="text-2xl font-bold text-white">Dahili Kablo Tasarımında Neleri Karşılaştırmalısınız?</h2>
   <p>Dahili kablolu powerbank, şarj kablosunu ürünün gövdesiyle birlikte taşımak isteyen kullanıcılar için değerlendirilebilir. Bu listedeki modellerin ortak özelliği, ürün bilgilerinde entegre kablo bulunmasıdır. Kablo uçları, yerleşimi ve desteklenen şarj özellikleri ise modelden modele değişebilir.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Dahili kablolu powerbanklerde belirtilen ek özellikler</caption><thead><tr><th scope="col" className="p-3 text-white">Model</th><th scope="col" className="p-3 text-white">Ürün bilgisinde belirtilen</th><th scope="col" className="p-3 text-white">Seçimde kontrol edin</th></tr></thead><tbody>{[
    ["PB-112","22,5W hızlı şarj, LED dijital ekran","Kablo uçları ve çıkış desteği"],
    ["PB-115","Kablosuz şarj, LED fener","Telefon uyumu ve şarj bağlantısı"],
    ["PB-120","Kablosuz şarj, stand, ışıklı logo","Stand yapısı ve uygulama alanı"],
    ["PB-210","Dahili iOS ve USB-C kabloları, 22,5W PD","Cihaz ve protokol uyumu"],
    ["PB-240","22,5W hızlı şarj, ışıklı logo","Kablo bağlantıları ve logo alanı"],
    ["PB-250","Dahili kablolu gövde","Uçlar ve desteklenen şarj özellikleri"],
   ].map(([model,feature,detail])=><tr key={model} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{model}</th><td className="p-3">{feature}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-white">Önce Kablo Uçlarını ve Cihazları Eşleştirin</h3>
   <p>Kurumsal dağıtımda kullanıcıların telefon bağlantıları farklı olabilir. Teklif talebinde hedef cihazları belirtin. PB-210 ürün bilgilerinde iOS ve USB-C dahili kabloları yer alır. Diğer ürünlerin aynı uçları sunduğu veya bütün telefonlarla ek kablo gerektirmeden kullanılabileceği varsayılmamalıdır.</p>
   <p>Kablo uzunluğunu, gövdeden çıkış biçimini ve saklama yapısını ürün görsellerinden veya numuneden inceleyin. Kabloyu taşıma askısı gibi kullanmaya uygunluk ya da değiştirilebilir olması gibi özellikler ayrıca doğrulanmadıkça kabul edilmemelidir.</p>
   <h3 className="text-xl font-bold text-white">Dahili Kablo ile Hızlı Şarj Farklı Özelliklerdir</h3>
   <p>PB-112 ve PB-240 açıklamalarında 22,5W hızlı şarj, PB-210 için 22,5W PD bilgisi belirtilir. Bu güç değerlerinin hangi bağlantıda desteklendiğini ve cihazın gerekli protokole uygunluğunu kontrol edin. Bir ürünün dahili kablolu olması tek başına belirli bir şarj hızını göstermez.</p>
   <p>Ek USB çıkışı veya Type-C bağlantısı varsa giriş ve çıkış işlevlerini ayrı değerlendirin. Birden fazla cihazın aynı anda şarjında güç dağılımını ve desteklenen bağlantı kombinasyonlarını sorun. Bütün çıkışların aynı anda en yüksek gücü verdiğini varsaymayın.</p>
   <h3 className="text-xl font-bold text-white">Kablosuz Şarj, Stand ve Fener</h3>
   <p>PB-115 kablosuz şarj ve LED fener bilgisiyle; PB-120 kablosuz şarj, ayaklı stand ve ışıklı logo ayrıntılarıyla sunulur. Bunlar dahili kablo grubunun tamamında ortak özellikler değildir. Kullanıcı için öncelikli işlevi belirleyerek diğer ayrıntıları model bazında karşılaştırın.</p>
   <h3 className="text-xl font-bold text-white">10.000 mAh Kapasiteyi Nasıl Değerlendirmeli?</h3>
   <p>Bu alt gruptaki altı model 10.000 mAh olarak listelenir. Aynı kapasiteye sahip olmaları aynı hızda doldukları veya bir telefonu aynı sayıda şarj ettikleri anlamına gelmez. Telefon bataryası, enerji dönüşüm kayıpları, bağlantı biçimi ve kullanım koşulları sonucu etkiler. Kesin dolum sayısı yerine doğrulanmış kapasite ve çıkış özelliklerini esas alın.</p>
   <h3 className="text-xl font-bold text-white">Logo Yerleşimi ve Toplu Sipariş</h3>
   <p>Gövde üzerindeki kablo kanalları, göstergeler ve varsa stand logo alanını etkileyebilir. Logonuzu mümkünse vektörel dosyayla paylaşarak konum, ölçü ve yöntemi netleştirin. PB-120 ve PB-240 bilgilerinde ışıklı logo belirtilir; bu uygulamayı diğer modellerde de var kabul etmeyin.</p>
   <p>Kart fiyatları baskı hariç TL + KDV olarak sunulur. Model kodunu, adet ve renk dağılımını, logo isteğinizi ve paketleme kapsamını bildirerek toplam teklif alın. Güncel tedarik uygunluğu ve tasarım onayı teslim planını etkiler; ihtiyaç tarihini baştan paylaşın.</p>
   <p>Markalama seçenekleri için <Link href="/promosyon-isikli-logolu-powerbank" className="font-semibold text-white underline">ışıklı logolu powerbankleri</Link>, tüm modeller için <Link href="/promosyon-powerbank" className="font-semibold text-white underline">ana powerbank kategorisini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Dahili Kablolu Powerbank Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
  <section aria-labelledby="powerbank-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
    <h2 id="powerbank-secim-rehberi-baslik" className="text-xl font-bold !text-black">Powerbank Seçimini Planlayın</h2>
    <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, cihaz ve bağlantı uyumu, kablolu ve kablosuz şarj ile logo seçeneklerini birlikte değerlendirin.</p>
    <Link href="/rehber/promosyon-powerbank-secim-rehberi" className="mt-4 inline-block font-semibold !text-black underline underline-offset-4">Powerbank Seçim Rehberini İncele →</Link>
  </section>
 </div>;
}
