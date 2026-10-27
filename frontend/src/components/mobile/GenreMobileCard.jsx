import { Link } from 'react-router-dom';
import { genreTitle, genreSummary } from '../../utils/genres';

export default function GenreMobileCard({ item }) {
  return (
    <Link to={'/genres/' + item.id} className="mobile-card">
      <div className="thumb">🎞️</div>
      <div>
        <h3>{genreTitle(item)}</h3>
        <p className="muted">{genreSummary(item)}</p>
      </div>
    </Link>
  );
}
