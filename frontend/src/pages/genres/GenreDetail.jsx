import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGenre } from '../../api/genres';
import { genreTitle, genreValue } from '../../utils/genres';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/genres/:id', title: 'Genre details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['description', 'Description', 'text']];

export default function GenreDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGenre(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/genres" className="back">← Back to Genres</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎞️</div>
        <div>
          <h1>{genreTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{genreValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
