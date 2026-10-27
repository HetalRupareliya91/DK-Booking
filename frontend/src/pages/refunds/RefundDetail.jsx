import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRefund } from '../../api/refunds';
import { refundTitle, refundValue } from '../../utils/refunds';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/refunds/:id', title: 'Refund details', panel: 'user' };

const FIELDS = [['reference', 'Reference', 'text'], ['booking', 'Booking', 'text'], ['amount', 'Amount', 'number'], ['reason', 'Reason', 'text'], ['status', 'Status', 'text']];

export default function RefundDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRefund(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/refunds" className="back">← Back to Refunds</Link>
      <div className="detail-hero">
        <div className="detail-poster">↩️</div>
        <div>
          <h1>{refundTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{refundValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
