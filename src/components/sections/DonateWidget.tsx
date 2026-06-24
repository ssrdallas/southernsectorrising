'use client';

import { useState } from 'react';
import StripeForm from './StripeForm';
import { IconShield } from '@/components/icons/SocialIcons';
import styles from './DonateWidget.module.css';

const TIERS = [25, 50, 100, 250, 500];

type Frequency = 'once' | 'monthly';
type Step = 'select' | 'loading' | 'pay';

export default function DonateWidget() {
  const [selected,  setSelected]  = useState<number>(100);
  const [custom,    setCustom]    = useState('');
  const [frequency, setFrequency] = useState<Frequency>('once');
  const [step,      setStep]      = useState<Step>('select');
  const [secret,    setSecret]    = useState('');
  const [error,     setError]     = useState('');

  const amount = custom ? parseFloat(custom) : selected;
  const valid  = amount >= 1;

  function handleCustom(val: string) {
    setCustom(val.replace(/[^0-9.]/g, ''));
    setSelected(0);
  }

  function handleTier(tier: number) {
    setSelected(tier);
    setCustom('');
  }

  async function handleProceed() {
    if (!valid) return;
    setStep('loading');
    setError('');
    try {
      const res = await fetch('/api/donate/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, frequency }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSecret(data.clientSecret);
      setStep('pay');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStep('select');
    }
  }

  function handleBack() {
    setStep('select');
    setSecret('');
    setError('');
  }

  return (
    <div className={styles.widget}>
      {step === 'select' && (
        <>
          {/* Frequency toggle */}
          <div className={styles.frequency}>
            {(['once', 'monthly'] as Frequency[]).map((f) => (
              <button
                key={f}
                className={`${styles.freqBtn} ${frequency === f ? styles.freqActive : ''}`}
                onClick={() => setFrequency(f)}
              >
                {f === 'once' ? 'One-time' : 'Monthly'}
              </button>
            ))}
          </div>

          {/* Amount tiers */}
          <div className={styles.tiers}>
            {TIERS.map((t) => (
              <button
                key={t}
                className={`${styles.tier} ${selected === t && !custom ? styles.tierActive : ''}`}
                onClick={() => handleTier(t)}
              >
                ${t}
              </button>
            ))}
            <div className={`${styles.tier} ${styles.tierCustom} ${custom ? styles.tierActive : ''}`}>
              <span>$</span>
              <input
                type="text"
                inputMode="decimal"
                placeholder="Other"
                value={custom}
                onChange={(e) => handleCustom(e.target.value)}
                className={styles.customInput}
                aria-label="Custom donation amount"
              />
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={`btn btn--gold btn--lg ${styles.proceedBtn}`}
            onClick={handleProceed}
            disabled={!valid}
          >
            Donate ${valid ? amount.toFixed(2) : '—'}{frequency === 'monthly' ? '/mo' : ''}
          </button>
        </>
      )}

      {step === 'loading' && (
        <div className={styles.loading}>
          <span className={styles.spinner} />
          <p>Preparing secure checkout…</p>
        </div>
      )}

      {step === 'pay' && secret && (
        <StripeForm
          amount={amount}
          frequency={frequency}
          clientSecret={secret}
          onBack={handleBack}
        />
      )}

      {/* Security note */}
      <p className={styles.secure}>
        <IconShield size={14} />
        Secure &amp; encrypted · Powered by Stripe
      </p>
    </div>
  );
}
