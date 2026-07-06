// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Table} from '@astryxdesign/core/Table';
import {Badge} from '@astryxdesign/core/Badge';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {StatusDot} from '@astryxdesign/core/StatusDot';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  [key: string]: unknown;
}

const transactions: Transaction[] = [
  {id: '1', description: 'Payment to vendor', amount: -250.00, date: '2024-06-15', status: 'completed'},
  {id: '2', description: 'Client invoice #42', amount: 1500.00, date: '2024-06-14', status: 'completed'},
  {id: '3', description: 'Subscription renewal', amount: -29.99, date: '2024-06-13', status: 'pending'},
  {id: '4', description: 'Refund - Order #187', amount: 75.50, date: '2024-06-12', status: 'failed'},
  {id: '5', description: 'Transfer to savings', amount: -500.00, date: '2024-06-11', status: 'completed'},
  {id: '6', description: 'Freelance payment', amount: 850.00, date: '2024-06-10', status: 'pending'},
];

const statusVariant = {
  completed: 'success' as const,
  pending: 'warning' as const,
  failed: 'error' as const,
};

export default function TransactionList() {
  return (
    <div>
      <Heading level={2}>Transactions</Heading>
      <Table
        data={transactions}
        idKey="id"
        columns={[
          {key: 'description', header: 'Description'},
          {key: 'amount', header: 'Amount', renderCell: (row: Transaction) => (
            <Text type="body" color={row.amount < 0 ? 'primary' : 'accent'}>
              {row.amount < 0 ? '-' : '+'}${Math.abs(row.amount).toFixed(2)}
            </Text>
          )},
          {key: 'date', header: 'Date'},
          {key: 'status', header: 'Status', renderCell: (row: Transaction) => (
            <StatusDot variant={statusVariant[row.status]} label={row.status} />
          )},
        ]}
        hasHover
        dividers="rows"
      />
    </div>
  );
}
