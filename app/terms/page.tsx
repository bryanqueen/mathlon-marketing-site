import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Terms of Service — Mathlon" };

const sections = [
  {
    title: "1. Acceptance of terms",
    content: <p>By accessing or using Mathlon (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>,
  },
  {
    title: "2. Use of the Service",
    content: (
      <>
        <p>Mathlon is a voice-first math tutoring tool currently in beta. You may use the Service only for lawful, personal, non-commercial purposes. You agree not to:</p>
        <ul>
          <li>Attempt to reverse-engineer, scrape, or copy any part of the Service.</li>
          <li>Use the Service to generate or distribute harmful, misleading, or illegal content.</li>
          <li>Interfere with or disrupt the Service or its infrastructure.</li>
          <li>Share your account credentials with others.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Beta disclaimer",
    content: <p>The Service is provided as a beta product. Features may change, be removed, or be unavailable without notice. We make no guarantees about uptime, accuracy of tutoring responses, or fitness for any particular purpose during the beta period.</p>,
  },
  {
    title: "4. Intellectual property",
    content: <p>All content, design, and software comprising the Service is owned by Mathlon or its licensors. You retain ownership of any content you submit (e.g. photos of problems), and you grant Mathlon a limited licence to use that content solely to deliver the Service to you.</p>,
  },
  {
    title: "5. Limitation of liability",
    content: <p>To the fullest extent permitted by law, Mathlon is not liable for any indirect, incidental, or consequential damages arising from your use of the Service, including reliance on tutoring responses for academic assessments.</p>,
  },
  {
    title: "6. Termination",
    content: <p>We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if we believe you have violated these terms.</p>,
  },
  {
    title: "7. Governing law",
    content: <p>These terms are governed by the laws of the jurisdiction in which Mathlon, Inc. is incorporated, without regard to conflict of law principles.</p>,
  },
  {
    title: "8. Changes to these terms",
    content: <p>We may update these terms from time to time. We&apos;ll notify beta users of material changes by email. Continued use after changes take effect constitutes acceptance.</p>,
  },
  {
    title: "9. Contact",
    content: <p>Questions about these terms? Email us at <a href="mailto:hello@mathlon.com">hello@mathlon.com</a>.</p>,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/01-geometry.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Terms of Service</h1>
        <p className="page-lead">The rules for using Mathlon — kept short and readable.</p>
      </section>

      <div className="legal-wrap">
        <p className="legal-meta">Last updated: June 22, 2026</p>
        {sections.map(({ title, content }) => (
          <div key={title} className="legal-section">
            <h2 className="legal-heading">{title}</h2>
            <div className="legal-content">{content}</div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
