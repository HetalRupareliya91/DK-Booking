import { useState } from 'react';
import { Link } from 'react-router-dom';
import useEvents from '../../hooks/useEvents';
import { eventTitle, eventSummary } from '../../utils/events';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import EventMobileCard from '../../components/mobile/EventMobileCard';
import '../../styles/mobile/events.css';
import '../../styles/modules/events.css';

export const meta = { path: '/events', title: 'Events', panel: 'user', nav: true, icon: '🎉' };

export default function EventList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useEvents({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page events-page">
      <header className="page-head">
        <h1>🎉 Events</h1>
        <input className="search" placeholder="Search events..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No events found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <EventMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/events/' + item.id} className="card">
            <div className="card-poster">🎉</div>
            <div className="card-body">
              <h3>{eventTitle(item)}</h3>
              <p className="muted">{eventSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
