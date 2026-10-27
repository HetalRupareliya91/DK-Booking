import { useState } from 'react';
import useBookings from '../../../hooks/useBookings';
import { createBooking, updateBooking, deleteBooking } from '../../../api/bookings';
import { bookingValue } from '../../../utils/bookings';
import BookingForm from '../../../components/admin/BookingForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/bookings.css';

export const meta = { path: '/admin/bookings', title: 'Bookings', panel: 'admin', nav: true, icon: '🎟️' };

const COLUMNS = [['reference', 'Reference', 'text'], ['customer', 'Customer', 'text'], ['show', 'Show', 'text'], ['tickets', 'Tickets', 'number'], ['amount', 'Amount', 'number'], ['status', 'Status', 'text']];

export default function AdminBookings() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useBookings({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateBooking(editing.id, data);
    else await createBooking(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this booking?')) return;
    await deleteBooking(id);
    reload();
  };

  return (
    <section className="admin-page admin-bookings">
      <header className="page-head">
        <h1>🎟️ Bookings <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add booking</button>
      </header>
      {editing && <BookingForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{bookingValue(item, k)}</td>)}
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
