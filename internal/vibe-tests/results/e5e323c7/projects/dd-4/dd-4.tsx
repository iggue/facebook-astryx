// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from './components/ui/tabs';
import {Avatar, AvatarFallback} from './components/ui/avatar';
import {Card, CardContent} from './components/ui/card';
import {Badge} from './components/ui/badge';
import {Switch} from './components/ui/switch';
import {Label} from './components/ui/label';
import {Separator} from './components/ui/separator';

export default function UserProfile() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16">
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">Alex Johnson</h2>
          <p className="text-sm text-muted-foreground">Senior Engineer</p>
          <Badge variant="default" className="mt-1">Active</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-medium mb-1">About</h3>
                <p className="text-sm text-muted-foreground">Full-stack engineer with 8 years of experience building design systems.</p>
              </div>
              <Separator />
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Location: San Francisco, CA</p>
                <p>Joined: March 2022</p>
                <p>Team: Design Systems</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <div className="space-y-3">
            {[
              {action: 'Merged PR #421 — Fix Dialog focus trap', time: '2 hours ago'},
              {action: 'Reviewed PR #418 — Add Carousel docs', time: '5 hours ago'},
              {action: 'Filed Issue #320 — TabList overflow', time: '1 day ago'},
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2">
                <span className="text-sm">{item.action}</span>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifs">Email notifications</Label>
                <Switch id="email-notifs" checked={emailNotifs} onCheckedChange={setEmailNotifs} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark mode</Label>
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
