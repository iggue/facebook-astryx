// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {NumberInput} from '@astryxdesign/core/NumberInput';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Text} from '@astryxdesign/core/Text';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (value: number) => {
    if (value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <IconButton
        label="Decrease quantity"
        icon="remove"
        variant="outlined"
        size="sm"
        onPress={() => handleChange(quantity - 1)}
        isDisabled={quantity <= 1}
      />
      <NumberInput
        label="Quantity"
        isLabelHidden
        value={quantity}
        onChange={handleChange}
        min={1}
        max={99}
        step={1}
      />
      <IconButton
        label="Increase quantity"
        icon="add"
        variant="outlined"
        size="sm"
        onPress={() => handleChange(quantity + 1)}
        isDisabled={quantity >= 99}
      />
      <Text type="supporting" color="secondary">
        {quantity} item{quantity !== 1 ? 's' : ''} in cart
      </Text>
    </div>
  );
}
