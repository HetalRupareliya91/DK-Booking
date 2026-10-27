import { useState } from 'react';
import useConcerts from '../../../hooks/useConcerts';
import { createConcert, updateConcert, deleteConcert } from '../../../api/concerts';
import { concertValue } from '../../../utils/concerts';
import ConcertForm from '../../../components/admin/ConcertForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/concerts.css';

export const meta = { path: '/admin/concerts', title: 'Concerts', panel: 'admin', nav: true, icon: '🎤' };

const COLUMNS = [['title', 'Title', 'text'], ['artist', 'Artist', 'text'], ['city', 'City', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminConcerts() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useConcerts({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateConcert(editing.id, data);
    else await createConcert(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this concert?')) return;
    await deleteConcert(id);
    reload();
  };

  return (
    <section className="admin-page admin-concerts">
      <header className="page-head">
        <h1>🎤 Concerts <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add concert</button>
      </header>
      {editing && <ConcertForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{concertValue(item, k)}</td>)}
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
