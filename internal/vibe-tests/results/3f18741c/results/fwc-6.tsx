// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {RadioList, RadioListItem} from '@astryxdesign/core/RadioList';
import {Text} from '@astryxdesign/core/Text';

export default function ShippingMethodSelector() {
  const [method, setMethod] = useState('standard');

  return (
    <div className="max-w-md mx-auto p-4">
      <RadioList
        label="Shipping method"
        value={method}
        onChange={setMethod}
      >
        <RadioListItem
          label="Standard"
          value="standard"
          description="5-7 business days"
          endContent={<Text type="label" color="secondary">Free</Text>}
        />
        <RadioListItem
          label="Express"
          value="express"
          description="2-3 business days"
          endContent={<Text type="label">$9.99</Text>}
        />
        <RadioListItem
          label="Overnight"
          value="overnight"
          description="Next business day"
          endContent={<Text type="label">$24.99</Text>}
        />
      </RadioList>
    </div>
  );
}
