import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAgent } from '../../api/agents';
import { agentTitle, agentValue } from '../../utils/agents';
import { Loader, ErrorBox } from '../../components/ui/State';

export const meta = { path: '/agents/:id', title: 'Agent details', panel: 'user' };

const FIELDS = [['name', 'Name', 'text'], ['email', 'Email', 'text'], ['agency', 'Agency', 'text'], ['commissionPct', 'Commission %', 'number'], ['active', 'Active', 'checkbox']];

export default function AgentDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAgent(id).then(setItem).catch(err => setError(err.message));
  }, [id]);

  if (error) return <ErrorBox message={error} />;
  if (!item) return <Loader />;

  return (
    <section className="page detail-page">
      <Link to="/agents" className="back">← Back to Agents</Link>
      <div className="detail-hero">
        <div className="detail-poster">🧑‍💼</div>
        <div>
          <h1>{agentTitle(item)}</h1>
          <dl className="detail-list">
            {FIELDS.map(([k, label]) => (
              <div key={k}><dt>{label}</dt><dd>{agentValue(item, k)}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
