import { useState } from 'react';
import useBookings from '../../../hooks/useBookings';
import BookingCard from '../../../components/agent/BookingCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/bookings.css';

export const meta = { path: '/agent/bookings', title: 'Bookings', panel: 'agent', nav: true, icon: '🎟️' };

export default function AgentBookings() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useBookings({ q, limit: 50 });
  return (
    <section className="agent-bookings">
      <header className="page-head">
        <h1>🎟️ Bookings</h1>
        <input className="search" placeholder="Find bookings for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total bookings</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <BookingCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
