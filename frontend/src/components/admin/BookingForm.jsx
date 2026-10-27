import { useState } from 'react';

const FIELDS = [['reference', 'Reference', 'text'], ['customer', 'Customer', 'text'], ['show', 'Show', 'text'], ['tickets', 'Tickets', 'number'], ['amount', 'Amount', 'number'], ['status', 'Status', 'text']];

export default function BookingForm({ initial = {}, onSubmit, onCancel }) {
  const [form, setForm] = useState(() => Object.fromEntries(FIELDS.map(([k, , type]) => [k, initial[k] ?? (type === 'checkbox' ? false : '')])));
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const change = (k, type) => ev => {
    const value = type === 'checkbox' ? ev.target.checked : ev.target.value;
    setForm(f => ({ ...f, [k]: value }));
  };

  const submit = async ev => {
    ev.preventDefault();
    const data = { ...form };
    FIELDS.forEach(([k, , type]) => { if (type === 'number' && data[k] !== '') data[k] = Number(data[k]); });
    setSaving(true);
    try { await onSubmit(data); } catch (err) { setError(err.message); } finally { setSaving(false); }
  };

  return (
    <form className="entity-form" onSubmit={submit}>
      <h3 className="form-title">{initial.id ? 'Edit booking' : 'New booking'}</h3>
      {FIELDS.map(([k, label, type], i) => (
        <label key={k} className={type === 'checkbox' ? 'check' : ''}>
          <span>{label}</span>
          {type === 'checkbox'
            ? <input type="checkbox" checked={!!form[k]} onChange={change(k, type)} />
            : <input type={type} value={form[k]} onChange={change(k, type)} required={i === 0} />}
        </label>
      ))}
      {error && <p className="error">{error}</p>}
      <div className="form-actions">
        <button type="button" className="btn" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
      </div>
    </form>
  );
}
