import { NextResponse } from 'next/server';
import { verifyTurnstile } from '@/lib/turnstile';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!rateLimit(ip, 'contact', 5, 10 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const { firstName, lastName, email, phone, firm, interest, message, honeypot, turnstileToken } = body || {};

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Turnstile verification
    if (!turnstileToken) {
      return NextResponse.json({ error: 'CAPTCHA verification required' }, { status: 400 });
    }
    const turnstileValid = await verifyTurnstile(turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 403 });
    }

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      const fromAddr = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const { error: sendError } = await resend.emails.send({
        from: fromAddr,
        to: process.env.LEAD_NOTIFY_EMAIL || 'broth@thoranalytics.com',
        replyTo: email,
        subject: `New Contact: ${firstName} ${lastName} — ${email}`,
        html: `<h2>New Contact Form Submission (thorft.com)</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${firm ? `<p><strong>Firm:</strong> ${firm}</p>` : ''}
          ${interest ? `<p><strong>Interest:</strong> ${interest}</p>` : ''}
          <p><strong>Message:</strong> ${message}</p>`,
      });
      if (sendError) {
        console.error('Contact email send failed', sendError);
      }
    }

    // Telegram ping so a contact never silently disappears
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChat = process.env.TELEGRAM_CHAT_ID;
    if (tgToken && tgChat) {
      try {
        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: tgChat,
            text: `New contact (thorft.com): ${firstName} ${lastName}, ${firm || 'no firm'}, ${email}${interest ? ` — ${interest}` : ''}`,
          }),
          signal: AbortSignal.timeout(8000),
        });
      } catch (tgError) {
        console.error('Contact Telegram ping failed', tgError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
