"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Tracks CTA clicks via GA4 event.
 */
export function trackCtaClick(location: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      cta_location: location,
      cta_text: "Try the free demo",
    });
  }
}
