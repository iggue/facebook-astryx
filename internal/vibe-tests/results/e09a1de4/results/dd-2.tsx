// Copyright (c) Meta Platforms, Inc. and affiliates.

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

const statusColors = {completed: '#4caf50', pending: '#ff9800', failed: '#f44336'};

export default function TransactionList() {
  return (
    <div style={{padding: 16, fontFamily: 'system-ui'}}>
      <h2 style={{margin: '0 0 16px'}}>Transactions</h2>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead><tr style={{borderBottom: '2px solid #e0e0e0'}}>
          <th style={{textAlign: 'left', padding: 8}}>Description</th>
          <th style={{textAlign: 'left', padding: 8}}>Amount</th>
          <th style={{textAlign: 'left', padding: 8}}>Date</th>
          <th style={{textAlign: 'left', padding: 8}}>Status</th>
        </tr></thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id} style={{borderBottom: '1px solid #eee'}}>
              <td style={{padding: 8}}>{t.description}</td>
              <td style={{padding: 8, fontFamily: 'monospace', color: t.amount < 0 ? '#d32f2f' : '#2e7d32'}}>
                {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
              </td>
              <td style={{padding: 8, fontSize: 13, color: '#666'}}>{t.date}</td>
              <td style={{padding: 8}}>
                <span style={{display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: statusColors[t.status], marginRight: 6}}></span>
                {t.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
