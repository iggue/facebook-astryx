// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {RadioGroup, RadioGroupItem} from './components/ui/radio-group';
import {Label} from './components/ui/label';

export default function ShippingMethodSelector() {
  const [method, setMethod] = useState('standard');

  return (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Shipping Method</h3>
      <RadioGroup value={method} onValueChange={setMethod} className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="standard" id="standard" />
            <div>
              <Label htmlFor="standard" className="font-medium">Standard</Label>
              <p className="text-sm text-muted-foreground">5-7 business days</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">Free</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="express" id="express" />
            <div>
              <Label htmlFor="express" className="font-medium">Express</Label>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
          </div>
          <span className="font-medium">$9.99</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="overnight" id="overnight" />
            <div>
              <Label htmlFor="overnight" className="font-medium">Overnight</Label>
              <p className="text-sm text-muted-foreground">Next business day</p>
            </div>
          </div>
          <span className="font-medium">$24.99</span>
        </div>
      </RadioGroup>
    </div>
  );
}
