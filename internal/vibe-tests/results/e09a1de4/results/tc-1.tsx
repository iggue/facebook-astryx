// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#1a1a1a' : '#fff';
    document.body.style.color = isDark ? '#e0e0e0' : '#333';
    return () => { document.body.style.backgroundColor = ''; document.body.style.color = ''; };
  }, [isDark]);

  return (
    <div style={{maxWidth: 350, margin: '0 auto', padding: 24, border: `1px solid ${isDark ? '#444' : '#e0e0e0'}`, borderRadius: 8}}>
      <h2 style={{margin: '0 0 12px'}}>Theme Settings</h2>
      <p style={{marginBottom: 12, fontSize: 14}}>Current mode: {isDark ? 'dark' : 'light'}</p>
      <button onClick={() => setIsDark(d => !d)}
        style={{padding: '10px 20px', borderRadius: 4, border: `1px solid ${isDark ? '#666' : '#ccc'}`, background: isDark ? '#333' : '#fff', color: isDark ? '#e0e0e0' : '#333', cursor: 'pointer'}}>
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}
