import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlay } from '../../api/plays';
import { playTitle, playValue } from '../../utils/plays';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/plays/:id', title: 'Play details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['language', 'Language', 'text'], ['venue', 'Venue', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function PlayDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPlay(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/plays" className="back">← Back to Plays</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎭</div>
        <div>
          <h1>{playTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{playValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
