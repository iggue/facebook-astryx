// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Banner} from '@astryxdesign/core/Banner';

interface UploadState {
  status: 'idle' | 'uploading' | 'success' | 'error';
  progress: number;
  fileName?: string;
  error?: string;
}

export default function FileUploadButton() {
  const [upload, setUpload] = useState<UploadState>({status: 'idle', progress: 0});
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {return;}

    setUpload({status: 'uploading', progress: 0, fileName: file.name});

    const interval = setInterval(() => {
      setUpload((prev) => {
        if (prev.progress >= 100) {
          clearInterval(interval);
          return {...prev, status: 'success', progress: 100};
        }
        return {...prev, progress: prev.progress + 10};
      });
    }, 200);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Card padding={5}>
      <VStack gap={4}>
        <input ref={inputRef} type="file" onChange={handleFileSelect} style={{display: 'none'}} aria-label="File input" />

        <Button
          label={upload.status === 'uploading' ? 'Uploading...' : 'Choose file'}
          variant="secondary"
          onClick={handleClick}
          isLoading={upload.status === 'uploading'}
          isDisabled={upload.status === 'uploading'}
        />

        {upload.fileName && <Text color="secondary">{upload.fileName}</Text>}

        {upload.status === 'uploading' && (
          <ProgressBar value={upload.progress} label={`Uploading ${upload.fileName}`} />
        )}

        {upload.status === 'success' && (
          <Banner status="success" title="Upload complete" description={`${upload.fileName} uploaded successfully.`} />
        )}

        {upload.status === 'error' && (
          <Banner status="error" title="Upload failed" description={upload.error || 'Something went wrong.'} endContent={<Button label="Retry" variant="secondary" onClick={handleClick} />} />
        )}
      </VStack>
    </Card>
  );
}
