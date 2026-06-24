import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('[Stripe] STRIPE_SECRET_KEY is not set');
    return NextResponse.json({ error: 'Payment service unavailable' }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-02-25.clover',
  });

  try {
    const body = await req.json();
    const { amount, frequency } = body;

    if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }
    if (amount > 10000) {
      return NextResponse.json({ error: 'Amount exceeds maximum donation limit' }, { status: 400 });
    }
    if (frequency !== 'monthly' && frequency !== 'once') {
      return NextResponse.json({ error: 'Invalid frequency' }, { status: 400 });
    }

    const amountCents = Math.round(amount * 100);

    // ── Monthly → real Stripe Subscription ──────────────────────────────
    if (frequency === 'monthly') {
      const customer = await stripe.customers.create({
        metadata: { org: 'Southern Sector Rising' },
      });

      const price = await stripe.prices.create({
        unit_amount: amountCents,
        currency: 'usd',
        recurring: { interval: 'month' },
        product_data: { name: 'Monthly Donation — Southern Sector Rising' },
      });

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: price.id }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const invoice = subscription.latest_invoice as any;
      let clientSecret: string | null = invoice?.payment_intent?.client_secret ?? null;

      // In API 2026-02-25.clover the expand path doesn't always populate — list is safe
      // because this customer was just created and can only have one PaymentIntent
      if (!clientSecret) {
        const piList = await stripe.paymentIntents.list({ customer: customer.id, limit: 1 });
        clientSecret = piList.data[0]?.client_secret ?? null;
      }

      if (!clientSecret) throw new Error('Could not retrieve payment intent from subscription.');

      return NextResponse.json({ clientSecret });
    }

    // ── One-time PaymentIntent ───────────────────────────────────────────
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: 'usd',
      description: 'One-time donation — Southern Sector Rising',
      metadata: { org: 'Southern Sector Rising', frequency: 'once' },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    console.error('[Stripe donate]', err);
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
