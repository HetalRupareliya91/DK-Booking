import { useState } from 'react';
import useNotifications from '../../../hooks/useNotifications';
import NotificationCard from '../../../components/agent/NotificationCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/notifications.css';

export const meta = { path: '/agent/notifications', title: 'Notifications', panel: 'agent', nav: true, icon: '🔔' };

export default function AgentNotifications() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useNotifications({ q, limit: 50 });
  return (
    <section className="agent-notifications">
      <header className="page-head">
        <h1>🔔 Notifications</h1>
        <input className="search" placeholder="Find notifications for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total notifications</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <NotificationCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
