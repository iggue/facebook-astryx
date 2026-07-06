// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Theme} from '@astryxdesign/core';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 24,
    maxWidth: 400,
    margin: '0 auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
});

export default function DarkModeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <Theme mode={mode}>
      <div {...stylex.props(styles.container)}>
        <Card padding={4}>
          <div {...stylex.props(styles.content)}>
            <Heading level={2}>Theme Settings</Heading>
            <Text type="body">
              Current mode: {mode}
            </Text>
            <Button
              label={mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              variant="secondary"
              onClick={() => setMode(m => m === 'light' ? 'dark' : 'light')}
            />
          </div>
        </Card>
      </div>
    </Theme>
  );
}
