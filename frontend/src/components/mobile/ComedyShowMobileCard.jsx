import { Link } from 'react-router-dom';
import { comedyShowTitle, comedyShowSummary } from '../../utils/comedy';

export default function ComedyShowMobileCard({ item }) {
  return (
    <Link to={'/comedy/' + item.id} className="mobile-card">
      <div className="thumb">😂</div>
      <div>
        <h3>{comedyShowTitle(item)}</h3>
        <p className="muted">{comedyShowSummary(item)}</p>
      </div>
    </Link>
  );
}
