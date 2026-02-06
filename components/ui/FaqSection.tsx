"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

export function FaqSection({ faqs, title = "Frequently Asked Questions", className = "" }: { faqs: FAQ[]; title?: string; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section-padding ${className}`} itemScope itemType="https://schema.org/FAQPage">
      <div className="container-max mx-auto">
        <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">{title}</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <h3 className="text-lg font-semibold text-navy-800 pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
