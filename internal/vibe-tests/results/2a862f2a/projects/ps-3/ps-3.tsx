// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const NAV_ITEMS = ['Dashboard', 'Users', 'Analytics', 'Settings', 'Logs'];

export default function AdminPanel() {
  const [active, setActive] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      {/* Header */}
      <header style={{height: 56, borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: 20}} aria-label="Toggle sidebar">
            &#9776;
          </button>
          <span style={{fontWeight: 600}}>Admin Panel</span>
        </div>
        <div style={{width: 32, height: 32, borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600}}>
          AU
        </div>
      </header>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
        {/* Sidebar */}
        {sidebarOpen && (
          <aside style={{width: 200, borderRight: '1px solid #e5e7eb', padding: 16, flexShrink: 0}}>
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => setActive(item)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px',
                  borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 14, marginBottom: 4,
                  backgroundColor: active === item ? '#2563eb' : 'transparent',
                  color: active === item ? '#fff' : '#374151',
                }}
              >
                {item}
              </button>
            ))}
          </aside>
        )}

        {/* Main */}
        <main style={{flex: 1, padding: 24, overflow: 'auto'}}>
          <h1 style={{fontSize: 24, fontWeight: 700}}>{active}</h1>
          <p style={{color: '#6b7280', marginTop: 8}}>Admin panel content area.</p>
        </main>
      </div>
    </div>
  );
}
