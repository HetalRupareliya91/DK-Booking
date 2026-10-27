import { useState } from 'react';
import useEvents from '../../../hooks/useEvents';
import { createEvent, updateEvent, deleteEvent } from '../../../api/events';
import { eventValue } from '../../../utils/events';
import EventForm from '../../../components/admin/EventForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/events.css';

export const meta = { path: '/admin/events', title: 'Events', panel: 'admin', nav: true, icon: '🎉' };

const COLUMNS = [['title', 'Title', 'text'], ['category', 'Category', 'text'], ['city', 'City', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function AdminEvents() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useEvents({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateEvent(editing.id, data);
    else await createEvent(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this event?')) return;
    await deleteEvent(id);
    reload();
  };

  return (
    <section className="admin-page admin-events">
      <header className="page-head">
        <h1>🎉 Events <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add event</button>
      </header>
      {editing && <EventForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{eventValue(item, k)}</td>)}
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
