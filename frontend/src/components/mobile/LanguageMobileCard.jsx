import { Link } from 'react-router-dom';
import { languageTitle, languageSummary } from '../../utils/languages';

export default function LanguageMobileCard({ item }) {
  return (
    <Link to={'/languages/' + item.id} className="mobile-card">
      <div className="thumb">🗣️</div>
      <div>
        <h3>{languageTitle(item)}</h3>
        <p className="muted">{languageSummary(item)}</p>
      </div>
    </Link>
  );
}
