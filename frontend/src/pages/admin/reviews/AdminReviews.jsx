import { useState } from 'react';
import useReviews from '../../../hooks/useReviews';
import { createReview, updateReview, deleteReview } from '../../../api/reviews';
import { reviewValue } from '../../../utils/reviews';
import ReviewForm from '../../../components/admin/ReviewForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/reviews.css';

export const meta = { path: '/admin/reviews', title: 'Reviews', panel: 'admin', nav: true, icon: '⭐' };

const COLUMNS = [['author', 'Author', 'text'], ['target', 'Target', 'text'], ['stars', 'Stars', 'number'], ['comment', 'Comment', 'text']];

export default function AdminReviews() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useReviews({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateReview(editing.id, data);
    else await createReview(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this review?')) return;
    await deleteReview(id);
    reload();
  };

  return (
    <section className="admin-page admin-reviews">
      <header className="page-head">
        <h1>⭐ Reviews <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add review</button>
      </header>
      {editing && <ReviewForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{reviewValue(item, k)}</td>)}
                  <td className="actions" data-label="Actions">
                    <button onClick={() => setEditing(item)}>Edit</button>
                    <button className="danger" onClick={() => remove(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
