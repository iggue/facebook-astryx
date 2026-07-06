// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Badge} from '@astryxdesign/core/Badge';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';

interface NotificationProps {
  count: number;
  title?: string;
}

export default function Notification({count, title = 'Notifications'}: NotificationProps) {
  if (count === 0) {
    return null;
  }

  return (
    <Card padding={2}>
      <div className="flex items-center gap-2">
        <Text type="body">{title}</Text>
        <Badge variant="info" label={String(count)} />
      </div>
    </Card>
  );
}
