import Reveal from './Reveal';
import MoneyFlow from './MoneyFlow';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';

/* The three questions a buyer forms in this order, answered in this order.
   The first has to be precise now that Kiwi sits in the payment path: the
   work still costs what it costs, and what is free is Kiwi. The third is not
   optional — a coordinator paid by the inspection provider has to say out
   loud why that cannot bend an examination. */
const ANSWERS = [
  {
    n: '01',
    q: 'What does Kiwi cost you?',
    a: 'Nothing on top.',
    body:
      'You pay for the inspection work itself, as you do today, at the rate you already agreed with ' +
      'your specialist. There is no Kiwi licence, subscription, implementation charge or management ' +
      'fee, and nothing is added to a provider’s invoice on its way to you.',
  },
  {
    n: '02',
    q: 'So how are we paid?',
    a: 'By the provider.',
    body:
      'We take an agreed share of the work we place with them, and the provider absorbs it out of ' +
      'their rate. In return they get booked, recurring work and none of the administration around ' +
      'it — no chasing your team for access, approvals, purchase orders or payment.',
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

/* The five facts a finance team wants underneath the picture. */
const LEDGER = [
  ['One supplier', 'Kiwi is the only compliance line on your purchase ledger, however many providers work the estate.'],
  ['One invoice', 'Raised monthly, itemised to the asset, with the quoted figure shown against the invoiced figure on every line.'],
  ['One payment', 'On your terms. We settle with each provider on ours, so a slow approval never becomes a provider chasing your team.'],
  ['Checked first', 'Duplicates, overcharges and invoices without evidence are stopped before the statement is raised, not after you have paid.'],
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
            recurring work and takes the scheduling, chasing and administration off them. They pay us
            for that operating layer. You do not.
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

        {/* -------------------------------------------------- the money flow */}
        <Reveal className="paid-flow">
          <div className="paid-flow-head">
            <h3 className="h3 paid-flow-title">One invoice in. One payment out.</h3>
            <p className="muted paid-flow-copy">
              We are the counterparty for the whole estate. Every provider invoice comes to us and is
              checked against the quote and the evidence before it can travel any further. You
              receive one itemised invoice a month and make one payment; we settle with every
              provider behind it.
            </p>
          </div>
          <MoneyFlow label="Invoices travel from your providers to Kiwi, and from Kiwi to you as one invoice. Money travels from you to Kiwi, and from Kiwi out to every provider." />
          <dl className="paid-ledger">
            {LEDGER.map(([t, b]) => (
              <div key={t}>
                <dt>{t}</dt>
                <dd className="muted">{b}</dd>
              </div>
            ))}
          </dl>
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
