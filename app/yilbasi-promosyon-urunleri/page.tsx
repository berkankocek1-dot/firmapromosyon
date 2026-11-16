import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import NewYearProductShowcase from "@/app/components/NewYearProductShowcase";
import type { Product } from "@/data/products";
import { newYearGroups, getNewYearProducts } from "@/data/newYearProducts";

const SITE = "https://www.firmapromosyon.com";
const PATH = "/yilbasi-promosyon-urunleri";
const TITLE = "2027 Yılbaşı Promosyon Ürünleri ve Kurumsal Hediyeler";
const DESCRIPTION = "2027 yılbaşı promosyon ürünleri: logo baskılı hediye setleri, ajanda, kalem seti, masa sümeni ve USB bellek seçeneklerini karşılaştırın. Toplu sipariş teklifi alın.";
const WHATSAPP = "https://wa.me/905350509128?text=" + encodeURIComponent("Merhaba, kurumsal yılbaşı hediyeleri için teklif almak istiyorum. Ürün, adet ve teslim tarihi bilgilerini paylaşmak istiyorum.");

export const metadata: Metadata = {
  title: "2027 Yılbaşı Promosyon Ürünleri | Kurumsal Hediyeler",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: SITE + PATH,
    type: "website", images: [{ url: SITE + "/og.jpg", width: 1200, height: 630, alt: "FirmaPromosyon kurumsal hediye seçenekleri" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SITE + "/og.jpg"] },
};

const FAQ = [
  { q: "Yılbaşı promosyon siparişini ne zaman vermeliyim?", a: "İhtiyaç duyduğunuz teslim tarihini teklif isterken belirtin. Hazırlık süresi; ürünün stok durumuna, adede, logo uygulamasına ve paketleme talebine göre belirlenir. Kesin teslim planı sipariş onayından önce teyit edilmelidir." },
  { q: "Kartlarda görünen fiyatlara baskı ve KDV dahil mi?", a: "Kartlardaki fiyatlar baskı ve KDV hariç birim ürün fiyatlarıdır. Logo uygulaması, adet, kutu veya paketleme talebi ve teslim kapsamına göre siparişe özel teklif hazırlanır. Setlerin paket kapsamı ilgili ürün üzerinden kontrol edilir." },
  { q: "Listelenen bütün ajandalar 2027 tarihli mi?", a: "Bu sayfa mevcut ajanda seçeneklerini bir araya getirir; her model için 2027 iç sayfa ve stok bilgisi ayrıca teyit edilir. Tarihsiz defterler ise belirli bir takvim yılına bağlı değildir." },
  { q: "Farklı ürünlerden bir hediye paketi oluşturabilir miyim?", a: "Birlikte sunmak istediğiniz ürün kodlarını, adetleri ve ambalaj beklentinizi paylaşabilirsiniz. Ürünlerin kutuya uygunluğu, tedariki ve birlikte paketlenme imkanı kontrol edilerek teklif kapsamı netleştirilir." },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/urunler/${product.slug}`} className="group flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-2.5 transition hover:border-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:p-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
        <Image src={product.image} alt={product.title} fill sizes="(max-width: 639px) 43vw, (max-width: 1023px) 30vw, 270px" className="object-contain p-2" />
      </div>
      <h3 className="mt-3 line-clamp-3 break-words text-xs font-bold leading-5 text-gray-950 sm:text-sm">{product.title}</h3>
      <div className="mt-auto pt-4">
        {typeof product.price === "number" && product.price > 0 ? (
          <p className="text-sm font-bold leading-6 text-gray-950">{product.price.toLocaleString("tr-TR", { maximumFractionDigits: 2 })} TL <span className="text-xs font-medium">+ KDV</span></p>
        ) : <p className="text-xs font-semibold leading-6 text-gray-700">Fiyat için teklif alın</p>}
        <span className="mt-1 inline-flex min-h-11 items-center text-xs font-semibold underline underline-offset-4 sm:text-sm">Ürünü incele</span>
      </div>
    </Link>
  );
}

export default function NewYearProductsPage() {
  const groups = newYearGroups.map((group) => ({ ...group, items: getNewYearProducts(group.id) })).filter((group) => group.items.length > 0);
  const items = groups.flatMap((group) => group.items);
  const schemas = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": SITE + PATH + "#webpage", name: TITLE, description: DESCRIPTION, url: SITE + PATH, inLanguage: "tr-TR", mainEntity: { "@id": SITE + PATH + "#products" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE },
      { "@type": "ListItem", position: 2, name: "Yılbaşı Promosyon Ürünleri", item: SITE + PATH },
    ] },
    { "@context": "https://schema.org", "@type": "ItemList", "@id": SITE + PATH + "#products", name: "Yılbaşı promosyon ürünleri ve kurumsal hediye seçenekleri", numberOfItems: items.length, itemListElement: items.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: SITE + "/urunler/" + p.slug })) },
  ];
  return (
    <div className="min-w-0 bg-white text-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <nav aria-label="İçerik yolu" className="mb-5 flex flex-wrap gap-2 text-xs leading-6 text-gray-600"><Link href="/" className="underline underline-offset-4">Ana Sayfa</Link><span aria-hidden="true">/</span><span>Yılbaşı Promosyon Ürünleri</span></nav>
        <section aria-labelledby="new-year-title" className="relative isolate overflow-hidden rounded-3xl bg-gray-950 px-5 py-8 text-white sm:p-10">
          <span aria-hidden="true" className="pointer-events-none absolute -right-3 top-0 z-0 select-none text-[150px] font-black leading-none tracking-tight text-white/15 sm:text-[260px]">2027</span>
          <div className="relative z-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-300">Ekibinize ve iş ortaklarınıza yeni yıl hediyeleri</p>
          <h1 id="new-year-title" className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">2027 Yılbaşı Promosyon Ürünleri ve Kurumsal Hediyeler</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">Çalışan, müşteri ve bayi hediyeleri için logo baskılı yılbaşı promosyon ürünlerini karşılaştırın. Kurumsal hediye setleri, kalem setleri, ajandalar, masa sümenleri ve USB bellek setleri arasından ihtiyacınıza uygun modeli seçin. Ürün kodu, adet ve teslim tarihinizle toplu sipariş teklifi isteyin.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">WhatsApp’tan Teklif Al</a>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-500 px-5 py-3 text-center text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">E-posta ile Teklif Al</Link>
          </div>
            </div>
            <NewYearProductShowcase />
          </div>
        </section>
        <nav aria-label="Yılbaşı ürün grupları" className="mt-5 flex flex-wrap gap-2">{groups.map((group) => <a key={group.id} href={"#" + group.id} className="inline-flex min-h-11 items-center rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold leading-5 hover:bg-gray-50 sm:text-sm">{group.title} ({group.items.length})</a>)}</nav>
        <p className="mt-5 text-xs leading-6 text-gray-600">Fiyatlar baskı ve KDV hariç birim ürün bedelidir. Stok, tarihli ürünlerin yılı, paket kapsamı ve teslim süresi sipariş öncesinde teyit edilir.</p>
        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={group.id + "-title"} className="min-w-0 scroll-mt-28">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl"><h2 id={group.id + "-title"} className="text-2xl font-extrabold">{group.title}</h2><p className="mt-2 text-sm leading-7 text-gray-600">{group.description}</p></div>
                <Link href={group.href} className="inline-flex min-h-11 shrink-0 items-center text-sm font-semibold underline underline-offset-4">{group.title}: tüm modeller</Link>
              </div>
              <div className="mt-5 grid min-w-0 grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">{group.items.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
            </section>
          ))}
        </div>
        <section className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-8">
          <h2 className="text-2xl font-extrabold">Kurumsal yılbaşı hediyesi nasıl seçilir?</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div><h3 className="font-bold">Kime hediye edilecek?</h3><p className="mt-2 text-sm leading-7 text-gray-700">Çalışanlar için ajanda ve kalem setlerini günlük kullanım açısından değerlendirin. Bayi ve müşteri hediyelerinde ise setin içeriğini, sunumunu ve alıcının ihtiyacını birlikte düşünün. Masa sümenlerinde masada kaplanan alanı, USB setlerinde kapasite ve bağlantı uyumunu kontrol edin.</p></div>
            <div><h3 className="font-bold">Bütçenin kapsamı nedir?</h3><p className="mt-2 text-sm leading-7 text-gray-700">Yalnız ürün bedelini değil; logo uygulaması, varsa kutu ve paketleme, KDV ve teslim giderlerini birlikte karşılaştırın. Set fotoğrafındaki parçaların tamamının kapsama dahil olduğunu teyit edin.</p></div>
            <div><h3 className="font-bold">Ne zaman teslim edilmeli?</h3><p className="mt-2 text-sm leading-7 text-gray-700">Dağıtım veya etkinlik tarihinizi baştan belirtin. Model, renk, adet ve baskı tasarımını birlikte netleştirmek, teslim planının sipariş öncesinde değerlendirilmesini sağlar.</p></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/rehber/kurumsal-hediye-seti-secim-rehberi" className="underline underline-offset-4">Hediye seti seçim rehberi</Link>
            <Link href="/rehber/promosyon-defter-ajanda-secim-rehberi" className="underline underline-offset-4">Defter ve ajanda seçim rehberi</Link>
          </div>
        </section>
        <section className="mt-12 rounded-3xl border border-gray-200 p-5 sm:p-8">
          <h2 className="text-2xl font-extrabold">Logo baskısı ve toplu sipariş fiyatı nasıl belirlenir?</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-700">Yılbaşı hediyelerinde teklif karşılaştırırken aynı ürün kodunu, adedi ve uygulama kapsamını esas alın. Ajanda kapağı, metal kalem ve set içindeki diğer parçalar farklı yüzeylere sahip olabilir. Logo uygulamasının yöntemi ve alanı her ürün için ayrı değerlendirilir; bir setteki tüm parçalara baskı yapılacağı varsayılmamalıdır.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li><strong>Ürün ve adet:</strong> Model kodlarını, her modelden kaç adet istediğinizi ve renk tercihlerinizi belirtin.</li>
            <li><strong>Logo ve uygulama:</strong> Logo dosyanızı, baskı yapılacak parçaları ve varsa kişiye özel isim taleplerini iletin.</li>
            <li><strong>Sunum ve teslim:</strong> Kutu, paketleme ve teslim adresiyle birlikte ihtiyaç tarihinizi paylaşın. Bu kalemlerin teklif kapsamını ayrıca kontrol edin.</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">Kartlardaki bedeller baskı ve KDV hariç birim ürün fiyatlarıdır. Minimum sipariş adedi, stok ve teslim süresi modele göre teyit edilir. Tarihli ajandalarda iç sayfaların 2027 yılına uygunluğunu da sipariş öncesinde doğrulayın.</p>
        </section>
        <section className="mt-12"><h2 className="text-2xl font-extrabold">Sık Sorulan Sorular</h2><div className="mt-5 space-y-3">{FAQ.map(({ q, a }) => <details key={q} className="rounded-2xl border border-gray-200 p-5"><summary className="cursor-pointer text-sm font-bold leading-6">{q}</summary><p className="mt-3 text-sm leading-7 text-gray-700">{a}</p></details>)}</div></section>
        <section className="mt-12 rounded-3xl bg-gray-950 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Yeni yıl siparişinizi birlikte planlayalım</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">Beğendiğiniz ürün kodlarını, sipariş adedini, logo dosyanızı ve teslim tarihinizi iletin. Baskı, paketleme ve teslim kapsamı belirlenmiş bir teklif hazırlayalım.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-gray-950">WhatsApp’tan Teklif Al</a><Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-500 px-5 py-3 text-center text-sm font-semibold">E-posta ile Teklif Al</Link></div>
        </section>
      </div>
    </div>
  );
}
