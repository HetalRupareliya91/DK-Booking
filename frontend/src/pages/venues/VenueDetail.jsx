import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVenue } from '../../api/venues';
import { venueTitle, venueValue } from '../../utils/venues';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/venues/:id', title: 'Venue details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['city', 'City', 'text'], ['type', 'Type', 'text'], ['capacity', 'Capacity', 'number']];

export default function VenueDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVenue(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/venues" className="back">← Back to Venues</Link>
      <div className="detail-hero">
        <div className="detail-poster">📍</div>
        <div>
          <h1>{venueTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{venueValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
