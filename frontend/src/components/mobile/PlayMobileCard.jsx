import { Link } from 'react-router-dom';
import { playTitle, playSummary } from '../../utils/plays';

export default function PlayMobileCard({ item }) {
  return (
    <Link to={'/plays/' + item.id} className="mobile-card">
      <div className="thumb">🎭</div>
      <div>
        <h3>{playTitle(item)}</h3>
        <p className="muted">{playSummary(item)}</p>
      </div>
    </Link>
  );
}
