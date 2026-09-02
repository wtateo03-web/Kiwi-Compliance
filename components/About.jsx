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
          <h2 className="h2">Built around a simple idea.</h2>
        </Reveal>
        <Reveal className="ab-copy" delay={80}>
          <p className="muted">
            The people responsible for buildings and equipment should be able to answer one question
            quickly:
          </p>
          <p className="ab-question"><KiwiSlice tone="simple" />Are we compliant?</p>
          <p className="muted">
            Kiwi sits alongside your facilities team and handles the work between something becoming due
            and the evidence being safely back on file.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
