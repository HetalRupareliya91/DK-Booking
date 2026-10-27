import { useState } from 'react';
import { Link } from 'react-router-dom';
import useShowtimes from '../../hooks/useShowtimes';
import { showtimeTitle, showtimeSummary } from '../../utils/showtimes';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import ShowtimeMobileCard from '../../components/mobile/ShowtimeMobileCard';
import '../../styles/mobile/showtimes.css';
import '../../styles/modules/showtimes.css';

export const meta = { path: '/showtimes', title: 'Showtimes', panel: 'user', nav: false, icon: '⏰' };

export default function ShowtimeList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useShowtimes({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page showtimes-page">
      <header className="page-head">
        <h1>⏰ Showtimes</h1>
        <input className="search" placeholder="Search showtimes..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No showtimes found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <ShowtimeMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/showtimes/' + item.id} className="card">
            <div className="card-poster">⏰</div>
            <div className="card-body">
              <h3>{showtimeTitle(item)}</h3>
              <p className="muted">{showtimeSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
