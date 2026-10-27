import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getReview } from '../../api/reviews';
import { reviewTitle, reviewValue } from '../../utils/reviews';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/reviews/:id', title: 'Review details', panel: 'user' };

const FIELDS = [['author', 'Author', 'text'], ['target', 'Target', 'text'], ['stars', 'Stars', 'number'], ['comment', 'Comment', 'text']];

export default function ReviewDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReview(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/reviews" className="back">← Back to Reviews</Link>
      <div className="detail-hero">
        <div className="detail-poster">⭐</div>
        <div>
          <h1>{reviewTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{reviewValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
