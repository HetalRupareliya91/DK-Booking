import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBookings from '../../hooks/useBookings';
import { bookingTitle, bookingSummary } from '../../utils/bookings';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import BookingMobileCard from '../../components/mobile/BookingMobileCard';
import '../../styles/mobile/bookings.css';
import '../../styles/modules/bookings.css';

export const meta = { path: '/bookings', title: 'Bookings', panel: 'user', nav: false, icon: '🎟️' };

export default function BookingList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useBookings({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page bookings-page">
      <header className="page-head">
        <h1>🎟️ Bookings</h1>
        <input className="search" placeholder="Search bookings..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No bookings found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <BookingMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/bookings/' + item.id} className="card">
            <div className="card-poster">🎟️</div>
            <div className="card-body">
              <h3>{bookingTitle(item)}</h3>
              <p className="muted">{bookingSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
