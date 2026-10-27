import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { api } from '../api/client';
import { formatINR } from '../utils/format';
import '../styles/home.css';

export const meta = { path: '/', title: 'Home', panel: 'user' };

const CATEGORIES = [
  ['/movies', '🎬', 'Movies'], ['/events', '🎉', 'Events'], ['/plays', '🎭', 'Plays'],
  ['/sports', '🏏', 'Sports'], ['/concerts', '🎤', 'Concerts'], ['/comedy', '😂', 'Comedy'], ['/workshops', '🛠️', 'Workshops']
];

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => { api('/api/movies?limit=8').then(r => setMovies(r.items || [])).catch(() => setMovies([])); }, []);
  return (
    <>
      <Hero />
      <div className="category-strip">
        {CATEGORIES.map(([to, icon, text]) => (
          <Link key={to} to={to} className="category-chip"><span>{icon}</span>{text}</Link>
        ))}
      </div>
      <h2>Recommended movies</h2>
      <div className="card-grid">
        {movies.map(m => (
          <Link key={m.id} to={'/movies/' + m.id} className="card">
            <div className="card-poster">🎬</div>
            <div className="card-body"><h3>{m.title}</h3><p className="muted">{m.genre} · {formatINR(m.price)}</p></div>
          </Link>
        ))}
      </div>
    </>
  );
}
