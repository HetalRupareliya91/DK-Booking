import { useState } from 'react';
import { Link } from 'react-router-dom';
import useRefunds from '../../hooks/useRefunds';
import { refundTitle, refundSummary } from '../../utils/refunds';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/refunds.css';

export const meta = { path: '/refunds', title: 'Refunds', panel: 'user', nav: false, icon: '↩️' };

export default function RefundList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useRefunds({ q });

  return (
    <section className="page refunds-page">
      <header className="page-head">
        <h1>↩️ Refunds</h1>
        <input className="search" placeholder="Search refunds..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No refunds found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/refunds/' + item.id} className="card">
            <div className="card-poster">↩️</div>
            <div className="card-body">
              <h3>{refundTitle(item)}</h3>
              <p className="muted">{refundSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
