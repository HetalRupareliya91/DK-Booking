import { useState } from 'react';
import useWallets from '../../../hooks/useWallets';
import { createWallet, updateWallet, deleteWallet } from '../../../api/wallets';
import { walletValue } from '../../../utils/wallets';
import WalletForm from '../../../components/admin/WalletForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/wallets.css';

export const meta = { path: '/admin/wallets', title: 'Wallets', panel: 'admin', nav: true, icon: '👛' };

const COLUMNS = [['owner', 'Owner', 'text'], ['balance', 'Balance', 'number'], ['currency', 'Currency', 'text']];

export default function AdminWallets() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useWallets({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateWallet(editing.id, data);
    else await createWallet(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this wallet?')) return;
    await deleteWallet(id);
    reload();
  };

  return (
    <section className="admin-page admin-wallets">
      <header className="page-head">
        <h1>👛 Wallets <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add wallet</button>
      </header>
      {editing && <WalletForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{walletValue(item, k)}</td>)}
                  <td className="actions" data-label="Actions">
                    <button onClick={() => setEditing(item)}>Edit</button>
                    <button className="danger" onClick={() => remove(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
