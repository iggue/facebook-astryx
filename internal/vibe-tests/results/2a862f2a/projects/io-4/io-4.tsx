// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (value: number) => {
    if (value >= 1 && value <= 99) {setQuantity(value);}
  };

  const btnStyle: React.CSSProperties = {
    width: 32, height: 32, border: '1px solid #d1d5db', borderRadius: 6, background: '#fff',
    cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
      <button style={btnStyle} onClick={() => handleChange(quantity - 1)} disabled={quantity <= 1} aria-label="Decrease quantity">
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleChange(Number(e.target.value))}
        min={1}
        max={99}
        aria-label="Quantity"
        style={{width: 48, textAlign: 'center', border: '1px solid #d1d5db', borderRadius: 6, padding: '4px 8px', fontSize: 14}}
      />
      <button style={btnStyle} onClick={() => handleChange(quantity + 1)} disabled={quantity >= 99} aria-label="Increase quantity">
        +
      </button>
      <span style={{fontSize: 13, color: '#6b7280', marginLeft: 8}}>
        {quantity} item{quantity !== 1 ? 's' : ''} in cart
      </span>
    </div>
  );
}
