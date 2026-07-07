// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Loader2} from 'lucide-react';

type State = 'loading' | 'error' | 'data';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');
  const [data, setData] = useState<{revenue: number; users: number; growth: number} | null>(null);

  const fetchData = () => {
    setState('loading');
    setTimeout(() => {
      if (Math.random() < 0.3) {
        setState('error');
      } else {
        setData({revenue: 48200, users: 1247, growth: 12.5});
        setState('data');
      }
    }, 1500);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[200px]">
        {state === 'loading' && (
          <div className="flex flex-col items-center gap-2 py-8">
            <Loader2 className="h-6 w-6 animate-spin" />
            <p className="text-sm text-muted-foreground">Fetching latest metrics...</p>
          </div>
        )}
        {state === 'error' && (
          <Alert variant="destructive">
            <AlertTitle>Failed to load data</AlertTitle>
            <AlertDescription className="flex items-center justify-between">
              <span>Could not reach the analytics service.</span>
              <Button variant="outline" size="sm" onClick={fetchData}>Retry</Button>
            </AlertDescription>
          </Alert>
        )}
        {state === 'data' && data && (
          <div className="space-y-2">
            <p>Revenue: ${data.revenue.toLocaleString()}</p>
            <p>Active users: {data.users.toLocaleString()}</p>
            <p>Growth: +{data.growth}%</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
