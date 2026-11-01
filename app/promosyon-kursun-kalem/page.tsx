
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { visibleProducts } from "@/data/productVisibility";
import { sortProductsByCode } from "@/data/productSorting";
import { isPencil } from "@/data/penSubcategories";

const CATEGORY = "Kalem";
const PAGE_URL = "https://www.firmapromosyon.com/promosyon-kursun-kalem";
const SITE_URL = "https://www.firmapromosyon.com";
const description = "Logo baskılı kurşun kalem modellerini ve baskı hariç fiyatlarını karşılaştırın. Naturel, silgili ve tohumlu seçenekleri inceleyerek toplu sipariş için teklif alın.";

export const metadata: Metadata = {
  title: "Promosyon Kurşun Kalem Modelleri ve Fiyatları",
  description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Promosyon Kurşun Kalem Modelleri ve Fiyatları",
    description, url: PAGE_URL, type: "website",
    locale: "tr_TR", siteName: "FirmaPromosyon",
    images: [SITE_URL + "/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promosyon Kurşun Kalem Modelleri ve Fiyatları",
    description, images: [SITE_URL + "/og.jpg"],
  },
};

export default function Page() {
  const list = sortProductsByCode(visibleProducts.filter(
    p => p.category === CATEGORY && isPencil(p)
  ));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Promosyon Kalem", item: SITE_URL + "/promosyon-kalem" },
          { "@type": "ListItem", position: 3, name: "Kurşun Kalem", item: PAGE_URL },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "Promosyon Kurşun Kalem", url: PAGE_URL, description,
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
          <span aria-current="page">Kurşun Kalem</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">Logo Baskılı Promosyon Kurşun Kalem Modelleri</h1>

<p className="mt-4 max-w-3xl leading-7 text-gray-200">Naturel, siyah gövdeli, silgili ve tohumlu kurşun kalem seçeneklerini inceleyin. Gövde biçimini, yazım özelliğini ve logo alanını kullanım amacınıza göre karşılaştırın. Sayısal fiyatlar baskı hariç TL + KDV olarak gösterilir.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/kurumsal-teklif-al" className="rounded-xl bg-white px-5 py-3 font-semibold text-black">Toplu Sipariş İçin Teklif Al</Link>
          <Link href="/promosyon-kalem" className="rounded-xl border border-white/40 px-5 py-3 text-white">Tüm Kalem Modelleri</Link>
        </div>
      </section>
      <p className="mt-6 text-sm !text-white">{list.length} kurşun kalem modeli gösteriliyor</p>
      <section aria-label="Kurşun kalem modelleri" className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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



<section id="kursun-kalem-secim-rehberi" className="mt-12 space-y-10 rounded-3xl bg-white p-6 text-gray-800 md:p-10">
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Logo Baskılı Kurşun Kalem Modelleri</h2>
<p className="leading-7">Kurşun kalemler; eğitim etkinliklerinde, atölyelerde, not alma çalışmalarında ve kurumsal tanıtımlarda değerlendirilebilir. Dağıtımın yapılacağı ortamı ve kullanım amacını belirleyerek gövde biçimini, silgi ihtiyacını ve logo tasarımını birlikte seçebilirsiniz.</p>
<p className="leading-7">Bu sayfada Kalem kategorisindeki kurşun kalem kayıtları bir araya getirilir. Naturel ve siyah gövde seçeneklerinin yanında silgili ve tohumlu modeller bulunur. Her ürün aynı yazım özelliğine sahip değildir; özellikle uç rengi ve sertlik bilgisi için ürün detayını esas alın.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Naturel, Köşeli ve Yuvarlak Gövde Seçimi</h2>
<p className="leading-7">Naturel görünüm ile boyalı gövde arasında karar verirken logonuzun kontrastını ve tasarımın uygulanacağı yüzeyi düşünün. Gövdenin köşeli veya yuvarlak olması hem tutuş tercihinde hem de logo yerleşiminde değerlendirilmesi gereken bir ayrıntıdır.</p>
<p className="leading-7">Ürün görselindeki rengi tek başına teknik özellik olarak kabul etmeyin. Gövde malzemesi, ölçüler ve baskı alanı belirtilmişse ürün detayından kontrol edin. Aynı tasarımı farklı modellerde kullanmak istiyorsanız yerleşimin her gövde için ayrı değerlendirilmesini isteyin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Silgili ve Farklı Yazım Uçlu Seçenekler</h2>
<p className="leading-7">Silgili model tercihi kullanım alışkanlığına bağlıdır. Eğitim veya sık düzeltme yapılan çalışmalar için silgi ihtiyacını baştan belirtebilirsiniz. Silgisiz modellerde ayrı silgi veya ek ambalaj ihtiyacınız varsa bunu teklif kapsamına ekletin.</p>
<p className="leading-7">Kurşun kalem adı tüm modellerin siyah yazdığı veya aynı sertlikte olduğu anlamına gelmez. Katalogda kırmızı uçlu olarak tanımlanan bir seçenek de bulunur. HB, B veya başka bir sertlik derecesi belirtilmemişse tahminde bulunmayın; yazım rengi ve uç bilgisini sipariş öncesinde kontrol edin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Tohumlu Kurşun Kalem İçin Nelere Bakılmalı?</h2>
<p className="leading-7">Tohumlu model seçerken ürünün belirtilen tohum ve kullanım bilgilerini inceleyin. Ekim yöntemi ve saklama koşulları ürün bilgisine göre değerlendirilmelidir. Tohum türünü, çimlenme süresini veya sonucu ürün açıklamasında doğrulanmadan vaat etmeyin.</p>
<p className="leading-7">Kurumsal bir etkinlikte dağıtım yapacaksanız kullanım bilgisinin alıcıya nasıl aktarılacağını da planlayın. Kart, kılıf veya özel ambalaj isteğiniz varsa dahil olan parçaları ve ek maliyetleri teklifte netleştirin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Kurşun Kaleme Logo Baskısı</h2>
<p className="leading-7">Logo uygulaması gövde yüzeyi, kullanılabilir alan ve tasarımla birlikte değerlendirilir. Baskı yöntemini tüm modellere ortak kabul etmeyin. Firma adı, internet adresi veya ek mesaj kullanılacaksa bütün tasarımı birlikte paylaşın.</p>
<p className="leading-7">Uzun bir web adresi veya ayrıntılı logo için küçük yazıların okunabilirliğini kontrol edin. Baskı yönü, konumu ve ölçüsü tasarım onayında açıkça görülmelidir. Silgi ve bağlantı parçaları bulunan modellerde logo alanının nerede kalacağını ayrıca değerlendirin.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Kurşun Kalem Fiyatları ve Toplu Sipariş</h2>
<p className="leading-7">Kartlardaki sayısal fiyatlar baskı hariç birim ürün tutarıdır; KDV ayrıca eklenir. Karşılaştırma yaparken aynı adet, baskı yönü ve ambalaj şartlarıyla teklif isteyin. Fiyat bulunmayan modeller için güncel teklif alabilirsiniz.</p>
<p className="leading-7">Talebinizde ürün kodunu, adedi, logo dosyasını ve ihtiyaç tarihinizi paylaşın. Ürünler güncel tedarikçi stoklarına göre temin edilir. Minimum adet, teslim süresi ve ambalaj kapsamı model ile baskı koşullarına göre netleştirilir. Etkinlik tarihi varsa üretim onayı ve sevkiyat süresini birlikte planlayın.</p>
</div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Kurşun Kalem Seçim Tablosu</h2><div className="overflow-x-auto"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><caption className="sr-only">Kurşun kalem karşılaştırma ölçütleri</caption><thead><tr><th scope="col" className="border-b p-3 text-black">Özellik</th><th scope="col" className="border-b p-3 text-black">Kontrol edilecek bilgi</th></tr></thead><tbody>{[
["Gövde", "Naturel veya boyalı görünüm, köşeli veya yuvarlak biçim"],
["Yazım", "Uç rengi ve varsa belirtilen sertlik derecesi"],
["Silgi", "Modelde silgi bulunması ve kullanım ihtiyacı"],
["Tohumlu model", "Belirtilen tohum ve kullanım bilgileri"],
["Logo ve sipariş", "Baskı alanı, adet, ambalaj ve ihtiyaç tarihi"],
].map(([a,b]) => <tr key={a}><th scope="row" className="border-b p-3 font-semibold text-black">{a}</th><td className="border-b p-3">{b}</td></tr>)}</tbody></table></div></div>
<div className="space-y-4"><h2 className="text-2xl font-bold text-black">Kurşun Kalem Hakkında Sık Sorulan Sorular</h2><div className="divide-y divide-gray-200">{[
["Bütün modeller HB uçlu mu?", "Sertlik derecesi ürün bazında kontrol edilmelidir. Bilgi belirtilmemişse bütün modellerin HB olduğunu varsaymayın."],
["Tüm kurşun kalemler siyah mı yazar?", "Yazım rengi modele göre değerlendirilir. Kırmızı uçlu olarak tanımlanan seçenek de bulunduğundan ürün bilgisini kontrol edin."],
["Silgili ve silgisiz modeller var mı?", "Model adlarını ve ürün detaylarını karşılaştırarak silgi bulunan seçenekleri inceleyebilirsiniz."],
["Tohumlu modelde çimlenme garantisi var mı?", "Tohum ve kullanım bilgileri ürün özelinde değerlendirilmelidir. Belirli bir çimlenme sonucu veya süre vaadi verilmez."],
["Fiyata logo baskısı dahil mi?", "Sayısal ürün fiyatları baskı hariç TL + KDV tutarlarıdır. Adet, model ve tasarıma göre baskılı teklif isteyin."],
["En az kaç adet sipariş verilebilir?", "Minimum adet ve teslim süresi güncel tedarik ile baskı koşullarına göre netleştirilir. İhtiyaç adedinizi ve tarihinizi paylaşın."],
].map(([q,a]) => <div key={q} className="py-5"><h3 className="text-lg font-bold text-black">{q}</h3><p className="mt-2 leading-7">{a}</p></div>)}</div></div>
<div className="space-y-3"><h2 className="text-2xl font-bold text-black">Sipariş ve Baskı Rehberleri</h2><p className="leading-7"><Link href="/rehber/promosyon-kalem-toptan" className="font-semibold text-black underline">Toplu kalem siparişi rehberi</Link> ile hazırlık adımlarını; <Link href="/rehber/promosyon-kalemlerde-baski-turleri-nelerdir" className="font-semibold text-black underline">kalem baskı türleri rehberi</Link> ile uygulama seçeneklerini inceleyebilirsiniz.</p></div>
<div className="flex flex-wrap gap-3"><Link href="/kurumsal-teklif-al" className="rounded-xl bg-black px-5 py-3 font-semibold text-white">Kurşun Kalem İçin Teklif Al</Link>
<Link href="/promosyon-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Tüm Kalemler</Link>
<Link href="/promosyon-metal-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Metal Kalemler</Link>
<Link href="/promosyon-plastik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Plastik Kalemler</Link>
<Link href="/promosyon-dokunmatik-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Dokunmatik Kalemler</Link>
<Link href="/promosyon-roller-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Roller Kalemler</Link>
<Link href="/promosyon-jel-kalem" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-black">Jel Kalemler</Link>
</div></section></div>
  );
}
