// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Layout, LayoutHeader, LayoutContent, LayoutPanel} from '@astryxdesign/core/Layout';
import {Section} from '@astryxdesign/core/Section';
import {Switch} from '@astryxdesign/core/Switch';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Theme} from '@astryxdesign/core/theme';

const navItems = ['General', 'Profile', 'Notifications', 'Security', 'Billing'];

export default function SettingsDashboard() {
  return (
    <Layout>
      <LayoutHeader>
        <Heading level={1}>Settings</Heading>
      </LayoutHeader>
      <LayoutPanel position="start" width={220}>
        <VStack gap={1}>
          {navItems.map((item) => (
            <Button key={item} label={item} variant="ghost" />
          ))}
        </VStack>
      </LayoutPanel>
      <LayoutContent>
        <VStack gap={6}>
          <Section title="General">
            <VStack gap={4}>
              <TextInput label="App name" value="My Application" onChange={() => {}} />
              <TextInput label="Description" value="A productivity tool" onChange={() => {}} />
            </VStack>
          </Section>
          <Section title="Preferences">
            <VStack gap={3}>
              <Switch label="Enable notifications" defaultIsChecked />
              <Switch label="Auto-save drafts" defaultIsChecked />
              <Switch label="Show tooltips" />
            </VStack>
          </Section>
          <Button label="Save changes" variant="primary" />
        </VStack>
      </LayoutContent>
    </Layout>
  );
}
