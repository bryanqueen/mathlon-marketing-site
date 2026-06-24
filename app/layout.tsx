import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mathlon — Learn Math with an AI Tutor",
  description:
    "Bring a problem you're stuck on. Mathlon reasons through every step out loud and keeps going until it clicks.",
  openGraph: {
    title: "Mathlon — Learn Math with an AI Tutor",
    description:
      "Bring a problem you're stuck on. Mathlon reasons through every step out loud and keeps going until it clicks.",
    url: "https://mathlon.app",
    siteName: "Mathlon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathlon — Learn Math with an AI Tutor",
    description:
      "Bring a problem you're stuck on. Mathlon reasons through every step out loud and keeps going until it clicks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
