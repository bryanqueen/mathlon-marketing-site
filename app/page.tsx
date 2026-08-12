"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { trackCtaClick } from "@/lib/analytics";

const faqItems = [
  {
    q: "What is Mathlon?",
    a: "An audio-visual math tutor. You talk through a problem out loud, and Mathlon explains it back while drawing every step on a shared whiteboard — equations, graphs, diagrams, the lot. It's built to teach the way a good human tutor does, not to spit out a final answer and leave you to reverse-engineer it.",
  },
  {
    q: "Is it free to use?",
    a: "Try Mathlon free first — a short guided demo, no credit card, no signup. If it clicks for you, Beta access is $7/month, locked in for as long as you stay subscribed. That price won't be this low once we're out of beta.",
  },
  {
    q: "How does voice tutoring work?",
    a: 'Hold the space bar and talk like you would to a person — "I don\'t get why this integral works." Mathlon hears you, thinks, and replies out loud while the whiteboard fills in alongside the explanation. You can cut in any time; it\'ll stop and back up to wherever you got lost.',
  },
  {
    q: "How is this different from Khan Academy?",
    a: "Khan Academy is pre-recorded lessons made for everyone. Mathlon is a live conversation made for you — it reacts to your exact question, in your words, at your pace, and draws the answer in real time. Less watching, more doing it together.",
  },
  {
    q: "How do I get started?",
    a: "Try the free demo below — pick a topic, open Mathlon in your browser, and hold space to ask your first question. No install, no signup for the demo. If you like it, join Beta afterward to keep going.",
  },
];

const features = [
  {
    title: "Built to teach, not just answer",
    body: "Walks the logic with you step by step — so you leave understanding, not guessing.",
    caption: "∫ walks the logic with you",
    illo: "/images/illustrations/05-book.svg",
    rot: "-2.2deg",
  },
  {
    title: "Find anything, instantly",
    body: "Jump back to last week’s parabola or that stuck integral without digging through notes.",
    caption: '"last week\'s parabola" →',
    illo: "/images/illustrations/02-camera.svg",
    rot: "1.8deg",
  },
  {
    title: "Follows your curiosity",
    body: "Ask “but why?” as many times as you need. It stays until the idea actually sticks.",
    caption: "but why? × 10",
    illo: "/images/illustrations/06-lightbulb.svg",
    rot: "-1.5deg",
  },
  {
    title: "Fast enough to feel real",
    body: "Replies in under half a second so the conversation stays natural — not stop-start.",
    caption: "< 0.5s to respond",
    illo: "/images/illustrations/03-coffee.svg",
    rot: "2.4deg",
  },
  {
    title: "Your work stays with you",
    body: "Pick up mid-proof tomorrow. Sessions and whiteboard history don’t disappear.",
    caption: "pick up mid-proof ✓",
    illo: "/images/illustrations/03-algebra.svg",
    rot: "-2deg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="section-hero">
        <div className="hero-grid" aria-hidden></div>
        {/* top zone */}
        <span className="hero-eq hero-eq--keep hero-eq--drift" style={{ top: "4%", left: "18%", ["--eq-rot" as string]: "-8deg" } as React.CSSProperties} aria-hidden>∫₀¹ x² dx = ⅓</span>
        <span className="hero-eq hero-eq--desktop hero-eq--drift" style={{ top: "5%", right: "18%", ["--eq-rot" as string]: "-5deg", ["--eq-delay" as string]: "1.2s" } as React.CSSProperties} aria-hidden>x² + y² = r²</span>
        {/* left side */}
        <span className="hero-eq hero-eq--desktop hero-eq--drift" style={{ top: "30%", left: "3%", ["--eq-rot" as string]: "5deg", ["--eq-delay" as string]: "0.4s" } as React.CSSProperties} aria-hidden>y = mx + b</span>
        <span className="hero-eq hero-eq--desktop hero-eq--drift" style={{ top: "50%", left: "7%", ["--eq-rot" as string]: "-3deg", ["--eq-delay" as string]: "2s" } as React.CSSProperties} aria-hidden>sin²θ + cos²θ = 1</span>
        {/* right side */}
        <span className="hero-eq hero-eq--desktop hero-eq--drift" style={{ top: "32%", right: "5%", ["--eq-rot" as string]: "9deg", ["--eq-delay" as string]: "0.8s" } as React.CSSProperties} aria-hidden>P(A∩B) = P(A)·P(B)</span>
        {/* lower band */}
        <span className="hero-eq hero-eq--desktop hero-eq--drift" style={{ top: "70%", left: "22%", ["--eq-rot" as string]: "6deg", ["--eq-delay" as string]: "1.6s" } as React.CSSProperties} aria-hidden>∑ 1/n² = π²/6</span>
        <span className="hero-eq hero-eq--keep hero-eq--keep-br hero-eq--drift" style={{ top: "70%", right: "16%", ["--eq-rot" as string]: "8deg", ["--eq-delay" as string]: "2.4s" } as React.CSSProperties} aria-hidden>d/dx [xⁿ] = nxⁿ⁻¹</span>
        {/* parabola — top right area */}
        <svg className="hero-eq-svg hero-eq--desktop hero-eq--drift" style={{ top: "10%", right: "6%", ["--eq-rot" as string]: "6deg", ["--eq-delay" as string]: "0.6s" } as React.CSSProperties} width="100" height="80" viewBox="0 0 100 80" aria-hidden>
          <path d="M5,70 Q50,5 95,70" fill="none" stroke="#030213" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="5" y1="72" x2="95" y2="72" stroke="#030213" strokeWidth="1"/>
          <line x1="50" y1="75" x2="50" y2="4" stroke="#030213" strokeWidth="1"/>
          <text x="88" y="79" fontSize="11" fill="#030213" className="hero-eq-label">x</text>
          <text x="54" y="12" fontSize="11" fill="#030213" className="hero-eq-label">y</text>
        </svg>
        {/* triangle — lower left */}
        <svg className="hero-eq-svg hero-eq--desktop hero-eq--drift" style={{ top: "70%", left: "8%", ["--eq-rot" as string]: "-9deg", ["--eq-delay" as string]: "1.8s" } as React.CSSProperties} width="80" height="70" viewBox="0 0 80 70" aria-hidden>
          <polygon points="4,60 40,6 76,60" fill="none" stroke="#030213" strokeWidth="1.6"/>
          <text x="40" y="74" fontSize="10" fill="#030213" textAnchor="middle" className="hero-eq-label">a²+b²=c²</text>
        </svg>
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="word" style={{"--w-delay":"0.05s"} as React.CSSProperties}>A</span>{" "}
            <span className="word" style={{"--w-delay":"0.12s"} as React.CSSProperties}>math</span>{" "}
            <span className="word" style={{"--w-delay":"0.19s"} as React.CSSProperties}>tutor</span>{" "}
            <span className="word" style={{"--w-delay":"0.26s"} as React.CSSProperties}>that</span>
            <br />
            <span className="word" style={{"--w-delay":"0.33s"} as React.CSSProperties}>works</span>{" "}
            <span className="word" style={{"--w-delay":"0.40s"} as React.CSSProperties}>it</span>{" "}
            <span className="word" style={{"--w-delay":"0.47s"} as React.CSSProperties}>out</span>{" "}
            <span className="word" style={{"--w-delay":"0.54s"} as React.CSSProperties}>with</span>{" "}
            <span className="word" style={{"--w-delay":"0.61s"} as React.CSSProperties}>you</span>
          </h1>
          <p className="hero-body">
            Bring the problem that&apos;s stuck you. Mathlon reasons through every step out loud, shows the calculation as it goes, and keeps going until it clicks.
          </p>
          <a
            href="https://tutor.mathlon.app/?demo=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent hero-cta"
            onClick={() => trackCtaClick("hero")}
          >
            Try the free demo <span className="arrow-icon"></span>
          </a>
          <p className="hero-meta">No signup · No card · ~5 minutes</p>
        </div>
      </section>

      <HowItWorks />

      {/* Features — Notebook Spreads (desktop) / Tilt-stack (mobile) */}
      <section className="section-notes" id="features">
        <div className="section-inner">
          <h2 className="section-heading">Built for how you learn</h2>
          <p className="section-body">Not a calculator. Not a search box. A thinking partner that stays until you get there.</p>
        </div>
        <div className="notes-grid">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="note-card"
              style={
                {
                  "--note-i": i,
                  "--note-rot": f.rot,
                } as React.CSSProperties
              }
            >
              <div className="note-visual">
                <Image className="card-visual-img" src={f.illo} alt="" width={200} height={200} aria-hidden />
              </div>
              <div className="note-content">
                <h4 className="feature-card-title">{f.title}</h4>
                <p className="note-body">{f.body}</p>
                <p className="note-caption">{f.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SocialProof />

      <FaqSection items={faqItems} />

      <CtaSection
        heading={"Bring the problem<br/>that&apos;s been beating you"}
        body="Try a free guided demo — no credit card, no signup. Like it? Join Beta for $7/month, locked in for life while we're still building."
      />

      <Footer />
    </>
  );
}
