import { Link } from 'react-router-dom';
import { couponTitle, couponSummary } from '../../utils/coupons';

export default function CouponMobileCard({ item }) {
  return (
    <Link to={'/coupons/' + item.id} className="mobile-card">
      <div className="thumb">🎫</div>
      <div>
        <h3>{couponTitle(item)}</h3>
        <p className="muted">{couponSummary(item)}</p>
      </div>
    </Link>
  );
}
