import Link from "next/link";
import NewYearProductShowcase from "./NewYearProductShowcase";

export default function NewYearBanner() {
  return (
    <section aria-labelledby="new-year-banner-title" className="mx-auto max-w-7xl px-5 pt-6">
      <div className="relative isolate overflow-hidden rounded-3xl bg-gray-950 p-5 text-white sm:p-7">
        <span aria-hidden="true" className="pointer-events-none absolute -right-2 top-0 z-0 select-none text-[140px] font-black leading-none tracking-tight text-white/15 sm:-top-3 sm:text-[200px]">2027</span>
        <div className="relative z-10 grid min-w-0 gap-5 md:grid-cols-[minmax(0,1fr)_240px] md:items-center xl:grid-cols-[minmax(0,1fr)_240px_auto]">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300">Yeni yıla özel seçimler</p>
            <h2 id="new-year-banner-title" className="mt-2 text-xl font-extrabold leading-7 sm:text-2xl">2027 Kurumsal Yılbaşı Hediyeleri</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-200">Logo baskılı yılbaşı promosyon ürünlerini inceleyin. Kurumsal hediye setleri, ajandalar, kalem setleri ve masa sümenleri için toplu sipariş teklifi alın.</p>
          </div>
          <NewYearProductShowcase compact />
          <Link href="/yilbasi-promosyon-urunleri" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-gray-950 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:col-span-2 xl:col-span-1 xl:w-auto">
            Yılbaşı Ürünlerini İncele
          </Link>
        </div>
      </div>
    </section>
  );
}
