import { useState } from 'react';
import { Link } from 'react-router-dom';
import useComedyShows from '../../hooks/useComedyShows';
import { comedyShowTitle, comedyShowSummary } from '../../utils/comedy';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import ComedyShowMobileCard from '../../components/mobile/ComedyShowMobileCard';
import '../../styles/mobile/comedy.css';
import '../../styles/modules/comedy.css';

export const meta = { path: '/comedy', title: 'Comedy Shows', panel: 'user', nav: true, icon: '😂' };

export default function ComedyShowList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useComedyShows({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page comedy-page">
      <header className="page-head">
        <h1>😂 Comedy Shows</h1>
        <input className="search" placeholder="Search comedy shows..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No comedy shows found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <ComedyShowMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/comedy/' + item.id} className="card">
            <div className="card-poster">😂</div>
            <div className="card-body">
              <h3>{comedyShowTitle(item)}</h3>
              <p className="muted">{comedyShowSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
