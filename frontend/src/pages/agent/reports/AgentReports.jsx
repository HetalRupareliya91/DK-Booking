import { useState } from 'react';
import useReports from '../../../hooks/useReports';
import ReportCard from '../../../components/agent/ReportCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/reports.css';

export const meta = { path: '/agent/reports', title: 'Reports', panel: 'agent', nav: true, icon: '📊' };

export default function AgentReports() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useReports({ q, limit: 50 });
  return (
    <section className="agent-reports">
      <header className="page-head">
        <h1>📊 Reports</h1>
        <input className="search" placeholder="Find reports for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total reports</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <ReportCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
