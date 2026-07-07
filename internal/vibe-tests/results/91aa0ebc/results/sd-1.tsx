// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Spinner} from '@astryxdesign/core/Spinner';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  widget: {
    minHeight: 200,
  },
});

type State = 'loading' | 'error' | 'data';

interface DashboardData {
  revenue: number;
  users: number;
  growth: number;
}

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');
  const [data, setData] = useState<DashboardData | null>(null);

  const fetchData = () => {
    setState('loading');
    setTimeout(() => {
      const shouldError = Math.random() < 0.3;
      if (shouldError) {
        setState('error');
      } else {
        setData({revenue: 48200, users: 1247, growth: 12.5});
        setState('data');
      }
    }, 1500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card padding={5} xstyle={styles.widget}>
      <VStack gap={4}>
        <Heading level={3}>Dashboard</Heading>

        {state === 'loading' && (
          <VStack gap={2} align="center">
            <Spinner size="md" label="Loading dashboard data" />
            <Text color="secondary">Fetching latest metrics...</Text>
          </VStack>
        )}

        {state === 'error' && (
          <Banner
            status="error"
            title="Failed to load data"
            description="Could not reach the analytics service."
            endContent={<Button label="Retry" variant="secondary" onClick={fetchData} />}
          />
        )}

        {state === 'data' && data && (
          <VStack gap={3}>
            <Text>Revenue: ${data.revenue.toLocaleString()}</Text>
            <Text>Active users: {data.users.toLocaleString()}</Text>
            <Text>Growth: +{data.growth}%</Text>
          </VStack>
        )}
      </VStack>
    </Card>
  );
}
