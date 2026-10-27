import { useState } from 'react';
import useLanguages from '../../../hooks/useLanguages';
import { createLanguage, updateLanguage, deleteLanguage } from '../../../api/languages';
import { languageValue } from '../../../utils/languages';
import LanguageForm from '../../../components/admin/LanguageForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/languages.css';

export const meta = { path: '/admin/languages', title: 'Languages', panel: 'admin', nav: true, icon: '🗣️' };

const COLUMNS = [['name', 'Name', 'text'], ['code', 'Code', 'text']];

export default function AdminLanguages() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useLanguages({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateLanguage(editing.id, data);
    else await createLanguage(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this language?')) return;
    await deleteLanguage(id);
    reload();
  };

  return (
    <section className="admin-page admin-languages">
      <header className="page-head">
        <h1>🗣️ Languages <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add language</button>
      </header>
      {editing && <LanguageForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{languageValue(item, k)}</td>)}
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
