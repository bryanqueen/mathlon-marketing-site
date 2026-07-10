import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import Image from "next/image";

export const metadata: Metadata = { title: "Pricing — Mathlon" };

const demoUrl = "https://tutor.mathlon.app/?demo=true";

const betaFeatures = [
  "15 voice tutoring minutes every day",
  "Voice and canvas working together in every session",
  "A shared whiteboard that draws every step",
  "Interrupt and ask follow-ups any time",
  "Help across algebra, trig, calculus and more",
  "30-day session history",
  "Top up more voice minutes inside the app when you need them",
  "This price locked in for as long as you stay subscribed",
];

const pricingFaq = [
  {
    q: "How do I actually get started?",
    a: "Try the free 5-minute demo first — no card, no signup. If Mathlon clicks for you, you'll see the option to join Beta right inside the app after your demo.",
  },
  {
    q: "Why is there a daily minute limit?",
    a: "Mathlon is a live audio-visual tutor — voice and canvas together — so every session has real compute cost. 15 minutes a day keeps Beta sustainable while we're small, and it's usually enough for a solid study session.",
  },
  {
    q: "What happens when my 15 minutes run out?",
    a: "Your session pauses for the day. Beta users can top up inside the app to keep going, or come back tomorrow for a fresh 15 minutes at midnight.",
  },
  {
    q: "Is the $7/month price really locked in?",
    a: "Yes — for as long as you stay subscribed. This is founding Beta pricing. Once we're out of beta, new users will pay more. Your rate stays at $7.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/06-lightbulb.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Try free. Pay only if it clicks.</h1>
        <p className="page-lead">
          Start with a 5-minute guided demo — no card, no signup. If you want to keep going, join Beta
          at a founding price that stays yours for as long as you&apos;re subscribed.
        </p>
      </section>

      <div className="max-w-[640px] mx-auto px-10 pb-16 max-sm:px-6">
        <div className="bg-white border-2 border-[#030213] px-10 py-12 text-center max-sm:px-6">
          <span className="inline-block text-[12px] font-medium tracking-[0.48px] uppercase text-[#1e6bb8] bg-[rgba(30,107,184,0.08)] px-3.5 py-1.5 mb-6">
            Beta access
          </span>
          <div className="text-[56px] leading-none tracking-[-2px] font-normal text-[#030213] mb-2">
            $7<small className="text-[17px] text-[rgba(45,45,45,0.5)] tracking-normal"> / month</small>
          </div>
          <p className="text-[16px] leading-6 text-[rgba(45,45,45,0.6)] mb-8">
            Cancel anytime. Founding price locked in for as long as you stay subscribed.
          </p>
          <ul className="list-none text-left flex flex-col gap-3 max-w-[360px] mx-auto mb-8">
            {betaFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] leading-[22px] text-[#2d2d2d]">
                <span className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full bg-[#1e6bb8] flex items-center justify-center">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn-accent flex justify-center w-full">
            Try the free demo <span className="arrow-icon"></span>
          </a>
          <p className="text-[13px] leading-5 text-[rgba(45,45,45,0.5)] mt-4">
            5 minutes free · no credit card · join Beta inside the app when you&apos;re ready
          </p>
        </div>

        <ol className="mt-12 space-y-6 max-w-[480px] mx-auto">
          {[
            { step: "1", title: "Try the demo", body: "Open Mathlon, pick a topic, and experience a real voice-and-canvas session — free for 5 minutes." },
            { step: "2", title: "See if it clicks", body: "Talk through a problem, watch the whiteboard draw, interrupt when you get lost — just like a real tutor." },
            { step: "3", title: "Join Beta in the app", body: "When your demo ends, you can subscribe at $7/month right there. No separate checkout page to hunt for." },
          ].map(({ step, title, body }) => (
            <li key={step} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#030213] text-white text-[13px] font-semibold flex items-center justify-center">
                {step}
              </span>
              <div>
                <h3 className="text-[16px] font-medium text-[#030213] mb-1">{title}</h3>
                <p className="text-[14px] leading-6 text-[rgba(45,45,45,0.65)]">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p
          className="text-[18px] leading-6 text-[rgba(45,45,45,0.55)] mt-12 text-center"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          Thank you for backing Mathlon this early — this price is yours for life.
        </p>
      </div>

      <FaqSection items={pricingFaq} />

      <Footer />
    </>
  );
}
