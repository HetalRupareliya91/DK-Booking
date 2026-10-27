import { Link } from 'react-router-dom';
import { cityTitle, citySummary } from '../../utils/cities';

export default function CityMobileCard({ item }) {
  return (
    <Link to={'/cities/' + item.id} className="mobile-card">
      <div className="thumb">🏙️</div>
      <div>
        <h3>{cityTitle(item)}</h3>
        <p className="muted">{citySummary(item)}</p>
      </div>
    </Link>
  );
}
