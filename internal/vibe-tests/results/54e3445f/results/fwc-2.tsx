// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

interface NotificationProps {
  count: number;
  title?: string;
}

export default function Notification({count, title = 'Notifications'}: NotificationProps) {
  if (count === 0) {return null;}

  return (
    <Card>
      <CardContent className="flex items-center gap-2 p-3">
        <span className="text-sm font-medium">{title}</span>
        <Badge variant="secondary">{count}</Badge>
      </CardContent>
    </Card>
  );
}
