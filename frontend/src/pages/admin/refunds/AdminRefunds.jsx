import { useState } from 'react';
import useRefunds from '../../../hooks/useRefunds';
import { createRefund, updateRefund, deleteRefund } from '../../../api/refunds';
import { refundValue } from '../../../utils/refunds';
import RefundForm from '../../../components/admin/RefundForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/refunds.css';

export const meta = { path: '/admin/refunds', title: 'Refunds', panel: 'admin', nav: true, icon: '↩️' };

const COLUMNS = [['reference', 'Reference', 'text'], ['booking', 'Booking', 'text'], ['amount', 'Amount', 'number'], ['reason', 'Reason', 'text'], ['status', 'Status', 'text']];

export default function AdminRefunds() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useRefunds({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateRefund(editing.id, data);
    else await createRefund(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this refund?')) return;
    await deleteRefund(id);
    reload();
  };

  return (
    <section className="admin-page admin-refunds">
      <header className="page-head">
        <h1>↩️ Refunds <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add refund</button>
      </header>
      {editing && <RefundForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{refundValue(item, k)}</td>)}
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
