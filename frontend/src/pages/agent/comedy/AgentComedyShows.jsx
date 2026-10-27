import { useState } from 'react';
import useComedyShows from '../../../hooks/useComedyShows';
import ComedyShowCard from '../../../components/agent/ComedyShowCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/comedy.css';

export const meta = { path: '/agent/comedy', title: 'Comedy Shows', panel: 'agent', nav: true, icon: '😂' };

export default function AgentComedyShows() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useComedyShows({ q, limit: 50 });
  return (
    <section className="agent-comedy">
      <header className="page-head">
        <h1>😂 Comedy Shows</h1>
        <input className="search" placeholder="Find comedy shows for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total comedy shows</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <ComedyShowCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
