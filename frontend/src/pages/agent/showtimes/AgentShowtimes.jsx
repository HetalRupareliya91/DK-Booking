import { useState } from 'react';
import useShowtimes from '../../../hooks/useShowtimes';
import ShowtimeCard from '../../../components/agent/ShowtimeCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/showtimes.css';

export const meta = { path: '/agent/showtimes', title: 'Showtimes', panel: 'agent', nav: true, icon: '⏰' };

export default function AgentShowtimes() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useShowtimes({ q, limit: 50 });
  return (
    <section className="agent-showtimes">
      <header className="page-head">
        <h1>⏰ Showtimes</h1>
        <input className="search" placeholder="Find showtimes for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total showtimes</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <ShowtimeCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
