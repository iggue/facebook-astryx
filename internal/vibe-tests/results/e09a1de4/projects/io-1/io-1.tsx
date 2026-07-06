// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

function validateEmail(email: string): string | null {
  if (!email) {return 'Email is required';}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {return 'Invalid email address';}
  return null;
}

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    const err = validateEmail(email);
    if (err) { setError(err); return; }
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})});
      if (!res.ok) {throw new Error();}
      setIsSuccess(true);
    } catch { setError('Subscription failed.'); }
    finally { setIsSubmitting(false); }
  };

  if (isSuccess) {return <div style={{padding: 16, border: '1px solid #e0e0e0', borderRadius: 8}}>Subscribed successfully!</div>;}

  return (
    <div style={{maxWidth: 350, padding: 24, border: '1px solid #e0e0e0', borderRadius: 8}}>
      <h3 style={{margin: '0 0 16px'}}>Subscribe to newsletter</h3>
      <div style={{marginBottom: 12}}>
        <label style={{display: 'block', marginBottom: 4, fontSize: 14}}>Email address</label>
        <input type="email" placeholder="you@example.com" value={email} onChange={e => {setEmail(e.target.value); setError(null);}}
          style={{width: '100%', padding: 8, borderRadius: 4, border: `1px solid ${error ? '#f44336' : '#ccc'}`, boxSizing: 'border-box'}} />
        {error && <p style={{color: '#f44336', fontSize: 12, margin: '4px 0 0'}}>{error}</p>}
      </div>
      <button disabled={isSubmitting} onClick={handleSubmit}
        style={{padding: '10px 20px', borderRadius: 4, border: 'none', background: '#1976d2', color: '#fff', cursor: 'pointer', opacity: isSubmitting ? 0.6 : 1}}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </div>
  );
}
