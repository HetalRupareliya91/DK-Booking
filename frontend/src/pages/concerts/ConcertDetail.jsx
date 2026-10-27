import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getConcert } from '../../api/concerts';
import { concertTitle, concertValue } from '../../utils/concerts';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/concerts/:id', title: 'Concert details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['artist', 'Artist', 'text'], ['city', 'City', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function ConcertDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getConcert(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/concerts" className="back">← Back to Concerts</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎤</div>
        <div>
          <h1>{concertTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{concertValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
