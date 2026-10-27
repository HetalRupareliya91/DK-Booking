import { Link } from 'react-router-dom';
import { notificationTitle, notificationSummary } from '../../utils/notifications';

export default function NotificationMobileCard({ item }) {
  return (
    <Link to={'/notifications/' + item.id} className="mobile-card">
      <div className="thumb">🔔</div>
      <div>
        <h3>{notificationTitle(item)}</h3>
        <p className="muted">{notificationSummary(item)}</p>
      </div>
    </Link>
  );
}
