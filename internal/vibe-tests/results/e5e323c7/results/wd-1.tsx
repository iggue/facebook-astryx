// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from './components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from './components/ui/card';
import {Input} from './components/ui/input';
import {Label} from './components/ui/label';
import {RadioGroup, RadioGroupItem} from './components/ui/radio-group';
import {Progress} from './components/ui/progress';
import {Separator} from './components/ui/separator';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState('standard');
  const stepIndex = ['cart', 'shipping', 'payment', 'confirmation'].indexOf(step);
  const progress = ((stepIndex + 1) / 4) * 100;

  return (
    <div className="max-w-xl mx-auto space-y-6 p-6">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground text-center">Step {stepIndex + 1} of 4</p>

      {step === 'cart' && (
        <Card>
          <CardHeader><CardTitle>Cart Summary</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between"><span>Widget Pro x2</span><span>$49.98</span></div>
              <div className="flex justify-between"><span>Gadget Mini x1</span><span>$19.99</span></div>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold"><span>Total</span><span>$69.97</span></div>
            <Button className="w-full" onClick={() => setStep('shipping')}>Continue to Shipping</Button>
          </CardContent>
        </Card>
      )}

      {step === 'shipping' && (
        <Card>
          <CardHeader><CardTitle>Shipping</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" />
            </div>
            <RadioGroup value={shipping} onValueChange={setShipping}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="s1" />
                <Label htmlFor="s1">Standard (5-7 days)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="express" id="s2" />
                <Label htmlFor="s2">Express (2-3 days)</Label>
              </div>
            </RadioGroup>
            <Button className="w-full" onClick={() => setStep('payment')}>Continue to Payment</Button>
          </CardContent>
        </Card>
      )}

      {step === 'payment' && (
        <Card>
          <CardHeader><CardTitle>Payment</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card">Card number</Label>
              <Input id="card" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="exp">Expiry</Label>
                <Input id="exp" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <Button className="w-full" onClick={() => setStep('confirmation')}>Place Order</Button>
          </CardContent>
        </Card>
      )}

      {step === 'confirmation' && (
        <Card>
          <CardHeader><CardTitle>Order Confirmed!</CardTitle></CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Thank you for your purchase. Order #12345.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
