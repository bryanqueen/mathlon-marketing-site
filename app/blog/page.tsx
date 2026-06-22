import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NavbarSimple } from "@/components/NavbarSimple";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Blog â€” Mathlon" };

export default function BlogPage() {
  return (
    <>
      <NavbarSimple />

      <section className="page-hero">
        <Image className="coming-soon-illo" src="/images/illustrations/05-book.svg" alt="" width={150} height={150} aria-hidden />
        <h1 className="page-title">Coming soon</h1>
        <p className="page-lead">We&apos;re heads-down building Mathlon. Soon this is where we&apos;ll write about teaching math, the things we learn from beta sessions, and what we&apos;re shipping next.</p>
      </section>

      <section className="coming-soon">
        <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent">Join the Beta <span className="arrow-icon"></span></a>
      </section>

      <Footer />
    </>
  );
}

