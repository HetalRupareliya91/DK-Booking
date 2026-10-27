import { useMemo, useState } from 'react';
import useSeats from '../../hooks/useSeats';
import { Loader, ErrorBox } from '../../components/ui/State';
import { formatINR } from '../../utils/format';
import useIsMobile from '../../hooks/useIsMobile';
import '../../styles/mobile/seats.css';
import '../../styles/modules/seats.css';

export const meta = { path: '/seats', title: 'Select seats', panel: 'user', nav: false, icon: '💺' };

export default function SeatList() {
  const { items, loading, error } = useSeats({ limit: 100 });
  const [picked, setPicked] = useState([]);
  const isMobile = useIsMobile();

  const rows = useMemo(() => items.reduce((acc, s) => {
    (acc[s.row] = acc[s.row] || []).push(s);
    return acc;
  }, {}), [items]);

  const toggle = seat => {
    if (seat.status === 'booked') return;
    setPicked(p => (p.includes(seat.id) ? p.filter(x => x !== seat.id) : p.length >= 10 ? p : [...p, seat.id]));
  };

  const total = items.filter(s => picked.includes(s.id)).reduce((sum, s) => sum + Number(s.price || 0), 0);

  return (
    <section className={'page seats-page' + (isMobile ? ' compact' : '')}>
      <h1>💺 Select your seats</h1>
      {loading && <Loader />}
      {error && <ErrorBox message={error} />}
      <div className="seat-map">
        {Object.keys(rows).sort().reverse().map(r => (
          <div className="seat-row" key={r}>
            <span className="row-label">{r}</span>
            {rows[r].sort((a, b) => a.number - b.number).map(s => (
              <button
                key={s.id}
                className={'seat ' + s.status + (picked.includes(s.id) ? ' picked' : '')}
                onClick={() => toggle(s)}
                title={s.category + ' · ' + formatINR(s.price)}
              >
                {s.number}
              </button>
            ))}
          </div>
        ))}
        <div className="screen">All eyes this way please!</div>
      </div>
      <div className="seat-legend">
        <span><i className="seat available" /> Available</span>
        <span><i className="seat picked" /> Selected</span>
        <span><i className="seat booked" /> Sold</span>
      </div>
      <div className="pay-bar">
        <span>{picked.length} seat(s) · {formatINR(total)}</span>
        <button className="btn btn-primary" disabled={!picked.length}>Pay {formatINR(total)}</button>
      </div>
    </section>
  );
}
