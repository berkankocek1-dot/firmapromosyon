"use client";

import { useState } from "react";

const WHATSAPP_PHONE = "905350509128";

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const msg = `
Merhaba, iletişim formu üzerinden yazıyorum.

Ad Soyad: ${form.name}
Telefon: ${form.phone}
E-posta: ${form.email}
Ürün / Hizmet: ${form.subject}
Mesaj: ${form.message}
`.trim();

    window.open(wa(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <h1 className="text-3xl font-bold text-black">İletişim</h1>

        <p className="mt-3 text-base text-gray-700">
          Teklif almak veya bilgi istemek için formu doldurun.
          Gönder butonuna bastığınızda WhatsApp açılır.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <Field
            label="Ad Soyad"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Field
            label="Telefon"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <Field
            label="E-posta"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Field
            label="Ürün / Hizmet"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />

          <TextArea
            label="Mesaj"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            WhatsApp ile Gönder
          </button>
        </form>

        <div className="mt-8 text-sm text-gray-600">
          Alternatif olarak doğrudan WhatsApp butonunu da kullanabilirsiniz.
        </div>
      </div>
    </main>
  );
}

function Field({ label, ...props }: any) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-gray-900">{label}</div>
      <input
        className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
        {...props}
      />
    </label>
  );
}

function TextArea({ label, ...props }: any) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-gray-900">{label}</div>
      <textarea
        className="h-36 w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
        {...props}
      />
    </label>
  );
}