import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isMetalDetailNotebook } from "@/data/notebookSubcategories";

const CATEGORY = "Tarihsiz Defter";
const SITE_URL = "https://www.firmapromosyon.com";
const PAGE_URL = `${SITE_URL}/promosyon-metal-detayli-defter`;
const description = "Metal plakalı, tokalı ve şerit detaylı promosyon defterleri karşılaştırın. Kapak ve iç sayfa özelliklerini inceleyip logo baskılı toplu sipariş için teklif alın.";
const faqItems = [
  {
    "question": "Metal detaylı defter tamamen metal kapaklı mı?",
    "answer": "Hayır. Bu grupta kapakta metal plaka, toka, şerit veya başka metal detay belirtilen tarihsiz defterler yer alır. Bu ayrıntı kapağın tamamının metal olduğunu göstermez."
  },
  {
    "question": "Metal plakalı defter ile metal tokalı defterin farkı nedir?",
    "answer": "Plaka, kapak üzerindeki bir yüzey detayıdır; toka ise kapanış tasarımının parçası olabilir. Konum, ölçü ve işlev model bazında incelenmelidir."
  },
  {
    "question": "Logo metal parçaya uygulanabilir mi?",
    "answer": "Metal parçanın yüzeyi, kaplaması ve alanı değerlendirilerek uygunluk belirlenir. Her metal ayrıntının lazer veya başka bir logo yöntemine uygun olduğunu varsaymayın; ürün kodu ve logonuzla teyit edin."
  },
  {
    "question": "Metal tokalı bütün modeller mıknatıslı mı?",
    "answer": "Metal toka bulunması tek başına mıknatıslı kapanış anlamına gelmez. TD-400 açıklamasında manyetik kilit belirtilir; diğer modellerin kapanış biçimi ayrıca kontrol edilmelidir."
  },
  {
    "question": "Metal detaylı defter fiyatına baskı dahil mi?",
    "answer": "Fiyat gösterilen kartlarda ürün bedeli baskı hariç TL + KDV olarak sunulur. Logo uygulaması, adet ve paketleme istekleriyle toplam teklif hazırlanır. Fiyatı bulunmayan ürünler için güncel teklif isteyin."
  }
];
export const metadata: Metadata = {
 title: "Metal Detaylı Promosyon Defter Modelleri ve Fiyatları", description,
 alternates: { canonical: PAGE_URL },
 openGraph: { title: "Logo Baskılı Metal Detaylı Defter Modelleri", description, url: PAGE_URL, type: "website", locale: "tr_TR", siteName: "FirmaPromosyon" },
};
function JsonLd({ data }: { data: Record<string, unknown> }) {
 return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export default function Page() {
 const list = sortProductsByCode(visibleProducts.filter(p => p.category === CATEGORY && isMetalDetailNotebook(p)));
 return (
  <div className="mx-auto max-w-6xl px-4 py-10">
   <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Promosyon Defter", item: `${SITE_URL}/promosyon-defter` },
    { "@type": "ListItem", position: 3, name: "Metal Detaylı Defter", item: PAGE_URL },
   ] }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Metal Detaylı Promosyon Defter", description, url: PAGE_URL, mainEntity: { "@type": "ItemList", numberOfItems: list.length, itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `${SITE_URL}/urunler/${p.slug}` })) } }} />
   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }} />
   <section className="mb-8 rounded-3xl bg-black px-6 py-8 text-white md:px-8 md:py-10">
    <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-gray-200"><Link href="/" className="underline">Ana Sayfa</Link> / <Link href="/promosyon-defter" className="underline">Promosyon Defter</Link> / Metal Detaylı Defter</nav>
    <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Metal Detaylı Promosyon Defter Modelleri</h1>
    <p className="mt-3 max-w-3xl leading-7 text-gray-200">Metal plaka, toka, şerit veya kapak ayrıntısıyla sunulan tarihsiz defterleri inceleyin. Logo uygulanacak alanı, kapanış yapısını ve iç sayfa özelliklerini karşılaştırarak kurumsal toplu siparişiniz için teklif alın.</p>
    <div className="mt-5 flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Baskılı Sipariş İçin Teklif Al</Link><Link href="/promosyon-defter" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">Tüm Defter Modelleri</Link></div>
   </section>
   <p className="mb-4 text-sm font-medium !text-white">{list.length} metal detaylı defter modeli gösteriliyor</p>
      <section aria-label="Metal detaylı defter ürün listesi" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <Link key={p.id} href={`/urunler/${p.slug}`} className="rounded-2xl border border-gray-200 !bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white"><Image src={p.image} alt={p.title} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-4" /></div>
          <div className="mt-4"><p className="text-xs font-semibold uppercase tracking-wide !text-gray-500">Tarihsiz Defter</p><h2 className="mt-1 text-lg font-bold leading-7 !text-black">{p.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 !text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 text-base font-bold !text-black">{typeof p.price === "number" && p.price > 0 ? `${p.price.toLocaleString("tr-TR")} TL + KDV` : "Fiyat için teklif alın"}</p>
            <p className="mt-1 text-xs leading-5 !text-green-600">Fiyatlar baskı hariçtir. Avantajlı fiyat için WhatsApp’tan yazın.</p><span className="mt-4 inline-block rounded-full !bg-black px-5 py-2 text-sm font-semibold !text-white">Ürünü İncele</span>
          </div></Link>)}
      </section>
      <section className="mt-12 space-y-5 rounded-3xl bg-black px-6 py-8 text-gray-200 md:px-8">
        <h2 className="text-2xl font-bold text-white">Metal Plaka, Toka ve Şerit Arasındaki Farklar</h2>
        <p>Metal detaylı promosyon defter seçerken metal parçanın yalnız görünümünü değil, kapak üzerindeki konumunu ve işlevini de inceleyin. Bir plaka, kapanış tokası ve dekoratif şerit aynı kullanım özelliğini ifade etmez. Bu sayfadaki ürünler, başlık veya kısa açıklamalarında metal ayrıntı belirtilen tarihsiz defterlerden oluşur.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-sm"><caption className="sr-only">Ürün bilgilerinde belirtilen metal detay örnekleri</caption><thead><tr><th scope="col" className="p-3 text-white">Detay</th><th scope="col" className="p-3 text-white">Model örnekleri</th><th scope="col" className="p-3 text-white">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
         ["Metal plaka", "TD-101, TD-102", "Plakanın konumu ve logo alanı"], ["Metal toka", "TD-116, TD-165, TD-190, TD-260", "Kapanış biçimi ve yüzey"], ["Metal şerit", "TD-370", "Şeridin kapak tasarımındaki yeri"], ["Metal detaylı kapanış bandı", "TD-104", "Bandın yerleşimi"], ["Manyetik kilit ve metal toka", "TD-400", "Kapanış mekanizması"],
        ].map(([feature, code, check]) => <tr key={feature} className="border-t border-white/15"><th scope="row" className="p-3 font-semibold text-white">{feature}</th><td className="p-3">{code}</td><td className="p-3">{check}</td></tr>)}</tbody></table></div>
        <h3 className="text-xl font-bold text-white">Metal Detay, Tamamen Metal Kapak Demek Değildir</h3>
        <p>Bu gruptaki ürünlerin kapak malzemeleri ve metal parçaları birlikte değerlendirilmelidir. Örneğin TD-116 termo deri kapak ve metal toka bilgisiyle, TD-165 termo PU kapak ve metal toka bilgisiyle sunulur. Metal ayrıntı ifadesinden kapağın tamamının metal olduğu veya bütün ürünlerin aynı ağırlıkta olduğu sonucu çıkarılamaz.</p>
        <h3 className="text-xl font-bold text-white">Logoyu Kapağa mı, Metal Parçaya mı Uygulamalı?</h3>
        <p>Logo konumunu seçerken parçanın ölçüsünü, kaplamasını ve kapak üzerindeki yerini kontrol edin. Küçük bir metal plaka uzun firma adları veya çok satırlı iletişim bilgileri için sınırlı alan sunabilir. Kapak yüzeyi ise dikiş, toka veya şerit nedeniyle farklı bir yerleşim gerektirebilir.</p>
        <p>Lazer, sıcak baskı, gofre veya renkli uygulama tercihinde model ve logo birlikte değerlendirilir. Her metal parçanın lazer kazımaya uygun olduğu varsayılmamalıdır. Mümkünse vektörel logo dosyanızı göndererek uygulanabilir alanı ve yöntemi teyit edin. Üretim öncesinde tasarımı gerçek uygulama ölçüsünde onaylayın.</p>
        <h3 className="text-xl font-bold text-white">Kapanış Biçimini Ayrı Kontrol Edin</h3>
        <p>Metal toka ve manyetik kilit aynı özellik değildir. TD-400 açıklamasında manyetik kilitli kapak belirtilir. Diğer metal tokalı modellerde aynı mekanizmanın bulunduğunu kabul etmeyin. Çantada taşıma veya masa üzerinde kullanım için kapanışın biçimini ürün görselleri ve güncel teknik bilgiler üzerinden değerlendirin.</p>
        <h3 className="text-xl font-bold text-white">Organizer Kılıfı ve İç Sayfa Özellikleri</h3>
        <p>TD-135 ve TD-136 kılıflı organizer defter olarak tanımlanır. TD-135 açıklamasında 224 çizgili sayfa, TD-136 için 13 x 21 cm iç blok ve 160 çizgili sayfa bilgisi bulunur. Dış kılıf ölçüsü ile iç bloğun ölçüsünü aynı kabul etmeyin; paket içeriğini model bazında sorun.</p>
        <p>TD-440 için 15 x 21 cm ve 232 çizgili sayfa belirtilir. Diğer modellerin ebat, sayfa sayısı ve kâğıt özelliklerini ürün detayından ayrı karşılaştırın. Metal ayrıntı, iç sayfa düzenini veya kâğıt gramajını belirlemez. Günlük not alma ihtiyacınızı esas alarak seçim yapın.</p>
        <h3 className="text-xl font-bold text-white">Logo Baskılı Toplu Sipariş</h3>
        <p>Ürün kodunu, renk dağılımını, adedi ve logonun kapakta mı metal parçada mı olmasını istediğinizi paylaşın. Kalem, kutu veya ayrı paketleme gerekiyorsa bunları teklife ekletin. Ürün fotoğrafında bir aksesuar görünmesi tek başına ürün bedeline dahil olduğunu göstermez.</p>
        <p>Fiyat gösterilen kartlarda bedel baskı hariç TL + KDV olarak sunulur. Toplam tutarı aynı model ve uygulama kapsamı üzerinden karşılaştırın. Güncel tedarik uygunluğu, tasarım onayı ve teslimat adresi sipariş planında birlikte değerlendirilir.</p>
        <p>Kalemi birlikte taşımak için <Link href="/promosyon-kalem-tutuculu-defter" className="font-semibold text-white underline">kalem tutuculu defterleri</Link> inceleyebilirsiniz. Bütün modeller <Link href="/promosyon-defter" className="font-semibold text-white underline">ana defter kategorisinde</Link> yer alır.</p>
      </section>
      <section className="mt-10 rounded-3xl bg-black px-6 py-8 text-white"><h2 className="text-2xl font-bold text-white">Metal Detaylı Defter Hakkında Sık Sorulan Sorular</h2><div className="mt-6 space-y-5">{faqItems.map(f => <div key={f.question}><h3 className="text-lg font-semibold text-white">{f.question}</h3><p className="mt-2 text-sm leading-6 text-gray-200">{f.answer}</p></div>)}</div></section>
    </div>
  );
}
