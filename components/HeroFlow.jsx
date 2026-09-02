'use client';

import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useInView, useCountUp } from './hooks';
import { Spreadsheet, Certificate, Email, Calendar, Invoice, Tick } from './Icons';
import { PerchedKiwi } from './KiwiMarks';

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

const WIDE = 1180; // the breakpoint where the three-across layout kicks in
const GAP = 5;     // leave room for the arrowhead so it meets the edge cleanly

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
  const [inViewRef, inView] = useInView({ threshold: 0.25 });

  const figRef = useRef(null);
  const coreRef = useRef(null);
  const svgRef = useRef(null);
  const inRefs = useRef([]);
  const outRefs = useRef([]);
  const [paths, setPaths] = useState([]);

  const setFig = useCallback(
    (node) => {
      figRef.current = node;
      inViewRef.current = node;
    },
    [inViewRef]
  );

  /* The connectors are measured from the real boxes rather than drawn into a
     fixed lane grid, so every line starts on a chip edge and lands on the
     core edge whatever the text wraps to. */
  useLayoutEffect(() => {
    const fig = figRef.current;
    if (!fig) return;

    let last = '';

    const measure = () => {
      const core = coreRef.current;
      if (!core || window.innerWidth < WIDE) {
        if (last !== '[]') {
          last = '[]';
          setPaths([]);
        }
        return;
      }

      const svg = svgRef.current;
      if (!svg) return;

      /* Entrance transforms are part of getBoundingClientRect, so measuring
         mid-animation would anchor the lines to where the boxes were sliding
         from. Suspend them for the read — this happens inside a layout effect,
         before paint, so nothing flickers. */
      fig.classList.add('flow-measuring');
      const F = svg.getBoundingClientRect();
      const C = core.getBoundingClientRect();
      const inBoxes = inRefs.current.map((el) => (el ? el.getBoundingClientRect() : null));
      const outBoxes = outRefs.current.map((el) => (el ? el.getBoundingClientRect() : null));
      fig.classList.remove('flow-measuring');

      const coreL = C.left - F.left;
      const coreR = C.right - F.left;
      const coreY = C.top + C.height / 2 - F.top;

      const next = [];

      inBoxes.forEach((r, i) => {
        if (!r) return;
        const sx = r.right - F.left;
        const sy = r.top + r.height / 2 - F.top;
        const ex = coreL - GAP;
        const k = Math.max(14, (ex - sx) * 0.5);
        next.push({
          d: `M${sx} ${sy} C${sx + k} ${sy} ${ex - k} ${coreY} ${ex} ${coreY}`,
          delay: 400 + i * 70,
        });
      });

      outBoxes.forEach((r, i) => {
        if (!r) return;
        const ex = r.left - F.left - GAP;
        const ey = r.top + r.height / 2 - F.top;
        const k = Math.max(14, (ex - coreR) * 0.5);
        next.push({
          d: `M${coreR} ${coreY} C${coreR + k} ${coreY} ${ex - k} ${ey} ${ex} ${ey}`,
          delay: 1180 + i * 80,
        });
      });

      const key = JSON.stringify(next);
      if (key !== last) {
        last = key;
        setPaths(next);
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(fig);
    window.addEventListener('resize', measure);
    // Font swap changes the chip heights, so re-measure once they land.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <figure ref={setFig} className={`flow${inView ? ' in' : ''}`} aria-labelledby="flow-cap">
      <figcaption id="flow-cap" className="sr-only">
        Scattered compliance records — spreadsheets, certificates, emails, reminders and invoices — feed
        into Kiwi, which arranges the inspection, stores the certificate, sets the next due date and
        updates the compliance record.
      </figcaption>

      <PerchedKiwi where="panel" tilt={-4} />

      <svg className="flow-links" ref={svgRef} aria-hidden="true">
        <defs>
          <marker id="flow-arrowhead" viewBox="0 0 8 8" refX="6.6" refY="4"
                  markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M1 1.4 L6.2 4 L1 6.6" fill="none" stroke="var(--border-strong)"
                  strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            pathLength="1"
            markerEnd="url(#flow-arrowhead)"
            style={{ transitionDelay: `${p.delay}ms` }}
          />
        ))}
      </svg>

      {/* ---------------------------------------------------------- inputs */}
      <div className="flow-side flow-inputs">
        <p className="flow-label">What you have now</p>
        <ul>
          {INPUTS.map(({ Icon, label, kind }, i) => (
            <li
              key={label}
              ref={(el) => { inRefs.current[i] = el; }}
              className="flow-chip"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
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

      {/* ------------------------------------------------------------ core */}
      <div className="flow-core" ref={coreRef}>
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

      {/* --------------------------------------------------------- outputs */}
      <div className="flow-side flow-outputs">
        <p className="flow-label">What you get back</p>
        <ul>
          {OUTPUTS.map((label, i) => (
            <li
              key={label}
              ref={(el) => { outRefs.current[i] = el; }}
              className="flow-out"
              style={{ transitionDelay: `${1400 + i * 90}ms` }}
            >
              <Tick className="flow-out-tick" width="14" height="14" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
