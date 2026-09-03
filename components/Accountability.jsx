import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';

/* ==========================================================================
   Who owns what
   The distinction that lets Kiwi say it runs physical compliance without
   over-claiming: the competent person keeps technical responsibility and the
   duty holder keeps the statutory duty, which cannot be delegated to anyone.
   What is left — the entire operating layer — is genuinely ours, and saying
   so precisely is what makes the claim survive a legal read.
   ========================================================================== */

const SPECIALIST = [
  'Technical judgement on site',
  'The findings and what they mean',
  'Certification and sign-off',
  'Professional liability for the examination',
];

const KIWI = [
  'What is due, on what interval, against which asset',
  'Who is attending, and when they are on site',
  'Whether the evidence comes back, and chasing it until it does',
  'Whether every defect raised is driven to closure',
  'Whether the record is complete enough to hand an auditor',
];

export default function Accountability() {
  return (
    <section className="section acct" id="accountability">
      <div className="container">
        <Reveal className="acct-head">
          <div>
            <p className="eyebrow">Where responsibility sits</p>
            <h2 className="h2">
              The specialist owns the examination. We own everything around it.
            </h2>
          </div>
          <p className="lead muted acct-head-copy">
            Coordination sounds like an assistant. This is not that. Kiwi takes operational
            ownership of the process — and is accountable for it — while the parts that must stay
            with a qualified person, and with you, stay exactly where the law puts them.
          </p>
        </Reveal>

        <Reveal className="acct-split">
          <PerchedKiwi where="rule" pose="alert" flip tilt={0} />

          <div className="acct-col">
            <p className="acct-who">The independent specialist</p>
            <p className="acct-role">Owns the examination</p>
            <ul className="acct-list">
              {SPECIALIST.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>

          <div className="acct-col is-kiwi">
            <p className="acct-who">Kiwi</p>
            <p className="acct-role">Owns the process</p>
            <ul className="acct-list">
              {KIWI.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </Reveal>

        {/* The line that makes the rest of the page credible to a lawyer. */}
        <Reveal className="acct-duty">
          <p className="acct-duty-t">The statutory duty stays with you.</p>
          <p className="acct-duty-b">
            It cannot be contracted out, and we would not claim to take it. What we take is the
            operating burden that sits on top of it — and the accountability for whether the work
            actually happened, was evidenced, and was closed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
