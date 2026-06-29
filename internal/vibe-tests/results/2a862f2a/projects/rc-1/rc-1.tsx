// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const NAV_ITEMS = ['Home', 'Products', 'About', 'Contact'];

export default function ResponsiveNav() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav style={{borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: 1024, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56}}>
          <span style={{fontSize: 20, fontWeight: 700}}>Acme App</span>
          <div className="desktop-nav" style={{display: 'flex', gap: 24}}>
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => setActive(item)}
                style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: active === item ? 600 : 400, color: active === item ? '#2563eb' : '#6b7280'}}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: 24, display: 'none'}}
            className="hamburger"
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{position: 'fixed', top: 0, left: 0, width: 256, height: '100vh', background: '#fff', borderRight: '1px solid #e5e7eb', padding: 24, zIndex: 50}}>
          <button onClick={() => setMenuOpen(false)} style={{background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', marginBottom: 24}}>x</button>
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => { setActive(item); setMenuOpen(false); }}
              style={{display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', fontSize: 16, fontWeight: active === item ? 600 : 400, cursor: 'pointer'}}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <main style={{maxWidth: 1024, margin: '0 auto', padding: 24}}>
        <h1 style={{fontSize: 24, fontWeight: 700}}>{active}</h1>
        <p style={{color: '#6b7280'}}>Navigation collapses to hamburger on mobile.</p>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </div>
  );
}
