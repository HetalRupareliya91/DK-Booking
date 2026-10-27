import { Link } from 'react-router-dom';
import { theatreTitle, theatreSummary } from '../../utils/theatres';

export default function TheatreMobileCard({ item }) {
  return (
    <Link to={'/theatres/' + item.id} className="mobile-card">
      <div className="thumb">🏛️</div>
      <div>
        <h3>{theatreTitle(item)}</h3>
        <p className="muted">{theatreSummary(item)}</p>
      </div>
    </Link>
  );
}
