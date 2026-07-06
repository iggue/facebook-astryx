// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNavigation() {
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-lg font-bold">MyApp</span>
        <div className="hidden md:flex gap-2">
          {navLinks.map(link => <Button key={link} variant="ghost">{link}</Button>)}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon">&#9776;</Button></SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map(link => <Button key={link} variant="ghost" className="justify-start">{link}</Button>)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
