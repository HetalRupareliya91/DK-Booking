import { useState } from 'react';
import useScreens from '../../../hooks/useScreens';
import { createScreen, updateScreen, deleteScreen } from '../../../api/screens';
import { screenValue } from '../../../utils/screens';
import ScreenForm from '../../../components/admin/ScreenForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/screens.css';

export const meta = { path: '/admin/screens', title: 'Screens', panel: 'admin', nav: true, icon: '🖥️' };

const COLUMNS = [['name', 'Name', 'text'], ['theatre', 'Theatre', 'text'], ['format', 'Format', 'text'], ['capacity', 'Capacity', 'number']];

export default function AdminScreens() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useScreens({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateScreen(editing.id, data);
    else await createScreen(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this screen?')) return;
    await deleteScreen(id);
    reload();
  };

  return (
    <section className="admin-page admin-screens">
      <header className="page-head">
        <h1>🖥️ Screens <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add screen</button>
      </header>
      {editing && <ScreenForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{screenValue(item, k)}</td>)}
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
