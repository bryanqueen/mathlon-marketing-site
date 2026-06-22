import type { Metadata } from "next";
import Image from "next/image";
import { NavbarSimple } from "@/components/NavbarSimple";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Contact — Mathlon" };

export default function ContactPage() {
  return (
    <>
      <NavbarSimple />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/03-coffee.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Say hello</h1>
        <p className="page-lead">Question, idea, bug, or just want to tell us how a session went? We read everything. Drop us a line below.</p>
      </section>

      <section className="contact-wrap">
        <form className="contact-form" action="mailto:hello@mathlon.com" method="post" encType="text/plain">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="What&apos;s on your mind?" required></textarea>
          </div>
          <button type="submit" className="btn-accent btn-full">Send message <span className="arrow-icon"></span></button>
        </form>
        <div className="contact-aside">
          Prefer email? Reach us directly at <a href="mailto:hello@mathlon.com">hello@mathlon.com</a>. We usually reply within a day or two.
        </div>
      </section>

      <Footer />
    </>
  );
}
