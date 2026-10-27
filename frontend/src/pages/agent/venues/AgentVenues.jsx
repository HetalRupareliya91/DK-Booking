import { useState } from 'react';
import useVenues from '../../../hooks/useVenues';
import VenueCard from '../../../components/agent/VenueCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/venues.css';

export const meta = { path: '/agent/venues', title: 'Venues', panel: 'agent', nav: true, icon: '📍' };

export default function AgentVenues() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useVenues({ q, limit: 50 });
  return (
    <section className="agent-venues">
      <header className="page-head">
        <h1>📍 Venues</h1>
        <input className="search" placeholder="Find venues for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total venues</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <VenueCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
