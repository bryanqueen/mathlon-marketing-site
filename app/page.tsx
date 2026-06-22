import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";

const faqItems = [
  {
    q: "What is Mathlon?",
    a: "A voice-first math tutor. You talk through a problem out loud, and Mathlon explains it back while drawing every step on a shared whiteboard — equations, graphs, diagrams, the lot. It's built to teach the way a good human tutor does, not to spit out a final answer and leave you to reverse-engineer it.",
  },
  {
    q: "Is it free to use?",
    a: "During the beta, yes — your first lessons are free, no credit card needed. We're still figuring out long-term pricing, but it'll stay affordable for students. Beta users get a say in where it lands.",
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
    a: "Join the beta below, open Mathlon in your browser, and hold space to ask your first question. No install, no setup, no syllabus to pick from — just bring the problem that's been bugging you.",
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
        <span className="hero-eq hero-eq--keep" style={{top:"4%",  left:"18%", transform:"rotate(-8deg)"} as React.CSSProperties} aria-hidden>∫₀¹ x² dx = ⅓</span>
        <span className="hero-eq hero-eq--desktop" style={{top:"5%",  right:"18%",transform:"rotate(-5deg)"} as React.CSSProperties} aria-hidden>x² + y² = r²</span>
        {/* left side */}
        <span className="hero-eq hero-eq--desktop" style={{top:"30%", left:"3%",  transform:"rotate(5deg)"} as React.CSSProperties} aria-hidden>y = mx + b</span>
        <span className="hero-eq hero-eq--desktop" style={{top:"50%", left:"7%",  transform:"rotate(-3deg)"} as React.CSSProperties} aria-hidden>sin²θ + cos²θ = 1</span>
        {/* right side */}
        <span className="hero-eq hero-eq--desktop" style={{top:"32%", right:"5%", transform:"rotate(9deg)"} as React.CSSProperties} aria-hidden>P(A∩B) = P(A)·P(B)</span>
        {/* lower band — pulled up so it stays in view */}
        <span className="hero-eq hero-eq--desktop" style={{top:"70%", left:"22%", transform:"rotate(6deg)"} as React.CSSProperties} aria-hidden>∑ 1/n² = π²/6</span>
        <span className="hero-eq hero-eq--keep hero-eq--keep-br" style={{top:"70%", right:"16%",transform:"rotate(8deg)"} as React.CSSProperties} aria-hidden>d/dx [xⁿ] = nxⁿ⁻¹</span>
        {/* parabola — top right area */}
        <svg className="hero-eq-svg hero-eq--desktop" style={{top:"10%",right:"6%",transform:"rotate(6deg)"} as React.CSSProperties} width="100" height="80" viewBox="0 0 100 80" aria-hidden>
          <path d="M5,70 Q50,5 95,70" fill="none" stroke="#030213" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="5" y1="72" x2="95" y2="72" stroke="#030213" strokeWidth="1"/>
          <line x1="50" y1="75" x2="50" y2="4" stroke="#030213" strokeWidth="1"/>
          <text x="88" y="79" fontSize="11" fill="#030213" className="hero-eq-label">x</text>
          <text x="54" y="12" fontSize="11" fill="#030213" className="hero-eq-label">y</text>
        </svg>
        {/* triangle — lower left */}
        <svg className="hero-eq-svg hero-eq--desktop" style={{top:"70%",left:"8%",transform:"rotate(-9deg)"} as React.CSSProperties} width="80" height="70" viewBox="0 0 80 70" aria-hidden>
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
          <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent">Join the Beta <span className="arrow-icon"></span></a>
        </div>
      </section>

      {/* How It Works — Zig-Zag */}
      <section className="section" id="how-it-works">
        <div className="zigzag">

          <div className="zigzag-row">
            <Image className="zigzag-deco zigzag-deco-right" src="/images/illustrations/08-globe.svg" alt="" width={96} height={96} aria-hidden />
            <div className="zigzag-visual">
              <div className="visual-stage" style={{backgroundImage:"url('/images/bg1.jpg')"}}>
                <video className="visual-video" autoPlay muted loop playsInline>
                  <source src="/videos/speak-your-problem.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="zigzag-content">
              <h2 className="section-heading">Speak your problem</h2>
              <p className="section-body">Hold space and just talk — &quot;why does the chain rule work?&quot; Snap a photo of the question that stumped you. No typing equations like a robot, no perfect phrasing required.</p>
            </div>
          </div>

          <div className="zigzag-row reverse">
            <Image className="zigzag-deco zigzag-deco-left" src="/images/illustrations/07-books-stack.svg" alt="" width={96} height={96} aria-hidden />
            <div className="zigzag-visual">
              <div className="visual-stage" style={{backgroundImage:"url('/images/bg4.jpg')"}}>
                <video className="visual-video" autoPlay muted loop playsInline>
                  <source src="/videos/watch-it-draw.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="zigzag-content">
              <h2 className="section-heading">Watch it draw</h2>
              <p className="section-body">As the tutor talks, the whiteboard fills in — equations line by line, a parabola taking shape, a triangle labelled as it&apos;s mentioned. You&apos;re not reading a wall of text. You&apos;re watching someone think it through with you.</p>
            </div>
          </div>

          <div className="zigzag-row">
            <Image className="zigzag-deco zigzag-deco-right" src="/images/illustrations/04-cactus.svg" alt="" width={96} height={96} aria-hidden />
            <div className="zigzag-visual">
              <div className="visual-stage" style={{backgroundImage:"url('/images/bg3.jpg')"}}>
                <video className="visual-video" autoPlay muted loop playsInline>
                  <source src="/videos/interrupt-freely.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="zigzag-content">
              <h2 className="section-heading">Interrupt freely</h2>
              <p className="section-body">Lost at step three? Cut in mid-sentence — &quot;wait, where did that come from?&quot; The tutor stops, scrolls back to that exact step, and explains it a different way before moving on. Just like a real one would.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Features — Notebook Spreads (desktop) / Tilt-stack (mobile) */}
      <section className="section-notes" id="features">
        <div className="section-inner">
          <h2 className="section-heading">Built for how you learn</h2>
          <p className="section-body">Not a calculator. Not a search box. A thinking partner that stays until you get there.</p>
        </div>
        <div className="notes-grid">

          <article className="note-card" style={{"--note-i":0,"--note-rot":"-2.2deg"} as React.CSSProperties}>
            <div className="note-visual">
              <Image className="card-visual-img" src="/images/illustrations/05-book.svg" alt="" width={200} height={200} aria-hidden />
            </div>
            <div className="note-content">
              <h4 className="feature-card-title">Built to teach, not just answer</h4>
              <p className="note-caption">∫ walks the logic with you</p>
            </div>
          </article>

          <article className="note-card" style={{"--note-i":1,"--note-rot":"1.8deg"} as React.CSSProperties}>
            <div className="note-visual">
              <Image className="card-visual-img" src="/images/illustrations/02-camera.svg" alt="" width={200} height={200} aria-hidden />
            </div>
            <div className="note-content">
              <h4 className="feature-card-title">Find anything, instantly</h4>
              <p className="note-caption">&quot;last week&apos;s parabola&quot; →</p>
            </div>
          </article>

          <article className="note-card" style={{"--note-i":2,"--note-rot":"-1.5deg"} as React.CSSProperties}>
            <div className="note-visual">
              <Image className="card-visual-img" src="/images/illustrations/06-lightbulb.svg" alt="" width={200} height={200} aria-hidden />
            </div>
            <div className="note-content">
              <h4 className="feature-card-title">Follows your curiosity</h4>
              <p className="note-caption">but why? × 10</p>
            </div>
          </article>

          <article className="note-card" style={{"--note-i":3,"--note-rot":"2.4deg"} as React.CSSProperties}>
            <div className="note-visual">
              <Image className="card-visual-img" src="/images/illustrations/03-coffee.svg" alt="" width={200} height={200} aria-hidden />
            </div>
            <div className="note-content">
              <h4 className="feature-card-title">Fast enough to feel real</h4>
              <p className="note-caption">&lt; 0.5s to respond</p>
            </div>
          </article>

          <article className="note-card" style={{"--note-i":4,"--note-rot":"-2deg"} as React.CSSProperties}>
            <div className="note-visual">
              <Image className="card-visual-img" src="/images/illustrations/03-algebra.svg" alt="" width={200} height={200} aria-hidden />
            </div>
            <div className="note-content">
              <h4 className="feature-card-title">Your work stays with you</h4>
              <p className="note-caption">pick up mid-proof ✓</p>
            </div>
          </article>

        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={faqItems} />

      {/* CTA */}
      <CtaSection
        heading={"Bring the problem<br/>that&apos;s been beating you"}
        body="Join the beta and your first lesson is free. No credit card, no commitment — just you, a whiteboard, and a tutor that won't move on until it clicks."
      />

      <Footer />
    </>
  );
}
