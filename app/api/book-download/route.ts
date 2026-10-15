import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { spamReason } from "@/lib/lead-spam";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(ip, "book-download", 5, 10 * 60 * 1000)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const { email, name, firm, honeypot, turnstileToken } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Honeypot: look successful, send nothing.
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Drop machine-generated submissions silently. Sending the PDF to an
    // attacker-supplied address turns this route into an open relay on our
    // only verified sending domain, so a flagged request sends NO mail at
    // all — not the document, not the lead notification.
    const spam = spamReason({ name, firm, email });
    if (spam) {
      console.warn(`[book-download] dropped submission (${spam}) from ${ip}`);
      return NextResponse.json({ success: true });
    }

    // Turnstile is optional here (the form opens the PDF without waiting),
    // but a token that is present must be valid.
    if (turnstileToken) {
      const valid = await verifyTurnstile(turnstileToken);
      if (!valid) {
        return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 403 });
      }
    }

    // One document per address per hour, whatever the source IP.
    if (!rateLimit(String(email).toLowerCase(), "book-download-email", 2, 60 * 60 * 1000)) {
      return NextResponse.json({ success: true });
    }

    // Send email with chapter link via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const fromAddr = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

      await resend.emails.send({
        from: fromAddr,
        to: email,
        subject: "Chapter 1: Little Reasons, Big Consequences — THOR Financial Technologies",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #1a2332; font-size: 24px; margin-bottom: 16px;">Chapter 1: Little Reasons, Big Consequences</h1>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              ${name ? `Hi ${name}, thanks` : "Thanks"} for your interest in the book. Here's your free copy of Chapter 1.
            </p>
            <p style="margin: 24px 0;">
              <a href="https://thorft.com/documents/book-chapter-1.pdf"
                 style="display: inline-block; background: #c5a047; color: #1a2332; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                Download Chapter 1 (PDF)
              </a>
            </p>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              Want to learn more? Visit <a href="https://thorft.com/book" style="color: #c5a047;">thorft.com/book</a> to explore all 12 chapters, or subscribe to our daily newsletter <a href="https://thorft.beehiiv.com" style="color: #c5a047;">The Signal</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
            <p style="color: #a0aec0; font-size: 12px;">
              THOR Financial Technologies, LLC<br />
              This is not investment advice. Past performance is not indicative of future results.
            </p>
          </div>
        `,
      });

      // Also notify Brad
      await resend.emails.send({
        from: fromAddr,
        to: process.env.LEAD_NOTIFY_EMAIL || "broth@thoranalytics.com",
        replyTo: email,
        subject: `Book Chapter 1 Download: ${name || email}${firm ? ` (${firm})` : ""}`,
        html: `<p><strong>${name || "Unknown"}</strong> (${email})${firm ? ` from <strong>${firm}</strong>` : ""} just downloaded Chapter 1 of the book.</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book download API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
