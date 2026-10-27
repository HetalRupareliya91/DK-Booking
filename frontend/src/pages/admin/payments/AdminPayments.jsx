import { useState } from 'react';
import usePayments from '../../../hooks/usePayments';
import { createPayment, updatePayment, deletePayment } from '../../../api/payments';
import { paymentValue } from '../../../utils/payments';
import PaymentForm from '../../../components/admin/PaymentForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/payments.css';

export const meta = { path: '/admin/payments', title: 'Payments', panel: 'admin', nav: true, icon: '💳' };

const COLUMNS = [['reference', 'Reference', 'text'], ['booking', 'Booking', 'text'], ['method', 'Method', 'text'], ['amount', 'Amount', 'number'], ['status', 'Status', 'text']];

export default function AdminPayments() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = usePayments({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updatePayment(editing.id, data);
    else await createPayment(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this payment?')) return;
    await deletePayment(id);
    reload();
  };

  return (
    <section className="admin-page admin-payments">
      <header className="page-head">
        <h1>💳 Payments <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add payment</button>
      </header>
      {editing && <PaymentForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{paymentValue(item, k)}</td>)}
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
