// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function ProfileCard() {
  return (
    <div style={{maxWidth: 320, border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, textAlign: 'center'}}>
      <div style={{width: 80, height: 80, borderRadius: '50%', backgroundColor: '#e5e7eb', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 600}}>
        SC
      </div>
      <h2 style={{margin: '0 0 4px', fontSize: 20, fontWeight: 600}}>Sarah Chen</h2>
      <p style={{margin: '0 0 8px', fontSize: 14, color: '#6b7280'}}>Staff Design Engineer</p>
      <p style={{margin: '0 0 12px', fontSize: 13, color: '#6b7280', lineHeight: 1.5}}>
        Passionate about building accessible, performant design systems that scale across products and platforms.
      </p>
      <div style={{display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap'}}>
        {['Design Systems', 'Accessibility', 'React'].map(tag => (
          <span key={tag} style={{background: '#f3f4f6', padding: '2px 10px', borderRadius: 12, fontSize: 12, color: '#374151'}}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
