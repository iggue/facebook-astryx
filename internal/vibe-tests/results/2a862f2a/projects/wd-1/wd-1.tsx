// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState('standard');
  const steps: Step[] = ['cart', 'shipping', 'payment', 'confirmation'];
  const stepIndex = steps.indexOf(step);
  const progress = ((stepIndex + 1) / 4) * 100;

  const cardStyle: React.CSSProperties = {
    border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, maxWidth: 500, margin: '0 auto',
  };
  const btnStyle: React.CSSProperties = {
    width: '100%', padding: '10px 16px', backgroundColor: '#2563eb', color: '#fff',
    border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14, fontWeight: 500, marginTop: 16,
  };
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14,
  };

  return (
    <div style={{maxWidth: 500, margin: '0 auto', padding: 24}}>
      <div style={{height: 6, backgroundColor: '#e5e7eb', borderRadius: 3, marginBottom: 24}}>
        <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#2563eb', borderRadius: 3, transition: 'width 0.3s'}} />
      </div>

      {step === 'cart' && (
        <div style={cardStyle}>
          <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Cart Summary</h2>
          <div style={{borderTop: '1px solid #e5e7eb', paddingTop: 12}}>
            <p>Widget Pro x2 - $49.98</p>
            <p>Gadget Mini x1 - $19.99</p>
          </div>
          <div style={{borderTop: '1px solid #e5e7eb', paddingTop: 12, marginTop: 12, fontWeight: 600}}>
            Total: $69.97
          </div>
          <button style={btnStyle} onClick={() => setStep('shipping')}>Continue to Shipping</button>
        </div>
      )}

      {step === 'shipping' && (
        <div style={cardStyle}>
          <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Shipping</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <label>Full name<input style={inputStyle} /></label>
            <label>Address<input style={inputStyle} /></label>
            <fieldset style={{border: 'none', padding: 0}}>
              <legend style={{fontWeight: 500, marginBottom: 8}}>Method</legend>
              <label style={{display: 'block'}}><input type="radio" name="ship" value="standard" checked={shipping === 'standard'} onChange={() => setShipping('standard')} /> Standard</label>
              <label style={{display: 'block'}}><input type="radio" name="ship" value="express" checked={shipping === 'express'} onChange={() => setShipping('express')} /> Express</label>
            </fieldset>
          </div>
          <button style={btnStyle} onClick={() => setStep('payment')}>Continue to Payment</button>
        </div>
      )}

      {step === 'payment' && (
        <div style={cardStyle}>
          <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Payment</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <label>Card number<input style={inputStyle} /></label>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
              <label>Expiry<input style={inputStyle} /></label>
              <label>CVC<input style={inputStyle} /></label>
            </div>
          </div>
          <button style={btnStyle} onClick={() => setStep('confirmation')}>Place Order</button>
        </div>
      )}

      {step === 'confirmation' && (
        <div style={{...cardStyle, textAlign: 'center'}}>
          <h2 style={{fontSize: 20, fontWeight: 600}}>Order Confirmed!</h2>
          <p style={{color: '#6b7280', marginTop: 8}}>Thank you. Your order number is #12345.</p>
        </div>
      )}
    </div>
  );
}
