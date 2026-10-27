import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCoupons from '../../hooks/useCoupons';
import { couponTitle, couponSummary } from '../../utils/coupons';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import CouponMobileCard from '../../components/mobile/CouponMobileCard';
import '../../styles/mobile/coupons.css';
import '../../styles/modules/coupons.css';

export const meta = { path: '/coupons', title: 'Coupons', panel: 'user', nav: false, icon: '🎫' };

export default function CouponList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useCoupons({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page coupons-page">
      <header className="page-head">
        <h1>🎫 Coupons</h1>
        <input className="search" placeholder="Search coupons..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No coupons found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <CouponMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/coupons/' + item.id} className="card">
            <div className="card-poster">🎫</div>
            <div className="card-body">
              <h3>{couponTitle(item)}</h3>
              <p className="muted">{couponSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
