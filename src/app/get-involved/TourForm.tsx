'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submitForm';
import styles from './page.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function TourForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm('Tour Request', e.currentTarget);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.formSuccess}>
        <span className={styles.formSuccessIcon}>✓</span>
        <h3>Tour request received!</h3>
        <p>Thank you for your interest. We&rsquo;ll contact you within a few days to confirm your Environmental Justice Tour.</p>
      </div>
    );
  }

  return (
    <form name="tour-request" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" className={styles.form}>
      <input type="hidden" name="form-name" value="tour-request" />
      <p style={{ display: 'none' }}><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>

      <div className={styles.formGroup}>
        <label htmlFor="tour-name">Full Name <span aria-hidden="true">*</span></label>
        <input type="text" id="tour-name" name="name" placeholder="Your full name" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="tour-org">Organization or School</label>
        <input type="text" id="tour-org" name="organization" placeholder="Dallas ISD, SMU, First Baptist, etc." />
      </div>

      <div className={styles.formRow2}>
        <div className={styles.formGroup}>
          <label htmlFor="tour-email">Email Address <span aria-hidden="true">*</span></label>
          <input type="email" id="tour-email" name="email" placeholder="you@example.com" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tour-phone">Phone Number</label>
          <input type="tel" id="tour-phone" name="phone" placeholder="(214) 555-0100" />
        </div>
      </div>

      <div className={styles.formRow2}>
        <div className={styles.formGroup}>
          <label htmlFor="tour-dates">Preferred Date(s) <span aria-hidden="true">*</span></label>
          <input type="text" id="tour-dates" name="preferred_dates" placeholder="e.g. Any Saturday in April" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tour-size">Group Size <span aria-hidden="true">*</span></label>
          <input type="text" id="tour-size" name="group_size" placeholder="e.g. 15 students" required />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="tour-message">Additional Information</label>
        <textarea id="tour-message" name="message" rows={4} placeholder="Describe your group, any accessibility needs, or specific topics of interest..." />
      </div>

      {status === 'error' && <p className={styles.formError}>Something went wrong. Please try again.</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn btn--gold btn--lg">
        {status === 'submitting' ? 'Submitting…' : 'Request a Tour'}
      </button>
    </form>
  );
}
