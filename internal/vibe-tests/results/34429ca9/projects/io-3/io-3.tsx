// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import {Card, CardContent} from '@/components/ui/card';
import {Alert, AlertTitle, AlertDescription} from '@/components/ui/alert';
import {Upload} from 'lucide-react';

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
    <Card>
      <CardContent className="p-6 space-y-4">
        <input ref={inputRef} type="file" className="hidden" onChange={handleFile} aria-label="File input" />
        <Button onClick={() => inputRef.current?.click()} disabled={status === 'uploading'}>
          <Upload className="mr-2 h-4 w-4" />
          {status === 'uploading' ? 'Uploading...' : 'Choose file'}
        </Button>
        {fileName && <p className="text-sm text-muted-foreground">{fileName}</p>}
        {status === 'uploading' && <Progress value={progress} />}
        {status === 'success' && <Alert><AlertTitle>Upload complete</AlertTitle><AlertDescription>{fileName} uploaded.</AlertDescription></Alert>}
        {status === 'error' && <Alert variant="destructive"><AlertTitle>Upload failed</AlertTitle></Alert>}
      </CardContent>
    </Card>
  );
}
