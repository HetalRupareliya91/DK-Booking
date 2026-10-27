import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { pages } from './router/registry';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import AgentLayout from './layouts/AgentLayout';
import NotFound from './pages/NotFound';

const LAYOUTS = { user: UserLayout, admin: AdminLayout, agent: AgentLayout };

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {pages.map(p => {
            const Layout = LAYOUTS[p.panel] || UserLayout;
            return <Route key={p.path} path={p.path} element={<Layout><p.Component /></Layout>} />;
          })}
          <Route path="*" element={<UserLayout><NotFound /></UserLayout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
