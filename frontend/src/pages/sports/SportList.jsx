import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSports from '../../hooks/useSports';
import { sportTitle, sportSummary } from '../../utils/sports';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/sports.css';

export const meta = { path: '/sports', title: 'Sports', panel: 'user', nav: true, icon: '🏏' };

export default function SportList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useSports({ q });

  return (
    <section className="page sports-page">
      <header className="page-head">
        <h1>🏏 Sports</h1>
        <input className="search" placeholder="Search sports..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No sports found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/sports/' + item.id} className="card">
            <div className="card-poster">🏏</div>
            <div className="card-body">
              <h3>{sportTitle(item)}</h3>
              <p className="muted">{sportSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
