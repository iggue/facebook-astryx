// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';

const navItems = ['Dashboard', 'Projects', 'Team', 'Settings', 'Help'];

export default function ResponsiveSidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const nav = (
    <div className="flex flex-col gap-1 p-4">
      <h3 className="font-semibold mb-2">Navigation</h3>
      {navItems.map((item) => (
        <Button key={item} variant="ghost" className="justify-start">{item}</Button>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Content</h1>
          <p className="text-muted-foreground">Resize to see the sidebar.</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed bottom-4 right-4">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">{nav}</SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <div className="w-64 border-r">{nav}</div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Content</h1>
        <p className="text-muted-foreground">Resize to see the sidebar become a bottom sheet.</p>
      </div>
    </div>
  );
}
