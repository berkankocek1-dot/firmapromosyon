export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-3xl font-bold">İletişim</h1>
      <p className="mt-2 text-sm text-gray-600">
        Teklif almak için formu doldurun veya WhatsApp’tan yazın.
      </p>

      <form className="mt-8 space-y-4">
        <Field label="Ad Soyad" name="name" />
        <Field label="Telefon" name="phone" />
        <Field label="E-posta" name="email" type="email" />
        <Field label="Ürün / Hizmet" name="subject" />
        <TextArea label="Mesaj" name="message" />

        <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
          Gönder
        </button>
      </form>

      <div className="mt-6 text-xs text-gray-500">
        Not: Şu an “Gönder” butonu sadece tasarımdır. Bir sonraki adımda mail/WhatsApp yönlendirmesi ekleyeceğiz.
      </div>
    </main>
  );
}

function Field({ label, ...props }: any) {
  return (
    <label className="block">
      <div className="mb-1 text-sm text-gray-700">{label}</div>
      <input
        className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-gray-500"
        {...props}
      />
    </label>
  );
}

function TextArea({ label, ...props }: any) {
  return (
    <label className="block">
      <div className="mb-1 text-sm text-gray-700">{label}</div>
      <textarea
        className="h-36 w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-gray-500"
        {...props}
      />
    </label>
  );
}