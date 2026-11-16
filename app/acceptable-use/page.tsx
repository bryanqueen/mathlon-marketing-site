import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Acceptable Use Policy | Mathlon" };

const sections = [
  {
    title: "1. What Mathlon is for",
    content: (
      <p>
        Mathlon is an AI math tutor. It talks you through problems out loud and works them out on a
        shared board. You can use it to learn math, practise, check your understanding and get help
        with homework. This policy applies to everyone who uses Mathlon, including the free demo, and
        to everything you say, type or upload in a session. It is part of our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
  {
    title: "2. Sexual and NSFW content is not allowed",
    content: (
      <>
        <p>
          Mathlon is a learning tool used by students, so sexual content has no place in it. You may
          not use Mathlon to request, create, upload or discuss:
        </p>
        <ul>
          <li>Sexual, sexually suggestive or pornographic content of any kind, in voice, text or images.</li>
          <li>Graphic nudity or sexual roleplay.</li>
          <li>
            Any content that sexualises minors. We report this to the relevant authorities and
            permanently close the account.
          </li>
        </ul>
        <p>
          The AI models behind the tutor are built to refuse these requests, and the tutor brings
          the conversation back to math. Trying to get around that is a breach of this policy.
        </p>
      </>
    ),
  },
  {
    title: "3. Other prohibited uses",
    content: (
      <>
        <p>You also may not use Mathlon to:</p>
        <ul>
          <li>Harass, threaten, bully or demean anyone, or promote hate or violence.</li>
          <li>Encourage self-harm or harm to others.</li>
          <li>Plan, promote or carry out anything illegal.</li>
          <li>
            Cheat on a graded test or exam where outside help is not allowed. Using Mathlon to study
            and to understand homework is fine.
          </li>
          <li>Upload other people&apos;s personal information, or content you do not have the right to share.</li>
          <li>
            Trick the tutor into ignoring its instructions (for example with &quot;jailbreak&quot; prompts),
            or make it produce content unrelated to learning.
          </li>
          <li>
            Access the Service with bots, scripts or scrapers, get around usage limits, or share,
            sell or resell your account or access.
          </li>
          <li>Pretend to be someone else, or interfere with the Service or other users.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. How we enforce this policy",
    content: (
      <>
        <p>
          We may review session records when we suspect misuse. If you break this policy, we may
          warn you, limit your access, or suspend or close your account, depending on how serious
          the breach is. Accounts closed for a breach are not refunded. Where the law requires it, or
          where someone may be at risk, we report content to the authorities.
        </p>
      </>
    ),
  },
  {
    title: "5. Reporting a problem",
    content: (
      <p>
        If the tutor ever says something inappropriate, or you see Mathlon being misused, email us
        at <a href="mailto:somtochukwu@mathlon.app">somtochukwu@mathlon.app</a>. We read every report.
      </p>
    ),
  },
  {
    title: "6. Changes to this policy",
    content: (
      <p>
        We may update this policy as Mathlon grows. We&apos;ll post the new version here and update
        the date at the top. Continuing to use Mathlon after a change means you accept it.
      </p>
    ),
  },
];

export default function AcceptableUsePage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/01-geometry.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Acceptable Use Policy</h1>
        <p className="page-lead">What Mathlon is for, and what it can&apos;t be used for.</p>
      </section>

      <div className="legal-wrap">
        <p className="legal-meta">Last updated: November 16, 2026</p>
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
