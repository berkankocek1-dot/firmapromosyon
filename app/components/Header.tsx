"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const nav = [
  { label: "Ürünler", href: "/urunler" },
  { label: "Baskı Hizmetleri", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') || []);
    focusable()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); }
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && (document.activeElement === first || !menuRef.current?.contains(document.activeElement))) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !menuRef.current?.contains(document.activeElement))) {
        event.preventDefault(); first?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const isCurrent = (href: string) => !href.includes("#") && pathname === href;
  const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-5 px-4 py-3 sm:px-5">
        <Link href="/" className={`shrink-0 text-lg font-extrabold tracking-tight text-black sm:text-xl ${focusClass}`} aria-label="FirmaPromosyon ana sayfa">FirmaPromosyon</Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-6 text-sm font-semibold text-gray-700 lg:flex">
          {nav.map((item) => <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={`inline-flex min-h-11 items-center whitespace-nowrap transition hover:text-black ${isCurrent(item.href) ? "text-black underline underline-offset-8" : ""} ${focusClass}`}>{item.label}</Link>)}
          <Link href="/kurumsal-teklif-al" className={`ml-1 inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 ${focusClass}`}>E-posta ile Teklif Al</Link>
        </nav>

        <button ref={triggerRef} type="button" onClick={() => setOpen(true)} aria-label="Menüyü aç" aria-expanded={open} aria-controls={open ? "site-mobile-menu" : undefined} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black lg:hidden ${focusClass}`}>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="h-5 w-5 shrink-0"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          Menü
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div ref={menuRef} id="site-mobile-menu" role="dialog" aria-modal="true" aria-labelledby="site-mobile-menu-title" className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-4">
              <span id="site-mobile-menu-title" className="text-lg font-extrabold text-black">FirmaPromosyon</span>
              <button type="button" aria-label="Menüyü kapat" onClick={() => setOpen(false)} className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-300 text-black ${focusClass}`}>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="h-5 w-5"><path d="m6 6 12 12M6 18 18 6" /></svg>
              </button>
            </div>
            <nav aria-label="Mobil ana menü" className="mt-4 flex flex-col gap-1">
              {nav.map((item) => <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setOpen(false)} className={`flex min-h-12 items-center rounded-xl px-3 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50 ${isCurrent(item.href) ? "bg-gray-100" : ""} ${focusClass}`}>{item.label}</Link>)}
            </nav>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <Link href="/kurumsal-teklif-al" onClick={() => setOpen(false)} className={`flex min-h-12 items-center justify-center rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800 ${focusClass}`}>E-posta ile Teklif Al</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
