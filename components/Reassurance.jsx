import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';

const KEEPS = [
  { q: 'Already have a CAFM?', a: 'Keep it.' },
  { q: 'Already have trusted inspectors?', a: 'Keep them.' },
  { q: 'Already have an asset register?', a: 'Send it over.' },
];

/** Answers the three objections a facilities director forms while scrolling. */
export default function Reassurance() {
  return (
    <section className="reassure">
      <div className="container">
        <Reveal className="reassure-grid">
          {KEEPS.map(({ q, a }) => (
            <p key={q} className="reassure-item">
              <span className="reassure-q">{q}</span>
              <span className="reassure-a">{a}</span>
            </p>
          ))}
        </Reveal>
        <Reveal className="reassure-foot">
          <PerchedKiwi where="reassure" pose="tuck" flip tilt={0} />
          <p className="reassure-line">Kiwi works around your existing setup and fills the gaps.</p>
          <p className="reassure-sub muted">
            No migration project. No rip-and-replace. No new platform for your team to administer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
