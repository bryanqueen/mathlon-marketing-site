import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

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
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', { send_page_view: false });
`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
