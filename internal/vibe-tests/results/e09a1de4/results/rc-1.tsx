// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', borderBottom: '1px solid #e0e0e0'}}>
        <span style={{fontSize: 18, fontWeight: 700}}>MyApp</span>
        <div className="desktop-nav" style={{display: 'flex', gap: 8}}>
          {navLinks.map(link => <a key={link} href="#" style={{padding: '8px 12px', textDecoration: 'none', color: '#333', borderRadius: 4}}>{link}</a>)}
        </div>
        <button className="hamburger" onClick={() => setIsOpen(true)} style={{display: 'none', background: 'none', border: 'none', fontSize: 24, cursor: 'pointer'}}>&#9776;</button>
      </nav>
      {isOpen && (
        <div style={{position: 'fixed', inset: 0, zIndex: 1000}}>
          <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)'}} onClick={() => setIsOpen(false)} />
          <div style={{position: 'absolute', top: 0, left: 0, width: 260, height: '100%', background: '#fff', padding: 24}}>
            <h3 style={{margin: '0 0 16px'}}>Menu</h3>
            {navLinks.map(link => <a key={link} href="#" style={{display: 'block', padding: '12px 0', textDecoration: 'none', color: '#333', borderBottom: '1px solid #eee'}} onClick={() => setIsOpen(false)}>{link}</a>)}
          </div>
        </div>
      )}
      <style>{`@media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger { display: block !important; } }`}</style>
    </>
  );
}
