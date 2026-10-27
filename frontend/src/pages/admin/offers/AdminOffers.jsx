import { useState } from 'react';
import useOffers from '../../../hooks/useOffers';
import { createOffer, updateOffer, deleteOffer } from '../../../api/offers';
import { offerValue } from '../../../utils/offers';
import OfferForm from '../../../components/admin/OfferForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/offers.css';

export const meta = { path: '/admin/offers', title: 'Offers', panel: 'admin', nav: true, icon: '🏷️' };

const COLUMNS = [['title', 'Title', 'text'], ['bank', 'Bank', 'text'], ['discountPct', 'Discount %', 'number'], ['validTill', 'Valid Till', 'date']];

export default function AdminOffers() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useOffers({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateOffer(editing.id, data);
    else await createOffer(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this offer?')) return;
    await deleteOffer(id);
    reload();
  };

  return (
    <section className="admin-page admin-offers">
      <header className="page-head">
        <h1>🏷️ Offers <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add offer</button>
      </header>
      {editing && <OfferForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{offerValue(item, k)}</td>)}
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
