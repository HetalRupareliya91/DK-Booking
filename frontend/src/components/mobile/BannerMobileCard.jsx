import { Link } from 'react-router-dom';
import { bannerTitle, bannerSummary } from '../../utils/banners';

export default function BannerMobileCard({ item }) {
  return (
    <Link to={'/banners/' + item.id} className="mobile-card">
      <div className="thumb">🖼️</div>
      <div>
        <h3>{bannerTitle(item)}</h3>
        <p className="muted">{bannerSummary(item)}</p>
      </div>
    </Link>
  );
}
