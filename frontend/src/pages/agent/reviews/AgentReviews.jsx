import { useState } from 'react';
import useReviews from '../../../hooks/useReviews';
import ReviewCard from '../../../components/agent/ReviewCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/reviews.css';

export const meta = { path: '/agent/reviews', title: 'Reviews', panel: 'agent', nav: true, icon: '⭐' };

export default function AgentReviews() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useReviews({ q, limit: 50 });
  return (
    <section className="agent-reviews">
      <header className="page-head">
        <h1>⭐ Reviews</h1>
        <input className="search" placeholder="Find reviews for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total reviews</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <ReviewCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
