import Reveal from './Reveal';
import { KiwiSlice } from './KiwiMarks';

export default function About() {
  return (
    <section className="section sunk" id="about">
      <div className="container ab-grid">
        <Reveal>
          <p className="eyebrow">About Kiwi</p>
          <h2 className="h2">Built around a simple idea.</h2>
        </Reveal>
        <Reveal className="ab-copy" delay={80}>
          <p className="muted">
            The people responsible for buildings and equipment should be able to answer one question
            quickly:
          </p>
          <p className="ab-question"><KiwiSlice />Are we compliant?</p>
          <p className="muted">
            Kiwi combines specialist field services with modern technology to make physical compliance
            easier to organise, easier to track and easier to prove.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
