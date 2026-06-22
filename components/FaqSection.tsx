"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
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
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                  aria-expanded={isOpen}
                >
                  {item.q} <span className="faq-icon"></span>
                </button>
                {isOpen && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
