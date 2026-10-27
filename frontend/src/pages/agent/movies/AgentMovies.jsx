import { useState } from 'react';
import useMovies from '../../../hooks/useMovies';
import MovieCard from '../../../components/agent/MovieCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/movies.css';

export const meta = { path: '/agent/movies', title: 'Movies', panel: 'agent', nav: true, icon: '🎬' };

export default function AgentMovies() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useMovies({ q, limit: 50 });
  return (
    <section className="agent-movies">
      <header className="page-head">
        <h1>🎬 Movies</h1>
        <input className="search" placeholder="Find movies for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total movies</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <MovieCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
