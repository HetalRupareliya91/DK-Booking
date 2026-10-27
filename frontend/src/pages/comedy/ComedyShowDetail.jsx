import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getComedyShow } from '../../api/comedy';
import { comedyShowTitle, comedyShowValue } from '../../utils/comedy';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/comedy/:id', title: 'ComedyShow details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['comedian', 'Comedian', 'text'], ['venue', 'Venue', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function ComedyShowDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getComedyShow(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/comedy" className="back">← Back to Comedy Shows</Link>
      <div className="detail-hero">
        <div className="detail-poster">😂</div>
        <div>
          <h1>{comedyShowTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{comedyShowValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
