import Image from "next/image";

interface CtaSectionProps {
  heading: string;
  body: string;
}

export function CtaSection({ heading, body }: CtaSectionProps) {
  return (
    <section className="cta-section" id="beta">
      <Image
        className="cta-deco"
        src="/images/illustrations/01-balloon.svg"
        alt=""
        width={130}
        height={200}
        aria-hidden
      />
      <h2 className="cta-heading" dangerouslySetInnerHTML={{ __html: heading }} />
      <p className="cta-body">{body}</p>
      <div className="cta-actions">
        <a href="https://tutor.mathlon.app" target="_blank" rel="noopener noreferrer" className="btn-accent btn-accent-light">
          Join the Beta <span className="arrow-icon"></span>
        </a>
      </div>
    </section>
  );
}

