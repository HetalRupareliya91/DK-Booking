import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getReport } from '../../api/reports';
import { reportTitle, reportValue } from '../../utils/reports';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/reports/:id', title: 'Report details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['period', 'Period', 'text'], ['revenue', 'Revenue', 'number'], ['tickets', 'Tickets', 'number']];

export default function ReportDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReport(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/reports" className="back">← Back to Reports</Link>
      <div className="detail-hero">
        <div className="detail-poster">📊</div>
        <div>
          <h1>{reportTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{reportValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
