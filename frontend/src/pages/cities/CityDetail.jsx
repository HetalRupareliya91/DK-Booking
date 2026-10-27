import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCity } from '../../api/cities';
import { cityTitle, cityValue } from '../../utils/cities';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/cities/:id', title: 'City details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['state', 'State', 'text'], ['active', 'Active', 'checkbox']];

export default function CityDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCity(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/cities" className="back">← Back to Cities</Link>
      <div className="detail-hero">
        <div className="detail-poster">🏙️</div>
        <div>
          <h1>{cityTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{cityValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
