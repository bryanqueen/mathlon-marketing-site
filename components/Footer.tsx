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
              <li><a href="https://tutor.mathlon.app/?demo=true" target="_blank" rel="noopener noreferrer">Try the free demo</a></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">&copy; 2026 Mathlon, Inc. All rights reserved.</div>
        <div className="footer-bottom-right">
          <a
            href="https://elevenlabs.io/startup-grants"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-grant-badge"
            aria-label="Backed by the ElevenLabs Startup Grant"
          >
            <img
              src="https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp"
              alt="ElevenLabs Grants"
              width={140}
              height={22}
            />
          </a>
          <div className="footer-legal">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

