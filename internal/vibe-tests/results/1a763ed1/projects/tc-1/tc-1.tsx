// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Theme} from '@astryxdesign/core';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';

export default function DarkModeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <Theme mode={mode}>
      <div className="max-w-sm mx-auto p-6">
        <Card padding={4}>
          <div className="flex flex-col gap-4">
            <Heading level={2}>Theme Settings</Heading>
            <Text type="body">Current mode: {mode}</Text>
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
