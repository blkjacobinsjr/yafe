import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const siteTitle = "YAFE | Quiet luxury eyewear, coming soon";
const siteDescription =
  "A quiet-luxury launch site for Yafe 01, the first YAFE sunglasses drop.";

export const metadata: Metadata = {
  metadataBase: new URL("https://yafe-eyewear.vercel.app"),
  title: {
    default: siteTitle,
    template: "%s | YAFE",
  },
  description: siteDescription,
  applicationName: "YAFE",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "YAFE",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
