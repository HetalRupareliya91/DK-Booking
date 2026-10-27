import { useState } from 'react';
import useLanguages from '../../../hooks/useLanguages';
import LanguageCard from '../../../components/agent/LanguageCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/languages.css';

export const meta = { path: '/agent/languages', title: 'Languages', panel: 'agent', nav: true, icon: '🗣️' };

export default function AgentLanguages() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useLanguages({ q, limit: 50 });
  return (
    <section className="agent-languages">
      <header className="page-head">
        <h1>🗣️ Languages</h1>
        <input className="search" placeholder="Find languages for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total languages</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <LanguageCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
