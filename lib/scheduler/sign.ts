import { createHmac, timingSafeEqual } from 'crypto'
import { SITE_URL } from './config'

function mac(id: string): string {
  const secret = process.env.SCHEDULER_SECRET
  if (!secret) throw new Error('SCHEDULER_SECRET not set')
  return createHmac('sha256', secret).update(`meet:${id}`).digest('base64url').slice(0, 32)
}

export function sign(id: string): string {
  return mac(id)
}

export function verify(id: string, sig: string): boolean {
  if (!id || !sig) return false
  const a = Buffer.from(mac(id))
  const b = Buffer.from(sig)
  return a.length === b.length && timingSafeEqual(a, b)
}

export function manageUrl(id: string): string {
  return `${SITE_URL}/meet/manage?id=${encodeURIComponent(id)}&sig=${sign(id)}`
}
