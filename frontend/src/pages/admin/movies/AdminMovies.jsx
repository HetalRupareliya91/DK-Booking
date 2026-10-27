import { useState } from 'react';
import useMovies from '../../../hooks/useMovies';
import { createMovie, updateMovie, deleteMovie } from '../../../api/movies';
import { movieValue } from '../../../utils/movies';
import MovieForm from '../../../components/admin/MovieForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/movies.css';

export const meta = { path: '/admin/movies', title: 'Movies', panel: 'admin', nav: true, icon: '🎬' };

const COLUMNS = [['title', 'Title', 'text'], ['language', 'Language', 'text'], ['genre', 'Genre', 'text'], ['durationMins', 'Duration  (mins)', 'number'], ['certificate', 'Certificate', 'text'], ['price', 'Price', 'number']];

export default function AdminMovies() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useMovies({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateMovie(editing.id, data);
    else await createMovie(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this movie?')) return;
    await deleteMovie(id);
    reload();
  };

  return (
    <section className="admin-page admin-movies">
      <header className="page-head">
        <h1>🎬 Movies <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add movie</button>
      </header>
      {editing && <MovieForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{movieValue(item, k)}</td>)}
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
