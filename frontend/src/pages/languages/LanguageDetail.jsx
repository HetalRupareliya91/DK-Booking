import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLanguage } from '../../api/languages';
import { languageTitle, languageValue } from '../../utils/languages';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/languages/:id', title: 'Language details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['code', 'Code', 'text']];

export default function LanguageDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLanguage(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/languages" className="back">← Back to Languages</Link>
      <div className="detail-hero">
        <div className="detail-poster">🗣️</div>
        <div>
          <h1>{languageTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{languageValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
