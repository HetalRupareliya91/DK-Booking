import { useState } from 'react';
import useTheatres from '../../../hooks/useTheatres';
import { createTheatre, updateTheatre, deleteTheatre } from '../../../api/theatres';
import { theatreValue } from '../../../utils/theatres';
import TheatreForm from '../../../components/admin/TheatreForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/theatres.css';

export const meta = { path: '/admin/theatres', title: 'Theatres', panel: 'admin', nav: true, icon: '🏛️' };

const COLUMNS = [['name', 'Name', 'text'], ['city', 'City', 'text'], ['address', 'Address', 'text'], ['screens', 'Screens', 'number']];

export default function AdminTheatres() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useTheatres({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateTheatre(editing.id, data);
    else await createTheatre(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this theatre?')) return;
    await deleteTheatre(id);
    reload();
  };

  return (
    <section className="admin-page admin-theatres">
      <header className="page-head">
        <h1>🏛️ Theatres <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add theatre</button>
      </header>
      {editing && <TheatreForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{theatreValue(item, k)}</td>)}
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
