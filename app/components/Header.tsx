"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Süreç", href: "/#surec" },
  { label: "SSS", href: "/#sss" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center" aria-label="Ana sayfa">
          <Image
            src="/logo.png"
            alt="FirmaPromosyon Logo"
            width={160}
            height={44}
            priority
            sizes="160px"
            style={{ width: "160px", height: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-black md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black transition hover:text-black/70"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/teklif"
            className="ml-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/90"
          >
            Teklif Al
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-black/20 bg-white px-3 py-2 text-sm font-semibold text-black md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu-drawer"
        >
          Menü
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[9998] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
          />

          <div
            id="mobile-menu-drawer"
            className="absolute right-0 top-0 z-[9999] h-full w-[85%] max-w-sm bg-white p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <span className="text-base font-extrabold text-black">Menü</span>

              <button
                type="button"
                className="rounded-lg border border-black/20 bg-white px-3 py-2 text-sm font-semibold text-black"
                onClick={() => setOpen(false)}
                aria-label="Menüyü kapat"
              >
                Kapat
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t border-black/10 pt-4">
              <Link
                href="/teklif"
                className="block rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-black/90"
                onClick={() => setOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}