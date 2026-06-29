// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from './components/ui/button';
import {Avatar, AvatarFallback} from './components/ui/avatar';

const NAV_ITEMS = [
  {label: 'Dashboard', id: 'dashboard'},
  {label: 'Users', id: 'users'},
  {label: 'Analytics', id: 'analytics'},
  {label: 'Settings', id: 'settings'},
  {label: 'Logs', id: 'logs'},
];

export default function AdminPanel() {
  const [active, setActive] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="h-14 border-b flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </Button>
          <span className="font-semibold">Admin Panel</span>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-56 border-r p-4 space-y-1 shrink-0">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                  active === item.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold capitalize">{active}</h1>
          <p className="text-muted-foreground mt-2">Admin panel content area.</p>
        </main>
      </div>
    </div>
  );
}
