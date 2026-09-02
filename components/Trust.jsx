import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';

const PRINCIPLES = [
  {
    n: '01',
    title: 'Your providers, or ours',
    body: 'Work goes to the contractor you already use. Where you have a gap, we source an appropriately qualified specialist and hold them to the same standard.',
  },
  {
    n: '02',
    title: 'Evidence where you need it',
    body: 'Reports and certificates stay attached to the site and asset they belong to — ready for an audit, not buried in a shared drive.',
  },
  {
    n: '03',
    title: 'Defects tracked to closure',
    body: 'An examination that raises a defect starts a clock, and that clock is the part that carries real liability. Every action gets an owner, a date and a piece of evidence that it was done.',
  },
  {
    n: '04',
    title: 'Nothing quietly falls off the register',
    body: 'The failure that hurts is not a late inspection — it is an asset nobody knew was there. We reconcile what we are told against what we find, and tell you where the gaps are.',
  },
];

export default function Trust() {
  return (
    <section className="section has-fruit">
      <FruitCorner where="trust" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="h2 measure">Clear responsibility. Clear records.</h2>
        </Reveal>
        <div className="tr-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} className="tr-item" delay={i * 80}>
              {i === 0 && <PerchedKiwi where="rule" pose="tuck" flip tilt={0} />}
              {i === 3 && <PerchedKiwi where="rule" pose="oneleg" tilt={-2} />}
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
