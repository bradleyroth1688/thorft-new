"use client";

import { useCallback, useRef, useState } from "react";
import Script from "next/script";

const WHITEPAPER_URL = "/documents/signal-processing-101.pdf";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function WhitepaperForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const turnstileRef = useRef("");

  const onTurnstileCallback = useCallback((token: string) => {
    turnstileRef.current = token;
  }, []);

  if (typeof window !== "undefined") {
    (window as any).onTurnstileWhitepaper = onTurnstileCallback;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Immediately open the PDF
    window.open(WHITEPAPER_URL, "_blank");

    // Send email in background
    fetch("/api/whitepaper", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        firm,
        honeypot,
        turnstileToken: turnstileRef.current || undefined,
      }),
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
          The whitepaper should be open in a new tab. Use the button below if it did not.
        </p>
        <p className="text-gray-400 text-xs mb-4">Didn&apos;t open?</p>
        <a
          href={WHITEPAPER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Open White Paper
        </a>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Get the White Paper</h3>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="wp-name" className="block text-sm text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            id="wp-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="wp-email" className="block text-sm text-gray-300 mb-1">Business Email</label>
          <input
            type="email"
            id="wp-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
            placeholder="john@firm.com"
          />
        </div>
        <div>
          <label htmlFor="wp-firm" className="block text-sm text-gray-300 mb-1">Firm Name</label>
          <input
            type="text"
            id="wp-firm"
            value={firm}
            onChange={(e) => setFirm(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
            placeholder="Wealth Management Co."
          />
        </div>
        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {TURNSTILE_SITE_KEY && (
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-callback="onTurnstileWhitepaper"
            data-theme="dark"
            data-size="flexible"
          />
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
          {loading ? "Opening..." : "Read It Now"}
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-3 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </>
  );
}
