import { useEffect, useState } from 'react';

const SLIDES = [
  { title: 'Navratri Garba Nights', text: 'Book passes for the biggest garba events in your city', color: '#f84464' },
  { title: 'Blockbuster Fridays', text: 'Flat 20% off on movie tickets with DK100', color: '#6c3ce1' },
  { title: 'Live Cricket', text: 'Grab stadium seats before they sell out', color: '#0d9488' }
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(x => (x + 1) % SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);
  const s = SLIDES[i];
  return (
    <div className="hero" style={{ background: s.color }}>
      <h1>{s.title}</h1>
      <p>{s.text}</p>
      <div className="dots">{SLIDES.map((_, n) => <span key={n} className={n === i ? 'on' : ''} />)}</div>
    </div>
  );
}
