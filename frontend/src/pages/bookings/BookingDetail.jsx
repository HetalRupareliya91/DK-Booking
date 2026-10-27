import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBooking } from '../../api/bookings';
import { bookingTitle, bookingValue } from '../../utils/bookings';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/bookings/:id', title: 'Booking details', panel: 'user' };

const FIELDS = [['reference', 'Reference', 'text'], ['customer', 'Customer', 'text'], ['show', 'Show', 'text'], ['tickets', 'Tickets', 'number'], ['amount', 'Amount', 'number'], ['status', 'Status', 'text']];

export default function BookingDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooking(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/bookings" className="back">← Back to Bookings</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎟️</div>
        <div>
          <h1>{bookingTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{bookingValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
