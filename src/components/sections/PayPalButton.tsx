'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import styles from './PayPalButton.module.css';

interface Props {
  amount: number;
  frequency: 'once' | 'monthly';
}

export default function PayPalButton({ amount, frequency }: Props) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '';

  return (
    <div className={styles.wrapper}>
      <p className={styles.summary}>
        Donating <strong>${amount.toFixed(2)}</strong>
        {frequency === 'monthly' ? ' / month' : ' one-time'}
      </p>

      <PayPalScriptProvider
        options={{
          clientId,
          currency: 'USD',
          intent: frequency === 'monthly' ? 'subscription' : 'capture',
          vault: frequency === 'monthly',
        }}
      >
        {frequency === 'once' ? (
          <PayPalButtons
            style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'donate' }}
            createOrder={(_data, actions) =>
              actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: { currency_code: 'USD', value: amount.toFixed(2) },
                    description: 'Donation to Southern Sector Rising',
                  },
                ],
              })
            }
            onApprove={async (_data, actions) => {
              await actions.order?.capture();
              alert(`Thank you! Your $${amount.toFixed(2)} donation was received.`);
            }}
            onError={(err) => console.error('PayPal error:', err)}
          />
        ) : (
          <p className={styles.note}>
            Monthly PayPal giving is processed via PayPal Subscriptions.
            You&rsquo;ll be redirected to complete your recurring donation.
          </p>
        )}
      </PayPalScriptProvider>
    </div>
  );
}
