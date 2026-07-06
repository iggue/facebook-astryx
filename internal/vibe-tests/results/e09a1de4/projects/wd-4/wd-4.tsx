// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';

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
  const [isCreateOpen, setIsCreateOpen] = useState(false);
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
    setIsCreateOpen(false);
  }, [newTitle]);

  const btnStyle = {padding: '6px 12px', borderRadius: 4, border: '1px solid #ccc', cursor: 'pointer', fontSize: 13, backgroundColor: '#fff'};
  const primaryBtn = {...btnStyle, backgroundColor: '#1976d2', color: '#fff', border: 'none'};

  return (
    <div style={{padding: 16, fontFamily: 'system-ui'}}>
      <h2 style={{margin: '0 0 16px'}}>TodoTracker</h2>
      <div style={{display: 'flex', gap: 8, marginBottom: 16}}>
        <input placeholder="Filter by title..." value={filterText} onChange={e => setFilterText(e.target.value)} style={{flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        <button style={btnStyle} onClick={() => setStatusFilter(s => s === 'all' ? 'Open' : s === 'Open' ? 'Closed' : 'all')}>{statusFilter === 'all' ? 'All' : statusFilter}</button>
        <button style={primaryBtn} onClick={() => setIsCreateOpen(true)}>Create Todo</button>
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead><tr style={{borderBottom: '2px solid #e0e0e0'}}>
          <th style={{textAlign: 'left', padding: 8, cursor: 'pointer'}} onClick={() => {setSortField('title'); setSortDir(d => d === 'asc' ? 'desc' : 'asc');}}>Title</th>
          <th style={{textAlign: 'left', padding: 8}}>Status</th>
          <th style={{textAlign: 'left', padding: 8, cursor: 'pointer'}} onClick={() => {setSortField('created'); setSortDir(d => d === 'asc' ? 'desc' : 'asc');}}>Created</th>
          <th style={{textAlign: 'left', padding: 8, cursor: 'pointer'}} onClick={() => {setSortField('updated'); setSortDir(d => d === 'asc' ? 'desc' : 'asc');}}>Updated</th>
          <th style={{padding: 8}}>Actions</th>
        </tr></thead>
        <tbody>
          {paged.map(todo => (
            <tr key={todo.id} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: 8}}>
                {editingId === todo.id ? (
                  <span style={{display: 'flex', gap: 4}}>
                    <input value={editTitle} onChange={e => setEditTitle(e.target.value)} style={{padding: 4, border: '1px solid #ccc', borderRadius: 3}} />
                    <button style={btnStyle} onClick={() => {setTodos(prev => prev.map(t => t.id === todo.id ? {...t, title: editTitle, updated: new Date().toISOString().split('T')[0]} : t)); setEditingId(null);}}>Save</button>
                    <button style={btnStyle} onClick={() => setEditingId(null)}>Cancel</button>
                  </span>
                ) : <span style={{cursor: 'pointer'}} onClick={() => {setEditingId(todo.id); setEditTitle(todo.title);}}>{todo.title}</span>}
              </td>
              <td style={{padding: 8}}><span style={{background: todo.status === 'Open' ? '#e3f2fd' : '#e8f5e9', padding: '2px 8px', borderRadius: 4, fontSize: 12}}>{todo.status}</span></td>
              <td style={{padding: 8, fontSize: 13}}>{todo.created}</td>
              <td style={{padding: 8, fontSize: 13}}>{todo.updated}</td>
              <td style={{padding: 8, display: 'flex', gap: 4}}>
                <button style={btnStyle} onClick={() => setTodos(prev => prev.map(t => t.id === todo.id ? {...t, status: t.status === 'Open' ? 'Closed' : 'Open', updated: new Date().toISOString().split('T')[0]} : t))}>{todo.status === 'Open' ? 'Close' : 'Reopen'}</button>
                <button style={{...btnStyle, color: '#d32f2f'}} onClick={() => setTodos(prev => prev.filter(t => t.id !== todo.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16}}>
        <button style={btnStyle} disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Previous</button>
        <span style={{padding: '6px 12px'}}>Page {page} of {totalPages}</span>
        <button style={btnStyle} disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
      {isCreateOpen && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
          <div style={{background: '#fff', borderRadius: 8, padding: 24, minWidth: 300}}>
            <h3 style={{margin: '0 0 12px'}}>Create Todo</h3>
            <input placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{width: '100%', padding: 8, marginBottom: 12, border: '1px solid #ccc', borderRadius: 4}} />
            <div style={{display: 'flex', gap: 8}}>
              <button style={primaryBtn} onClick={handleCreate}>Create</button>
              <button style={btnStyle} onClick={() => setIsCreateOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
