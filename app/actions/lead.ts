export type LeadPayload = {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function submitLead(_payload: LeadPayload) {
  // Next adımda: mail gönderimi burada olacak (Resend/Nodemailer).
  return { ok: true };
}
