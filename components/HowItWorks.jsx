import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { IntakeDiagram, StructureDiagram, RoutingDiagram, RecordDiagram } from './Diagrams';

const STAGES = [
  {
    n: '01',
    title: 'Send us what you have.',
    body: 'Spreadsheets, certificates, emails, asset lists, your existing contractors and site information. However it currently sits.',
    Visual: IntakeDiagram,
  },
  {
    n: '02',
    title: 'We organise it.',
    body: 'Kiwi structures your sites, assets, records, schedules and upcoming requirements.',
    Visual: StructureDiagram,
  },
  {
    n: '03',
    title: 'We get the work done.',
    body: 'When something falls due, Kiwi instructs your specialist — or sources one where you have a gap — arranges access and drives it to attendance.',
    Visual: RoutingDiagram,
  },
  {
    n: '04',
    title: 'We close it out.',
    body: 'Certificate collected, findings extracted, every defect driven to closure and the record left complete enough to hand an auditor.',
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
          <h2 className="h2 measure">From what&rsquo;s due to the obligation closed.</h2>
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

        <Reveal className="stages-coda">
          <p className="statement">
            Not another system for your team to maintain. Kiwi manages the work behind it.
          </p>
          <p className="stages-coda-sub muted">
            Due dates, bookings, contractors, certificates, follow-ups and records — handled by us,
            visible to you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
