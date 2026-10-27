import Navbar from '../components/Navbar';
import MobileTabBar from '../components/MobileTabBar';
import '../styles/navbar.css';

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="app-main">{children}</main>
      <MobileTabBar />
    </>
  );
}
