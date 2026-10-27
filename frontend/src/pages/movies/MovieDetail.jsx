import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovie } from '../../api/movies';
import { movieTitle, movieValue } from '../../utils/movies';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/movies/:id', title: 'Movie details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['language', 'Language', 'text'], ['genre', 'Genre', 'text'], ['durationMins', 'Duration  (mins)', 'number'], ['certificate', 'Certificate', 'text'], ['price', 'Price', 'number']];

export default function MovieDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovie(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/movies" className="back">← Back to Movies</Link>
      <div className="detail-hero">
        <div className="detail-poster">🎬</div>
        <div>
          <h1>{movieTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{movieValue(item, k)}</dd></div>
            ))}
          </dl>
          <Link className="btn btn-primary" to={'/seats?show=' + item.id}>Book tickets</Link>
        </div>
      </div>
    </section>
  );
}
