import { navFor } from '../../router/registry';
import { Link } from 'react-router-dom';

export const meta = { path: '/agent', title: 'Dashboard', panel: 'agent', nav: true, icon: '🏠' };

export default function AgentDashboard() {
  const modules = navFor('agent').filter(p => p.path !== '/agent');
  return (
    <section>
      <h1>Agent dashboard</h1>
      <p className="muted">{modules.length} modules available.</p>
      <div className="card-grid">
        {modules.map(m => (
          <Link key={m.path} to={m.path} className="card">
            <div className="card-body"><h3>{(m.icon || '') + ' ' + m.title}</h3><p className="muted">Manage {m.title.toLowerCase()}</p></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
