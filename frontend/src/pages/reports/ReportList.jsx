import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReports from '../../hooks/useReports';
import { reportTitle, reportSummary } from '../../utils/reports';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import '../../styles/modules/reports.css';

export const meta = { path: '/reports', title: 'Reports', panel: 'user', nav: false, icon: '📊' };

export default function ReportList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useReports({ q });

  return (
    <section className="page reports-page">
      <header className="page-head">
        <h1>📊 Reports</h1>
        <input className="search" placeholder="Search reports..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No reports found" />}
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/reports/' + item.id} className="card">
            <div className="card-poster">📊</div>
            <div className="card-body">
              <h3>{reportTitle(item)}</h3>
              <p className="muted">{reportSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
