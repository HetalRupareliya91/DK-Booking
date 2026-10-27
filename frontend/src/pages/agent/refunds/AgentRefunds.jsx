import { useState } from 'react';
import useRefunds from '../../../hooks/useRefunds';
import RefundCard from '../../../components/agent/RefundCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/refunds.css';

export const meta = { path: '/agent/refunds', title: 'Refunds', panel: 'agent', nav: true, icon: '↩️' };

export default function AgentRefunds() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useRefunds({ q, limit: 50 });
  return (
    <section className="agent-refunds">
      <header className="page-head">
        <h1>↩️ Refunds</h1>
        <input className="search" placeholder="Find refunds for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total refunds</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <RefundCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
