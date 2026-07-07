// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {IconButton} from '@astryxdesign/core/IconButton';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Theme colorScheme={isDark ? 'dark' : 'light'}>
      <Card padding={6}>
        <VStack gap={4}>
          <HStack gap={3} justify="spaceBetween">
            <Heading level={2}>Theme Settings</Heading>
            <IconButton
              label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              icon={<span>{isDark ? '☀️' : '🌙'}</span>}
              onClick={() => setIsDark(!isDark)}
            />
          </HStack>
          <Text>Current mode: {isDark ? 'Dark' : 'Light'}</Text>
          <Text color="secondary">
            Click the icon to toggle between light and dark themes. The theme wraps
            all child components and updates their colors automatically.
          </Text>
          <HStack gap={2}>
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Ghost" variant="ghost" />
          </HStack>
        </VStack>
      </Card>
    </Theme>
  );
}
