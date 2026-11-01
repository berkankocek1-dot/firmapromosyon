
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isGelPen } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-jel-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı jel kalem modellerini karşılaştırın. Gövde, uç ve jel refil özelliklerini inceleyin; baskılı toplu sipariş için güncel teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Jel Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Jel Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Jel Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isGelPen(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Jel Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Jel Kalem", url: PAGE_URL, description,
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
          <span aria-current="page">Jel Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Jel Kalem Modelleri</h1>

<p className="mt-4 max-w-3xl leading-7 text-gray-200">Metal, plastik ve dokunmatik modeller arasındaki jel kalem seçeneklerini inceleyin. Uç ve refil bilgisini, gövde yapısını ve logo uygulamasını karşılaştırın. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} jel kalem modeli gösteriliyor</p>
      <section aria-label="Jel kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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



<section id="jel-kalem-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Promosyon Jel Kalem Seçenekleri</h2>
<p className="leading-7">Jel kalem ararken gövde malzemesi ile yazım türünü ayrı değerlendirin. Metal, plastik veya dokunmatik olarak adlandırılan bir model jel refil taşıyabilir. Bu nedenle jel seçenekleri farklı kalem gruplarında bulunabilir; seçimde ürünün yazım bilgisini esas alın.</p>
<p className="leading-7">Bu sayfa başlığında jel veya jell yazım özelliği belirtilen modelleri bir araya getirir. Yarı jel olarak belirtilen ürünler bu listeye dahil edilmez. Modelin uç kalınlığı, mürekkep rengi ve refil özellikleri için ürün detaylarını inceleyin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Uç Kalınlığı, Mürekkep ve Refil Nasıl Karşılaştırılır?</h2>
<p className="leading-7">İnce çizgi isteyen bir kullanıcı ile daha belirgin yazımı tercih eden bir kullanıcının beklentisi farklı olabilir. Uç kalınlığı belirtilen modelleri bu bilgi üzerinden karşılaştırın; bütün jel kalemleri aynı uç ölçüsünde değerlendirmeyin. Yazım deneyimi sizin için belirleyiciyse numune temin koşullarını sorabilirsiniz.</p>
<p className="leading-7">Gövde renginden mürekkep rengini çıkarmayın. Değiştirilebilir refil, mürekkep miktarı veya kuruma süresi hakkında bilgi yoksa bunları varsaymayın. Solak kullanımı, belirli bir kağıt türü veya yoğun imza kullanımı gibi özel ihtiyaçlarınızı teklif talebinde belirtin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Jel Kalem Gövdesi ve Logo Uygulaması</h2>
<p className="leading-7">Yazım türü tek başına baskı yöntemini belirlemez. Logo uygulaması için gövdenin malzemesi, yüzey kaplaması ve kullanılabilir alanı değerlendirilir. Metal ve plastik modeller için aynı uygulama yönteminin uygun olduğunu varsaymayın; seçilen ürünün baskı bilgisini kontrol edin.</p>
<p className="leading-7">Logoyu, firma adını ve varsa ek mesajı birlikte paylaşın. Tek veya çift yön uygulama isteğinizi belirtin. Küçük yazılar, ince çizgiler ve ayrıntılı simgeler kalem üzerindeki sınırlı alanda değerlendirilmelidir. Üretim onayında yerleşimi, ölçüyü ve yazıları birlikte kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Jel Kalem Fiyatları ve Toplu Alım</h2>
<p className="leading-7">Kartlardaki sayısal tutarlar baskı hariç birim ürün fiyatıdır; KDV ayrıca eklenir. Fiyatı belirtilmeyen ürünler için güncel teklif isteyin. Aynı adet ve aynı logo uygulamasıyla hazırlanmış teklifleri karşılaştırmak toplam maliyeti değerlendirmenizi kolaylaştırır.</p>
<p className="leading-7">Siparişte ürün bedeli, baskı, varsa ambalaj ve kargo kapsamını netleştirin. Düşük birim fiyat tek başına kullanım amacına uygunluğu göstermez. Yazım beklentisi, tutuş ve sunum şekliyle birlikte değerlendirme yapın.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Baskılı Sipariş İçin Hangi Bilgiler Gerekli?</h2>
<p className="leading-7">Ürün kodunu, adedi, gövde rengi tercihini, logo dosyasını ve ihtiyaç tarihinizi paylaşın. Mürekkep rengi veya uç kalınlığı konusunda özel beklentiniz varsa bunu ayrıca belirtin. Birden fazla model arasında karar veriyorsanız aynı şartlarla alternatif teklif isteyin.</p>
<p className="leading-7">Ürünler güncel tedarikçi stoklarına göre temin edilir. Minimum sipariş, renk uygunluğu ve teslim süresi ürün ile baskı koşullarına göre netleştirilir. Etkinlik veya toplantı için alım yapıyorsanız tasarım onayı ve sevkiyat süresini birlikte planlayın.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Jel Kalem Seçim Tablosu</h2>
<div className="overflow-x-auto"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><caption className="sr-only">Jel kalem karşılaştırma ölçütleri</caption><thead><tr><th scope="col" className="border-b p-3 text-black">Özellik</th><th scope="col" className="border-b p-3 text-black">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
["Yazım", "Jel refil tanımı, belirtilen uç kalınlığı ve mürekkep rengi"],
["Gövde", "Metal veya plastik yapı, tutuş ve varsa stylus özelliği"],
["Baskı", "Yüzeye uygun yöntem, logo alanı ve uygulama yönü"],
["Sipariş", "Adet, renk uygunluğu, ambalaj ve ihtiyaç tarihi"],
].map(([a,b]) => <tr key={a}><th scope="row" className="border-b p-3 font-semibold text-black">{a}</th><td className="border-b p-3">{b}</td></tr>)}</tbody></table></div></div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Jel Kalem Hakkında Sık Sorulan Sorular</h2><div className="divide-y divide-gray-200">{[
["Jel kalemler sadece plastik gövdeli mi?", "Hayır. Gövde malzemesi ile yazım türü farklı özelliklerdir. Listede ürün bilgisinde jel özelliği belirtilen farklı gövde seçenekleri bulunabilir."],
["Her jel kalemin uç kalınlığı aynı mı?", "Uç ölçüsü modele göre değerlendirilir. Ölçü belirtilmişse ürün detayından kontrol edin; eksik bilgileri sipariş öncesinde sorun."],
["Gövde rengiyle mürekkep rengi aynı mı?", "Bunlar ayrı bilgilerdir. İstediğiniz yazım rengini ürün bilgisinden kontrol edin ve teklif talebinde belirtin."],
["Jel kaleme lazer baskı yapılabilir mi?", "Baskı uygunluğu refilden değil gövde ve yüzey özelliklerinden hareketle belirlenir. Seçilen model için belirtilen yöntemi esas alın."],
["Fiyata baskı dahil mi?", "Sayısal fiyatlar baskı hariç TL + KDV tutarlarıdır. Model, adet ve logo uygulaması için baskılı teklif isteyin."],
["Kaç adet sipariş verebilirim?", "Minimum adet, renk temini ve teslim süresi güncel tedarik ile baskı koşullarına göre netleştirilir."],
].map(([q,a]) => <div key={q} className="py-5"><h3 className="text-lg font-bold text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold text-black">İlgili Kalem Rehberleri</h2><p className="leading-7"><Link href="/rehber/promosyon-kalem-toptan" className="font-semibold text-black underline">Toplu sipariş rehberini</Link> ve <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-black underline">kalem baskı türlerini</Link> inceleyerek teklif hazırlığınızı tamamlayabilirsiniz.</p></div>
<div className="flex flex-wrap gap-3">
<Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Jel Kalem İçin Teklif Al</Link>
<Link href="/promosyon-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Tüm Kalemler</Link>
<Link href="/promosyon-metal-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Metal Kalemler</Link>
<Link href="/promosyon-plastik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Plastik Kalemler</Link>
<Link href="/promosyon-dokunmatik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Dokunmatik Kalemler</Link>
<Link href="/promosyon-roller-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Roller Kalemler</Link>
</div></section></div>
  );
}
