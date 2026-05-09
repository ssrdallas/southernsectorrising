'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/submitForm';
import styles from './page.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm('Contact', e.currentTarget);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.formSuccess}>
        <span className={styles.formSuccessIcon}>✓</span>
        <h3>Message sent!</h3>
        <p>Thanks for reaching out. A member of our team will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form name="contact" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" className={styles.form}>
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: 'none' }}><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>

      <div className={styles.formRow2}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-name">Full Name <span className={styles.required} aria-hidden="true">*</span></label>
          <input type="text" id="contact-name" name="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-email">Email Address <span className={styles.required} aria-hidden="true">*</span></label>
          <input type="email" id="contact-email" name="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className={styles.formRow2}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-phone">Phone Number <span className={styles.optionalLabel}>(optional)</span></label>
          <input type="tel" id="contact-phone" name="phone" placeholder="(214) 555-0100" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-subject">Subject <span className={styles.required} aria-hidden="true">*</span></label>
          <select id="contact-subject" name="subject" required>
            <option value="">-- Select a subject --</option>
            <option value="general">General Inquiry</option>
            <option value="media">Media / Press</option>
            <option value="partnership">Partnership</option>
            <option value="speaking">Speaking Request</option>
            <option value="volunteer">Volunteer</option>
            <option value="donation">Donation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="contact-message">Message <span className={styles.required} aria-hidden="true">*</span></label>
        <textarea id="contact-message" name="message" rows={6} placeholder="Tell us how we can help, or share what&#39;s on your mind..." required />
      </div>

      {status === 'error' && <p className={styles.formError}>Something went wrong. Please try again or email us directly.</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn btn--gold btn--lg">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
