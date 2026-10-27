import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBanner } from '../../api/banners';
import { bannerTitle, bannerValue } from '../../utils/banners';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/banners/:id', title: 'Banner details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['placement', 'Placement', 'text'], ['active', 'Active', 'checkbox']];

export default function BannerDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBanner(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/banners" className="back">← Back to Banners</Link>
      <div className="detail-hero">
        <div className="detail-poster">🖼️</div>
        <div>
          <h1>{bannerTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{bannerValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
