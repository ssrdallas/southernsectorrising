'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const INTEREST_AREAS = [
  { id: 'interest-water',      label: 'Water deliveries (Sandbranch)' },
  { id: 'interest-tours',      label: 'EJ Tours' },
  { id: 'interest-organizing', label: 'Community organizing' },
  { id: 'interest-events',     label: 'Events' },
  { id: 'interest-admin',      label: 'Admin / Operations' },
  { id: 'interest-other',      label: 'Other' },
];

export default function VolunteerForm() {
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
        <h3>Application received!</h3>
        <p>Thank you for volunteering. We&rsquo;ll be in touch soon to match you with the right opportunity.</p>
      </div>
    );
  }

  return (
    <form name="volunteer-signup" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field" className={styles.form}>
      <input type="hidden" name="form-name" value="volunteer-signup" />
      <p style={{ display: 'none' }}><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>

      <div className={styles.formRow2}>
        <div className={styles.formGroup}>
          <label htmlFor="vol-first">First Name <span aria-hidden="true">*</span></label>
          <input type="text" id="vol-first" name="first_name" placeholder="First name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="vol-last">Last Name <span aria-hidden="true">*</span></label>
          <input type="text" id="vol-last" name="last_name" placeholder="Last name" required />
        </div>
      </div>

      <div className={styles.formRow2}>
        <div className={styles.formGroup}>
          <label htmlFor="vol-email">Email Address <span aria-hidden="true">*</span></label>
          <input type="email" id="vol-email" name="email" placeholder="you@example.com" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="vol-phone">Phone Number</label>
          <input type="tel" id="vol-phone" name="phone" placeholder="(214) 555-0100" />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="vol-city">City / Zip Code <span aria-hidden="true">*</span></label>
        <input type="text" id="vol-city" name="city_zip" placeholder="Dallas, TX or 75241" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="vol-hear">How did you hear about us?</label>
        <select id="vol-hear" name="how_heard">
          <option value="">-- Select one --</option>
          <option value="social-media">Social Media</option>
          <option value="friend-family">Friend or Family</option>
          <option value="news-media">News / Media</option>
          <option value="event">Event or Tour</option>
          <option value="search">Web Search</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset className={styles.checkboxFieldset}>
        <legend>Areas of Interest <span className={styles.optional}>(select all that apply)</span></legend>
        <div className={styles.checkboxGrid}>
          {INTEREST_AREAS.map((area) => (
            <label key={area.id} className={styles.checkboxLabel}>
              <input type="checkbox" id={area.id} name="interests" value={area.id.replace('interest-', '')} />
              <span>{area.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.formGroup}>
        <label htmlFor="vol-message">Anything else you&rsquo;d like us to know?</label>
        <textarea id="vol-message" name="message" rows={4} placeholder="Tell us about your skills, availability, or motivation..." />
      </div>

      {status === 'error' && <p className={styles.formError}>Something went wrong. Please try again.</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn btn--gold btn--lg">
        {status === 'submitting' ? 'Submitting…' : 'Submit Volunteer Application'}
      </button>
    </form>
  );
}
