import { useState } from 'react';
import { Link } from 'react-router-dom';
import useConcerts from '../../hooks/useConcerts';
import { concertTitle, concertSummary } from '../../utils/concerts';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/concerts.css';

export const meta = { path: '/concerts', title: 'Concerts', panel: 'user', nav: true, icon: '🎤' };

export default function ConcertList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useConcerts({ q });

  return (
    <section className="page concerts-page">
      <header className="page-head">
        <h1>🎤 Concerts</h1>
        <input className="search" placeholder="Search concerts..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No concerts found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/concerts/' + item.id} className="card">
            <div className="card-poster">🎤</div>
            <div className="card-body">
              <h3>{concertTitle(item)}</h3>
              <p className="muted">{concertSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
