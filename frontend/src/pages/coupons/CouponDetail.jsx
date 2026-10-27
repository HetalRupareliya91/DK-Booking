import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCoupon } from '../../api/coupons';
import { couponTitle, couponValue } from '../../utils/coupons';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/coupons/:id', title: 'Coupon details', panel: 'user' };

const FIELDS = [['code', 'Code', 'text'], ['discountPct', 'Discount %', 'number'], ['maxDiscount', 'Max Discount', 'number'], ['active', 'Active', 'checkbox']];

export default function CouponDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCoupon(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/coupons" className="back">← Back to Coupons</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎫</div>
        <div>
          <h1>{couponTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{couponValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
