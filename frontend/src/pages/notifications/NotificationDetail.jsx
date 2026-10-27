import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getNotification } from '../../api/notifications';
import { notificationTitle, notificationValue } from '../../utils/notifications';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/notifications/:id', title: 'Notification details', panel: 'user' };

const FIELDS = [['title', 'Title', 'text'], ['channel', 'Channel', 'text'], ['audience', 'Audience', 'text'], ['date', 'Date', 'date']];

export default function NotificationDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotification(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/notifications" className="back">← Back to Notifications</Link>
      <div className="detail-hero">
        <div className="detail-poster">🔔</div>
        <div>
          <h1>{notificationTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{notificationValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
