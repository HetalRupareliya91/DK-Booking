import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSupportTicket } from '../../api/support_tickets';
import { supportTicketTitle, supportTicketValue } from '../../utils/support_tickets';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/support-tickets/:id', title: 'SupportTicket details', panel: 'user' };

const FIELDS = [['subject', 'Subject', 'text'], ['customer', 'Customer', 'text'], ['priority', 'Priority', 'text'], ['status', 'Status', 'text']];

export default function SupportTicketDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSupportTicket(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/support-tickets" className="back">← Back to Support Tickets</Link>
      <div className="detail-hero">
        <div className="detail-poster">🆘</div>
        <div>
          <h1>{supportTicketTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{supportTicketValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
