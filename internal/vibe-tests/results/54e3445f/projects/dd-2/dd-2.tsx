// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Badge} from '@/components/ui/badge';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const transactions: Transaction[] = [
  {id: '1', description: 'Payment to vendor', amount: -250.00, date: '2024-06-15', status: 'completed'},
  {id: '2', description: 'Client invoice #42', amount: 1500.00, date: '2024-06-14', status: 'completed'},
  {id: '3', description: 'Subscription renewal', amount: -29.99, date: '2024-06-13', status: 'pending'},
  {id: '4', description: 'Refund - Order #187', amount: 75.50, date: '2024-06-12', status: 'failed'},
  {id: '5', description: 'Transfer to savings', amount: -500.00, date: '2024-06-11', status: 'completed'},
];

const statusStyle = {completed: 'default', pending: 'secondary', failed: 'destructive'} as const;

export default function TransactionList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <table className="w-full border-collapse">
        <thead><tr className="border-b"><th className="text-left p-2">Description</th><th className="text-left p-2">Amount</th><th className="text-left p-2">Date</th><th className="text-left p-2">Status</th></tr></thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id} className="border-b hover:bg-muted/50">
              <td className="p-2">{t.description}</td>
              <td className={`p-2 font-mono ${t.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
              </td>
              <td className="p-2 text-sm text-muted-foreground">{t.date}</td>
              <td className="p-2"><Badge variant={statusStyle[t.status]}>{t.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
