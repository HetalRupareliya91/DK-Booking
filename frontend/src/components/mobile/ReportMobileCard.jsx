import { Link } from 'react-router-dom';
import { reportTitle, reportSummary } from '../../utils/reports';

export default function ReportMobileCard({ item }) {
  return (
    <Link to={'/reports/' + item.id} className="mobile-card">
      <div className="thumb">📊</div>
      <div>
        <h3>{reportTitle(item)}</h3>
        <p className="muted">{reportSummary(item)}</p>
      </div>
    </Link>
  );
}
