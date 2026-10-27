import { useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import { userTitle, userSummary } from '../../utils/users';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import UserMobileCard from '../../components/mobile/UserMobileCard';
import '../../styles/mobile/users.css';
import '../../styles/modules/users.css';

export const meta = { path: '/users', title: 'Users', panel: 'user', nav: false, icon: '👤' };

export default function UserList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useUsers({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page users-page">
      <header className="page-head">
        <h1>👤 Users</h1>
        <input className="search" placeholder="Search users..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No users found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <UserMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/users/' + item.id} className="card">
            <div className="card-poster">👤</div>
            <div className="card-body">
              <h3>{userTitle(item)}</h3>
              <p className="muted">{userSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
