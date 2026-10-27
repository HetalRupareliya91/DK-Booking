import { useState } from 'react';
import useSports from '../../../hooks/useSports';
import { createSport, updateSport, deleteSport } from '../../../api/sports';
import { sportValue } from '../../../utils/sports';
import SportForm from '../../../components/admin/SportForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/sports.css';

export const meta = { path: '/admin/sports', title: 'Sports', panel: 'admin', nav: true, icon: '🏏' };

const COLUMNS = [['title', 'Title', 'text'], ['sport', 'Sport', 'text'], ['venue', 'Venue', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminSports() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useSports({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateSport(editing.id, data);
    else await createSport(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this sport?')) return;
    await deleteSport(id);
    reload();
  };

  return (
    <section className="admin-page admin-sports">
      <header className="page-head">
        <h1>🏏 Sports <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add sport</button>
      </header>
      {editing && <SportForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{sportValue(item, k)}</td>)}
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
