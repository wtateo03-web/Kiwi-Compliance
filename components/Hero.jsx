import HeroFlow from './HeroFlow';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <FruitCorner where="hero" />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Physical compliance, managed</p>
          <h1 className="display">Compliance, run properly.</h1>
          <p className="lead hero-lead">
            Kiwi takes your spreadsheets, certificates, contractors and inspection schedules and brings
            them into one managed system.
          </p>
          <p className="hero-sub muted">
            We arrange the work, track what has been completed and keep the record current.
          </p>

          <div className="btn-row">
            <a className="btn btn-primary" href="#contact">
              Talk to Kiwi <span className="arw" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#how">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-strap">
            <PerchedKiwi where="strap" pose="walk" flip tilt={0} />
            One schedule. One record. One accountable partner.
          </p>
        </Reveal>

        <div className="hero-visual">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
