// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const plans = [
  {name: 'Starter', monthlyPrice: 9, annualPrice: 7, features: ['1 user', '5 GB storage', 'Email support']},
  {name: 'Pro', monthlyPrice: 29, annualPrice: 24, features: ['5 users', '50 GB', 'Priority support', 'API access'], isPopular: true},
  {name: 'Enterprise', monthlyPrice: 99, annualPrice: 79, features: ['Unlimited users', '500 GB', 'Dedicated support', 'Custom integrations', 'SLA']},
];

export default function PricingTable() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div style={{maxWidth: 900, margin: '0 auto', padding: 32, textAlign: 'center'}}>
      <h1 style={{fontSize: 32, marginBottom: 16}}>Pricing</h1>
      <div style={{display: 'inline-flex', borderRadius: 8, border: '1px solid #e0e0e0', marginBottom: 32, overflow: 'hidden'}}>
        <button onClick={() => setBilling('monthly')} style={{padding: '8px 20px', backgroundColor: billing === 'monthly' ? '#0d6efd' : 'white', color: billing === 'monthly' ? 'white' : '#333', border: 'none', cursor: 'pointer'}}>Monthly</button>
        <button onClick={() => setBilling('annual')} style={{padding: '8px 20px', backgroundColor: billing === 'annual' ? '#0d6efd' : 'white', color: billing === 'annual' ? 'white' : '#333', border: 'none', cursor: 'pointer'}}>Annual</button>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24}}>
        {plans.map((plan) => (
          <div key={plan.name} style={{border: '1px solid #e0e0e0', borderRadius: 12, padding: 24, textAlign: 'left'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8}}>
              <h3 style={{margin: 0}}>{plan.name}</h3>
              {plan.isPopular && <span style={{fontSize: 12, padding: '2px 8px', backgroundColor: '#e8f4fd', borderRadius: 12, color: '#0d6efd'}}>Popular</span>}
            </div>
            <div style={{marginBottom: 16}}>
              <span style={{fontSize: 36, fontWeight: 700}}>${billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice}</span>
              <span style={{color: '#666'}}>/mo</span>
            </div>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: 24}}>
              {plan.features.map((f) => <li key={f} style={{padding: '4px 0', fontSize: 14}}>{f}</li>)}
            </ul>
            <button style={{width: '100%', padding: '10px 0', backgroundColor: plan.isPopular ? '#0d6efd' : 'white', color: plan.isPopular ? 'white' : '#333', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer'}}>
              {plan.isPopular ? 'Get started' : 'Choose plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
