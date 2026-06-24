import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? '';
const TO_EMAIL      = process.env.CONTACT_EMAIL ?? 'oge4ajn@gmail.com';
const FROM_EMAIL    = process.env.FROM_EMAIL    ?? 'SSR Website <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Email service unavailable' }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { formType, ...fields } = body as { formType: string; [k: string]: unknown };

    if (!formType || typeof formType !== 'string') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const rows = Object.entries(fields)
      .map(([key, value]) => {
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const val   = Array.isArray(value) ? value.join(', ') : String(value ?? '');
        return `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#1B4332;white-space:nowrap;vertical-align:top;border-bottom:1px solid #e5e7eb">${label}</td>
          <td style="padding:8px 12px;color:#2C2C2C;border-bottom:1px solid #e5e7eb">${val}</td>
        </tr>`;
      })
      .join('');

    const html = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        <div style="background:#1B4332;padding:24px 32px">
          <h1 style="margin:0;color:#fff;font-size:1.25rem">New ${formType} Submission</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:0.875rem">Southern Sector Rising Website</p>
        </div>
        <table style="width:100%;border-collapse:collapse;margin:0">${rows}</table>
        <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb">
          <p style="margin:0;font-size:0.8rem;color:#6b7280">Submitted via southernsectorrising.org</p>
        </div>
      </div>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:    FROM_EMAIL,
        to:      [TO_EMAIL],
        subject: `New ${formType} — Southern Sector Rising`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error((err as { message?: string }).message ?? `Resend error ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('[contact]', err);
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
