import { Link } from 'react-router-dom';
import { bookingTitle, bookingSummary } from '../../utils/bookings';

export default function BookingMobileCard({ item }) {
  return (
    <Link to={'/bookings/' + item.id} className="mobile-card">
      <div className="thumb">🎟️</div>
      <div>
        <h3>{bookingTitle(item)}</h3>
        <p className="muted">{bookingSummary(item)}</p>
      </div>
    </Link>
  );
}
