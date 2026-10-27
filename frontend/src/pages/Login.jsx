import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const meta = { path: '/login', title: 'Sign in', panel: 'user' };

const HOME = { admin: '/admin', agent: '/agent', user: '/' };

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('user@dkbooking.in');
  const [password, setPassword] = useState('User@123');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const user = await login(email, password);
      navigate(HOME[user.role] || '/');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="login-page">
      <form className="login-card" onSubmit={submit}>
        <h1>Welcome to DK Booking</h1>
        <p className="muted">Sign in as a customer, agent or admin.</p>
        <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
        {error && <p className="error">{error}</p>}
        <button className="btn btn-primary" disabled={busy}>{busy ? 'Signing in...' : 'Sign in'}</button>
        <p className="muted small">Demo: admin@dkbooking.in / Admin@123 · agent@dkbooking.in / Agent@123</p>
      </form>
    </section>
  );
}
