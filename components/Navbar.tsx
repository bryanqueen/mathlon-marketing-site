"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
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
        <div ref={dropdownRef} className={`nav-dropdown${resourcesOpen ? " nav-dropdown--open" : ""}`}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setResourcesOpen(o => !o); }}
            aria-expanded={resourcesOpen}
          >
            Resources
          </a>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-grid">
              <a href="#" className="nav-dropdown-item">
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">Help Center</span>
                <span className="nav-dropdown-desc">Guides and troubleshooting</span>
              </a>
              <a href="#" className="nav-dropdown-item">
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">Community</span>
                <span className="nav-dropdown-desc">Join the conversation</span>
              </a>
              <Link href="/contact" className="nav-dropdown-item">
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">Contact</span>
                <span className="nav-dropdown-desc">hello@mathlon.com</span>
              </Link>
              <a href="#" className="nav-dropdown-item">
                <span className="nav-dropdown-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="nav-dropdown-label">What&apos;s New</span>
                <span className="nav-dropdown-desc">Latest updates and features</span>
              </a>
            </div>
          </div>
        </div>
        <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent">Join the Beta <span className="arrow-icon"></span></a>
        <div className="nav-menu-art" aria-hidden>
          <p className="nav-menu-art-cap">Bring a problem. Let&apos;s work it out.</p>
        </div>
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
