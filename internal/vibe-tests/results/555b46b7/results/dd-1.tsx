// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useMemo} from 'react';

interface User {
  id: number; name: string; email: string; role: string; status: string;
}

const users: User[] = [
  {id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active'},
  {id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active'},
  {id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive'},
  {id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active'},
  {id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Active'},
];

type SortKey = keyof User;

export default function UserTable() {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {setSortAsc(!sortAsc);}
    else { setSortKey(key); setSortAsc(true); }
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
      .sort((a, b) => { const c = String(a[sortKey]).localeCompare(String(b[sortKey])); return sortAsc ? c : -c; });
  }, [search, sortKey, sortAsc]);

  const thStyle: React.CSSProperties = {padding: '8px 12px', textAlign: 'left', borderBottom: '2px solid #e0e0e0', cursor: 'pointer', userSelect: 'none'};
  const tdStyle: React.CSSProperties = {padding: '8px 12px', borderBottom: '1px solid #f0f0f0'};

  return (
    <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: 24}}>
      <h2 style={{margin: '0 0 16px'}}>Users</h2>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users..." style={{width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4, marginBottom: 16}} aria-label="Search users" />
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            {(['name', 'email', 'role', 'status'] as SortKey[]).map((key) => (
              <th key={key} style={thStyle} onClick={() => handleSort(key)}>
                {key.charAt(0).toUpperCase() + key.slice(1)} {sortKey === key ? (sortAsc ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id}>
              <td style={tdStyle}>{u.name}</td>
              <td style={tdStyle}>{u.email}</td>
              <td style={tdStyle}>{u.role}</td>
              <td style={tdStyle}>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
