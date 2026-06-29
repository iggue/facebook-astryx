// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {RadioList, RadioListItem} from '@astryxdesign/core/RadioList';
import {Divider} from '@astryxdesign/core/Divider';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState('standard');

  const stepIndex = ['cart', 'shipping', 'payment', 'confirmation'].indexOf(step);
  const progress = ((stepIndex + 1) / 4) * 100;

  return (
    <div style={{maxWidth: 600, margin: '0 auto'}}>
      <ProgressBar label="Checkout progress" value={progress} hasValueLabel />

      {step === 'cart' && (
        <Card padding={4}>
          <Text type="large">Cart Summary</Text>
          <Divider />
          <Text>Widget Pro x2 — $49.98</Text>
          <Text>Gadget Mini x1 — $19.99</Text>
          <Divider />
          <Text type="label" weight="semibold">Total: $69.97</Text>
          <Button variant="filled" onPress={() => setStep('shipping')}>
            Continue to Shipping
          </Button>
        </Card>
      )}

      {step === 'shipping' && (
        <Card padding={4}>
          <Text type="large">Shipping</Text>
          <TextInput label="Full name" value="" onChange={() => {}} />
          <TextInput label="Address" value="" onChange={() => {}} />
          <RadioList label="Shipping method" value={shipping} onChange={setShipping}>
            <RadioListItem label="Standard (5-7 days)" value="standard" />
            <RadioListItem label="Express (2-3 days)" value="express" />
          </RadioList>
          <Button variant="filled" onPress={() => setStep('payment')}>
            Continue to Payment
          </Button>
        </Card>
      )}

      {step === 'payment' && (
        <Card padding={4}>
          <Text type="large">Payment</Text>
          <TextInput label="Card number" value="" onChange={() => {}} />
          <TextInput label="Expiry" value="" onChange={() => {}} />
          <TextInput label="CVC" value="" onChange={() => {}} />
          <Button variant="filled" onPress={() => setStep('confirmation')}>
            Place Order
          </Button>
        </Card>
      )}

      {step === 'confirmation' && (
        <Card padding={4}>
          <Text type="large">Order Confirmed</Text>
          <Text>Thank you for your purchase. Your order number is #12345.</Text>
        </Card>
      )}
    </div>
  );
}
