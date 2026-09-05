import Reveal from './Reveal';

/* ==========================================================================
   What enrolment finds
   The stages above say "we reconcile". This shows what that produces. Day
   five of the first cycle is a document, not a demo, and these are the rows
   it usually contains: the same asset described two ways by two systems
   that were never designed to agree. Each row is written as the customer
   would see it — what the records said, then what we did about it.
   ========================================================================== */
const FINDS = [
  {
    kind: 'due',
    type: 'Two next-due dates',
    seen: 'Register: 14 Mar 2027 · Certificate: 09 Feb 2027',
    does: 'The certificate wins. The register is corrected, and the interval is checked against the regime that applies.',
  },
  {
    kind: 'due',
    type: 'On a certificate, not on the register',
    seen: 'LEV report: 23 units examined · Register: 19 listed',
    does: 'Four assets enrolled, each with its obligation attached, and the register grows to what the site actually holds.',
  },
  {
    kind: 'action',
    type: 'Current, with an open defect',
    seen: 'Status: in date · Last report: Category B item, unresolved',
    does: 'The status is corrected. A finding is opened with an owner, a deadline and a place for the evidence it was done.',
  },
  {
    kind: 'action',
    type: 'No evidence inside the interval',
    seen: 'PSSR, 14-month scheme · Last written report: Jun 2024',
    does: 'Raised as overdue, not assumed. Your specialist is instructed and access is arranged.',
  },
  {
    kind: 'dup',
    type: 'Same asset twice',
    seen: 'HOIST-041 · “Hoist 41 (new)” — both lines live',
    does: 'Collapsed to one asset carrying its full history, so the retired line stops generating a due date.',
  },
  {
    kind: 'due',
    type: 'Certificate filed against the wrong site',
    seen: 'Serial on certificate: Leeds · Filed under: Birmingham',
    does: 'Moved to the asset it belongs to. Birmingham’s own asset goes back to needing evidence.',
  },
];

export default function EnrolmentFinds() {
  return (
    <Reveal className="ef">
      <div className="ef-head">
        <div>
          <span className="ef-kicker mono">Day five</span>
          <h3 className="h3">What enrolment finds.</h3>
        </div>
        <p className="muted ef-lede">
          The first thing you receive is a document, not a demo: every asset on the site with its
          regime, its last examination and its next due date, and beneath it the exceptions. Your
          records were never designed to agree with one another. These are the rows that usually
          show it.
        </p>
      </div>

      <ul className="ef-list">
        {FINDS.map(({ kind, type, seen, does }) => (
          <li key={type} className="ef-row">
            <span className={`ef-dot is-${kind}`} aria-hidden="true" />
            <p className="ef-type">{type}</p>
            <p className="ef-seen mono">{seen}</p>
            <p className="ef-does muted">{does}</p>
          </li>
        ))}
      </ul>

      <p className="ef-foot muted">
        Then a last list: what we could not place at all. It comes to you as a question, not a
        deletion, because a register that quietly loses assets is the problem we are here to remove.
      </p>
    </Reveal>
  );
}
