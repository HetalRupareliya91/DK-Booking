import { Link } from 'react-router-dom';
import { showtimeTitle, showtimeSummary } from '../../utils/showtimes';

export default function ShowtimeMobileCard({ item }) {
  return (
    <Link to={'/showtimes/' + item.id} className="mobile-card">
      <div className="thumb">⏰</div>
      <div>
        <h3>{showtimeTitle(item)}</h3>
        <p className="muted">{showtimeSummary(item)}</p>
      </div>
    </Link>
  );
}
