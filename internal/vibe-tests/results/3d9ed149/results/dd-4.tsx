// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {TabList} from '@astryxdesign/core/TabList';
import {Tab} from '@astryxdesign/core/TabList';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';
import {List, ListItem} from '@astryxdesign/core/List';
import {Switch} from '@astryxdesign/core/Switch';
import {Divider} from '@astryxdesign/core/Divider';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{maxWidth: 700, margin: '0 auto'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
        <Avatar name="Alex Johnson" size="xl" />
        <div>
          <Text type="large" weight="semibold" display="block">Alex Johnson</Text>
          <Text type="supporting" color="secondary" display="block">Senior Engineer</Text>
          <Badge variant="success">Active</Badge>
        </div>
      </div>

      <TabList value={activeTab} onChange={setActiveTab} hasDivider>
        <Tab value="overview">Overview</Tab>
        <Tab value="activity">Activity</Tab>
        <Tab value="settings">Settings</Tab>
      </TabList>

      <div style={{marginTop: 16}}>
        {activeTab === 'overview' && (
          <Card padding={4}>
            <Text type="label" weight="semibold" display="block">About</Text>
            <Text display="block">Full-stack engineer with 8 years of experience building design systems and developer tools.</Text>
            <Divider />
            <Text type="label" weight="semibold" display="block">Details</Text>
            <Text type="supporting" display="block">Location: San Francisco, CA</Text>
            <Text type="supporting" display="block">Joined: March 2022</Text>
            <Text type="supporting" display="block">Team: Design Systems</Text>
          </Card>
        )}

        {activeTab === 'activity' && (
          <List>
            <ListItem label="Merged PR #421 — Fix Dialog focus trap" description="2 hours ago" />
            <ListItem label="Reviewed PR #418 — Add Carousel docs" description="5 hours ago" />
            <ListItem label="Filed Issue #320 — TabList overflow" description="1 day ago" />
            <ListItem label="Merged PR #415 — NumberInput step" description="2 days ago" />
          </List>
        )}

        {activeTab === 'settings' && (
          <Card padding={4}>
            <Switch label="Email notifications" value={emailNotifs} onChange={setEmailNotifs} />
            <Switch label="Dark mode" value={darkMode} onChange={setDarkMode} />
          </Card>
        )}
      </div>
    </div>
  );
}
