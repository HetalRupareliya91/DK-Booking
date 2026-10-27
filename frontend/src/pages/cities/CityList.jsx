import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCities from '../../hooks/useCities';
import { cityTitle, citySummary } from '../../utils/cities';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import CityMobileCard from '../../components/mobile/CityMobileCard';
import '../../styles/mobile/cities.css';
import '../../styles/modules/cities.css';

export const meta = { path: '/cities', title: 'Cities', panel: 'user', nav: false, icon: '🏙️' };

export default function CityList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useCities({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page cities-page">
      <header className="page-head">
        <h1>🏙️ Cities</h1>
        <input className="search" placeholder="Search cities..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No cities found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <CityMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/cities/' + item.id} className="card">
            <div className="card-poster">🏙️</div>
            <div className="card-body">
              <h3>{cityTitle(item)}</h3>
              <p className="muted">{citySummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
