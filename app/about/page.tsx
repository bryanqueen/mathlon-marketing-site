import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = { title: "About — Mathlon" };

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/02-infinity.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Math, finally explained</h1>
        <p className="page-lead">Most people don&apos;t struggle with math because they&apos;re bad at it. They struggle because no one ever slowed down to explain it the way they needed.</p>
      </section>

      {/* Belief statement */}
      <section className="max-w-[860px] mx-auto px-10 py-[72px] text-center max-sm:px-6 max-sm:py-12">
        <p className="text-[30px] leading-[44px] tracking-[-1px] font-normal text-[#030213] max-sm:text-[22px] max-sm:leading-8">
          A great tutor is the best way to learn math — patient, sitting beside you, working it out loud and watching for the moment you get lost. We think <span className="text-[#1e6bb8]">everyone</span> should have one.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-[1100px] mx-auto px-10 pb-[72px] pt-6 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[900px]:gap-4 max-sm:px-6 max-sm:pb-12">
        {[
          {
            num: "01",
            title: "The problem",
            body: "Tutors are expensive, hard to book, and never around at 11pm before an exam. The alternatives — textbooks, videos, answer engines — inform you, then leave.",
          },
          {
            num: "02",
            title: "What we built",
            body: "A tutor you talk to. Say the problem out loud; it reasons through the steps on a shared whiteboard. Lost? Interrupt. It backs up and tries again until it clicks.",
          },
          {
            num: "03",
            title: "Who it's for",
            body: "Students grinding calculus at midnight. Adults relearning algebra. Anyone who's ever wished they could just ask, \"wait — why does that work?\"",
          },
        ].map(({ num, title, body }) => (
          <div key={num} className="bg-white border border-[rgba(45,45,45,0.1)] rounded-lg p-8">
            <span className="block font-[family-name:var(--font-caveat)] text-[30px] leading-none text-[#1e6bb8] mb-4">{num}</span>
            <h4 className="text-[19px] leading-[25px] tracking-[-0.4px] font-medium text-[#030213] mb-2.5">{title}</h4>
            <p className="text-[15px] leading-6 text-[rgba(45,45,45,0.7)]">{body}</p>
          </div>
        ))}
      </section>

      {/* Quote */}
      <section className="max-w-[820px] mx-auto px-10 pt-6 pb-[88px] text-center max-sm:px-6 max-sm:pb-14">
        <blockquote className="text-[26px] leading-[38px] tracking-[-0.8px] font-normal text-[#030213] max-sm:text-[20px] max-sm:leading-[30px]">
          &quot;It isn&apos;t an answer machine. It&apos;s built to do what a real tutor does — meet you where you are, follow your questions, and stay until you understand.&quot;
        </blockquote>
        <cite className="block mt-5 text-[14px] not-italic tracking-[0.4px] uppercase text-[rgba(45,45,45,0.5)]">The Mathlon team</cite>
      </section>

      <CtaSection
        heading="Come learn with us"
        body="Mathlon is in early beta. Join now and help shape a tutor that finally teaches the way you need."
      />

      <Footer />
    </>
  );
}
