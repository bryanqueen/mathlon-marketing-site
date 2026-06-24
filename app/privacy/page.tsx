import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Privacy Policy — Mathlon" };

const sections = [
  {
    title: "1. Information we collect",
    content: (
      <>
        <p>When you use Mathlon, we may collect the following:</p>
        <ul>
          <li><strong>Account information</strong> — your name and email address when you sign up for the beta.</li>
          <li><strong>Session data</strong> — voice input, whiteboard interactions, and the content of tutoring sessions to improve the product and deliver your session history.</li>
          <li><strong>Usage data</strong> — pages visited, features used, and device/browser information for analytics and performance monitoring.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How we use your information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve the Mathlon tutoring experience.</li>
          <li>Personalise your sessions and save your learning history.</li>
          <li>Send product updates and beta announcements (you can unsubscribe at any time).</li>
          <li>Diagnose bugs and improve reliability.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Data sharing",
    content: <p>We do not sell your personal data. We may share data with trusted service providers (e.g. cloud hosting, analytics) who process it on our behalf under strict confidentiality agreements. We may disclose data if required by law.</p>,
  },
  {
    title: "4. Data retention",
    content: <p>We retain your data for as long as your account is active or as needed to provide services. You can request deletion at any time by emailing <a href="mailto:hello@mathlon.com">hello@mathlon.com</a>.</p>,
  },
  {
    title: "5. Cookies",
    content: <p>We use essential cookies to keep you signed in and remember your preferences. We may use analytics cookies to understand how people use the product. You can disable non-essential cookies in your browser settings.</p>,
  },
  {
    title: "6. Security",
    content: <p>We use industry-standard measures to protect your data. No method of transmission over the internet is 100% secure, but we work hard to protect your information.</p>,
  },
  {
    title: "7. Children's privacy",
    content: <p>Mathlon is not directed at children under 13. If you believe a child under 13 has provided us with personal data, please contact us and we will delete it promptly.</p>,
  },
  {
    title: "8. Changes to this policy",
    content: <p>We may update this policy from time to time. We&apos;ll notify beta users of significant changes by email. Continued use of Mathlon after changes constitutes acceptance of the updated policy.</p>,
  },
  {
    title: "9. Contact",
    content: <p>Questions? Email us at <a href="mailto:hello@mathlon.com">hello@mathlon.com</a>.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/04-sets.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-lead">How we handle your data — plainly explained.</p>
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
