// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const ICONS = ['📄', '🎯', '🚀', '💡', '📝', '🎨', '🔬', '📊'];

export default function NotionPageHeader() {
  const [icon, setIcon] = useState('📄');
  const [title, setTitle] = useState('Untitled');
  const [hasCover, setHasCover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div style={{maxWidth: 700, margin: '0 auto'}}>
      {hasCover && (
        <div style={{height: 200, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 8, marginBottom: 16}} />
      )}
      <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, padding: '0 16px'}}>
        <div style={{position: 'relative'}}>
          <button onClick={() => setShowPicker(!showPicker)} style={{fontSize: 48, background: 'none', border: 'none', cursor: 'pointer', padding: 4, borderRadius: 8}}>
            {icon}
          </button>
          {showPicker && (
            <div style={{position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 8, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4, zIndex: 10}}>
              {ICONS.map(i => (
                <button key={i} onClick={() => { setIcon(i); setShowPicker(false); }} style={{fontSize: 24, background: 'none', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 4}}>
                  {i}
                </button>
              ))}
            </div>
          )}
        </div>
        <div style={{flex: 1}}>
          {isEditing ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
              style={{fontSize: 36, fontWeight: 700, border: 'none', outline: 'none', width: '100%', padding: 0}}
            />
          ) : (
            <h1 onClick={() => setIsEditing(true)} style={{fontSize: 36, fontWeight: 700, cursor: 'text', margin: 0}}>
              {title}
            </h1>
          )}
        </div>
      </div>
      {!hasCover && (
        <div style={{padding: '8px 16px'}}>
          <button onClick={() => setHasCover(true)} style={{background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: 13}}>
            + Add cover
          </button>
        </div>
      )}
    </div>
  );
}
