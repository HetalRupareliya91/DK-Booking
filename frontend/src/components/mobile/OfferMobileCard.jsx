import { Link } from 'react-router-dom';
import { offerTitle, offerSummary } from '../../utils/offers';

export default function OfferMobileCard({ item }) {
  return (
    <Link to={'/offers/' + item.id} className="mobile-card">
      <div className="thumb">🏷️</div>
      <div>
        <h3>{offerTitle(item)}</h3>
        <p className="muted">{offerSummary(item)}</p>
      </div>
    </Link>
  );
}
