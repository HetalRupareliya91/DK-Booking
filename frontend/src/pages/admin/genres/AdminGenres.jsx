import { useState } from 'react';
import useGenres from '../../../hooks/useGenres';
import { createGenre, updateGenre, deleteGenre } from '../../../api/genres';
import { genreValue } from '../../../utils/genres';
import GenreForm from '../../../components/admin/GenreForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/genres.css';

export const meta = { path: '/admin/genres', title: 'Genres', panel: 'admin', nav: true, icon: '🎞️' };

const COLUMNS = [['name', 'Name', 'text'], ['description', 'Description', 'text']];

export default function AdminGenres() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useGenres({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateGenre(editing.id, data);
    else await createGenre(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this genre?')) return;
    await deleteGenre(id);
    reload();
  };

  return (
    <section className="admin-page admin-genres">
      <header className="page-head">
        <h1>🎞️ Genres <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add genre</button>
      </header>
      {editing && <GenreForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{genreValue(item, k)}</td>)}
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
