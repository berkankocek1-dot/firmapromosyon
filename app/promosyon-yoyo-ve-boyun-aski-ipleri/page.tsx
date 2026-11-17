import FpCategoryCatalog from "../_components/FpCategoryCatalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visibleProducts } from "@/data/productVisibility";
const CATEGORY = "Yoyo ve Boyun Askı İpleri";
const URL = "https://www.firmapromosyon.com/promosyon-yoyo-ve-boyun-aski-ipleri";
const title = "Promosyon Yoyo ve Boyun Askı İpleri | Logo Baskılı Yaka Kartı Askıları";
const description = "Personel kartı, fuar ve etkinlikler için logo baskılı boyun askı ipi ve yoyo seçeneklerini inceleyin. Adet, tasarım ve aksesuar ihtiyacınızla teklif alın.";
export const metadata:Metadata = {title,description,alternates:{canonical:URL},openGraph:{title,description,url:URL,type:"website"}};
const faqs = [
 {q:"Yoyo ile boyun askı ipi arasındaki fark nedir?",a:"Yoyo, kartın geri sarılan bir kordonla taşınması için kullanılan kart tutucudur. Boyun askı ipi ise kartı boyunda taşımaya yarar. Uygun seçenek kullanım yerine ve kart bağlantısına göre belirlenir."},
 {q:"Logo baskılı boyun askı ipi için hangi bilgiler gerekir?",a:"Adet, logo dosyası, renk tercihi ve kullanım amacı paylaşılmalıdır. İp ölçüsü, malzeme, baskı yönü ve bağlantı aksesuarı güncel seçenekler üzerinden netleştirilir."},
 {q:"Yaka kartı ve kart kabı fiyata dahil mi?",a:"Kart baskısı, kart kabı ve bağlantı aksesuarları teklifte ayrı ayrı belirtilir. Görselde birlikte gösterilmeleri tüm parçaların standart olarak dahil olduğu anlamına gelmez."},
 {q:"Fiyat neden belirtilmiyor?",a:"Bu ürün grubu için sabit liste fiyatı verilmemiştir. Adet, seçilecek model, logo uygulaması ve aksesuar kapsamıyla güncel teklif hazırlanır."},
 {q:"Minimum adet ve teslim süresi nedir?",a:"Seçilen ürün ve baskı çalışmasına göre belirlenir. Tedarik durumu, minimum adet ve teslim süresi teklif aşamasında teyit edilir."}
];
function JsonLd({data}:{data:Record<string,unknown>}) {return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>;}
export default function YoyoPage() {
 const list = visibleProducts.filter(p=>p.category===CATEGORY);
 return <div className="bg-white text-gray-900"><div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Ana Sayfa",item:"https://www.firmapromosyon.com"},{"@type":"ListItem",position:2,name:CATEGORY,item:URL}]}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:title,description,url:URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`https://www.firmapromosyon.com/urunler/${p.slug}`}))}}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}}/>
  <header className="mb-8 rounded-2xl bg-gray-50 p-6 text-black md:p-6 border border-gray-200">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/urunler" className="underline">Ürünler</Link> / {CATEGORY}</nav><div className="mt-4 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"><div>
   <h1 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px]">Logo Baskılı Yoyo ve Boyun Askı İpleri</h1>
   <p className="mt-5 max-w-4xl leading-8">Personel kartlarını, fuar giriş kartlarını ve etkinlik yaka kartlarını taşımak için yoyo ve boyun askı iplerini değerlendirin. Kullanım şeklinize uygun kart bağlantısını, logo uygulamasını ve aksesuar kapsamını birlikte planlayın.</p>
   <Link href="/kurumsal-teklif-al" className="inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800">Yoyo ve Boyun Askı İpi İçin Teklif Al</Link>
  </div>{list[0] && <div className="relative hidden h-52 w-full lg:block"><Image src="/category-heroes/clean/promosyon-saten-boyun-aski-ipi-byn-100-bati-38fbef52d1-clean.webp" alt={list[0].title} fill unoptimized sizes="280px" className="object-contain mix-blend-multiply" /></div>}</div></header>

  <FpCategoryCatalog anchorId="promosyon-yoyo-ve-boyun-aski-ipleri-modelleri" showPrices={false} products={list.map(p => ({id:p.id,slug:p.slug,title:p.title,image:p.image,category:p.category,shortDesc:p.shortDesc,price:p.price,priceNote:"Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın."}))} />
  <section className="mt-10 space-y-6 rounded-2xl bg-white p-6 text-gray-900 md:p-8">
   <h2 className="text-2xl font-bold">Yoyo ve Boyun Askı İpi Seçim Rehberi</h2>
   <h3 className="text-xl font-bold">Kartın Kullanım Şekline Göre Seçim</h3>
   <p className="leading-8">Kartın gün içinde nasıl kullanılacağı, doğru askı seçiminin başlangıç noktasıdır. Kart okuyucuya sık uzatılan personel kartları için yoyo mekanizması değerlendirilebilir. Katılımcı adının görünür kalmasının istendiği fuar, toplantı ve organizasyonlarda boyun askı ipi tercih edilebilir. Kart kabının yatay veya dikey olması ve bağlantı deliğinin yeri, seçilecek aksesuarla birlikte kontrol edilmelidir.</p>
   <h3 className="text-xl font-bold">Logo ve Kurumsal Tasarım</h3>
   <p className="leading-8">Firma adı ve logo, seçilen ürünün uygulama alanına göre hazırlanır. Boyun askı ipinde tekrar eden bir logo düzeni isteniyorsa yazı boyutu ve boşluklar tasarım aşamasında değerlendirilir. Yoyo üzerindeki küçük uygulama alanında ise sade bir amblem veya kısa marka adı daha okunabilir olabilir. Her baskı yönteminin tüm modellere uygulanabildiği varsayılmamalıdır; yöntem ve renkler ürün seçimi sonrasında teyit edilir.</p>
   <h3 className="text-xl font-bold">Kart Kabı ve Bağlantı Aksesuarları</h3>
   <p className="leading-8">Yoyo, boyun ipi, kart kabı ve basılı yaka kartı farklı parçalardır. Teklif hazırlanırken hangi parçaların istendiği ayrı ayrı belirtilmelidir. Mevcut personel kartlarıyla kullanılacak bir çalışma için kartın ölçüsünü ve bağlantı biçimini paylaşmak gerekir. Görseldeki ürünler örnek seçenekleri gösterir; tek bir paket içeriği veya kesin renk listesi olarak değerlendirilmemelidir.</p>
   <h3 className="text-xl font-bold">Fuar, Personel ve Etkinlik Siparişleri</h3>
   <p className="leading-8">Kurumsal personel kullanımı ile tek etkinlik için hazırlanan siparişlerde ihtiyaçlar farklı olabilir. Personel kullanımında kartın günlük erişimi; fuar ve organizasyonlarda ise katılımcı adedi, teslim tarihi ve görünür tasarım öne çıkar. Sipariş talebinde kullanım amacını belirtmek, model ve aksesuar seçeneklerinin buna göre değerlendirilmesini sağlar.</p>
   <h3 className="text-xl font-bold">Fiyat ve Teklif Hazırlığı</h3>
   <p className="leading-8">Bu ürün grubunda sabit fiyat gösterilmez. Adet, seçilen model, ip ölçüsü, logo uygulaması ve kart aksesuarları üzerinden teklif hazırlanır. Talebinize logo dosyasını, renk tercihini ve ihtiyaç tarihini ekleyebilirsiniz. Minimum sipariş adedi, güncel bulunabilirlik ve teslim süresi teklif aşamasında belirlenir; onay öncesinde ürün ve baskı kapsamı birlikte netleştirilir.</p>
   <p className="leading-8">Etkinlik dağıtımlarınız için <Link href="/promosyon-kalem" className="font-semibold underline">promosyon kalemleri</Link>, <Link href="/promosyon-ham-bez-tela-canta" className="font-semibold underline">bez ve tela çantaları</Link> veya <Link href="/urunler" className="font-semibold underline">tüm promosyon ürünlerini</Link> de inceleyebilirsiniz.</p>
  </section>
  <section className="mt-8 rounded-2xl bg-white p-6 text-gray-900 md:p-8"><h2 className="text-2xl font-bold">Sık Sorulan Sorular</h2><div className="mt-5 divide-y">{faqs.map(f=><details key={f.q} className="py-4"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-3 leading-7">{f.a}</p></details>)}</div></section>
      <section aria-labelledby="yoyo-boyun-aski-rehberi-baslik" className="mt-10 rounded-3xl border border-gray-200 !bg-white p-6">
        <h2 id="yoyo-boyun-aski-rehberi-baslik" className="text-xl font-bold !text-black">Kart Bağlantısını ve Logo Yerleşimini Planlayın</h2>
        <p className="mt-3 text-sm leading-7 !text-gray-700">Yoyo ve boyun askı ipini kullanım konumuna göre değerlendirin; kart kabı uyumunu, tekrarlı baskıyı ve aksesuar kapsamını netleştirin.</p>
        <Link href="/rehber/promosyon-yoyo-boyun-aski-ipi-secim-ve-baski-rehberi" className="group relative mt-4 flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl bg-black p-5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Image src="/guides/promosyon-yoyo-boyun-aski-ipi-secim-ve-baski-rehberi.jpg" alt="" fill unoptimized loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /><span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" /><div className="relative z-10"><h3 className="text-lg font-bold leading-6 text-white">Yoyo ve Boyun Askı İpi Seçim Rehberini İncele →</h3><p className="mt-2 text-sm leading-6 text-white/90">Yoyo ve boyun askı ipini kart kullanımı, bağlantı uyumu ve logo yerleşimiyle seçin. Kart kabı, baskı yönü ve etkinlik teslim kapsamını planlayın.</p><span className="mt-4 inline-block text-sm font-semibold text-white">İncele ↗</span></div></Link>
      </section>
 </div></div>;
}
