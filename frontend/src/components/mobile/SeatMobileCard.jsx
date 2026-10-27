import { Link } from 'react-router-dom';
import { seatTitle, seatSummary } from '../../utils/seats';

export default function SeatMobileCard({ item }) {
  return (
    <Link to={'/seats/' + item.id} className="mobile-card">
      <div className="thumb">💺</div>
      <div>
        <h3>{seatTitle(item)}</h3>
        <p className="muted">{seatSummary(item)}</p>
      </div>
    </Link>
  );
}
