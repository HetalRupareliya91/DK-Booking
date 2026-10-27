import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePayments from '../../hooks/usePayments';
import { paymentTitle, paymentSummary } from '../../utils/payments';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/payments.css';

export const meta = { path: '/payments', title: 'Payments', panel: 'user', nav: false, icon: '💳' };

export default function PaymentList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = usePayments({ q });

  return (
    <section className="page payments-page">
      <header className="page-head">
        <h1>💳 Payments</h1>
        <input className="search" placeholder="Search payments..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No payments found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/payments/' + item.id} className="card">
            <div className="card-poster">💳</div>
            <div className="card-body">
              <h3>{paymentTitle(item)}</h3>
              <p className="muted">{paymentSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
