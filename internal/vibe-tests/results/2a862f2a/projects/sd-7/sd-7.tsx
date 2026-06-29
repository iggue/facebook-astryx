// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) {return;}
    setFile(f);
    setStatus('uploading');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setStatus('success'); return 100; }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div style={{maxWidth: 400, border: '1px solid #e5e7eb', borderRadius: 12, padding: 24}}>
      <label style={{display: 'block', marginBottom: 8, fontWeight: 500}}>Upload file</label>
      <input type="file" onChange={handleChange} accept="image/*,.pdf,.doc,.docx" style={{marginBottom: 16}} />

      {status === 'uploading' && (
        <div style={{marginTop: 12}}>
          <div style={{height: 8, backgroundColor: '#e5e7eb', borderRadius: 4}}>
            <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#2563eb', borderRadius: 4, transition: 'width 0.2s'}} />
          </div>
          <p style={{fontSize: 13, color: '#6b7280', marginTop: 4}}>{progress}% uploaded</p>
        </div>
      )}

      {status === 'success' && file && (
        <div style={{marginTop: 12, display: 'flex', alignItems: 'center', gap: 8}}>
          <span style={{background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: 12, fontSize: 12, fontWeight: 500}}>Uploaded</span>
          <span style={{fontSize: 14}}>{file.name}</span>
          <span style={{fontSize: 12, color: '#6b7280'}}>{(file.size / 1024).toFixed(1)} KB</span>
        </div>
      )}

      {status === 'error' && (
        <p style={{color: '#dc2626', fontSize: 14, marginTop: 12}}>Upload failed. Please try again.</p>
      )}
    </div>
  );
}
