// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {RadioList, RadioListItem} from '@astryxdesign/core/RadioList';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState('standard');

  const stepIndex = ['cart', 'shipping', 'payment', 'confirmation'].indexOf(step);
  const progress = ((stepIndex + 1) / 4) * 100;

  return (
    <div className="max-w-xl mx-auto space-y-6 p-6">
      <ProgressBar label="Checkout progress" value={progress} hasValueLabel />

      {step === 'cart' && (
        <Card padding={4}>
          <div className="space-y-4">
            <Text type="large">Cart Summary</Text>
            <div className="border-t pt-4 space-y-2">
              <Text display="block">Widget Pro x2 — $49.98</Text>
              <Text display="block">Gadget Mini x1 — $19.99</Text>
            </div>
            <div className="border-t pt-4">
              <Text type="label" weight="semibold">Total: $69.97</Text>
            </div>
            <Button variant="filled" onPress={() => setStep('shipping')}>
              Continue to Shipping
            </Button>
          </div>
        </Card>
      )}

      {step === 'shipping' && (
        <Card padding={4}>
          <div className="space-y-4">
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
          </div>
        </Card>
      )}

      {step === 'payment' && (
        <Card padding={4}>
          <div className="space-y-4">
            <Text type="large">Payment</Text>
            <TextInput label="Card number" value="" onChange={() => {}} />
            <div className="grid grid-cols-2 gap-4">
              <TextInput label="Expiry" value="" onChange={() => {}} />
              <TextInput label="CVC" value="" onChange={() => {}} />
            </div>
            <Button variant="filled" onPress={() => setStep('confirmation')}>
              Place Order
            </Button>
          </div>
        </Card>
      )}

      {step === 'confirmation' && (
        <Card padding={4}>
          <div className="text-center space-y-2">
            <Text type="large">Order Confirmed</Text>
            <Text display="block">Thank you for your purchase. Order #12345.</Text>
          </div>
        </Card>
      )}
    </div>
  );
}
