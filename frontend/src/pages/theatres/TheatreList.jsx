import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTheatres from '../../hooks/useTheatres';
import { theatreTitle, theatreSummary } from '../../utils/theatres';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/theatres.css';

export const meta = { path: '/theatres', title: 'Theatres', panel: 'user', nav: false, icon: '🏛️' };

export default function TheatreList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useTheatres({ q });

  return (
    <section className="page theatres-page">
      <header className="page-head">
        <h1>🏛️ Theatres</h1>
        <input className="search" placeholder="Search theatres..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No theatres found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/theatres/' + item.id} className="card">
            <div className="card-poster">🏛️</div>
            <div className="card-body">
              <h3>{theatreTitle(item)}</h3>
              <p className="muted">{theatreSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
