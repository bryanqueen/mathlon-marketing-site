"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resourcesOpen) return;
    function handleClickOutside(e: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [resourcesOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav--scrolled" : undefined}>
      <Link href="/" className="nav-logo" aria-label="mathlon">
        <Logo className="nav-mark" />
        <span className="nav-wordmark">mathlon</span>
      </Link>

      <input type="checkbox" id="nav-check" className="nav-check" />

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/pricing">Pricing</Link>
        <div ref={dropdownRef} className={`nav-dropdown${resourcesOpen ? " nav-dropdown--open" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setResourcesOpen((o) => !o);
            }}
            aria-expanded={resourcesOpen}
          >
            Resources
          </a>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-grid nav-dropdown-grid--live">
              <Link href="/contact" className="nav-dropdown-item">
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">Contact</span>
                <span className="nav-dropdown-desc">somtochukwu@mathlon.app</span>
              </Link>
              <Link href="/#faq" className="nav-dropdown-item" onClick={() => setResourcesOpen(false)}>
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">FAQ</span>
                <span className="nav-dropdown-desc">Common questions answered</span>
              </Link>
              <Link href="/#how-it-works" className="nav-dropdown-item" onClick={() => setResourcesOpen(false)}>
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">How it works</span>
                <span className="nav-dropdown-desc">See Mathlon in three steps</span>
              </Link>
              <Link href="/pricing" className="nav-dropdown-item" onClick={() => setResourcesOpen(false)}>
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">Pricing</span>
                <span className="nav-dropdown-desc">Free demo, then $7/month Beta</span>
              </Link>
            </div>
          </div>
        </div>
        <a href="https://tutor.mathlon.app/?demo=true" target="_blank" rel="noopener noreferrer" className="btn-accent">Try the free demo <span className="arrow-icon"></span></a>
        <div className="nav-menu-art" aria-hidden>
          <p className="nav-menu-art-cap">Bring a problem. Let&apos;s work it out.</p>
        </div>
      </div>

      <div className="nav-right">
        <a href="https://tutor.mathlon.app/?demo=true" target="_blank" rel="noopener noreferrer" className="btn-accent">Try the free demo <span className="arrow-icon"></span></a>
        <label className="nav-toggle" htmlFor="nav-check" aria-label="Toggle navigation">
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  );
}
