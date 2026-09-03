import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';

/* ==========================================================================
   The first cycle
   Everything above this section explains what Kiwi is. This one answers the
   question a buyer actually has to resolve before they can act: what happens
   in the first week, what am I signing, and what does it cost me to find out.
   The reconciliation on day five is the part that converts — it is the first
   moment the customer sees their own estate rather than our demo.
   ========================================================================== */

const STEPS = [
  {
    when: 'Day 1',
    title: 'Send us the mess.',
    body:
      'A shared folder and whatever you already hold — the register, last year’s certificates, the ' +
      'contractor names, the spreadsheet nobody maintains. It does not need tidying first. Untidy ' +
      'is the input we are built for.',
  },
  {
    when: 'Days 2–4',
    title: 'We reconcile it.',
    body:
      'Every asset matched three ways: what you declared, what the certificates actually evidence, ' +
      'and what is on site. Duplicates collapsed, and anything we cannot account for opened as an ' +
      'exception rather than quietly dropped.',
  },
  {
    when: 'Day 5',
    title: 'You see your own estate.',
    body:
      'Not a demo of ours. Your assets, your dates, and — more useful — the list of what we could ' +
      'not place. This is usually the point at which the conversation stops being abstract.',
  },
  {
    when: 'The cycle',
    title: 'We run it through to closed.',
    body:
      'We instruct your specialist, arrange access, chase the evidence back and drive every defect ' +
      'raised to closure. You hear from us once, by email, and only when the answer is genuinely ' +
      'yours to give.',
  },
];

/* The three objections a first engagement dies on, answered before they are
   raised. Each one is a commitment we are prepared to put in the scope. */
const TERMS = [
  [
    'Nothing is signed.',
    'A one-page scope naming the site, the asset class and the cycle. No master agreement, no minimum term, no notice period.',
  ],
  [
    'Nothing extra is paid.',
    'You pay for the examination you were buying anyway, at the rate you already agreed with your specialist. There is no Kiwi fee on this cycle or after it.',
  ],
  [
    'Nothing is replaced.',
    'Your specialists, your CAFM, your contracts and your engineering insurer’s inspection body all stay exactly where they are.',
  ],
];

export default function Pilot() {
  return (
    <section className="section has-fruit" id="pilot">
      <FruitCorner where="pilot" />
      <div className="container">
        <Reveal className="pl-head">
          <div>
            <p className="eyebrow">Where we would start</p>
            <h2 className="h2">One asset class. One site. One cycle.</h2>
          </div>
          <p className="lead muted pl-head-copy">
            A first engagement should not need a procurement process. Pick the regime that causes
            your team the most administration, at a single site, and let us run it end to end once.
            You will know inside a week whether we are worth the conversation.
          </p>
        </Reveal>

        <ol className="pl-rail">
          {STEPS.map(({ when, title, body }, i) => (
            <Reveal as="li" key={when} className="pl-step" delay={i * 60}>
              <span className="pl-dot" aria-hidden="true" />
              <span className="mono pl-when">{when}</span>
              <h3 className="pl-title">{title}</h3>
              <p className="pl-body muted">{body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="pl-terms">
          <PerchedKiwi where="rule" pose="peck" tilt={0} />
          {TERMS.map(([t, b]) => (
            <div key={t} className="pl-term">
              <span className="pl-tick" aria-hidden="true">✓</span>
              <p className="pl-term-t">{t}</p>
              <p className="pl-term-b">{b}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="pl-keep">
          <p className="pl-keep-t">
            At the end of the cycle you decide whether it goes any further. If the answer is no, you
            keep the reconciled register and the evidence pack, and we go away.
          </p>
          <a className="btn btn-primary pl-keep-btn" href="#contact">
            Start with one site <span className="arw" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
