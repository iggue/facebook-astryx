// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Markdown} from '@astryxdesign/core/Markdown';
import {Card} from '@astryxdesign/core/Card';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 700,
    margin: '0 auto',
    padding: 24,
  },
});

const changelogContent = `# Changelog

## v2.4.0 - 2024-06-15

### Added

- New \`CommandPalette\` component for keyboard-driven navigation
- Support for \`isStreaming\` prop in Markdown component
- Added \`density\` variants to Table: compact, balanced, spacious

### Fixed

- Fixed Dialog focus trap not restoring focus on close
- Resolved Tooltip positioning glitch near viewport edges
- Fixed \`useTableSortable\` not honoring \`allowUnsortedState\`

### Changed

- Breadcrumbs now use \`separator\` prop instead of CSS pseudo-elements
- Button \`isLoading\` state preserves width to prevent layout shift

## v2.3.1 - 2024-05-28

### Fixed

- Patch for TextInput \`status\` not clearing on value change
- Fixed Badge \`icon\` prop type to accept \`ReactNode\`

## v2.3.0 - 2024-05-20

### Added

- \`SelectableCard\` component for card-based selection patterns
- \`useTableFiltering\` hook for client-side table filtering
- New \`ghost\` variant for IconButton

### Deprecated

- \`Spinner\` renamed to \`ProgressCircle\`; old name still works but will be removed in v3
`;

export default function ChangelogPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <Card padding={4}>
        <Markdown>{changelogContent}</Markdown>
      </Card>
    </div>
  );
}
