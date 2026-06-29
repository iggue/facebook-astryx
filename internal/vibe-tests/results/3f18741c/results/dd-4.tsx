// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';
import {List, ListItem} from '@astryxdesign/core/List';
import {Switch} from '@astryxdesign/core/Switch';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
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

      <div className="mt-4">
        {activeTab === 'overview' && (
          <Card padding={4}>
            <div className="space-y-4">
              <div>
                <Text type="label" weight="semibold" display="block">About</Text>
                <Text display="block">Full-stack engineer with 8 years of experience building design systems.</Text>
              </div>
              <div className="border-t pt-4 space-y-1">
                <Text type="supporting" display="block">Location: San Francisco, CA</Text>
                <Text type="supporting" display="block">Joined: March 2022</Text>
                <Text type="supporting" display="block">Team: Design Systems</Text>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'activity' && (
          <List>
            <ListItem label="Merged PR #421 — Fix Dialog focus trap" description="2 hours ago" />
            <ListItem label="Reviewed PR #418 — Add Carousel docs" description="5 hours ago" />
            <ListItem label="Filed Issue #320 — TabList overflow" description="1 day ago" />
          </List>
        )}

        {activeTab === 'settings' && (
          <Card padding={4}>
            <div className="space-y-4">
              <Switch label="Email notifications" value={emailNotifs} onChange={setEmailNotifs} />
              <Switch label="Dark mode" value={darkMode} onChange={setDarkMode} />
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
