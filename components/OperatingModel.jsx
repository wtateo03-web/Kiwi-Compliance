import Reveal from './Reveal';

const INPUTS = ['Spreadsheets', 'Certificates', 'Emails', 'Asset lists'];
const SPECIALISTS = [
  { label: 'Your LOLER provider', x: 262 },
  { label: 'Your LEV provider', x: 412 },
  { label: 'Kiwi-sourced PSSR', x: 562, sourced: true },
];

/* The defining diagram: Kiwi sits between one estate and many specialists,
   and everything it does lands back in one live record. */
function OperatingDiagram() {
  return (
    <svg viewBox="0 0 960 430" className="dg om-dg" role="img"
         aria-label="Spreadsheets, certificates, emails and asset lists pass into Kiwi. Kiwi exchanges work and results with the providers you already use, and with specialists it sources where you have a gap, returns a compliant estate, and maintains a live record that answers what is due next.">
      <defs>
        <marker id="om-a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7.5" markerHeight="7.5" orient="auto-start-reverse">
          <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--line-dark-strong)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="om-g" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7.5" markerHeight="7.5" orient="auto-start-reverse">
          <path d="M0.5 1 L7 4 L0.5 7" fill="none" stroke="var(--fresh)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x="480" y="22" textAnchor="middle" fontSize="10" letterSpacing="2.2" fill="var(--muted-dark)" fontFamily="var(--sans)">
        YOUR PROVIDERS, AND OURS
      </text>

      {SPECIALISTS.map((s) => (
        <g key={s.label}>
          <rect x={s.x} y="38" width="136" height="42" rx="6" fill="none"
                stroke={s.sourced ? 'var(--fresh)' : 'var(--line-dark-strong)'}
                strokeDasharray={s.sourced ? '4 3' : undefined} strokeWidth="1" />
          <text x={s.x + 68} y="64" textAnchor="middle" fontSize="10.5"
                fill={s.sourced ? 'var(--fresh)' : 'var(--warm)'} fontFamily="var(--sans)">{s.label}</text>
          {/* two-way: work out, results back */}
          <path d={`M${s.x + 68} 84 C ${s.x + 68} 140 480 130 480 182`} fill="none" stroke="var(--line-dark-strong)" strokeWidth="1"
                markerStart="url(#om-a)" markerEnd="url(#om-a)" />
        </g>
      ))}

      {/* inputs */}
      <text x="24" y="176" fontSize="10" letterSpacing="2.2" fill="var(--muted-dark)" fontFamily="var(--sans)">WHAT YOU HAVE</text>
      {INPUTS.map((label, i) => (
        <text key={label} x="24" y={200 + i * 24} fontSize="12.5" fill="var(--warm)" fontFamily="var(--sans)">{label}</text>
      ))}
      <path d="M182 224 H 396" fill="none" stroke="var(--line-dark-strong)" strokeWidth="1" markerEnd="url(#om-a)" />

      {/* Kiwi */}
      <rect x="400" y="186" width="160" height="78" rx="8" fill="var(--fresh)" />
      <text x="480" y="222" textAnchor="middle" fontSize="17" fontWeight="700" letterSpacing="2.4" fill="var(--ink)" fontFamily="var(--sans)">KIWI</text>
      <text x="480" y="242" textAnchor="middle" fontSize="10" fill="rgba(16,32,27,.72)" fontFamily="var(--sans)">keeps it in date</text>

      {/* outcome */}
      <path d="M564 224 H 700" fill="none" stroke="var(--fresh)" strokeWidth="1.2" markerEnd="url(#om-g)" />
      <rect x="704" y="196" width="232" height="58" rx="8" fill="none" stroke="var(--fresh)" strokeWidth="1.2" />
      <text x="820" y="222" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--fresh)" fontFamily="var(--sans)">Compliant estate</text>
      <text x="820" y="240" textAnchor="middle" fontSize="10" fill="var(--muted-dark)" fontFamily="var(--sans)">evidenced, and up to date</text>

      {/* the record beneath */}
      <path d="M480 268 V 316" fill="none" stroke="var(--line-dark-strong)" strokeWidth="1" markerEnd="url(#om-a)" />
      <rect x="368" y="320" width="224" height="56" rx="8" fill="rgba(246,247,242,.05)" stroke="var(--line-dark-strong)" strokeWidth="1" />
      <text x="480" y="344" textAnchor="middle" fontSize="12.5" fill="var(--warm)" fontFamily="var(--sans)">Live record</text>
      <text x="480" y="362" textAnchor="middle" fontSize="10" fill="var(--muted-dark)" fontFamily="var(--sans)">every asset, every certificate</text>

      <path d="M480 380 V 400" fill="none" stroke="var(--line-dark-strong)" strokeWidth="1" markerEnd="url(#om-a)" />
      <text x="480" y="420" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="var(--fresh)" fontFamily="var(--sans)">What is due next?</text>
    </svg>
  );
}

export default function OperatingModel() {
  return (
    <section className="section dark">
      <div className="container">
        <Reveal className="om-head">
          <div>
            <p className="eyebrow">Your providers</p>
            <h2 className="h2">We work with the providers you already have.</h2>
          </div>
          <div className="om-head-copy">
            <p className="muted">
              Keep the contractors you trust. They keep their examination and their scheme. We make
              sure each visit happens inside the interval, the evidence comes back, and what they
              find is closed.
            </p>
            <p className="muted">
              Where an asset has no one covering it, we source the right specialist and hold them to
              the same standard. No supplier has to be replaced for the estate to be complete.
            </p>
          </div>
        </Reveal>

        <Reveal className="om-visual">
          <OperatingDiagram />
        </Reveal>
      </div>
    </section>
  );
}
