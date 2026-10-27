import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAgents from '../../hooks/useAgents';
import { agentTitle, agentSummary } from '../../utils/agents';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/agents.css';

export const meta = { path: '/agents', title: 'Agents', panel: 'user', nav: false, icon: '🧑‍💼' };

export default function AgentList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useAgents({ q });

  return (
    <section className="page agents-page">
      <header className="page-head">
        <h1>🧑‍💼 Agents</h1>
        <input className="search" placeholder="Search agents..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No agents found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/agents/' + item.id} className="card">
            <div className="card-poster">🧑‍💼</div>
            <div className="card-body">
              <h3>{agentTitle(item)}</h3>
              <p className="muted">{agentSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
