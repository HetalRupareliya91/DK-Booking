import { useState } from 'react';
import useEvents from '../../../hooks/useEvents';
import EventCard from '../../../components/agent/EventCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/events.css';

export const meta = { path: '/agent/events', title: 'Events', panel: 'agent', nav: true, icon: '🎉' };

export default function AgentEvents() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useEvents({ q, limit: 50 });
  return (
    <section className="agent-events">
      <header className="page-head">
        <h1>🎉 Events</h1>
        <input className="search" placeholder="Find events for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total events</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <EventCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
