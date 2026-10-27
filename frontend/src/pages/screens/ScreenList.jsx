import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScreens from '../../hooks/useScreens';
import { screenTitle, screenSummary } from '../../utils/screens';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/screens.css';

export const meta = { path: '/screens', title: 'Screens', panel: 'user', nav: false, icon: '🖥️' };

export default function ScreenList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useScreens({ q });

  return (
    <section className="page screens-page">
      <header className="page-head">
        <h1>🖥️ Screens</h1>
        <input className="search" placeholder="Search screens..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No screens found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/screens/' + item.id} className="card">
            <div className="card-poster">🖥️</div>
            <div className="card-body">
              <h3>{screenTitle(item)}</h3>
              <p className="muted">{screenSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
