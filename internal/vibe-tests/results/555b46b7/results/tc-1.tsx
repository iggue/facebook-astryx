// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const bg = isDark ? '#1a1a2e' : '#ffffff';
  const text = isDark ? '#e0e0e0' : '#333333';
  const cardBg = isDark ? '#16213e' : '#f8f9fa';

  return (
    <div style={{backgroundColor: bg, color: text, padding: 32, borderRadius: 12, border: `1px solid ${isDark ? '#333' : '#e0e0e0'}`, transition: 'all 0.3s'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
        <h2 style={{margin: 0}}>Theme Settings</h2>
        <button onClick={() => setIsDark(!isDark)} style={{width: 40, height: 40, borderRadius: '50%', border: `1px solid ${isDark ? '#555' : '#ccc'}`, backgroundColor: cardBg, cursor: 'pointer', fontSize: 18}} aria-label={isDark ? 'Switch to light' : 'Switch to dark'}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
      <p>Current mode: {isDark ? 'Dark' : 'Light'}</p>
      <p style={{color: isDark ? '#999' : '#666', marginBottom: 16}}>Click the icon to toggle themes.</p>
      <div style={{display: 'flex', gap: 8}}>
        <button style={{padding: '8px 16px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Primary</button>
        <button style={{padding: '8px 16px', backgroundColor: cardBg, border: `1px solid ${isDark ? '#555' : '#ccc'}`, borderRadius: 6, cursor: 'pointer', color: text}}>Secondary</button>
        <button style={{padding: '8px 16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: text}}>Ghost</button>
      </div>
    </div>
  );
}
