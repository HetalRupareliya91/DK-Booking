import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGenres from '../../hooks/useGenres';
import { genreTitle, genreSummary } from '../../utils/genres';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import GenreMobileCard from '../../components/mobile/GenreMobileCard';
import '../../styles/mobile/genres.css';
import '../../styles/modules/genres.css';

export const meta = { path: '/genres', title: 'Genres', panel: 'user', nav: false, icon: '🎞️' };

export default function GenreList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useGenres({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page genres-page">
      <header className="page-head">
        <h1>🎞️ Genres</h1>
        <input className="search" placeholder="Search genres..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No genres found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <GenreMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/genres/' + item.id} className="card">
            <div className="card-poster">🎞️</div>
            <div className="card-body">
              <h3>{genreTitle(item)}</h3>
              <p className="muted">{genreSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
