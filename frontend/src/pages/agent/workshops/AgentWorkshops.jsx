import { useState } from 'react';
import useWorkshops from '../../../hooks/useWorkshops';
import WorkshopCard from '../../../components/agent/WorkshopCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/workshops.css';

export const meta = { path: '/agent/workshops', title: 'Workshops', panel: 'agent', nav: true, icon: '🛠️' };

export default function AgentWorkshops() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useWorkshops({ q, limit: 50 });
  return (
    <section className="agent-workshops">
      <header className="page-head">
        <h1>🛠️ Workshops</h1>
        <input className="search" placeholder="Find workshops for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total workshops</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <WorkshopCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
