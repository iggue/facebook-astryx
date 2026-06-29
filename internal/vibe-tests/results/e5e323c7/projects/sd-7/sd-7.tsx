// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent} from './components/ui/card';
import {Progress} from './components/ui/progress';
import {Badge} from './components/ui/badge';
import {Input} from './components/ui/input';
import {Label} from './components/ui/label';

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
    <Card className="max-w-md">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="file-upload">Upload file</Label>
          <Input
            id="file-upload"
            type="file"
            onChange={handleChange}
            accept="image/*,.pdf,.doc,.docx"
          />
        </div>

        {status === 'uploading' && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">{progress}% uploaded</p>
          </div>
        )}

        {status === 'success' && file && (
          <div className="flex items-center gap-2">
            <Badge variant="default">Uploaded</Badge>
            <span className="text-sm">{file.name}</span>
            <span className="text-xs text-muted-foreground">
              {(file.size / 1024).toFixed(1)} KB
            </span>
          </div>
        )}

        {status === 'error' && (
          <p className="text-sm text-destructive">Upload failed. Please try again.</p>
        )}
      </CardContent>
    </Card>
  );
}
