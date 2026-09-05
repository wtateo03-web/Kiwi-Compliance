import HeroFlow from './HeroFlow';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <FruitCorner where="hero" />

      {/* The headline runs the full width so it holds its size and breaks on
          the sentence; the supporting copy and the visual sit beneath it. */}
      <div className="container">
        <Reveal className="hero-head">
          <p className="eyebrow">Managed physical compliance</p>
          <h1 className="display">We keep your estate in date.</h1>
        </Reveal>
      </div>

      <div className="container hero-grid">
        <Reveal className="hero-copy" delay={60}>
          <p className="lead hero-lead">
            Every asset that must be examined, tested or certified &mdash; kept in date, evidenced,
            and every finding it raises closed. Continuously, not once a year. Using the specialists,
            the systems and the rates you already have.
          </p>

          {/* The whole positioning in one line: execution is proven everywhere, completeness nowhere. */}
          <p className="hero-contrast">
            Your contractors can each prove their work was done. Nobody can prove your estate is complete.
          </p>

          <div className="btn-row">
            <a className="btn btn-primary" href="#contact">
              Start with one site <span className="arw" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#how">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-strap">
            <PerchedKiwi where="strap" pose="walk" flip tilt={0} />
            The specialist signs the examination. We keep the whole estate current.
          </p>
        </Reveal>

        <div className="hero-visual">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
