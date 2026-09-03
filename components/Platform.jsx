'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { useInView } from './hooks';
import {
  ESTATE, STATUS_SPLIT, SITES, ASSETS, UPCOMING, JOBS,
  DOCUMENTS, CATEGORIES, ASSET_DETAIL, STAGES,
  PROVIDER_DETAIL, THREADS, INVOICE_SUMMARY, INVOICE_CHECKS, INVOICES,
  REGISTER_RECON, REGISTER_EXCEPTIONS, KIWI_WEEK,
  SHEET_COLS, SHEET_ROWS, SHEET_NOTE, CASE,
  PROVIDER_COLS, PROVIDER_ROWS, DOC_COLS, DOC_ROWS,
  REPORTS_LIST, REPORT_OPEN, ACTIVITY_COLS, ACTIVITY_ROWS,
} from './platformData';

const NAV = [
  'Overview', 'Register', 'Coordination', 'Comms', 'Invoicing',
  'Documents', 'Sites', 'Providers', 'Reports',
];

const COL_LETTER = (i) => String.fromCharCode(65 + i);

/* The record shown the way an estates team already reads a record: row
   numbers, column letters, a live cell and a reconciliation line underneath. */
function Sheet({ cols, rows, selected = 1, cell, note, tone }) {
  return (
    <div className="sheet">
      <div className="sheet-bar">
        <span className="sheet-ref mono">A{selected + 1}</span>
        <span className="sheet-fx mono">fx</span>
        <span className="sheet-val mono">{cell ?? rows[selected]?.[0]}</span>
      </div>
      <div className="sheet-scroll">
        <table className="sheet-grid">
          <thead>
            <tr className="sheet-letters">
              <th />
              {cols.map((_, i) => <th key={i}>{COL_LETTER(i)}</th>)}
            </tr>
            <tr className="sheet-head">
              <th><span className="sheet-n mono">1</span></th>
              {cols.map((c) => <th key={c}>{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className={ri === selected ? 'is-live' : undefined}>
                <th><span className="sheet-n mono">{ri + 2}</span></th>
                {r.map((v, ci) => (
                  <td key={ci} className={ci === 0 ? 'sheet-key mono' : undefined}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className={`sheet-note${tone ? ` is-${tone}` : ''}`}>
          <span className="sheet-tick" aria-hidden="true">✓</span>{note}
        </p>
      )}
    </div>
  );
}

/* A case file. Severity and reference top right, the clock across the middle,
   the finding and the owners side by side, the plan along the foot. */
function CaseFile({ onBack }) {
  return (
    <>
      <button className="pf-back" onClick={onBack}>← All work</button>
      <div className="case">
        <header className="case-top">
          <div>
            <h3 className="case-title">{CASE.title}</h3>
            <p className="case-sub">{CASE.asset}</p>
          </div>
          <div className="case-chips">
            <span className="case-chip mono">{CASE.ref}</span>
            <span className="case-chip">{CASE.kind}</span>
            <span className="case-chip is-sev">{CASE.severity}</span>
          </div>
        </header>

        <ol className="case-rail">
          {CASE.stages.map((label, i) => (
            <li key={label}
                className={`case-step${i < CASE.stage ? ' is-done' : ''}${i === CASE.stage ? ' is-now' : ''}`}>
              <span className="case-dot" aria-hidden="true">{i < CASE.stage ? '✓' : ''}</span>
              <span className="case-step-l">{label}</span>
            </li>
          ))}
        </ol>

        <div className="case-body">
          <section className="case-col">
            <h4 className="case-h">Finding</h4>
            <dl className="case-dl">
              {CASE.details.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="case-dates">
              {CASE.dates.map(([k, v]) => (
                <span key={k} className="case-date">
                  <span className="case-date-k">{k}</span>
                  <span className="case-date-v mono">{v}</span>
                </span>
              ))}
            </div>
          </section>

          <section className="case-col">
            <h4 className="case-h">Who is on it</h4>
            <ul className="case-people">
              {CASE.people.map(([role, who, note]) => (
                <li key={role}>
                  <span className="case-role">{role}</span>
                  <span className="case-who">{who}</span>
                  <span className="case-note">{note}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="case-foot">
          <ol className="case-plan">
            {CASE.plan.map((s) => (
              <li key={s.t} className={s.done ? 'is-done' : undefined}>
                <span className="case-plan-dot" aria-hidden="true">{s.done ? '✓' : ''}</span>{s.t}
              </li>
            ))}
          </ol>
          <span className="case-state">{CASE.status}</span>
        </footer>
      </div>
    </>
  );
}

const pct = (n) => ((n / ESTATE.assets) * 100).toFixed(1);

function Bar() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} className="pf-bar">
      {STATUS_SPLIT.map((s) => (
        <span
          key={s.key}
          className={`pf-bar-seg is-${s.tone}`}
          style={{ width: inView ? `${pct(s.value)}%` : 0 }}
        />
      ))}
    </div>
  );
}

function Table({ head, children, min = 620, rows, exportable = false }) {
  return (
    <>
      {exportable && (
        <div className="pf-export">
          <span className="pf-export-n mono">{rows}</span>
          <span className="pf-export-l">rows</span>
          <span className="pf-export-btn">Export CSV</span>
          <span className="pf-export-btn">Export PDF</span>
        </div>
      )}
      <div className="pf-scroll">
        <table className="pf-table" style={{ minWidth: min }}>
          <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}

const Status = ({ tone, children }) => (
  <span className="status"><span className={`dot is-${tone}`} />{children}</span>
);

/** Where a job has got to on the route from Due to Closed. */
function Track({ stage }) {
  return (
    <div className="track" role="img" aria-label={`Stage ${stage + 1} of ${STAGES.length}: ${STAGES[stage]}`}>
      <ol className="track-nodes">
        {STAGES.map((label, i) => (
          <li
            key={label}
            className={`track-node${i < stage ? ' is-done' : ''}${i === stage ? ' is-now' : ''}`}
            title={label}
          >
            <span className="track-dot" />
          </li>
        ))}
      </ol>
      <p className="track-label">
        <span className="track-label-now">{STAGES[stage]}</span>
        {stage < STAGES.length - 1 && <span className="track-label-next">next: {STAGES[stage + 1]}</span>}
      </p>
    </div>
  );
}

function MiniTrack({ stage }) {
  return (
    <span className="mtrack" role="img"
          aria-label={`Stage ${stage + 1} of ${STAGES.length}: ${STAGES[stage]}`}>
      {STAGES.map((label, i) => (
        <span key={label}
              className={`mtrack-seg${i < stage ? ' is-done' : ''}${i === stage ? ' is-now' : ''}`} />
      ))}
      <span className="mtrack-l">{STAGES[stage]}</span>
    </span>
  );
}

function JobList({ jobs }) {
  return (
    <ul className="joblist">
      {jobs.map((j) => (
        <li key={j.ref}>
          <div className="job-head">
            <div>
              <p className="job-work">{j.work}</p>
              <p className="job-meta"><span className="mono">{j.ref}</span> · {j.site}</p>
            </div>
            <p className="job-provider">
              {j.provider}
              <span className="job-owner">{j.owned ? 'your provider' : 'Kiwi-sourced'}</span>
            </p>
          </div>
          <Track stage={j.stage} />
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------------------------------------- comms ---
   The mailbox is the product. Showing it is the fastest way to make the
   point that the chasing, the objections and the escalation happen on our
   side of the wall rather than the customer's. */

const DIR_LABEL = {
  out: 'Kiwi → provider',
  in: 'Provider → Kiwi',
  note: 'Kiwi → you',
  call: 'Call logged',
  sys: 'System',
};

function Message({ m }) {
  return (
    <li className={`msg is-${m.dir}`}>
      <div className="msg-head">
        <span className="msg-dir">{DIR_LABEL[m.dir]}</span>
        <span className="msg-time mono">{m.time}</span>
      </div>
      {m.dir !== 'sys' && (
        <p className="msg-people">
          <span className="msg-from">{m.from}</span>
          {m.to && <><span className="msg-arrow" aria-hidden="true">→</span><span className="msg-to">{m.to}</span></>}
        </p>
      )}
      <p className="msg-body">{m.body}</p>
      <p className="msg-foot">
        <span className="msg-tag">{m.tag}</span>
        {m.attach && <span className="msg-attach mono">{m.attach}</span>}
      </p>
    </li>
  );
}

function Comms({ open, setOpen }) {
  if (open) {
    return (
      <>
        <button className="pf-back" onClick={() => setOpen(null)}>← All correspondence</button>
        <div className="th-detail-head">
          <div>
            <h3 className="th-detail-subject">{open.subject}</h3>
            <p className="th-detail-meta">
              <span className="mono">{open.id}</span> · {open.provider} · {open.site}
            </p>
          </div>
          <span className={`pill is-${open.tone}`}>{open.state}</span>
        </div>
        <p className="th-detail-summary">{open.summary}</p>
        <ol className="msgs">
          {open.messages.map((m, i) => <Message key={i} m={m} />)}
        </ol>
      </>
    );
  }

  return (
    <>
      <p className="pf-lede muted">
        Every message about your estate, written and sent by us. You are not meant to read these —
        they are the receipts. Providers hear from Kiwi; you hear from Kiwi once, by email, when
        something genuinely needs you.
      </p>
      <ul className="threads">
        {THREADS.map((t) => (
          <li key={t.id}>
            <button className="thread" onClick={() => setOpen(t)}>
              <span className="thread-top">
                <span className="thread-subject">{t.subject}</span>
                <span className={`pill is-${t.tone}`}>{t.state}</span>
              </span>
              <span className="thread-meta">
                <span className="mono">{t.id}</span> · {t.provider} · {t.site} ·{' '}
                <span className="mono">{t.messages.length} messages</span>
              </span>
              <span className="thread-summary">{t.summary}</span>
              <span className={`thread-action${t.clientAction ? ' is-you' : ''}`}>
                {t.clientAction ? 'Needs a decision from you' : 'Handled by Kiwi — nothing needed from you'}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ----------------------------------------------------------- invoicing --- */

function Invoicing() {
  return (
    <>
      <p className="pf-lede muted">
        Provider invoices come to us first. Nothing reaches you until the job, the evidence and the
        amount agree.
      </p>

      <div className="ov-strip">
        {[
          [INVOICE_SUMMARY.received, 'Received'],
          [INVOICE_SUMMARY.matched, 'Matched'],
          [INVOICE_SUMMARY.queried, 'Queried', 'warn'],
          [INVOICE_SUMMARY.recovered, 'Recovered'],
          [INVOICE_SUMMARY.kiwiCharged, 'Charged by Kiwi'],
        ].map(([n, l, tone]) => (
          <div key={l} className="ov-cell">
            <span className={`mono ov-n${tone ? ' is-warn' : ''}`}>{n}</span>
            <span className="ov-l">{l}</span>
          </div>
        ))}
      </div>

      <ol className="inv-row">
        {INVOICE_CHECKS.map((c, i) => (
          <li key={c.label}>
            <span className="inv-row-n mono">{i + 1}</span>{c.label}
          </li>
        ))}
      </ol>

      <Table head={['Invoice', 'Provider', 'Job · site', 'Quoted', 'Amount', 'State']} min={880}>
        {INVOICES.map((v) => (
          <tr key={v.ref}>
            <td className="mono pf-id">{v.ref}</td>
            <td>{v.provider}<span className="inv-note">{v.flag}</span></td>
            <td><span className="mono">{v.job}</span> · {v.site}</td>
            <td className="mono">{v.quoted}</td>
            <td className="mono">{v.amount}</td>
            <td><span className={`pill is-${v.tone}`}>{v.state}</span></td>
          </tr>
        ))}
      </Table>

      <p className="inv-fee-line">
        <span className="mono inv-fee-n">{INVOICE_SUMMARY.kiwiCharged}</span>
        charged to you by Kiwi this quarter. Our fee is agreed with the provider and comes out of
        their rate, not on top of it.
      </p>
    </>
  );
}

/* ------------------------------------------------------------ register --- */

function Register({ asset, setAsset }) {
  if (asset) {
    return (
      <>
        <button className="pf-back" onClick={() => setAsset(false)}>← Back to register</button>
        <div className="pf-asset-head">
          <div>
            <h3 className="pf-asset-id mono">{ASSET_DETAIL.id}</h3>
            <p className="pf-asset-type">{ASSET_DETAIL.type}</p>
            <p className="pf-asset-site">{ASSET_DETAIL.site}</p>
          </div>
          <span className="pill is-current">{ASSET_DETAIL.status}</span>
        </div>

        <dl className="pf-facts">
          <div><dt>Last examination</dt><dd className="mono">{ASSET_DETAIL.last}</dd></div>
          <div><dt>Next due</dt><dd className="mono">{ASSET_DETAIL.next}</dd></div>
          <div><dt>Provider</dt><dd>{ASSET_DETAIL.provider}</dd></div>
        </dl>

        <section className="pf-block">
          <h3 className="pf-block-title">Documents</h3>
          <ul className="pf-docs">
            {ASSET_DETAIL.documents.map((d) => (
              <li key={d}><span className="pf-doc-name">{d}</span><span className="pf-doc-tag">attached</span></li>
            ))}
          </ul>
        </section>

        <section className="pf-block">
          <h3 className="pf-block-title">History</h3>
          <ol className="pf-timeline">
            {ASSET_DETAIL.timeline.map((t) => (
              <li key={t.year} className={t.done ? (t.fresh ? 'is-fresh' : 'is-done') : 'is-next'}>
                <span className="pf-tl-dot" />
                <span className="mono pf-tl-year">{t.year}</span>
                <span className="pf-tl-note">{t.note}</span>
              </li>
            ))}
          </ol>
        </section>
      </>
    );
  }

  return (
    <>
      <p className="pf-lede muted">
        An asset that is missing from the register has never been examined. We treat that as a
        compliance failure, not a data problem, and we reconcile what you tell us against what is
        actually on site.
      </p>

      <section className="pf-block">
        <h3 className="pf-block-title">How the register was built</h3>
        <table className="recon">
          <tbody>
            {REGISTER_RECON.rows.map((r) => (
              <tr key={r.label} className={r.tone ? `is-${r.tone}` : undefined}>
                <th scope="row">
                  <span className="recon-label">{r.label}</span>
                  {r.note && <span className="recon-note">{r.note}</span>}
                </th>
                <td className="mono recon-v">
                  <span className="recon-sign">{r.sign}</span>
                  {r.value.toLocaleString('en-GB')}
                </td>
              </tr>
            ))}
            <tr className="recon-total">
              <th scope="row">Register today</th>
              <td className="mono recon-v">{REGISTER_RECON.total.toLocaleString('en-GB')}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="pf-block">
        <h3 className="pf-block-title">Open register exceptions</h3>
        <Table head={['Ref', 'Asset', 'Site', 'Exception', 'Found by', 'State']} min={800}>
          {REGISTER_EXCEPTIONS.map((e) => (
            <tr key={e.ref}>
              <td className="mono pf-id">{e.ref}</td>
              <td className="mono pf-id">{e.asset}</td>
              <td>{e.site}</td>
              <td>{e.kind}</td>
              <td>{e.found}</td>
              <td><Status tone={e.tone}>{e.state}</Status></td>
            </tr>
          ))}
        </Table>
      </section>

      <section className="pf-block">
        <h3 className="pf-block-title">Register</h3>
        <div className="pf-export">
          <span className="pf-export-n mono">{ESTATE.assets.toLocaleString('en-GB')}</span>
          <span className="pf-export-l">rows · filtered to 12</span>
          <span className="pf-export-btn">Export CSV</span>
          <span className="pf-export-btn">Export PDF</span>
        </div>
        <Sheet cols={SHEET_COLS} rows={SHEET_ROWS} selected={2}
               cell="GL-04" note={SHEET_NOTE} />
      </section>
    </>
  );
}

/* ----------------------------------------------------------- providers --- */

function Providers() {
  return (
    <>
      <p className="pf-lede muted">
        Who does the work, how fast they answer us, and how long evidence takes after the visit.
        We hold these relationships so you do not have to.
      </p>
      <div className="pf-export">
        <span className="pf-export-n mono">{ESTATE.providers}</span>
        <span className="pf-export-l">providers · 16 shown</span>
        <span className="pf-export-btn">Export CSV</span>
      </div>
      <Sheet cols={PROVIDER_COLS} rows={PROVIDER_ROWS} selected={5} cell="Midlands Electrical Testing"
             note="Evidence return over 10 days on 3 providers. Raised and under review." tone="due" />
    </>
  );
}

/* ========================================================================= */

export default function Platform() {
  const [view, setView] = useState('Overview');
  const [site, setSite] = useState(null);
  const [asset, setAsset] = useState(false);
  const [thread, setThread] = useState(null);
  const [caseOpen, setCaseOpen] = useState(false);
  const [report, setReport] = useState(null);

  const go = (v) => {
    setView(v); setSite(null); setAsset(false);
    setThread(null); setCaseOpen(false); setReport(null);
  };

  return (
    <section className="section dark pf-section" id="platform">
      <FruitCorner where="platform" />
      <div className="container">
        <Reveal className="pf-head">
          <div>
            <p className="eyebrow">The platform</p>
            <h2 className="h2">The platform you don&rsquo;t have to use.</h2>
          </div>
          <p className="lead muted pf-head-copy">
            Everything Kiwi does is recorded here — the register, the correspondence, the invoices,
            the evidence. You are not expected to live in it. Open it to export something, answer an
            auditor or look at a detail, then close it again.
          </p>
        </Reveal>
      </div>

      <div className="container-wide">
        <div className="pf-stage">
        <PerchedKiwi where="window" pose="oneleg" tilt={-3} />
        <Reveal className="pf-window">
          {/* ------------------------------------------------------- rail */}
          <nav className="pf-rail" aria-label="Platform demo views">
            <span className="pf-rail-brand">KIWI</span>
            <ul>
              {NAV.map((item) => (
                <li key={item}>
                  <button
                    className={`pf-rail-btn${view === item ? ' is-on' : ''}`}
                    onClick={() => go(item)}
                    aria-current={view === item ? 'page' : undefined}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <p className="pf-rail-foot">Operated by Kiwi</p>
          </nav>

          {/* ------------------------------------------------------- main */}
          <div className="pf-main">
            <header className="pf-top">
              <div>
                <p className="pf-greet">Good morning, Sarah</p>
                <p className="pf-crumb">
                  Estate compliance
                  {site && <> · <button className="pf-link" onClick={() => { setSite(null); setAsset(false); }}>Sites</button> · {site.name}</>}
                  {asset && <> · <button className="pf-link" onClick={() => setAsset(false)}>Register</button> · {ASSET_DETAIL.id}</>}
                  {thread && <> · <button className="pf-link" onClick={() => setThread(null)}>Comms</button> · {thread.id}</>}
                </p>
              </div>
              <span className="pf-avatar" aria-hidden="true">SW</span>
            </header>

            <div className="pf-body">
              {/* ------------------------------------------------ overview */}
              {view === 'Overview' && (
                <>
                  <div className="ov-strip">
                    {[
                      [ESTATE.assets.toLocaleString('en-GB'), 'Assets'],
                      [ESTATE.sites, 'Sites'],
                      [ESTATE.providers, 'Providers'],
                      [ESTATE.due90, 'Due in 90 days'],
                      [ESTATE.actions, 'Actions open', 'warn'],
                      [ESTATE.certificates.toLocaleString('en-GB'), 'Certificates'],
                    ].map(([n, l, tone]) => (
                      <div key={l} className="ov-cell">
                        <span className={`mono ov-n${tone ? ' is-warn' : ''}`}>{n}</span>
                        <span className="ov-l">{l}</span>
                      </div>
                    ))}
                  </div>

                  <div className="ov-split">
                    <section className="ov-main">
                      <h3 className="pf-block-title">What happened on your estate</h3>
                      <Table head={ACTIVITY_COLS} min={720}>
                        {ACTIVITY_ROWS.map((r, i2) => (
                          <tr key={i2}>
                            <td className="mono ov-time">{r[0]}</td>
                            <td>{r[1]}</td>
                            <td className="mono pf-id">{r[2]}</td>
                            <td>{r[3]}</td>
                            <td className="ov-out">{r[4]}</td>
                          </tr>
                        ))}
                      </Table>
                    </section>

                    <aside className="ov-side">
                      <h3 className="pf-block-title">Needs you</h3>
                      <p className="ov-none">
                        <span className="mono ov-none-n">{KIWI_WEEK.needsYou}</span>
                        item. It has been emailed to you and is waiting on a reply.
                      </p>
                      <h3 className="pf-block-title ov-h2">Estate status</h3>
                      <Bar />
                      <ul className="pf-legend">
                        {STATUS_SPLIT.map((st) => (
                          <li key={st.key}>
                            <span className={`dot is-${st.tone}`} />{st.label}
                            <span className="mono pf-legend-n">{st.value.toLocaleString('en-GB')}</span>
                          </li>
                        ))}
                      </ul>
                      <h3 className="pf-block-title ov-h2">This week, Kiwi</h3>
                      <ul className="ov-week">
                        {KIWI_WEEK.stats.map((st) => (
                          <li key={st.l}>
                            <span className="mono ov-week-n">{st.n}</span>
                            <span className="ov-week-l">{st.l}</span>
                          </li>
                        ))}
                      </ul>
                    </aside>
                  </div>
                </>
              )}

              {/* ------------------------------------------------ register */}
              {view === 'Register' && <Register asset={asset} setAsset={setAsset} />}

              {/* -------------------------------------------- coordination */}
              {view === 'Coordination' && !caseOpen && (
                <>
                  <p className="pf-lede muted">
                    Every requirement travels the same route. We move it; you can watch it.
                  </p>
                  <Table head={['Ref', 'Work', 'Asset · site', 'Provider', 'Stage', 'Next']} min={860}>
                    {JOBS.map((j) => (
                      <tr key={j.ref} className="is-clickable" tabIndex={0}
                          onClick={() => setCaseOpen(true)}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setCaseOpen(true))}>
                        <td className="mono pf-id">{j.ref}</td>
                        <td>{j.work}</td>
                        <td>{j.site}</td>
                        <td>
                          {j.provider}
                          <span className="co-own">{j.owned ? 'yours' : 'Kiwi-sourced'}</span>
                        </td>
                        <td><MiniTrack stage={j.stage} /></td>
                        <td className="co-next">{STAGES[Math.min(j.stage + 1, STAGES.length - 1)]}</td>
                      </tr>
                    ))}
                  </Table>
                </>
              )}

              {view === 'Coordination' && caseOpen && <CaseFile onBack={() => setCaseOpen(false)} />}

              {/* --------------------------------------------------- comms */}
              {view === 'Comms' && <Comms open={thread} setOpen={setThread} />}

              {/* ----------------------------------------------- invoicing */}
              {view === 'Invoicing' && <Invoicing />}


              {/* ----------------------------------------------- documents */}
              {view === 'Documents' && (
                <>
                  <p className="pf-lede muted">
                    Every certificate, report and scheme, filed against the asset it belongs to.
                  </p>
                  <div className="pf-export">
                    <span className="pf-export-n mono">{ESTATE.certificates.toLocaleString('en-GB')}</span>
                    <span className="pf-export-l">documents · 12 shown</span>
                    <span className="pf-export-btn">Export index</span>
                    <span className="pf-export-btn">Download all</span>
                  </div>
                  <Sheet cols={DOC_COLS} rows={DOC_ROWS} selected={1} cell="LOLER Thorough Examination"
                         note="Every document is attached to an asset on the register. None are orphaned." />
                </>
              )}

              {/* --------------------------------------------------- sites */}
              {view === 'Sites' && !site && (
                <Table head={['Site', 'Assets', 'Current', 'Due soon', 'Action', 'Status']}
                       exportable rows={ESTATE.sites}>
                  {SITES.map((s) => (
                    <tr key={s.id} className="is-clickable" tabIndex={0}
                        onClick={() => setSite(s)}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSite(s))}>
                      <td>{s.name}</td>
                      <td className="mono">{s.assets}</td>
                      <td className="mono">{s.current}</td>
                      <td className="mono">{s.due}</td>
                      <td className="mono">{s.action}</td>
                      <td><Status tone={s.tone}>{s.tone === 'current' ? 'Current' : s.tone === 'due' ? 'Due soon' : 'Action required'}</Status></td>
                    </tr>
                  ))}
                </Table>
              )}

              {view === 'Sites' && site && (
                <>
                  <button className="pf-back" onClick={() => setSite(null)}>← All sites</button>
                  <div className="pf-headline">
                    <span className="pf-headline-n mono">{site.assets}</span>
                    <span className="pf-headline-l">assets at {site.name}</span>
                  </div>
                  <div className="pf-cards pf-cards-3">
                    {[[site.current, 'Current'], [site.due, 'Due soon'], [site.action, 'Require action']].map(([n, l]) => (
                      <div key={l} className="pf-card"><span className="pf-card-n mono">{n}</span><span className="pf-card-l">{l}</span></div>
                    ))}
                  </div>
                  <section className="pf-block">
                    <h3 className="pf-block-title">By category</h3>
                    <Table head={['Category', 'Assets', 'Current', 'Due soon', 'Action']} min={520}>
                      {CATEGORIES.map((c) => (
                        <tr key={c.label}>
                          <td>{c.label}</td>
                          <td className="mono">{c.total}</td>
                          <td className="mono">{c.current}</td>
                          <td className="mono">{c.due}</td>
                          <td className="mono">{c.action}</td>
                        </tr>
                      ))}
                    </Table>
                  </section>
                </>
              )}

              {/* ----------------------------------------------- providers */}
              {view === 'Providers' && <Providers />}

              {/* ------------------------------------------------- reports */}
              {view === 'Reports' && !report && (
                <>
                  <p className="pf-lede muted">
                    The pack an auditor, an insurer or a customer asks for, built and kept current.
                    Open one to see what is in it.
                  </p>
                  <Table head={['Report', 'Period', 'Built', 'Items', 'Size', '']} min={720}>
                    {REPORTS_LIST.map((r) => (
                      <tr key={r.id} className="is-clickable" tabIndex={0}
                          onClick={() => setReport(r)}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setReport(r))}>
                        <td>
                          <span className="rp-name">{r.name}</span>
                          <span className="rp-id mono">{r.id}</span>
                        </td>
                        <td>{r.period}</td>
                        <td className="mono">{r.built}</td>
                        <td className="mono">{r.items.toLocaleString('en-GB')}</td>
                        <td className="mono">{r.size}</td>
                        <td><span className={`pill is-${r.tone}`}>Open</span></td>
                      </tr>
                    ))}
                  </Table>
                </>
              )}

              {view === 'Reports' && report && (
                <>
                  <button className="pf-back" onClick={() => setReport(null)}>← All reports</button>
                  <div className="rp-head">
                    <div>
                      <h3 className="rp-title">{REPORT_OPEN.name}</h3>
                      <p className="rp-meta mono">{REPORT_OPEN.id} · built {REPORT_OPEN.built}</p>
                      <p className="rp-by">{REPORT_OPEN.by}</p>
                    </div>
                    <div className="pf-export rp-export">
                      <span className="pf-export-btn">Export PDF</span>
                      <span className="pf-export-btn">Export CSV</span>
                    </div>
                  </div>
                  <Sheet cols={REPORT_OPEN.cols} rows={REPORT_OPEN.rows} selected={1}
                         cell="4.11.1"
                         note="Two requirements have an open action. Evidence for the rest is current and attached." tone="due" />
                </>
              )}
            </div>
          </div>
        </Reveal>

        </div>

        <p className="pf-note">
          Illustrative interface. Sites, assets, providers, correspondence and invoices are examples,
          not customer records.
        </p>
      </div>
    </section>
  );
}
