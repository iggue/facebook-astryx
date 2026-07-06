// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {TopNav} from '@astryxdesign/core/TopNav';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {SideNav} from '@astryxdesign/core/SideNav';
import {Heading} from '@astryxdesign/core/Text';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav
        heading={<Heading level={4}>MyApp</Heading>}
        startContent={
          <div className="hidden md:flex gap-1">
            {navLinks.map(link => (
              <Button key={link} label={link} variant="ghost" />
            ))}
          </div>
        }
        endContent={
          <div className="md:hidden">
            <IconButton label="Open menu" icon={<span>&#9776;</span>} onClick={() => setIsMobileOpen(true)} />
          </div>
        }
      />
      {isMobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileOpen(false)} />
          <div className="fixed top-0 left-0 w-72 h-full bg-white z-50">
            <SideNav header={<Heading level={4}>Menu</Heading>}>
              {navLinks.map(link => (
                <Button key={link} label={link} variant="ghost" onClick={() => setIsMobileOpen(false)} />
              ))}
            </SideNav>
          </div>
        </>
      )}
    </div>
  );
}
