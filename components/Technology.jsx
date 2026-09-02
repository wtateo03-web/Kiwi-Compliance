import Reveal from './Reveal';
import { Certificate, Layers, Spreadsheet, Clock, Engineer, Tick } from './Icons';

const PIPELINE = [
  { Icon: Certificate,  label: 'Documents arrive',     note: 'Reports, certificates, registers', by: 'kiwi' },
  { Icon: Layers,       label: 'Information extracted', note: 'Asset, date, provider, outcome',  by: 'kiwi' },
  { Icon: Spreadsheet,  label: 'Data structured',       note: 'One consistent register',          by: 'kiwi' },
  { Icon: Clock,        label: 'Requirements identified', note: 'What falls due, and when',       by: 'kiwi' },
  { Icon: Engineer,     label: 'Specialist attends',    note: 'Competent person, on site',        by: 'human' },
  { Icon: Tick,         label: 'Record updates',        note: 'Evidence back on the asset',       by: 'kiwi' },
];

export default function Technology() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="tech-head">
          <div>
            <p className="eyebrow">Technology</p>
            <h2 className="h2">Technology where it helps. People where they matter.</h2>
          </div>
          <div className="tech-head-copy">
            <p className="muted">
              Kiwi uses automation and AI to structure records, identify upcoming requirements, organise
              workflows and remove repetitive administration.
            </p>
            <p className="tech-emphasis">Physical inspection still belongs to competent specialists.</p>
          </div>
        </Reveal>

        <Reveal>
          <ol className="pipe">
            {PIPELINE.map(({ Icon, label, note, by }, i) => (
              <li key={label} className={`pipe-step is-${by}`}>
                <span className="pipe-rail" aria-hidden="true" />
                <span className="pipe-icon"><Icon width="19" height="19" /></span>
                <span className="pipe-n mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="pipe-label">{label}</span>
                <span className="pipe-note">{note}</span>
                {by === 'human' && <span className="pipe-tag">Human</span>}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="tech-coda">
          <p className="statement">AI organises. Humans verify.</p>
        </Reveal>
      </div>
    </section>
  );
}
