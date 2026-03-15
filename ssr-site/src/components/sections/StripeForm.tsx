'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import styles from './StripeForm.module.css';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
);

const CARD_STYLE = {
  style: {
    base: {
      fontSize: '16px',
      color: '#2C2C2C',
      fontFamily: 'Inter, sans-serif',
      '::placeholder': { color: '#6B6B6B' },
    },
    invalid: { color: '#e53e3e' },
  },
};

interface Props {
  amount: number;
  frequency: 'once' | 'monthly';
}

function CheckoutForm({ amount, frequency }: Props) {
  const stripe   = useStripe();
  const elements = useElements();
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/donate/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, frequency, name, email }),
      });

      const { clientSecret, error: apiError } = await res.json();
      if (apiError) throw new Error(apiError);

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: { name, email },
        },
      });

      if (result.error) {
        setError(result.error.message ?? 'Payment failed. Please try again.');
      } else {
        setSuccess(true);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className={styles.success}>
        <p className={styles.successIcon}>✓</p>
        <h3>Thank you for your donation!</h3>
        <p>Your ${amount.toFixed(2)} {frequency === 'monthly' ? 'monthly ' : ''}gift helps frontline communities fight for environmental justice.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.summary}>
        Donating <strong>${amount.toFixed(2)}</strong>
        {frequency === 'monthly' ? ' / month' : ' one-time'}
      </p>

      <div className={styles.field}>
        <label htmlFor="donor-name">Full Name</label>
        <input
          id="donor-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Jane Smith"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="donor-email">Email</label>
        <input
          id="donor-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jane@example.com"
        />
      </div>

      <div className={styles.field}>
        <label>Card Details</label>
        <div className={styles.cardWrapper}>
          <CardElement options={CARD_STYLE} />
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`btn btn--gold btn--lg ${styles.submit}`}
      >
        {loading ? 'Processing…' : `Donate $${amount.toFixed(2)}${frequency === 'monthly' ? '/mo' : ''}`}
      </button>
    </form>
  );
}

export default function StripeForm({ amount, frequency }: Props) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} frequency={frequency} />
    </Elements>
  );
}
