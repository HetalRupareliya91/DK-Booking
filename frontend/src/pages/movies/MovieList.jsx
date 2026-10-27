import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMovies from '../../hooks/useMovies';
import { movieTitle, movieSummary } from '../../utils/movies';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/movies.css';

export const meta = { path: '/movies', title: 'Movies', panel: 'user', nav: true, icon: '🎬' };

export default function MovieList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useMovies({ q });

  return (
    <section className="page movies-page">
      <header className="page-head">
        <h1>🎬 Movies</h1>
        <input className="search" placeholder="Search movies..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No movies found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/movies/' + item.id} className="card">
            <div className="card-poster">🎬</div>
            <div className="card-body">
              <h3>{movieTitle(item)}</h3>
              <p className="muted">{movieSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
