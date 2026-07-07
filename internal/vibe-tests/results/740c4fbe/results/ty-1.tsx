// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

export default function PageTitle() {
  return (
    <VStack gap={2}>
      <Heading level={1}>Welcome to the Dashboard</Heading>
      <Text color="secondary">
        View your recent activity, manage your projects, and track your progress all in one place.
      </Text>
    </VStack>
  );
}
