import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import EnrolmentFinds from './EnrolmentFinds';
import { IntakeDiagram, StructureDiagram, RoutingDiagram, RecordDiagram } from './Diagrams';

/* Four stages, and none of them is "we remind you what is due". The interval
   belongs to regulation or to the competent person's scheme; what Kiwi owns
   is that every asset is on the record, attended inside its window, closed
   when something is found, and provable on any date a third party picks. */
const STAGES = [
  {
    n: '01',
    title: 'Every asset goes on the record.',
    body: 'We reconcile what you declare against what the certificates evidence and what is actually on site. Each asset that carries an obligation is enrolled with that obligation attached. Anything we cannot place is raised as an exception, not quietly dropped.',
    Visual: IntakeDiagram,
  },
  {
    n: '02',
    title: 'Each one is kept in date.',
    body: 'The interval is set by regulation or by your competent person’s scheme, not by us. Our job is that the specialist attends inside it: instructed, access arranged, and replaced if a provider fails — using the firms you already use wherever you have them.',
    Visual: RoutingDiagram,
  },
  {
    n: '03',
    title: 'What is found gets closed.',
    body: 'An examination that raises a defect starts a clock, and the inspector’s duty ends at the report. Every finding gets an owner, a deadline and evidence it was done, so nothing stays open because it fell between the person who found it and the person who fixes it.',
    Visual: StructureDiagram,
  },
  {
    n: '04',
    title: 'The record holds.',
    body: 'Certificate, findings and closure sit on the asset they belong to. On any date an auditor, insurer or acquirer chooses, the estate can show its position — not the position at the last annual review.',
    Visual: RecordDiagram,
  },
];

export default function HowItWorks() {
  return (
    <section className="section has-fruit" id="how">
      <FruitCorner where="how" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">How Kiwi works</p>
          <h2 className="h2 measure">Compliance kept as a state, not chased as a series of visits.</h2>
        </Reveal>

        <ol className="stages">
          <PerchedKiwi where="stages" pose="walk" flip tilt={0} />
          <PerchedKiwi where="stagesend" pose="lookup" tilt={2} />
          {STAGES.map(({ n, title, body, Visual }) => (
            <Reveal as="li" key={n} className="stage">
              <div className="stage-copy">
                <span className="stage-n mono">{n}</span>
                <h3 className="h3 stage-title">{title}</h3>
                <p className="muted stage-body">{body}</p>
              </div>
              <div className="stage-visual">
                <Visual />
              </div>
            </Reveal>
          ))}
        </ol>

        <EnrolmentFinds />

        <Reveal className="stages-coda">
          <p className="statement">
            Your contractors are excellent inside their scope. The estate is what you are accountable for.
          </p>
          <p className="stages-coda-sub muted">
            Nobody sells you that. So the specialists keep their scope, and Kiwi keeps the whole.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
