import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTheatre } from '../../api/theatres';
import { theatreTitle, theatreValue } from '../../utils/theatres';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/theatres/:id', title: 'Theatre details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['city', 'City', 'text'], ['address', 'Address', 'text'], ['screens', 'Screens', 'number']];

export default function TheatreDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTheatre(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/theatres" className="back">← Back to Theatres</Link>
      <div className="detail-hero">
        <div className="detail-poster">🏛️</div>
        <div>
          <h1>{theatreTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{theatreValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
