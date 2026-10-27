import { Link } from 'react-router-dom';
import { refundTitle, refundSummary } from '../../utils/refunds';

export default function RefundMobileCard({ item }) {
  return (
    <Link to={'/refunds/' + item.id} className="mobile-card">
      <div className="thumb">↩️</div>
      <div>
        <h3>{refundTitle(item)}</h3>
        <p className="muted">{refundSummary(item)}</p>
      </div>
    </Link>
  );
}
