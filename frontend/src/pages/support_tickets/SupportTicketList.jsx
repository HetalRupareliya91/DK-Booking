import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSupportTickets from '../../hooks/useSupportTickets';
import { supportTicketTitle, supportTicketSummary } from '../../utils/support_tickets';
import { Loader, ErrorBox, Empty } from '../../components/ui/State';
import useIsMobile from '../../hooks/useIsMobile';
import SupportTicketMobileCard from '../../components/mobile/SupportTicketMobileCard';
import '../../styles/mobile/support_tickets.css';
import '../../styles/modules/support_tickets.css';

export const meta = { path: '/support-tickets', title: 'Support Tickets', panel: 'user', nav: false, icon: '🆘' };

export default function SupportTicketList() {
  const [q, setQ] = useState('');
  const { items, loading, error } = useSupportTickets({ q });
  const isMobile = useIsMobile();

  return (
    <section className="page support-tickets-page">
      <header className="page-head">
        <h1>🆘 Support Tickets</h1>
        <input className="search" placeholder="Search support tickets..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty label="No support tickets found" />}
      {isMobile ? (
        <div className="mobile-list">
          {items.map(item => <SupportTicketMobileCard key={item.id} item={item} />)}
        </div>
      ) : (
      <div className="card-grid">
        {items.map(item => (
          <Link key={item.id} to={'/support-tickets/' + item.id} className="card">
            <div className="card-poster">🆘</div>
            <div className="card-body">
              <h3>{supportTicketTitle(item)}</h3>
              <p className="muted">{supportTicketSummary(item)}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </section>
  );
}
