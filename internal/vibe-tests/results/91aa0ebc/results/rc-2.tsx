// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: 280,
    borderRight: '1px solid var(--color-border)',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  sidebarHidden: {
    display: 'none',
  },
  bottomSheet: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: '1px solid var(--color-border)',
    padding: 16,
    backgroundColor: 'var(--color-background)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '60vh',
    overflowY: 'auto',
  },
  main: {
    flex: 1,
    padding: 24,
  },
  mobileToggle: {
    position: 'fixed',
    bottom: 16,
    right: 16,
  },
});

const navItems = ['Dashboard', 'Projects', 'Team', 'Settings', 'Help'];

export default function ResponsiveSidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const navContent = (
    <VStack gap={2}>
      <Heading level={3}>Navigation</Heading>
      {navItems.map((item) => (
        <Button key={item} label={item} variant="ghost" onClick={() => setIsOpen(false)} />
      ))}
    </VStack>
  );

  if (isMobile) {
    return (
      <div>
        <div {...stylex.props(styles.main)}>
          <Heading level={1}>Content</Heading>
          <Text>Resize to see the sidebar become a bottom sheet on mobile.</Text>
        </div>
        {isOpen && <div {...stylex.props(styles.bottomSheet)}>{navContent}</div>}
        <div {...stylex.props(styles.mobileToggle)}>
          <IconButton label="Toggle menu" icon={<span>☰</span>} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    );
  }

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.sidebar)}>{navContent}</div>
      <div {...stylex.props(styles.main)}>
        <Heading level={1}>Content</Heading>
        <Text>Resize to see the sidebar become a bottom sheet on mobile.</Text>
      </div>
    </div>
  );
}
