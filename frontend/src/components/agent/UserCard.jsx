import { useState } from 'react';
import { userTitle, userSummary } from '../../utils/users';

export default function UserCard({ item }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = window.location.origin + '/users/' + item.id;
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch (e) { window.prompt('Copy link', url); }
  };
  return (
    <div className="card agent-card">
      <div className="card-body">
        <h3>👤 {userTitle(item)}</h3>
        <p className="muted">{userSummary(item)}</p>
        <div className="agent-actions">
          <button className="btn" onClick={share}>{copied ? 'Link copied ✓' : 'Share with customer'}</button>
        </div>
      </div>
    </div>
  );
}
