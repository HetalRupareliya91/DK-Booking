import { useState } from 'react';
import useReports from '../../../hooks/useReports';
import { createReport, updateReport, deleteReport } from '../../../api/reports';
import { reportValue } from '../../../utils/reports';
import ReportForm from '../../../components/admin/ReportForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/reports.css';

export const meta = { path: '/admin/reports', title: 'Reports', panel: 'admin', nav: true, icon: '📊' };

const COLUMNS = [['title', 'Title', 'text'], ['period', 'Period', 'text'], ['revenue', 'Revenue', 'number'], ['tickets', 'Tickets', 'number']];

export default function AdminReports() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useReports({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateReport(editing.id, data);
    else await createReport(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this report?')) return;
    await deleteReport(id);
    reload();
  };

  return (
    <section className="admin-page admin-reports">
      <header className="page-head">
        <h1>📊 Reports <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add report</button>
      </header>
      {editing && <ReportForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{reportValue(item, k)}</td>)}
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
