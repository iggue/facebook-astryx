// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Switch} from './components/ui/switch';
import {Label} from './components/ui/label';
import {Card, CardContent} from './components/ui/card';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <Card className="max-w-sm">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">
            {isDark ? 'Dark mode enabled' : 'Light mode enabled'}
          </Label>
          <Switch id="dark-mode" checked={isDark} onCheckedChange={setIsDark} />
        </div>
        <p className="text-sm text-muted-foreground">
          Your preference will be applied across the app.
        </p>
      </CardContent>
    </Card>
  );
}
