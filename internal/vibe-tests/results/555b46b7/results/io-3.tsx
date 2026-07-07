// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';

export default function FileUploadButton() {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {return;}
    setFileName(file.name);
    setStatus('uploading');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); setStatus('success'); return 100; }
        return p + 10;
      });
    }, 200);
  };

  return (
    <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: 24}}>
      <input ref={inputRef} type="file" style={{display: 'none'}} onChange={handleFile} aria-label="File input" />
      <button onClick={() => inputRef.current?.click()} disabled={status === 'uploading'} style={{padding: '10px 20px', backgroundColor: '#f8f9fa', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer'}}>
        {status === 'uploading' ? 'Uploading...' : 'Choose file'}
      </button>
      {fileName && <p style={{margin: '8px 0', fontSize: 14, color: '#666'}}>{fileName}</p>}
      {status === 'uploading' && (
        <div style={{height: 8, backgroundColor: '#e0e0e0', borderRadius: 4, marginTop: 12}}>
          <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#0d6efd', borderRadius: 4, transition: 'width 0.2s'}} />
        </div>
      )}
      {status === 'success' && <p style={{color: '#198754', marginTop: 12}}>Upload complete: {fileName}</p>}
      {status === 'error' && <p style={{color: '#dc3545', marginTop: 12}}>Upload failed.</p>}
    </div>
  );
}
