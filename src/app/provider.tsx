'use client';

import React, { ReactNode } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const options = {
  mode: 'payment' as const,
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        {children}
      </Elements>
    </div>
  );
};

export default Provider;
