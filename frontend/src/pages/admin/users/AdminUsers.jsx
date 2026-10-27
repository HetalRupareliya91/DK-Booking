import { useState } from 'react';
import useUsers from '../../../hooks/useUsers';
import { createUser, updateUser, deleteUser } from '../../../api/users';
import { userValue } from '../../../utils/users';
import UserForm from '../../../components/admin/UserForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/users.css';

export const meta = { path: '/admin/users', title: 'Users', panel: 'admin', nav: true, icon: '👤' };

const COLUMNS = [['name', 'Name', 'text'], ['email', 'Email', 'text'], ['phone', 'Phone', 'text'], ['city', 'City', 'text'], ['role', 'Role', 'text']];

export default function AdminUsers() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useUsers({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateUser(editing.id, data);
    else await createUser(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this user?')) return;
    await deleteUser(id);
    reload();
  };

  return (
    <section className="admin-page admin-users">
      <header className="page-head">
        <h1>👤 Users <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add user</button>
      </header>
      {editing && <UserForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{userValue(item, k)}</td>)}
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
