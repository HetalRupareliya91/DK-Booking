import { useState } from 'react';
import useOffers from '../../../hooks/useOffers';
import OfferCard from '../../../components/agent/OfferCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/offers.css';

export const meta = { path: '/agent/offers', title: 'Offers', panel: 'agent', nav: true, icon: '🏷️' };

export default function AgentOffers() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useOffers({ q, limit: 50 });
  return (
    <section className="agent-offers">
      <header className="page-head">
        <h1>🏷️ Offers</h1>
        <input className="search" placeholder="Find offers for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total offers</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <OfferCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
