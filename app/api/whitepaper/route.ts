import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name, firm } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Send email with whitepaper link via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const fromAddr = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

      await resend.emails.send({
        from: fromAddr,
        to: email,
        subject: "Your Copy of Signal Processing 101 — THOR Financial Technologies",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #1a2332; font-size: 24px; margin-bottom: 16px;">Signal Processing 101</h1>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              ${name ? `Hi ${name}, thanks` : "Thanks"} for your interest in THOR's systematic approach. Here's your copy of our whitepaper.
            </p>
            <p style="margin: 24px 0;">
              <a href="https://thorft.com/documents/signal-processing-101.pdf" 
                 style="display: inline-block; background: #c5a047; color: #1a2332; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                Download Signal Processing 101 (PDF)
              </a>
            </p>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
              Want to learn more? Visit <a href="https://thorft.com" style="color: #c5a047;">thorft.com</a> or subscribe to our daily newsletter <a href="https://thorft.beehiiv.com" style="color: #c5a047;">The Signal</a>.
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
        to: "broth@thoranalytics.com",
        subject: `Whitepaper Download: ${name || email}${firm ? ` (${firm})` : ""}`,
        html: `<p><strong>${name || "Unknown"}</strong> (${email})${firm ? ` from <strong>${firm}</strong>` : ""} just downloaded Signal Processing 101.</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Whitepaper API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
