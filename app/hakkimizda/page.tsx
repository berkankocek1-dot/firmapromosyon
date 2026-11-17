import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Kurumsal Promosyon Ürünleri | FirmaPromosyon",
  description:
    "FirmaPromosyon; logo baskılı promosyon ürünleri, kurumsal hediyelik çözümler, DTF, UV, lazer ve tampon baskı hizmetleri sunan profesyonel promosyon tedarik platformudur.",
  alternates: {
    canonical: "https://www.firmapromosyon.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
        <header className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-9">
          <nav aria-label="İçerik yolu" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black hover:underline">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-gray-900">Hakkımızda</span>
          </nav>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">FirmaPromosyon</p>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Hakkımızda</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">FirmaPromosyon, Türkiye genelindeki kurumsal firmalara özel logo baskılı promosyon ürünleri, kurumsal hediyelik çözümler ve profesyonel baskı hizmetleri sunan bir promosyon tedarik platformudur.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/urunler" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Ürünleri İncele</Link>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold transition hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Kurumsal Teklif Al</Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Markanızın tanıtımına uygun çözümler</h2>
            <p className="mt-4 text-base leading-8 text-gray-600">Markaların tanıtım süreçlerinde daha görünür, akılda kalıcı ve profesyonel bir izlenim oluşturmasına yardımcı olmak amacıyla geniş ürün yelpazesi, hızlı teklif süreci ve güvenilir tedarik ağı ile hizmet veriyoruz.</p>
            <p className="mt-4 text-base leading-8 text-gray-600">Ürünlerimiz; fuarlar, bayi toplantıları, lansmanlar, şirket içi organizasyonlar, müşteri hediyeleri, personel hediyeleri ve marka bilinirliği çalışmalarında tercih edilmektedir.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-7">
            <h2 className="text-xl font-bold">Ürün seçiminden teslimata</h2>
            <p className="mt-4 text-base leading-8 text-gray-600">FirmaPromosyon olarak önceliğimiz; her firma için doğru ürünü, doğru baskı tekniği ve uygun fiyat avantajı ile sunmaktır. Sipariş sürecinde ürün seçimi, baskı alternatifi, fiyatlandırma ve teslimat aşamalarında pratik ve kurumsal bir deneyim sağlamayı amaçlıyoruz.</p>
            <p className="mt-4 text-base leading-8 text-gray-600">Güvenilir iletişim, hızlı tekliflendirme ve geniş promosyon ürün seçenekleriyle markaların kurumsal tanıtım ihtiyaçlarını tek noktadan karşılamayı hedefliyoruz.</p>
          </div>
        </section>

        <section className="mt-10 md:mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Hizmet Verdiğimiz Başlıca Ürün Grupları</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">Promosyon kalem, logo baskılı kupa, promosyon anahtarlık, ajanda, defter, termos, USB bellek, powerbank, çakmak, bez çanta, şapka, tekstil ürünleri ve VIP kurumsal hediye setleri gibi birçok kategoride firmalara özel çözümler sunuyoruz.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">Promosyon kalem ve logo baskılı kalem modelleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-kalem" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Kalem <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">Promosyon kupa, termos ve matara çeşitleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-kupa" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Kupa <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-termos" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Termos <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-matara" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Matara <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">Promosyon anahtarlık ve metal aksesuar ürünleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-anahtarlik" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Anahtarlık <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">Ajanda, defter ve ofis promosyon ürünleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-ajanda" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Ajanda <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-defter" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Defter <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/urunler" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Tüm ürünler <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">Promosyon çakmak ve masaüstü ürünleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-cakmak" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Çakmak <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-ahsap-ve-deri-masaustu-urunler" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Masaüstü ürünleri <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">USB bellek, powerbank ve teknolojik promosyon ürünleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-usb-bellek" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">USB bellek <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-powerbank" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Powerbank <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-teknolojik-urunler" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Teknolojik ürünler <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">DTF baskılı tişört, şapka ve tekstil ürünleri</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-tisort" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Tişört <span aria-hidden="true">↗</span></Link></li>
<li><Link href="/promosyon-sapka" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Şapka <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5">
<h3 className="text-base font-semibold leading-6 text-gray-900">VIP hediye setleri ve kurumsal promosyon kutuları</h3>
<ul className="mt-4 flex flex-wrap gap-2">
<li><Link href="/promosyon-vip-urunler" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">VIP setler ve kutular <span aria-hidden="true">↗</span></Link></li>
</ul>
</article>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:mt-12 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight">Ürüne ve tasarıma uygun baskı</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-600">Baskı uygulamalarında ürün yapısına ve kullanım amacına göre DTF baskı, UV baskı, lazer baskı, tampon baskı, serigrafi baskı ve dijital baskı gibi farklı teknikler ile profesyonel sonuçlar hedefliyoruz.</p>
          <ul aria-label="Baskı teknikleri" className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-gray-700">
            {['DTF baskı', 'UV baskı', 'Lazer baskı', 'Tampon baskı', 'Serigrafi baskı', 'Dijital baskı'].map(method => <li key={method} className="rounded-full border border-gray-200 bg-white px-4 py-2">{method}</li>)}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-black p-6 text-white md:mt-12 md:flex md:items-center md:justify-between md:gap-8 md:p-9">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight">Kurumsal siparişinizi birlikte planlayalım</h2>
            <p className="mt-3 text-base leading-7 text-gray-300">Ürün, adet ve logo baskı detaylarını iletin; ihtiyacınıza uygun teklif hazırlayalım.</p>
          </div>
          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Teklif Al</Link>
            <Link href="/iletisim" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Bize Ulaşın</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
