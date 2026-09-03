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
          <h1 className="display">We run your physical compliance.</h1>
        </Reveal>
      </div>

      <div className="container hero-grid">
        <Reveal className="hero-copy" delay={60}>
          <p className="lead hero-lead">
            From what falls due, through the inspection, the evidence and every action it raises,
            to the obligation being closed. Using the specialists, the systems and the rates you
            already have.
          </p>

          {/* The whole positioning in one line: not a better tracker, the work. */}
          <p className="hero-contrast">
            Software tells you what&rsquo;s due. We get it done.
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
            The specialist signs the examination. We run everything around it.
          </p>
        </Reveal>

        <div className="hero-visual">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}
