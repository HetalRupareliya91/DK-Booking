import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pages } from './router/registry';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(p => <Route key={p.path} path={p.path} element={<p.Component />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
