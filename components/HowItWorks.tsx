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

function DemoStage({
  video,
  backdrop,
  blurDataURL,
  priority,
}: {
  video: string;
  backdrop: string;
  blurDataURL: string;
  priority?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const play = () => {
      const p = v.play();
      if (p) p.catch(() => {});
    };
    if (v.readyState >= 2) play();
    else v.addEventListener("loadeddata", play, { once: true });
  }, []);

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
          autoPlay
          preload="auto"
          onCanPlay={() => setReady(true)}
          onLoadedData={() => setReady(true)}
          onPlaying={() => setReady(true)}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

/** Static video-led zigzag — all demos autoplay; no in-view gating. */
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
            <article
              key={step.title}
              className={`how-zig-row${step.reverse ? " is-reverse" : ""}`}
              data-step={i + 1}
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
                  priority={i === 0}
                />
              </div>

              <div className="how-zig-copy">
                <div className="how-zig-plate">
                  <h3 className="how-zig-title">{step.title}</h3>
                  <p className="how-zig-body">{renderBody(step.body)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
