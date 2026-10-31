
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isRollerPen } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-roller-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı roller kalem modellerini ve baskı hariç fiyatlarını karşılaştırın. Gövde, refil ve logo uygulaması seçeneklerini inceleyerek toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Roller Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Roller Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Roller Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isRollerPen(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Roller Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Roller Kalem", url: PAGE_URL, description,
        mainEntity: {
          "@type": "ItemList", numberOfItems: list.length,
          itemListElement: list.map((p, i) => ({
            "@type": "ListItem", position: i + 1,
            name: p.title, url: SITE_URL + "/urunler/" + p.slug,
          })),
        },
      },
    ],
  };
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="rounded-3xl bg-black p-6 text-white md:p-10">
        <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap gap-2 text-sm text-gray-200">
          <Link href="/" className="underline">Ana Sayfa</Link><span>/</span>
          <Link href="/promosyon-kalem" className="underline">Promosyon Kalem</Link><span>/</span>
          <span aria-current="page">Roller Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Roller Kalem Modelleri</h1>

<p className="mt-4 max-w-3xl leading-7 text-gray-200">
          Kurumsal hediye ve günlük yazım için RK serisi roller kalem modellerini
          karşılaştırın. Gövde yüzeyi, kapak tasarımı ve yazım özelliklerini ürün
          detaylarından inceleyin. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} roller kalem modeli gösteriliyor</p>
      <section aria-label="Roller kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => (
          <Link key={p.id} href={"/urunler/" + p.slug}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
              <Image src={p.image} alt={p.title} fill unoptimized loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4" />
            </div>
            <h2 className="mt-4 text-lg font-bold !text-black">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">{p.shortDesc}</p>
            <p className="mt-3 font-bold text-gray-900">
              {typeof p.price === "number" && p.price > 0
                ? p.price.toLocaleString("tr-TR") + " TL + KDV"
                : "Güncel fiyat için teklif alın"}
            </p>
            {typeof p.price === "number" && p.price > 0 &&
              <p className="mt-1 text-xs text-gray-600">Fiyat baskı hariçtir.</p>}
            <span className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">Ürünü İncele</span>
          </Link>
        ))}
      </section>



<section id="roller-kalem-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4">
<h2 className="text-2xl font-bold text-black">Logo Baskılı Roller Kalem Seçimi</h2>
<p className="leading-7">Roller kalem seçerken görünüm kadar yazım özelliklerini de karşılaştırın. Müşteri ziyaretlerinde verilecek bir hediye, toplantılarda kullanılacak bir kalem ve çalışanlara dağıtılacak bir ürün için öncelikler farklı olabilir. Hedeflediğiniz adedi, kullanım amacını ve toplam bütçeyi birlikte belirlemek model seçimini kolaylaştırır.</p>
<p className="leading-7">Bu sayfada roller olarak tanımlanan RK serisi modeller listelenir. Ürün kodu tek başına gövde malzemesini, mürekkep rengini veya refil türünü anlatmaz. Her modelin detay sayfasını inceleyin; belirtilmeyen teknik özellikleri sipariş öncesinde sorun.</p>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-black">Roller, Tükenmez ve Jel Kalem Arasındaki Fark</h2>
<p className="leading-7">Bu adlandırmalar kalemin yazım sistemiyle ilgilidir; metal veya plastik ise gövde malzemesini tanımlar. Metal gövdeli bir ürünün yalnızca görünümüne bakarak roller olduğunu söylemek doğru değildir. Benzer şekilde kapaklı tasarım da tek başına mürekkep türünü göstermez.</p>
<p className="leading-7">Yazım hissi, uç kalınlığı, mürekkep ve refil özellikleri modele göre değişebilir. Özellikle belirli bir yazım türü veya değiştirilebilir refil arıyorsanız bu bilgileri ürün bazında kontrol edin. Kararınız yazım deneyimine bağlıysa siparişten önce numune temin koşullarını sorabilirsiniz.</p>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-black">Roller Kaleme Logo Nasıl Uygulanır?</h2>
<p className="leading-7">Logo uygulaması gövde malzemesi ve yüzey kaplamasıyla birlikte değerlendirilir. Lazer baskıya uygun olduğu belirtilen modellerde bile işaretleme alanı, oluşacak görünüm ve logonun ayrıntı seviyesi önemlidir. Bütün roller kalemlerin aynı yöntemle basılabileceğini varsaymayın.</p>
<p className="leading-7">Logonuzu, firma adını ve kullanılacak diğer yazıları birlikte paylaşın. Tek veya çift yön uygulama isteğinizi belirtin. Üretim onayında logonun konumunu, ölçüsünü ve küçük yazıların okunabilirliğini kontrol edin. Gövde ve kapak üzerinde uygulama seçenekleri her üründe aynı olmayabilir.</p>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-black">Roller Kalem Fiyatları ve Teklif Kapsamı</h2>
<p className="leading-7">Kartlarda yer alan sayısal tutarlar baskı hariç birim ürün fiyatıdır ve KDV ayrıca eklenir. Fiyat belirtilmeyen modeller için güncel teklif isteyin. Alternatifleri karşılaştırırken aynı adet, baskı yönü ve ambalaj şartlarını kullanın; yalnızca ürün birim fiyatını karşılaştırmak toplam maliyeti göstermeyebilir.</p>
<p className="leading-7">Baskılı siparişte ürün bedeli, logo uygulaması, varsa kutu veya ek ambalaj ve kargo kapsamını ayrı ayrı netleştirin. Ürün görselinde kutu bulunması kutunun fiyata dahil olduğu anlamına gelmez; dahil olan parçalar ürün bilgisi ve teklif üzerinden değerlendirilmelidir.</p>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-black">Toplu Roller Kalem Siparişi İçin Hazırlık</h2>
<p className="leading-7">Teklif talebinde RK ürün kodunu, adedi, tercih ettiğiniz gövde rengini, logo dosyasını ve ihtiyaç tarihinizi paylaşın. Mürekkep rengi veya refil konusunda özel beklentiniz varsa bunu ayrıca belirtin. Gövde rengi ile mürekkep rengi farklı bilgilerdir.</p>
<p className="leading-7">Ürünler güncel tedarikçi stoklarına göre temin edilir. Renk ve adet uygunluğu, minimum sipariş ve teslim süresi model ile baskı koşullarına göre netleştirilir. Belirli bir etkinliğe yetişmesi gereken siparişlerde baskı onayı ve sevkiyat süresini birlikte planlayın.</p>
</div>
<div className="space-y-4">
<h2 className="text-2xl font-bold text-black">Modelleri Karşılaştırırken Kontrol Edilecekler</h2>
<div className="overflow-x-auto"><table className="w-full min-w-[520px] border-collapse text-left text-sm">
<caption className="sr-only">Roller kalem karşılaştırma ölçütleri</caption>
<thead><tr><th scope="col" className="border-b p-3 text-black">Ölçüt</th><th scope="col" className="border-b p-3 text-black">Kontrol edilecek bilgi</th></tr></thead>
<tbody>{[
 ["Yazım", "Belirtilen refil, mürekkep rengi ve uç özellikleri"],
 ["Gövde", "Malzeme, kaplama, tutuş ve kapak tasarımı"],
 ["Logo", "Uygun yöntem, uygulama alanı ve baskı yönü"],
 ["Ambalaj", "Kutu veya ek ambalajın teklif kapsamı"],
 ["Tedarik", "Renk, adet uygunluğu ve ihtiyaç tarihi"],
].map(([label, value]) => <tr key={label}><th scope="row" className="border-b p-3 font-semibold text-black">{label}</th><td className="border-b p-3">{value}</td></tr>)}</tbody>
</table></div></div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Roller Kalem Hakkında Sık Sorulan Sorular</h2>
<div className="divide-y divide-gray-200">{[
 ["Her model metal gövdeli mi?", "Roller ifadesi gövde malzemesini belirtmez. Malzeme ve kaplama bilgilerini seçtiğiniz ürünün detayından kontrol edin."],
 ["Bütün modeller aynı mürekkeple mi yazıyor?", "Mürekkep rengi, uç ve refil özellikleri ürün bazında değerlendirilmelidir. Eksik bilgileri teklif sırasında sorun."],
 ["Refil değiştirilebilir mi?", "Değiştirilebilirlik ve uyumlu refil bilgisi model için doğrulanmalıdır. Tüm ürünlere ortak bir refil vaadi verilmez."],
 ["Logo baskısı fiyatın içinde mi?", "Listelenen sayısal fiyatlar baskı hariç TL + KDV tutarlarıdır. Adet, model ve tasarıma göre baskılı teklif alabilirsiniz."],
 ["Kalemler kutulu mu gönderiliyor?", "Kutu ve ambalaj kapsamını ürün bilgisi ve teklif üzerinden kontrol edin. İstediğiniz sunum şeklini sipariş talebinde belirtin."],
 ["En az kaç adet sipariş verilebilir?", "Minimum adet ve teslim süresi model, tedarikçi stoku ve uygulama koşullarına göre netleştirilir."],
].map(([q, a]) => <div key={q} className="py-5"><h3 className="text-lg font-bold text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold text-black">Sipariş ve Baskı Rehberleri</h2>
<p className="leading-7"><Link href="/rehber/promosyon-kalem-toptan" className="font-semibold text-black underline">Toplu kalem siparişi rehberi</Link> ile teklif hazırlığını; <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-black underline">kalem baskı türleri rehberi</Link> ile uygulama seçeneklerini inceleyebilirsiniz.</p></div>
<div className="flex flex-wrap gap-3">
<Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Roller Kalem İçin Teklif Al</Link>
<Link href="/promosyon-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Tüm Kalemler</Link>
<Link href="/promosyon-metal-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Metal Kalemler</Link>
<Link href="/promosyon-plastik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Plastik Kalemler</Link>
<Link href="/promosyon-dokunmatik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Dokunmatik Kalemler</Link>
</div></section></div>
  );
}
