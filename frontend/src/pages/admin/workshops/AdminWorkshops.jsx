import { useState } from 'react';
import useWorkshops from '../../../hooks/useWorkshops';
import { createWorkshop, updateWorkshop, deleteWorkshop } from '../../../api/workshops';
import { workshopValue } from '../../../utils/workshops';
import WorkshopForm from '../../../components/admin/WorkshopForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/workshops.css';

export const meta = { path: '/admin/workshops', title: 'Workshops', panel: 'admin', nav: true, icon: '🛠️' };

const COLUMNS = [['title', 'Title', 'text'], ['host', 'Host', 'text'], ['mode', 'Mode', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminWorkshops() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useWorkshops({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateWorkshop(editing.id, data);
    else await createWorkshop(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this workshop?')) return;
    await deleteWorkshop(id);
    reload();
  };

  return (
    <section className="admin-page admin-workshops">
      <header className="page-head">
        <h1>🛠️ Workshops <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add workshop</button>
      </header>
      {editing && <WorkshopForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{workshopValue(item, k)}</td>)}
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
