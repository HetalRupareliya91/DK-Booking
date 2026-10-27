import { Link } from 'react-router-dom';
import { walletTitle, walletSummary } from '../../utils/wallets';

export default function WalletMobileCard({ item }) {
  return (
    <Link to={'/wallets/' + item.id} className="mobile-card">
      <div className="thumb">👛</div>
      <div>
        <h3>{walletTitle(item)}</h3>
        <p className="muted">{walletSummary(item)}</p>
      </div>
    </Link>
  );
}
