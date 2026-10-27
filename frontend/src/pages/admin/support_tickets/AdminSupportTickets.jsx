import { useState } from 'react';
import useSupportTickets from '../../../hooks/useSupportTickets';
import { createSupportTicket, updateSupportTicket, deleteSupportTicket } from '../../../api/support_tickets';
import { supportTicketValue } from '../../../utils/support_tickets';
import SupportTicketForm from '../../../components/admin/SupportTicketForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/support_tickets.css';

export const meta = { path: '/admin/support-tickets', title: 'Support Tickets', panel: 'admin', nav: true, icon: '🆘' };

const COLUMNS = [['subject', 'Subject', 'text'], ['customer', 'Customer', 'text'], ['priority', 'Priority', 'text'], ['status', 'Status', 'text']];

export default function AdminSupportTickets() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useSupportTickets({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateSupportTicket(editing.id, data);
    else await createSupportTicket(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this supportticket?')) return;
    await deleteSupportTicket(id);
    reload();
  };

  return (
    <section className="admin-page admin-support-tickets">
      <header className="page-head">
        <h1>🆘 Support Tickets <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add supportticket</button>
      </header>
      {editing && <SupportTicketForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{supportTicketValue(item, k)}</td>)}
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
