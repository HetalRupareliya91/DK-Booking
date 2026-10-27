import { useState } from 'react';
import useConcerts from '../../../hooks/useConcerts';
import ConcertCard from '../../../components/agent/ConcertCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/concerts.css';

export const meta = { path: '/agent/concerts', title: 'Concerts', panel: 'agent', nav: true, icon: '🎤' };

export default function AgentConcerts() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useConcerts({ q, limit: 50 });
  return (
    <section className="agent-concerts">
      <header className="page-head">
        <h1>🎤 Concerts</h1>
        <input className="search" placeholder="Find concerts for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total concerts</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <ConcertCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
