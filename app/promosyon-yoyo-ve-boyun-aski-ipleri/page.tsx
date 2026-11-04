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
 return <main className="mx-auto max-w-7xl px-4 py-8 md:py-12">
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Ana Sayfa",item:"https://www.firmapromosyon.com"},{"@type":"ListItem",position:2,name:CATEGORY,item:URL}]}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:title,description,url:URL,mainEntity:{"@type":"ItemList",numberOfItems:list.length,itemListElement:list.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.title,url:`https://www.firmapromosyon.com/urunler/${p.slug}`}))}}}/>
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}}/>
  <header className="mb-8 rounded-3xl bg-black p-6 text-white md:p-10">
   <nav aria-label="Sayfa yolu" className="mb-5 text-sm"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/urunler" className="underline">Ürünler</Link> / {CATEGORY}</nav>
   <h1 className="text-3xl font-extrabold md:text-5xl">Logo Baskılı Yoyo ve Boyun Askı İpleri</h1>
   <p className="mt-5 max-w-4xl leading-8">Personel kartlarını, fuar giriş kartlarını ve etkinlik yaka kartlarını taşımak için yoyo ve boyun askı iplerini değerlendirin. Kullanım şeklinize uygun kart bağlantısını, logo uygulamasını ve aksesuar kapsamını birlikte planlayın.</p>
   <Link href="/kurumsal-teklif-al" className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-black">Yoyo ve Boyun Askı İpi İçin Teklif Al</Link>
  </header>
  <p className="mb-4 !text-white">{list.length} ürün grubu gösteriliyor. Model ve aksesuar seçenekleri teklif aşamasında netleştirilir.</p>
  <section aria-label="Yoyo ve boyun askı ipi ürün listesi" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map(p=><Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 bg-white p-5 text-gray-900 shadow-sm hover:shadow-md">
   <div className="relative aspect-square overflow-hidden rounded-xl bg-white"><Image src={p.image} alt="Yoyo kart tutucular, baskılı boyun askı ipleri ve yaka kartı aksesuarlarına ait örnekler" fill unoptimized sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-3"/></div>
   <h2 className="mt-4 text-xl font-bold">{p.title}</h2><p className="mt-3 leading-7 text-gray-700">{p.shortDesc}</p><p className="mt-4 font-bold">Fiyat için teklif alın</p><span className="mt-4 inline-block font-semibold underline">Ürün ve Sipariş Bilgilerini İncele →</span>
  </Link>)}</section>
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
 </main>;
}
