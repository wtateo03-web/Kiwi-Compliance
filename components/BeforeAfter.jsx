import Reveal from './Reveal';

/* Deliberately tangled: eight relationships, one person in the middle. */
const BEFORE_NODES = [
  { label: 'Fire contractor',       x: 4,   y: 8,   c: '#C2A9A4' },
  { label: 'PDF folder',            x: 146, y: 4,   c: '#B9BFB4' },
  { label: 'Electrical contractor', x: 276, y: 36,  c: '#A9B6C2' },
  { label: 'LEV inspector',         x: 280, y: 108, c: '#BDB49E' },
  { label: 'Water specialist',      x: 268, y: 198, c: '#A6BDBB' },
  { label: 'Inbox',                 x: 148, y: 262, c: '#B9BFB4' },
  { label: 'Lift inspector',        x: 14,  y: 246, c: '#C0B0C0' },
  { label: 'Excel',                 x: 0,   y: 122, c: '#B9BFB4' },
];

const WITH_SPECIALISTS = ['LOLER examiner', 'LEV examiner', 'Electrical engineer', 'Water specialist'];

function BeforeDiagram() {
  const cx = 190;
  const cy = 172;
  return (
    <svg viewBox="0 0 380 310" className="dg" role="img"
         aria-label="One facilities manager in the middle, separately connected to eight contractors, spreadsheets, inboxes and folders, with lines crossing each other.">
      {/* tangle between the outliers themselves */}
      <path d="M100 22 C 200 90 120 210 200 276" stroke="#D5DAD3" strokeWidth="1" fill="none" strokeDasharray="3 4" />
      <path d="M330 50 C 250 130 160 120 60 136" stroke="#D5DAD3" strokeWidth="1" fill="none" strokeDasharray="3 4" />
      <path d="M62 260 C 170 230 250 240 316 212" stroke="#D5DAD3" strokeWidth="1" fill="none" strokeDasharray="3 4" />

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
  return (
    <svg viewBox="0 0 380 310" className="dg" role="img"
         aria-label="The estate connects only to Kiwi. Kiwi routes work to each specialist provider and maintains the live compliance record.">
      <defs>
        <marker id="wk-ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--border-strong)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <rect x="6" y="130" width="96" height="50" rx="5" fill="var(--white)" stroke="var(--border-strong)" strokeWidth="1" />
      <text x="54" y="151" textAnchor="middle" fontSize="10.5" fill="var(--ink)" fontFamily="var(--sans)">Your estate</text>
      <text x="54" y="165" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="var(--sans)">one relationship</text>

      <path d="M106 155 H 142" stroke="var(--border-strong)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar)" />

      <rect x="146" y="122" width="88" height="66" rx="6" fill="var(--ink)" />
      <text x="190" y="152" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="1.6" fill="var(--warm)" fontFamily="var(--sans)">KIWI</text>
      <text x="190" y="166" textAnchor="middle" fontSize="8.5" fill="var(--muted-dark)" fontFamily="var(--sans)">coordinates</text>

      {WITH_SPECIALISTS.map((s, i) => {
        const y = 22 + i * 58;
        return (
          <g key={s}>
            <path d={`M238 155 C 262 155 262 ${y + 16} 286 ${y + 16}`} stroke="var(--border-strong)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar)" />
            <rect x="290" y={y} width="88" height="32" rx="5" fill="var(--white)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="334" y={y + 20} textAnchor="middle" fontSize="8.8" fill="var(--ink)" fontFamily="var(--sans)">{s}</text>
          </g>
        );
      })}

      <path d="M190 192 V 232" stroke="var(--border-strong)" strokeWidth="1" fill="none" markerEnd="url(#wk-ar)" />
      <rect x="118" y="236" width="144" height="40" rx="5" fill="var(--kiwi-soft)" stroke="rgba(49,107,78,.32)" strokeWidth="1" />
      <text x="190" y="253" textAnchor="middle" fontSize="10" fontWeight="500" fill="var(--kiwi)" fontFamily="var(--sans)">Live compliance record</text>
      <text x="190" y="266" textAnchor="middle" fontSize="8.6" fill="var(--kiwi)" fontFamily="var(--sans)">certificates · due dates · actions</text>
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
            <p className="ba-note ba-note-good">One relationship. Kiwi coordinates the rest.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
