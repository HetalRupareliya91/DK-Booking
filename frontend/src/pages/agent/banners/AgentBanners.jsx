import { useState } from 'react';
import useBanners from '../../../hooks/useBanners';
import BannerCard from '../../../components/agent/BannerCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/banners.css';

export const meta = { path: '/agent/banners', title: 'Banners', panel: 'agent', nav: true, icon: '🖼️' };

export default function AgentBanners() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useBanners({ q, limit: 50 });
  return (
    <section className="agent-banners">
      <header className="page-head">
        <h1>🖼️ Banners</h1>
        <input className="search" placeholder="Find banners for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total banners</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <BannerCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
