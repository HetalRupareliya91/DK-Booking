import { Link } from 'react-router-dom';
import { concertTitle, concertSummary } from '../../utils/concerts';

export default function ConcertMobileCard({ item }) {
  return (
    <Link to={'/concerts/' + item.id} className="mobile-card">
      <div className="thumb">🎤</div>
      <div>
        <h3>{concertTitle(item)}</h3>
        <p className="muted">{concertSummary(item)}</p>
      </div>
    </Link>
  );
}
