import { useState } from 'react';
import useCoupons from '../../../hooks/useCoupons';
import CouponCard from '../../../components/agent/CouponCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/coupons.css';

export const meta = { path: '/agent/coupons', title: 'Coupons', panel: 'agent', nav: true, icon: '🎫' };

export default function AgentCoupons() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useCoupons({ q, limit: 50 });
  return (
    <section className="agent-coupons">
      <header className="page-head">
        <h1>🎫 Coupons</h1>
        <input className="search" placeholder="Find coupons for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total coupons</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <CouponCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
