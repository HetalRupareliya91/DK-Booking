import { Link } from 'react-router-dom';
import { eventTitle, eventSummary } from '../../utils/events';

export default function EventMobileCard({ item }) {
  return (
    <Link to={'/events/' + item.id} className="mobile-card">
      <div className="thumb">🎉</div>
      <div>
        <h3>{eventTitle(item)}</h3>
        <p className="muted">{eventSummary(item)}</p>
      </div>
    </Link>
  );
}
