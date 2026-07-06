// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {Table, useTableSortable, useTablePagination} from '@astryxdesign/core/Table';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Dialog, DialogHeader} from '@astryxdesign/core/Dialog';
import {Badge} from '@astryxdesign/core/Badge';
import {Heading} from '@astryxdesign/core/Text';
import {AlertDialog} from '@astryxdesign/core/AlertDialog';

interface Todo {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  created: string;
  updated: string;
  [key: string]: unknown;
}

const initialTodos: Todo[] = Array.from({length: 50}, (_, i) => ({
  id: String(i + 1),
  title: `Todo item ${i + 1}`,
  status: i % 3 === 0 ? 'Closed' : 'Open',
  created: new Date(2024, 0, i + 1).toISOString().split('T')[0],
  updated: new Date(2024, 5, i + 1).toISOString().split('T')[0],
}));

export default function TodoTracker() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Open' | 'Closed'>('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [sort, setSort] = useState<Array<{sortKey: string; direction: 'asc' | 'desc'}>>([
    {sortKey: 'updated', direction: 'desc'},
  ]);
  const [page, setPage] = useState(1);

  const filtered = todos.filter(t => {
    const matchText = t.title.toLowerCase().includes(filterText.toLowerCase());
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchText && matchStatus;
  });

  const sortPlugin = useTableSortable({sort, onSortChange: setSort});
  const paginationPlugin = useTablePagination({
    page,
    onPageChange: setPage,
    totalItems: filtered.length,
    pageSize: 25,
  });

  const handleCreate = useCallback(() => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => [{id: String(Date.now()), title: newTitle, status: 'Open', created: now, updated: now}, ...prev]);
    setNewTitle('');
    setIsCreateOpen(false);
  }, [newTitle]);

  const handleToggleStatus = useCallback((id: string) => {
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => prev.map(t => t.id === id ? {...t, status: t.status === 'Open' ? 'Closed' : 'Open', updated: now} : t));
  }, []);

  const handleDelete = useCallback(() => {
    if (deleteId) {
      setTodos(prev => prev.filter(t => t.id !== deleteId));
      setDeleteId(null);
    }
  }, [deleteId]);

  const handleSaveEdit = useCallback((id: string) => {
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => prev.map(t => t.id === id ? {...t, title: editTitle, updated: now} : t));
    setEditingId(null);
  }, [editTitle]);

  return (
    <div className="p-4">
      <Heading level={2}>TodoTracker</Heading>
      <div className="flex gap-2 mb-4 items-center">
        <div className="flex-1">
          <TextInput label="Filter" isLabelHidden value={filterText} onChange={setFilterText} placeholder="Filter by title..." />
        </div>
        <Button
          label={statusFilter === 'all' ? 'All' : statusFilter}
          variant="secondary"
          onClick={() => setStatusFilter(s => s === 'all' ? 'Open' : s === 'Open' ? 'Closed' : 'all')}
        />
        <Button label="Create Todo" variant="primary" onClick={() => setIsCreateOpen(true)} />
      </div>
      <Table
        data={filtered}
        idKey="id"
        columns={[
          {key: 'title', header: 'Title', renderCell: (row: Todo) => (
            editingId === row.id ? (
              <div className="flex gap-2 items-center">
                <TextInput label="Edit" isLabelHidden value={editTitle} onChange={setEditTitle} />
                <Button label="Save" size="sm" onClick={() => handleSaveEdit(row.id)} />
                <Button label="Cancel" size="sm" variant="ghost" onClick={() => setEditingId(null)} />
              </div>
            ) : (
              <span className="cursor-pointer hover:underline" onClick={() => {setEditingId(row.id); setEditTitle(row.title);}}>{row.title}</span>
            )
          )},
          {key: 'status', header: 'Status', renderCell: (row: Todo) => (
            <Badge variant={row.status === 'Open' ? 'info' : 'success'} label={row.status} />
          )},
          {key: 'created', header: 'Created'},
          {key: 'updated', header: 'Updated'},
          {key: 'actions', header: '', renderCell: (row: Todo) => (
            <div className="flex gap-2">
              <Button label={row.status === 'Open' ? 'Close' : 'Reopen'} size="sm" variant="ghost" onClick={() => handleToggleStatus(row.id)} />
              <Button label="Delete" size="sm" variant="destructive" onClick={() => setDeleteId(row.id)} />
            </div>
          )},
        ]}
        plugins={{sort: sortPlugin, pagination: paginationPlugin}}
        hasHover
      />
      <Dialog isOpen={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogHeader title="Create Todo" />
        <div className="p-4 space-y-4">
          <TextInput label="Title" value={newTitle} onChange={setNewTitle} />
          <Button label="Create" variant="primary" onClick={handleCreate} />
        </div>
      </Dialog>
      <AlertDialog
        isOpen={deleteId !== null}
        onOpenChange={(open) => {if (!open) {setDeleteId(null);}}}
        title="Delete Todo"
        description="Are you sure you want to delete this todo?"
        confirmLabel="Delete"
        onConfirm={handleDelete}
      />
    </div>
  );
}
