// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400,
  },
});

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
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      if (!response.ok) {throw new Error('Subscription failed');}
      setIsSuccess(true);
    } catch {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  if (isSuccess) {
    return (
      <Card padding={4}>
        <Text type="body">You have been subscribed successfully.</Text>
      </Card>
    );
  }

  return (
    <Card padding={4}>
      <div {...stylex.props(styles.form)}>
        <Heading level={3}>Subscribe to our newsletter</Heading>
        <TextInput
          type="email"
          label="Email address"
          value={email}
          onChange={(value) => {setEmail(value); setError(null);}}
          placeholder="you@example.com"
          status={error ? {type: 'error', message: error} : undefined}
        />
        <Button
          label={isSubmitting ? 'Subscribing...' : 'Subscribe'}
          variant="primary"
          isDisabled={isSubmitting}
          onClick={handleSubmit}
        />
      </div>
    </Card>
  );
}
