"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export function NavbarSimple() {
  return (
    <nav>
      <Link href="/" className="nav-logo" aria-label="mathlon">
        <Logo className="nav-mark" />
        <span className="nav-wordmark">mathlon</span>
      </Link>

      <input type="checkbox" id="nav-check" className="nav-check" />

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent">Join the Beta <span className="arrow-icon"></span></a>
      </div>

      <div className="nav-right">
        <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent">Join the Beta <span className="arrow-icon"></span></a>
        <label className="nav-toggle" htmlFor="nav-check" aria-label="Toggle navigation">
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  );
}

