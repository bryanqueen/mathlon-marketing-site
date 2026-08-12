"use client";

import { useId, useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        type="button"
        id={buttonId}
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {item.q} <span className="faq-icon" aria-hidden />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq-panel"
      >
        <div className="faq-panel-inner">
          <div className="faq-answer">{item.a}</div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="faq-layout">
        <div className="faq-heading-col">
          <h2 className="faq-heading">Frequently asked questions</h2>
        </div>
        <div className="faq-questions">
          {items.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
