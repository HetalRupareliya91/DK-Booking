import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import { reviewTitle, reviewSummary } from '../../utils/reviews';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import ReviewMobileCard from '../../components/mobile/ReviewMobileCard';
import '../../styles/mobile/reviews.css';
import '../../styles/modules/reviews.css';

export const meta = { path: '/reviews', title: 'Reviews', panel: 'user', nav: false, icon: '⭐' };

export default function ReviewList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useReviews({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page reviews-page">
      <header className="page-head">
        <h1>⭐ Reviews</h1>
        <input className="search" placeholder="Search reviews..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No reviews found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <ReviewMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/reviews/' + item.id} className="card">
            <div className="card-poster">⭐</div>
            <div className="card-body">
              <h3>{reviewTitle(item)}</h3>
              <p className="muted">{reviewSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
