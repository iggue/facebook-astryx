// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Markdown} from '@astryxdesign/core/Markdown';
import {Card} from '@astryxdesign/core/Card';

const changelogContent = `# Changelog

## v2.4.0 - 2024-06-15

### Added

- New \`CommandPalette\` component for keyboard-driven navigation
- Support for \`isStreaming\` prop in Markdown component
- Added \`density\` variants to Table

### Fixed

- Fixed Dialog focus trap not restoring focus on close
- Resolved Tooltip positioning glitch near viewport edges
- Fixed \`useTableSortable\` not honoring \`allowUnsortedState\`

### Changed

- Breadcrumbs now use \`separator\` prop instead of CSS pseudo-elements
- Button \`isLoading\` state preserves width to prevent layout shift

## v2.3.0 - 2024-05-20

### Added

- \`SelectableCard\` for card-based selection patterns
- \`useTableFiltering\` hook for client-side filtering
- New \`ghost\` variant for IconButton
`;

export default function ChangelogPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card padding={4}>
        <Markdown>{changelogContent}</Markdown>
      </Card>
    </div>
  );
}
