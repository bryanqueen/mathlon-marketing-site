import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaqSection } from "@/components/FaqSection";
import Image from "next/image";

export const metadata: Metadata = { title: "Pricing | Mathlon" };

const demoUrl = "https://tutor.mathlon.app/?demo=true";

const betaFeatures = [
  "Voice tutoring and a whiteboard that works every step with you",
  "Usage that refills on its own, all through the week",
  "Interrupt and ask follow-ups any time",
  "Type a problem, snap a photo of it, or just talk",
  "Help across algebra, trig, calculus and more",
  "Every past session saved in your history",
  "Extra usage whenever you need it, from $6",
  "This price locked in for as long as you stay subscribed",
];

const pricingFaq = [
  {
    q: "How do I get started?",
    a: "Try the free 5-minute demo first. No card, no sign-up. Bring your own problem (type it or attach a photo) or pick one of ours. If Mathlon clicks for you, join the waitlist when your demo ends. We're letting students in a few at a time.",
  },
  {
    q: "How does usage work?",
    a: "Every session is a live tutor, voice and whiteboard together, so there are two limits. A short-term limit refills continuously over five hours, and a weekly limit resets once a week. Your Billing page shows how much of each you've used as a percentage, and warns you before you get close.",
  },
  {
    q: "What happens if I hit a limit?",
    a: "If you're in the middle of a session, it keeps going until you finish. New sessions wait until your usage refills. If you don't want to wait, buy extra usage inside the app. It's used up before the next refill and never expires.",
  },
  {
    q: "How much is extra usage?",
    a: "It comes in three sizes: $6, $11 and $25. Each one tells you how much it adds compared with your weekly limit, from a quarter of a week up to a whole extra week.",
  },
  {
    q: "Is the $10/month price really locked in?",
    a: "Yes, for as long as you stay subscribed. This is founding Beta pricing. Once we're out of beta, new students will pay more. Your rate stays at $10.",
  },
  {
    q: "How do payments and cancelling work?",
    a: "Payments are handled by Creem, our payment partner, so Mathlon never sees your card. You can update your card, download invoices or cancel any time from the Billing page in the app.",
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
          Start with a free 5-minute demo on your own problem. No card, no sign-up. If you want to keep
          going, join Beta at a founding price that stays yours for as long as you&apos;re subscribed.
        </p>
      </section>

      <div className="max-w-[640px] mx-auto px-10 pb-16 max-sm:px-6">
        <div className="bg-white border-2 border-[#030213] px-10 py-12 text-center max-sm:px-6">
          <span className="inline-block text-[12px] font-medium tracking-[0.48px] uppercase text-[#1e6bb8] bg-[rgba(30,107,184,0.08)] px-3.5 py-1.5 mb-6">
            Beta access
          </span>
          <div className="text-[56px] leading-none tracking-[-2px] font-normal text-[#030213] mb-2">
            $10<small className="text-[17px] text-[rgba(45,45,45,0.5)] tracking-normal"> / month</small>
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
            5 minutes free · no credit card · no sign-up
          </p>
        </div>

        <ol className="mt-12 space-y-6 max-w-[480px] mx-auto">
          {[
            { step: "1", title: "Try the demo", body: "Type or paste your own problem, attach a photo of it, or pick one of ours. You get a real voice-and-whiteboard session, free for 5 minutes." },
            { step: "2", title: "See if it clicks", body: "Talk it through, watch the whiteboard work each step, and interrupt whenever you get lost, just like a real tutor." },
            { step: "3", title: "Join the waitlist", body: "When your demo ends, leave your email. We're letting students into Beta a few at a time, and we'll tell you when it's your turn." },
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
          Thank you for backing Mathlon this early. This price is yours for as long as you stay.
        </p>
      </div>

      <FaqSection items={pricingFaq} />

      <Footer />
    </>
  );
}
