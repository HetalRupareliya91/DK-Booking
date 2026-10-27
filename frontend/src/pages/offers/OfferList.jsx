import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOffers from '../../hooks/useOffers';
import { offerTitle, offerSummary } from '../../utils/offers';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import OfferMobileCard from '../../components/mobile/OfferMobileCard';
import '../../styles/mobile/offers.css';
import '../../styles/modules/offers.css';

export const meta = { path: '/offers', title: 'Offers', panel: 'user', nav: false, icon: '🏷️' };

export default function OfferList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useOffers({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page offers-page">
      <header className="page-head">
        <h1>🏷️ Offers</h1>
        <input className="search" placeholder="Search offers..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No offers found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <OfferMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/offers/' + item.id} className="card">
            <div className="card-poster">🏷️</div>
            <div className="card-body">
              <h3>{offerTitle(item)}</h3>
              <p className="muted">{offerSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
