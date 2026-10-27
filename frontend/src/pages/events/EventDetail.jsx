import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEvent } from '../../api/events';
import { eventTitle, eventValue } from '../../utils/events';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/events/:id', title: 'Event details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['category', 'Category', 'text'], ['city', 'City', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function EventDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvent(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/events" className="back">← Back to Events</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎉</div>
        <div>
          <h1>{eventTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{eventValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
