import { useState } from 'react';
import useCities from '../../../hooks/useCities';
import CityCard from '../../../components/agent/CityCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/cities.css';

export const meta = { path: '/agent/cities', title: 'Cities', panel: 'agent', nav: true, icon: '🏙️' };

export default function AgentCities() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useCities({ q, limit: 50 });
  return (
    <section className="agent-cities">
      <header className="page-head">
        <h1>🏙️ Cities</h1>
        <input className="search" placeholder="Find cities for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total cities</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <CityCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
