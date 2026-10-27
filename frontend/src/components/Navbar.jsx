import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navFor } from '../router/registry';
import { useAuth } from '../context/AuthContext';

const CITIES = ['Surat', 'Mumbai', 'Ahmedabad', 'Delhi', 'Bengaluru', 'Pune'];

export default function Navbar() {
  const { user, logout } = useAuth() || {};
  const [city, setCity] = useState(() => localStorage.getItem('dk_city') || 'Surat');
  const pickCity = e => { setCity(e.target.value); localStorage.setItem('dk_city', e.target.value); };
  return (
    <header className="navbar">
      <div className="navbar-top">
        <Link to="/" className="logo">DK<span>Booking</span></Link>
        <input className="nav-search" placeholder="Search for movies, events, plays, sports..." />
        <select value={city} onChange={pickCity} className="city-select">
          {CITIES.map(c => <option key={c}>{c}</option>)}
        </select>
        {user ? (
          <div className="nav-user">
            {user.role === 'admin' && <Link to="/admin">Admin</Link>}
            {user.role === 'agent' && <Link to="/agent">Agent</Link>}
            <span>Hi, {user.name}</span>
            <button className="btn" onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link className="btn btn-primary" to="/login">Sign in</Link>
        )}
      </div>
      <nav className="navbar-links">
        {navFor('user').map(p => <NavLink key={p.path} to={p.path}>{p.title}</NavLink>)}
      </nav>
    </header>
  );
}
