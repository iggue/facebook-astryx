// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {SideNav, SideNavItem, SideNavHeading} from '@astryxdesign/core/SideNav';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Text} from '@astryxdesign/core/Text';

export default function ResponsiveNav() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <AppShell
      topNav={
        <TopNav label="Main navigation">
          <TopNavHeading>Acme App</TopNavHeading>
          <TopNavItem value="home" isSelected={activeItem === 'home'} onPress={() => setActiveItem('home')}>
            Home
          </TopNavItem>
          <TopNavItem value="products" isSelected={activeItem === 'products'} onPress={() => setActiveItem('products')}>
            Products
          </TopNavItem>
          <TopNavItem value="about" isSelected={activeItem === 'about'} onPress={() => setActiveItem('about')}>
            About
          </TopNavItem>
          <TopNavItem value="contact" isSelected={activeItem === 'contact'} onPress={() => setActiveItem('contact')}>
            Contact
          </TopNavItem>
        </TopNav>
      }
      mobileNav={
        <MobileNav label="Mobile navigation">
          <SideNavItem label="Home" isSelected={activeItem === 'home'} onPress={() => setActiveItem('home')} />
          <SideNavItem label="Products" isSelected={activeItem === 'products'} onPress={() => setActiveItem('products')} />
          <SideNavItem label="About" isSelected={activeItem === 'about'} onPress={() => setActiveItem('about')} />
          <SideNavItem label="Contact" isSelected={activeItem === 'contact'} onPress={() => setActiveItem('contact')} />
        </MobileNav>
      }
    >
      <Text type="large" display="block">
        {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)} Page
      </Text>
      <Text>Navigation collapses to a hamburger menu on mobile viewports.</Text>
    </AppShell>
  );
}
