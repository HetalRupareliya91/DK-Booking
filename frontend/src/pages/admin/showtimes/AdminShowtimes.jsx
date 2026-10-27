import { useState } from 'react';
import useShowtimes from '../../../hooks/useShowtimes';
import { createShowtime, updateShowtime, deleteShowtime } from '../../../api/showtimes';
import { showtimeValue } from '../../../utils/showtimes';
import ShowtimeForm from '../../../components/admin/ShowtimeForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/showtimes.css';

export const meta = { path: '/admin/showtimes', title: 'Showtimes', panel: 'admin', nav: true, icon: '⏰' };

const COLUMNS = [['movie', 'Movie', 'text'], ['theatre', 'Theatre', 'text'], ['screen', 'Screen', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminShowtimes() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useShowtimes({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateShowtime(editing.id, data);
    else await createShowtime(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this showtime?')) return;
    await deleteShowtime(id);
    reload();
  };

  return (
    <section className="admin-page admin-showtimes">
      <header className="page-head">
        <h1>⏰ Showtimes <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add showtime</button>
      </header>
      {editing && <ShowtimeForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{showtimeValue(item, k)}</td>)}
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
