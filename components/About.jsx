import Reveal from './Reveal';
import { KiwiSlice } from './KiwiMarks';
import { FruitCorner } from './Decor';

export default function About() {
  return (
    <section className="section sunk has-fruit" id="about">
      <FruitCorner where="about" />
      <div className="container ab-grid">
        <Reveal>
          <p className="eyebrow">About Kiwi</p>
          <h2 className="h2">Physical compliance is organised backwards.</h2>
        </Reveal>
        <Reveal className="ab-copy" delay={80}>
          <p className="muted">
            The law puts the duty on you, for the whole estate. The market that serves it grew up one
            hazard at a time: a lift firm, a fire firm, a water firm, each excellent inside its scope
            and each ending at its scope. So you buy a horizontal liability in vertical slices, and the
            thing you are actually accountable for &mdash; the estate being complete &mdash; is not a
            thing anyone sells you.
          </p>
          <p className="ab-question"><KiwiSlice tone="simple" />So we organised it the other way round.</p>
          <p className="muted">
            Kiwi holds the estate as one record, asset by asset, and keeps every one in date, evidenced
            and closed. Your specialists keep their examinations. You pay us for the state, per asset,
            and we take nothing from them and nothing on what they find. One question stops being
            difficult: is everything that should be on the record on it, and is all of it current?
          </p>
          <p className="ab-candid">
            We are early, and choosing who we work with deliberately. If that is you, you will be
            talking to the founder, not an account team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
