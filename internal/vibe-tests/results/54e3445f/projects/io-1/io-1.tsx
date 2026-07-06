// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from '@/components/ui/label';

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

  if (isSuccess) {return <Card><CardContent className="p-4"><p>Subscribed successfully!</p></CardContent></Card>;}

  return (
    <Card className="max-w-sm">
      <CardHeader><CardTitle>Subscribe</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => {setEmail(e.target.value); setError(null);}} />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <Button disabled={isSubmitting} onClick={handleSubmit}>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</Button>
      </CardContent>
    </Card>
  );
}
