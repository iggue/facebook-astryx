// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    document.body.style.backgroundColor = isDark ? '#1f2937' : '#ffffff';
    document.body.style.color = isDark ? '#f9fafb' : '#111827';
  }, [isDark]);

  return (
    <div style={{maxWidth: 320, border: '1px solid', borderColor: isDark ? '#374151' : '#e5e7eb', borderRadius: 12, padding: 24}}>
      <label style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer'}}>
        <span style={{fontWeight: 500}}>
          {isDark ? 'Dark mode enabled' : 'Light mode enabled'}
        </span>
        <div
          onClick={() => setIsDark(!isDark)}
          style={{
            width: 44, height: 24, borderRadius: 12, padding: 2, cursor: 'pointer',
            backgroundColor: isDark ? '#2563eb' : '#d1d5db', transition: 'background-color 0.2s',
            display: 'flex', alignItems: 'center',
          }}
        >
          <div style={{
            width: 20, height: 20, borderRadius: '50%', backgroundColor: '#fff',
            transform: isDark ? 'translateX(20px)' : 'translateX(0)', transition: 'transform 0.2s',
          }} />
        </div>
      </label>
      <p style={{fontSize: 13, color: '#6b7280', marginTop: 8}}>
        Your preference will be applied across the app.
      </p>
    </div>
  );
}
