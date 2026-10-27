import { useState } from 'react';
import usePlays from '../../../hooks/usePlays';
import { createPlay, updatePlay, deletePlay } from '../../../api/plays';
import { playValue } from '../../../utils/plays';
import PlayForm from '../../../components/admin/PlayForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/plays.css';

export const meta = { path: '/admin/plays', title: 'Plays', panel: 'admin', nav: true, icon: '🎭' };

const COLUMNS = [['title', 'Title', 'text'], ['language', 'Language', 'text'], ['venue', 'Venue', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminPlays() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = usePlays({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updatePlay(editing.id, data);
    else await createPlay(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this play?')) return;
    await deletePlay(id);
    reload();
  };

  return (
    <section className="admin-page admin-plays">
      <header className="page-head">
        <h1>🎭 Plays <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add play</button>
      </header>
      {editing && <PlayForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{playValue(item, k)}</td>)}
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
