import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSeat } from '../../api/seats';
import { seatTitle, seatValue } from '../../utils/seats';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/seats/:id', title: 'Seat details', panel: 'user' };

const FIELDS = [['row', 'Row', 'text'], ['number', 'Number', 'number'], ['category', 'Category', 'text'], ['price', 'Price', 'number'], ['status', 'Status', 'text']];

export default function SeatDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSeat(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/seats" className="back">← Back to Seats</Link>
      <div className="detail-hero">
        <div className="detail-poster">💺</div>
        <div>
          <h1>{seatTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{seatValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
