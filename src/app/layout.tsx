import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { siteSettings } from "@/lib/mock-data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteSettings.companyName} | Construction & Civil Engineering`,
    template: `%s | ${siteSettings.companyName}`,
  },
  description: siteSettings.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteSettings.companyName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
