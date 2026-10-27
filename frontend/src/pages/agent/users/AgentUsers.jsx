import { useState } from 'react';
import useUsers from '../../../hooks/useUsers';
import UserCard from '../../../components/agent/UserCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/users.css';

export const meta = { path: '/agent/users', title: 'Users', panel: 'agent', nav: true, icon: '👤' };

export default function AgentUsers() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useUsers({ q, limit: 50 });
  return (
    <section className="agent-users">
      <header className="page-head">
        <h1>👤 Users</h1>
        <input className="search" placeholder="Find users for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total users</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <UserCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
