import { useState } from 'react';
import useSeats from '../../../hooks/useSeats';
import { createSeat, updateSeat, deleteSeat } from '../../../api/seats';
import { seatValue } from '../../../utils/seats';
import SeatForm from '../../../components/admin/SeatForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/seats.css';

export const meta = { path: '/admin/seats', title: 'Seats', panel: 'admin', nav: true, icon: '💺' };

const COLUMNS = [['row', 'Row', 'text'], ['number', 'Number', 'number'], ['category', 'Category', 'text'], ['price', 'Price', 'number'], ['status', 'Status', 'text']];

export default function AdminSeats() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useSeats({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateSeat(editing.id, data);
    else await createSeat(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this seat?')) return;
    await deleteSeat(id);
    reload();
  };

  return (
    <section className="admin-page admin-seats">
      <header className="page-head">
        <h1>💺 Seats <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add seat</button>
      </header>
      {editing && <SeatForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{seatValue(item, k)}</td>)}
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
