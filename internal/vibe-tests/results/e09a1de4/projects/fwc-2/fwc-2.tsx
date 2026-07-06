// Copyright (c) Meta Platforms, Inc. and affiliates.

interface NotificationProps {
  count: number;
  title?: string;
}

export default function Notification({count, title = 'Notifications'}: NotificationProps) {
  if (count === 0) {return null;}

  return (
    <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8}}>
      <span style={{fontSize: 14, fontWeight: 500}}>{title}</span>
      <span style={{backgroundColor: '#e3f2fd', color: '#1565c0', borderRadius: 12, padding: '2px 8px', fontSize: 12, fontWeight: 600}}>
        {count}
      </span>
    </div>
  );
}
