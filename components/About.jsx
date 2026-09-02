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
            The specialist firms carry out the examinations and earn the revenue. The client&rsquo;s
            facilities team carries the administration around it — working out what is due, booking
            it, chasing attendance, extracting the certificate, tracking the defects it raised and
            keeping the record straight. One side is paid. The other side does the coordinating.
          </p>
          <p className="ab-question"><KiwiSlice tone="simple" />So we moved the work.</p>
          <p className="muted">
            Kiwi takes the coordination off the client and is paid by the supply side instead. The
            people responsible for buildings and equipment get their week back, and one question stops
            being difficult to answer: what is current, what is due, and what is still open.
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
