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

export async function submitLead(payload: LeadPayload) {
  // TODO (next step): Send email via Resend/SMTP
  console.log("NEW LEAD:", payload);
  return { ok: true };
}
