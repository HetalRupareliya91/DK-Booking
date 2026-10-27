import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPayment } from '../../api/payments';
import { paymentTitle, paymentValue } from '../../utils/payments';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/payments/:id', title: 'Payment details', panel: 'user' };

const FIELDS = [['reference', 'Reference', 'text'], ['booking', 'Booking', 'text'], ['method', 'Method', 'text'], ['amount', 'Amount', 'number'], ['status', 'Status', 'text']];

export default function PaymentDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPayment(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/payments" className="back">← Back to Payments</Link>
      <div className="detail-hero">
        <div className="detail-poster">💳</div>
        <div>
          <h1>{paymentTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{paymentValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
