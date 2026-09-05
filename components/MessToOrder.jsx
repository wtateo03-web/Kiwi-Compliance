'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useScrollProgress } from './hooks';
import { Spreadsheet, Email, Certificate, Calendar, Engineer, Folder } from './Icons';

/* Scattered start positions, in % of the stage. */
const MESS = [
  { Icon: Spreadsheet, kind: 'Excel',    label: 'Asset register FINAL v4.xlsx',        x: 8,  y: 14, rot: -5 },
  { Icon: Email,       kind: 'Email',    label: 'Does anyone have the latest certificate?', x: 55, y: 6,  rot: 3.5 },
  { Icon: Certificate, kind: 'PDF',      label: 'LOLER Certificate — Unit 3',          x: 4,  y: 54, rot: 4 },
  { Icon: Calendar,    kind: 'Calendar', label: 'Inspection overdue',                  x: 64, y: 48, rot: -4.5 },
  { Icon: Engineer,    kind: 'Supplier', label: 'ABC Testing Ltd',                     x: 30, y: 76, rot: 2.5 },
  { Icon: Folder,      kind: 'Folder',   label: 'Compliance 2025',                     x: 72, y: 78, rot: -2.5 },
];

const REGISTER = [
  ['GL-04',     'LOLER thorough examination', 'Defect found, repaired, re-examined', 'Closed',        'current'],
  ['LEV-0148',  'COSHH reg. 9 examination',   'Booked, attended, evidence filed',    'Closed',        'current'],
  ['PV-0119',   'PSSR first examination',     'Found on site, added, examined',      'Closed',        'current'],
  ['LIFT-008',  'LOLER thorough examination', 'Provider instructed, slot confirmed', 'Booked 14 Sep', 'due'],
  ['EICR-0130', 'Fixed wire remedial',        'Quote chased — day 9, escalated',     'In progress',   'action'],
];

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function MessToOrder() {
  const [sectionRef, p] = useScrollProgress();
  const stageRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // The objects collapse over the first two-thirds; the register resolves after.
  const collapse = easeInOut(clamp01(p / 0.62));
  const resolve = easeInOut(clamp01((p - 0.40) / 0.34));

  return (
    <section className="mess" ref={sectionRef}>
      <div className="mess-sticky">
        <div className="container">
          <div className="mess-heads">
            <h2 className="h2 mess-head" style={{ opacity: 1 - clamp01(p / 0.45) }}>
              Compliance arrives from everywhere, owned by nobody.
            </h2>
            <h2 className="h2 mess-head mess-head-2" style={{ opacity: clamp01((p - 0.45) / 0.3) }}>
              Kiwi holds it as one record, and keeps every asset in date.
            </h2>
          </div>

          <div className="mess-stage" ref={stageRef}>
            {MESS.map(({ Icon, kind, label, x, y, rot }) => {
              // Everything converges on the middle of the stage as you scroll.
              const dx = ((50 - x) / 100) * size.w * collapse;
              const dy = ((50 - y) / 100) * size.h * collapse;
              return (
                <div
                  key={label}
                  className="mess-item"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(${dx}px, ${dy}px) rotate(${rot * (1 - collapse)}deg) scale(${1 - 0.28 * collapse})`,
                    opacity: 1 - clamp01(collapse * 1.35),
                  }}
                >
                  <Icon className="mess-item-icon" width="15" height="15" />
                  <span className="mess-item-text">
                    <span className="mess-item-kind">{kind}</span>
                    {label}
                  </span>
                </div>
              );
            })}

            <div
              className="mess-register"
              style={{ opacity: resolve, transform: `scale(${0.965 + 0.035 * resolve})` }}
              aria-hidden={resolve < 0.5}
            >
              <div className="register-head">
                <span className="register-title">Every obligation, run to closed</span>
                <span className="register-meta mono">14 sites · 2,438 assets · 0 overdue</span>
              </div>
              <div className="register-scroll">
                <table className="register-table">
                  <thead>
                    <tr><th>Asset</th><th>Obligation</th><th>What Kiwi did</th><th>State</th></tr>
                  </thead>
                  <tbody>
                    {REGISTER.map(([id, obligation, did, state, tone], i) => (
                      <tr
                        key={id}
                        style={{
                          opacity: clamp01((resolve - i * 0.09) * 3),
                          transform: `translateY(${(1 - clamp01((resolve - i * 0.09) * 3)) * 5}px)`,
                        }}
                      >
                        <td className="mono register-id">{id}</td>
                        <td>{obligation}</td>
                        <td className="register-did">{did}</td>
                        <td>
                          <span className="status">
                            <span className={`dot is-${tone}`} />
                            {state}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="mess-caption muted" style={{ opacity: resolve }}>
            The same estate. One record, one owner, and a state you can prove on any date.
          </p>
        </div>
      </div>
    </section>
  );
}
