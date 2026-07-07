// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

type State = 'loading' | 'error' | 'data';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');
  const [data, setData] = useState<{revenue: number; users: number; growth: number} | null>(null);

  const fetchData = () => {
    setState('loading');
    setTimeout(() => {
      if (Math.random() < 0.3) {setState('error');}
      else { setData({revenue: 48200, users: 1247, growth: 12.5}); setState('data'); }
    }, 1500);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: 24, minHeight: 200}}>
      <h3 style={{margin: '0 0 16px'}}>Dashboard</h3>
      {state === 'loading' && (
        <div style={{textAlign: 'center', padding: 32}}>
          <div style={{width: 24, height: 24, border: '3px solid #e0e0e0', borderTopColor: '#0d6efd', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 8px'}} />
          <p style={{color: '#666', fontSize: 14}}>Loading...</p>
        </div>
      )}
      {state === 'error' && (
        <div style={{backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: 6, padding: 16}}>
          <strong>Failed to load data</strong>
          <p style={{margin: '4px 0 12px', fontSize: 14}}>Could not reach the analytics service.</p>
          <button onClick={fetchData} style={{padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Retry</button>
        </div>
      )}
      {state === 'data' && data && (
        <div>
          <p>Revenue: ${data.revenue.toLocaleString()}</p>
          <p>Active users: {data.users.toLocaleString()}</p>
          <p>Growth: +{data.growth}%</p>
        </div>
      )}
    </div>
  );
}
