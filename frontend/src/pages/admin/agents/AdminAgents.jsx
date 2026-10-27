import { useState } from 'react';
import useAgents from '../../../hooks/useAgents';
import { createAgent, updateAgent, deleteAgent } from '../../../api/agents';
import { agentValue } from '../../../utils/agents';
import AgentForm from '../../../components/admin/AgentForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/agents.css';

export const meta = { path: '/admin/agents', title: 'Agents', panel: 'admin', nav: true, icon: '🧑‍💼' };

const COLUMNS = [['name', 'Name', 'text'], ['email', 'Email', 'text'], ['agency', 'Agency', 'text'], ['commissionPct', 'Commission %', 'number'], ['active', 'Active', 'checkbox']];

export default function AdminAgents() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useAgents({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateAgent(editing.id, data);
    else await createAgent(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this agent?')) return;
    await deleteAgent(id);
    reload();
  };

  return (
    <section className="admin-page admin-agents">
      <header className="page-head">
        <h1>🧑‍💼 Agents <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add agent</button>
      </header>
      {editing && <AgentForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{agentValue(item, k)}</td>)}
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
