import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';

const PRINCIPLES = [
  {
    n: '01',
    title: 'Competent specialists',
    body: 'Work is routed to appropriately qualified providers for the asset and the requirement.',
  },
  {
    n: '02',
    title: 'Evidence retained',
    body: 'Reports and certificates stay attached to the relevant site and asset, not in a shared folder.',
  },
  {
    n: '03',
    title: 'Nothing disappears',
    body: 'Every completed action becomes the starting point for the next requirement.',
  },
];

export default function Trust() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="h2 measure">Clear responsibility. Clear records.</h2>
        </Reveal>
        <div className="tr-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} className="tr-item" delay={i * 80}>
              {i === 2 && <PerchedKiwi where="rule" tilt={-5} />}
              <span className="tr-n mono">{p.n}</span>
              <h3 className="h3 tr-title">{p.title}</h3>
              <p className="muted tr-body">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
