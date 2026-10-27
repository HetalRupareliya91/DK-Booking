import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLanguages from '../../hooks/useLanguages';
import { languageTitle, languageSummary } from '../../utils/languages';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import LanguageMobileCard from '../../components/mobile/LanguageMobileCard';
import '../../styles/mobile/languages.css';
import '../../styles/modules/languages.css';

export const meta = { path: '/languages', title: 'Languages', panel: 'user', nav: false, icon: '🗣️' };

export default function LanguageList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useLanguages({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page languages-page">
      <header className="page-head">
        <h1>🗣️ Languages</h1>
        <input className="search" placeholder="Search languages..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No languages found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <LanguageMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/languages/' + item.id} className="card">
            <div className="card-poster">🗣️</div>
            <div className="card-body">
              <h3>{languageTitle(item)}</h3>
              <p className="muted">{languageSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
