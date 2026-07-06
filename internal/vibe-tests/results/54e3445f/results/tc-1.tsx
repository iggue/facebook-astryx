// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(d => !d);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <Card>
        <CardHeader><CardTitle>Theme Settings</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Current mode: {isDark ? 'dark' : 'light'}</p>
          <Button variant="outline" onClick={toggle}>
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
