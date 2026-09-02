import Reveal from './Reveal';

/* Deliberately tangled: eight relationships, one person in the middle. */
const BEFORE_NODES = [
  { label: 'Fire contractor',       x: 4,   y: 14,  c: '#C2A9A4' },
  { label: 'PDF folder',            x: 146, y: 10,  c: '#B9BFB4' },
  { label: 'Electrical contractor', x: 276, y: 44,  c: '#A9B6C2' },
  { label: 'LEV inspector',         x: 280, y: 118, c: '#BDB49E' },
  { label: 'Water specialist',      x: 268, y: 212, c: '#A6BDBB' },
  { label: 'Inbox',                 x: 148, y: 284, c: '#B9BFB4' },
  { label: 'Lift inspector',        x: 14,  y: 268, c: '#C0B0C0' },
  { label: 'Excel',                 x: 0,   y: 132, c: '#B9BFB4' },
];

const WITH_SPECIALISTS = ['LOLER examiner', 'LEV examiner', 'Electrical engineer', 'Water specialist'];

function BeforeDiagram() {
  const cx = 190;
  const cy = 182;
  return (
    <svg viewBox="0 0 380 330" className="dg" role="img"
         aria-label="One facilities manager in the middle, separately connected to eight contractors, spreadsheets, inboxes and folders, with lines crossing each other.">
      {/* tangle between the outliers themselves */}
      <path d="M100 28 C 200 96 120 224 200 296" stroke="#D5DAD3" strokeWidth="1" fill="none" strokeDasharray="3 4" />
      <path d="M330 58 C 250 140 160 130 60 146" stroke="#D5DAD3" strokeWidth="1" fill="none" strokeDasharray="3 4" />
      <path d="M62 282 C 170 250 250 258 316 226" stroke="#D5DAD3" strokeWidth="1" fill="none" strokeDasharray="3 4" />

      {BEFORE_NODES.map((n) => (
        <line key={`l-${n.label}`} x1={n.x + 48} y1={n.y + 14} x2={cx} y2={cy} stroke={n.c} strokeWidth="1.2" />
      ))}

      {BEFORE_NODES.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width="98" height="28" rx="4" fill="var(--white)" stroke={n.c} strokeWidth="1.1" />
          <text x={n.x + 49} y={n.y + 18} textAnchor="middle" fontSize="9.2" fill="var(--ink)" fontFamily="var(--sans)">
            {n.label}
          </text>
        </g>
      ))}

      <rect x={cx - 62} y={cy - 24} width="124" height="48" rx="5" fill="var(--warm-sunk)" stroke="var(--muted)" strokeWidth="1.2" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)" fontFamily="var(--sans)">Facilities</text>
      <text x={cx} y={cy + 11} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)" fontFamily="var(--sans)">manager</text>
    </svg>
  );
}

function WithKiwiDiagram() {
  const specialists = [
    { label: 'LOLER examiner', y: 20 },
    { label: 'LEV examiner', y: 74 },
    { label: 'Electrical engineer', y: 128 },
    { label: 'Water specialist', y: 182 },
  ];
  return (
    <svg viewBox="0 0 380 330" className="dg" role="img"
         aria-label="The estate deals only with Kiwi: work that falls due goes to Kiwi, Kiwi routes it to the right specialist, the report comes back to Kiwi, and the completed work returns to the estate along with a live compliance record.">
      <defs>
        <marker id="wk-ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--border-strong)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="wk-ar-g" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--kiwi)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <rect x="6" y="132" width="96" height="50" rx="5" fill="var(--white)" stroke="var(--border-strong)" strokeWidth="1" />
      <text x="54" y="153" textAnchor="middle" fontSize="10.5" fill="var(--ink)" fontFamily="var(--sans)">Your estate</text>
      <text x="54" y="167" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="var(--sans)">one relationship</text>

      {/* We take the due… */}
      <path d="M106 147 H 142" stroke="var(--border-strong)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar)" />
      <text x="124" y="140" textAnchor="middle" fontSize="9.5" fill="var(--kiwi)" fontFamily="var(--sans)">due</text>
      {/* …and return the done. */}
      <path d="M142 169 H 106" stroke="var(--kiwi)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar-g)" />
      <text x="124" y="183" textAnchor="middle" fontSize="9.5" fill="var(--kiwi)" fontFamily="var(--sans)">done</text>

      <rect x="146" y="124" width="88" height="66" rx="6" fill="var(--ink)" />
      <text x="190" y="154" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="1.6" fill="var(--warm)" fontFamily="var(--sans)">KIWI</text>
      <text x="190" y="168" textAnchor="middle" fontSize="8.5" fill="#97A69D" fontFamily="var(--sans)">coordinates</text>

      {specialists.map((s) => (
        <g key={s.label}>
          <path d={`M238 152 C 262 152 262 ${s.y + 16} 286 ${s.y + 16}`} stroke="var(--border-strong)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar)" />
          <rect x="290" y={s.y} width="86" height="32" rx="5" fill="var(--white)" stroke="var(--border-strong)" strokeWidth="1" />
          <text x="333" y={s.y + 20} textAnchor="middle" fontSize="8.6" fill="var(--ink)" fontFamily="var(--sans)">{s.label}</text>
        </g>
      ))}

      {/* The report comes back to the middle, not to you. */}
      <path d="M333 214 C 326 246 252 240 220 194" stroke="var(--kiwi)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar-g)" />
      <text x="292" y="262" textAnchor="middle" fontSize="8.8" fill="var(--kiwi)" fontFamily="var(--sans)">report returned</text>

      <path d="M172 190 V 276" stroke="var(--border-strong)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar)" />
      <rect x="96" y="280" width="152" height="42" rx="5" fill="var(--kiwi-soft)" stroke="rgba(49,107,78,.32)" strokeWidth="1" />
      <text x="172" y="298" textAnchor="middle" fontSize="10" fontWeight="500" fill="var(--kiwi)" fontFamily="var(--sans)">Live compliance record</text>
      <text x="172" y="311" textAnchor="middle" fontSize="8.4" fill="var(--kiwi)" fontFamily="var(--sans)">certificates · due dates · actions</text>
    </svg>
  );
}

export default function BeforeAfter() {
  return (
    <section className="section sunk">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Before / with Kiwi</p>
          <h2 className="h2 measure">The same estate. A different shape.</h2>
        </Reveal>

        <div className="ba-grid">
          <Reveal className="ba-panel">
            <h3 className="ba-title">Before Kiwi</h3>
            <div className="ba-visual"><BeforeDiagram /></div>
            <p className="ba-note">Lots of suppliers. Lots of records. One person trying to hold it together.</p>
          </Reveal>

          <Reveal className="ba-panel ba-panel-good" delay={90}>
            <h3 className="ba-title">With Kiwi</h3>
            <div className="ba-visual"><WithKiwiDiagram /></div>
            <p className="ba-note ba-note-good">One relationship. You send us what&rsquo;s due, we send back what&rsquo;s done.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
