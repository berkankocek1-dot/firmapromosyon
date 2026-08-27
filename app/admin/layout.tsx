import Link from "next/link";

export const metadata = {
  title: "FirmaPromosyon Yönetim Paneli",
  robots: {
    index: false,
    follow: false,
  },
};

const menu = [
  { name: "Dashboard", href: "/admin" },
  { name: "Ürünler", href: "/admin/urunler" },
  { name: "Kategoriler", href: "/admin/kategoriler" },
  { name: "Sayfalar", href: "/admin/sayfalar" },
  { name: "Blog", href: "/admin/blog" },
  { name: "SEO Merkezi", href: "/admin/seo" },
  { name: "Medya", href: "/admin/medya" },
  { name: "Ayarlar", href: "/admin/ayarlar" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-6">
            <div className="text-xl font-black">FirmaPromosyon</div>
            <div className="mt-1 text-xs font-medium text-gray-500">
              Yönetim Paneli
            </div>
          </div>

          <nav className="space-y-1 p-4">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4">
            <Link
              href="/"
              className="block rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold hover:bg-gray-50"
            >
              Siteyi Görüntüle
            </Link>
          </div>
        </aside>

        <main className="flex-1">
          <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
            <div>
              <div className="text-sm font-medium text-gray-500">
                Yönetim Paneli
              </div>
              <div className="font-bold">FirmaPromosyon</div>
            </div>

            <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold">
              Admin
            </div>
          </header>

          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
