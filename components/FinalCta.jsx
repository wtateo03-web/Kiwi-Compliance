import Reveal from './Reveal';
import { FruitPile } from './Decor';
import { PerchedKiwi } from './KiwiMarks';

export default function FinalCta() {
  return (
    <section className="section cta dark" id="contact">
      <FruitPile />
      <div className="container">
        <Reveal className="cta-inner">
          <h2 className="h2 cta-head">Start with one site.</h2>
          <p className="lead muted cta-copy">
            Send us a compliance register, an asset list — or simply talk us through how one site works
            today. We&rsquo;ll show you where Kiwi could take work off your team.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="mailto:william@kiwicompliance.com?subject=Walk%20us%20through%20one%20site">
              Start with one site <span className="arw" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="mailto:william@kiwicompliance.com">william@kiwicompliance.com</a>
          </div>
          <p className="cta-small">
            <PerchedKiwi where="cta" pose="peck" flip tilt={0} />
            No migration. No perfect data. No need to change providers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
