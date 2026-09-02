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
          <p className="eyebrow">Physical compliance, managed</p>
          <h1 className="display">Less compliance admin. More control.</h1>
        </Reveal>
      </div>

      <div className="container hero-grid">
        <Reveal className="hero-copy" delay={60}>
          <p className="lead hero-lead">
            Kiwi takes care of the chasing behind statutory compliance — organising your records,
            arranging specialist inspections, tracking completion and keeping the evidence current.
          </p>
          <p className="hero-sub muted">
            Keep your existing team, systems and trusted contractors. We work around what you already
            have.
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
            You stay in control. Kiwi keeps the work moving.
          </p>
        </Reveal>

        <div className="hero-visual">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
