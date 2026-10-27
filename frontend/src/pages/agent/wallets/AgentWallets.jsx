import { useState } from 'react';
import useWallets from '../../../hooks/useWallets';
import WalletCard from '../../../components/agent/WalletCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/wallets.css';

export const meta = { path: '/agent/wallets', title: 'Wallets', panel: 'agent', nav: true, icon: '👛' };

export default function AgentWallets() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useWallets({ q, limit: 50 });
  return (
    <section className="agent-wallets">
      <header className="page-head">
        <h1>👛 Wallets</h1>
        <input className="search" placeholder="Find wallets for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total wallets</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <WalletCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
