"use client";

import Script from "next/script";
import { useState, useRef, useCallback } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firm: "",
    interest: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const turnstileRef = useRef("");

  const onTurnstileCallback = useCallback((token: string) => {
    turnstileRef.current = token;
  }, []);

  if (typeof window !== "undefined") {
    (window as any).onTurnstileContact = onTurnstileCallback;
  }

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, honeypot, turnstileToken: turnstileRef.current }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message.");
      }
      setSuccess("Your message has been sent successfully. We'll be in touch!");
      setForm({ firstName: "", lastName: "", email: "", phone: "", firm: "", interest: "", message: "" });
      setHoneypot("");
      if (typeof window !== "undefined" && (window as any).turnstile) {
        (window as any).turnstile.reset();
      }
    } catch (err: any) {
      setError(err?.message || "Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
        <h2 className="text-2xl font-bold text-navy-800 mb-6">Send Us a Message</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-navy-800 mb-2">First Name *</label>
              <input type="text" id="first-name" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400" placeholder="First name" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-navy-800 mb-2">Last Name *</label>
              <input type="text" id="last-name" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400" placeholder="Last name" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-2">Email *</label>
              <input type="email" id="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400" placeholder="you@firm.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-2">Phone</label>
              <input type="tel" id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400" placeholder="(555) 555-5555" />
            </div>
          </div>
          <div>
            <label htmlFor="firm" className="block text-sm font-medium text-navy-800 mb-2">Firm Name</label>
            <input type="text" id="firm" value={form.firm} onChange={(e) => update("firm", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400" placeholder="Your advisory firm" />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-navy-800 mb-2">I&apos;m Interested In</label>
            <select id="interest" value={form.interest} onChange={(e) => update("interest", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 bg-white">
              <option value="">Select an option</option>
              <option value="models">Model Portfolios</option>
              <option value="etfs">THOR ETFs</option>
              <option value="consultation">General Consultation</option>
              <option value="partnership">Advisor Partnership</option>
              <option value="media">Media / Speaking</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Honeypot */}
          <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-2">Message *</label>
            <textarea id="message" rows={5} required value={form.message} onChange={(e) => update("message", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400" placeholder="Tell us about your practice and what you're looking for..." />
          </div>

          {error && <div className="rounded-lg border border-red-300 bg-red-50 text-red-700 text-sm px-4 py-3">{error}</div>}
          {success && <div className="rounded-lg border border-green-300 bg-green-50 text-green-700 text-sm px-4 py-3">{success}</div>}

          {/* Cloudflare Turnstile */}
          <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onTurnstileContact" data-theme="light" data-size="flexible" />

          <button type="submit" disabled={isSubmitting} className="btn-primary text-lg px-8 py-4 w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          By submitting this form, you agree to our privacy policy. We will not share your information with third parties.
        </p>
      </div>
    </>
  );
}
