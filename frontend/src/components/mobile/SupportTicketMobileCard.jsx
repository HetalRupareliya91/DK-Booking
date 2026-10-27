import { Link } from 'react-router-dom';
import { supportTicketTitle, supportTicketSummary } from '../../utils/support_tickets';

export default function SupportTicketMobileCard({ item }) {
  return (
    <Link to={'/support-tickets/' + item.id} className="mobile-card">
      <div className="thumb">🆘</div>
      <div>
        <h3>{supportTicketTitle(item)}</h3>
        <p className="muted">{supportTicketSummary(item)}</p>
      </div>
    </Link>
  );
}
