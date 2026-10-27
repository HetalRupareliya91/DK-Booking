import { Link } from 'react-router-dom';
import { paymentTitle, paymentSummary } from '../../utils/payments';

export default function PaymentMobileCard({ item }) {
  return (
    <Link to={'/payments/' + item.id} className="mobile-card">
      <div className="thumb">💳</div>
      <div>
        <h3>{paymentTitle(item)}</h3>
        <p className="muted">{paymentSummary(item)}</p>
      </div>
    </Link>
  );
}
