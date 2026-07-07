// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useMemo} from 'react';
import {Table} from '@astryxdesign/core/Table';
import {TextInput} from '@astryxdesign/core/TextInput';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';

interface User extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const users: User[] = [
  {id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active'},
  {id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active'},
  {id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive'},
  {id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active'},
  {id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Active'},
];

export default function UserTable() {
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    const q = search.toLowerCase();
    return users.filter(
      (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q),
    );
  }, [search]);

  return (
    <Card padding={5}>
      <VStack gap={4}>
        <Heading level={2}>Users</Heading>
        <TextInput label="Search users" value={search} onChange={setSearch} placeholder="Filter by name, email, or role" />
        <Table
          data={filteredUsers}
          idKey="id"
          columns={[
            {key: 'name', header: 'Name', width: '2fr'},
            {key: 'email', header: 'Email', width: '2fr'},
            {key: 'role', header: 'Role', width: '1fr'},
            {key: 'status', header: 'Status', width: '1fr'},
          ]}
          hasHover
        />
      </VStack>
    </Card>
  );
}
