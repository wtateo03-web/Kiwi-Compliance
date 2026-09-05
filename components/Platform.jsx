'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { useInView } from './hooks';
import {
  ESTATE, STATUS_SPLIT, SITES, CATEGORIES, ASSET_DETAIL, STAGES, JOBS,
  THREADS, KIWI_WEEK,
  MONEY, MONEY_RECON, PAY_CHECKS, STATEMENT, STATEMENT_HISTORY,
  STATEMENT_LINES, STATEMENT_HELD,
  REGISTER_RECON, REGISTER_EXCEPTIONS,
  SHEET_COLS, SHEET_ROWS, SHEET_NOTE, CASE,
  PROVIDER_COLS, PROVIDER_ROWS, FILING,
  REPORTS_LIST, REPORT_OPEN, ACTIVITY_COLS, ACTIVITY_ROWS,
} from './platformData';

const NAV = [
  'Overview', 'Register', 'Work', 'Comms', 'Invoicing',
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

function Table({ head, children, min = 620, rows, exportable = false, tight = false }) {
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
        <table className={`pf-table${tight ? ' is-tight' : ''}`} style={{ minWidth: min }}>
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
   Correspondence is shown as correspondence. The customer's own mailbox is
   the section above this one; this is the same shape, holding the traffic
   we keep off it. List on the left, thread on the right, nothing between
   the two but a hairline. */

const DIR = {
  out:  { label: 'Kiwi', side: 'kiwi', init: 'K' },
  in:   { label: 'Provider', side: 'them', init: 'P' },
  note: { label: 'Kiwi', side: 'kiwi', init: 'K' },
  call: { label: 'Kiwi', side: 'kiwi', init: 'K' },
  sys:  { label: 'System', side: 'sys', init: '·' },
};

const initials = (name) =>
  name.split('·')[0].trim().split(/\s+/).filter(Boolean).slice(0, 2)
      .map((w) => w[0]).join('').toUpperCase().slice(0, 2) || 'K';

function Message({ m }) {
  const d = DIR[m.dir];
  if (m.dir === 'sys') {
    return (
      <li className="cmm is-sys">
        <span className="cmm-sys-time mono">{m.time}</span>
        <span className="cmm-sys-body">{m.body}</span>
      </li>
    );
  }
  return (
    <li className={`cmm is-${d.side}`}>
      <span className={`cmm-av is-${d.side}`} aria-hidden="true">
        {m.dir === 'in' ? initials(m.from) : 'K'}
      </span>
      <div className="cmm-main">
        <p className="cmm-line">
          <span className="cmm-who">{m.from}</span>
          {m.to && <span className="cmm-to">to {m.to}</span>}
          <span className="mono cmm-time">{m.time}</span>
        </p>
        <p className="cmm-body">{m.body}</p>
        <p className="cmm-foot">
          <span className="cmm-tag">{m.dir === 'call' ? 'Call logged' : m.tag}</span>
          {m.attach && <span className="cmm-attach mono">▤ {m.attach}</span>}
        </p>
      </div>
    </li>
  );
}

function Comms({ open, setOpen }) {
  const thread = open ?? THREADS[0];

  return (
    <div className="cm">
      <div className="cm-list">
        <div className="cm-list-top">
          <span className="cm-list-h">All correspondence</span>
          <span className="mono cm-list-n">{THREADS.length} threads</span>
        </div>
        <ul>
          {THREADS.map((t) => (
            <li key={t.id}>
              <button
                className={`cm-item${t.id === thread.id ? ' is-on' : ''}`}
                aria-current={t.id === thread.id ? 'true' : undefined}
                onClick={() => setOpen(t)}
              >
                <span className="cm-item-top">
                  <span className="cm-item-who">{t.provider}</span>
                  <span className="mono cm-item-n">{t.messages.length}</span>
                </span>
                <span className="cm-item-subject">{t.subject}</span>
                <span className="cm-item-foot">
                  <span className={`cm-item-state is-${t.tone}`}>{t.state}</span>
                  <span className="cm-item-site">{t.site}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="cm-list-note">
          None of this reaches you. {THREADS.filter((t) => t.clientAction).length} of these four
          needed a line back — it was emailed, and it is above.
        </p>
      </div>

      <div className="cm-read">
        <header className="cm-read-head">
          <div className="cm-read-headmain">
            <h3 className="cm-read-subject">{thread.subject}</h3>
            <p className="cm-read-meta">
              <span className="mono">{thread.id}</span> · {thread.provider} · {thread.site}
            </p>
          </div>
          <span className={`pill is-${thread.tone}`}>{thread.state}</span>
        </header>
        <p className="cm-read-sum">{thread.summary}</p>
        <ol className="cmms">
          {thread.messages.map((m, i) => <Message key={i} m={m} />)}
        </ol>
        <div className="cm-actions">
          <span className="cm-act is-primary">Reply</span>
          <span className="cm-act">Escalate</span>
          <span className="cm-act">Attach to job</span>
          <span className="mono cm-act-note">Sent and received by Kiwi on your behalf</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- invoicing ---
   Kiwi is the only compliance supplier on the customer's purchase ledger.
   Provider invoices arrive here, are checked line by line against the quote
   and the evidence, and what survives is raised as one itemised statement.
   The customer pays us; we settle with all nineteen providers behind it.
   Approval and payment dates are columns, not footnotes, because those are
   the two facts a finance team asks for first. */

function MoneyStrip() {
  return (
    <div className="mflow">
      <div className="mflow-node">
        <span className="mflow-node-t">Your providers</span>
        <span className="mflow-node-s">{MONEY.providersPaid} specialist firms</span>
      </div>
      <div className="mflow-gap">
        <span className="mflow-arrow is-doc">{MONEY.received} invoices in <i aria-hidden="true">→</i></span>
        <span className="mflow-arrow is-cash"><i aria-hidden="true">←</i> {MONEY.providersPaid} providers paid</span>
      </div>
      <div className="mflow-node is-kiwi">
        <span className="mflow-node-t">KIWI</span>
        <span className="mflow-node-s">checks, consolidates, settles</span>
      </div>
      <div className="mflow-gap">
        <span className="mflow-arrow is-doc">1 invoice out <i aria-hidden="true">→</i></span>
        <span className="mflow-arrow is-cash"><i aria-hidden="true">←</i> 1 payment</span>
      </div>
      <div className="mflow-node is-you">
        <span className="mflow-node-t">You</span>
        <span className="mflow-node-s">one supplier, one payment</span>
      </div>
    </div>
  );
}

function Invoicing() {
  const s = STATEMENT;
  return (
    <>
      <p className="pf-lede muted">
        You pay Kiwi one flat fee per covered asset for the state. Your specialists&rsquo; work passes
        through at the rate you agreed, on one statement, checked against the quote and the evidence.
        We pay all {MONEY.providersPaid} of them at their rate and deduct nothing.
      </p>

      <MoneyStrip />

      {/* ---------------------------------------------- this month's bill */}
      <section className="pf-block">
        <h3 className="pf-block-title">Your statement</h3>
        <div className="st">
          <div className="st-head">
            <div>
              <p className="st-ref mono">{s.ref}</p>
              <p className="st-from">Invoice from Kiwi Compliance to</p>
              <p className="st-to">{s.to}</p>
              <p className="st-period">{s.period} · {s.lines} lines · {s.providers} providers · {s.po}</p>
            </div>
            <div className="st-money">
              <span className="mono st-gross">{s.gross}</span>
              <span className="st-split mono">{s.net} net · {s.vat} VAT</span>
              <span className={`pill is-${s.tone}`}>{s.state}</span>
            </div>
          </div>
          <dl className="st-dates">
            <div><dt>Raised</dt><dd className="mono">{s.raised}</dd></div>
            <div><dt>Approved</dt><dd className="mono">{s.approvedOn} · {s.approvedBy}</dd></div>
            <div><dt>Terms</dt><dd className="mono">{s.terms}</dd></div>
            <div><dt>Payment due</dt><dd className="mono">{s.due}</dd></div>
            <div className="is-fee"><dt>Kiwi fee · {MONEY.coveredAssets} assets</dt><dd className="mono">{MONEY.kiwiCharged}</dd></div>
          </dl>
        </div>
      </section>

      {/* -------------------------------------- claimed against billed */}
      <section className="pf-block">
        <h3 className="pf-block-title">Claimed by providers, against what you were asked to pay</h3>
        <table className="recon is-money">
          <tbody>
            {MONEY_RECON.rows.map((r) => (
              <tr key={r.label} className={r.tone ? `is-${r.tone}` : undefined}>
                <th scope="row">
                  <span className="recon-label">{r.label}</span>
                  {r.note && <span className="recon-note">{r.note}</span>}
                </th>
                <td className="mono recon-c">{r.count}</td>
                <td className="mono recon-v"><span className="recon-sign">{r.sign}</span>{r.value}</td>
              </tr>
            ))}
            <tr className="recon-total">
              <th scope="row">{MONEY_RECON.total.label}</th>
              <td className="mono recon-c">{MONEY_RECON.total.count}</td>
              <td className="mono recon-v">{MONEY_RECON.total.value}</td>
            </tr>
          </tbody>
        </table>
        <p className="st-stopped">
          <span className="mono st-stopped-n">{MONEY.stopped}</span> of the {MONEY.receivedValue}{' '}
          claimed this month was wrong. It never reached your ledger, and none of it was your
          team&rsquo;s to argue about.
        </p>
      </section>

      {/* ------------------------------------------------------- the lines */}
      <section className="pf-block">
        <h3 className="pf-block-title">Lines behind the {s.ref} statement</h3>
        <div className="pf-export">
          <span className="pf-export-n mono">{s.lines}</span>
          <span className="pf-export-l">lines · 7 shown</span>
          <span className="pf-export-btn">Export CSV</span>
          <span className="pf-export-btn">Export to Coupa</span>
          <span className="pf-export-btn">Download PDF</span>
        </div>
        <Table
          head={['Line', 'Provider', 'Work · asset', 'Quoted', 'Invoiced', 'Variance', 'Evidence', 'Provider paid']}
          min={980}
          tight
        >
          {STATEMENT_LINES.map((l) => (
            <tr key={l.ref}>
              <td className="mono pf-id">{l.ref}</td>
              <td>{l.provider}<span className="st-site">{l.site}</span></td>
              <td>
                {l.work}
                <span className="mono st-asset">{l.asset}</span>
                {l.note && <span className="st-note">{l.note}</span>}
              </td>
              <td className="mono st-num">{l.quoted}</td>
              <td className="mono st-num">{l.invoiced}</td>
              <td className={`mono st-num st-delta${l.deltaTone ? ` is-${l.deltaTone}` : ''}`}>{l.delta}</td>
              <td className="mono st-eviq">{l.evidence}</td>
              <td className="mono st-paid">{l.paid}</td>
            </tr>
          ))}
        </Table>
      </section>

      {/* ------------------------------------------------ what was stopped */}
      <section className="pf-block">
        <h3 className="pf-block-title">Held back — not on your statement</h3>
        <Table head={['Invoice', 'Provider', 'Work · asset', 'Claimed', 'Billed', 'State', 'Stopped because']} min={920} tight>
          {STATEMENT_HELD.map((h) => (
            <tr key={h.ref}>
              <td className="mono pf-id">{h.ref}</td>
              <td>{h.provider}<span className="st-site">{h.site}</span></td>
              <td>{h.work}<span className="mono st-asset">{h.asset}</span></td>
              <td className="mono st-num">{h.claimed}</td>
              <td className="mono st-num st-zero">{h.billed}</td>
              <td><span className={`pill is-${h.tone}`}>{h.state}</span></td>
              <td><span className="st-why">{h.reason}</span></td>
            </tr>
          ))}
        </Table>
        <ol className="inv-row">
          {PAY_CHECKS.map((c, i) => (
            <li key={c}><span className="inv-row-n mono">{i + 1}</span>{c}</li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------- payment history */}
      <section className="pf-block">
        <h3 className="pf-block-title">Statement history</h3>
        <Table head={['Statement', 'Period', 'Net', 'Raised', 'Approved', 'Paid', 'State']} min={820} tight>
          {STATEMENT_HISTORY.map((h) => (
            <tr key={h.ref}>
              <td className="mono pf-id">{h.ref}</td>
              <td>{h.period}</td>
              <td className="mono st-num">{h.net}</td>
              <td className="mono st-eviq">{h.raised}</td>
              <td className="mono st-eviq">{h.approved}</td>
              <td className="mono st-paid">{h.paid}</td>
              <td><Status tone={h.tone}>{h.state}</Status></td>
            </tr>
          ))}
        </Table>
      </section>

      <p className="inv-fee-line">
        <span className="mono inv-fee-n">{MONEY.kiwiCharged}</span>
        is the only line on this statement that is ours: a flat fee for {MONEY.coveredAssets} covered
        assets kept in date. Everything else is your specialists&rsquo; work at their rate. We take
        nothing from them, and nothing on what they find.
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

/* ------------------------------------------------------------- filing ---
   Evidence is a hierarchy, not a list: site, then asset, then the documents
   that belong to it. Shown as a column browser because that is how the
   people who ask for this evidence already navigate a filing system — walk
   down to the certificate, and the certificate knows its way back up. */

function Filing() {
  const [si, setSi] = useState(0);
  const [ai, setAi] = useState(0);
  const [di, setDi] = useState(0);
  const cols = useRef(null);

  /* On a narrow screen the columns scroll sideways, as they do in a real
     column browser. Walking down should carry the view with it. */
  const slide = (to) => {
    const el = cols.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({ left: to === 'end' ? el.scrollWidth : 0, behavior: 'smooth' });
  };

  const site = FILING[si];
  const asset = site.kids[ai] ?? site.kids[0];
  const doc = asset.kids[di] ?? asset.kids[0];

  const openSite = (i) => { setSi(i); setAi(0); setDi(0); slide('start'); };
  const openAsset = (i) => { setAi(i); setDi(0); };
  const openDoc = (i) => { setDi(i); slide('end'); };

  return (
    <div className="fx">
      <div className="fx-cols" ref={cols}>
        <div className="fx-col">
          <p className="fx-col-h">Sites<span className="mono fx-col-n">{FILING.length}</span></p>
          <ul>
            {FILING.map((s, i) => (
              <li key={s.id}>
                <button className={`fx-row${i === si ? ' is-on' : ''}`} onClick={() => openSite(i)}>
                  <span className={`fx-dot is-${s.tone}`} aria-hidden="true" />
                  <span className="fx-row-main">
                    <span className="fx-row-t">{s.name}</span>
                    <span className="fx-row-s">{s.meta}</span>
                  </span>
                  <span className="fx-chev" aria-hidden="true">›</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="fx-col">
          <p className="fx-col-h">Assets<span className="mono fx-col-n">{site.kids.length}</span></p>
          <ul>
            {site.kids.map((a, i) => (
              <li key={a.id}>
                <button className={`fx-row${i === ai ? ' is-on' : ''}`} onClick={() => openAsset(i)}>
                  <span className={`fx-dot is-${a.tone}`} aria-hidden="true" />
                  <span className="fx-row-main">
                    <span className="fx-row-t mono">{a.name}</span>
                    <span className="fx-row-s">{a.sub}</span>
                  </span>
                  <span className="fx-chev" aria-hidden="true">›</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="fx-col">
          <p className="fx-col-h">Documents<span className="mono fx-col-n">{asset.kids.length}</span></p>
          <ul>
            {asset.kids.map((d, i) => (
              <li key={d.id}>
                <button className={`fx-row${i === di ? ' is-on' : ''}`} onClick={() => openDoc(i)}>
                  <span className="fx-file" aria-hidden="true">▤</span>
                  <span className="fx-row-main">
                    <span className="fx-row-t">{d.name}</span>
                    <span className="fx-row-s">{d.kind} · {d.issued}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="fx-col is-preview">
          <p className="fx-col-h">Preview</p>
          <div className="fx-prev">
            <div className="fx-page" aria-hidden="true">
              <span className="fx-page-brand">{doc.kind.toUpperCase()}</span>
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="fx-page-line" style={{ '--w': `${96 - (i % 4) * 16}%` }} />
              ))}
              <span className="fx-page-seal" />
            </div>
            <h4 className="fx-prev-t">{doc.name}</h4>
            <p className="fx-prev-s">{doc.kind} · {doc.pages} pages · {doc.size}</p>
            <dl className="fx-facts">
              <div><dt>Asset</dt><dd className="mono">{asset.name}</dd></div>
              <div><dt>Site</dt><dd>{site.name}</dd></div>
              <div><dt>Issued</dt><dd className="mono">{doc.issued}</dd></div>
              <div><dt>Valid to</dt><dd className="mono">{doc.valid}</dd></div>
              <div><dt>Issued by</dt><dd>{doc.by}</dd></div>
              <div><dt>Signed</dt><dd>{doc.person}</dd></div>
              <div><dt>Their reference</dt><dd className="mono">{doc.ref}</dd></div>
            </dl>
            {doc.note && <p className={`fx-prev-note is-${doc.tone}`}>{doc.note}</p>}
            <p className="fx-prev-filed mono">{doc.filed}</p>
            <div className="fx-prev-btns">
              <span className="pf-export-btn">Open</span>
              <span className="pf-export-btn">Download</span>
              <span className="pf-export-btn">Add to pack</span>
            </div>
          </div>
        </div>
      </div>

      <p className="fx-path mono">
        <span>Estate</span><i aria-hidden="true">›</i>
        <span>{site.name}</span><i aria-hidden="true">›</i>
        <span>{asset.name}</span><i aria-hidden="true">›</i>
        <span className="is-leaf">{doc.name}.pdf</span>
        <span className="fx-path-r">{ESTATE.certificates.toLocaleString('en-GB')} documents · 0 unfiled</span>
      </p>
    </div>
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
              {view === 'Work' && !caseOpen && (
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

              {view === 'Work' && caseOpen && <CaseFile onBack={() => setCaseOpen(false)} />}

              {/* --------------------------------------------------- comms */}
              {view === 'Comms' && <Comms open={thread} setOpen={setThread} />}

              {/* ----------------------------------------------- invoicing */}
              {view === 'Invoicing' && <Invoicing />}


              {/* ----------------------------------------------- documents */}
              {view === 'Documents' && (
                <>
                  <p className="pf-lede muted">
                    Every certificate, report and scheme filed against the asset it belongs to, and
                    reachable by walking down to it. Nothing is orphaned.
                  </p>
                  <Filing />
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
