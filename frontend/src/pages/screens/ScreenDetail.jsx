import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getScreen } from '../../api/screens';
import { screenTitle, screenValue } from '../../utils/screens';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/screens/:id', title: 'Screen details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['theatre', 'Theatre', 'text'], ['format', 'Format', 'text'], ['capacity', 'Capacity', 'number']];

export default function ScreenDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getScreen(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/screens" className="back">← Back to Screens</Link>
      <div className="detail-hero">
        <div className="detail-poster">🖥️</div>
        <div>
          <h1>{screenTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{screenValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
