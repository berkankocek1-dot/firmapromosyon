import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FirmaPromosyon"
            width={180}
            height={44}
            priority
            className="h-11 w-auto object-contain"
          />
          <span className="hidden text-xs text-zinc-500 sm:inline">
            Kurumsal DTF & Promosyon
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-700 md:flex">
          <a className="hover:text-zinc-950" href="/#hizmetler">Hizmetler</a>
          <a className="hover:text-zinc-950" <Link href="/urunler">Ürünler</Link>
          <a className="hover:text-zinc-950" href="/#surec">Süreç</a>
          <a className="hover:text-zinc-950" href="/#sss">SSS</a>
          <Link className="hover:text-zinc-950" href="/iletisim">İletişim</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/kurumsal-teklif-al"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Kurumsal Teklif Al
          </Link>
        </div>
      </div>
    </header>
  );
}
