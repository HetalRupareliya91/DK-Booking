import { useState } from 'react';
import useComedyShows from '../../../hooks/useComedyShows';
import { createComedyShow, updateComedyShow, deleteComedyShow } from '../../../api/comedy';
import { comedyShowValue } from '../../../utils/comedy';
import ComedyShowForm from '../../../components/admin/ComedyShowForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/comedy.css';

export const meta = { path: '/admin/comedy', title: 'Comedy Shows', panel: 'admin', nav: true, icon: '😂' };

const COLUMNS = [['title', 'Title', 'text'], ['comedian', 'Comedian', 'text'], ['venue', 'Venue', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminComedyShows() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useComedyShows({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateComedyShow(editing.id, data);
    else await createComedyShow(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this comedyshow?')) return;
    await deleteComedyShow(id);
    reload();
  };

  return (
    <section className="admin-page admin-comedy">
      <header className="page-head">
        <h1>😂 Comedy Shows <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add comedyshow</button>
      </header>
      {editing && <ComedyShowForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{comedyShowValue(item, k)}</td>)}
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
