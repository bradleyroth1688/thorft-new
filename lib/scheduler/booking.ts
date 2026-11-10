import { SCHEDULE, locationLabel, locationUrl, type BookingDetails, type MeetingType } from './config'

export function whenLabel(start: Date, timeZone = SCHEDULE.timeZone): string {
  const date = start.toLocaleDateString('en-US', { timeZone, weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  const time = start.toLocaleTimeString('en-US', { timeZone, hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })
  return `${date} at ${time}`
}

export function description(type: MeetingType, b: BookingDetails, manage: string): string {
  const url = locationUrl(type.location)
  const lines = [
    `${type.name} (${type.minutes} minutes)`,
    '',
    `Join on ${locationLabel(type.location)}: ${url}`,
  ]
  const zoomId = type.location === 'zoom' ? url.match(/\/j\/(\d{9,11})/)?.[1] : undefined
  if (zoomId) lines.push(`Meeting ID: ${zoomId.replace(/^(\d{3})(\d{3})(\d+)$/, '$1 $2 $3')}`)
  lines.push('', `Guest: ${b.name} <${b.email}>`)
  if (b.firm) lines.push(`Firm: ${b.firm}`)
  if (b.etf) lines.push(`ETF: ${b.etf}`)
  if (b.notes) lines.push('', `Notes from guest: ${b.notes}`)
  lines.push('', `Reschedule or cancel: ${manage}`)
  return lines.join('\n')
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

/** Tell Brad. The Google invite already puts the meeting on his calendar; this is the heads-up. */
export async function notifyBrad(subject: string, lines: string[], replyTo?: string) {
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const { Resend } = await import('resend')
      const { error } = await new Resend(resendKey).emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.LEAD_NOTIFY_EMAIL || 'broth@thoranalytics.com',
        ...(replyTo ? { replyTo } : {}),
        subject,
        html: `<h2>${esc(subject)}</h2>${lines.map((l) => `<p>${esc(l)}</p>`).join('')}`,
      })
      if (error) console.error('Scheduler email failed', error)
    } catch (e) {
      console.error('Scheduler email failed', e)
    }
  }
  const tgToken = process.env.TELEGRAM_BOT_TOKEN
  const tgChat = process.env.TELEGRAM_CHAT_ID
  if (tgToken && tgChat) {
    try {
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: tgChat, text: [subject, ...lines].join('\n') }),
        signal: AbortSignal.timeout(8000),
      })
    } catch (e) {
      console.error('Scheduler Telegram ping failed', e)
    }
  }
}

function icsStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function icsText(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')
}

/** An .ics with Google's own UID for the event, so a calendar that already has the Google invite updates it instead of adding a copy. */
export function icsFile(o: { id: string; summary: string; description: string; location: string; start: Date; end: Date; sequence: number }): string {
  const fold = (line: string) => line.match(/.{1,73}/g)!.join('\r\n ')
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//THOR Financial Technologies//Meet//EN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
    `UID:${o.id}@google.com`, `SEQUENCE:${o.sequence}`, `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(o.start)}`, `DTEND:${icsStamp(o.end)}`,
    fold(`SUMMARY:${icsText(o.summary)}`), fold(`LOCATION:${icsText(o.location)}`), fold(`DESCRIPTION:${icsText(o.description)}`),
    'ORGANIZER;CN=Brad Roth:mailto:broth@thoranalytics.com', 'STATUS:CONFIRMED', 'END:VEVENT', 'END:VCALENDAR', '',
  ].join('\r\n')
}

function fromAddress(): string {
  const raw = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
  const addr = raw.match(/<([^>]+)>/)?.[1] || raw
  return `Brad Roth <${addr}>`
}

/** Confirmation to the guest, with the meeting attached as an .ics. Google's own invite also goes out; this one carries the THOR branding and the manage link. */
export async function emailGuest(o: {
  kind: 'booked' | 'moved'
  id: string
  type: MeetingType
  guest: { name: string; email: string }
  summary: string
  description: string
  start: Date
  end: Date
  manage: string
  sequence: number
}) {
  const key = process.env.RESEND_API_KEY
  if (!key) return
  const url = locationUrl(o.type.location)
  const where = locationLabel(o.type.location)
  const when = whenLabel(o.start)
  const first = o.guest.name.split(/\s+/)[0]
  const heading = o.kind === 'booked' ? 'Your meeting is confirmed' : 'Your meeting has moved'
  const btn = (href: string, label: string, gold: boolean) =>
    `<a href="${esc(href)}" style="display:inline-block;padding:12px 22px;margin:0 8px 8px 0;border-radius:8px;font-weight:600;text-decoration:none;${
      gold ? 'background:#d4af37;color:#060d17' : 'background:#ffffff;color:#0a1628;border:1px solid #b3c3d7'}">${esc(label)}</a>`
  const html = `<!doctype html><html><body style="margin:0;background:#f0f3f7;font-family:Inter,Arial,sans-serif;color:#1a2744">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f3f7;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden">
<tr><td style="background:#0a1628;padding:22px 28px;color:#d4af37;font-weight:700;letter-spacing:.08em;font-size:13px">THOR FINANCIAL TECHNOLOGIES</td></tr>
<tr><td style="padding:28px">
<h1 style="margin:0 0 16px;font-size:22px;color:#0a1628">${esc(heading)}</h1>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6">Hi ${esc(first)}, ${o.kind === 'booked' ? 'thank you for booking time with me.' : 'here is the new time for our meeting.'}</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background:#f9efd1;border-radius:10px;margin:0 0 22px"><tr><td style="padding:16px 18px;font-size:15px;line-height:1.7">
<strong>${esc(o.summary)}</strong><br>${esc(when)}<br>${o.type.minutes} minutes on ${esc(where)}</td></tr></table>
${url ? btn(url, `Join on ${where}`, true) : ''}${btn(o.manage, 'Reschedule or cancel', false)}
<p style="margin:18px 0 0;font-size:13px;color:#6787af;line-height:1.6">The attached invite adds this meeting to your calendar. Reply to this email to reach me directly.</p>
<p style="margin:22px 0 0;font-size:15px">Brad Roth<br><span style="color:#6787af;font-size:13px">Founder and CIO, THOR Financial Technologies</span></p>
</td></tr></table></td></tr></table></body></html>`
  const text = [heading, '', o.summary, when, `${o.type.minutes} minutes on ${where}`, url && `Join: ${url}`, `Reschedule or cancel: ${o.manage}`, '', 'Brad Roth']
    .filter(Boolean).join('\n')
  try {
    const { Resend } = await import('resend')
    const { error } = await new Resend(key).emails.send({
      from: fromAddress(),
      to: o.guest.email,
      replyTo: 'broth@thoranalytics.com',
      subject: `${o.kind === 'booked' ? 'Confirmed' : 'Moved'}: ${o.type.name} on ${when}`,
      html,
      text,
      attachments: [{
        filename: 'invite.ics',
        content: Buffer.from(icsFile({ id: o.id, summary: o.summary, description: o.description, location: url, start: o.start, end: o.end, sequence: o.sequence })).toString('base64'),
      }],
    })
    if (error) console.error('Guest confirmation failed', error)
  } catch (e) {
    console.error('Guest confirmation failed', e)
  }
}
