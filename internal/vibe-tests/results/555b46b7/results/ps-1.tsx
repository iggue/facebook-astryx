// Copyright (c) Meta Platforms, Inc. and affiliates.

const navItems = ['General', 'Profile', 'Notifications', 'Security', 'Billing'];

export default function SettingsDashboard() {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <div style={{width: 200, borderRight: '1px solid #e0e0e0', padding: 16}}>
        <h2 style={{fontSize: 16, margin: '0 0 12px'}}>Settings</h2>
        {navItems.map((item) => (
          <button key={item} style={{display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', background: 'none', cursor: 'pointer', borderRadius: 4, marginBottom: 2}}>
            {item}
          </button>
        ))}
      </div>
      <div style={{flex: 1, padding: 32}}>
        <h1 style={{margin: '0 0 24px'}}>Settings</h1>
        <section style={{marginBottom: 32}}>
          <h2 style={{fontSize: 18, margin: '0 0 16px'}}>General</h2>
          <label style={{display: 'block', marginBottom: 12}}>
            <span style={{display: 'block', marginBottom: 4, fontWeight: 500}}>App name</span>
            <input defaultValue="My Application" style={{width: '100%', maxWidth: 400, padding: 8, border: '1px solid #ccc', borderRadius: 4}} />
          </label>
          <label style={{display: 'block', marginBottom: 12}}>
            <span style={{display: 'block', marginBottom: 4, fontWeight: 500}}>Description</span>
            <input defaultValue="A productivity tool" style={{width: '100%', maxWidth: 400, padding: 8, border: '1px solid #ccc', borderRadius: 4}} />
          </label>
        </section>
        <section>
          <h2 style={{fontSize: 18, margin: '0 0 16px'}}>Preferences</h2>
          <label style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12}}>
            <input type="checkbox" defaultChecked /> Enable notifications
          </label>
          <label style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12}}>
            <input type="checkbox" defaultChecked /> Auto-save drafts
          </label>
        </section>
        <button style={{marginTop: 24, padding: '10px 20px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Save changes</button>
      </div>
    </div>
  );
}
