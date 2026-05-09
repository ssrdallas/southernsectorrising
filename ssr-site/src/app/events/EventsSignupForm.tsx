'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EventsSignupForm() {
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
    return (
      <div className={styles.formSuccess}>
        <span className={styles.formSuccessIcon}>✓</span>
        <h3>You&rsquo;re signed up!</h3>
        <p>We&rsquo;ll send event announcements and updates straight to your inbox.</p>
      </div>
    );
  }

  return (
    <form name="events-signup" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" className={styles.signupForm}>
      <input type="hidden" name="form-name" value="events-signup" />
      <p style={{ display: 'none' }}><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="signup-name">Full Name</label>
          <input type="text" id="signup-name" name="name" placeholder="Your name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="signup-email">Email Address</label>
          <input type="email" id="signup-email" name="email" placeholder="you@example.com" required />
        </div>
      </div>

      {status === 'error' && <p style={{ color: 'var(--color-danger)', fontSize: '0.875rem', margin: '0.5rem 0' }}>Something went wrong. Please try again.</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn btn--gold btn--lg">
        {status === 'submitting' ? 'Signing up…' : 'Sign Me Up'}
      </button>
      <p className={styles.formNote}>We respect your privacy. Unsubscribe at any time.</p>
    </form>
  );
}
