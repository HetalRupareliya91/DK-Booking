import { Link } from 'react-router-dom';
import { agentTitle, agentSummary } from '../../utils/agents';

export default function AgentMobileCard({ item }) {
  return (
    <Link to={'/agents/' + item.id} className="mobile-card">
      <div className="thumb">🧑‍💼</div>
      <div>
        <h3>{agentTitle(item)}</h3>
        <p className="muted">{agentSummary(item)}</p>
      </div>
    </Link>
  );
}
