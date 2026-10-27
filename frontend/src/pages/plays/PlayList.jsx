import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePlays from '../../hooks/usePlays';
import { playTitle, playSummary } from '../../utils/plays';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import PlayMobileCard from '../../components/mobile/PlayMobileCard';
import '../../styles/mobile/plays.css';
import '../../styles/modules/plays.css';

export const meta = { path: '/plays', title: 'Plays', panel: 'user', nav: true, icon: '🎭' };

export default function PlayList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = usePlays({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page plays-page">
      <header className="page-head">
        <h1>🎭 Plays</h1>
        <input className="search" placeholder="Search plays..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No plays found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <PlayMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/plays/' + item.id} className="card">
            <div className="card-poster">🎭</div>
            <div className="card-body">
              <h3>{playTitle(item)}</h3>
              <p className="muted">{playSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
