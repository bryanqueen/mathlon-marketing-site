import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NavbarSimple } from "@/components/NavbarSimple";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Pricing â€” Mathlon" };

export default function PricingPage() {
  return (
    <>
      <NavbarSimple />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/06-lightbulb.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Free while we&apos;re in beta</h1>
        <p className="page-lead">Mathlon is still early, and right now it costs nothing to use. Join the beta, start learning, and help us build something worth paying for.</p>
      </section>

      <section className="pricing-wrap">
        <div className="price-card">
          <span className="price-badge">Beta access</span>
          <div className="price-amount">$0<small> / free</small></div>
          <p className="price-sub">No credit card. No commitment. Just bring a problem.</p>
          <ul className="price-features">
            <li>Voice-first tutoring sessions</li>
            <li>A shared whiteboard that draws every step</li>
            <li>Interrupt and ask follow-ups any time</li>
            <li>Help across algebra, trig, calculus and more</li>
            <li>A direct line to shape what we build next</li>
          </ul>
          <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent btn-full">Join the Beta <span className="arrow-icon"></span></a>
          <p className="price-note">When we introduce paid plans, they&apos;ll be priced fairly for students, and beta users will hear about it first.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

