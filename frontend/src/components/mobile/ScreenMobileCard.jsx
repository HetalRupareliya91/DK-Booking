import { Link } from 'react-router-dom';
import { screenTitle, screenSummary } from '../../utils/screens';

export default function ScreenMobileCard({ item }) {
  return (
    <Link to={'/screens/' + item.id} className="mobile-card">
      <div className="thumb">🖥️</div>
      <div>
        <h3>{screenTitle(item)}</h3>
        <p className="muted">{screenSummary(item)}</p>
      </div>
    </Link>
  );
}
