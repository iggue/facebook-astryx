// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Avatar} from '@astryxdesign/core/Avatar';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';

export default function ProfileCard() {
  return (
    <Card padding={4} maxWidth={360}>
      <div className="flex flex-col items-center gap-3 text-center">
        <Avatar name="Sarah Chen" size="xl" />
        <Text type="large" weight="semibold" display="block">Sarah Chen</Text>
        <Text type="label" color="secondary" display="block">Staff Design Engineer</Text>
        <Text type="supporting" color="secondary" display="block" maxLines={3}>
          Passionate about building accessible, performant design systems that scale across products and platforms.
        </Text>
        <div className="flex gap-2 flex-wrap justify-center">
          <Badge>Design Systems</Badge>
          <Badge>Accessibility</Badge>
          <Badge>React</Badge>
        </div>
      </div>
    </Card>
  );
}
