import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: { default: `${BRAND.name} — ${BRAND.tagline}`, template: `%s — ${BRAND.name}` },
  description: BRAND.description,
  keywords: ["AMNA AZAM", "Pakistani fashion", "luxury pret", "bridal couture", "Eastern fashion", "Pakistani clothing", "wedding wear"],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F5F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
