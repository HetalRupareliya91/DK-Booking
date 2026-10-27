import { useState } from 'react';
import usePayments from '../../../hooks/usePayments';
import PaymentCard from '../../../components/agent/PaymentCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/payments.css';

export const meta = { path: '/agent/payments', title: 'Payments', panel: 'agent', nav: true, icon: '💳' };

export default function AgentPayments() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = usePayments({ q, limit: 50 });
  return (
    <section className="agent-payments">
      <header className="page-head">
        <h1>💳 Payments</h1>
        <input className="search" placeholder="Find payments for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total payments</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <PaymentCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
