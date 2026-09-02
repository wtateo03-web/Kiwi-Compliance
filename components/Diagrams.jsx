/* Bespoke SVG diagrams. Uniform viewBoxes so they scale without distortion.
   Structure lines use the soft border; Kiwi is always the dark block; fresh
   green marks only the resolved/positive state. */

const NODE = { fill: 'var(--white)', stroke: 'var(--border-strong)', strokeWidth: 1 };
const LINE = { stroke: 'var(--border-strong)', strokeWidth: 1, fill: 'none' };
const LABEL = { fontSize: 10, fill: 'var(--muted)', fontFamily: 'var(--sans)' };
const TEXT = { fontSize: 10.5, fill: 'var(--ink)', fontFamily: 'var(--sans)' };

function Arrow({ id }) {
  return (
    <marker id={id} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--border-strong)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </marker>
  );
}

function KiwiBlock({ x, y, w = 108, h = 70, label = 'KIWI', sub }) {
  // Coerce: callers pass these as attribute strings.
  const bx = Number(x);
  const by = Number(y);
  const bw = Number(w);
  const bh = Number(h);
  return (
    <g>
      <rect x={bx} y={by} width={bw} height={bh} rx="6" fill="var(--ink)" />
      <text x={bx + bw / 2} y={by + (sub ? bh / 2 - 2 : bh / 2 + 4)} textAnchor="middle"
            fontSize="12" fontWeight="700" letterSpacing="1.6" fill="var(--warm)" fontFamily="var(--sans)">
        {label}
      </text>
      {sub && (
        <text x={bx + bw / 2} y={by + bh / 2 + 13} textAnchor="middle" fontSize="8.5"
              fill="#97A69D" fontFamily="var(--sans)">
          {sub}
        </text>
      )}
    </g>
  );
}

/* 01 — everything you already have, flowing in. */
export function IntakeDiagram() {
  const docs = ['Site register', 'Certificates', 'Email threads', 'Contractor list'];
  return (
    <svg viewBox="0 0 400 210" className="dg" role="img" aria-label="Spreadsheets, certificates, email threads and contractor lists flowing into Kiwi.">
      <defs><Arrow id="ar1" /></defs>
      {docs.map((d, i) => {
        const y = 20 + i * 44;
        return (
          <g key={d}>
            <rect x="8" y={y} width="132" height="32" rx="4" {...NODE} />
            <text x="20" y={y + 20} {...TEXT}>{d}</text>
            <path d={`M146 ${y + 16} C 190 ${y + 16} 200 105 244 105`} {...LINE} markerEnd="url(#ar1)" />
          </g>
        );
      })}
      <KiwiBlock x="252" y="70" sub="intake" />
    </svg>
  );
}

/* 02 — scattered records becoming structured rows. */
export function StructureDiagram() {
  const scattered = [
    { x: 10, y: 24, w: 96, r: -4 }, { x: 40, y: 62, w: 78, r: 3.5 },
    { x: 6, y: 100, w: 108, r: 2.5 }, { x: 34, y: 138, w: 86, r: -3 },
  ];
  return (
    <svg viewBox="0 0 400 210" className="dg" role="img" aria-label="Scattered records being structured into consistent database rows.">
      <defs><Arrow id="ar2" /></defs>
      {scattered.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={s.w} height="26" rx="3" {...NODE}
              transform={`rotate(${s.r} ${s.x + s.w / 2} ${s.y + 13})`} />
      ))}
      <path d="M150 105 H 196" {...LINE} markerEnd="url(#ar2)" />
      <text x="173" y="96" textAnchor="middle" {...LABEL}>structure</text>

      <rect x="212" y="18" width="180" height="174" rx="6" fill="var(--white)" stroke="var(--border-strong)" strokeWidth="1" />
      <line x1="212" y1="44" x2="392" y2="44" stroke="var(--border)" strokeWidth="1" />
      <text x="224" y="36" fontSize="8.5" letterSpacing="1.1" fill="var(--muted)" fontFamily="var(--sans)">ASSET · SITE · NEXT DUE</text>
      {[0, 1, 2, 3].map((i) => {
        const y = 58 + i * 32;
        return (
          <g key={i}>
            <rect x="224" y={y} width="52" height="7" rx="3.5" fill="var(--border)" />
            <rect x="286" y={y} width="60" height="7" rx="3.5" fill="var(--border)" />
            <circle cx="376" cy={y + 3.5} r="3.5" fill={i === 3 ? 'var(--due)' : 'var(--kiwi)'} />
            {i < 3 && <line x1="224" y1={y + 20} x2="380" y2={y + 20} stroke="var(--border)" strokeWidth="1" />}
          </g>
        );
      })}
    </svg>
  );
}

/* 03 — Kiwi routing work out to the right specialist, and the report coming
   back to the middle. The two-way exchange with the estate is the point:
   we take the due, we return the done. */
export function RoutingDiagram() {
  const specialists = [
    { label: 'LOLER examiner', y: 22 },
    { label: 'LEV examiner', y: 84 },
    { label: 'Water specialist', y: 146 },
  ];
  return (
    <svg viewBox="0 0 400 226" className="dg" role="img" aria-label="Work that falls due passes from the estate to Kiwi. Kiwi routes it to the appropriate specialist, the report comes back to Kiwi, and the completed record returns to the estate.">
      <defs><Arrow id="ar3" /></defs>

      <rect x="6" y="80" width="94" height="50" rx="5" {...NODE} />
      <text x="53" y="101" textAnchor="middle" {...TEXT}>Your estate</text>
      <text x="53" y="115" textAnchor="middle" {...LABEL}>14 sites</text>

      {/* we take the due… */}
      <path d="M104 94 H 148" {...LINE} markerEnd="url(#ar3)" />
      <text x="126" y="86" textAnchor="middle" fontSize="10" fill="var(--kiwi)" fontFamily="var(--sans)">due</text>
      {/* …and return the done */}
      <path d="M148 118 H 104" {...LINE} markerEnd="url(#ar3)" />
      <text x="126" y="134" textAnchor="middle" fontSize="10" fill="var(--kiwi)" fontFamily="var(--sans)">done</text>

      <KiwiBlock x="152" y="72" w="86" h="66" sub="routing" />

      {specialists.map((s) => (
        <g key={s.label}>
          <path d={`M242 ${100} C 268 ${100} 272 ${s.y + 17} 296 ${s.y + 17}`} {...LINE} markerEnd="url(#ar3)" />
          <rect x="300" y={s.y} width="94" height="34" rx="5" {...NODE} />
          <text x="347" y={s.y + 21} textAnchor="middle" fontSize="9.5" fill="var(--ink)" fontFamily="var(--sans)">{s.label}</text>
        </g>
      ))}

      {/* the report comes back into the middle */}
      <path d="M347 182 C 344 206 260 208 238 144"
            stroke="var(--kiwi)" strokeWidth="1" fill="none" markerEnd="url(#ar3g)" />
      <defs>
        <marker id="ar3g" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--kiwi)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      <text x="286" y="218" textAnchor="middle" fontSize="9" fill="var(--kiwi)" fontFamily="var(--sans)">report returned</text>
    </svg>
  );
}

/* 04 — the asset history extending itself after completion. */
export function RecordDiagram() {
  const years = [
    { y: '2024', s: 'Examination complete', done: true },
    { y: '2025', s: 'Examination complete', done: true },
    { y: '2026', s: 'Examination complete', done: true, fresh: true },
    { y: '2027', s: 'Next scheduled', done: false },
  ];
  return (
    <svg viewBox="0 0 400 210" className="dg" role="img" aria-label="An asset history with three completed examinations and the next one already scheduled.">
      <rect x="8" y="10" width="384" height="190" rx="6" fill="var(--white)" stroke="var(--border-strong)" strokeWidth="1" />
      <text x="26" y="36" fontSize="10.5" fontWeight="600" fill="var(--ink)" fontFamily="var(--sans)">LEV-0148</text>
      <text x="92" y="36" {...LABEL}>Birmingham — Workshop 2</text>
      <line x1="8" y1="50" x2="392" y2="50" stroke="var(--border)" strokeWidth="1" />
      <line x1="40" y1="70" x2="40" y2="176" stroke="var(--border)" strokeWidth="1" />

      {years.map((it, i) => {
        const cy = 74 + i * 34;
        const colour = it.done ? (it.fresh ? 'var(--fresh)' : 'var(--kiwi)') : 'var(--white)';
        return (
          <g key={it.y}>
            <circle cx="40" cy={cy} r="5" fill={colour} stroke={it.done ? colour : 'var(--border-strong)'} strokeWidth="1.2" />
            <text x="60" y={cy + 4} fontSize="10" fontWeight="500" fill="var(--ink)" fontFamily="var(--mono)">{it.y}</text>
            <text x="104" y={cy + 4} fontSize="10" fill={it.done ? 'var(--ink)' : 'var(--muted)'} fontFamily="var(--sans)">{it.s}</text>
            {it.fresh && (
              <>
                <rect x="262" y={cy - 11} width="118" height="22" rx="11" fill="var(--kiwi-soft)" stroke="rgba(49,107,78,.3)" strokeWidth="1" />
                <text x="321" y={cy + 4} textAnchor="middle" fontSize="8.8" fill="var(--kiwi)" fontFamily="var(--sans)">certificate attached</text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
