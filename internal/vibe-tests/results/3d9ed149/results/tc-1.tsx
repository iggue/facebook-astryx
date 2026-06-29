// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Switch} from '@astryxdesign/core/Switch';
import {Theme} from '@astryxdesign/core/theme';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Theme colorScheme={isDark ? 'dark' : 'light'}>
      <Card padding={4}>
        <Switch
          label={isDark ? 'Dark mode enabled' : 'Light mode enabled'}
          value={isDark}
          onChange={setIsDark}
          description="Toggle between light and dark color schemes"
        />
        <Text type="supporting" color="secondary" display="block">
          Your preference will be applied across the app.
        </Text>
      </Card>
    </Theme>
  );
}
