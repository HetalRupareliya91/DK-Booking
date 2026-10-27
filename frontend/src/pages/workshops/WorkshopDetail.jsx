import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getWorkshop } from '../../api/workshops';
import { workshopTitle, workshopValue } from '../../utils/workshops';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/workshops/:id', title: 'Workshop details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['host', 'Host', 'text'], ['mode', 'Mode', 'text'], ['date', 'Date', 'date'], ['price', 'Price', 'number']];

export default function WorkshopDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWorkshop(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/workshops" className="back">← Back to Workshops</Link>
      <div className="detail-hero">
        <div className="detail-poster">🛠️</div>
        <div>
          <h1>{workshopTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{workshopValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
