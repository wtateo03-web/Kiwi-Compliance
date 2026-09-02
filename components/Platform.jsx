'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { useInView } from './hooks';
import {
  ESTATE, STATUS_SPLIT, SITES, ASSETS, UPCOMING, JOBS,
  DOCUMENTS, PROVIDERS, CATEGORIES, ASSET_DETAIL, STAGES,
} from './platformData';

const NAV = ['Overview', 'Sites', 'Assets', 'Upcoming', 'Jobs', 'Documents', 'Reports', 'Providers'];

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
              <p className="job-meta">
                <span className="mono">{j.ref}</span> · {j.site}
              </p>
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

export default function Platform() {
  const [view, setView] = useState('Overview');
  const [site, setSite] = useState(null);
  const [asset, setAsset] = useState(false);

  const go = (v) => { setView(v); setSite(null); setAsset(false); };

  return (
    <section className="section dark pf-section" id="platform">
      <FruitCorner where="platform" />
      <div className="container">
        <Reveal className="pf-head">
          <div>
            <p className="eyebrow">The platform</p>
            <h2 className="h2">One live view. Maintained by Kiwi.</h2>
          </div>
          <p className="lead muted pf-head-copy">
            See what&rsquo;s current, what&rsquo;s coming up, what has been booked, what needs action and
            where the evidence sits — without maintaining the system yourself.
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
          </nav>

          {/* ------------------------------------------------------- main */}
          <div className="pf-main">
            <header className="pf-top">
              <div>
                <p className="pf-greet">Good morning, Sarah</p>
                <p className="pf-crumb">
                  Estate compliance
                  {site && <> · <button className="pf-link" onClick={() => { setSite(null); setAsset(false); }}>Sites</button> · {site.name}</>}
                  {asset && <> · <button className="pf-link" onClick={() => setAsset(false)}>Assets</button> · {ASSET_DETAIL.id}</>}
                </p>
              </div>
              <span className="pf-avatar" aria-hidden="true">SW</span>
            </header>

            <div className="pf-body">
              {/* ------------------------------------------------ overview */}
              {view === 'Overview' && !site && (
                <>
                  <div className="pf-headline">
                    <span className="pf-headline-n mono">{pct(ESTATE.current)}%</span>
                    <span className="pf-headline-l">of assets current</span>
                  </div>

                  <div className="pf-cards">
                    {[
                      [ESTATE.assets.toLocaleString('en-GB'), 'Assets'],
                      [ESTATE.sites, 'Sites'],
                      [ESTATE.due90, 'Due within 90 days'],
                      [ESTATE.actions, 'Actions required'],
                    ].map(([n, l]) => (
                      <div key={l} className="pf-card">
                        <span className="pf-card-n mono">{n}</span>
                        <span className="pf-card-l">{l}</span>
                      </div>
                    ))}
                  </div>

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

              {site && (
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

              {/* -------------------------------------------------- assets */}
              {view === 'Assets' && !asset && (
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
              )}

              {asset && (
                <>
                  <button className="pf-back" onClick={() => setAsset(false)}>← All assets</button>
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
              )}

              {/* ------------------------------------------------ upcoming */}
              {view === 'Upcoming' && (
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
              )}

              {/* ---------------------------------------------------- jobs */}
              {view === 'Jobs' && (
                <>
                  <p className="pf-lede muted">
                    Every requirement travels the same route. We move it along; you watch it move.
                  </p>
                  <JobList jobs={JOBS} />
                </>
              )}

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

              {/* ------------------------------------------------- reports */}
              {view === 'Reports' && (
                <>
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

              {/* ----------------------------------------------- providers */}
              {view === 'Providers' && (
                <Table head={['Provider', 'Field', 'Sites covered', 'Open jobs']} min={560}>
                  {PROVIDERS.map((p) => (
                    <tr key={p.name}>
                      <td>{p.name}</td>
                      <td>{p.field}</td>
                      <td className="mono">{p.sites}</td>
                      <td className="mono">{p.open}</td>
                    </tr>
                  ))}
                </Table>
              )}
            </div>
          </div>
        </Reveal>

        </div>

        <p className="pf-note">Illustrative interface. Sites, assets and dates are examples, not customer records.</p>
      </div>
    </section>
  );
}
