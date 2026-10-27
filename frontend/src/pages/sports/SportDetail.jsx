import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSport } from '../../api/sports';
import { sportTitle, sportValue } from '../../utils/sports';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/sports/:id', title: 'Sport details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['sport', 'Sport', 'text'], ['venue', 'Venue', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function SportDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSport(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/sports" className="back">← Back to Sports</Link>
      <div className="detail-hero">
        <div className="detail-poster">🏏</div>
        <div>
          <h1>{sportTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{sportValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
