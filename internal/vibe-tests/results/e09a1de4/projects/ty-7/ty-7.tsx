// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function ChangelogPage() {
  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24, fontFamily: 'system-ui', lineHeight: 1.6}}>
      <h1>Changelog</h1>
      <h2>v2.4.0 - 2024-06-15</h2>
      <h3>Added</h3>
      <ul>
        <li>New <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>CommandPalette</code> component for keyboard-driven navigation</li>
        <li>Support for <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>isStreaming</code> prop in Markdown</li>
        <li>Added <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>density</code> variants to Table</li>
      </ul>
      <h3>Fixed</h3>
      <ul>
        <li>Fixed Dialog focus trap not restoring focus on close</li>
        <li>Resolved Tooltip positioning glitch near viewport edges</li>
        <li>Fixed <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>useTableSortable</code> not honoring <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>allowUnsortedState</code></li>
      </ul>
      <h3>Changed</h3>
      <ul>
        <li>Breadcrumbs now use <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>separator</code> prop</li>
        <li>Button <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>isLoading</code> preserves width</li>
      </ul>
      <h2>v2.3.0 - 2024-05-20</h2>
      <h3>Added</h3>
      <ul>
        <li><code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>SelectableCard</code> for card-based selection</li>
        <li><code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>useTableFiltering</code> hook</li>
        <li>New <code style={{background: '#f5f5f5', padding: '1px 4px', borderRadius: 3}}>ghost</code> variant for IconButton</li>
      </ul>
    </div>
  );
}
