import FpCategoryCatalog from "../_components/FpCategoryCatalog";
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
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
   {"@type":"ListItem",position:1,name:"Ana Sayfa",item:`${SITE_URL}/`},
   {"@type":"ListItem",position:2,name:"Promosyon Powerbank",item:`${SITE_URL}/promosyon-powerbank`},
   {"@type":"ListItem",position:3,name:"Dahili Kablolu Powerbank",item:PAGE_URL},
  ]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:"Promosyon Dahili Kablolu Powerbank",description,url:PAGE_URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`${SITE_URL}/urunler/${p.slug}`}))}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}} />
  <section className="mb-8 rounded-2xl bg-gray-50 px-6 py-6 text-black md:px-8 md:py-6 border border-gray-200">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-600"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-powerbank" className="underline">Promosyon Powerbank</Link> / Dahili Kablolu Powerbank</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Promosyon Dahili Kablolu Powerbank Modelleri</h1>
   <p className="mt-3 max-w-3xl leading-7 text-gray-600">Dahili kablo bilgisi bulunan 10.000 mAh powerbank modellerini inceleyin. Kablo uçları, şarj gücü ve ek işlevleri karşılaştırarak firma logolu kurumsal siparişiniz için teklif alın.</p>
   <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Toplu Sipariş İçin Teklif Al</Link><Link href="/promosyon-powerbank" className="rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black">Tüm Powerbank Modelleri</Link></div>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-powerbank-pb-112-v2-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></section>

  <FpCategoryCatalog anchorId="promosyon-dahili-kablolu-powerbank-modelleri" showPrices={true} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-12 space-y-5 rounded-2xl bg-gray-50 px-6 py-8 text-gray-600 md:px-8 border border-gray-200">
   <h2 className="text-2xl font-bold text-black">Dahili Kablo Tasarımında Neleri Karşılaştırmalısınız?</h2>
   <p>Dahili kablolu powerbank, şarj kablosunu ürünün gövdesiyle birlikte taşımak isteyen kullanıcılar için değerlendirilebilir. Bu listedeki modellerin ortak özelliği, ürün bilgilerinde entegre kablo bulunmasıdır. Kablo uçları, yerleşimi ve desteklenen şarj özellikleri ise modelden modele değişebilir.</p>
   <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Dahili kablolu powerbanklerde belirtilen ek özellikler</caption><thead><tr><th scope="col" className="p-3 text-black">Model</th><th scope="col" className="p-3 text-black">Ürün bilgisinde belirtilen</th><th scope="col" className="p-3 text-black">Seçimde kontrol edin</th></tr></thead><tbody>{[
    ["PB-112","22,5W hızlı şarj, LED dijital ekran","Kablo uçları ve çıkış desteği"],
    ["PB-115","Kablosuz şarj, LED fener","Telefon uyumu ve şarj bağlantısı"],
    ["PB-120","Kablosuz şarj, stand, ışıklı logo","Stand yapısı ve uygulama alanı"],
    ["PB-210","Dahili iOS ve USB-C kabloları, 22,5W PD","Cihaz ve protokol uyumu"],
    ["PB-240","22,5W hızlı şarj, ışıklı logo","Kablo bağlantıları ve logo alanı"],
    ["PB-250","Dahili kablolu gövde","Uçlar ve desteklenen şarj özellikleri"],
   ].map(([model,feature,detail])=><tr key={model} className="border-t border-gray-200"><th scope="row" className="p-3 font-semibold text-black">{model}</th><td className="p-3">{feature}</td><td className="p-3">{detail}</td></tr>)}</tbody></table></div>
   <h3 className="text-xl font-bold text-black">Önce Kablo Uçlarını ve Cihazları Eşleştirin</h3>
   <p>Kurumsal dağıtımda kullanıcıların telefon bağlantıları farklı olabilir. Teklif talebinde hedef cihazları belirtin. PB-210 ürün bilgilerinde iOS ve USB-C dahili kabloları yer alır. Diğer ürünlerin aynı uçları sunduğu veya bütün telefonlarla ek kablo gerektirmeden kullanılabileceği varsayılmamalıdır.</p>
   <p>Kablo uzunluğunu, gövdeden çıkış biçimini ve saklama yapısını ürün görsellerinden veya numuneden inceleyin. Kabloyu taşıma askısı gibi kullanmaya uygunluk ya da değiştirilebilir olması gibi özellikler ayrıca doğrulanmadıkça kabul edilmemelidir.</p>
   <h3 className="text-xl font-bold text-black">Dahili Kablo ile Hızlı Şarj Farklı Özelliklerdir</h3>
   <p>PB-112 ve PB-240 açıklamalarında 22,5W hızlı şarj, PB-210 için 22,5W PD bilgisi belirtilir. Bu güç değerlerinin hangi bağlantıda desteklendiğini ve cihazın gerekli protokole uygunluğunu kontrol edin. Bir ürünün dahili kablolu olması tek başına belirli bir şarj hızını göstermez.</p>
   <p>Ek USB çıkışı veya Type-C bağlantısı varsa giriş ve çıkış işlevlerini ayrı değerlendirin. Birden fazla cihazın aynı anda şarjında güç dağılımını ve desteklenen bağlantı kombinasyonlarını sorun. Bütün çıkışların aynı anda en yüksek gücü verdiğini varsaymayın.</p>
   <h3 className="text-xl font-bold text-black">Kablosuz Şarj, Stand ve Fener</h3>
   <p>PB-115 kablosuz şarj ve LED fener bilgisiyle; PB-120 kablosuz şarj, ayaklı stand ve ışıklı logo ayrıntılarıyla sunulur. Bunlar dahili kablo grubunun tamamında ortak özellikler değildir. Kullanıcı için öncelikli işlevi belirleyerek diğer ayrıntıları model bazında karşılaştırın.</p>
   <h3 className="text-xl font-bold text-black">10.000 mAh Kapasiteyi Nasıl Değerlendirmeli?</h3>
   <p>Bu alt gruptaki altı model 10.000 mAh olarak listelenir. Aynı kapasiteye sahip olmaları aynı hızda doldukları veya bir telefonu aynı sayıda şarj ettikleri anlamına gelmez. Telefon bataryası, enerji dönüşüm kayıpları, bağlantı biçimi ve kullanım koşulları sonucu etkiler. Kesin dolum sayısı yerine doğrulanmış kapasite ve çıkış özelliklerini esas alın.</p>
   <h3 className="text-xl font-bold text-black">Logo Yerleşimi ve Toplu Sipariş</h3>
   <p>Gövde üzerindeki kablo kanalları, göstergeler ve varsa stand logo alanını etkileyebilir. Logonuzu mümkünse vektörel dosyayla paylaşarak konum, ölçü ve yöntemi netleştirin. PB-120 ve PB-240 bilgilerinde ışıklı logo belirtilir; bu uygulamayı diğer modellerde de var kabul etmeyin.</p>
   <p>Kart fiyatları baskı hariç TL + KDV olarak sunulur. Model kodunu, adet ve renk dağılımını, logo isteğinizi ve paketleme kapsamını bildirerek toplam teklif alın. Güncel tedarik uygunluğu ve tasarım onayı teslim planını etkiler; ihtiyaç tarihini baştan paylaşın.</p>
   <p>Markalama seçenekleri için <Link href="/promosyon-isikli-logolu-powerbank" className="font-semibold text-black underline">ışıklı logolu powerbankleri</Link>, tüm modeller için <Link href="/promosyon-powerbank" className="font-semibold text-black underline">ana powerbank kategorisini</Link> inceleyebilirsiniz.</p>
  </section>
  <section className="mt-10 rounded-2xl bg-gray-50 px-6 py-8 text-black border border-gray-200"><h2 className="text-2xl font-bold text-black">Dahili Kablolu Powerbank Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f=><div key={f.question}><h3 className="text-lg font-semibold text-black">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{f.answer}</p></div>)}</div></section>
  <section aria-labelledby="powerbank-secim-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
    <h2 id="powerbank-secim-rehberi-baslik" className="text-xl font-bold !text-black">Powerbank Seçimini Planlayın</h2>
    <p className="mt-3 text-sm leading-7 !text-gray-700">Kapasite, cihaz ve bağlantı uyumu, kablolu ve kablosuz şarj ile logo seçeneklerini birlikte değerlendirin.</p>
    <Link href="/rehber/promosyon-powerbank-secim-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-powerbank-secim-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Powerbank Seçim Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Promosyon powerbank seçerken kapasite, kablolu ve kablosuz şarj, MagSafe uyumu, dahili kablo ve logo alanını karşılaştırın. Numune ve toplu sipariş kontrolünü planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
  </section>
 </div></div>;
}
