import { NextResponse } from 'next/server';
import { verifyTurnstile } from '@/lib/turnstile';
import { rateLimit } from '@/lib/rate-limit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    // Rate limit: 5 per 10 minutes per IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!rateLimit(ip, 'factsheet-lead', 5, 10 * 60 * 1000)) {
      return NextResponse.json({ success: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await req.json().catch(() => ({}));
    const { name, email, firm, role, sourcePage, honeypot, turnstileToken } = body || {};

    // Honeypot: pretend success, store nothing
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Turnstile: optional, but verify if a token was provided
    if (turnstileToken) {
      const valid = await verifyTurnstile(turnstileToken);
      if (!valid) {
        return NextResponse.json({ success: false, error: 'CAPTCHA verification failed.' }, { status: 403 });
      }
    }

    if (!name || typeof name !== 'string' || !email || !EMAIL_RE.test(String(email))) {
      return NextResponse.json({ success: false, error: 'Name and a valid email are required.' }, { status: 400 });
    }

    const userAgent = req.headers.get('user-agent') || '';
    const timestamp = new Date().toISOString();

    let storedInSupabase = false;
    let emailSent = false;

    // 1. Supabase insert (service role, REST API)
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const serviceKey = process.env.SUPABASE_SERVICE_KEY;
      if (supabaseUrl && serviceKey) {
        const res = await fetch(`${supabaseUrl}/rest/v1/factsheet_leads`, {
          method: 'POST',
          headers: {
            apikey: serviceKey,
            Authorization: `Bearer ${serviceKey}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            name,
            email,
            firm: firm || '',
            role: role || '',
            source_page: sourcePage || '',
            ip,
            user_agent: userAgent,
          }),
          signal: AbortSignal.timeout(10_000),
        });
        if (res.ok) {
          storedInSupabase = true;
        } else {
          console.error('[Factsheet Lead] Supabase insert failed:', res.status, await res.text().catch(() => ''));
        }
      } else {
        console.error('[Factsheet Lead] SUPABASE_URL / SUPABASE_SERVICE_KEY not configured');
      }
    } catch (err) {
      console.error('[Factsheet Lead] Supabase error:', err);
    }

    // 2. Email notification via Resend
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        const { Resend } = await import('resend');
        const resend = new Resend(resendKey);
        const fromAddr = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        await resend.emails.send({
          from: fromAddr,
          to: 'broth@thoranalytics.com',
          subject: `Factsheet lead: ${name} — ${firm || 'no firm'}`,
          html: `<h2>New Advisor Lead (Factsheet Gate)</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Firm:</strong> ${firm || 'Not provided'}</p>
            <p><strong>Role:</strong> ${role || 'Not provided'}</p>
            <p><strong>Source page:</strong> ${sourcePage || 'Unknown'}</p>
            <p><strong>IP:</strong> ${ip}</p>
            <p><strong>Time:</strong> ${timestamp}</p>`,
        });
        emailSent = true;
      } else {
        console.error('[Factsheet Lead] RESEND_API_KEY not configured');
      }
    } catch (err) {
      console.error('[Factsheet Lead] Resend error:', err);
    }

    // 3. Telegram alert (plain text, no parse_mode)
    try {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      if (botToken && chatId) {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: `New advisor lead (factsheets): ${name}, ${firm || 'no firm'}, ${email} — via ${sourcePage || 'unknown page'}`,
          }),
          signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) {
          console.error('[Factsheet Lead] Telegram send failed:', res.status, await res.text().catch(() => ''));
        }
      } else {
        console.error('[Factsheet Lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not configured');
      }
    } catch (err) {
      console.error('[Factsheet Lead] Telegram error:', err);
    }

    if (storedInSupabase || emailSent) {
      return NextResponse.json({ success: true });
    }

    console.error('[Factsheet Lead] All delivery channels failed for', email);
    return NextResponse.json({ success: false, error: 'Failed to record lead.' }, { status: 500 });
  } catch (error) {
    console.error('[Factsheet Lead Error]', error);
    return NextResponse.json({ success: false, error: 'Failed to process lead' }, { status: 500 });
  }
}
