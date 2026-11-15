"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

const WHATSAPP_PHONE = "905350509128";
const CONTACT_EMAIL = "info@firmapromosyon.com";
const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) {
      const field = event.currentTarget.elements.namedItem("message") as HTMLTextAreaElement;
      field.setCustomValidity("Lütfen mesajınızı yazın.");
      field.reportValidity();
      return;
    }
    const text = [
      "Merhaba, iletişim formu üzerinden yazıyorum.", "",
      `Ad Soyad: ${name.trim()}`,
      ...(email.trim() ? [`E-posta: ${email.trim()}`] : []), "",
      `Mesaj: ${message.trim()}`,
    ].join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  const fieldClass = "min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-950 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10";
  const cardClass = "group flex min-w-0 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-gray-400 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-4xl px-4 pb-28 pt-8 sm:pt-12">
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">İletişim</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">Ürünler, baskı seçenekleri veya siparişiniz hakkında bize ulaşın. Size uygun iletişim kanalını seçebilirsiniz.</p>
        </header>

        <section aria-label="İletişim kanalları" className="mt-7 grid gap-3 sm:grid-cols-3">
          <a href={`tel:+${WHATSAPP_PHONE}`} className={cardClass}>
            <span className="flex items-center justify-between gap-2 text-sm font-semibold"><span>Telefon</span><span aria-hidden="true" className="text-gray-400">↗</span></span>
            <span className="mt-3 block text-base font-bold">0535 050 91 28</span>
            <span className="mt-2 text-xs leading-5 text-gray-500">Aramak için dokunun</span>
          </a>
          <a href={whatsappUrl("Merhaba, bilgi almak istiyorum.")} target="_blank" rel="noopener noreferrer" className={cardClass}>
            <span className="flex items-center justify-between gap-2 text-sm font-semibold"><span>WhatsApp</span><span aria-hidden="true" className="text-gray-400">↗</span></span>
            <span className="mt-3 block text-base font-bold">Bize mesaj yazın</span>
            <span className="mt-2 text-xs leading-5 text-gray-500">Doğrudan sohbeti açın</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={cardClass}>
            <span className="flex items-center justify-between gap-2 text-sm font-semibold"><span>E-posta</span><span aria-hidden="true" className="text-gray-400">↗</span></span>
            <span className="mt-3 block break-all text-sm font-bold leading-6">{CONTACT_EMAIL}</span>
            <span className="mt-2 text-xs leading-5 text-gray-500">E-posta uygulamanızda açın</span>
          </a>
        </section>

        <section aria-labelledby="contact-message-heading" className="mt-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <h2 id="contact-message-heading" className="text-xl font-bold text-gray-950">Mesajınızı iletin</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">Adınızı ve mesajınızı yazın. Mesajınız WhatsApp’ta hazırlanır; göndermeden önce kontrol edebilirsiniz.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Ad soyad <span aria-hidden="true">*</span></label>
                <input id="contact-name" name="name" autoComplete="name" required pattern=".*\S.*" maxLength={120} value={name} onChange={(event) => setName(event.target.value)} className={fieldClass} placeholder="Adınız ve soyadınız" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">E-posta <span className="font-normal text-gray-500">(isteğe bağlı)</span></label>
                <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={200} value={email} onChange={(event) => setEmail(event.target.value)} className={fieldClass} placeholder="ornek@firma.com" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Mesajınız <span aria-hidden="true">*</span></label>
              <textarea id="contact-message" name="message" required minLength={2} maxLength={2000} rows={4} value={message} onChange={(event) => { event.target.setCustomValidity(""); setMessage(event.target.value); }} className={`${fieldClass} resize-y`} placeholder="Size hangi konuda yardımcı olabiliriz?" />
            </div>
            <p className="text-xs text-gray-500">* Ad soyad ve mesaj alanları zorunludur.</p>
            <button type="submit" className="min-h-14 w-full rounded-xl bg-black px-5 py-4 text-base font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">WhatsApp’tan Mesaj Gönder</button>
            <p className="text-center text-xs leading-5 text-gray-500">Kişisel veriler hakkında <Link href="/kvkk" className="underline underline-offset-2">KVKK aydınlatma metnini</Link> inceleyebilirsiniz.</p>
          </form>
        </section>

        <aside aria-labelledby="contact-quote-heading" className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <h2 id="contact-quote-heading" className="text-base font-bold">Ürün için teklif mi almak istiyorsunuz?</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">Ürününüzü seçip adet ve baskı detaylarını teklif formunda paylaşabilirsiniz.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/teklif" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">WhatsApp’tan Hızlı Teklif Al</Link>
            <Link href="/kurumsal-teklif-al" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">E-posta ile Teklif Al</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
