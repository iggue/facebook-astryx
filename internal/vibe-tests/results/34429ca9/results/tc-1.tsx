// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Moon, Sun} from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <Card className="dark:bg-slate-900 dark:text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Theme Settings</CardTitle>
            <Button variant="outline" size="icon" onClick={() => setIsDark(!isDark)} aria-label={isDark ? 'Switch to light' : 'Switch to dark'}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Current mode: {isDark ? 'Dark' : 'Light'}</p>
          <p className="text-muted-foreground">Click the icon to toggle themes.</p>
          <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
