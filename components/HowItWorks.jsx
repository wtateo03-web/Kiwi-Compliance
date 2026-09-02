import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { IntakeDiagram, StructureDiagram, RoutingDiagram, RecordDiagram } from './Diagrams';

const STAGES = [
  {
    n: '01',
    title: 'Send us what you have.',
    body: 'Spreadsheets, certificates, emails, asset lists, existing contractors and site information.',
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
    title: 'We arrange the work.',
    body: 'When something needs doing, Kiwi coordinates the appropriate specialist and tracks the job through completion.',
    Visual: RoutingDiagram,
  },
  {
    n: '04',
    title: 'We keep the record current.',
    body: 'Reports, certificates, remedial actions and next inspection dates stay together.',
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
          <h2 className="h2 measure">Four steps, and none of them are yours.</h2>
        </Reveal>

        <ol className="stages">
          <PerchedKiwi where="stages" pose="walk" flip tilt={0} />
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
          <PerchedKiwi where="rule" pose="lookup" tilt={2} />
          <p className="statement">You don&rsquo;t need another system to operate. Kiwi operates it for you.</p>
        </Reveal>
      </div>
    </section>
  );
}
