// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {SegmentedControl, SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {Badge} from '@astryxdesign/core/Badge';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 900,
    margin: '0 auto',
    padding: 32,
  },
});

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  isPopular?: boolean;
}

const plans: Plan[] = [
  {name: 'Starter', monthlyPrice: 9, annualPrice: 7, features: ['1 user', '5 GB storage', 'Email support']},
  {name: 'Pro', monthlyPrice: 29, annualPrice: 24, features: ['5 users', '50 GB storage', 'Priority support', 'API access'], isPopular: true},
  {name: 'Enterprise', monthlyPrice: 99, annualPrice: 79, features: ['Unlimited users', '500 GB storage', 'Dedicated support', 'Custom integrations', 'SLA']},
];

export default function PricingTable() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div {...stylex.props(styles.container)}>
      <VStack gap={6}>
        <VStack gap={3}>
          <Heading level={1} justify="center">Pricing</Heading>
          <HStack gap={2} justify="center">
            <SegmentedControl value={billing} onChange={setBilling} label="Billing period">
              <SegmentedControlItem value="monthly" label="Monthly" />
              <SegmentedControlItem value="annual" label="Annual" />
            </SegmentedControl>
          </HStack>
        </VStack>

        <Grid columns={3} gap={4}>
          {plans.map((plan) => {
            const price = billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            return (
              <Card key={plan.name} padding={5}>
                <VStack gap={4}>
                  <HStack gap={2}>
                    <Heading level={3}>{plan.name}</Heading>
                    {plan.isPopular && <Badge label="Popular" />}
                  </HStack>
                  <HStack gap={1} align="end">
                    <Heading level={2}>${price}</Heading>
                    <Text color="secondary">/mo</Text>
                  </HStack>
                  <VStack gap={2}>
                    {plan.features.map((f) => (
                      <Text key={f}>{f}</Text>
                    ))}
                  </VStack>
                  <Button
                    label={plan.isPopular ? 'Get started' : 'Choose plan'}
                    variant={plan.isPopular ? 'primary' : 'secondary'}
                  />
                </VStack>
              </Card>
            );
          })}
        </Grid>
      </VStack>
    </div>
  );
}
