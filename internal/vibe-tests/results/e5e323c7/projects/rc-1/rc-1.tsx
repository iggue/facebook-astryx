// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from './components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from './components/ui/sheet';

const NAV_ITEMS = ['Home', 'Products', 'About', 'Contact'];

export default function ResponsiveNav() {
  const [active, setActive] = useState('Home');

  return (
    <div>
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <span className="text-xl font-bold">Acme App</span>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-sm font-medium transition-colors ${
                  active === item ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_ITEMS.map(item => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`text-left text-lg ${
                      active === item ? 'font-semibold' : 'text-muted-foreground'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold">{active}</h1>
        <p className="text-muted-foreground mt-2">Navigation collapses to hamburger on mobile.</p>
      </main>
    </div>
  );
}
