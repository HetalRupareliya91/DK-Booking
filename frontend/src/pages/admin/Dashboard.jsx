import { navFor } from '../../router/registry';
import { Link } from 'react-router-dom';

export const meta = { path: '/admin', title: 'Dashboard', panel: 'admin', nav: true, icon: '🏠' };

export default function AdminDashboard() {
  const modules = navFor('admin').filter(p => p.path !== '/admin');
  return (
    <section>
      <h1>Admin dashboard</h1>
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
