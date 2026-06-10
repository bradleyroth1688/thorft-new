"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "thor_advisor_attest";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const ROLES = [
  "Financial Advisor / RIA",
  "Institutional Investor",
  "Other Financial Professional",
];

export function AdvisorGate({ children }: { children: React.ReactNode }) {
  // null = not yet checked (avoids hydration flash), false = not attested, true = attested
  const [attested, setAttested] = useState<boolean | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [confirmed, setConfirmed] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();
  const turnstileRef = useRef("");

  const onTurnstileCallback = useCallback((token: string) => {
    turnstileRef.current = token;
  }, []);

  if (typeof window !== "undefined") {
    (window as any).onTurnstileAdvisorGate = onTurnstileCallback;
  }

  useEffect(() => {
    setAttested(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  function unlock() {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setAttested(true);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid work email.");
      return;
    }
    if (!firm.trim()) {
      setError("Please enter your firm name.");
      return;
    }
    if (!confirmed) {
      setError("Please confirm that you are a financial professional.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/factsheet-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          firm: firm.trim(),
          role,
          sourcePage: pathname,
          honeypot,
          turnstileToken: turnstileRef.current || undefined,
        }),
      });
      if (!res.ok) {
        // Never strand a real advisor on an API failure — they attested.
        console.warn("[AdvisorGate] Lead capture failed with status", res.status);
      }
    } catch (err) {
      console.warn("[AdvisorGate] Lead capture request failed:", err);
    }
    unlock();
  }

  if (attested === true) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      {attested === false && (
        <div className="fixed inset-0 z-50 flex items-center justify-center gradient-navy px-4 py-8 overflow-y-auto">
          {TURNSTILE_SITE_KEY && (
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
          )}
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 md:p-10 my-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-navy-800 mb-3 text-center">
              For Financial Professionals Only
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6 text-center text-sm">
              These materials contain hypothetical model performance and are
              intended exclusively for investment professionals. Tell us who you
              are to continue.
            </p>
            <form onSubmit={onSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="gate-name" className="block text-sm font-medium text-navy-800 mb-1.5">Name *</label>
                <input
                  type="text"
                  id="gate-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="gate-email" className="block text-sm font-medium text-navy-800 mb-1.5">Work email *</label>
                <input
                  type="email"
                  id="gate-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  placeholder="you@firm.com"
                />
              </div>
              <div>
                <label htmlFor="gate-firm" className="block text-sm font-medium text-navy-800 mb-1.5">Firm *</label>
                <input
                  type="text"
                  id="gate-firm"
                  required
                  value={firm}
                  onChange={(e) => setFirm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  placeholder="Your firm"
                />
              </div>
              <div>
                <label htmlFor="gate-role" className="block text-sm font-medium text-navy-800 mb-1.5">Role *</label>
                <select
                  id="gate-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 bg-white"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
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

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-400"
                />
                <span className="text-sm text-gray-600">
                  I am a financial professional acting in a professional capacity. *
                </span>
              </label>

              {TURNSTILE_SITE_KEY && (
                <div
                  className="cf-turnstile"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-callback="onTurnstileAdvisorGate"
                  data-theme="light"
                  data-size="flexible"
                />
              )}

              {error && (
                <div className="rounded-lg border border-red-300 bg-red-50 text-red-700 text-sm px-4 py-3">{error}</div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-6 py-3 flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Continuing…" : "Continue"}
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Return to homepage
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
