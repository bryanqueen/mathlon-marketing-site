import type { Metadata } from "next";
import Image from "next/image";
import { NavbarSimple } from "@/components/NavbarSimple";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = { title: "About — Mathlon" };

export default function AboutPage() {
  return (
    <>
      <NavbarSimple />

      <section className="page-hero">
        <Image
          className="page-illo"
          src="/images/illustrations/02-infinity.svg"
          alt=""
          width={110}
          height={110}
          aria-hidden
        />
        <h1 className="page-title">Math, finally explained</h1>
        <p className="page-lead">Most people don&apos;t struggle with math because they&apos;re bad at it. They struggle because no one ever slowed down to explain it the way they needed.</p>
      </section>

      <section className="about-belief">
        <p>
          A great tutor is the best way to learn math — patient, sitting beside you, working it out loud and watching for the moment you get lost. We think <span className="accent">everyone</span> should have one.
        </p>
      </section>

      <section className="about-cards">
        <div className="about-card">
          <span className="about-card-num">01</span>
          <h4>The problem</h4>
          <p>Tutors are expensive, hard to book, and never around at 11pm before an exam. The alternatives — textbooks, videos, answer engines — inform you, then leave.</p>
        </div>
        <div className="about-card">
          <span className="about-card-num">02</span>
          <h4>What we built</h4>
          <p>A tutor you talk to. Say the problem out loud; it reasons through the steps on a shared whiteboard. Lost? Interrupt. It backs up and tries again until it clicks.</p>
        </div>
        <div className="about-card">
          <span className="about-card-num">03</span>
          <h4>Who it&apos;s for</h4>
          <p>Students grinding calculus at midnight. Adults relearning algebra. Anyone who&apos;s ever wished they could just ask, &quot;wait — why does that work?&quot;</p>
        </div>
      </section>

      <section className="about-quote">
        <blockquote>
          &quot;It isn&apos;t an answer machine. It&apos;s built to do what a real tutor does — meet you where you are, follow your questions, and stay until you understand.&quot;
        </blockquote>
        <cite>The Mathlon team</cite>
      </section>

      <CtaSection
        heading="Come learn with us"
        body="Mathlon is in early beta. Join now and help shape a tutor that finally teaches the way you need."
      />

      <Footer />
    </>
  );
}
