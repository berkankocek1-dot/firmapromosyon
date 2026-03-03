"use server";

import { Resend } from "resend";

export type LeadPayload = {
  company?: string;
  name: string;
  phone: string;
  email: string;
  product: string;
  qty: string;
  colors?: string;
  deadline?: string;
  message?: string;
};

function must(v: string | undefined, key: string) {
  if (!v) throw new Error(`Missing env: ${key}`);
  return v;
}

export async function submitLead(payload: LeadPayload) {
  const apiKey = must(process.env.RESEND_API_KEY, "RESEND_API_KEY");
  const to = must(process.env.LEADS_TO_EMAIL, "LEADS_TO_EMAIL");
  const from = must(process.env.LEADS_FROM_EMAIL, "LEADS_FROM_EMAIL");

  // Basit validasyon
  if (!payload.name || !payload.phone || !payload.email || !payload.product || !payload.qty) {
    throw new Error("Eksik zorunlu alan var.");
  }

  const resend = new Resend(apiKey);

  const subject = `Yeni Kurumsal Teklif Lead • ${payload.product} • ${payload.qty} adet`;

  const text = `
YENİ TEKLİF TALEBİ

Firma: ${payload.company || "-"}
Yetkili: ${payload.name}
Telefon: ${payload.phone}
E-posta: ${payload.email}

Ürün: ${payload.product}
Adet: ${payload.qty}
Baskı Rengi: ${payload.colors || "-"}
Teslim Süresi: ${payload.deadline || "-"}

Not:
${payload.message || "-"}

Kaynak: firmapromosyon.com /kurumsal-teklif-al
  `.trim();

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;line-height:1.5">
    <h2>Yeni Kurumsal Teklif Talebi</h2>
    <p><b>Firma:</b> ${escapeHtml(payload.company || "-")}</p>
    <p><b>Yetkili:</b> ${escapeHtml(payload.name)}</p>
    <p><b>Telefon:</b> ${escapeHtml(payload.phone)}</p>
    <p><b>E-posta:</b> ${escapeHtml(payload.email)}</p>
    <hr/>
    <p><b>Ürün:</b> ${escapeHtml(payload.product)}</p>
    <p><b>Adet:</b> ${escapeHtml(payload.qty)}</p>
    <p><b>Baskı Rengi:</b> ${escapeHtml(payload.colors || "-")}</p>
    <p><b>Teslim Süresi:</b> ${escapeHtml(payload.deadline || "-")}</p>
    <p><b>Not:</b><br/>${escapeHtml(payload.message || "-").replace(/\n/g,"<br/>")}</p>
    <hr/>
    <p style="color:#666;font-size:12px">Kaynak: firmapromosyon.com /kurumsal-teklif-al</p>
  </div>
  `;

  const { error } = await resend.emails.send({
    from: `FirmaPromosyon <${from}>`,
    to: [to],
    subject,
    text,
    html,
    replyTo: payload.email, // cevapla’ya basınca müşteriye gitsin
  });

  if (error) {
    throw new Error(`Email send failed: ${error.message}`);
  }

  return { ok: true };
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
