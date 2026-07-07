// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Progress} from '@/components/ui/progress';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stepIndex = ['welcome', 'profile', 'preferences', 'done'].indexOf(step);
  const progress = (stepIndex / 3) * 100;

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <Progress value={progress} className="w-full" />

      {step === 'welcome' && (
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Let us get you set up. This takes about 2 minutes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setStep('profile')}>Get started</Button>
          </CardContent>
        </Card>
      )}

      {step === 'profile' && (
        <Card>
          <CardHeader>
            <CardTitle>Profile setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => setStep('welcome')}>Back</Button>
              <Button onClick={() => setStep('preferences')}>Next</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'preferences' && (
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Choose your notification and display settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => setStep('profile')}>Back</Button>
              <Button onClick={() => setStep('done')}>Finish</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'done' && (
        <Card>
          <CardHeader>
            <CardTitle>All done!</CardTitle>
            <CardDescription>Your account is ready.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => {}}>Go to dashboard</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
