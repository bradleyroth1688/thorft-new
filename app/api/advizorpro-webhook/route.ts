import { NextResponse } from 'next/server';

const WEBHOOK_SECRET = process.env.ADVIZORPRO_WEBHOOK_SECRET || '';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const NOTIFY_EMAIL = 'broth@thoranalytics.com';

export async function POST(request: Request) {
  try {
    // Verify webhook secret if configured
    const authHeader = request.headers.get('authorization') || '';
    const secretParam = new URL(request.url).searchParams.get('secret') || '';
    
    if (WEBHOOK_SECRET && authHeader !== `Bearer ${WEBHOOK_SECRET}` && secretParam !== WEBHOOK_SECRET) {
      console.log('[AdvizorPro Webhook] Auth failed');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    // Log the full payload for debugging
    console.log('[AdvizorPro Webhook] Received:', JSON.stringify(body).slice(0, 2000));

    // Extract visitor info (adjust field names based on AdvizorPro's actual payload)
    const visitor = {
      name: body.name || body.visitor_name || body.contact_name || 'Unknown',
      firm: body.firm || body.company || body.firm_name || 'Unknown',
      email: body.email || body.visitor_email || '',
      title: body.title || body.job_title || '',
      page: body.page || body.page_url || body.url || '',
      aum: body.aum || body.firm_aum || '',
      timestamp: body.timestamp || new Date().toISOString(),
      raw: body, // Keep full payload
    };

    // Send email notification via Resend
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'THOR Website <notifications@thorft.com>',
            to: NOTIFY_EMAIL,
            subject: `Website Visitor: ${visitor.name} — ${visitor.firm}`,
            html: `
              <h3>AdvizorPro Traffic IQ Alert</h3>
              <table style="border-collapse:collapse;font-family:sans-serif;">
                <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${visitor.name}</td></tr>
                <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Firm</td><td>${visitor.firm}</td></tr>
                ${visitor.email ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td>${visitor.email}</td></tr>` : ''}
                ${visitor.title ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Title</td><td>${visitor.title}</td></tr>` : ''}
                ${visitor.aum ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">AUM</td><td>${visitor.aum}</td></tr>` : ''}
                <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Page</td><td>${visitor.page}</td></tr>
                <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Time</td><td>${visitor.timestamp}</td></tr>
              </table>
              <br/>
              <details>
                <summary>Full payload</summary>
                <pre style="font-size:12px;background:#f5f5f5;padding:12px;overflow-x:auto;">${JSON.stringify(body, null, 2)}</pre>
              </details>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('[AdvizorPro Webhook] Email notification failed:', emailErr);
      }
    }

    return NextResponse.json({ ok: true, received: true });
  } catch (err) {
    console.error('[AdvizorPro Webhook] Error:', err);
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

// Also handle GET for health check / verification
export async function GET() {
  return NextResponse.json({ 
    status: 'active',
    service: 'THOR Financial Technologies — AdvizorPro Traffic IQ Webhook',
  });
}
