// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const tabStyle = (tab: string): React.CSSProperties => ({
    padding: '8px 16px', border: 'none', background: 'none', cursor: 'pointer',
    borderBottom: activeTab === tab ? '2px solid #2563eb' : '2px solid transparent',
    fontWeight: activeTab === tab ? 600 : 400, color: activeTab === tab ? '#2563eb' : '#6b7280',
  });

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
        <div style={{width: 64, height: 64, borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 600}}>
          AJ
        </div>
        <div>
          <h2 style={{margin: 0, fontSize: 20}}>Alex Johnson</h2>
          <p style={{margin: '4px 0', color: '#6b7280', fontSize: 14}}>Senior Engineer</p>
          <span style={{background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: 12, fontSize: 12}}>Active</span>
        </div>
      </div>

      <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: 16}}>
        <button style={tabStyle('overview')} onClick={() => setActiveTab('overview')}>Overview</button>
        <button style={tabStyle('activity')} onClick={() => setActiveTab('activity')}>Activity</button>
        <button style={tabStyle('settings')} onClick={() => setActiveTab('settings')}>Settings</button>
      </div>

      {activeTab === 'overview' && (
        <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 20}}>
          <h3 style={{margin: '0 0 8px'}}>About</h3>
          <p style={{color: '#6b7280', fontSize: 14}}>Full-stack engineer with 8 years of experience building design systems.</p>
          <hr style={{border: 'none', borderTop: '1px solid #e5e7eb', margin: '16px 0'}} />
          <div style={{fontSize: 14, color: '#6b7280'}}>
            <p>Location: San Francisco, CA</p>
            <p>Joined: March 2022</p>
            <p>Team: Design Systems</p>
          </div>
        </div>
      )}

      {activeTab === 'activity' && (
        <div>
          {['Merged PR #421', 'Reviewed PR #418', 'Filed Issue #320'].map((item, i) => (
            <div key={i} style={{padding: '12px 0', borderBottom: '1px solid #f3f4f6'}}>
              <span style={{fontSize: 14}}>{item}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 20, display: 'flex', flexDirection: 'column', gap: 16}}>
          <label style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            Email notifications
            <input type="checkbox" checked={emailNotifs} onChange={() => setEmailNotifs(!emailNotifs)} />
          </label>
          <label style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            Dark mode
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </label>
        </div>
      )}
    </div>
  );
}
