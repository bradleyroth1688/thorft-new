"use client";

import { useState } from "react";

const CHAPTER_URL = "/documents/book-chapter-1.pdf";

export default function BookChapterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Immediately open the PDF
    window.open(CHAPTER_URL, "_blank");

    // Send email in background
    fetch("/api/book-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, firm }),
    }).catch(() => {});

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">You&apos;re All Set</h3>
        <p className="text-gray-300 mb-4 text-sm">
          Chapter 1 should be open in a new tab. We also sent a copy to your email.
        </p>
        <p className="text-gray-400 text-xs mb-4">Didn&apos;t open?</p>
        <a
          href={CHAPTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Open Chapter 1
        </a>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-xl font-bold mb-1">Download Chapter 1 Free</h3>
      <p className="text-sm text-gray-400 mb-4">
        Get the first chapter free — see why your returns suffer from the behavioral traps you don&apos;t even notice.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="bc-name" className="block text-sm text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            id="bc-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="bc-email" className="block text-sm text-gray-300 mb-1">Business Email</label>
          <input
            type="email"
            id="bc-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
            placeholder="john@firm.com"
          />
        </div>
        <div>
          <label htmlFor="bc-firm" className="block text-sm text-gray-300 mb-1">Firm Name</label>
          <input
            type="text"
            id="bc-firm"
            value={firm}
            onChange={(e) => setFirm(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
            placeholder="Wealth Management Co."
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
          {loading ? "Opening..." : "Download Chapter 1 Free"}
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-3 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </>
  );
}
