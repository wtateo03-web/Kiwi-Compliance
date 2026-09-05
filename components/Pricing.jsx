import Reveal from './Reveal';
import MoneyFlow from './MoneyFlow';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';

/* ==========================================================================
   What it costs
   Replaces the "why don't we charge you?" section. The estate pays Kiwi for
   the state — each covered asset kept in date, evidenced and closed — and
   the specialists' work passes through at the rate already agreed. Nothing
   is taken from providers, and nothing is earned on what they find. That is
   the whole model, and it has to be said this plainly because a free
   service in this category reads as a catch, and a provider-funded one
   reads as a conflict. This is neither.
   ========================================================================== */
const ANSWERS = [
  {
    n: '01',
    q: 'What are you paying for?',
    a: 'The state, not the visits.',
    body:
      'Every covered asset carries one flat fee, per year, for being kept in date, evidenced and ' +
      'closed. It is priced against the person you would otherwise hire to do this, and it comes in ' +
      'well under. It does not move when an asset is examined more often, or less.',
  },
  {
    n: '02',
    q: 'And the inspections themselves?',
    a: 'At cost.',
    body:
      'Your specialists do the work at the rate you already agreed with them, and it passes through ' +
      'to you on one statement, checked against the quote and the evidence. We take nothing from ' +
      'them. Your rate is your rate.',
  },
  {
    n: '03',
    q: 'Could that bend an inspection?',
    a: 'No, and here is why.',
    body:
      'We are paid per asset for the state, never for findings and never for remedial work. Our ' +
      'fee is identical whether an asset passes, fails or raises twenty defects. Kiwi does not ' +
      'carry out, witness or sign an examination — the competent person does, and their report ' +
      'reaches you exactly as written.',
  },
];

/* The four facts a finance team wants underneath the picture. */
const LEDGER = [
  ['One supplier', 'Kiwi is the only compliance line on your purchase ledger, however many specialists work the estate.'],
  ['One invoice', 'Raised monthly: the specialists’ work at cost, itemised to the asset, and our fee as its own line.'],
  ['One payment', 'On your terms. We settle with each specialist at their rate, so a slow approval never becomes a provider chasing your team.'],
  ['Nothing on findings', 'Not a percentage of the work, not a share of a remedial, not a cut of the provider’s rate. A flat fee for the state, and nothing else.'],
];

export default function Pricing() {
  return (
    <section className="section has-fruit" id="commercial">
      <FruitCorner where="paid" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">What it costs</p>
          <h2 className="h2 measure">One fee, per covered asset, per year.</h2>
          <p className="lead muted paid-lede">
            You pay Kiwi for each asset we keep in date. Your specialists&rsquo; work passes through
            at the rate you already agreed. The first cycle is free, and the fee is put in writing
            before anything else is instructed.
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
              Every specialist invoice comes to us and is checked against the quote and the evidence
              before it can travel any further. You receive one itemised invoice a month and make
              one payment. We settle with every specialist behind it at their rate, and our own fee
              sits on the same statement as its own line.
            </p>
          </div>
          <MoneyFlow label="Invoices travel from your specialists to Kiwi, and from Kiwi to you as one invoice with Kiwi's fee as a separate line. Money travels from you to Kiwi, and from Kiwi out to every specialist at their agreed rate." />
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
            The fee per asset depends on the regimes on your estate and how many assets carry them.
            We will put the number in writing after the first cycle, before anything else is
            instructed, so nothing about how we are paid has to be taken on trust.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
