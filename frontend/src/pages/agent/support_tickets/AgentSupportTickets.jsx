import { useState } from 'react';
import useSupportTickets from '../../../hooks/useSupportTickets';
import SupportTicketCard from '../../../components/agent/SupportTicketCard';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/agent/support_tickets.css';

export const meta = { path: '/agent/support-tickets', title: 'Support Tickets', panel: 'agent', nav: true, icon: '🆘' };

export default function AgentSupportTickets() {
  const [q, setQ] = useState('');
  const { items, total, loading, error } = useSupportTickets({ q, limit: 50 });
  return (
    <section className="agent-support-tickets">
      <header className="page-head">
        <h1>🆘 Support Tickets</h1>
        <input className="search" placeholder="Find support tickets for a customer..." value={q} onChange={ev => setQ(ev.target.value)} />
      </header>
      <div className="stats">
        <div className="stat"><b>{total}</b>Total support tickets</div>
        <div className="stat"><b>{items.length}</b>Showing</div>
      </div>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      {!loading && !error && items.length === 0 && <Empty />}
      <div className="card-grid">
        {items.map(item => <SupportTicketCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
