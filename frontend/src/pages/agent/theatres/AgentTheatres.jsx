import { useState } from 'react';
import useTheatres from '../../../hooks/useTheatres';
import TheatreCard from '../../../components/agent/TheatreCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/theatres.css';

export const meta = { path: '/agent/theatres', title: 'Theatres', panel: 'agent', nav: true, icon: '🏛️' };

export default function AgentTheatres() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useTheatres({ q, limit: 50 });
  return (
    <section className="agent-theatres">
      <header className="page-head">
        <h1>🏛️ Theatres</h1>
        <input className="search" placeholder="Find theatres for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total theatres</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <TheatreCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
