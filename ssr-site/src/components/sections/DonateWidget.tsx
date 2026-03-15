'use client';

import { useState } from 'react';
import StripeForm from './StripeForm';
import PayPalButton from './PayPalButton';
import { IconShield } from '@/components/icons/SocialIcons';
import styles from './DonateWidget.module.css';

const TIERS = [25, 50, 100, 250, 500];

type Frequency = 'once' | 'monthly';

export default function DonateWidget() {
  const [selected, setSelected]   = useState<number>(100);
  const [custom, setCustom]       = useState('');
  const [frequency, setFrequency] = useState<Frequency>('once');
  const [method, setMethod]       = useState<'stripe' | 'paypal' | null>(null);

  const amount = custom ? parseFloat(custom) : selected;

  function handleCustom(val: string) {
    const clean = val.replace(/[^0-9.]/g, '');
    setCustom(clean);
    setSelected(0);
  }

  function handleTier(tier: number) {
    setSelected(tier);
    setCustom('');
  }

  return (
    <div className={styles.widget}>
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

      {/* Payment method selection */}
      {!method && (
        <div className={styles.methods}>
          <p className={styles.methodLabel}>Choose payment method</p>
          <button
            className={`${styles.methodBtn} ${styles.methodStripe}`}
            onClick={() => setMethod('stripe')}
            disabled={!amount || amount < 1}
          >
            Pay with Card
          </button>
          <button
            className={`${styles.methodBtn} ${styles.methodPaypal}`}
            onClick={() => setMethod('paypal')}
            disabled={!amount || amount < 1}
          >
            Pay with PayPal
          </button>
        </div>
      )}

      {/* Stripe form */}
      {method === 'stripe' && (
        <div className={styles.paymentForm}>
          <button className={styles.back} onClick={() => setMethod(null)}>← Back</button>
          <StripeForm amount={amount} frequency={frequency} />
        </div>
      )}

      {/* PayPal button */}
      {method === 'paypal' && (
        <div className={styles.paymentForm}>
          <button className={styles.back} onClick={() => setMethod(null)}>← Back</button>
          <PayPalButton amount={amount} frequency={frequency} />
        </div>
      )}

      {/* Security note */}
      <p className={styles.secure}>
        <IconShield size={14} />
        Secure donation · 256-bit encryption
      </p>
    </div>
  );
}
