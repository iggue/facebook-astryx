// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

const navItems = ['Dashboard', 'Projects', 'Team', 'Settings', 'Help'];

export default function ResponsiveSidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const nav = (
    <div style={{padding: 16}}>
      <h3 style={{margin: '0 0 12px'}}>Navigation</h3>
      {navItems.map((item) => (
        <button key={item} onClick={() => setIsOpen(false)} style={{display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', background: 'none', cursor: 'pointer', borderRadius: 4}}>
          {item}
        </button>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <div style={{minHeight: '100vh'}}>
        <div style={{padding: 24}}>
          <h1>Content</h1>
          <p style={{color: '#666'}}>Resize to see the sidebar.</p>
        </div>
        {isOpen && (
          <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', borderTop: '1px solid #e0e0e0', borderTopLeftRadius: 16, borderTopRightRadius: 16, maxHeight: '60vh', overflowY: 'auto', boxShadow: '0 -4px 12px rgba(0,0,0,0.1)'}}>
            {nav}
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} style={{position: 'fixed', bottom: 16, right: 16, width: 48, height: 48, borderRadius: '50%', border: 'none', backgroundColor: '#0d6efd', color: 'white', fontSize: 20, cursor: 'pointer'}} aria-label="Toggle menu">
          ☰
        </button>
      </div>
    );
  }

  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <div style={{width: 260, borderRight: '1px solid #e0e0e0'}}>{nav}</div>
      <div style={{flex: 1, padding: 24}}>
        <h1>Content</h1>
        <p style={{color: '#666'}}>Resize to see the sidebar become a bottom sheet.</p>
      </div>
    </div>
  );
}
