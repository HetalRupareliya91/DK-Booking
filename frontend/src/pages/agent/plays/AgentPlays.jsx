import { useState } from 'react';
import usePlays from '../../../hooks/usePlays';
import PlayCard from '../../../components/agent/PlayCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/plays.css';

export const meta = { path: '/agent/plays', title: 'Plays', panel: 'agent', nav: true, icon: '🎭' };

export default function AgentPlays() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = usePlays({ q, limit: 50 });
  return (
    <section className="agent-plays">
      <header className="page-head">
        <h1>🎭 Plays</h1>
        <input className="search" placeholder="Find plays for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total plays</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <PlayCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
