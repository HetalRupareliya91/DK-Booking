import { Link } from 'react-router-dom';
import { sportTitle, sportSummary } from '../../utils/sports';

export default function SportMobileCard({ item }) {
  return (
    <Link to={'/sports/' + item.id} className="mobile-card">
      <div className="thumb">🏏</div>
      <div>
        <h3>{sportTitle(item)}</h3>
        <p className="muted">{sportSummary(item)}</p>
      </div>
    </Link>
  );
}
