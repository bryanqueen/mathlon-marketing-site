import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="mathlon">
            <Logo className="footer-mark" />
            <span className="footer-wordmark">mathlon</span>
          </Link>
          <p className="footer-tagline">A math tutor that works it out with you. Built for students who learn by doing.</p>
          <div className="footer-social">
            <span className="social-icon icon-twitter"></span>
            <span className="social-icon icon-linkedin"></span>
            <span className="social-icon icon-instagram"></span>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h5 className="footer-col-title">Product</h5>
            <ul className="footer-col-links">
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/#how-it-works">How it works</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="footer-col-title">Company</h5>
            <ul className="footer-col-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="footer-col-title">Get started</h5>
            <ul className="footer-col-links">
              <li><a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer">Join the beta</a></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">&copy; 2026 Mathlon, Inc. All rights reserved.</div>
        <div className="footer-legal">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
        </div>
      </div>
    </footer>
  );
}

