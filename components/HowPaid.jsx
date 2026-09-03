import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';

/* The three questions a buyer forms in this order, answered in this order.
   The third one is not optional: a coordinator paid by the inspection
   provider has to say out loud why that cannot bend an examination. */
const ANSWERS = [
  {
    n: '01',
    q: 'What does it cost you?',
    a: 'Nothing.',
    body:
      'There is no Kiwi licence, subscription, implementation charge or management fee. You are not ' +
      'billed for the platform, the operating layer or the chasing.',
  },
  {
    n: '02',
    q: 'So how are we paid?',
    a: 'By the provider.',
    body:
      'We take an agreed share of the work we run through them, and the provider absorbs it. The ' +
      'rate you agreed with your specialist is the rate you pay — our fee comes out of theirs, not ' +
      'on top of it. In return they get booked work and none of the administration around it.',
  },
  {
    n: '03',
    q: 'Could that bend an inspection?',
    a: 'No, and here is why.',
    body:
      'We are paid for running the process, never for findings. Our fee does not change if an asset passes, ' +
      'fails, or raises twenty defects. Kiwi does not carry out, witness or sign a thorough ' +
      'examination — the competent person does, and their report reaches you exactly as written.',
  },
];

export default function HowPaid() {
  return (
    <section className="section has-fruit" id="commercial">
      <FruitCorner where="paid" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">The commercial model</p>
          <h2 className="h2 measure">Why don&rsquo;t we charge you?</h2>
          <p className="lead muted paid-lede">
            Specialist firms are paid to perform the physical work. Kiwi brings them organised,
            recurring work and takes the scheduling and administration off them. They pay us for
            that operating layer. You do not.
          </p>
        </Reveal>

        <Reveal className="paid-grid">
          <PerchedKiwi where="rule" pose="alert" tilt={0} />
          {ANSWERS.map(({ n, q, a, body }, i) => (
            <div key={n} className="paid-item" style={{ '--d': `${i * 70}ms` }}>
              <span className="paid-n mono">{n}</span>
              <p className="paid-q">{q}</p>
              <p className="paid-a">{a}</p>
              <p className="paid-body muted">{body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="paid-foot">
          <p className="paid-note muted">
            We will put the arrangement in writing before any work is instructed, including with your
            existing providers, so nothing about how we are paid has to be taken on trust.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
