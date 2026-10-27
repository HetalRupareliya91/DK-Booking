import { Link } from 'react-router-dom';
import { venueTitle, venueSummary } from '../../utils/venues';

export default function VenueMobileCard({ item }) {
  return (
    <Link to={'/venues/' + item.id} className="mobile-card">
      <div className="thumb">📍</div>
      <div>
        <h3>{venueTitle(item)}</h3>
        <p className="muted">{venueSummary(item)}</p>
      </div>
    </Link>
  );
}
