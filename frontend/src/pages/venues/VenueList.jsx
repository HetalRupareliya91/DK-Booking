import { useState } from 'react';
import { Link } from 'react-router-dom';
import useVenues from '../../hooks/useVenues';
import { venueTitle, venueSummary } from '../../utils/venues';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/venues.css';

export const meta = { path: '/venues', title: 'Venues', panel: 'user', nav: false, icon: '📍' };

export default function VenueList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useVenues({ q });

  return (
    <section className="page venues-page">
      <header className="page-head">
        <h1>📍 Venues</h1>
        <input className="search" placeholder="Search venues..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No venues found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/venues/' + item.id} className="card">
            <div className="card-poster">📍</div>
            <div className="card-body">
              <h3>{venueTitle(item)}</h3>
              <p className="muted">{venueSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
