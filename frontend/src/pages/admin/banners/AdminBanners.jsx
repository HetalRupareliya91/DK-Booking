import { useState } from 'react';
import useBanners from '../../../hooks/useBanners';
import { createBanner, updateBanner, deleteBanner } from '../../../api/banners';
import { bannerValue } from '../../../utils/banners';
import BannerForm from '../../../components/admin/BannerForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/banners.css';

export const meta = { path: '/admin/banners', title: 'Banners', panel: 'admin', nav: true, icon: '🖼️' };

const COLUMNS = [['title', 'Title', 'text'], ['placement', 'Placement', 'text'], ['active', 'Active', 'checkbox']];

export default function AdminBanners() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useBanners({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateBanner(editing.id, data);
    else await createBanner(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this banner?')) return;
    await deleteBanner(id);
    reload();
  };

  return (
    <section className="admin-page admin-banners">
      <header className="page-head">
        <h1>🖼️ Banners <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add banner</button>
      </header>
      {editing && <BannerForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{bannerValue(item, k)}</td>)}
                  <td className="actions" data-label="Actions">
                    <button onClick={() => setEditing(item)}>Edit</button>
                    <button className="danger" onClick={() => remove(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
