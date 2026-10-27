import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getWallet } from '../../api/wallets';
import { walletTitle, walletValue } from '../../utils/wallets';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/wallets/:id', title: 'Wallet details', panel: 'user' };

const FIELDS = [['owner', 'Owner', 'text'], ['balance', 'Balance', 'number'], ['currency', 'Currency', 'text']];

export default function WalletDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWallet(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/wallets" className="back">← Back to Wallets</Link>
      <div className="detail-hero">
        <div className="detail-poster">👛</div>
        <div>
          <h1>{walletTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{walletValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
