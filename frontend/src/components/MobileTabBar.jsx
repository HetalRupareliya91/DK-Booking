import { NavLink } from 'react-router-dom';

const TABS = [
  ['/', '🏠', 'Home'],
  ['/movies', '🎬', 'Movies'],
  ['/events', '🎉', 'Events'],
  ['/bookings', '🎟️', 'Tickets'],
  ['/login', '👤', 'Profile']
];

export default function MobileTabBar() {
  return (
    <nav className="tabbar">
      {TABS.map(([to, icon, text]) => (
        <NavLink key={to} to={to} end={to === '/'}>
          <span className="tab-icon">{icon}</span>
          <span>{text}</span>
        </NavLink>
      ))}
    </nav>
  );
}
