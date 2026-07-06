// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {TopNav} from '@astryxdesign/core/TopNav';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {SideNav} from '@astryxdesign/core/SideNav';
import {Heading} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  navItems: {
    display: 'flex',
    gap: 4,
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 280,
    height: '100vh',
    zIndex: 1000,
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
  },
  desktopNav: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  hamburger: {
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
});

const navLinks = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div {...stylex.props(styles.layout)}>
      <TopNav
        heading={<Heading level={4}>MyApp</Heading>}
        startContent={
          <div {...stylex.props(styles.desktopNav)}>
            <div {...stylex.props(styles.navItems)}>
              {navLinks.map(link => (
                <Button key={link} label={link} variant="ghost" />
              ))}
            </div>
          </div>
        }
        endContent={
          <div {...stylex.props(styles.hamburger)}>
            <IconButton
              label="Open menu"
              icon={<span>&#9776;</span>}
              onClick={() => setIsMobileOpen(true)}
            />
          </div>
        }
      />
      {isMobileOpen && (
        <>
          <div {...stylex.props(styles.overlay)} onClick={() => setIsMobileOpen(false)} />
          <div {...stylex.props(styles.mobileMenu)}>
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
