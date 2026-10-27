import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navFor } from '../router/registry';
import { useAuth } from '../context/AuthContext';

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth() || {};
  const [open, setOpen] = useState(false);

  if (!user || user.role !== 'admin') {
    return (
      <section className="page center">
        <h1>Admin access only</h1>
        <p className="muted">Please sign in with a admin account to continue.</p>
        <Link className="btn btn-primary" to="/login">Sign in</Link>
      </section>
    );
  }

  return (
    <div className="panel">
      <aside className={'panel-side' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
        <Link to="/admin" className="logo">DK<span>Admin</span></Link>
        <nav>
          {navFor('admin').map(p => (
            <NavLink key={p.path} to={p.path} end>{(p.icon || '•') + ' ' + p.title}</NavLink>
          ))}
        </nav>
        <button className="btn" onClick={logout}>Logout</button>
      </aside>
      <div>
        <div className="panel-top">
          <button className="btn" onClick={() => setOpen(o => !o)}>☰</button>
          <strong>DK Admin</strong>
        </div>
        <main className="panel-main">{children}</main>
      </div>
    </div>
  );
}
