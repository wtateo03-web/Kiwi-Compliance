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
  INTAKE_SLA, INTAKE, INTAKE_STATES, REGISTER_RECON, REGISTER_EXCEPTIONS,
  KIWI_WEEK,
} from './platformData';

const NAV = [
  'Overview', 'Register', 'Coordination', 'Comms', 'Invoicing',
  'Intake', 'Documents', 'Sites', 'Providers', 'Reports',
];

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

function Table({ head, children, min = 620 }) {
  return (
    <div className="pf-scroll">
      <table className="pf-table" style={{ minWidth: min }}>
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{children}</tbody>
      </table>
    </div>
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
        Every message about your estate, written and sent by us. Providers hear from Kiwi; you hear
        from Kiwi once, when there is something worth telling you.
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
        Provider invoices come to us first. Nothing is put in front of you until the job, the
        evidence and the amount agree.
      </p>

      <div className="pf-cards">
        {[
          [INVOICE_SUMMARY.received, 'Invoices received'],
          [INVOICE_SUMMARY.matched, 'Matched automatically'],
          [INVOICE_SUMMARY.queried, 'Queried by Kiwi'],
          [INVOICE_SUMMARY.recovered, 'Recovered'],
        ].map(([n, l]) => (
          <div key={l} className="pf-card">
            <span className="pf-card-n mono">{n}</span>
            <span className="pf-card-l">{l}</span>
          </div>
        ))}
      </div>
      <p className="inv-quarter mono">{INVOICE_SUMMARY.quarter}</p>

      <section className="pf-block">
        <h3 className="pf-block-title">Every invoice passes five checks</h3>
        <ol className="inv-checks">
          {INVOICE_CHECKS.map((c, i) => (
            <li key={c.label}>
              <span className="inv-check-n mono">{i + 1}</span>
              <span className="inv-check-body">
                <span className="inv-check-label">{c.label}</span>
                <span className="inv-check-note">{c.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="pf-block">
        <h3 className="pf-block-title">Recent invoices</h3>
        <ul className="invoices">
          {INVOICES.map((v) => (
            <li key={v.ref}>
              <div className="inv-top">
                <div>
                  <p className="inv-ref mono">{v.ref}</p>
                  <p className="inv-provider">{v.provider}</p>
                  <p className="inv-meta"><span className="mono">{v.job}</span> · {v.site}</p>
                </div>
                <div className="inv-right">
                  <p className="inv-amount mono">{v.amount}</p>
                  {v.amount !== v.quoted && <p className="inv-quoted mono">quoted {v.quoted}</p>}
                  <span className={`pill is-${v.tone}`}>{v.state}</span>
                </div>
              </div>
              <p className="inv-flag">{v.flag}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pf-block">
        <div className="inv-fee">
          <p className="inv-fee-n mono">{INVOICE_SUMMARY.kiwiCharged}</p>
          <div>
            <p className="inv-fee-l">Charged to you by Kiwi this quarter</p>
            <p className="inv-fee-note">
              Our fee is agreed with the provider and comes out of their rate, not on top of it. It
              does not appear on anything you are invoiced, and it does not change with the outcome
              of an examination.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------- intake --- */

function Intake() {
  return (
    <>
      <p className="pf-lede muted">
        Send it in whatever state it is in. Spreadsheets, scans, a folder export, a photograph of a
        certificate on a wall, a forwarded email chain. We read it, structure it and file it.
      </p>

      <div className="intake-drop" role="img" aria-label="File intake area">
        <span className="intake-drop-mark" aria-hidden="true">↓</span>
        <p className="intake-drop-title">Drop anything here</p>
        <p className="intake-drop-sub">
          .xlsx · .csv · .pdf · .zip · .msg · photographs · scans · whatever your predecessor left behind
        </p>
      </div>

      <div className="pf-cards">
        {[
          [INTAKE_SLA.promise, 'Filed within'],
          [INTAKE_SLA.median, 'Median so far'],
          [INTAKE_SLA.processed.toLocaleString('en-GB'), 'Items processed'],
          [INTAKE_SLA.breached, 'Missed'],
        ].map(([n, l]) => (
          <div key={l} className="pf-card">
            <span className="pf-card-n mono">{n}</span>
            <span className="pf-card-l">{l}</span>
          </div>
        ))}
      </div>

      <section className="pf-block">
        <h3 className="pf-block-title">What happens to it</h3>
        <ol className="intake-flow">
          {INTAKE_STATES.map((s, i) => (
            <li key={s}>
              <span className="intake-flow-n mono">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </section>

      <section className="pf-block">
        <h3 className="pf-block-title">Recently received</h3>
        <ul className="intake-list">
          {INTAKE.map((f) => (
            <li key={f.file}>
              <div className="intake-top">
                <div className="intake-id">
                  <p className="intake-file mono">{f.file}</p>
                  <p className="intake-meta">{f.kind} · {f.size} · {f.from}</p>
                </div>
                <div className="intake-right">
                  <span className="intake-elapsed mono">{f.elapsed}</span>
                  <span className={`pill is-${f.tone}`}>{f.state}</span>
                </div>
              </div>
              <p className="intake-outcome">{f.outcome}</p>
            </li>
          ))}
        </ul>
      </section>
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
        <h3 className="pf-block-title">Assets</h3>
        <Table head={['Asset', 'Type', 'Site', 'Next due', 'Status']}>
          {ASSETS.map((a) => (
            <tr key={a.id} className="is-clickable" tabIndex={0}
                onClick={() => setAsset(true)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setAsset(true))}>
              <td className="mono pf-id">{a.id}</td>
              <td>{a.type}</td>
              <td>{a.site}</td>
              <td className="mono">{a.due}</td>
              <td><Status tone={a.tone}>{a.status}</Status></td>
            </tr>
          ))}
        </Table>
      </section>
    </>
  );
}

/* ----------------------------------------------------------- providers --- */

const SOURCED = {
  yours: 'Your provider',
  kiwi: 'Kiwi-sourced',
  insurer: 'Insurer appointed',
};

function Providers() {
  return (
    <>
      <p className="pf-lede muted">
        Who does the work on your estate, how quickly they answer us, and how long the evidence
        takes to arrive after the visit. We hold these relationships so you do not have to.
      </p>
      <ul className="prv-list">
        {PROVIDER_DETAIL.map((p) => (
          <li key={p.id}>
            <div className="prv-top">
              <div>
                <p className="prv-name">{p.name}</p>
                <p className="prv-field">{p.field}</p>
              </div>
              <span className={`prv-sourced is-${p.sourced}`}>{SOURCED[p.sourced]}</span>
            </div>

            <dl className="prv-facts">
              <div><dt>Contact</dt><dd>{p.contact}<span className="prv-role">{p.role}</span></dd></div>
              <div><dt>Email</dt><dd className="mono prv-wrap">{p.email}</dd></div>
              <div><dt>Telephone</dt><dd className="mono">{p.phone}</dd></div>
              <div><dt>Accreditation</dt><dd>{p.accred}</dd></div>
              <div><dt>Relationship</dt><dd>{p.since}</dd></div>
              <div><dt>Sites covered</dt><dd className="mono">{p.sites}</dd></div>
            </dl>

            <div className="prv-metrics">
              <span className="prv-metric">
                <span className="mono prv-metric-n">{p.respondHrs}h</span>
                <span className="prv-metric-l">Median reply to us</span>
              </span>
              <span className="prv-metric">
                <span className={`mono prv-metric-n is-${p.evidenceTone}`}>{p.evidenceDays}d</span>
                <span className="prv-metric-l">Visit to evidence</span>
              </span>
              <span className="prv-metric">
                <span className="mono prv-metric-n">{p.open}</span>
                <span className="prv-metric-l">Open jobs</span>
              </span>
              <span className="prv-metric">
                <span className="mono prv-metric-n">{p.completed}</span>
                <span className="prv-metric-l">Completed</span>
              </span>
            </div>

            <p className="prv-note">{p.note}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ========================================================================= */

export default function Platform() {
  const [view, setView] = useState('Overview');
  const [site, setSite] = useState(null);
  const [asset, setAsset] = useState(false);
  const [thread, setThread] = useState(null);

  const go = (v) => { setView(v); setSite(null); setAsset(false); setThread(null); };

  return (
    <section className="section dark pf-section" id="platform">
      <FruitCorner where="platform" />
      <div className="container">
        <Reveal className="pf-head">
          <div>
            <p className="eyebrow">The platform</p>
            <h2 className="h2">We run it. You watch it.</h2>
          </div>
          <p className="lead muted pf-head-copy">
            The register, the correspondence, the invoices and the evidence — one place, kept current
            by us. Look at the correspondence and the invoicing: that is the work you stop doing.
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
                  <div className="pf-headline">
                    <span className="pf-headline-n mono">{ESTATE.due90}</span>
                    <span className="pf-headline-l">items due in the next 90 days</span>
                    <span className="pf-headline-sep" aria-hidden="true" />
                    <span className="pf-headline-n mono pf-headline-warn">{ESTATE.actions}</span>
                    <span className="pf-headline-l">actions open</span>
                  </div>

                  <div className="pf-cards">
                    {[
                      [ESTATE.assets.toLocaleString('en-GB'), 'Assets tracked'],
                      [ESTATE.sites, 'Sites'],
                      [ESTATE.providers, 'Providers coordinated'],
                      [ESTATE.certificates.toLocaleString('en-GB'), 'Certificates on file'],
                    ].map(([n, l]) => (
                      <div key={l} className="pf-card">
                        <span className="pf-card-n mono">{n}</span>
                        <span className="pf-card-l">{l}</span>
                      </div>
                    ))}
                  </div>

                  <section className="pf-block">
                    <h3 className="pf-block-title">What Kiwi did this week</h3>
                    <ul className="week">
                      {KIWI_WEEK.stats.map((s) => (
                        <li key={s.l}>
                          <span className="mono week-n">{s.n}</span>
                          <span className="week-l">{s.l}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="week-needs">
                      <span className="mono week-needs-n">{KIWI_WEEK.needsYou}</span>
                      thing needs a decision from you. Everything else is in hand.
                    </p>
                  </section>

                  <section className="pf-block">
                    <h3 className="pf-block-title">Estate status</h3>
                    <Bar />
                    <ul className="pf-legend">
                      {STATUS_SPLIT.map((s) => (
                        <li key={s.key}>
                          <span className={`dot is-${s.tone}`} />
                          {s.label}
                          <span className="mono pf-legend-n">{s.value.toLocaleString('en-GB')}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="pf-block">
                    <h3 className="pf-block-title">Work Kiwi is moving</h3>
                    <JobList jobs={JOBS.slice(0, 3)} />
                  </section>

                  <section className="pf-block">
                    <h3 className="pf-block-title">Upcoming work</h3>
                    <ul className="pf-upcoming">
                      {UPCOMING.slice(0, 3).map((u) => (
                        <li key={u.title}>
                          <div>
                            <p className="pf-up-title">{u.title}</p>
                            <p className="pf-up-site">{u.site}</p>
                          </div>
                          <div className="pf-up-right">
                            <span className="mono pf-up-due">{u.due}</span>
                            <span className={`pill is-${u.tone}`}>{u.state}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </>
              )}

              {/* ------------------------------------------------ register */}
              {view === 'Register' && <Register asset={asset} setAsset={setAsset} />}

              {/* -------------------------------------------- coordination */}
              {view === 'Coordination' && (
                <>
                  <p className="pf-lede muted">
                    Every requirement travels the same route. We move it along; you watch it move.
                  </p>
                  <JobList jobs={JOBS} />
                  <section className="pf-block">
                    <h3 className="pf-block-title">Upcoming</h3>
                    <Table head={['Requirement', 'Site', 'Due', 'State']}>
                      {UPCOMING.map((u) => (
                        <tr key={u.title}>
                          <td>{u.title}</td>
                          <td>{u.site}</td>
                          <td className="mono">{u.due.replace('Due ', '')}</td>
                          <td><Status tone={u.tone}>{u.state}</Status></td>
                        </tr>
                      ))}
                    </Table>
                  </section>
                </>
              )}

              {/* --------------------------------------------------- comms */}
              {view === 'Comms' && <Comms open={thread} setOpen={setThread} />}

              {/* ----------------------------------------------- invoicing */}
              {view === 'Invoicing' && <Invoicing />}

              {/* -------------------------------------------------- intake */}
              {view === 'Intake' && <Intake />}

              {/* ----------------------------------------------- documents */}
              {view === 'Documents' && (
                <Table head={['Document', 'Asset', 'Site', 'Completed', 'Next due']} min={720}>
                  {DOCUMENTS.map((d) => (
                    <tr key={d.name + d.asset}>
                      <td>{d.name}</td>
                      <td className="mono pf-id">{d.asset}</td>
                      <td>{d.site}</td>
                      <td className="mono">{d.done}</td>
                      <td className="mono">{d.next}</td>
                    </tr>
                  ))}
                </Table>
              )}

              {/* --------------------------------------------------- sites */}
              {view === 'Sites' && !site && (
                <Table head={['Site', 'Assets', 'Current', 'Due soon', 'Action', 'Status']}>
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
              {view === 'Reports' && (
                <>
                  <p className="pf-lede muted">
                    The pack an auditor, an insurer or a customer asks for, ready before they ask.
                  </p>
                  <section className="pf-block">
                    <h3 className="pf-block-title">Estate compliance</h3>
                    <Bar />
                    <ul className="pf-legend">
                      {STATUS_SPLIT.map((s) => (
                        <li key={s.key}>
                          <span className={`dot is-${s.tone}`} />{s.label}
                          <span className="mono pf-legend-n">{s.value.toLocaleString('en-GB')}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="pf-block">
                    <h3 className="pf-block-title">By category</h3>
                    <Table head={['Category', 'Assets', 'Current', 'Due soon', 'Action']} min={520}>
                      {CATEGORIES.map((c) => (
                        <tr key={c.label}>
                          <td>{c.label}</td><td className="mono">{c.total}</td>
                          <td className="mono">{c.current}</td><td className="mono">{c.due}</td><td className="mono">{c.action}</td>
                        </tr>
                      ))}
                    </Table>
                  </section>
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
