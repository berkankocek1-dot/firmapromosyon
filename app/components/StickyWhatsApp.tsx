"use client";

export default function StickyWhatsApp() {
  const number = "905350509128"; // kendi numaran (başında + yok)
  const text = "Merhaba, promosyon ürünleri için teklif almak istiyorum.";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden teklif al"
      // Fixed + z-index'i garantiye alıyoruz (kapanma/altında kalma olmasın)
      style={{ position: "fixed", right: 16, bottom: 16, zIndex: 999999 }}
      className="
        group flex items-center gap-2
        rounded-full bg-green-500 text-white
        shadow-xl
        px-4 py-3
        transition
        hover:bg-green-600 hover:scale-105
        active:scale-95
      "
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-white"
        aria-hidden="true"
      >
        <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.82.93 5.57 2.64 7.82L4 29l5.33-1.61A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.4c-2.27 0-4.48-.6-6.42-1.73l-.46-.27-3.16.95.97-3.08-.3-.49A10.36 10.36 0 015.6 16c0-5.73 4.67-10.4 10.4-10.4S26.4 10.27 26.4 16 21.73 26.4 16 26.4zm5.7-7.87c-.31-.15-1.82-.9-2.1-1s-.48-.15-.68.15-.78 1-.95 1.2-.34.23-.65.08c-.31-.15-1.32-.49-2.52-1.55-.93-.83-1.55-1.86-1.73-2.17s-.02-.48.13-.63c.13-.13.31-.34.46-.51.15-.18.2-.31.31-.51s.05-.38-.02-.53c-.08-.15-.68-1.63-.93-2.24-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.27.31-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.29.49 1.73.63.73.23 1.4.2 1.92.12.59-.09 1.82-.74 2.08-1.46.26-.73.26-1.35.18-1.46-.08-.12-.28-.2-.59-.35z" />
      </svg>

      {/* Desktop text (mobilde yer kaplamasın) */}
      <span className="hidden sm:inline text-sm font-semibold">
        WhatsApp Teklif
      </span>
    </a>
  );
}