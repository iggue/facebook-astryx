// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stepIndex = ['welcome', 'profile', 'preferences', 'done'].indexOf(step);
  const progress = (stepIndex / 3) * 100;

  const cardStyle: React.CSSProperties = {padding: 24, border: '1px solid #e0e0e0', borderRadius: 8, maxWidth: 500, margin: '0 auto'};
  const btnPrimary: React.CSSProperties = {padding: '10px 20px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'};
  const btnGhost: React.CSSProperties = {padding: '10px 20px', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer'};

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 32}}>
      <div style={{height: 8, backgroundColor: '#e0e0e0', borderRadius: 4, marginBottom: 24}}>
        <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#0d6efd', borderRadius: 4, transition: 'width 0.3s'}} />
      </div>

      {step === 'welcome' && (
        <div style={cardStyle}>
          <h1 style={{margin: '0 0 8px'}}>Welcome</h1>
          <p style={{color: '#666', marginBottom: 16}}>This takes about 2 minutes.</p>
          <button style={btnPrimary} onClick={() => setStep('profile')}>Get started</button>
        </div>
      )}

      {step === 'profile' && (
        <div style={cardStyle}>
          <h2 style={{margin: '0 0 16px'}}>Profile setup</h2>
          <label style={{display: 'block', marginBottom: 12}}>
            <span style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} style={{width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4}} />
          </label>
          <label style={{display: 'block', marginBottom: 16}}>
            <span style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} style={{width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4}} />
          </label>
          <div style={{display: 'flex', gap: 8}}>
            <button style={btnGhost} onClick={() => setStep('welcome')}>Back</button>
            <button style={btnPrimary} onClick={() => setStep('preferences')}>Next</button>
          </div>
        </div>
      )}

      {step === 'preferences' && (
        <div style={cardStyle}>
          <h2 style={{margin: '0 0 8px'}}>Preferences</h2>
          <p style={{color: '#666', marginBottom: 16}}>Choose your settings.</p>
          <div style={{display: 'flex', gap: 8}}>
            <button style={btnGhost} onClick={() => setStep('profile')}>Back</button>
            <button style={btnPrimary} onClick={() => setStep('done')}>Finish</button>
          </div>
        </div>
      )}

      {step === 'done' && (
        <div style={cardStyle}>
          <h2 style={{margin: '0 0 8px'}}>All done!</h2>
          <p style={{color: '#666', marginBottom: 16}}>Your account is ready.</p>
          <button style={btnPrimary} onClick={() => {}}>Go to dashboard</button>
        </div>
      )}
    </div>
  );
}
