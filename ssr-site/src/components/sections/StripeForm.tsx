'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import styles from './StripeForm.module.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

const appearance = {
  theme: 'stripe' as const,
  variables: {
    colorPrimary: '#1B4332',
    colorBackground: '#ffffff',
    colorText: '#2C2C2C',
    colorDanger: '#e53e3e',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '8px',
    spacingUnit: '5px',
  },
  rules: {
    '.Label': { color: '#2C2C2C', fontWeight: '600', fontSize: '0.875rem' },
    '.Input': { border: '1.5px solid #D1D5DB', boxShadow: 'none' },
    '.Input:focus': { border: '1.5px solid #1B4332', boxShadow: '0 0 0 3px rgba(27,67,50,0.12)' },
  },
};

interface CheckoutFormProps {
  amount: number;
  frequency: 'once' | 'monthly';
  onBack: () => void;
}

function CheckoutForm({ amount, frequency, onBack }: CheckoutFormProps) {
  const stripe   = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError('');

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/get-involved?donated=true`,
      },
      redirect: 'if_required',
    });

    if (result.error) {
      setError(result.error.message ?? 'Payment failed. Please try again.');
      setLoading(false);
    } else if (result.paymentIntent?.status === 'succeeded' || result.paymentIntent?.status === 'processing') {
      setSuccess(true);
    } else {
      setError(`Unexpected payment status: ${result.paymentIntent?.status ?? 'unknown'}. Please try again or contact us.`);
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <h3 className={styles.successTitle}>Thank you!</h3>
        <p>
          Your <strong>${amount.toFixed(2)}{frequency === 'monthly' ? '/month' : ''}</strong> gift
          helps frontline communities fight for environmental justice.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.summary}>
        Donating <strong>${amount.toFixed(2)}</strong>
        {frequency === 'monthly' ? ' / month' : ' one-time'}
      </p>

      <PaymentElement />

      {error && <p className={styles.error}>{error}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`btn btn--gold btn--lg ${styles.submit}`}
      >
        {loading ? 'Processing…' : `Donate $${amount.toFixed(2)}${frequency === 'monthly' ? '/mo' : ''}`}
      </button>

      <button type="button" className={styles.back} onClick={onBack}>
        ← Change amount
      </button>
    </form>
  );
}

interface Props {
  amount: number;
  frequency: 'once' | 'monthly';
  clientSecret: string;
  onBack: () => void;
}

export default function StripeForm({ amount, frequency, clientSecret, onBack }: Props) {
  return (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
      <CheckoutForm amount={amount} frequency={frequency} onBack={onBack} />
    </Elements>
  );
}
