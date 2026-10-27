import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBanners from '../../hooks/useBanners';
import { bannerTitle, bannerSummary } from '../../utils/banners';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/banners.css';

export const meta = { path: '/banners', title: 'Banners', panel: 'user', nav: false, icon: '🖼️' };

export default function BannerList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useBanners({ q });

  return (
    <section className="page banners-page">
      <header className="page-head">
        <h1>🖼️ Banners</h1>
        <input className="search" placeholder="Search banners..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No banners found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/banners/' + item.id} className="card">
            <div className="card-poster">🖼️</div>
            <div className="card-body">
              <h3>{bannerTitle(item)}</h3>
              <p className="muted">{bannerSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
