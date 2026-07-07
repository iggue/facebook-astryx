// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Card} from '@astryxdesign/core/Card';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: 32,
  },
});

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stepIndex = ['welcome', 'profile', 'preferences', 'done'].indexOf(step);
  const progress = (stepIndex / 3) * 100;

  return (
    <div {...stylex.props(styles.container)}>
      <VStack gap={6}>
        <ProgressBar value={progress} label="Onboarding progress" />

        {step === 'welcome' && (
          <Card padding={6}>
            <VStack gap={4}>
              <Heading level={1}>Welcome</Heading>
              <Text>Let us get you set up. This takes about 2 minutes.</Text>
              <Button label="Get started" variant="primary" onClick={() => setStep('profile')} />
            </VStack>
          </Card>
        )}

        {step === 'profile' && (
          <Card padding={6}>
            <VStack gap={4}>
              <Heading level={2}>Profile setup</Heading>
              <TextInput label="Name" value={name} onChange={setName} />
              <TextInput label="Email" value={email} onChange={setEmail} />
              <HStack gap={3}>
                <Button label="Back" variant="ghost" onClick={() => setStep('welcome')} />
                <Button label="Next" variant="primary" onClick={() => setStep('preferences')} />
              </HStack>
            </VStack>
          </Card>
        )}

        {step === 'preferences' && (
          <Card padding={6}>
            <VStack gap={4}>
              <Heading level={2}>Preferences</Heading>
              <Text>Choose your notification settings and display options.</Text>
              <HStack gap={3}>
                <Button label="Back" variant="ghost" onClick={() => setStep('profile')} />
                <Button label="Finish" variant="primary" onClick={() => setStep('done')} />
              </HStack>
            </VStack>
          </Card>
        )}

        {step === 'done' && (
          <Card padding={6}>
            <VStack gap={4}>
              <Heading level={2}>All done!</Heading>
              <Text>Your account is ready. Start exploring the dashboard.</Text>
              <Button label="Go to dashboard" variant="primary" onClick={() => {}} />
            </VStack>
          </Card>
        )}
      </VStack>
    </div>
  );
}
