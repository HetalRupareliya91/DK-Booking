import { Link } from 'react-router-dom';
import { reviewTitle, reviewSummary } from '../../utils/reviews';

export default function ReviewMobileCard({ item }) {
  return (
    <Link to={'/reviews/' + item.id} className="mobile-card">
      <div className="thumb">⭐</div>
      <div>
        <h3>{reviewTitle(item)}</h3>
        <p className="muted">{reviewSummary(item)}</p>
      </div>
    </Link>
  );
}
