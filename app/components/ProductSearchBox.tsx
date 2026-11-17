"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProductCode, searchProducts } from "./productSearch";
import type { SearchProduct } from "./productSearch";

type Props = {
  products: SearchProduct[];
  value: string;
  onChange: (value: string) => void;
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  theme?: "light" | "dark";
};

const money = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2, maximumFractionDigits: 2,
});

export default function ProductSearchBox({
  products, value, onChange, id, name, label, placeholder, theme = "light",
}: Props) {
  const router = useRouter();
  const uid = useId();
  const listId = `${uid}-results`;
  const input = useRef<HTMLInputElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [position, setPosition] = useState<CSSProperties | null>(null);
  const matches = useMemo(() => searchProducts(products, value), [products, value]);
  const shown = matches.slice(0, 30);
  const expanded = open && value.trim().length > 0;

  useEffect(() => {
    if (!expanded) return;
    const place = () => {
      const rect = input.current?.getBoundingClientRect();
      if (!rect) return;
      const anchor = root.current?.parentElement?.getBoundingClientRect() || rect;
      const viewport = window.visualViewport;
      const bottom = viewport ? viewport.offsetTop + viewport.height : window.innerHeight;
      const viewportTop = viewport?.offsetTop || 0;
      const below = bottom - rect.bottom - 12;
      const above = rect.top - viewportTop - 12;
      const flip = below < 160 && above > below;
      const maxHeight = Math.max(0, Math.min(420, flip ? above : below));
      setPosition({
        position: "fixed", zIndex: 1000,
        left: Math.max(8, Math.min(anchor.left, window.innerWidth - anchor.width - 8)),
        width: Math.min(anchor.width, window.innerWidth - 16), maxHeight,
        ...(flip ? { bottom: window.innerHeight - rect.top + 6 } : { top: rect.bottom + 6 }),
      });
    };
    const outside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!root.current?.contains(target) && !panel.current?.contains(target)) setOpen(false);
    };
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    window.visualViewport?.addEventListener("resize", place);
    window.visualViewport?.addEventListener("scroll", place);
    document.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
      window.visualViewport?.removeEventListener("resize", place);
      window.visualViewport?.removeEventListener("scroll", place);
      document.removeEventListener("pointerdown", outside);
    };
  }, [expanded]);

  useEffect(() => {
    if (expanded && active >= 0) {
      document.getElementById(`${listId}-${active}`)?.scrollIntoView({ block: "nearest" });
    }
  }, [active, expanded, listId]);

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Escape") {
      setOpen(false); setActive(-1);
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (!value.trim()) return;
      event.preventDefault(); setOpen(true);
      setActive(current => {
        if (!shown.length) return -1;
        if (!expanded || current < 0) return event.key === "ArrowDown" ? 0 : shown.length - 1;
        return (current + (event.key === "ArrowDown" ? 1 : -1) + shown.length) % shown.length;
      });
    } else if (event.key === "Enter" && expanded && active >= 0 && shown[active]) {
      event.preventDefault(); setOpen(false);
      router.push(`/urunler/${shown[active].slug}`);
    }
  }

  return (
    <div ref={root} className="relative min-w-0 flex-1"
      onBlur={event => {
        const next = event.relatedTarget as Node | null;
        if (!next || (!root.current?.contains(next) && !panel.current?.contains(next))) setOpen(false);
      }}>
      <input ref={input} id={id} name={name} type="text" role="combobox"
        aria-label={label} aria-autocomplete="list" aria-expanded={expanded}
        aria-controls={expanded ? listId : undefined}
        aria-activedescendant={expanded && active >= 0 && shown[active] ? `${listId}-${active}` : undefined}
        autoComplete="off" autoCapitalize="none" spellCheck={false}
        value={value} placeholder={placeholder}
        onChange={event => { onChange(event.target.value); setActive(-1); setOpen(true); }}
        onFocus={() => { setActive(-1); setOpen(true); }}
        onClick={() => setOpen(true)} onKeyDown={onKeyDown}
        className={theme === "dark"
          ? "min-h-12 w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-4 text-base text-white outline-none placeholder:text-white/40 focus:border-white/60"
          : "min-h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-500 focus:border-black"}
      />
      <span className="sr-only" role="status" aria-live="polite">
        {expanded ? `${matches.length} ürün bulundu.` : ""}
      </span>
      {expanded && position && createPortal(
        <div ref={panel} style={position}
          className="overflow-y-auto overscroll-contain rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl"
          onBlur={event => {
            const next = event.relatedTarget as Node | null;
            if (!next || (!panel.current?.contains(next) && !root.current?.contains(next))) setOpen(false);
          }}>
          <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Ürünler · {matches.length} sonuç
          </div>
          <div id={listId} role="listbox" aria-label="Bulunan ürünler">
            {shown.map((product, index) => (
              <Link key={product.slug} id={`${listId}-${index}`}
                href={`/urunler/${product.slug}`} role="option" aria-selected={active === index}
                tabIndex={-1} onClick={() => setOpen(false)} onMouseEnter={() => setActive(index)}
                className={`grid min-h-[72px] grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-2 border-t border-gray-100 px-3 py-2 transition sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:gap-3 ${active === index ? "bg-gray-100" : "bg-white hover:bg-gray-50"}`}>
                <span className="relative block h-11 w-11 overflow-hidden rounded-lg bg-white sm:h-13 sm:w-13">
                  <Image src={product.image || "/og.jpg"} alt="" fill sizes="52px" className="object-contain p-0.5" />
                </span>
                <span className="min-w-0">
                  <span className="line-clamp-2 block text-xs font-semibold leading-5 text-black sm:text-sm">{product.title}</span>
                  <span className="mt-0.5 block text-[11px] text-gray-500">{getProductCode(product) || product.category}</span>
                </span>
                <span className="max-w-[100px] text-right text-xs font-bold text-black sm:text-sm">
                  {typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0
                    ? <>{money.format(product.price)} TL<span className="mt-0.5 block text-[10px] font-normal text-gray-500">+ KDV</span></>
                    : "Teklif Al"}
                </span>
              </Link>
            ))}
          </div>
          {!shown.length && <p className="px-4 py-5 text-sm text-gray-600">Ürün bulunamadı. Ürün adını veya kodunu kontrol edin.</p>}
          {matches.length > shown.length && <Link href={`/urunler?q=${encodeURIComponent(value.trim())}`}
            onClick={() => setOpen(false)} className="block border-t border-gray-200 px-4 py-3 text-center text-sm font-bold text-black hover:bg-gray-50">
            Tüm {matches.length} sonucu gör <svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"middle",flexShrink:0}}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
          </Link>}
        </div>, document.body
      )}
    </div>
  );
}
