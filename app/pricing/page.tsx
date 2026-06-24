import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = { title: "Pricing — Mathlon" };

const features = [
  "Voice-first tutoring sessions",
  "A shared whiteboard that draws every step",
  "Interrupt and ask follow-ups any time",
  "Help across algebra, trig, calculus and more",
  "A direct line to shape what we build next",
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/06-lightbulb.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Free while we&apos;re in beta</h1>
        <p className="page-lead">Mathlon is still early, and right now it costs nothing to use. Join the beta, start learning, and help us build something worth paying for.</p>
      </section>

      <div className="max-w-[480px] mx-auto px-10 pb-24 max-sm:px-6">
        <div className="bg-white border border-[rgba(45,45,45,0.1)] px-10 py-12 text-center max-sm:px-6">
          <span className="inline-block text-[12px] font-medium tracking-[0.48px] uppercase text-[#1e6bb8] bg-[rgba(30,107,184,0.08)] px-3.5 py-1.5 mb-6">Beta access</span>
          <div className="text-[56px] leading-none tracking-[-2px] font-normal text-[#030213] mb-2">
            $0<small className="text-[17px] text-[rgba(45,45,45,0.5)] tracking-normal"> / free</small>
          </div>
          <p className="text-[16px] leading-6 text-[rgba(45,45,45,0.6)] mb-7">No credit card. No commitment. Just bring a problem.</p>
          <ul className="list-none text-left flex flex-col gap-3 max-w-[320px] mx-auto mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] leading-[22px] text-[#2d2d2d]">
                <span className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full bg-[#1e6bb8] flex items-center justify-center">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
          <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent flex justify-center w-full">
            Join the Beta <span className="arrow-icon"></span>
          </a>
          <p className="text-[13px] leading-5 text-[rgba(45,45,45,0.5)] mt-6">When we introduce paid plans, they&apos;ll be priced fairly for students, and beta users will hear about it first.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
