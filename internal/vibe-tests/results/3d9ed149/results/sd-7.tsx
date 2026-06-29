// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {FileInput} from '@astryxdesign/core/FileInput';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Card} from '@astryxdesign/core/Card';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleUpload = (files: File | File[] | null) => {
    const f = Array.isArray(files) ? files[0] : files;
    if (!f) {return;}
    setFile(f);
    setStatus('uploading');
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('success');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <Card padding={4}>
      <FileInput
        label="Upload file"
        value={file}
        onChange={handleUpload}
        mode="dropzone"
        accept="image/*,.pdf,.doc,.docx"
        status={status === 'error' ? {type: 'error', message: 'Upload failed'} : undefined}
      />

      {status === 'uploading' && (
        <ProgressBar
          label="Upload progress"
          value={progress}
          hasValueLabel
          variant="accent"
        />
      )}

      {status === 'success' && file && (
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <Badge variant="success">Uploaded</Badge>
          <Text type="body">{file.name}</Text>
          <Text type="supporting" color="secondary">
            {(file.size / 1024).toFixed(1)} KB
          </Text>
        </div>
      )}

      {status === 'error' && (
        <Text color="active">Upload failed. Please try again.</Text>
      )}
    </Card>
  );
}
