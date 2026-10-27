import { useState } from 'react';
import useScreens from '../../../hooks/useScreens';
import ScreenCard from '../../../components/agent/ScreenCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/screens.css';

export const meta = { path: '/agent/screens', title: 'Screens', panel: 'agent', nav: true, icon: '🖥️' };

export default function AgentScreens() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useScreens({ q, limit: 50 });
  return (
    <section className="agent-screens">
      <header className="page-head">
        <h1>🖥️ Screens</h1>
        <input className="search" placeholder="Find screens for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total screens</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <ScreenCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
