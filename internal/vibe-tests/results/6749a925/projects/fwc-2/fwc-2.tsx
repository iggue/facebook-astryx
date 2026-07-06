// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});

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
      <div {...stylex.props(styles.container)}>
        <Text type="body">{title}</Text>
        <Badge variant="info" label={String(count)} />
      </div>
    </Card>
  );
}
