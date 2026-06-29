// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from './components/ui/button';
import {Input} from './components/ui/input';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (value: number) => {
    if (value >= 1 && value <= 99) {setQuantity(value);}
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleChange(quantity - 1)}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        -
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={(e) => handleChange(Number(e.target.value))}
        min={1}
        max={99}
        className="w-16 text-center"
        aria-label="Quantity"
      />
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleChange(quantity + 1)}
        disabled={quantity >= 99}
        aria-label="Increase quantity"
      >
        +
      </Button>
      <span className="text-sm text-muted-foreground">
        {quantity} item{quantity !== 1 ? 's' : ''} in cart
      </span>
    </div>
  );
}
