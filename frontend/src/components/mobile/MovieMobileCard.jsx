import { Link } from 'react-router-dom';
import { movieTitle, movieSummary } from '../../utils/movies';

export default function MovieMobileCard({ item }) {
  return (
    <Link to={'/movies/' + item.id} className="mobile-card">
      <div className="thumb">🎬</div>
      <div>
        <h3>{movieTitle(item)}</h3>
        <p className="muted">{movieSummary(item)}</p>
      </div>
    </Link>
  );
}
