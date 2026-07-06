// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';

function validateEmail(email: string): string | null {
  if (!email) {return 'Email is required';}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {return 'Please enter a valid email address';}
  return null;
}

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = useCallback(async () => {
    const err = validateEmail(email);
    if (err) { setError(err); return; }
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})});
      if (!res.ok) {throw new Error('Failed');}
      setIsSuccess(true);
    } catch { setError('Subscription failed. Try again.'); }
    finally { setIsSubmitting(false); }
  }, [email]);

  if (isSuccess) {return <Card padding={4}><Text type="body">Subscribed successfully.</Text></Card>;}

  return (
    <Card padding={4}>
      <div className="flex flex-col gap-4 max-w-sm">
        <Heading level={3}>Subscribe</Heading>
        <TextInput type="email" label="Email" value={email} onChange={v => {setEmail(v); setError(null);}} placeholder="you@example.com"
          status={error ? {type: 'error', message: error} : undefined} />
        <Button label={isSubmitting ? 'Subscribing...' : 'Subscribe'} variant="primary" isDisabled={isSubmitting} onClick={handleSubmit} />
      </div>
    </Card>
  );
}
