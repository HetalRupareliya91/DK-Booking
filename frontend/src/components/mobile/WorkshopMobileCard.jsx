import { Link } from 'react-router-dom';
import { workshopTitle, workshopSummary } from '../../utils/workshops';

export default function WorkshopMobileCard({ item }) {
  return (
    <Link to={'/workshops/' + item.id} className="mobile-card">
      <div className="thumb">🛠️</div>
      <div>
        <h3>{workshopTitle(item)}</h3>
        <p className="muted">{workshopSummary(item)}</p>
      </div>
    </Link>
  );
}
