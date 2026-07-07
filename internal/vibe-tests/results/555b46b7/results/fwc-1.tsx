// Copyright (c) Meta Platforms, Inc. and affiliates.

interface TrialBannerProps {
  daysRemaining: number;
  onUpgrade: () => void;
}

export default function TrialBanner({daysRemaining, onUpgrade}: TrialBannerProps) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: 8}}>
      <div>
        <strong style={{display: 'block', marginBottom: 4}}>Trial expiring soon</strong>
        <span style={{fontSize: 14, color: '#664d03'}}>Your trial expires in {daysRemaining} day{daysRemaining === 1 ? '' : 's'}. Upgrade to keep access.</span>
      </div>
      <button onClick={onUpgrade} style={{padding: '8px 16px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 500}}>
        Upgrade
      </button>
    </div>
  );
}
