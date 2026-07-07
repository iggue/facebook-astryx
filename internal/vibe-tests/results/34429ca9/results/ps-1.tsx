// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import {Separator} from '@/components/ui/separator';

const navItems = ['General', 'Profile', 'Notifications', 'Security', 'Billing'];

export default function SettingsDashboard() {
  return (
    <div className="flex h-screen">
      <div className="w-56 border-r p-4 flex flex-col gap-1">
        <h2 className="font-semibold mb-2">Settings</h2>
        {navItems.map((item) => (
          <Button key={item} variant="ghost" className="justify-start">{item}</Button>
        ))}
      </div>
      <div className="flex-1 p-8 space-y-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Card>
          <CardHeader><CardTitle>General</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>App name</Label>
              <Input defaultValue="My Application" />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Input defaultValue="A productivity tool" />
            </div>
          </CardContent>
        </Card>
        <Separator />
        <Card>
          <CardHeader><CardTitle>Preferences</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Enable notifications</Label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label>Auto-save drafts</Label>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
        <Button>Save changes</Button>
      </div>
    </div>
  );
}
