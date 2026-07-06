// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent} from '@/components/ui/card';

const sections = [
  {version: '2.4.0', date: '2024-06-15', changes: [
    {type: 'Added', items: ['New `CommandPalette` component', 'Support for `isStreaming` prop in Markdown', 'Added `density` variants to Table']},
    {type: 'Fixed', items: ['Dialog focus trap not restoring focus', 'Tooltip positioning glitch', '`useTableSortable` `allowUnsortedState`']},
    {type: 'Changed', items: ['Breadcrumbs use `separator` prop', 'Button `isLoading` preserves width']},
  ]},
  {version: '2.3.0', date: '2024-05-20', changes: [
    {type: 'Added', items: ['`SelectableCard` component', '`useTableFiltering` hook', 'New `ghost` variant for IconButton']},
  ]},
];

export default function ChangelogPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Changelog</h1>
      {sections.map(section => (
        <Card key={section.version} className="mb-4">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">v{section.version} - {section.date}</h2>
            {section.changes.map(change => (
              <div key={change.type} className="mt-3">
                <h3 className="font-medium text-sm uppercase text-muted-foreground">{change.type}</h3>
                <ul className="list-disc list-inside mt-1 space-y-1 text-sm">
                  {change.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{__html: item.replace(/`([^`]+)`/g, '<code class="bg-muted px-1 rounded text-xs">$1</code>')}} />)}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
