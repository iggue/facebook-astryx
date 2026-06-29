// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav, TopNavHeading} from '@astryxdesign/core/TopNav';
import {SideNav, SideNavItem, SideNavSection, SideNavHeading} from '@astryxdesign/core/SideNav';
import {Text} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';

export default function AdminPanel() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <AppShell
      variant="elevated"
      topNav={
        <TopNav
          label="Admin navigation"
          heading={<TopNavHeading>Admin Panel</TopNavHeading>}
          endContent={<Avatar name="Admin User" size="sm" />}
        />
      }
      sideNav={
        <SideNav
          header={<SideNavHeading>Navigation</SideNavHeading>}
          collapsible={{hasButton: true, buttonLabel: 'Toggle sidebar'}}
        >
          <SideNavSection>
            <SideNavItem label="Dashboard" isSelected={activeItem === 'dashboard'} onPress={() => setActiveItem('dashboard')} />
            <SideNavItem label="Users" isSelected={activeItem === 'users'} onPress={() => setActiveItem('users')} />
            <SideNavItem label="Analytics" isSelected={activeItem === 'analytics'} onPress={() => setActiveItem('analytics')} />
          </SideNavSection>
          <SideNavSection>
            <SideNavItem label="Settings" isSelected={activeItem === 'settings'} onPress={() => setActiveItem('settings')} />
            <SideNavItem label="Logs" isSelected={activeItem === 'logs'} onPress={() => setActiveItem('logs')} />
          </SideNavSection>
        </SideNav>
      }
    >
      <Text type="large" display="block" weight="semibold">
        {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
      </Text>
      <Text type="body" color="secondary">
        Admin panel content area with fixed header and collapsible sidebar.
      </Text>
    </AppShell>
  );
}
