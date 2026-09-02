'use client';

import { useInView, useCountUp } from './hooks';
import { Spreadsheet, Certificate, Email, Calendar, Invoice, Tick } from './Icons';

const INPUTS = [
  { Icon: Spreadsheet, label: 'Site Register.xlsx', kind: 'Spreadsheet' },
  { Icon: Certificate, label: 'LOLER Certificate.pdf', kind: 'Certificate' },
  { Icon: Email, label: 'RE: annual inspection', kind: 'Email' },
  { Icon: Calendar, label: 'Inspection due — 18 Sep', kind: 'Reminder' },
  { Icon: Invoice, label: 'ABC Testing Ltd — invoice', kind: 'Invoice' },
];

const OUTPUTS = [
  'Inspector arranged',
  'Inspection completed',
  'Certificate stored',
  'Next due 18 Sep 2027',
  'Compliance record updated',
];

const STATS = [
  { value: 2438, label: 'Assets' },
  { value: 14, label: 'Sites' },
  { value: 119, label: 'Due soon' },
  { value: 28, label: 'Actions' },
];

/* Five lanes converging on the centre, then fanning back out. */
const LANES = [26, 78, 130, 182, 234];

function Stat({ value, label, active, delay }) {
  const n = useCountUp(value, active, 900);
  return (
    <div className="core-stat" style={{ transitionDelay: `${delay}ms` }}>
      <span className="core-stat-n mono">{n.toLocaleString('en-GB')}</span>
      <span className="core-stat-l">{label}</span>
    </div>
  );
}

export default function HeroFlow() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <figure ref={ref} className={`flow${inView ? ' in' : ''}`} aria-labelledby="flow-cap">
      <figcaption id="flow-cap" className="sr-only">
        Scattered compliance records — spreadsheets, certificates, emails, reminders and invoices — feed
        into Kiwi, which arranges the inspection, stores the certificate, sets the next due date and
        updates the compliance record.
      </figcaption>

      {/* ---------------------------------------------------------- inputs */}
      <div className="flow-side flow-inputs">
        <p className="flow-label">What you have now</p>
        <ul>
          {INPUTS.map(({ Icon, label, kind }, i) => (
            <li key={label} className="flow-chip" style={{ transitionDelay: `${i * 80}ms` }}>
              <Icon className="flow-chip-icon" width="15" height="15" />
              <span className="flow-chip-text">
                <span className="flow-chip-kind">{kind}</span>
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <span className="flow-arrow" aria-hidden="true">↓</span>

      <svg className="flow-link" viewBox="0 0 34 260" preserveAspectRatio="none" aria-hidden="true">
        {LANES.map((y, i) => (
          <path
            key={y}
            className="draw"
            style={{ '--len': 60, transitionDelay: `${420 + i * 70}ms` }}
            d={`M0 ${y} C 14 ${y} 20 130 34 130`}
            stroke="var(--border-strong)"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* ------------------------------------------------------------ core */}
      <div className="flow-core">
        <div className="core-head">
          <span className="core-brand">KIWI</span>
          <span className="core-sub">Compliance operating system</span>
        </div>

        <div className="core-body">
          <div className="core-stats">
            {STATS.map((s, i) => (
              <Stat key={s.label} {...s} active={inView} delay={700 + i * 60} />
            ))}
          </div>

          <div className="core-process">
            <div className="core-process-bar"><span /></div>
            <p className="core-process-text">
              <Tick className="core-process-tick" width="13" height="13" />
              Records structured
            </p>
          </div>
        </div>
      </div>

      <span className="flow-arrow" aria-hidden="true">↓</span>

      <svg className="flow-link" viewBox="0 0 34 260" preserveAspectRatio="none" aria-hidden="true">
        {LANES.map((y, i) => (
          <path
            key={y}
            className="draw"
            style={{ '--len': 60, transitionDelay: `${1250 + i * 70}ms` }}
            d={`M0 130 C 14 130 20 ${y} 34 ${y}`}
            stroke="var(--border-strong)"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* --------------------------------------------------------- outputs */}
      <div className="flow-side flow-outputs">
        <p className="flow-label">What you get back</p>
        <ul>
          {OUTPUTS.map((label, i) => (
            <li key={label} className="flow-out" style={{ transitionDelay: `${1400 + i * 90}ms` }}>
              <Tick className="flow-out-tick" width="14" height="14" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
