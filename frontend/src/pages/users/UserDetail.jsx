import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../api/users';
import { userTitle, userValue } from '../../utils/users';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/users/:id', title: 'User details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['email', 'Email', 'text'], ['phone', 'Phone', 'text'], ['city', 'City', 'text'], ['role', 'Role', 'text']];

export default function UserDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/users" className="back">← Back to Users</Link>
      <div className="detail-hero">
        <div className="detail-poster">👤</div>
        <div>
          <h1>{userTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{userValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
