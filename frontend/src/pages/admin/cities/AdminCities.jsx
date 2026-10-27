import { useState } from 'react';
import useCities from '../../../hooks/useCities';
import { createCity, updateCity, deleteCity } from '../../../api/cities';
import { cityValue } from '../../../utils/cities';
import CityForm from '../../../components/admin/CityForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/cities.css';

export const meta = { path: '/admin/cities', title: 'Cities', panel: 'admin', nav: true, icon: '🏙️' };

const COLUMNS = [['name', 'Name', 'text'], ['state', 'State', 'text'], ['active', 'Active', 'checkbox']];

export default function AdminCities() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useCities({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateCity(editing.id, data);
    else await createCity(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this city?')) return;
    await deleteCity(id);
    reload();
  };

  return (
    <section className="admin-page admin-cities">
      <header className="page-head">
        <h1>🏙️ Cities <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add city</button>
      </header>
      {editing && <CityForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{cityValue(item, k)}</td>)}
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
