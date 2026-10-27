import { useState } from 'react';
import useNotifications from '../../../hooks/useNotifications';
import { createNotification, updateNotification, deleteNotification } from '../../../api/notifications';
import { notificationValue } from '../../../utils/notifications';
import NotificationForm from '../../../components/admin/NotificationForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/notifications.css';

export const meta = { path: '/admin/notifications', title: 'Notifications', panel: 'admin', nav: true, icon: '🔔' };

const COLUMNS = [['title', 'Title', 'text'], ['channel', 'Channel', 'text'], ['audience', 'Audience', 'text'], ['date', 'Date', 'date']];

export default function AdminNotifications() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useNotifications({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateNotification(editing.id, data);
    else await createNotification(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this notification?')) return;
    await deleteNotification(id);
    reload();
  };

  return (
    <section className="admin-page admin-notifications">
      <header className="page-head">
        <h1>🔔 Notifications <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add notification</button>
      </header>
      {editing && <NotificationForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{notificationValue(item, k)}</td>)}
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
