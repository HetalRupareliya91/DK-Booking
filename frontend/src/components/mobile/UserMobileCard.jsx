import { Link } from 'react-router-dom';
import { userTitle, userSummary } from '../../utils/users';

export default function UserMobileCard({ item }) {
  return (
    <Link to={'/users/' + item.id} className="mobile-card">
      <div className="thumb">👤</div>
      <div>
        <h3>{userTitle(item)}</h3>
        <p className="muted">{userSummary(item)}</p>
      </div>
    </Link>
  );
}
