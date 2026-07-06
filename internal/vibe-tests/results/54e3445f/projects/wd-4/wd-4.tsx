// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Badge} from '@/components/ui/badge';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';

interface Todo {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  created: string;
  updated: string;
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
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [sortField, setSortField] = useState<'updated' | 'created' | 'title'>('updated');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const filtered = todos.filter(t => {
    const matchText = t.title.toLowerCase().includes(filterText.toLowerCase());
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchText && matchStatus;
  }).sort((a, b) => {
    const m = sortDir === 'asc' ? 1 : -1;
    return a[sortField] > b[sortField] ? m : -m;
  });

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleCreate = useCallback(() => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => [{id: String(Date.now()), title: newTitle, status: 'Open', created: now, updated: now}, ...prev]);
    setNewTitle('');
  }, [newTitle]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">TodoTracker</h2>
      <div className="flex gap-2">
        <Input placeholder="Filter by title..." value={filterText} onChange={e => setFilterText(e.target.value)} className="flex-1" />
        <Button variant="outline" onClick={() => setStatusFilter(s => s === 'all' ? 'Open' : s === 'Open' ? 'Closed' : 'all')}>
          {statusFilter === 'all' ? 'All' : statusFilter}
        </Button>
        <Dialog>
          <DialogTrigger asChild><Button>Create Todo</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create Todo</DialogTitle></DialogHeader>
            <Input placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
            <Button onClick={handleCreate}>Create</Button>
          </DialogContent>
        </Dialog>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2 cursor-pointer" onClick={() => {setSortField('title'); setSortDir(d => d === 'asc' ? 'desc' : 'asc');}}>Title</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2 cursor-pointer" onClick={() => {setSortField('created'); setSortDir(d => d === 'asc' ? 'desc' : 'asc');}}>Created</th>
            <th className="text-left p-2 cursor-pointer" onClick={() => {setSortField('updated'); setSortDir(d => d === 'asc' ? 'desc' : 'asc');}}>Updated</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paged.map(todo => (
            <tr key={todo.id} className="border-b hover:bg-muted/50">
              <td className="p-2">
                {editingId === todo.id ? (
                  <div className="flex gap-1">
                    <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} className="h-8" />
                    <Button size="sm" onClick={() => {setTodos(prev => prev.map(t => t.id === todo.id ? {...t, title: editTitle, updated: new Date().toISOString().split('T')[0]} : t)); setEditingId(null);}}>Save</Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                  </div>
                ) : (
                  <span className="cursor-pointer" onClick={() => {setEditingId(todo.id); setEditTitle(todo.title);}}>{todo.title}</span>
                )}
              </td>
              <td className="p-2"><Badge variant={todo.status === 'Open' ? 'default' : 'secondary'}>{todo.status}</Badge></td>
              <td className="p-2 text-sm">{todo.created}</td>
              <td className="p-2 text-sm">{todo.updated}</td>
              <td className="p-2 flex gap-1">
                <Button size="sm" variant="ghost" onClick={() => setTodos(prev => prev.map(t => t.id === todo.id ? {...t, status: t.status === 'Open' ? 'Closed' : 'Open', updated: new Date().toISOString().split('T')[0]} : t))}>
                  {todo.status === 'Open' ? 'Close' : 'Reopen'}
                </Button>
                <Button size="sm" variant="destructive" onClick={() => setTodos(prev => prev.filter(t => t.id !== todo.id))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2 justify-center">
        <Button variant="outline" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Previous</Button>
        <span className="py-2 px-3 text-sm">Page {page} of {totalPages}</span>
        <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
