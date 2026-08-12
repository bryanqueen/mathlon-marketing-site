"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import "lenis/dist/lenis.css";

const options: LenisOptions = {
  // Native-feeling inertia; works with the How it works rAF dial
  autoRaf: true,
  lerp: 0.09,
  duration: 1.1,
  smoothWheel: true,
  // Keep native touch scrolling — smoother + less janky on phones
  syncTouch: false,
  touchMultiplier: 1.2,
  wheelMultiplier: 0.95,
  anchors: true,
  autoResize: true,
};

/**
 * Site-wide Lenis smooth scroll.
 * Skips when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        ...options,
        // autoToggle pauses Lenis when reduced-motion is on (Lenis 1.3+)
        autoToggle: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
