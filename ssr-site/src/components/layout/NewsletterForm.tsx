'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const body = new URLSearchParams();
    new FormData(e.currentTarget).forEach((v, k) => body.append(k, v.toString()));
    try {
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p style={{ color: 'var(--color-gold)', fontSize: '0.9rem', margin: 0 }}>✓ You&rsquo;re subscribed!</p>;
  }

  return (
    <form name="newsletter" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" className={styles.newsletterForm}>
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="bot-field" style={{ display: 'none' }} />
      <input type="email" name="email" placeholder="Your email address" required disabled={status === 'submitting'} />
      <button type="submit" disabled={status === 'submitting'} className="btn btn--gold btn--sm">
        {status === 'submitting' ? '…' : 'Subscribe'}
      </button>
      {status === 'error' && <p style={{ color: '#f87171', fontSize: '0.8rem', margin: '0.25rem 0 0', gridColumn: '1/-1' }}>Try again.</p>}
    </form>
  );
}
