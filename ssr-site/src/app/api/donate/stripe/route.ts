import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2026-02-25.clover',
  });

  try {
    const { amount, frequency, name, email } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const amountCents = Math.round(amount * 100);

    if (frequency === 'monthly') {
      // Create a subscription via SetupIntent
      const customer = await stripe.customers.create({ name, email });

      const setupIntent = await stripe.setupIntents.create({
        customer: customer.id,
        payment_method_types: ['card'],
        metadata: { monthly_amount: amountCents, org: 'Southern Sector Rising' },
      });

      return NextResponse.json({ clientSecret: setupIntent.client_secret });
    }

    // One-time PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: 'usd',
      receipt_email: email,
      description: `Donation to Southern Sector Rising from ${name}`,
      metadata: { donor_name: name, org: 'Southern Sector Rising' },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    console.error('[Stripe donate]', err);
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
