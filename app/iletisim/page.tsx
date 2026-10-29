import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

const PAGE_URL = "https://www.firmapromosyon.com/iletisim";
const TITLE = "İletişim";
const DESCRIPTION = "Promosyon ürünleri ve logo baskı talepleriniz için FirmaPromosyon ile iletişime geçin. Ürün ve adet bilgilerinizi WhatsApp üzerinden paylaşın.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İletişim | FirmaPromosyon",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "tr_TR",
    siteName: "FirmaPromosyon",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "FirmaPromosyon İletişim" }],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
