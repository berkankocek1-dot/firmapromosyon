import Link from "next/link";
import type { ReactNode } from "react";

const pages = [
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/mesafeli-satis-sozlesmesi", label: "Mesafeli Satış Sözleşmesi" },
  { href: "/iptal-ve-iade-kosullari", label: "İptal ve İade Koşulları" },
  { href: "/teslimat-kosullari", label: "Teslimat Koşulları" },
];

export default function FpLegalPage({ title, href, children }: { title: string; href: string; children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
        <header className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <nav aria-label="İçerik yolu" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black hover:underline">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-gray-900">{title}</span>
          </nav>
          <h1 className="max-w-4xl text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">{title}</h1>
        </header>
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-3 text-sm font-semibold text-gray-900">Kurumsal ve Yasal Bilgiler</h2>
            <nav aria-label="Kurumsal ve yasal sayfalar" className="grid grid-cols-2 gap-1 lg:flex lg:flex-col">
              {pages.map(page => <Link key={page.href} href={page.href} aria-current={page.href === href ? "page" : undefined} className={`rounded-xl px-3 py-3 text-sm font-medium leading-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${page.href === href ? "bg-black text-white" : "text-gray-600 hover:bg-white hover:text-black"}`}>{page.label}</Link>)}
              <Link href="/hakkimizda" className="mt-2 rounded-xl border-t border-gray-200 px-3 py-3 text-sm font-medium text-gray-600 hover:text-black">Hakkımızda</Link>
            </nav>
          </aside>
          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 text-base leading-7 text-gray-700 md:p-8">
            {children}
            <div className="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-600">
              Sorularınız için <Link href="/iletisim" className="font-semibold text-gray-900 underline underline-offset-4">bizimle iletişime geçebilirsiniz.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
