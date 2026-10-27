import { useState } from 'react';
import useAgents from '../../../hooks/useAgents';
import AgentCard from '../../../components/agent/AgentCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/agents.css';

export const meta = { path: '/agent/agents', title: 'Agents', panel: 'agent', nav: true, icon: '🧑‍💼' };

export default function AgentAgents() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useAgents({ q, limit: 50 });
  return (
    <section className="agent-agents">
      <header className="page-head">
        <h1>🧑‍💼 Agents</h1>
        <input className="search" placeholder="Find agents for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total agents</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <AgentCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
