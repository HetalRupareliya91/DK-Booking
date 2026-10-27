import { useState } from 'react';
import useSeats from '../../../hooks/useSeats';
import SeatCard from '../../../components/agent/SeatCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/seats.css';

export const meta = { path: '/agent/seats', title: 'Seats', panel: 'agent', nav: true, icon: '💺' };

export default function AgentSeats() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useSeats({ q, limit: 50 });
  return (
    <section className="agent-seats">
      <header className="page-head">
        <h1>💺 Seats</h1>
        <input className="search" placeholder="Find seats for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total seats</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <SeatCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
