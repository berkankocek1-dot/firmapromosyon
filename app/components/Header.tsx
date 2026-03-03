"use client";

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

  // Menü açıkken body scroll kapat (mobil UX)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          FirmaPromosyon
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-70 transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-semibold"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
        >
          Menü
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[9998] md:hidden">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-4 z-[9999]">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-base font-bold">Menü</span>
              <button
                type="button"
                className="rounded-lg border px-3 py-2 text-sm font-semibold"
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
                  className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-gray-100 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t pt-4">
              <Link
                href="/teklif"
                className="block rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white hover:opacity-90 transition"
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