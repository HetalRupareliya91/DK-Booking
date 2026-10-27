import { useState } from 'react';
import useSports from '../../../hooks/useSports';
import SportCard from '../../../components/agent/SportCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/sports.css';

export const meta = { path: '/agent/sports', title: 'Sports', panel: 'agent', nav: true, icon: '🏏' };

export default function AgentSports() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useSports({ q, limit: 50 });
  return (
    <section className="agent-sports">
      <header className="page-head">
        <h1>🏏 Sports</h1>
        <input className="search" placeholder="Find sports for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total sports</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <SportCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
