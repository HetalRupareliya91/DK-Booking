import { useState } from 'react';
import { Link } from 'react-router-dom';
import useWallets from '../../hooks/useWallets';
import { walletTitle, walletSummary } from '../../utils/wallets';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import WalletMobileCard from '../../components/mobile/WalletMobileCard';
import '../../styles/mobile/wallets.css';
import '../../styles/modules/wallets.css';

export const meta = { path: '/wallets', title: 'Wallets', panel: 'user', nav: false, icon: '👛' };

export default function WalletList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useWallets({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page wallets-page">
      <header className="page-head">
        <h1>👛 Wallets</h1>
        <input className="search" placeholder="Search wallets..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No wallets found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <WalletMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/wallets/' + item.id} className="card">
            <div className="card-poster">👛</div>
            <div className="card-body">
              <h3>{walletTitle(item)}</h3>
              <p className="muted">{walletSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
