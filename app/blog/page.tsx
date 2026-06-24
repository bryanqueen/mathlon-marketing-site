import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Blog — Mathlon" };

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/05-book.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Coming soon</h1>
        <p className="page-lead">We&apos;re heads-down building Mathlon. Soon this is where we&apos;ll write about teaching math, the things we learn from beta sessions, and what we&apos;re shipping next.</p>
      </section>

      <div className="max-w-[620px] mx-auto px-10 pt-6 pb-[120px] text-center max-sm:px-6">
        <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent">
          Join the Beta <span className="arrow-icon"></span>
        </a>
      </div>

      <Footer />
    </>
  );
}
