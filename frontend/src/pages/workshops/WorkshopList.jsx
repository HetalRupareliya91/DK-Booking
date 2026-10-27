import { useState } from 'react';
import { Link } from 'react-router-dom';
import useWorkshops from '../../hooks/useWorkshops';
import { workshopTitle, workshopSummary } from '../../utils/workshops';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import WorkshopMobileCard from '../../components/mobile/WorkshopMobileCard';
import '../../styles/mobile/workshops.css';
import '../../styles/modules/workshops.css';

export const meta = { path: '/workshops', title: 'Workshops', panel: 'user', nav: true, icon: '🛠️' };

export default function WorkshopList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useWorkshops({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page workshops-page">
      <header className="page-head">
        <h1>🛠️ Workshops</h1>
        <input className="search" placeholder="Search workshops..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No workshops found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <WorkshopMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/workshops/' + item.id} className="card">
            <div className="card-poster">🛠️</div>
            <div className="card-body">
              <h3>{workshopTitle(item)}</h3>
              <p className="muted">{workshopSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
