"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function renderBody(text: string) {
  const parts = text.split(/(".*?")/g);
  return parts.map((part, i) => {
    if (part.startsWith('"') && part.endsWith('"')) {
      return (
        <span key={i} className="how-zig-quote">
          {part}
        </span>
      );
    }
    return part;
  });
}

const steps = [
  {
    title: "Speak your problem",
    body: 'Hold space and just talk — "why does the chain rule work?" Snap a photo of the question that stumped you. No typing equations like a robot, no perfect phrasing required.',
    video: "/videos/speak-your-problem.mp4",
    backdrop: "/images/bg1.jpg",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIEAxMhMVNx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAITUf/aAAwDAQACEQMRAD8ARpLnUzetCmNEnPqpz444s9Iinq+ikp//2Q==",
    reverse: false,
    decoSrc: "/images/illustrations/08-globe.svg",
    decoPos: "right",
  },
  {
    title: "Watch it draw",
    body: "As the tutor talks, the whiteboard fills in — equations line by line, a parabola taking shape, a triangle labelled as it's mentioned. You're not reading a wall of text. You're watching someone think it through with you. Imagine hearing \"let's find the derivative\" while watching \"dy/dx\" appear on the board in real time.",
    video: "/videos/watch-it-draw.mp4",
    backdrop: "/images/bg4.jpg",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAQP/xAAfEAACAQMFAQAAAAAAAAAAAAABAgADBDERIjJBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEDYf/aAAwDAQACEQMRAD8AFt6IXt/hxJshB2hFHmspa4hU5GBJaNU//9k=",
    reverse: true,
    decoSrc: "/images/illustrations/07-books-stack.svg",
    decoPos: "left",
  },
  {
    title: "Interrupt freely",
    body: 'Lost at step three? Cut in mid-sentence — "wait, where did that come from?" The tutor stops, scrolls back to that exact step, and explains it a different way before moving on. Just like a real one would.',
    video: "/videos/interrupt-freely.mp4",
    backdrop: "/images/bg3.jpg",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAIBAAAQMCBwAAAAAAAAAAAAAAAQACBAMRBQYSMkGCkf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACESH/2gAMAwEAAhEDEQA/AK1bHojAdBvbkobs1RWuINMnssjI2eoyhiL3c1v/2Q==",
    reverse: false,
    decoSrc: "/images/illustrations/04-cactus.svg",
    decoPos: "right",
  },
];

/**
 * Observes an element and reports whether it's near/in the viewport.
 * `rootMargin` lets a video start loading/playing slightly before it's
 * actually visible, so there's no pop-in when it scrolls into place.
 */
function useNearViewport<T extends Element>(rootMargin = "400px 0px") {
  const ref = useRef<T>(null);
  // Lazy initializer, not an effect: environments without IntersectionObserver
  // (very old browsers/SSR) just start "in view" rather than staying hidden.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

function DemoStage({
  video,
  backdrop,
  blurDataURL,
  priority,
  active,
}: {
  video: string;
  backdrop: string;
  blurDataURL: string;
  priority?: boolean;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  // Once a step has scrolled near the viewport we mount its <source> and
  // keep it mounted — this way we only ever download each ~2-6MB clip once,
  // instead of re-fetching every time it scrolls back into view. Derived
  // during render (not in an effect) per React's "adjusting state" pattern:
  // https://react.dev/learn/you-might-not-need-an-effect
  const [loaded, setLoaded] = useState(Boolean(priority));
  const [prevActive, setPrevActive] = useState(active);
  if (active !== prevActive) {
    setPrevActive(active);
    if (active) setLoaded(true);
  }

  // Play while the step is near the viewport, pause (and stop decoding)
  // once it scrolls away — three simultaneous always-on videos were the
  // biggest single cost on this page.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !loaded) return;
    if (active) {
      v.muted = true;
      const play = () => {
        const p = v.play();
        if (p) p.catch(() => {});
      };
      if (v.readyState >= 2) play();
      else v.addEventListener("loadeddata", play, { once: true });
    } else {
      v.pause();
    }
  }, [active, loaded]);

  return (
    <div className="visual-stage">
      <Image
        className="visual-backdrop"
        src={backdrop}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        quality={75}
        aria-hidden
      />
      <div className={`visual-frame${ready ? " is-ready" : ""}`}>
        <video
          ref={videoRef}
          className={`visual-video${ready ? " visual-video--ready" : ""}`}
          muted
          loop
          playsInline
          preload={loaded ? "auto" : "none"}
          onCanPlay={() => setReady(true)}
          onLoadedData={() => setReady(true)}
          onPlaying={() => setReady(true)}
        >
          {loaded && <source src={video} type="video/mp4" />}
        </video>
      </div>
    </div>
  );
}

type Step = (typeof steps)[number];

function HowItWorksRow({ step, index }: { step: Step; index: number }) {
  const { ref, inView } = useNearViewport<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`how-zig-row${step.reverse ? " is-reverse" : ""}`}
      data-step={index + 1}
    >
      <Image
        className={`zigzag-deco zigzag-deco-${step.decoPos}`}
        src={step.decoSrc}
        alt=""
        width={96}
        height={96}
        aria-hidden
      />
      <div className="how-zig-visual">
        <DemoStage
          video={step.video}
          backdrop={step.backdrop}
          blurDataURL={step.blurDataURL}
          priority={index === 0}
          active={inView}
        />
      </div>

      <div className="how-zig-copy">
        <div className="how-zig-plate">
          <h3 className="how-zig-title">{step.title}</h3>
          <p className="how-zig-body">{renderBody(step.body)}</p>
        </div>
      </div>
    </article>
  );
}

/** Video-led zigzag — each demo only loads/plays once its row is near the viewport. */
export function HowItWorks() {
  return (
    <section className="section how-zig" id="how-it-works">
      <div className="how-zig-header">
        <h2 className="section-heading">How it works</h2>
        <p className="section-body">
          Talk it out. Watch it drawn. Jump in when you&apos;re lost.
        </p>
      </div>

      <div className="how-zig-body">
        <div className="how-zig-rows">
          {steps.map((step, i) => (
            <HowItWorksRow key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
