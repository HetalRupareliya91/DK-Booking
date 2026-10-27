import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOffer } from '../../api/offers';
import { offerTitle, offerValue } from '../../utils/offers';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/offers/:id', title: 'Offer details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['bank', 'Bank', 'text'], ['discountPct', 'Discount %', 'number'], ['validTill', 'Valid Till', 'date']];

export default function OfferDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOffer(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/offers" className="back">← Back to Offers</Link>
      <div className="detail-hero">
        <div className="detail-poster">🏷️</div>
        <div>
          <h1>{offerTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{offerValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
