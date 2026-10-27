import { useState } from 'react';
import useGenres from '../../../hooks/useGenres';
import GenreCard from '../../../components/agent/GenreCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/genres.css';

export const meta = { path: '/agent/genres', title: 'Genres', panel: 'agent', nav: true, icon: '🎞️' };

export default function AgentGenres() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useGenres({ q, limit: 50 });
  return (
    <section className="agent-genres">
      <header className="page-head">
        <h1>🎞️ Genres</h1>
        <input className="search" placeholder="Find genres for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total genres</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <GenreCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
