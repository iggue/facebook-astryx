// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const icons = ['📄', '🎯', '📋', '💡', '🔧', '📊', '🎨', '📝', '🚀', '⭐', '📌', '🔗'];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('📄');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [showIconPicker, setShowIconPicker] = useState(false);

  return (
    <div style={{border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden'}}>
      <div style={{position: 'relative'}}>
        {coverImage ? (
          <img src={coverImage} alt="Cover" style={{width: '100%', height: 200, objectFit: 'cover'}} />
        ) : (
          <div style={{width: '100%', height: 200, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={() => setCoverImage('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=200&fit=crop')} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer', background: '#fff'}}>Add cover</button>
          </div>
        )}
        <div style={{position: 'absolute', bottom: -30, left: 24}}>
          <span style={{fontSize: 48, cursor: 'pointer'}} onClick={() => setShowIconPicker(p => !p)}>{selectedIcon}</span>
          {showIconPicker && (
            <div style={{position: 'absolute', top: 56, left: 0, background: '#fff', border: '1px solid #e0e0e0', borderRadius: 8, padding: 8, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 4, zIndex: 10}}>
              {icons.map(icon => (
                <span key={icon} style={{fontSize: 24, cursor: 'pointer', textAlign: 'center', padding: 4, borderRadius: 4}} onClick={() => {setSelectedIcon(icon); setShowIconPicker(false);}}>{icon}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{marginTop: 40, padding: '0 24px 16px'}}>
        <h1 style={{margin: 0, fontSize: 32}}>Untitled</h1>
      </div>
    </div>
  );
}
