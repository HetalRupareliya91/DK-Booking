import { useState } from 'react';
import useCoupons from '../../../hooks/useCoupons';
import { createCoupon, updateCoupon, deleteCoupon } from '../../../api/coupons';
import { couponValue } from '../../../utils/coupons';
import CouponForm from '../../../components/admin/CouponForm';
import { Loader, ErrorBox, Empty } from '../../../components/ui/State';
import '../../../styles/admin/coupons.css';

export const meta = { path: '/admin/coupons', title: 'Coupons', panel: 'admin', nav: true, icon: '🎫' };

const COLUMNS = [['code', 'Code', 'text'], ['discountPct', 'Discount %', 'number'], ['maxDiscount', 'Max Discount', 'number'], ['active', 'Active', 'checkbox']];

export default function AdminCoupons() {
  const [q, setQ] = useState('');
  const { items, total, loading, error, reload } = useCoupons({ q, limit: 50 });
  const [editing, setEditing] = useState(null);

  const save = async data => {
    if (editing && editing.id) await updateCoupon(editing.id, data);
    else await createCoupon(data);
    setEditing(null);
    reload();
  };

  const remove = async id => {
    if (!window.confirm('Delete this coupon?')) return;
    await deleteCoupon(id);
    reload();
  };

  return (
    <section className="admin-page admin-coupons">
      <header className="page-head">
        <h1>🎫 Coupons <small>({total})</small></h1>
        <input className="search" placeholder="Search..." value={q} onChange={ev => setQ(ev.target.value)} />
        <button className="btn btn-primary" onClick={() => setEditing({})}>+ Add coupon</button>
      </header>
      {editing && <CouponForm initial={editing} onSubmit={save} onCancel={() => setEditing(null)} />}
      {loading ? <Loader /> : error ? <ErrorBox message={error} /> : items.length === 0 ? <Empty /> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>{COLUMNS.map(([k, label]) => <th key={k}>{label}</th>)}<th>Actions</th></tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  {COLUMNS.map(([k, label]) => <td key={k} data-label={label}>{couponValue(item, k)}</td>)}
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
