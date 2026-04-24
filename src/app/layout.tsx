import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

const siteTitle = "YAFÉ | Summer 2026";
const siteDescription =
  "A first drop of seven hundred pairs, cut from Italian acetate and finished by hand. Private waitlist now open.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yafe-eyewear.vercel.app"),
  title: {
    default: siteTitle,
    template: "%s | YAFÉ",
  },
  description: siteDescription,
  applicationName: "YAFÉ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "YAFÉ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
