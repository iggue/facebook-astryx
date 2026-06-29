// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function ShippingMethodSelector() {
  const [method, setMethod] = useState('standard');

  const options = [
    {value: 'standard', label: 'Standard', time: '5-7 business days', price: 'Free'},
    {value: 'express', label: 'Express', time: '2-3 business days', price: '$9.99'},
    {value: 'overnight', label: 'Overnight', time: 'Next business day', price: '$24.99'},
  ];

  return (
    <fieldset style={{border: 'none', padding: 0, margin: 0, maxWidth: 400}}>
      <legend style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Shipping Method</legend>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        {options.map(opt => (
          <label
            key={opt.value}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', border: '1px solid', borderColor: method === opt.value ? '#2563eb' : '#e5e7eb',
              borderRadius: 8, cursor: 'pointer', backgroundColor: method === opt.value ? '#eff6ff' : '#fff',
            }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <input
                type="radio"
                name="shipping"
                value={opt.value}
                checked={method === opt.value}
                onChange={() => setMethod(opt.value)}
              />
              <div>
                <div style={{fontWeight: 500}}>{opt.label}</div>
                <div style={{fontSize: 13, color: '#6b7280'}}>{opt.time}</div>
              </div>
            </div>
            <span style={{fontSize: 14, fontWeight: method === opt.value ? 600 : 400}}>
              {opt.price}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
