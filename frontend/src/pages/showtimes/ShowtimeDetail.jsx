import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getShowtime } from '../../api/showtimes';
import { showtimeTitle, showtimeValue } from '../../utils/showtimes';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/showtimes/:id', title: 'Showtime details', panel: 'user' };

const FIELDS = [['movie', 'Movie', 'text'], ['theatre', 'Theatre', 'text'], ['screen', 'Screen', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function ShowtimeDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getShowtime(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/showtimes" className="back">← Back to Showtimes</Link>
      <div className="detail-hero">
        <div className="detail-poster">⏰</div>
        <div>
          <h1>{showtimeTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{showtimeValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
