import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNotifications from '../../hooks/useNotifications';
import { notificationTitle, notificationSummary } from '../../utils/notifications';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/notifications.css';

export const meta = { path: '/notifications', title: 'Notifications', panel: 'user', nav: false, icon: '🔔' };

export default function NotificationList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useNotifications({ q });

  return (
    <section className="page notifications-page">
      <header className="page-head">
        <h1>🔔 Notifications</h1>
        <input className="search" placeholder="Search notifications..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No notifications found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/notifications/' + item.id} className="card">
            <div className="card-poster">🔔</div>
            <div className="card-body">
              <h3>{notificationTitle(item)}</h3>
              <p className="muted">{notificationSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
